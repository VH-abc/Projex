// Enhanced AI with Virtual Connections and Shortest Path Heuristic

(function() {
    'use strict';

    let gameData = null;
    let useEnhancedAI = false;

    function ensureGameData() {
        if (!gameData && window.getGameData) {
            gameData = window.getGameData();
        }
        return gameData;
    }

    // Simple hash function for deterministic tile selection
    function hashIndex(idx) {
        return ((idx * 2654435761) >>> 0) % 0xFFFFFFFF;
    }

    // Select K reference tiles from player's owned tiles at search start
    function selectReferenceTiles(state, player, k = 5) {
        const owned = [];
        for (let i = 0; i < state.length; i++) {
            if (state[i] === player) owned.push(i);
        }
        if (owned.length === 0) return [];
        // Sort by hash for deterministic pseudorandom selection
        owned.sort((a, b) => hashIndex(a) - hashIndex(b));
        return owned.slice(0, Math.min(k, owned.length));
    }

    // Union-Find data structure
    class UnionFind {
        constructor(n) {
            this.parent = new Array(n);
            this.rank = new Array(n);
            for (let i = 0; i < n; i++) {
                this.parent[i] = i;
                this.rank[i] = 0;
            }
        }

        find(x) {
            if (this.parent[x] !== x) {
                this.parent[x] = this.find(this.parent[x]);
            }
            return this.parent[x];
        }

        union(x, y) {
            const px = this.find(x), py = this.find(y);
            if (px === py) return;
            if (this.rank[px] < this.rank[py]) {
                this.parent[px] = py;
            } else if (this.rank[px] > this.rank[py]) {
                this.parent[py] = px;
            } else {
                this.parent[py] = px;
                this.rank[px]++;
            }
        }

        connected(x, y) {
            return this.find(x) === this.find(y);
        }
    }

    // Find bridge patterns: two same-colored tiles sharing exactly 2 common empty neighbors
    // Find bridge patterns: returns [{tiles: [i,j], emptyCells: [e1,e2]}]
    function findBridges(state, player) {
        const gd = ensureGameData();
        if (!gd) return [];
        const bridges = [];
        const n = state.length;

        for (let i = 0; i < n; i++) {
            if (state[i] !== player) continue;
            for (let j = i + 1; j < n; j++) {
                if (state[j] !== player) continue;
                // Check if i and j share exactly 2 common empty neighbors
                const neighborsI = new Set(gd.Ve[i]);
                const neighborsJ = gd.Ve[j];
                let commonEmpty = [];
                for (const nb of neighborsJ) {
                    if (neighborsI.has(nb) && state[nb] === 0) {
                        commonEmpty.push(nb);
                    }
                }
                if (commonEmpty.length === 2) {
                    bridges.push({ tiles: [i, j], emptyCells: commonEmpty });
                }
            }
        }
        return bridges;
    }

    // Greedy selection of non-conflicting bridges (no shared empty cells)
    function selectNonConflictingBridges(bridges) {
        const selected = [];
        const usedCells = new Set();

        for (const bridge of bridges) {
            const [e1, e2] = bridge.emptyCells;
            // Check if either empty cell is already used by another bridge
            if (!usedCells.has(e1) && !usedCells.has(e2)) {
                selected.push(bridge);
                usedCells.add(e1);
                usedCells.add(e2);
            }
        }
        return selected;
    }

    // Get all empty cells that are part of a player's valid bridges
    function getBridgeEmptyCells(state, player) {
        const allBridges = findBridges(state, player);
        const validBridges = selectNonConflictingBridges(allBridges);
        const cells = new Set();
        for (const bridge of validBridges) {
            cells.add(bridge.emptyCells[0]);
            cells.add(bridge.emptyCells[1]);
        }
        return cells;
    }

    // Build connected groups with virtual connections (non-conflicting bridges only)
    function buildConnectedGroups(state, player) {
        const gd = ensureGameData();
        if (!gd) return null;
        const n = state.length;
        const uf = new UnionFind(n);

        // First, union directly adjacent same-colored tiles
        for (let i = 0; i < n; i++) {
            if (state[i] !== player) continue;
            for (const nb of gd.Ve[i]) {
                if (state[nb] === player) {
                    uf.union(i, nb);
                }
            }
        }

        // Then, union tiles connected by non-conflicting bridges
        const allBridges = findBridges(state, player);
        const validBridges = selectNonConflictingBridges(allBridges);
        for (const bridge of validBridges) {
            uf.union(bridge.tiles[0], bridge.tiles[1]);
        }

        return uf;
    }

    // Check win with virtual connections
    function checkWinWithVirtual(state, player) {
        const gd = ensureGameData();
        if (!gd) return false;
        const uf = buildConnectedGroups(state, player);
        if (!uf) return false;

        // Check if any tile is virtually connected to its antipodal
        for (let i = 0; i < state.length; i++) {
            if (state[i] !== player) continue;
            const opposite = gd.Re[i];
            if (state[opposite] === player && uf.connected(i, opposite)) {
                return true;
            }
        }
        return false;
    }

    // ============ ELECTRICAL RESISTANCE HEURISTIC ============

    // Get component information: which tiles belong to each component
    function getComponentInfo(state, player, uf) {
        const gd = ensureGameData();
        if (!gd) return { components: new Map(), hasWon: false };

        const components = new Map(); // root -> {tiles: [], antipodes: Set}
        
        for (let i = 0; i < state.length; i++) {
            if (state[i] !== player) continue;
            const root = uf.find(i);
            if (!components.has(root)) {
                components.set(root, { tiles: [], antipodes: new Set() });
            }
            components.get(root).tiles.push(i);
            components.get(root).antipodes.add(gd.Re[i]);
        }

        // Check if any component contains both a tile and its antipode
        for (const [root, info] of components) {
            for (const tile of info.tiles) {
                if (info.antipodes.has(tile)) {
                    // This component already won (tile connected to its antipode)
                    return { components, hasWon: true };
                }
            }
            // Remove antipodes that are in this component (already connected)
            for (const tile of info.tiles) {
                info.antipodes.delete(tile);
            }
        }

        return { components, hasWon: false };
    }

    // Solve resistance network using Gauss-Seidel iteration
    // Returns { resistance, potentials } where potentials[i] is voltage at empty cell i
    // blockedByVirtual: Set of empty cells that are part of opponent's virtual connections
    function solveResistanceNetwork(state, player, componentTiles, antipodeSet, blockedByVirtual = new Set()) {
        const gd = ensureGameData();
        if (!gd) return { resistance: Infinity, potentials: {} };

        const n = state.length;
        const opponent = player === 1 ? 2 : 1;
        
        // Build sets for source and target
        const sourceSet = new Set(componentTiles);
        const targetSet = antipodeSet;

        // Initialize potentials: source=1, target=0, empty cells start at 0.5
        const potential = new Array(n).fill(0);
        const isEmptyCell = new Array(n).fill(false);
        const emptyCells = [];

        for (let i = 0; i < n; i++) {
            if (sourceSet.has(i)) {
                potential[i] = 1.0;
            } else if (targetSet.has(i)) {
                potential[i] = 0.0;
            } else if (state[i] === opponent || blockedByVirtual.has(i)) {
                // Opponent cells AND opponent's virtual connection cells are blocked
                potential[i] = -1; // blocked
            } else if (state[i] === 0) {
                potential[i] = 0.5;
                isEmptyCell[i] = true;
                emptyCells.push(i);
            }
        }

        // Gauss-Seidel iteration
        const maxIter = 30;
        for (let iter = 0; iter < maxIter; iter++) {
            for (const i of emptyCells) {
                let sum = 0;
                let count = 0;
                for (const nb of gd.Ve[i]) {
                    if (potential[nb] >= 0) { // not blocked
                        sum += potential[nb];
                        count++;
                    }
                }
                if (count > 0) {
                    potential[i] = sum / count;
                }
            }
        }

        // Compute total current leaving source (resistance = 1/current)
        let totalCurrent = 0;
        for (const src of sourceSet) {
            for (const nb of gd.Ve[src]) {
                if (potential[nb] >= 0 && potential[nb] < 1.0) {
                    totalCurrent += (1.0 - potential[nb]); // conductance=1, so I = V_diff
                }
            }
        }

        const resistance = totalCurrent > 0.001 ? 1.0 / totalCurrent : Infinity;

        return { resistance, potentials: potential };
    }

    // Calculate current through each empty cell
    function calculateCurrents(state, potentials) {
        const gd = ensureGameData();
        if (!gd) return {};

        const currents = {};
        for (let i = 0; i < state.length; i++) {
            if (state[i] !== 0) continue;
            if (potentials[i] < 0) continue; // blocked
            
            let current = 0;
            for (const nb of gd.Ve[i]) {
                if (potentials[nb] >= 0) {
                    current += Math.abs(potentials[i] - potentials[nb]);
                }
            }
            currents[i] = current;
        }
        return currents;
    }

    // Compute minimum resistance for a player across all their components
    function computeMinResistance(state, player) {
        const uf = buildConnectedGroups(state, player);
        if (!uf) return { minResistance: Infinity, potentials: {}, currents: {} };

        const { components, hasWon } = getComponentInfo(state, player, uf);
        
        if (hasWon) {
            return { minResistance: 0, potentials: {}, currents: {} };
        }

        // Get opponent's virtual connection cells (treat as blocked)
        const opponent = player === 1 ? 2 : 1;
        const opponentBridgeCells = getBridgeEmptyCells(state, opponent);

        let minResistance = Infinity;
        let bestPotentials = {};

        for (const [root, info] of components) {
            if (info.antipodes.size === 0) continue; // no targets reachable
            
            const { resistance, potentials } = solveResistanceNetwork(
                state, player, info.tiles, info.antipodes, opponentBridgeCells
            );
            
            if (resistance < minResistance) {
                minResistance = resistance;
                bestPotentials = potentials;
            }
        }

        const currents = calculateCurrents(state, bestPotentials);
        return { minResistance, potentials: bestPotentials, currents };
    }

    // Electrical resistance evaluation
    function electricalEval(state) {
        // Check for wins first
        if (checkWinWithVirtual(state, 1)) return 1000;
        if (checkWinWithVirtual(state, 2)) return -1000;

        const red = computeMinResistance(state, 1);
        const blue = computeMinResistance(state, 2);

        // From Red's perspective: lower red resistance, higher blue resistance = better
        // Invert and subtract: score = blue_R - red_R (higher = better for red)
        const redR = red.minResistance === Infinity ? 100 : red.minResistance;
        const blueR = blue.minResistance === Infinity ? 100 : blue.minResistance;

        return blueR - redR;
    }

    // Get move priorities based on opponent's current (block their bottlenecks)
    function getMovePriorities(state, currentPlayer) {
        // Prioritize by opponent's current - block their critical paths
        const opponent = currentPlayer === 1 ? 2 : 1;
        const oppData = computeMinResistance(state, opponent);

        const priorities = [];
        for (let i = 0; i < state.length; i++) {
            if (state[i] !== 0) continue;
            const oppCurrent = oppData.currents[i] || 0;
            priorities.push({ move: i, importance: oppCurrent });
        }

        // Sort by importance descending (highest opponent current first)
        priorities.sort((a, b) => b.importance - a.importance);
        return priorities.map(p => p.move);
    }

    // Dijkstra shortest path from reference tiles to their antipodal opposites
    function dijkstraPathCost(state, player, refTiles) {
        const gd = ensureGameData();
        if (!gd || refTiles.length === 0) return Infinity;

        const n = state.length;
        let minCost = Infinity;

        for (const startTile of refTiles) {
            const target = gd.Re[startTile];
            const dist = new Array(n).fill(Infinity);
            const visited = new Array(n).fill(false);
            
            // Priority queue as simple array (ok for small graphs)
            const pq = [];
            dist[startTile] = 0;
            pq.push([0, startTile]);

            while (pq.length > 0) {
                pq.sort((a, b) => a[0] - b[0]);
                const [d, u] = pq.shift();
                
                if (visited[u]) continue;
                visited[u] = true;

                if (u === target) {
                    minCost = Math.min(minCost, d);
                    break;
                }

                for (const v of gd.Ve[u]) {
                    if (visited[v]) continue;
                    let cost;
                    if (state[v] === player) {
                        cost = 0;
                    } else if (state[v] === 0) {
                        cost = 1;
                    } else {
                        continue; // opponent blocks
                    }
                    const newDist = d + cost;
                    if (newDist < dist[v]) {
                        dist[v] = newDist;
                        pq.push([newDist, v]);
                    }
                }
            }
        }

        return minCost;
    }

    // Evaluate position: opponent's min path - player's min path
    function evaluatePosition(state, refTilesRed, refTilesBlue) {
        // Check for wins first
        if (checkWinWithVirtual(state, 1)) return 1000;  // Red wins
        if (checkWinWithVirtual(state, 2)) return -1000; // Blue wins

        const redCost = dijkstraPathCost(state, 1, refTilesRed);
        const blueCost = dijkstraPathCost(state, 2, refTilesBlue);

        // From Red's perspective: higher blue cost, lower red cost = better
        // Normalize to avoid infinity issues
        const redScore = redCost === Infinity ? 100 : redCost;
        const blueScore = blueCost === Infinity ? 100 : blueCost;

        return blueScore - redScore;
    }

    // Enhanced MCTS Node with prioritized expansion
    class MctsNodeEnhanced {
        constructor(move, parent, state, playerToMove, prioritizedMoves = null) {
            this.move = move;
            this.parent = parent;
            this.state = state;
            this.playerToMove = playerToMove;
            this.children = [];
            this.totalValue = 0;
            this.visits = 0;
            // Use prioritized moves if provided, otherwise fall back to random order
            this.untriedMoves = prioritizedMoves || window.getValidMoves(state);
        }

        ucb1(c = 1.414) {
            if (this.visits === 0) return Infinity;
            const avgValue = this.totalValue / this.visits;
            return avgValue + c * Math.sqrt(Math.log(this.parent.visits) / this.visits);
        }

        bestChild() {
            let best = null, bestScore = -Infinity;
            for (const child of this.children) {
                const score = child.ucb1();
                if (score > bestScore) {
                    bestScore = score;
                    best = child;
                }
            }
            return best;
        }

        expandPrioritized() {
            // Take the first untried move (already sorted by priority)
            const move = this.untriedMoves.shift();
            const newState = window.applyMove(this.state, move, this.playerToMove);
            const nextPlayer = this.playerToMove === 1 ? 2 : 1;
            // Get prioritized moves for child based on new state (prioritize blocking opponent)
            const childMoves = getMovePriorities(newState, nextPlayer);
            const child = new MctsNodeEnhanced(move, this, newState, nextPlayer, childMoves);
            this.children.push(child);
            return child;
        }

        expand() {
            const idx = Math.floor(Math.random() * this.untriedMoves.length);
            const move = this.untriedMoves.splice(idx, 1)[0];
            const newState = window.applyMove(this.state, move, this.playerToMove);
            const nextPlayer = this.playerToMove === 1 ? 2 : 1;
            const child = new MctsNodeEnhanced(move, this, newState, nextPlayer);
            this.children.push(child);
            return child;
        }
    }

    // Backpropagate with heuristic value
    function mctsBackpropEnhanced(node, value, aiPlayer) {
        while (node !== null) {
            node.visits++;
            // Value is from Red's perspective, adjust for AI player
            const adjustedValue = aiPlayer === 1 ? value : -value;
            node.totalValue += adjustedValue;
            node = node.parent;
        }
    }

    // Enhanced MCTS search with electrical resistance evaluation and prioritized expansion
    function mctsSearchEnhanced(iterations, aiPlayer) {
        const state = window.cloneState();
        
        // Get prioritized moves for root (prioritize blocking opponent's bottlenecks)
        const prioritizedMoves = getMovePriorities(state, aiPlayer);
        const root = new MctsNodeEnhanced(null, null, state, aiPlayer, prioritizedMoves);

        for (let i = 0; i < iterations; i++) {
            let node = root;

            // Selection
            while (node.untriedMoves.length === 0 && node.children.length > 0) {
                node = node.bestChild();
            }

            // Expansion with prioritized moves
            if (node.untriedMoves.length > 0) {
                node = node.expandPrioritized();
            }

            // Evaluation using electrical resistance
            const value = electricalEval(node.state);
            
            // Normalize value to [-1, 1] range for MCTS
            const normalizedValue = Math.max(-1, Math.min(1, value / 100));

            // Backpropagation
            mctsBackpropEnhanced(node, normalizedValue, aiPlayer);
        }

        // Select best move by visit count
        let bestMove = null, bestVisits = -1;
        for (const child of root.children) {
            if (child.visits > bestVisits) {
                bestVisits = child.visits;
                bestMove = child.move;
            }
        }
        return bestMove;
    }

    // Run enhanced AI
    window.runEnhancedAI = function() {
        if (!window.getGameData) return null;
        const gd = window.getGameData();
        const state = window.cloneState();
        const aiPlayer = 2; // Default to blue
        const iterations = window.getAISettings().mctsIter || 1000;
        return mctsSearchEnhanced(iterations, aiPlayer);
    };

    window.setEnhancedAI = function(enabled) {
        useEnhancedAI = enabled;
    };

    window.isEnhancedAI = function() {
        return useEnhancedAI;
    };

    window.mctsSearchEnhanced = mctsSearchEnhanced;

    // Expose current flow data for visualization
    window.getCurrentFlowData = function() {
        const state = window.cloneState();
        const red = computeMinResistance(state, 1);
        const blue = computeMinResistance(state, 2);
        
        // Find max current for normalization
        let maxCurrent = 0.001; // avoid division by zero
        for (const i in red.currents) {
            maxCurrent = Math.max(maxCurrent, red.currents[i]);
        }
        for (const i in blue.currents) {
            maxCurrent = Math.max(maxCurrent, blue.currents[i]);
        }
        
        // Combine currents (importance = red + blue current)
        const combined = {};
        for (let i = 0; i < state.length; i++) {
            if (state[i] === 0) {
                combined[i] = (red.currents[i] || 0) + (blue.currents[i] || 0);
            }
        }
        
        return {
            redCurrents: red.currents,
            blueCurrents: blue.currents,
            combined: combined,
            maxCurrent: maxCurrent,
            redResistance: red.minResistance,
            blueResistance: blue.minResistance
        };
    };

    // Time-limited MCTS for basic AI
    function mctsSearchTimed(timeLimitMs, aiPlayer) {
        const state = window.cloneState();
        const root = new MctsNodeEnhanced(null, null, state, aiPlayer);
        root.untriedMoves = window.getValidMoves(state);
        
        const startTime = performance.now();
        let iterations = 0;
        
        while (performance.now() - startTime < timeLimitMs) {
            let node = root;
            
            // Selection
            while (node.untriedMoves.length === 0 && node.children.length > 0) {
                node = node.bestChild();
            }
            
            // Expansion
            if (node.untriedMoves.length > 0) {
                const idx = Math.floor(Math.random() * node.untriedMoves.length);
                const move = node.untriedMoves.splice(idx, 1)[0];
                const newState = window.applyMove(node.state, move, node.playerToMove);
                const nextPlayer = node.playerToMove === 1 ? 2 : 1;
                const child = new MctsNodeEnhanced(move, node, newState, nextPlayer);
                child.untriedMoves = window.getValidMoves(newState);
                node.children.push(child);
                node = child;
            }
            
            // Simulation (random rollout for basic)
            let simState = node.state.slice();
            let player = node.playerToMove;
            let simMoves = window.getValidMoves(simState);
            while (simMoves.length > 0) {
                if (window.checkWinFast(simState, 1)) break;
                if (window.checkWinFast(simState, 2)) break;
                const move = simMoves[Math.floor(Math.random() * simMoves.length)];
                simState[move] = player;
                player = player === 1 ? 2 : 1;
                simMoves = window.getValidMoves(simState);
            }
            
            let winner = 0;
            if (window.checkWinFast(simState, 1)) winner = 1;
            else if (window.checkWinFast(simState, 2)) winner = 2;
            
            // Backprop
            let n = node;
            while (n !== null) {
                n.visits++;
                if (winner === aiPlayer) n.totalValue++;
                else if (winner !== 0) n.totalValue -= 0.5;
                n = n.parent;
            }
            
            iterations++;
        }
        
        let bestMove = null, bestVisits = -1;
        for (const child of root.children) {
            if (child.visits > bestVisits) {
                bestVisits = child.visits;
                bestMove = child.move;
            }
        }
        return { move: bestMove, iterations };
    }

    // Time-limited enhanced MCTS with electrical resistance
    function mctsSearchEnhancedTimed(timeLimitMs, aiPlayer) {
        const state = window.cloneState();
        
        // Get prioritized moves for root (prioritize blocking opponent's bottlenecks)
        const prioritizedMoves = getMovePriorities(state, aiPlayer);
        const root = new MctsNodeEnhanced(null, null, state, aiPlayer, prioritizedMoves);
        
        const startTime = performance.now();
        let iterations = 0;
        
        while (performance.now() - startTime < timeLimitMs) {
            let node = root;
            
            while (node.untriedMoves.length === 0 && node.children.length > 0) {
                node = node.bestChild();
            }
            
            if (node.untriedMoves.length > 0) {
                node = node.expandPrioritized();
            }
            
            const value = electricalEval(node.state);
            const normalizedValue = Math.max(-1, Math.min(1, value / 100));
            
            mctsBackpropEnhanced(node, normalizedValue, aiPlayer);
            iterations++;
        }
        
        let bestMove = null, bestVisits = -1;
        for (const child of root.children) {
            if (child.visits > bestVisits) {
                bestVisits = child.visits;
                bestMove = child.move;
            }
        }
        return { move: bestMove, iterations };
    }

    // Test harness to pit AIs against each other (time-matched)
    window.testAIs = function(numGames, callback) {
        const gd = window.getGameData();
        if (!gd) {
            console.error("Game data not available");
            return;
        }

        const results = {
            basicWins: 0,
            enhancedWins: 0,
            draws: 0,
            totalMoves: 0,
            basicTime: 0,
            enhancedTime: 0,
            basicIterations: 0,
            enhancedIterations: 0,
            games: []
        };

        // Time per move in milliseconds (derived from iteration slider as proxy)
        const settings = window.getAISettings();
        const timePerMoveMs = Math.max(50, Math.min(5000, settings.mctsIter / 10));
        
        function runGame(gameNum) {
            // Alternate who plays first
            const basicPlaysRed = gameNum % 2 === 0;
            const basicPlayer = basicPlaysRed ? 1 : 2;
            const enhancedPlayer = basicPlaysRed ? 2 : 1;

            // Initialize empty state
            let state = new Array(gd.tileCount).fill(0);
            let currentPlayer = 1;
            let moves = 0;
            let gameBasicTime = 0;
            let gameEnhancedTime = 0;
            let gameBasicIter = 0;
            let gameEnhancedIter = 0;

            // Temporarily override cloneState for the search functions
            const origCloneState = window.cloneState;
            window.cloneState = () => state.slice();

            while (true) {
                const validMoves = window.getValidMoves(state);
                if (validMoves.length === 0) {
                    results.draws++;
                    break;
                }

                let result;
                const isBasicTurn = currentPlayer === basicPlayer;
                const startTime = performance.now();

                if (isBasicTurn) {
                    result = mctsSearchTimed(timePerMoveMs, currentPlayer);
                    gameBasicTime += performance.now() - startTime;
                    gameBasicIter += result.iterations;
                } else {
                    result = mctsSearchEnhancedTimed(timePerMoveMs, currentPlayer);
                    gameEnhancedTime += performance.now() - startTime;
                    gameEnhancedIter += result.iterations;
                }

                if (result.move === null) {
                    results.draws++;
                    break;
                }

                state = window.applyMove(state, result.move, currentPlayer);
                moves++;

                if (window.checkWinFast(state, currentPlayer)) {
                    if (isBasicTurn) {
                        results.basicWins++;
                    } else {
                        results.enhancedWins++;
                    }
                    results.games.push({
                        gameNum,
                        winner: isBasicTurn ? 'basic' : 'enhanced',
                        moves,
                        basicTime: gameBasicTime,
                        enhancedTime: gameEnhancedTime,
                        basicIter: gameBasicIter,
                        enhancedIter: gameEnhancedIter
                    });
                    break;
                }

                currentPlayer = currentPlayer === 1 ? 2 : 1;
            }

            window.cloneState = origCloneState;

            results.totalMoves += moves;
            results.basicTime += gameBasicTime;
            results.enhancedTime += gameEnhancedTime;
            results.basicIterations += gameBasicIter;
            results.enhancedIterations += gameEnhancedIter;

            if (callback) {
                callback({
                    progress: gameNum + 1,
                    total: numGames,
                    results
                });
            }
        }

        let gameNum = 0;
        function runNextGame() {
            if (gameNum < numGames) {
                runGame(gameNum);
                gameNum++;
                setTimeout(runNextGame, 10);
            } else {
                const summary = {
                    ...results,
                    timePerMoveMs,
                    avgMoves: results.totalMoves / numGames,
                    avgBasicTime: results.basicTime / numGames,
                    avgEnhancedTime: results.enhancedTime / numGames,
                    avgBasicIter: Math.round(results.basicIterations / results.totalMoves * 2),
                    avgEnhancedIter: Math.round(results.enhancedIterations / results.totalMoves * 2),
                    basicWinRate: (results.basicWins / numGames * 100).toFixed(1) + '%',
                    enhancedWinRate: (results.enhancedWins / numGames * 100).toFixed(1) + '%'
                };
                console.log("Test Results:", summary);
                if (callback) {
                    callback({ done: true, results: summary });
                }
            }
        }

        runNextGame();
    };

    console.log("Enhanced AI loaded (Electrical Resistance Heuristic)");
})();

