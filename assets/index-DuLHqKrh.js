(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        n(s);
    new MutationObserver(s => {
        for (const r of s)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(s) {
        const r = {};
        return s.integrity && (r.integrity = s.integrity),
        s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? r.credentials = "include" : s.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const r = e(s);
        fetch(s.href, r)
    }
}
)();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ma = "178"
  , _n = {
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , _i = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}
  , $l = 0
  , ka = 1
  , Jl = 2
  , il = 1
  , Ql = 2
  , fn = 3
  , Pn = 0
  , Pe = 1
  , tn = 2
  , Rn = 0
  , vi = 1
  , Wa = 2
  , Xa = 3
  , qa = 4
  , tc = 5
  , Gn = 100
  , ec = 101
  , nc = 102
  , ic = 103
  , sc = 104
  , rc = 200
  , ac = 201
  , oc = 202
  , lc = 203
  , Lr = 204
  , Ur = 205
  , cc = 206
  , hc = 207
  , uc = 208
  , dc = 209
  , fc = 210
  , pc = 211
  , mc = 212
  , _c = 213
  , gc = 214
  , Ir = 0
  , Nr = 1
  , Fr = 2
  , Ei = 3
  , Or = 4
  , Br = 5
  , zr = 6
  , Hr = 7
  , Sa = 0
  , vc = 1
  , xc = 2
  , Cn = 0
  , Mc = 1
  , Sc = 2
  , Ec = 3
  , yc = 4
  , Tc = 5
  , bc = 6
  , Ac = 7
  , sl = 300
  , yi = 301
  , Ti = 302
  , Ns = 303
  , Vr = 304
  , Gs = 306
  , Gr = 1e3
  , Wn = 1001
  , kr = 1002
  , je = 1003
  , wc = 1004
  , ts = 1005
  , en = 1006
  , Ks = 1007
  , Xn = 1008
  , xn = 1009
  , rl = 1010
  , al = 1011
  , Hi = 1012
  , Ea = 1013
  , Yn = 1014
  , pn = 1015
  , Xi = 1016
  , ya = 1017
  , Ta = 1018
  , Vi = 1020
  , ol = 35902
  , ll = 1021
  , cl = 1022
  , Ye = 1023
  , Gi = 1026
  , ki = 1027
  , hl = 1028
  , ba = 1029
  , ul = 1030
  , Aa = 1031
  , wa = 1033
  , ws = 33776
  , Rs = 33777
  , Cs = 33778
  , Ps = 33779
  , Wr = 35840
  , Xr = 35841
  , qr = 35842
  , Yr = 35843
  , jr = 36196
  , Kr = 37492
  , Zr = 37496
  , $r = 37808
  , Jr = 37809
  , Qr = 37810
  , ta = 37811
  , ea = 37812
  , na = 37813
  , ia = 37814
  , sa = 37815
  , ra = 37816
  , aa = 37817
  , oa = 37818
  , la = 37819
  , ca = 37820
  , ha = 37821
  , Ds = 36492
  , ua = 36494
  , da = 36495
  , dl = 36283
  , fa = 36284
  , pa = 36285
  , ma = 36286
  , Rc = 3200
  , Cc = 3201
  , Ra = 0
  , Pc = 1
  , wn = ""
  , Ce = "srgb"
  , bi = "srgb-linear"
  , Fs = "linear"
  , jt = "srgb"
  , ei = 7680
  , Ya = 519
  , Dc = 512
  , Lc = 513
  , Uc = 514
  , fl = 515
  , Ic = 516
  , Nc = 517
  , Fc = 518
  , Oc = 519
  , ja = 35044
  , Ka = "300 es"
  , mn = 2e3
  , Os = 2001;
class Jn {
    addEventListener(t, e) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[t] === void 0 && (n[t] = []),
        n[t].indexOf(e) === -1 && n[t].push(e)
    }
    hasEventListener(t, e) {
        const n = this._listeners;
        return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1
    }
    removeEventListener(t, e) {
        const n = this._listeners;
        if (n === void 0)
            return;
        const s = n[t];
        if (s !== void 0) {
            const r = s.indexOf(e);
            r !== -1 && s.splice(r, 1)
        }
    }
    dispatchEvent(t) {
        const e = this._listeners;
        if (e === void 0)
            return;
        const n = e[t.type];
        if (n !== void 0) {
            t.target = this;
            const s = n.slice(0);
            for (let r = 0, a = s.length; r < a; r++)
                s[r].call(this, t);
            t.target = null
        }
    }
}
const _e = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
  , Ls = Math.PI / 180
  , _a = 180 / Math.PI;
function qi() {
    const i = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (_e[i & 255] + _e[i >> 8 & 255] + _e[i >> 16 & 255] + _e[i >> 24 & 255] + "-" + _e[t & 255] + _e[t >> 8 & 255] + "-" + _e[t >> 16 & 15 | 64] + _e[t >> 24 & 255] + "-" + _e[e & 63 | 128] + _e[e >> 8 & 255] + "-" + _e[e >> 16 & 255] + _e[e >> 24 & 255] + _e[n & 255] + _e[n >> 8 & 255] + _e[n >> 16 & 255] + _e[n >> 24 & 255]).toLowerCase()
}
function Bt(i, t, e) {
    return Math.max(t, Math.min(e, i))
}
function Bc(i, t) {
    return (i % t + t) % t
}
function Zs(i, t, e) {
    return (1 - e) * i + e * t
}
function Ci(i, t) {
    switch (t.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Ae(i, t) {
    switch (t.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
const zc = {
    DEG2RAD: Ls
};
class Ut {
    constructor(t=0, e=0) {
        Ut.prototype.isVector2 = !0,
        this.x = t,
        this.y = e
    }
    get width() {
        return this.x
    }
    set width(t) {
        this.x = t
    }
    get height() {
        return this.y
    }
    set height(t) {
        this.y = t
    }
    set(t, e) {
        return this.x = t,
        this.y = e,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    applyMatrix3(t) {
        const e = this.x
          , n = this.y
          , s = t.elements;
        return this.x = s[0] * e + s[3] * n + s[6],
        this.y = s[1] * e + s[4] * n + s[7],
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this
    }
    clamp(t, e) {
        return this.x = Bt(this.x, t.x, e.x),
        this.y = Bt(this.y, t.y, e.y),
        this
    }
    clampScalar(t, e) {
        return this.x = Bt(this.x, t, e),
        this.y = Bt(this.y, t, e),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Bt(n, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y
    }
    cross(t) {
        return this.x * t.y - this.y * t.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(Bt(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , n = this.y - t.y;
        return e * e + n * n
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this
    }
    rotateAround(t, e) {
        const n = Math.cos(e)
          , s = Math.sin(e)
          , r = this.x - t.x
          , a = this.y - t.y;
        return this.x = r * n - a * s + t.x,
        this.y = r * s + a * n + t.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class jn {
    constructor(t=0, e=0, n=0, s=1) {
        this.isQuaternion = !0,
        this._x = t,
        this._y = e,
        this._z = n,
        this._w = s
    }
    static slerpFlat(t, e, n, s, r, a, o) {
        let l = n[s + 0]
          , c = n[s + 1]
          , u = n[s + 2]
          , h = n[s + 3];
        const f = r[a + 0]
          , m = r[a + 1]
          , g = r[a + 2]
          , x = r[a + 3];
        if (o === 0) {
            t[e + 0] = l,
            t[e + 1] = c,
            t[e + 2] = u,
            t[e + 3] = h;
            return
        }
        if (o === 1) {
            t[e + 0] = f,
            t[e + 1] = m,
            t[e + 2] = g,
            t[e + 3] = x;
            return
        }
        if (h !== x || l !== f || c !== m || u !== g) {
            let p = 1 - o;
            const d = l * f + c * m + u * g + h * x
              , b = d >= 0 ? 1 : -1
              , T = 1 - d * d;
            if (T > Number.EPSILON) {
                const I = Math.sqrt(T)
                  , R = Math.atan2(I, d * b);
                p = Math.sin(p * R) / I,
                o = Math.sin(o * R) / I
            }
            const S = o * b;
            if (l = l * p + f * S,
            c = c * p + m * S,
            u = u * p + g * S,
            h = h * p + x * S,
            p === 1 - o) {
                const I = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
                l *= I,
                c *= I,
                u *= I,
                h *= I
            }
        }
        t[e] = l,
        t[e + 1] = c,
        t[e + 2] = u,
        t[e + 3] = h
    }
    static multiplyQuaternionsFlat(t, e, n, s, r, a) {
        const o = n[s]
          , l = n[s + 1]
          , c = n[s + 2]
          , u = n[s + 3]
          , h = r[a]
          , f = r[a + 1]
          , m = r[a + 2]
          , g = r[a + 3];
        return t[e] = o * g + u * h + l * m - c * f,
        t[e + 1] = l * g + u * f + c * h - o * m,
        t[e + 2] = c * g + u * m + o * f - l * h,
        t[e + 3] = u * g - o * h - l * f - c * m,
        t
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(t) {
        this._w = t,
        this._onChangeCallback()
    }
    set(t, e, n, s) {
        return this._x = t,
        this._y = e,
        this._z = n,
        this._w = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(t) {
        return this._x = t.x,
        this._y = t.y,
        this._z = t.z,
        this._w = t.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(t, e=!0) {
        const n = t._x
          , s = t._y
          , r = t._z
          , a = t._order
          , o = Math.cos
          , l = Math.sin
          , c = o(n / 2)
          , u = o(s / 2)
          , h = o(r / 2)
          , f = l(n / 2)
          , m = l(s / 2)
          , g = l(r / 2);
        switch (a) {
        case "XYZ":
            this._x = f * u * h + c * m * g,
            this._y = c * m * h - f * u * g,
            this._z = c * u * g + f * m * h,
            this._w = c * u * h - f * m * g;
            break;
        case "YXZ":
            this._x = f * u * h + c * m * g,
            this._y = c * m * h - f * u * g,
            this._z = c * u * g - f * m * h,
            this._w = c * u * h + f * m * g;
            break;
        case "ZXY":
            this._x = f * u * h - c * m * g,
            this._y = c * m * h + f * u * g,
            this._z = c * u * g + f * m * h,
            this._w = c * u * h - f * m * g;
            break;
        case "ZYX":
            this._x = f * u * h - c * m * g,
            this._y = c * m * h + f * u * g,
            this._z = c * u * g - f * m * h,
            this._w = c * u * h + f * m * g;
            break;
        case "YZX":
            this._x = f * u * h + c * m * g,
            this._y = c * m * h + f * u * g,
            this._z = c * u * g - f * m * h,
            this._w = c * u * h - f * m * g;
            break;
        case "XZY":
            this._x = f * u * h - c * m * g,
            this._y = c * m * h - f * u * g,
            this._z = c * u * g + f * m * h,
            this._w = c * u * h + f * m * g;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return e === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(t, e) {
        const n = e / 2
          , s = Math.sin(n);
        return this._x = t.x * s,
        this._y = t.y * s,
        this._z = t.z * s,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t) {
        const e = t.elements
          , n = e[0]
          , s = e[4]
          , r = e[8]
          , a = e[1]
          , o = e[5]
          , l = e[9]
          , c = e[2]
          , u = e[6]
          , h = e[10]
          , f = n + o + h;
        if (f > 0) {
            const m = .5 / Math.sqrt(f + 1);
            this._w = .25 / m,
            this._x = (u - l) * m,
            this._y = (r - c) * m,
            this._z = (a - s) * m
        } else if (n > o && n > h) {
            const m = 2 * Math.sqrt(1 + n - o - h);
            this._w = (u - l) / m,
            this._x = .25 * m,
            this._y = (s + a) / m,
            this._z = (r + c) / m
        } else if (o > h) {
            const m = 2 * Math.sqrt(1 + o - n - h);
            this._w = (r - c) / m,
            this._x = (s + a) / m,
            this._y = .25 * m,
            this._z = (l + u) / m
        } else {
            const m = 2 * Math.sqrt(1 + h - n - o);
            this._w = (a - s) / m,
            this._x = (r + c) / m,
            this._y = (l + u) / m,
            this._z = .25 * m
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(t, e) {
        let n = t.dot(e) + 1;
        return n < 1e-8 ? (n = 0,
        Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
        this._y = t.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -t.z,
        this._z = t.y,
        this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
        this._y = t.z * e.x - t.x * e.z,
        this._z = t.x * e.y - t.y * e.x,
        this._w = n),
        this.normalize()
    }
    angleTo(t) {
        return 2 * Math.acos(Math.abs(Bt(this.dot(t), -1, 1)))
    }
    rotateTowards(t, e) {
        const n = this.angleTo(t);
        if (n === 0)
            return this;
        const s = Math.min(1, e / n);
        return this.slerp(t, s),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(t) {
        return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let t = this.length();
        return t === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (t = 1 / t,
        this._x = this._x * t,
        this._y = this._y * t,
        this._z = this._z * t,
        this._w = this._w * t),
        this._onChangeCallback(),
        this
    }
    multiply(t) {
        return this.multiplyQuaternions(this, t)
    }
    premultiply(t) {
        return this.multiplyQuaternions(t, this)
    }
    multiplyQuaternions(t, e) {
        const n = t._x
          , s = t._y
          , r = t._z
          , a = t._w
          , o = e._x
          , l = e._y
          , c = e._z
          , u = e._w;
        return this._x = n * u + a * o + s * c - r * l,
        this._y = s * u + a * l + r * o - n * c,
        this._z = r * u + a * c + n * l - s * o,
        this._w = a * u - n * o - s * l - r * c,
        this._onChangeCallback(),
        this
    }
    slerp(t, e) {
        if (e === 0)
            return this;
        if (e === 1)
            return this.copy(t);
        const n = this._x
          , s = this._y
          , r = this._z
          , a = this._w;
        let o = a * t._w + n * t._x + s * t._y + r * t._z;
        if (o < 0 ? (this._w = -t._w,
        this._x = -t._x,
        this._y = -t._y,
        this._z = -t._z,
        o = -o) : this.copy(t),
        o >= 1)
            return this._w = a,
            this._x = n,
            this._y = s,
            this._z = r,
            this;
        const l = 1 - o * o;
        if (l <= Number.EPSILON) {
            const m = 1 - e;
            return this._w = m * a + e * this._w,
            this._x = m * n + e * this._x,
            this._y = m * s + e * this._y,
            this._z = m * r + e * this._z,
            this.normalize(),
            this
        }
        const c = Math.sqrt(l)
          , u = Math.atan2(c, o)
          , h = Math.sin((1 - e) * u) / c
          , f = Math.sin(e * u) / c;
        return this._w = a * h + this._w * f,
        this._x = n * h + this._x * f,
        this._y = s * h + this._y * f,
        this._z = r * h + this._z * f,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(t, e, n) {
        return this.copy(t).slerp(e, n)
    }
    random() {
        const t = 2 * Math.PI * Math.random()
          , e = 2 * Math.PI * Math.random()
          , n = Math.random()
          , s = Math.sqrt(1 - n)
          , r = Math.sqrt(n);
        return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e))
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
    }
    fromArray(t, e=0) {
        return this._x = t[e],
        this._y = t[e + 1],
        this._z = t[e + 2],
        this._w = t[e + 3],
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._w,
        t
    }
    fromBufferAttribute(t, e) {
        return this._x = t.getX(e),
        this._y = t.getY(e),
        this._z = t.getZ(e),
        this._w = t.getW(e),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class U {
    constructor(t=0, e=0, n=0) {
        U.prototype.isVector3 = !0,
        this.x = t,
        this.y = e,
        this.z = n
    }
    set(t, e, n) {
        return n === void 0 && (n = this.z),
        this.x = t,
        this.y = e,
        this.z = n,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this
    }
    multiplyVectors(t, e) {
        return this.x = t.x * e.x,
        this.y = t.y * e.y,
        this.z = t.z * e.z,
        this
    }
    applyEuler(t) {
        return this.applyQuaternion(Za.setFromEuler(t))
    }
    applyAxisAngle(t, e) {
        return this.applyQuaternion(Za.setFromAxisAngle(t, e))
    }
    applyMatrix3(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements;
        return this.x = r[0] * e + r[3] * n + r[6] * s,
        this.y = r[1] * e + r[4] * n + r[7] * s,
        this.z = r[2] * e + r[5] * n + r[8] * s,
        this
    }
    applyNormalMatrix(t) {
        return this.applyMatrix3(t).normalize()
    }
    applyMatrix4(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements
          , a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
        return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a,
        this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a,
        this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a,
        this
    }
    applyQuaternion(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.x
          , a = t.y
          , o = t.z
          , l = t.w
          , c = 2 * (a * s - o * n)
          , u = 2 * (o * e - r * s)
          , h = 2 * (r * n - a * e);
        return this.x = e + l * c + a * h - o * u,
        this.y = n + l * u + o * c - r * h,
        this.z = s + l * h + r * u - a * c,
        this
    }
    project(t) {
        return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
    }
    unproject(t) {
        return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
    }
    transformDirection(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = t.elements;
        return this.x = r[0] * e + r[4] * n + r[8] * s,
        this.y = r[1] * e + r[5] * n + r[9] * s,
        this.z = r[2] * e + r[6] * n + r[10] * s,
        this.normalize()
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this.z /= t.z,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this
    }
    clamp(t, e) {
        return this.x = Bt(this.x, t.x, e.x),
        this.y = Bt(this.y, t.y, e.y),
        this.z = Bt(this.z, t.z, e.z),
        this
    }
    clampScalar(t, e) {
        return this.x = Bt(this.x, t, e),
        this.y = Bt(this.y, t, e),
        this.z = Bt(this.z, t, e),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Bt(n, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this.z = t.z + (e.z - t.z) * n,
        this
    }
    cross(t) {
        return this.crossVectors(this, t)
    }
    crossVectors(t, e) {
        const n = t.x
          , s = t.y
          , r = t.z
          , a = e.x
          , o = e.y
          , l = e.z;
        return this.x = s * l - r * o,
        this.y = r * a - n * l,
        this.z = n * o - s * a,
        this
    }
    projectOnVector(t) {
        const e = t.lengthSq();
        if (e === 0)
            return this.set(0, 0, 0);
        const n = t.dot(this) / e;
        return this.copy(t).multiplyScalar(n)
    }
    projectOnPlane(t) {
        return $s.copy(this).projectOnVector(t),
        this.sub($s)
    }
    reflect(t) {
        return this.sub($s.copy(t).multiplyScalar(2 * this.dot(t)))
    }
    angleTo(t) {
        const e = Math.sqrt(this.lengthSq() * t.lengthSq());
        if (e === 0)
            return Math.PI / 2;
        const n = this.dot(t) / e;
        return Math.acos(Bt(n, -1, 1))
    }
    distanceTo(t) {
        return Math.sqrt(this.distanceToSquared(t))
    }
    distanceToSquared(t) {
        const e = this.x - t.x
          , n = this.y - t.y
          , s = this.z - t.z;
        return e * e + n * n + s * s
    }
    manhattanDistanceTo(t) {
        return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    }
    setFromSpherical(t) {
        return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
    }
    setFromSphericalCoords(t, e, n) {
        const s = Math.sin(e) * t;
        return this.x = s * Math.sin(n),
        this.y = Math.cos(e) * t,
        this.z = s * Math.cos(n),
        this
    }
    setFromCylindrical(t) {
        return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
    }
    setFromCylindricalCoords(t, e, n) {
        return this.x = t * Math.sin(e),
        this.y = n,
        this.z = t * Math.cos(e),
        this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12],
        this.y = e[13],
        this.z = e[14],
        this
    }
    setFromMatrixScale(t) {
        const e = this.setFromMatrixColumn(t, 0).length()
          , n = this.setFromMatrixColumn(t, 1).length()
          , s = this.setFromMatrixColumn(t, 2).length();
        return this.x = e,
        this.y = n,
        this.z = s,
        this
    }
    setFromMatrixColumn(t, e) {
        return this.fromArray(t.elements, e * 4)
    }
    setFromMatrix3Column(t, e) {
        return this.fromArray(t.elements, e * 3)
    }
    setFromEuler(t) {
        return this.x = t._x,
        this.y = t._y,
        this.z = t._z,
        this
    }
    setFromColor(t) {
        return this.x = t.r,
        this.y = t.g,
        this.z = t.b,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const t = Math.random() * Math.PI * 2
          , e = Math.random() * 2 - 1
          , n = Math.sqrt(1 - e * e);
        return this.x = n * Math.cos(t),
        this.y = e,
        this.z = n * Math.sin(t),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const $s = new U
  , Za = new jn;
class It {
    constructor(t, e, n, s, r, a, o, l, c) {
        It.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, n, s, r, a, o, l, c)
    }
    set(t, e, n, s, r, a, o, l, c) {
        const u = this.elements;
        return u[0] = t,
        u[1] = s,
        u[2] = o,
        u[3] = e,
        u[4] = r,
        u[5] = l,
        u[6] = n,
        u[7] = a,
        u[8] = c,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(t) {
        const e = this.elements
          , n = t.elements;
        return e[0] = n[0],
        e[1] = n[1],
        e[2] = n[2],
        e[3] = n[3],
        e[4] = n[4],
        e[5] = n[5],
        e[6] = n[6],
        e[7] = n[7],
        e[8] = n[8],
        this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(t) {
        const e = t.elements;
        return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements
          , s = e.elements
          , r = this.elements
          , a = n[0]
          , o = n[3]
          , l = n[6]
          , c = n[1]
          , u = n[4]
          , h = n[7]
          , f = n[2]
          , m = n[5]
          , g = n[8]
          , x = s[0]
          , p = s[3]
          , d = s[6]
          , b = s[1]
          , T = s[4]
          , S = s[7]
          , I = s[2]
          , R = s[5]
          , w = s[8];
        return r[0] = a * x + o * b + l * I,
        r[3] = a * p + o * T + l * R,
        r[6] = a * d + o * S + l * w,
        r[1] = c * x + u * b + h * I,
        r[4] = c * p + u * T + h * R,
        r[7] = c * d + u * S + h * w,
        r[2] = f * x + m * b + g * I,
        r[5] = f * p + m * T + g * R,
        r[8] = f * d + m * S + g * w,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[3] *= t,
        e[6] *= t,
        e[1] *= t,
        e[4] *= t,
        e[7] *= t,
        e[2] *= t,
        e[5] *= t,
        e[8] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , a = t[4]
          , o = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8];
        return e * a * u - e * o * c - n * r * u + n * o * l + s * r * c - s * a * l
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , a = t[4]
          , o = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8]
          , h = u * a - o * c
          , f = o * l - u * r
          , m = c * r - a * l
          , g = e * h + n * f + s * m;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const x = 1 / g;
        return t[0] = h * x,
        t[1] = (s * c - u * n) * x,
        t[2] = (o * n - s * a) * x,
        t[3] = f * x,
        t[4] = (u * e - s * l) * x,
        t[5] = (s * r - o * e) * x,
        t[6] = m * x,
        t[7] = (n * l - c * e) * x,
        t[8] = (a * e - n * r) * x,
        this
    }
    transpose() {
        let t;
        const e = this.elements;
        return t = e[1],
        e[1] = e[3],
        e[3] = t,
        t = e[2],
        e[2] = e[6],
        e[6] = t,
        t = e[5],
        e[5] = e[7],
        e[7] = t,
        this
    }
    getNormalMatrix(t) {
        return this.setFromMatrix4(t).invert().transpose()
    }
    transposeIntoArray(t) {
        const e = this.elements;
        return t[0] = e[0],
        t[1] = e[3],
        t[2] = e[6],
        t[3] = e[1],
        t[4] = e[4],
        t[5] = e[7],
        t[6] = e[2],
        t[7] = e[5],
        t[8] = e[8],
        this
    }
    setUvTransform(t, e, n, s, r, a, o) {
        const l = Math.cos(r)
          , c = Math.sin(r);
        return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -s * c, s * l, -s * (-c * a + l * o) + o + e, 0, 0, 1),
        this
    }
    scale(t, e) {
        return this.premultiply(Js.makeScale(t, e)),
        this
    }
    rotate(t) {
        return this.premultiply(Js.makeRotation(-t)),
        this
    }
    translate(t, e) {
        return this.premultiply(Js.makeTranslation(t, e)),
        this
    }
    makeTranslation(t, e) {
        return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
    }
    makeRotation(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, -n, 0, n, e, 0, 0, 0, 1),
        this
    }
    makeScale(t, e) {
        return this.set(t, 0, 0, 0, e, 0, 0, 0, 1),
        this
    }
    equals(t) {
        const e = this.elements
          , n = t.elements;
        for (let s = 0; s < 9; s++)
            if (e[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = t[n + e];
        return this
    }
    toArray(t=[], e=0) {
        const n = this.elements;
        return t[e] = n[0],
        t[e + 1] = n[1],
        t[e + 2] = n[2],
        t[e + 3] = n[3],
        t[e + 4] = n[4],
        t[e + 5] = n[5],
        t[e + 6] = n[6],
        t[e + 7] = n[7],
        t[e + 8] = n[8],
        t
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const Js = new It;
function pl(i) {
    for (let t = i.length - 1; t >= 0; --t)
        if (i[t] >= 65535)
            return !0;
    return !1
}
function Wi(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function Hc() {
    const i = Wi("canvas");
    return i.style.display = "block",
    i
}
const $a = {};
function xi(i) {
    i in $a || ($a[i] = !0,
    console.warn(i))
}
function Vc(i, t, e) {
    return new Promise(function(n, s) {
        function r() {
            switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case i.WAIT_FAILED:
                s();
                break;
            case i.TIMEOUT_EXPIRED:
                setTimeout(r, e);
                break;
            default:
                n()
            }
        }
        setTimeout(r, e)
    }
    )
}
function Gc(i) {
    const t = i.elements;
    t[2] = .5 * t[2] + .5 * t[3],
    t[6] = .5 * t[6] + .5 * t[7],
    t[10] = .5 * t[10] + .5 * t[11],
    t[14] = .5 * t[14] + .5 * t[15]
}
function kc(i) {
    const t = i.elements;
    t[11] === -1 ? (t[10] = -t[10] - 1,
    t[14] = -t[14]) : (t[10] = -t[10],
    t[14] = -t[14] + 1)
}
const Ja = new It().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , Qa = new It().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function Wc() {
    const i = {
        enabled: !0,
        workingColorSpace: bi,
        spaces: {},
        convert: function(s, r, a) {
            return this.enabled === !1 || r === a || !r || !a || (this.spaces[r].transfer === jt && (s.r = gn(s.r),
            s.g = gn(s.g),
            s.b = gn(s.b)),
            this.spaces[r].primaries !== this.spaces[a].primaries && (s.applyMatrix3(this.spaces[r].toXYZ),
            s.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === jt && (s.r = Mi(s.r),
            s.g = Mi(s.g),
            s.b = Mi(s.b))),
            s
        },
        workingToColorSpace: function(s, r) {
            return this.convert(s, this.workingColorSpace, r)
        },
        colorSpaceToWorking: function(s, r) {
            return this.convert(s, r, this.workingColorSpace)
        },
        getPrimaries: function(s) {
            return this.spaces[s].primaries
        },
        getTransfer: function(s) {
            return s === wn ? Fs : this.spaces[s].transfer
        },
        getLuminanceCoefficients: function(s, r=this.workingColorSpace) {
            return s.fromArray(this.spaces[r].luminanceCoefficients)
        },
        define: function(s) {
            Object.assign(this.spaces, s)
        },
        _getMatrix: function(s, r, a) {
            return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)
        },
        _getDrawingBufferColorSpace: function(s) {
            return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace
        },
        _getUnpackColorSpace: function(s=this.workingColorSpace) {
            return this.spaces[s].workingColorSpaceConfig.unpackColorSpace
        },
        fromWorkingColorSpace: function(s, r) {
            return xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),
            i.workingToColorSpace(s, r)
        },
        toWorkingColorSpace: function(s, r) {
            return xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),
            i.colorSpaceToWorking(s, r)
        }
    }
      , t = [.64, .33, .3, .6, .15, .06]
      , e = [.2126, .7152, .0722]
      , n = [.3127, .329];
    return i.define({
        [bi]: {
            primaries: t,
            whitePoint: n,
            transfer: Fs,
            toXYZ: Ja,
            fromXYZ: Qa,
            luminanceCoefficients: e,
            workingColorSpaceConfig: {
                unpackColorSpace: Ce
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Ce
            }
        },
        [Ce]: {
            primaries: t,
            whitePoint: n,
            transfer: jt,
            toXYZ: Ja,
            fromXYZ: Qa,
            luminanceCoefficients: e,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: Ce
            }
        }
    }),
    i
}
const Gt = Wc();
function gn(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function Mi(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
let ni;
class Xc {
    static getDataURL(t, e="image/png") {
        if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
            return t.src;
        let n;
        if (t instanceof HTMLCanvasElement)
            n = t;
        else {
            ni === void 0 && (ni = Wi("canvas")),
            ni.width = t.width,
            ni.height = t.height;
            const s = ni.getContext("2d");
            t instanceof ImageData ? s.putImageData(t, 0, 0) : s.drawImage(t, 0, 0, t.width, t.height),
            n = ni
        }
        return n.toDataURL(e)
    }
    static sRGBToLinear(t) {
        if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
            const e = Wi("canvas");
            e.width = t.width,
            e.height = t.height;
            const n = e.getContext("2d");
            n.drawImage(t, 0, 0, t.width, t.height);
            const s = n.getImageData(0, 0, t.width, t.height)
              , r = s.data;
            for (let a = 0; a < r.length; a++)
                r[a] = gn(r[a] / 255) * 255;
            return n.putImageData(s, 0, 0),
            e
        } else if (t.data) {
            const e = t.data.slice(0);
            for (let n = 0; n < e.length; n++)
                e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(gn(e[n] / 255) * 255) : e[n] = gn(e[n]);
            return {
                data: e,
                width: t.width,
                height: t.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            t
    }
}
let qc = 0;
class Ca {
    constructor(t=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: qc++
        }),
        this.uuid = qi(),
        this.data = t,
        this.dataReady = !0,
        this.version = 0
    }
    getSize(t) {
        const e = this.data;
        return e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight) : e !== null ? t.set(e.width, e.height, e.depth || 0) : t.set(0, 0, 0),
        t
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.images[this.uuid] !== void 0)
            return t.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , s = this.data;
        if (s !== null) {
            let r;
            if (Array.isArray(s)) {
                r = [];
                for (let a = 0, o = s.length; a < o; a++)
                    s[a].isDataTexture ? r.push(Qs(s[a].image)) : r.push(Qs(s[a]))
            } else
                r = Qs(s);
            n.url = r
        }
        return e || (t.images[this.uuid] = n),
        n
    }
}
function Qs(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Xc.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let Yc = 0;
const tr = new U;
class ye extends Jn {
    constructor(t=ye.DEFAULT_IMAGE, e=ye.DEFAULT_MAPPING, n=Wn, s=Wn, r=en, a=Xn, o=Ye, l=xn, c=ye.DEFAULT_ANISOTROPY, u=wn) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: Yc++
        }),
        this.uuid = qi(),
        this.name = "",
        this.source = new Ca(t),
        this.mipmaps = [],
        this.mapping = e,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = s,
        this.magFilter = r,
        this.minFilter = a,
        this.anisotropy = c,
        this.format = o,
        this.internalFormat = null,
        this.type = l,
        this.offset = new Ut(0,0),
        this.repeat = new Ut(1,1),
        this.center = new Ut(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new It,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = u,
        this.userData = {},
        this.updateRanges = [],
        this.version = 0,
        this.onUpdate = null,
        this.renderTarget = null,
        this.isRenderTargetTexture = !1,
        this.isArrayTexture = !!(t && t.depth && t.depth > 1),
        this.pmremVersion = 0
    }
    get width() {
        return this.source.getSize(tr).x
    }
    get height() {
        return this.source.getSize(tr).y
    }
    get depth() {
        return this.source.getSize(tr).z
    }
    get image() {
        return this.source.data
    }
    set image(t=null) {
        this.source.data = t
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    addUpdateRange(t, e) {
        this.updateRanges.push({
            start: t,
            count: e
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.name = t.name,
        this.source = t.source,
        this.mipmaps = t.mipmaps.slice(0),
        this.mapping = t.mapping,
        this.channel = t.channel,
        this.wrapS = t.wrapS,
        this.wrapT = t.wrapT,
        this.magFilter = t.magFilter,
        this.minFilter = t.minFilter,
        this.anisotropy = t.anisotropy,
        this.format = t.format,
        this.internalFormat = t.internalFormat,
        this.type = t.type,
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        this.rotation = t.rotation,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrix.copy(t.matrix),
        this.generateMipmaps = t.generateMipmaps,
        this.premultiplyAlpha = t.premultiplyAlpha,
        this.flipY = t.flipY,
        this.unpackAlignment = t.unpackAlignment,
        this.colorSpace = t.colorSpace,
        this.renderTarget = t.renderTarget,
        this.isRenderTargetTexture = t.isRenderTargetTexture,
        this.isArrayTexture = t.isArrayTexture,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this.needsUpdate = !0,
        this
    }
    setValues(t) {
        for (const e in t) {
            const n = t[e];
            if (n === void 0) {
                console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);
                continue
            }
            const s = this[e];
            if (s === void 0) {
                console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);
                continue
            }
            s && n && s.isVector2 && n.isVector2 || s && n && s.isVector3 && n.isVector3 || s && n && s.isMatrix3 && n.isMatrix3 ? s.copy(n) : this[e] = n
        }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        if (!e && t.textures[this.uuid] !== void 0)
            return t.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.7,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(t).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(t) {
        if (this.mapping !== sl)
            return t;
        if (t.applyMatrix3(this.matrix),
        t.x < 0 || t.x > 1)
            switch (this.wrapS) {
            case Gr:
                t.x = t.x - Math.floor(t.x);
                break;
            case Wn:
                t.x = t.x < 0 ? 0 : 1;
                break;
            case kr:
                Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
                break
            }
        if (t.y < 0 || t.y > 1)
            switch (this.wrapT) {
            case Gr:
                t.y = t.y - Math.floor(t.y);
                break;
            case Wn:
                t.y = t.y < 0 ? 0 : 1;
                break;
            case kr:
                Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
                break
            }
        return this.flipY && (t.y = 1 - t.y),
        t
    }
    set needsUpdate(t) {
        t === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(t) {
        t === !0 && this.pmremVersion++
    }
}
ye.DEFAULT_IMAGE = null;
ye.DEFAULT_MAPPING = sl;
ye.DEFAULT_ANISOTROPY = 1;
class le {
    constructor(t=0, e=0, n=0, s=1) {
        le.prototype.isVector4 = !0,
        this.x = t,
        this.y = e,
        this.z = n,
        this.w = s
    }
    get width() {
        return this.z
    }
    set width(t) {
        this.z = t
    }
    get height() {
        return this.w
    }
    set height(t) {
        this.w = t
    }
    set(t, e, n, s) {
        return this.x = t,
        this.y = e,
        this.z = n,
        this.w = s,
        this
    }
    setScalar(t) {
        return this.x = t,
        this.y = t,
        this.z = t,
        this.w = t,
        this
    }
    setX(t) {
        return this.x = t,
        this
    }
    setY(t) {
        return this.y = t,
        this
    }
    setZ(t) {
        return this.z = t,
        this
    }
    setW(t) {
        return this.w = t,
        this
    }
    setComponent(t, e) {
        switch (t) {
        case 0:
            this.x = e;
            break;
        case 1:
            this.y = e;
            break;
        case 2:
            this.z = e;
            break;
        case 3:
            this.w = e;
            break;
        default:
            throw new Error("index is out of range: " + t)
        }
        return this
    }
    getComponent(t) {
        switch (t) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + t)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(t) {
        return this.x = t.x,
        this.y = t.y,
        this.z = t.z,
        this.w = t.w !== void 0 ? t.w : 1,
        this
    }
    add(t) {
        return this.x += t.x,
        this.y += t.y,
        this.z += t.z,
        this.w += t.w,
        this
    }
    addScalar(t) {
        return this.x += t,
        this.y += t,
        this.z += t,
        this.w += t,
        this
    }
    addVectors(t, e) {
        return this.x = t.x + e.x,
        this.y = t.y + e.y,
        this.z = t.z + e.z,
        this.w = t.w + e.w,
        this
    }
    addScaledVector(t, e) {
        return this.x += t.x * e,
        this.y += t.y * e,
        this.z += t.z * e,
        this.w += t.w * e,
        this
    }
    sub(t) {
        return this.x -= t.x,
        this.y -= t.y,
        this.z -= t.z,
        this.w -= t.w,
        this
    }
    subScalar(t) {
        return this.x -= t,
        this.y -= t,
        this.z -= t,
        this.w -= t,
        this
    }
    subVectors(t, e) {
        return this.x = t.x - e.x,
        this.y = t.y - e.y,
        this.z = t.z - e.z,
        this.w = t.w - e.w,
        this
    }
    multiply(t) {
        return this.x *= t.x,
        this.y *= t.y,
        this.z *= t.z,
        this.w *= t.w,
        this
    }
    multiplyScalar(t) {
        return this.x *= t,
        this.y *= t,
        this.z *= t,
        this.w *= t,
        this
    }
    applyMatrix4(t) {
        const e = this.x
          , n = this.y
          , s = this.z
          , r = this.w
          , a = t.elements;
        return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r,
        this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r,
        this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r,
        this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r,
        this
    }
    divide(t) {
        return this.x /= t.x,
        this.y /= t.y,
        this.z /= t.z,
        this.w /= t.w,
        this
    }
    divideScalar(t) {
        return this.multiplyScalar(1 / t)
    }
    setAxisAngleFromQuaternion(t) {
        this.w = 2 * Math.acos(t.w);
        const e = Math.sqrt(1 - t.w * t.w);
        return e < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = t.x / e,
        this.y = t.y / e,
        this.z = t.z / e),
        this
    }
    setAxisAngleFromRotationMatrix(t) {
        let e, n, s, r;
        const l = t.elements
          , c = l[0]
          , u = l[4]
          , h = l[8]
          , f = l[1]
          , m = l[5]
          , g = l[9]
          , x = l[2]
          , p = l[6]
          , d = l[10];
        if (Math.abs(u - f) < .01 && Math.abs(h - x) < .01 && Math.abs(g - p) < .01) {
            if (Math.abs(u + f) < .1 && Math.abs(h + x) < .1 && Math.abs(g + p) < .1 && Math.abs(c + m + d - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            e = Math.PI;
            const T = (c + 1) / 2
              , S = (m + 1) / 2
              , I = (d + 1) / 2
              , R = (u + f) / 4
              , w = (h + x) / 4
              , N = (g + p) / 4;
            return T > S && T > I ? T < .01 ? (n = 0,
            s = .707106781,
            r = .707106781) : (n = Math.sqrt(T),
            s = R / n,
            r = w / n) : S > I ? S < .01 ? (n = .707106781,
            s = 0,
            r = .707106781) : (s = Math.sqrt(S),
            n = R / s,
            r = N / s) : I < .01 ? (n = .707106781,
            s = .707106781,
            r = 0) : (r = Math.sqrt(I),
            n = w / r,
            s = N / r),
            this.set(n, s, r, e),
            this
        }
        let b = Math.sqrt((p - g) * (p - g) + (h - x) * (h - x) + (f - u) * (f - u));
        return Math.abs(b) < .001 && (b = 1),
        this.x = (p - g) / b,
        this.y = (h - x) / b,
        this.z = (f - u) / b,
        this.w = Math.acos((c + m + d - 1) / 2),
        this
    }
    setFromMatrixPosition(t) {
        const e = t.elements;
        return this.x = e[12],
        this.y = e[13],
        this.z = e[14],
        this.w = e[15],
        this
    }
    min(t) {
        return this.x = Math.min(this.x, t.x),
        this.y = Math.min(this.y, t.y),
        this.z = Math.min(this.z, t.z),
        this.w = Math.min(this.w, t.w),
        this
    }
    max(t) {
        return this.x = Math.max(this.x, t.x),
        this.y = Math.max(this.y, t.y),
        this.z = Math.max(this.z, t.z),
        this.w = Math.max(this.w, t.w),
        this
    }
    clamp(t, e) {
        return this.x = Bt(this.x, t.x, e.x),
        this.y = Bt(this.y, t.y, e.y),
        this.z = Bt(this.z, t.z, e.z),
        this.w = Bt(this.w, t.w, e.w),
        this
    }
    clampScalar(t, e) {
        return this.x = Bt(this.x, t, e),
        this.y = Bt(this.y, t, e),
        this.z = Bt(this.z, t, e),
        this.w = Bt(this.w, t, e),
        this
    }
    clampLength(t, e) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Bt(n, t, e))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(t) {
        return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(t) {
        return this.normalize().multiplyScalar(t)
    }
    lerp(t, e) {
        return this.x += (t.x - this.x) * e,
        this.y += (t.y - this.y) * e,
        this.z += (t.z - this.z) * e,
        this.w += (t.w - this.w) * e,
        this
    }
    lerpVectors(t, e, n) {
        return this.x = t.x + (e.x - t.x) * n,
        this.y = t.y + (e.y - t.y) * n,
        this.z = t.z + (e.z - t.z) * n,
        this.w = t.w + (e.w - t.w) * n,
        this
    }
    equals(t) {
        return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
    }
    fromArray(t, e=0) {
        return this.x = t[e],
        this.y = t[e + 1],
        this.z = t[e + 2],
        this.w = t[e + 3],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.x,
        t[e + 1] = this.y,
        t[e + 2] = this.z,
        t[e + 3] = this.w,
        t
    }
    fromBufferAttribute(t, e) {
        return this.x = t.getX(e),
        this.y = t.getY(e),
        this.z = t.getZ(e),
        this.w = t.getW(e),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class jc extends Jn {
    constructor(t=1, e=1, n={}) {
        super(),
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: en,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1
        }, n),
        this.isRenderTarget = !0,
        this.width = t,
        this.height = e,
        this.depth = n.depth,
        this.scissor = new le(0,0,t,e),
        this.scissorTest = !1,
        this.viewport = new le(0,0,t,e);
        const s = {
            width: t,
            height: e,
            depth: n.depth
        }
          , r = new ye(s);
        this.textures = [];
        const a = n.count;
        for (let o = 0; o < a; o++)
            this.textures[o] = r.clone(),
            this.textures[o].isRenderTargetTexture = !0,
            this.textures[o].renderTarget = this;
        this._setTextureOptions(n),
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this._depthTexture = null,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples,
        this.multiview = n.multiview
    }
    _setTextureOptions(t={}) {
        const e = {
            minFilter: en,
            generateMipmaps: !1,
            flipY: !1,
            internalFormat: null
        };
        t.mapping !== void 0 && (e.mapping = t.mapping),
        t.wrapS !== void 0 && (e.wrapS = t.wrapS),
        t.wrapT !== void 0 && (e.wrapT = t.wrapT),
        t.wrapR !== void 0 && (e.wrapR = t.wrapR),
        t.magFilter !== void 0 && (e.magFilter = t.magFilter),
        t.minFilter !== void 0 && (e.minFilter = t.minFilter),
        t.format !== void 0 && (e.format = t.format),
        t.type !== void 0 && (e.type = t.type),
        t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy),
        t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace),
        t.flipY !== void 0 && (e.flipY = t.flipY),
        t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps),
        t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat);
        for (let n = 0; n < this.textures.length; n++)
            this.textures[n].setValues(e)
    }
    get texture() {
        return this.textures[0]
    }
    set texture(t) {
        this.textures[0] = t
    }
    set depthTexture(t) {
        this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        t !== null && (t.renderTarget = this),
        this._depthTexture = t
    }
    get depthTexture() {
        return this._depthTexture
    }
    setSize(t, e, n=1) {
        if (this.width !== t || this.height !== e || this.depth !== n) {
            this.width = t,
            this.height = e,
            this.depth = n;
            for (let s = 0, r = this.textures.length; s < r; s++)
                this.textures[s].image.width = t,
                this.textures[s].image.height = e,
                this.textures[s].image.depth = n,
                this.textures[s].isArrayTexture = this.textures[s].image.depth > 1;
            this.dispose()
        }
        this.viewport.set(0, 0, t, e),
        this.scissor.set(0, 0, t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.width = t.width,
        this.height = t.height,
        this.depth = t.depth,
        this.scissor.copy(t.scissor),
        this.scissorTest = t.scissorTest,
        this.viewport.copy(t.viewport),
        this.textures.length = 0;
        for (let e = 0, n = t.textures.length; e < n; e++) {
            this.textures[e] = t.textures[e].clone(),
            this.textures[e].isRenderTargetTexture = !0,
            this.textures[e].renderTarget = this;
            const s = Object.assign({}, t.textures[e].image);
            this.textures[e].source = new Ca(s)
        }
        return this.depthBuffer = t.depthBuffer,
        this.stencilBuffer = t.stencilBuffer,
        this.resolveDepthBuffer = t.resolveDepthBuffer,
        this.resolveStencilBuffer = t.resolveStencilBuffer,
        t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
        this.samples = t.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Kn extends jc {
    constructor(t=1, e=1, n={}) {
        super(t, e, n),
        this.isWebGLRenderTarget = !0
    }
}
class ml extends ye {
    constructor(t=null, e=1, n=1, s=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: s
        },
        this.magFilter = je,
        this.minFilter = je,
        this.wrapR = Wn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(t) {
        this.layerUpdates.add(t)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
class Kc extends ye {
    constructor(t=null, e=1, n=1, s=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: t,
            width: e,
            height: n,
            depth: s
        },
        this.magFilter = je,
        this.minFilter = je,
        this.wrapR = Wn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Yi {
    constructor(t=new U(1 / 0,1 / 0,1 / 0), e=new U(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = t,
        this.max = e
    }
    set(t, e) {
        return this.min.copy(t),
        this.max.copy(e),
        this
    }
    setFromArray(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e += 3)
            this.expandByPoint(ke.fromArray(t, e));
        return this
    }
    setFromBufferAttribute(t) {
        this.makeEmpty();
        for (let e = 0, n = t.count; e < n; e++)
            this.expandByPoint(ke.fromBufferAttribute(t, e));
        return this
    }
    setFromPoints(t) {
        this.makeEmpty();
        for (let e = 0, n = t.length; e < n; e++)
            this.expandByPoint(t[e]);
        return this
    }
    setFromCenterAndSize(t, e) {
        const n = ke.copy(e).multiplyScalar(.5);
        return this.min.copy(t).sub(n),
        this.max.copy(t).add(n),
        this
    }
    setFromObject(t, e=!1) {
        return this.makeEmpty(),
        this.expandByObject(t, e)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.min.copy(t.min),
        this.max.copy(t.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(t) {
        return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
    }
    expandByPoint(t) {
        return this.min.min(t),
        this.max.max(t),
        this
    }
    expandByVector(t) {
        return this.min.sub(t),
        this.max.add(t),
        this
    }
    expandByScalar(t) {
        return this.min.addScalar(-t),
        this.max.addScalar(t),
        this
    }
    expandByObject(t, e=!1) {
        t.updateWorldMatrix(!1, !1);
        const n = t.geometry;
        if (n !== void 0) {
            const r = n.getAttribute("position");
            if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
                for (let a = 0, o = r.count; a < o; a++)
                    t.isMesh === !0 ? t.getVertexPosition(a, ke) : ke.fromBufferAttribute(r, a),
                    ke.applyMatrix4(t.matrixWorld),
                    this.expandByPoint(ke);
            else
                t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(),
                es.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                es.copy(n.boundingBox)),
                es.applyMatrix4(t.matrixWorld),
                this.union(es)
        }
        const s = t.children;
        for (let r = 0, a = s.length; r < a; r++)
            this.expandByObject(s[r], e);
        return this
    }
    containsPoint(t) {
        return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z
    }
    containsBox(t) {
        return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
    }
    getParameter(t, e) {
        return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(t) {
        return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z
    }
    intersectsSphere(t) {
        return this.clampPoint(t.center, ke),
        ke.distanceToSquared(t.center) <= t.radius * t.radius
    }
    intersectsPlane(t) {
        let e, n;
        return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
        n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
        n = t.normal.x * this.min.x),
        t.normal.y > 0 ? (e += t.normal.y * this.min.y,
        n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
        n += t.normal.y * this.min.y),
        t.normal.z > 0 ? (e += t.normal.z * this.min.z,
        n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
        n += t.normal.z * this.min.z),
        e <= -t.constant && n >= -t.constant
    }
    intersectsTriangle(t) {
        if (this.isEmpty())
            return !1;
        this.getCenter(Pi),
        ns.subVectors(this.max, Pi),
        ii.subVectors(t.a, Pi),
        si.subVectors(t.b, Pi),
        ri.subVectors(t.c, Pi),
        Mn.subVectors(si, ii),
        Sn.subVectors(ri, si),
        Nn.subVectors(ii, ri);
        let e = [0, -Mn.z, Mn.y, 0, -Sn.z, Sn.y, 0, -Nn.z, Nn.y, Mn.z, 0, -Mn.x, Sn.z, 0, -Sn.x, Nn.z, 0, -Nn.x, -Mn.y, Mn.x, 0, -Sn.y, Sn.x, 0, -Nn.y, Nn.x, 0];
        return !er(e, ii, si, ri, ns) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !er(e, ii, si, ri, ns)) ? !1 : (is.crossVectors(Mn, Sn),
        e = [is.x, is.y, is.z],
        er(e, ii, si, ri, ns))
    }
    clampPoint(t, e) {
        return e.copy(t).clamp(this.min, this.max)
    }
    distanceToPoint(t) {
        return this.clampPoint(t, ke).distanceTo(t)
    }
    getBoundingSphere(t) {
        return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center),
        t.radius = this.getSize(ke).length() * .5),
        t
    }
    intersect(t) {
        return this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(t) {
        return this.min.min(t.min),
        this.max.max(t.max),
        this
    }
    applyMatrix4(t) {
        return this.isEmpty() ? this : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(on),
        this)
    }
    translate(t) {
        return this.min.add(t),
        this.max.add(t),
        this
    }
    equals(t) {
        return t.min.equals(this.min) && t.max.equals(this.max)
    }
    toJSON() {
        return {
            min: this.min.toArray(),
            max: this.max.toArray()
        }
    }
    fromJSON(t) {
        return this.min.fromArray(t.min),
        this.max.fromArray(t.max),
        this
    }
}
const on = [new U, new U, new U, new U, new U, new U, new U, new U]
  , ke = new U
  , es = new Yi
  , ii = new U
  , si = new U
  , ri = new U
  , Mn = new U
  , Sn = new U
  , Nn = new U
  , Pi = new U
  , ns = new U
  , is = new U
  , Fn = new U;
function er(i, t, e, n, s) {
    for (let r = 0, a = i.length - 3; r <= a; r += 3) {
        Fn.fromArray(i, r);
        const o = s.x * Math.abs(Fn.x) + s.y * Math.abs(Fn.y) + s.z * Math.abs(Fn.z)
          , l = t.dot(Fn)
          , c = e.dot(Fn)
          , u = n.dot(Fn);
        if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o)
            return !1
    }
    return !0
}
const Zc = new Yi
  , Di = new U
  , nr = new U;
class ji {
    constructor(t=new U, e=-1) {
        this.isSphere = !0,
        this.center = t,
        this.radius = e
    }
    set(t, e) {
        return this.center.copy(t),
        this.radius = e,
        this
    }
    setFromPoints(t, e) {
        const n = this.center;
        e !== void 0 ? n.copy(e) : Zc.setFromPoints(t).getCenter(n);
        let s = 0;
        for (let r = 0, a = t.length; r < a; r++)
            s = Math.max(s, n.distanceToSquared(t[r]));
        return this.radius = Math.sqrt(s),
        this
    }
    copy(t) {
        return this.center.copy(t.center),
        this.radius = t.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(t) {
        return t.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(t) {
        return t.distanceTo(this.center) - this.radius
    }
    intersectsSphere(t) {
        const e = this.radius + t.radius;
        return t.center.distanceToSquared(this.center) <= e * e
    }
    intersectsBox(t) {
        return t.intersectsSphere(this)
    }
    intersectsPlane(t) {
        return Math.abs(t.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(t, e) {
        const n = this.center.distanceToSquared(t);
        return e.copy(t),
        n > this.radius * this.radius && (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
        e
    }
    getBoundingBox(t) {
        return this.isEmpty() ? (t.makeEmpty(),
        t) : (t.set(this.center, this.center),
        t.expandByScalar(this.radius),
        t)
    }
    applyMatrix4(t) {
        return this.center.applyMatrix4(t),
        this.radius = this.radius * t.getMaxScaleOnAxis(),
        this
    }
    translate(t) {
        return this.center.add(t),
        this
    }
    expandByPoint(t) {
        if (this.isEmpty())
            return this.center.copy(t),
            this.radius = 0,
            this;
        Di.subVectors(t, this.center);
        const e = Di.lengthSq();
        if (e > this.radius * this.radius) {
            const n = Math.sqrt(e)
              , s = (n - this.radius) * .5;
            this.center.addScaledVector(Di, s / n),
            this.radius += s
        }
        return this
    }
    union(t) {
        return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t),
        this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (nr.subVectors(t.center, this.center).setLength(t.radius),
        this.expandByPoint(Di.copy(t.center).add(nr)),
        this.expandByPoint(Di.copy(t.center).sub(nr))),
        this)
    }
    equals(t) {
        return t.center.equals(this.center) && t.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        return {
            radius: this.radius,
            center: this.center.toArray()
        }
    }
    fromJSON(t) {
        return this.radius = t.radius,
        this.center.fromArray(t.center),
        this
    }
}
const ln = new U
  , ir = new U
  , ss = new U
  , En = new U
  , sr = new U
  , rs = new U
  , rr = new U;
class Ki {
    constructor(t=new U, e=new U(0,0,-1)) {
        this.origin = t,
        this.direction = e
    }
    set(t, e) {
        return this.origin.copy(t),
        this.direction.copy(e),
        this
    }
    copy(t) {
        return this.origin.copy(t.origin),
        this.direction.copy(t.direction),
        this
    }
    at(t, e) {
        return e.copy(this.origin).addScaledVector(this.direction, t)
    }
    lookAt(t) {
        return this.direction.copy(t).sub(this.origin).normalize(),
        this
    }
    recast(t) {
        return this.origin.copy(this.at(t, ln)),
        this
    }
    closestPointToPoint(t, e) {
        e.subVectors(t, this.origin);
        const n = e.dot(this.direction);
        return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(t) {
        return Math.sqrt(this.distanceSqToPoint(t))
    }
    distanceSqToPoint(t) {
        const e = ln.subVectors(t, this.origin).dot(this.direction);
        return e < 0 ? this.origin.distanceToSquared(t) : (ln.copy(this.origin).addScaledVector(this.direction, e),
        ln.distanceToSquared(t))
    }
    distanceSqToSegment(t, e, n, s) {
        ir.copy(t).add(e).multiplyScalar(.5),
        ss.copy(e).sub(t).normalize(),
        En.copy(this.origin).sub(ir);
        const r = t.distanceTo(e) * .5
          , a = -this.direction.dot(ss)
          , o = En.dot(this.direction)
          , l = -En.dot(ss)
          , c = En.lengthSq()
          , u = Math.abs(1 - a * a);
        let h, f, m, g;
        if (u > 0)
            if (h = a * l - o,
            f = a * o - l,
            g = r * u,
            h >= 0)
                if (f >= -g)
                    if (f <= g) {
                        const x = 1 / u;
                        h *= x,
                        f *= x,
                        m = h * (h + a * f + 2 * o) + f * (a * h + f + 2 * l) + c
                    } else
                        f = r,
                        h = Math.max(0, -(a * f + o)),
                        m = -h * h + f * (f + 2 * l) + c;
                else
                    f = -r,
                    h = Math.max(0, -(a * f + o)),
                    m = -h * h + f * (f + 2 * l) + c;
            else
                f <= -g ? (h = Math.max(0, -(-a * r + o)),
                f = h > 0 ? -r : Math.min(Math.max(-r, -l), r),
                m = -h * h + f * (f + 2 * l) + c) : f <= g ? (h = 0,
                f = Math.min(Math.max(-r, -l), r),
                m = f * (f + 2 * l) + c) : (h = Math.max(0, -(a * r + o)),
                f = h > 0 ? r : Math.min(Math.max(-r, -l), r),
                m = -h * h + f * (f + 2 * l) + c);
        else
            f = a > 0 ? -r : r,
            h = Math.max(0, -(a * f + o)),
            m = -h * h + f * (f + 2 * l) + c;
        return n && n.copy(this.origin).addScaledVector(this.direction, h),
        s && s.copy(ir).addScaledVector(ss, f),
        m
    }
    intersectSphere(t, e) {
        ln.subVectors(t.center, this.origin);
        const n = ln.dot(this.direction)
          , s = ln.dot(ln) - n * n
          , r = t.radius * t.radius;
        if (s > r)
            return null;
        const a = Math.sqrt(r - s)
          , o = n - a
          , l = n + a;
        return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e)
    }
    intersectsSphere(t) {
        return t.radius < 0 ? !1 : this.distanceSqToPoint(t.center) <= t.radius * t.radius
    }
    distanceToPlane(t) {
        const e = t.normal.dot(this.direction);
        if (e === 0)
            return t.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(t.normal) + t.constant) / e;
        return n >= 0 ? n : null
    }
    intersectPlane(t, e) {
        const n = this.distanceToPlane(t);
        return n === null ? null : this.at(n, e)
    }
    intersectsPlane(t) {
        const e = t.distanceToPoint(this.origin);
        return e === 0 || t.normal.dot(this.direction) * e < 0
    }
    intersectBox(t, e) {
        let n, s, r, a, o, l;
        const c = 1 / this.direction.x
          , u = 1 / this.direction.y
          , h = 1 / this.direction.z
          , f = this.origin;
        return c >= 0 ? (n = (t.min.x - f.x) * c,
        s = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c,
        s = (t.min.x - f.x) * c),
        u >= 0 ? (r = (t.min.y - f.y) * u,
        a = (t.max.y - f.y) * u) : (r = (t.max.y - f.y) * u,
        a = (t.min.y - f.y) * u),
        n > a || r > s || ((r > n || isNaN(n)) && (n = r),
        (a < s || isNaN(s)) && (s = a),
        h >= 0 ? (o = (t.min.z - f.z) * h,
        l = (t.max.z - f.z) * h) : (o = (t.max.z - f.z) * h,
        l = (t.min.z - f.z) * h),
        n > l || o > s) || ((o > n || n !== n) && (n = o),
        (l < s || s !== s) && (s = l),
        s < 0) ? null : this.at(n >= 0 ? n : s, e)
    }
    intersectsBox(t) {
        return this.intersectBox(t, ln) !== null
    }
    intersectTriangle(t, e, n, s, r) {
        sr.subVectors(e, t),
        rs.subVectors(n, t),
        rr.crossVectors(sr, rs);
        let a = this.direction.dot(rr), o;
        if (a > 0) {
            if (s)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        En.subVectors(this.origin, t);
        const l = o * this.direction.dot(rs.crossVectors(En, rs));
        if (l < 0)
            return null;
        const c = o * this.direction.dot(sr.cross(En));
        if (c < 0 || l + c > a)
            return null;
        const u = -o * En.dot(rr);
        return u < 0 ? null : this.at(u / a, r)
    }
    applyMatrix4(t) {
        return this.origin.applyMatrix4(t),
        this.direction.transformDirection(t),
        this
    }
    equals(t) {
        return t.origin.equals(this.origin) && t.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class ae {
    constructor(t, e, n, s, r, a, o, l, c, u, h, f, m, g, x, p) {
        ae.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        t !== void 0 && this.set(t, e, n, s, r, a, o, l, c, u, h, f, m, g, x, p)
    }
    set(t, e, n, s, r, a, o, l, c, u, h, f, m, g, x, p) {
        const d = this.elements;
        return d[0] = t,
        d[4] = e,
        d[8] = n,
        d[12] = s,
        d[1] = r,
        d[5] = a,
        d[9] = o,
        d[13] = l,
        d[2] = c,
        d[6] = u,
        d[10] = h,
        d[14] = f,
        d[3] = m,
        d[7] = g,
        d[11] = x,
        d[15] = p,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new ae().fromArray(this.elements)
    }
    copy(t) {
        const e = this.elements
          , n = t.elements;
        return e[0] = n[0],
        e[1] = n[1],
        e[2] = n[2],
        e[3] = n[3],
        e[4] = n[4],
        e[5] = n[5],
        e[6] = n[6],
        e[7] = n[7],
        e[8] = n[8],
        e[9] = n[9],
        e[10] = n[10],
        e[11] = n[11],
        e[12] = n[12],
        e[13] = n[13],
        e[14] = n[14],
        e[15] = n[15],
        this
    }
    copyPosition(t) {
        const e = this.elements
          , n = t.elements;
        return e[12] = n[12],
        e[13] = n[13],
        e[14] = n[14],
        this
    }
    setFromMatrix3(t) {
        const e = t.elements;
        return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(t, e, n) {
        return t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(t, e, n) {
        return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(t) {
        const e = this.elements
          , n = t.elements
          , s = 1 / ai.setFromMatrixColumn(t, 0).length()
          , r = 1 / ai.setFromMatrixColumn(t, 1).length()
          , a = 1 / ai.setFromMatrixColumn(t, 2).length();
        return e[0] = n[0] * s,
        e[1] = n[1] * s,
        e[2] = n[2] * s,
        e[3] = 0,
        e[4] = n[4] * r,
        e[5] = n[5] * r,
        e[6] = n[6] * r,
        e[7] = 0,
        e[8] = n[8] * a,
        e[9] = n[9] * a,
        e[10] = n[10] * a,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromEuler(t) {
        const e = this.elements
          , n = t.x
          , s = t.y
          , r = t.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , l = Math.cos(s)
          , c = Math.sin(s)
          , u = Math.cos(r)
          , h = Math.sin(r);
        if (t.order === "XYZ") {
            const f = a * u
              , m = a * h
              , g = o * u
              , x = o * h;
            e[0] = l * u,
            e[4] = -l * h,
            e[8] = c,
            e[1] = m + g * c,
            e[5] = f - x * c,
            e[9] = -o * l,
            e[2] = x - f * c,
            e[6] = g + m * c,
            e[10] = a * l
        } else if (t.order === "YXZ") {
            const f = l * u
              , m = l * h
              , g = c * u
              , x = c * h;
            e[0] = f + x * o,
            e[4] = g * o - m,
            e[8] = a * c,
            e[1] = a * h,
            e[5] = a * u,
            e[9] = -o,
            e[2] = m * o - g,
            e[6] = x + f * o,
            e[10] = a * l
        } else if (t.order === "ZXY") {
            const f = l * u
              , m = l * h
              , g = c * u
              , x = c * h;
            e[0] = f - x * o,
            e[4] = -a * h,
            e[8] = g + m * o,
            e[1] = m + g * o,
            e[5] = a * u,
            e[9] = x - f * o,
            e[2] = -a * c,
            e[6] = o,
            e[10] = a * l
        } else if (t.order === "ZYX") {
            const f = a * u
              , m = a * h
              , g = o * u
              , x = o * h;
            e[0] = l * u,
            e[4] = g * c - m,
            e[8] = f * c + x,
            e[1] = l * h,
            e[5] = x * c + f,
            e[9] = m * c - g,
            e[2] = -c,
            e[6] = o * l,
            e[10] = a * l
        } else if (t.order === "YZX") {
            const f = a * l
              , m = a * c
              , g = o * l
              , x = o * c;
            e[0] = l * u,
            e[4] = x - f * h,
            e[8] = g * h + m,
            e[1] = h,
            e[5] = a * u,
            e[9] = -o * u,
            e[2] = -c * u,
            e[6] = m * h + g,
            e[10] = f - x * h
        } else if (t.order === "XZY") {
            const f = a * l
              , m = a * c
              , g = o * l
              , x = o * c;
            e[0] = l * u,
            e[4] = -h,
            e[8] = c * u,
            e[1] = f * h + x,
            e[5] = a * u,
            e[9] = m * h - g,
            e[2] = g * h - m,
            e[6] = o * u,
            e[10] = x * h + f
        }
        return e[3] = 0,
        e[7] = 0,
        e[11] = 0,
        e[12] = 0,
        e[13] = 0,
        e[14] = 0,
        e[15] = 1,
        this
    }
    makeRotationFromQuaternion(t) {
        return this.compose($c, t, Jc)
    }
    lookAt(t, e, n) {
        const s = this.elements;
        return Ue.subVectors(t, e),
        Ue.lengthSq() === 0 && (Ue.z = 1),
        Ue.normalize(),
        yn.crossVectors(n, Ue),
        yn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ue.x += 1e-4 : Ue.z += 1e-4,
        Ue.normalize(),
        yn.crossVectors(n, Ue)),
        yn.normalize(),
        as.crossVectors(Ue, yn),
        s[0] = yn.x,
        s[4] = as.x,
        s[8] = Ue.x,
        s[1] = yn.y,
        s[5] = as.y,
        s[9] = Ue.y,
        s[2] = yn.z,
        s[6] = as.z,
        s[10] = Ue.z,
        this
    }
    multiply(t) {
        return this.multiplyMatrices(this, t)
    }
    premultiply(t) {
        return this.multiplyMatrices(t, this)
    }
    multiplyMatrices(t, e) {
        const n = t.elements
          , s = e.elements
          , r = this.elements
          , a = n[0]
          , o = n[4]
          , l = n[8]
          , c = n[12]
          , u = n[1]
          , h = n[5]
          , f = n[9]
          , m = n[13]
          , g = n[2]
          , x = n[6]
          , p = n[10]
          , d = n[14]
          , b = n[3]
          , T = n[7]
          , S = n[11]
          , I = n[15]
          , R = s[0]
          , w = s[4]
          , N = s[8]
          , E = s[12]
          , M = s[1]
          , P = s[5]
          , k = s[9]
          , z = s[13]
          , j = s[2]
          , K = s[6]
          , X = s[10]
          , $ = s[14]
          , H = s[3]
          , ot = s[7]
          , ut = s[11]
          , St = s[15];
        return r[0] = a * R + o * M + l * j + c * H,
        r[4] = a * w + o * P + l * K + c * ot,
        r[8] = a * N + o * k + l * X + c * ut,
        r[12] = a * E + o * z + l * $ + c * St,
        r[1] = u * R + h * M + f * j + m * H,
        r[5] = u * w + h * P + f * K + m * ot,
        r[9] = u * N + h * k + f * X + m * ut,
        r[13] = u * E + h * z + f * $ + m * St,
        r[2] = g * R + x * M + p * j + d * H,
        r[6] = g * w + x * P + p * K + d * ot,
        r[10] = g * N + x * k + p * X + d * ut,
        r[14] = g * E + x * z + p * $ + d * St,
        r[3] = b * R + T * M + S * j + I * H,
        r[7] = b * w + T * P + S * K + I * ot,
        r[11] = b * N + T * k + S * X + I * ut,
        r[15] = b * E + T * z + S * $ + I * St,
        this
    }
    multiplyScalar(t) {
        const e = this.elements;
        return e[0] *= t,
        e[4] *= t,
        e[8] *= t,
        e[12] *= t,
        e[1] *= t,
        e[5] *= t,
        e[9] *= t,
        e[13] *= t,
        e[2] *= t,
        e[6] *= t,
        e[10] *= t,
        e[14] *= t,
        e[3] *= t,
        e[7] *= t,
        e[11] *= t,
        e[15] *= t,
        this
    }
    determinant() {
        const t = this.elements
          , e = t[0]
          , n = t[4]
          , s = t[8]
          , r = t[12]
          , a = t[1]
          , o = t[5]
          , l = t[9]
          , c = t[13]
          , u = t[2]
          , h = t[6]
          , f = t[10]
          , m = t[14]
          , g = t[3]
          , x = t[7]
          , p = t[11]
          , d = t[15];
        return g * (+r * l * h - s * c * h - r * o * f + n * c * f + s * o * m - n * l * m) + x * (+e * l * m - e * c * f + r * a * f - s * a * m + s * c * u - r * l * u) + p * (+e * c * h - e * o * m - r * a * h + n * a * m + r * o * u - n * c * u) + d * (-s * o * u - e * l * h + e * o * f + s * a * h - n * a * f + n * l * u)
    }
    transpose() {
        const t = this.elements;
        let e;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    }
    setPosition(t, e, n) {
        const s = this.elements;
        return t.isVector3 ? (s[12] = t.x,
        s[13] = t.y,
        s[14] = t.z) : (s[12] = t,
        s[13] = e,
        s[14] = n),
        this
    }
    invert() {
        const t = this.elements
          , e = t[0]
          , n = t[1]
          , s = t[2]
          , r = t[3]
          , a = t[4]
          , o = t[5]
          , l = t[6]
          , c = t[7]
          , u = t[8]
          , h = t[9]
          , f = t[10]
          , m = t[11]
          , g = t[12]
          , x = t[13]
          , p = t[14]
          , d = t[15]
          , b = h * p * c - x * f * c + x * l * m - o * p * m - h * l * d + o * f * d
          , T = g * f * c - u * p * c - g * l * m + a * p * m + u * l * d - a * f * d
          , S = u * x * c - g * h * c + g * o * m - a * x * m - u * o * d + a * h * d
          , I = g * h * l - u * x * l - g * o * f + a * x * f + u * o * p - a * h * p
          , R = e * b + n * T + s * S + r * I;
        if (R === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const w = 1 / R;
        return t[0] = b * w,
        t[1] = (x * f * r - h * p * r - x * s * m + n * p * m + h * s * d - n * f * d) * w,
        t[2] = (o * p * r - x * l * r + x * s * c - n * p * c - o * s * d + n * l * d) * w,
        t[3] = (h * l * r - o * f * r - h * s * c + n * f * c + o * s * m - n * l * m) * w,
        t[4] = T * w,
        t[5] = (u * p * r - g * f * r + g * s * m - e * p * m - u * s * d + e * f * d) * w,
        t[6] = (g * l * r - a * p * r - g * s * c + e * p * c + a * s * d - e * l * d) * w,
        t[7] = (a * f * r - u * l * r + u * s * c - e * f * c - a * s * m + e * l * m) * w,
        t[8] = S * w,
        t[9] = (g * h * r - u * x * r - g * n * m + e * x * m + u * n * d - e * h * d) * w,
        t[10] = (a * x * r - g * o * r + g * n * c - e * x * c - a * n * d + e * o * d) * w,
        t[11] = (u * o * r - a * h * r - u * n * c + e * h * c + a * n * m - e * o * m) * w,
        t[12] = I * w,
        t[13] = (u * x * s - g * h * s + g * n * f - e * x * f - u * n * p + e * h * p) * w,
        t[14] = (g * o * s - a * x * s - g * n * l + e * x * l + a * n * p - e * o * p) * w,
        t[15] = (a * h * s - u * o * s + u * n * l - e * h * l - a * n * f + e * o * f) * w,
        this
    }
    scale(t) {
        const e = this.elements
          , n = t.x
          , s = t.y
          , r = t.z;
        return e[0] *= n,
        e[4] *= s,
        e[8] *= r,
        e[1] *= n,
        e[5] *= s,
        e[9] *= r,
        e[2] *= n,
        e[6] *= s,
        e[10] *= r,
        e[3] *= n,
        e[7] *= s,
        e[11] *= r,
        this
    }
    getMaxScaleOnAxis() {
        const t = this.elements
          , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
          , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
          , s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
        return Math.sqrt(Math.max(e, n, s))
    }
    makeTranslation(t, e, n) {
        return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(t) {
        const e = Math.cos(t)
          , n = Math.sin(t);
        return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(t, e) {
        const n = Math.cos(e)
          , s = Math.sin(e)
          , r = 1 - n
          , a = t.x
          , o = t.y
          , l = t.z
          , c = r * a
          , u = r * o;
        return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, u * o + n, u * l - s * a, 0, c * l - s * o, u * l + s * a, r * l * l + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(t, e, n) {
        return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(t, e, n, s, r, a) {
        return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(t, e, n) {
        const s = this.elements
          , r = e._x
          , a = e._y
          , o = e._z
          , l = e._w
          , c = r + r
          , u = a + a
          , h = o + o
          , f = r * c
          , m = r * u
          , g = r * h
          , x = a * u
          , p = a * h
          , d = o * h
          , b = l * c
          , T = l * u
          , S = l * h
          , I = n.x
          , R = n.y
          , w = n.z;
        return s[0] = (1 - (x + d)) * I,
        s[1] = (m + S) * I,
        s[2] = (g - T) * I,
        s[3] = 0,
        s[4] = (m - S) * R,
        s[5] = (1 - (f + d)) * R,
        s[6] = (p + b) * R,
        s[7] = 0,
        s[8] = (g + T) * w,
        s[9] = (p - b) * w,
        s[10] = (1 - (f + x)) * w,
        s[11] = 0,
        s[12] = t.x,
        s[13] = t.y,
        s[14] = t.z,
        s[15] = 1,
        this
    }
    decompose(t, e, n) {
        const s = this.elements;
        let r = ai.set(s[0], s[1], s[2]).length();
        const a = ai.set(s[4], s[5], s[6]).length()
          , o = ai.set(s[8], s[9], s[10]).length();
        this.determinant() < 0 && (r = -r),
        t.x = s[12],
        t.y = s[13],
        t.z = s[14],
        We.copy(this);
        const c = 1 / r
          , u = 1 / a
          , h = 1 / o;
        return We.elements[0] *= c,
        We.elements[1] *= c,
        We.elements[2] *= c,
        We.elements[4] *= u,
        We.elements[5] *= u,
        We.elements[6] *= u,
        We.elements[8] *= h,
        We.elements[9] *= h,
        We.elements[10] *= h,
        e.setFromRotationMatrix(We),
        n.x = r,
        n.y = a,
        n.z = o,
        this
    }
    makePerspective(t, e, n, s, r, a, o=mn) {
        const l = this.elements
          , c = 2 * r / (e - t)
          , u = 2 * r / (n - s)
          , h = (e + t) / (e - t)
          , f = (n + s) / (n - s);
        let m, g;
        if (o === mn)
            m = -(a + r) / (a - r),
            g = -2 * a * r / (a - r);
        else if (o === Os)
            m = -a / (a - r),
            g = -a * r / (a - r);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
        return l[0] = c,
        l[4] = 0,
        l[8] = h,
        l[12] = 0,
        l[1] = 0,
        l[5] = u,
        l[9] = f,
        l[13] = 0,
        l[2] = 0,
        l[6] = 0,
        l[10] = m,
        l[14] = g,
        l[3] = 0,
        l[7] = 0,
        l[11] = -1,
        l[15] = 0,
        this
    }
    makeOrthographic(t, e, n, s, r, a, o=mn) {
        const l = this.elements
          , c = 1 / (e - t)
          , u = 1 / (n - s)
          , h = 1 / (a - r)
          , f = (e + t) * c
          , m = (n + s) * u;
        let g, x;
        if (o === mn)
            g = (a + r) * h,
            x = -2 * h;
        else if (o === Os)
            g = r * h,
            x = -1 * h;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
        return l[0] = 2 * c,
        l[4] = 0,
        l[8] = 0,
        l[12] = -f,
        l[1] = 0,
        l[5] = 2 * u,
        l[9] = 0,
        l[13] = -m,
        l[2] = 0,
        l[6] = 0,
        l[10] = x,
        l[14] = -g,
        l[3] = 0,
        l[7] = 0,
        l[11] = 0,
        l[15] = 1,
        this
    }
    equals(t) {
        const e = this.elements
          , n = t.elements;
        for (let s = 0; s < 16; s++)
            if (e[s] !== n[s])
                return !1;
        return !0
    }
    fromArray(t, e=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = t[n + e];
        return this
    }
    toArray(t=[], e=0) {
        const n = this.elements;
        return t[e] = n[0],
        t[e + 1] = n[1],
        t[e + 2] = n[2],
        t[e + 3] = n[3],
        t[e + 4] = n[4],
        t[e + 5] = n[5],
        t[e + 6] = n[6],
        t[e + 7] = n[7],
        t[e + 8] = n[8],
        t[e + 9] = n[9],
        t[e + 10] = n[10],
        t[e + 11] = n[11],
        t[e + 12] = n[12],
        t[e + 13] = n[13],
        t[e + 14] = n[14],
        t[e + 15] = n[15],
        t
    }
}
const ai = new U
  , We = new ae
  , $c = new U(0,0,0)
  , Jc = new U(1,1,1)
  , yn = new U
  , as = new U
  , Ue = new U
  , to = new ae
  , eo = new jn;
class Ke {
    constructor(t=0, e=0, n=0, s=Ke.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = t,
        this._y = e,
        this._z = n,
        this._order = s
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x = t,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y = t,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(t) {
        this._z = t,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(t) {
        this._order = t,
        this._onChangeCallback()
    }
    set(t, e, n, s=this._order) {
        return this._x = t,
        this._y = e,
        this._z = n,
        this._order = s,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(t) {
        return this._x = t._x,
        this._y = t._y,
        this._z = t._z,
        this._order = t._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(t, e=this._order, n=!0) {
        const s = t.elements
          , r = s[0]
          , a = s[4]
          , o = s[8]
          , l = s[1]
          , c = s[5]
          , u = s[9]
          , h = s[2]
          , f = s[6]
          , m = s[10];
        switch (e) {
        case "XYZ":
            this._y = Math.asin(Bt(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-u, m),
            this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-Bt(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._y = Math.atan2(o, m),
            this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-h, r),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(Bt(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._y = Math.atan2(-h, m),
            this._z = Math.atan2(-a, c)) : (this._y = 0,
            this._z = Math.atan2(l, r));
            break;
        case "ZYX":
            this._y = Math.asin(-Bt(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._x = Math.atan2(f, m),
            this._z = Math.atan2(l, r)) : (this._x = 0,
            this._z = Math.atan2(-a, c));
            break;
        case "YZX":
            this._z = Math.asin(Bt(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-u, c),
            this._y = Math.atan2(-h, r)) : (this._x = 0,
            this._y = Math.atan2(o, m));
            break;
        case "XZY":
            this._z = Math.asin(-Bt(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, c),
            this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-u, m),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
        }
        return this._order = e,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(t, e, n) {
        return to.makeRotationFromQuaternion(t),
        this.setFromRotationMatrix(to, e, n)
    }
    setFromVector3(t, e=this._order) {
        return this.set(t.x, t.y, t.z, e)
    }
    reorder(t) {
        return eo.setFromEuler(this),
        this.setFromQuaternion(eo, t)
    }
    equals(t) {
        return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
    }
    fromArray(t) {
        return this._x = t[0],
        this._y = t[1],
        this._z = t[2],
        t[3] !== void 0 && (this._order = t[3]),
        this._onChangeCallback(),
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this._x,
        t[e + 1] = this._y,
        t[e + 2] = this._z,
        t[e + 3] = this._order,
        t
    }
    _onChange(t) {
        return this._onChangeCallback = t,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
Ke.DEFAULT_ORDER = "XYZ";
class Pa {
    constructor() {
        this.mask = 1
    }
    set(t) {
        this.mask = (1 << t | 0) >>> 0
    }
    enable(t) {
        this.mask |= 1 << t | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(t) {
        this.mask ^= 1 << t | 0
    }
    disable(t) {
        this.mask &= ~(1 << t | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(t) {
        return (this.mask & t.mask) !== 0
    }
    isEnabled(t) {
        return (this.mask & (1 << t | 0)) !== 0
    }
}
let Qc = 0;
const no = new U
  , oi = new jn
  , cn = new ae
  , os = new U
  , Li = new U
  , th = new U
  , eh = new jn
  , io = new U(1,0,0)
  , so = new U(0,1,0)
  , ro = new U(0,0,1)
  , ao = {
    type: "added"
}
  , nh = {
    type: "removed"
}
  , li = {
    type: "childadded",
    child: null
}
  , ar = {
    type: "childremoved",
    child: null
};
class ve extends Jn {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Qc++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = ve.DEFAULT_UP.clone();
        const t = new U
          , e = new Ke
          , n = new jn
          , s = new U(1,1,1);
        function r() {
            n.setFromEuler(e, !1)
        }
        function a() {
            e.setFromQuaternion(n, void 0, !1)
        }
        e._onChange(r),
        n._onChange(a),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: s
            },
            modelViewMatrix: {
                value: new ae
            },
            normalMatrix: {
                value: new It
            }
        }),
        this.matrix = new ae,
        this.matrixWorld = new ae,
        this.matrixAutoUpdate = ve.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new Pa,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.customDepthMaterial = void 0,
        this.customDistanceMaterial = void 0,
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(t) {
        return this.quaternion.premultiply(t),
        this
    }
    setRotationFromAxisAngle(t, e) {
        this.quaternion.setFromAxisAngle(t, e)
    }
    setRotationFromEuler(t) {
        this.quaternion.setFromEuler(t, !0)
    }
    setRotationFromMatrix(t) {
        this.quaternion.setFromRotationMatrix(t)
    }
    setRotationFromQuaternion(t) {
        this.quaternion.copy(t)
    }
    rotateOnAxis(t, e) {
        return oi.setFromAxisAngle(t, e),
        this.quaternion.multiply(oi),
        this
    }
    rotateOnWorldAxis(t, e) {
        return oi.setFromAxisAngle(t, e),
        this.quaternion.premultiply(oi),
        this
    }
    rotateX(t) {
        return this.rotateOnAxis(io, t)
    }
    rotateY(t) {
        return this.rotateOnAxis(so, t)
    }
    rotateZ(t) {
        return this.rotateOnAxis(ro, t)
    }
    translateOnAxis(t, e) {
        return no.copy(t).applyQuaternion(this.quaternion),
        this.position.add(no.multiplyScalar(e)),
        this
    }
    translateX(t) {
        return this.translateOnAxis(io, t)
    }
    translateY(t) {
        return this.translateOnAxis(so, t)
    }
    translateZ(t) {
        return this.translateOnAxis(ro, t)
    }
    localToWorld(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(t) {
        return this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(cn.copy(this.matrixWorld).invert())
    }
    lookAt(t, e, n) {
        t.isVector3 ? os.copy(t) : os.set(t, e, n);
        const s = this.parent;
        this.updateWorldMatrix(!0, !1),
        Li.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? cn.lookAt(Li, os, this.up) : cn.lookAt(os, Li, this.up),
        this.quaternion.setFromRotationMatrix(cn),
        s && (cn.extractRotation(s.matrixWorld),
        oi.setFromRotationMatrix(cn),
        this.quaternion.premultiply(oi.invert()))
    }
    add(t) {
        if (arguments.length > 1) {
            for (let e = 0; e < arguments.length; e++)
                this.add(arguments[e]);
            return this
        }
        return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
        this) : (t && t.isObject3D ? (t.removeFromParent(),
        t.parent = this,
        this.children.push(t),
        t.dispatchEvent(ao),
        li.child = t,
        this.dispatchEvent(li),
        li.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
        this)
    }
    remove(t) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const e = this.children.indexOf(t);
        return e !== -1 && (t.parent = null,
        this.children.splice(e, 1),
        t.dispatchEvent(nh),
        ar.child = t,
        this.dispatchEvent(ar),
        ar.child = null),
        this
    }
    removeFromParent() {
        const t = this.parent;
        return t !== null && t.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(t) {
        return this.updateWorldMatrix(!0, !1),
        cn.copy(this.matrixWorld).invert(),
        t.parent !== null && (t.parent.updateWorldMatrix(!0, !1),
        cn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(cn),
        t.removeFromParent(),
        t.parent = this,
        this.children.push(t),
        t.updateWorldMatrix(!1, !0),
        t.dispatchEvent(ao),
        li.child = t,
        this.dispatchEvent(li),
        li.child = null,
        this
    }
    getObjectById(t) {
        return this.getObjectByProperty("id", t)
    }
    getObjectByName(t) {
        return this.getObjectByProperty("name", t)
    }
    getObjectByProperty(t, e) {
        if (this[t] === e)
            return this;
        for (let n = 0, s = this.children.length; n < s; n++) {
            const a = this.children[n].getObjectByProperty(t, e);
            if (a !== void 0)
                return a
        }
    }
    getObjectsByProperty(t, e, n=[]) {
        this[t] === e && n.push(this);
        const s = this.children;
        for (let r = 0, a = s.length; r < a; r++)
            s[r].getObjectsByProperty(t, e, n);
        return n
    }
    getWorldPosition(t) {
        return this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Li, t, th),
        t
    }
    getWorldScale(t) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(Li, eh, t),
        t
    }
    getWorldDirection(t) {
        this.updateWorldMatrix(!0, !1);
        const e = this.matrixWorld.elements;
        return t.set(e[8], e[9], e[10]).normalize()
    }
    raycast() {}
    traverse(t) {
        t(this);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++)
            e[n].traverse(t)
    }
    traverseVisible(t) {
        if (this.visible === !1)
            return;
        t(this);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++)
            e[n].traverseVisible(t)
    }
    traverseAncestors(t) {
        const e = this.parent;
        e !== null && (t(e),
        e.traverseAncestors(t))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(t) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        t = !0);
        const e = this.children;
        for (let n = 0, s = e.length; n < s; n++)
            e[n].updateMatrixWorld(t)
    }
    updateWorldMatrix(t, e) {
        const n = this.parent;
        if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        e === !0) {
            const s = this.children;
            for (let r = 0, a = s.length; r < a; r++)
                s[r].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string"
          , n = {};
        e && (t = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.7,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const s = {};
        s.uuid = this.uuid,
        s.type = this.type,
        this.name !== "" && (s.name = this.name),
        this.castShadow === !0 && (s.castShadow = !0),
        this.receiveShadow === !0 && (s.receiveShadow = !0),
        this.visible === !1 && (s.visible = !1),
        this.frustumCulled === !1 && (s.frustumCulled = !1),
        this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (s.userData = this.userData),
        s.layers = this.layers.mask,
        s.matrix = this.matrix.toArray(),
        s.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
        this.isInstancedMesh && (s.type = "InstancedMesh",
        s.count = this.count,
        s.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (s.type = "BatchedMesh",
        s.perObjectFrustumCulled = this.perObjectFrustumCulled,
        s.sortObjects = this.sortObjects,
        s.drawRanges = this._drawRanges,
        s.reservedRanges = this._reservedRanges,
        s.geometryInfo = this._geometryInfo.map(o => ({
            ...o,
            boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
            boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0
        })),
        s.instanceInfo = this._instanceInfo.map(o => ({
            ...o
        })),
        s.availableInstanceIds = this._availableInstanceIds.slice(),
        s.availableGeometryIds = this._availableGeometryIds.slice(),
        s.nextIndexStart = this._nextIndexStart,
        s.nextVertexStart = this._nextVertexStart,
        s.geometryCount = this._geometryCount,
        s.maxInstanceCount = this._maxInstanceCount,
        s.maxVertexCount = this._maxVertexCount,
        s.maxIndexCount = this._maxIndexCount,
        s.geometryInitialized = this._geometryInitialized,
        s.matricesTexture = this._matricesTexture.toJSON(t),
        s.indirectTexture = this._indirectTexture.toJSON(t),
        this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null && (s.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null && (s.boundingBox = this.boundingBox.toJSON()));
        function r(o, l) {
            return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)),
            l.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (s.environment = this.environment.toJSON(t).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            s.geometry = r(t.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const l = o.shapes;
                if (Array.isArray(l))
                    for (let c = 0, u = l.length; c < u; c++) {
                        const h = l[c];
                        r(t.shapes, h)
                    }
                else
                    r(t.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (s.bindMode = this.bindMode,
        s.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (r(t.skeletons, this.skeleton),
        s.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const o = [];
                for (let l = 0, c = this.material.length; l < c; l++)
                    o.push(r(t.materials, this.material[l]));
                s.material = o
            } else
                s.material = r(t.materials, this.material);
        if (this.children.length > 0) {
            s.children = [];
            for (let o = 0; o < this.children.length; o++)
                s.children.push(this.children[o].toJSON(t).object)
        }
        if (this.animations.length > 0) {
            s.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const l = this.animations[o];
                s.animations.push(r(t.animations, l))
            }
        }
        if (e) {
            const o = a(t.geometries)
              , l = a(t.materials)
              , c = a(t.textures)
              , u = a(t.images)
              , h = a(t.shapes)
              , f = a(t.skeletons)
              , m = a(t.animations)
              , g = a(t.nodes);
            o.length > 0 && (n.geometries = o),
            l.length > 0 && (n.materials = l),
            c.length > 0 && (n.textures = c),
            u.length > 0 && (n.images = u),
            h.length > 0 && (n.shapes = h),
            f.length > 0 && (n.skeletons = f),
            m.length > 0 && (n.animations = m),
            g.length > 0 && (n.nodes = g)
        }
        return n.object = s,
        n;
        function a(o) {
            const l = [];
            for (const c in o) {
                const u = o[c];
                delete u.metadata,
                l.push(u)
            }
            return l
        }
    }
    clone(t) {
        return new this.constructor().copy(this, t)
    }
    copy(t, e=!0) {
        if (this.name = t.name,
        this.up.copy(t.up),
        this.position.copy(t.position),
        this.rotation.order = t.rotation.order,
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
        this.layers.mask = t.layers.mask,
        this.visible = t.visible,
        this.castShadow = t.castShadow,
        this.receiveShadow = t.receiveShadow,
        this.frustumCulled = t.frustumCulled,
        this.renderOrder = t.renderOrder,
        this.animations = t.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        e === !0)
            for (let n = 0; n < t.children.length; n++) {
                const s = t.children[n];
                this.add(s.clone())
            }
        return this
    }
}
ve.DEFAULT_UP = new U(0,1,0);
ve.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Xe = new U
  , hn = new U
  , or = new U
  , un = new U
  , ci = new U
  , hi = new U
  , oo = new U
  , lr = new U
  , cr = new U
  , hr = new U
  , ur = new le
  , dr = new le
  , fr = new le;
class qe {
    constructor(t=new U, e=new U, n=new U) {
        this.a = t,
        this.b = e,
        this.c = n
    }
    static getNormal(t, e, n, s) {
        s.subVectors(n, e),
        Xe.subVectors(t, e),
        s.cross(Xe);
        const r = s.lengthSq();
        return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0)
    }
    static getBarycoord(t, e, n, s, r) {
        Xe.subVectors(s, e),
        hn.subVectors(n, e),
        or.subVectors(t, e);
        const a = Xe.dot(Xe)
          , o = Xe.dot(hn)
          , l = Xe.dot(or)
          , c = hn.dot(hn)
          , u = hn.dot(or)
          , h = a * c - o * o;
        if (h === 0)
            return r.set(0, 0, 0),
            null;
        const f = 1 / h
          , m = (c * l - o * u) * f
          , g = (a * u - o * l) * f;
        return r.set(1 - m - g, g, m)
    }
    static containsPoint(t, e, n, s) {
        return this.getBarycoord(t, e, n, s, un) === null ? !1 : un.x >= 0 && un.y >= 0 && un.x + un.y <= 1
    }
    static getInterpolation(t, e, n, s, r, a, o, l) {
        return this.getBarycoord(t, e, n, s, un) === null ? (l.x = 0,
        l.y = 0,
        "z"in l && (l.z = 0),
        "w"in l && (l.w = 0),
        null) : (l.setScalar(0),
        l.addScaledVector(r, un.x),
        l.addScaledVector(a, un.y),
        l.addScaledVector(o, un.z),
        l)
    }
    static getInterpolatedAttribute(t, e, n, s, r, a) {
        return ur.setScalar(0),
        dr.setScalar(0),
        fr.setScalar(0),
        ur.fromBufferAttribute(t, e),
        dr.fromBufferAttribute(t, n),
        fr.fromBufferAttribute(t, s),
        a.setScalar(0),
        a.addScaledVector(ur, r.x),
        a.addScaledVector(dr, r.y),
        a.addScaledVector(fr, r.z),
        a
    }
    static isFrontFacing(t, e, n, s) {
        return Xe.subVectors(n, e),
        hn.subVectors(t, e),
        Xe.cross(hn).dot(s) < 0
    }
    set(t, e, n) {
        return this.a.copy(t),
        this.b.copy(e),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(t, e, n, s) {
        return this.a.copy(t[e]),
        this.b.copy(t[n]),
        this.c.copy(t[s]),
        this
    }
    setFromAttributeAndIndices(t, e, n, s) {
        return this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, s),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        return this.a.copy(t.a),
        this.b.copy(t.b),
        this.c.copy(t.c),
        this
    }
    getArea() {
        return Xe.subVectors(this.c, this.b),
        hn.subVectors(this.a, this.b),
        Xe.cross(hn).length() * .5
    }
    getMidpoint(t) {
        return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(t) {
        return qe.getNormal(this.a, this.b, this.c, t)
    }
    getPlane(t) {
        return t.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(t, e) {
        return qe.getBarycoord(t, this.a, this.b, this.c, e)
    }
    getInterpolation(t, e, n, s, r) {
        return qe.getInterpolation(t, this.a, this.b, this.c, e, n, s, r)
    }
    containsPoint(t) {
        return qe.containsPoint(t, this.a, this.b, this.c)
    }
    isFrontFacing(t) {
        return qe.isFrontFacing(this.a, this.b, this.c, t)
    }
    intersectsBox(t) {
        return t.intersectsTriangle(this)
    }
    closestPointToPoint(t, e) {
        const n = this.a
          , s = this.b
          , r = this.c;
        let a, o;
        ci.subVectors(s, n),
        hi.subVectors(r, n),
        lr.subVectors(t, n);
        const l = ci.dot(lr)
          , c = hi.dot(lr);
        if (l <= 0 && c <= 0)
            return e.copy(n);
        cr.subVectors(t, s);
        const u = ci.dot(cr)
          , h = hi.dot(cr);
        if (u >= 0 && h <= u)
            return e.copy(s);
        const f = l * h - u * c;
        if (f <= 0 && l >= 0 && u <= 0)
            return a = l / (l - u),
            e.copy(n).addScaledVector(ci, a);
        hr.subVectors(t, r);
        const m = ci.dot(hr)
          , g = hi.dot(hr);
        if (g >= 0 && m <= g)
            return e.copy(r);
        const x = m * c - l * g;
        if (x <= 0 && c >= 0 && g <= 0)
            return o = c / (c - g),
            e.copy(n).addScaledVector(hi, o);
        const p = u * g - m * h;
        if (p <= 0 && h - u >= 0 && m - g >= 0)
            return oo.subVectors(r, s),
            o = (h - u) / (h - u + (m - g)),
            e.copy(s).addScaledVector(oo, o);
        const d = 1 / (p + x + f);
        return a = x * d,
        o = f * d,
        e.copy(n).addScaledVector(ci, a).addScaledVector(hi, o)
    }
    equals(t) {
        return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
    }
}
const _l = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Tn = {
    h: 0,
    s: 0,
    l: 0
}
  , ls = {
    h: 0,
    s: 0,
    l: 0
};
function pr(i, t, e) {
    return e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i
}
class Lt {
    constructor(t, e, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(t, e, n)
    }
    set(t, e, n) {
        if (e === void 0 && n === void 0) {
            const s = t;
            s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s)
        } else
            this.setRGB(t, e, n);
        return this
    }
    setScalar(t) {
        return this.r = t,
        this.g = t,
        this.b = t,
        this
    }
    setHex(t, e=Ce) {
        return t = Math.floor(t),
        this.r = (t >> 16 & 255) / 255,
        this.g = (t >> 8 & 255) / 255,
        this.b = (t & 255) / 255,
        Gt.colorSpaceToWorking(this, e),
        this
    }
    setRGB(t, e, n, s=Gt.workingColorSpace) {
        return this.r = t,
        this.g = e,
        this.b = n,
        Gt.colorSpaceToWorking(this, s),
        this
    }
    setHSL(t, e, n, s=Gt.workingColorSpace) {
        if (t = Bc(t, 1),
        e = Bt(e, 0, 1),
        n = Bt(n, 0, 1),
        e === 0)
            this.r = this.g = this.b = n;
        else {
            const r = n <= .5 ? n * (1 + e) : n + e - n * e
              , a = 2 * n - r;
            this.r = pr(a, r, t + 1 / 3),
            this.g = pr(a, r, t),
            this.b = pr(a, r, t - 1 / 3)
        }
        return Gt.colorSpaceToWorking(this, s),
        this
    }
    setStyle(t, e=Ce) {
        function n(r) {
            r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
        }
        let s;
        if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
            let r;
            const a = s[1]
              , o = s[2];
            switch (a) {
            case "rgb":
            case "rgba":
                if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                break;
            case "hsl":
            case "hsla":
                if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(r[4]),
                    this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + t)
            }
        } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
            const r = s[1]
              , a = r.length;
            if (a === 3)
                return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
            if (a === 6)
                return this.setHex(parseInt(r, 16), e);
            console.warn("THREE.Color: Invalid hex color " + t)
        } else if (t && t.length > 0)
            return this.setColorName(t, e);
        return this
    }
    setColorName(t, e=Ce) {
        const n = _l[t.toLowerCase()];
        return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(t) {
        return this.r = t.r,
        this.g = t.g,
        this.b = t.b,
        this
    }
    copySRGBToLinear(t) {
        return this.r = gn(t.r),
        this.g = gn(t.g),
        this.b = gn(t.b),
        this
    }
    copyLinearToSRGB(t) {
        return this.r = Mi(t.r),
        this.g = Mi(t.g),
        this.b = Mi(t.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(t=Ce) {
        return Gt.workingToColorSpace(ge.copy(this), t),
        Math.round(Bt(ge.r * 255, 0, 255)) * 65536 + Math.round(Bt(ge.g * 255, 0, 255)) * 256 + Math.round(Bt(ge.b * 255, 0, 255))
    }
    getHexString(t=Ce) {
        return ("000000" + this.getHex(t).toString(16)).slice(-6)
    }
    getHSL(t, e=Gt.workingColorSpace) {
        Gt.workingToColorSpace(ge.copy(this), e);
        const n = ge.r
          , s = ge.g
          , r = ge.b
          , a = Math.max(n, s, r)
          , o = Math.min(n, s, r);
        let l, c;
        const u = (o + a) / 2;
        if (o === a)
            l = 0,
            c = 0;
        else {
            const h = a - o;
            switch (c = u <= .5 ? h / (a + o) : h / (2 - a - o),
            a) {
            case n:
                l = (s - r) / h + (s < r ? 6 : 0);
                break;
            case s:
                l = (r - n) / h + 2;
                break;
            case r:
                l = (n - s) / h + 4;
                break
            }
            l /= 6
        }
        return t.h = l,
        t.s = c,
        t.l = u,
        t
    }
    getRGB(t, e=Gt.workingColorSpace) {
        return Gt.workingToColorSpace(ge.copy(this), e),
        t.r = ge.r,
        t.g = ge.g,
        t.b = ge.b,
        t
    }
    getStyle(t=Ce) {
        Gt.workingToColorSpace(ge.copy(this), t);
        const e = ge.r
          , n = ge.g
          , s = ge.b;
        return t !== Ce ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`
    }
    offsetHSL(t, e, n) {
        return this.getHSL(Tn),
        this.setHSL(Tn.h + t, Tn.s + e, Tn.l + n)
    }
    add(t) {
        return this.r += t.r,
        this.g += t.g,
        this.b += t.b,
        this
    }
    addColors(t, e) {
        return this.r = t.r + e.r,
        this.g = t.g + e.g,
        this.b = t.b + e.b,
        this
    }
    addScalar(t) {
        return this.r += t,
        this.g += t,
        this.b += t,
        this
    }
    sub(t) {
        return this.r = Math.max(0, this.r - t.r),
        this.g = Math.max(0, this.g - t.g),
        this.b = Math.max(0, this.b - t.b),
        this
    }
    multiply(t) {
        return this.r *= t.r,
        this.g *= t.g,
        this.b *= t.b,
        this
    }
    multiplyScalar(t) {
        return this.r *= t,
        this.g *= t,
        this.b *= t,
        this
    }
    lerp(t, e) {
        return this.r += (t.r - this.r) * e,
        this.g += (t.g - this.g) * e,
        this.b += (t.b - this.b) * e,
        this
    }
    lerpColors(t, e, n) {
        return this.r = t.r + (e.r - t.r) * n,
        this.g = t.g + (e.g - t.g) * n,
        this.b = t.b + (e.b - t.b) * n,
        this
    }
    lerpHSL(t, e) {
        this.getHSL(Tn),
        t.getHSL(ls);
        const n = Zs(Tn.h, ls.h, e)
          , s = Zs(Tn.s, ls.s, e)
          , r = Zs(Tn.l, ls.l, e);
        return this.setHSL(n, s, r),
        this
    }
    setFromVector3(t) {
        return this.r = t.x,
        this.g = t.y,
        this.b = t.z,
        this
    }
    applyMatrix3(t) {
        const e = this.r
          , n = this.g
          , s = this.b
          , r = t.elements;
        return this.r = r[0] * e + r[3] * n + r[6] * s,
        this.g = r[1] * e + r[4] * n + r[7] * s,
        this.b = r[2] * e + r[5] * n + r[8] * s,
        this
    }
    equals(t) {
        return t.r === this.r && t.g === this.g && t.b === this.b
    }
    fromArray(t, e=0) {
        return this.r = t[e],
        this.g = t[e + 1],
        this.b = t[e + 2],
        this
    }
    toArray(t=[], e=0) {
        return t[e] = this.r,
        t[e + 1] = this.g,
        t[e + 2] = this.b,
        t
    }
    fromBufferAttribute(t, e) {
        return this.r = t.getX(e),
        this.g = t.getY(e),
        this.b = t.getZ(e),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const ge = new Lt;
Lt.NAMES = _l;
let ih = 0;
class sn extends Jn {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: ih++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "Material",
        this.blending = vi,
        this.side = Pn,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Lr,
        this.blendDst = Ur,
        this.blendEquation = Gn,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new Lt(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = Ei,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = Ya,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = ei,
        this.stencilZFail = ei,
        this.stencilZPass = ei,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.allowOverride = !0,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(t) {
        this._alphaTest > 0 != t > 0 && this.version++,
        this._alphaTest = t
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(t) {
        if (t !== void 0)
            for (const e in t) {
                const n = t[e];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                    continue
                }
                const s = this[e];
                if (s === void 0) {
                    console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
                    continue
                }
                s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n
            }
    }
    toJSON(t) {
        const e = t === void 0 || typeof t == "string";
        e && (t = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.7,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== vi && (n.blending = this.blending),
        this.side !== Pn && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Lr && (n.blendSrc = this.blendSrc),
        this.blendDst !== Ur && (n.blendDst = this.blendDst),
        this.blendEquation !== Gn && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== Ei && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== Ya && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== ei && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== ei && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== ei && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function s(r) {
            const a = [];
            for (const o in r) {
                const l = r[o];
                delete l.metadata,
                a.push(l)
            }
            return a
        }
        if (e) {
            const r = s(t.textures)
              , a = s(t.images);
            r.length > 0 && (n.textures = r),
            a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.name = t.name,
        this.blending = t.blending,
        this.side = t.side,
        this.vertexColors = t.vertexColors,
        this.opacity = t.opacity,
        this.transparent = t.transparent,
        this.blendSrc = t.blendSrc,
        this.blendDst = t.blendDst,
        this.blendEquation = t.blendEquation,
        this.blendSrcAlpha = t.blendSrcAlpha,
        this.blendDstAlpha = t.blendDstAlpha,
        this.blendEquationAlpha = t.blendEquationAlpha,
        this.blendColor.copy(t.blendColor),
        this.blendAlpha = t.blendAlpha,
        this.depthFunc = t.depthFunc,
        this.depthTest = t.depthTest,
        this.depthWrite = t.depthWrite,
        this.stencilWriteMask = t.stencilWriteMask,
        this.stencilFunc = t.stencilFunc,
        this.stencilRef = t.stencilRef,
        this.stencilFuncMask = t.stencilFuncMask,
        this.stencilFail = t.stencilFail,
        this.stencilZFail = t.stencilZFail,
        this.stencilZPass = t.stencilZPass,
        this.stencilWrite = t.stencilWrite;
        const e = t.clippingPlanes;
        let n = null;
        if (e !== null) {
            const s = e.length;
            n = new Array(s);
            for (let r = 0; r !== s; ++r)
                n[r] = e[r].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = t.clipIntersection,
        this.clipShadows = t.clipShadows,
        this.shadowSide = t.shadowSide,
        this.colorWrite = t.colorWrite,
        this.precision = t.precision,
        this.polygonOffset = t.polygonOffset,
        this.polygonOffsetFactor = t.polygonOffsetFactor,
        this.polygonOffsetUnits = t.polygonOffsetUnits,
        this.dithering = t.dithering,
        this.alphaTest = t.alphaTest,
        this.alphaHash = t.alphaHash,
        this.alphaToCoverage = t.alphaToCoverage,
        this.premultipliedAlpha = t.premultipliedAlpha,
        this.forceSinglePass = t.forceSinglePass,
        this.visible = t.visible,
        this.toneMapped = t.toneMapped,
        this.userData = JSON.parse(JSON.stringify(t.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(t) {
        t === !0 && this.version++
    }
}
class gl extends sn {
    constructor(t) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new Lt(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Ke,
        this.combine = Sa,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapRotation.copy(t.envMapRotation),
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.fog = t.fog,
        this
    }
}
const ce = new U
  , cs = new Ut;
let sh = 0;
class nn {
    constructor(t, e, n=!1) {
        if (Array.isArray(t))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        Object.defineProperty(this, "id", {
            value: sh++
        }),
        this.name = "",
        this.array = t,
        this.itemSize = e,
        this.count = t !== void 0 ? t.length / e : 0,
        this.normalized = n,
        this.usage = ja,
        this.updateRanges = [],
        this.gpuType = pn,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(t) {
        t === !0 && this.version++
    }
    setUsage(t) {
        return this.usage = t,
        this
    }
    addUpdateRange(t, e) {
        this.updateRanges.push({
            start: t,
            count: e
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(t) {
        return this.name = t.name,
        this.array = new t.array.constructor(t.array),
        this.itemSize = t.itemSize,
        this.count = t.count,
        this.normalized = t.normalized,
        this.usage = t.usage,
        this.gpuType = t.gpuType,
        this
    }
    copyAt(t, e, n) {
        t *= this.itemSize,
        n *= e.itemSize;
        for (let s = 0, r = this.itemSize; s < r; s++)
            this.array[t + s] = e.array[n + s];
        return this
    }
    copyArray(t) {
        return this.array.set(t),
        this
    }
    applyMatrix3(t) {
        if (this.itemSize === 2)
            for (let e = 0, n = this.count; e < n; e++)
                cs.fromBufferAttribute(this, e),
                cs.applyMatrix3(t),
                this.setXY(e, cs.x, cs.y);
        else if (this.itemSize === 3)
            for (let e = 0, n = this.count; e < n; e++)
                ce.fromBufferAttribute(this, e),
                ce.applyMatrix3(t),
                this.setXYZ(e, ce.x, ce.y, ce.z);
        return this
    }
    applyMatrix4(t) {
        for (let e = 0, n = this.count; e < n; e++)
            ce.fromBufferAttribute(this, e),
            ce.applyMatrix4(t),
            this.setXYZ(e, ce.x, ce.y, ce.z);
        return this
    }
    applyNormalMatrix(t) {
        for (let e = 0, n = this.count; e < n; e++)
            ce.fromBufferAttribute(this, e),
            ce.applyNormalMatrix(t),
            this.setXYZ(e, ce.x, ce.y, ce.z);
        return this
    }
    transformDirection(t) {
        for (let e = 0, n = this.count; e < n; e++)
            ce.fromBufferAttribute(this, e),
            ce.transformDirection(t),
            this.setXYZ(e, ce.x, ce.y, ce.z);
        return this
    }
    set(t, e=0) {
        return this.array.set(t, e),
        this
    }
    getComponent(t, e) {
        let n = this.array[t * this.itemSize + e];
        return this.normalized && (n = Ci(n, this.array)),
        n
    }
    setComponent(t, e, n) {
        return this.normalized && (n = Ae(n, this.array)),
        this.array[t * this.itemSize + e] = n,
        this
    }
    getX(t) {
        let e = this.array[t * this.itemSize];
        return this.normalized && (e = Ci(e, this.array)),
        e
    }
    setX(t, e) {
        return this.normalized && (e = Ae(e, this.array)),
        this.array[t * this.itemSize] = e,
        this
    }
    getY(t) {
        let e = this.array[t * this.itemSize + 1];
        return this.normalized && (e = Ci(e, this.array)),
        e
    }
    setY(t, e) {
        return this.normalized && (e = Ae(e, this.array)),
        this.array[t * this.itemSize + 1] = e,
        this
    }
    getZ(t) {
        let e = this.array[t * this.itemSize + 2];
        return this.normalized && (e = Ci(e, this.array)),
        e
    }
    setZ(t, e) {
        return this.normalized && (e = Ae(e, this.array)),
        this.array[t * this.itemSize + 2] = e,
        this
    }
    getW(t) {
        let e = this.array[t * this.itemSize + 3];
        return this.normalized && (e = Ci(e, this.array)),
        e
    }
    setW(t, e) {
        return this.normalized && (e = Ae(e, this.array)),
        this.array[t * this.itemSize + 3] = e,
        this
    }
    setXY(t, e, n) {
        return t *= this.itemSize,
        this.normalized && (e = Ae(e, this.array),
        n = Ae(n, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this
    }
    setXYZ(t, e, n, s) {
        return t *= this.itemSize,
        this.normalized && (e = Ae(e, this.array),
        n = Ae(n, this.array),
        s = Ae(s, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = s,
        this
    }
    setXYZW(t, e, n, s, r) {
        return t *= this.itemSize,
        this.normalized && (e = Ae(e, this.array),
        n = Ae(n, this.array),
        s = Ae(s, this.array),
        r = Ae(r, this.array)),
        this.array[t + 0] = e,
        this.array[t + 1] = n,
        this.array[t + 2] = s,
        this.array[t + 3] = r,
        this
    }
    onUpload(t) {
        return this.onUploadCallback = t,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const t = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (t.name = this.name),
        this.usage !== ja && (t.usage = this.usage),
        t
    }
}
class vl extends nn {
    constructor(t, e, n) {
        super(new Uint16Array(t), e, n)
    }
}
class xl extends nn {
    constructor(t, e, n) {
        super(new Uint32Array(t), e, n)
    }
}
class Ee extends nn {
    constructor(t, e, n) {
        super(new Float32Array(t), e, n)
    }
}
let rh = 0;
const Oe = new ae
  , mr = new ve
  , ui = new U
  , Ie = new Yi
  , Ui = new Yi
  , pe = new U;
class Ze extends Jn {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: rh++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.indirect = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(t) {
        return Array.isArray(t) ? this.index = new (pl(t) ? xl : vl)(t,1) : this.index = t,
        this
    }
    setIndirect(t) {
        return this.indirect = t,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    setAttribute(t, e) {
        return this.attributes[t] = e,
        this
    }
    deleteAttribute(t) {
        return delete this.attributes[t],
        this
    }
    hasAttribute(t) {
        return this.attributes[t] !== void 0
    }
    addGroup(t, e, n=0) {
        this.groups.push({
            start: t,
            count: e,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(t, e) {
        this.drawRange.start = t,
        this.drawRange.count = e
    }
    applyMatrix4(t) {
        const e = this.attributes.position;
        e !== void 0 && (e.applyMatrix4(t),
        e.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const r = new It().getNormalMatrix(t);
            n.applyNormalMatrix(r),
            n.needsUpdate = !0
        }
        const s = this.attributes.tangent;
        return s !== void 0 && (s.transformDirection(t),
        s.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(t) {
        return Oe.makeRotationFromQuaternion(t),
        this.applyMatrix4(Oe),
        this
    }
    rotateX(t) {
        return Oe.makeRotationX(t),
        this.applyMatrix4(Oe),
        this
    }
    rotateY(t) {
        return Oe.makeRotationY(t),
        this.applyMatrix4(Oe),
        this
    }
    rotateZ(t) {
        return Oe.makeRotationZ(t),
        this.applyMatrix4(Oe),
        this
    }
    translate(t, e, n) {
        return Oe.makeTranslation(t, e, n),
        this.applyMatrix4(Oe),
        this
    }
    scale(t, e, n) {
        return Oe.makeScale(t, e, n),
        this.applyMatrix4(Oe),
        this
    }
    lookAt(t) {
        return mr.lookAt(t),
        mr.updateMatrix(),
        this.applyMatrix4(mr.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(ui).negate(),
        this.translate(ui.x, ui.y, ui.z),
        this
    }
    setFromPoints(t) {
        const e = this.getAttribute("position");
        if (e === void 0) {
            const n = [];
            for (let s = 0, r = t.length; s < r; s++) {
                const a = t[s];
                n.push(a.x, a.y, a.z || 0)
            }
            this.setAttribute("position", new Ee(n,3))
        } else {
            const n = Math.min(t.length, e.count);
            for (let s = 0; s < n; s++) {
                const r = t[s];
                e.setXYZ(s, r.x, r.y, r.z || 0)
            }
            t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            e.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new Yi);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new U(-1 / 0,-1 / 0,-1 / 0), new U(1 / 0,1 / 0,1 / 0));
            return
        }
        if (t !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(t),
            e)
                for (let n = 0, s = e.length; n < s; n++) {
                    const r = e[n];
                    Ie.setFromBufferAttribute(r),
                    this.morphTargetsRelative ? (pe.addVectors(this.boundingBox.min, Ie.min),
                    this.boundingBox.expandByPoint(pe),
                    pe.addVectors(this.boundingBox.max, Ie.max),
                    this.boundingBox.expandByPoint(pe)) : (this.boundingBox.expandByPoint(Ie.min),
                    this.boundingBox.expandByPoint(Ie.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ji);
        const t = this.attributes.position
          , e = this.morphAttributes.position;
        if (t && t.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new U, 1 / 0);
            return
        }
        if (t) {
            const n = this.boundingSphere.center;
            if (Ie.setFromBufferAttribute(t),
            e)
                for (let r = 0, a = e.length; r < a; r++) {
                    const o = e[r];
                    Ui.setFromBufferAttribute(o),
                    this.morphTargetsRelative ? (pe.addVectors(Ie.min, Ui.min),
                    Ie.expandByPoint(pe),
                    pe.addVectors(Ie.max, Ui.max),
                    Ie.expandByPoint(pe)) : (Ie.expandByPoint(Ui.min),
                    Ie.expandByPoint(Ui.max))
                }
            Ie.getCenter(n);
            let s = 0;
            for (let r = 0, a = t.count; r < a; r++)
                pe.fromBufferAttribute(t, r),
                s = Math.max(s, n.distanceToSquared(pe));
            if (e)
                for (let r = 0, a = e.length; r < a; r++) {
                    const o = e[r]
                      , l = this.morphTargetsRelative;
                    for (let c = 0, u = o.count; c < u; c++)
                        pe.fromBufferAttribute(o, c),
                        l && (ui.fromBufferAttribute(t, c),
                        pe.add(ui)),
                        s = Math.max(s, n.distanceToSquared(pe))
                }
            this.boundingSphere.radius = Math.sqrt(s),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const t = this.index
          , e = this.attributes;
        if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = e.position
          , s = e.normal
          , r = e.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new nn(new Float32Array(4 * n.count),4));
        const a = this.getAttribute("tangent")
          , o = []
          , l = [];
        for (let N = 0; N < n.count; N++)
            o[N] = new U,
            l[N] = new U;
        const c = new U
          , u = new U
          , h = new U
          , f = new Ut
          , m = new Ut
          , g = new Ut
          , x = new U
          , p = new U;
        function d(N, E, M) {
            c.fromBufferAttribute(n, N),
            u.fromBufferAttribute(n, E),
            h.fromBufferAttribute(n, M),
            f.fromBufferAttribute(r, N),
            m.fromBufferAttribute(r, E),
            g.fromBufferAttribute(r, M),
            u.sub(c),
            h.sub(c),
            m.sub(f),
            g.sub(f);
            const P = 1 / (m.x * g.y - g.x * m.y);
            isFinite(P) && (x.copy(u).multiplyScalar(g.y).addScaledVector(h, -m.y).multiplyScalar(P),
            p.copy(h).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(P),
            o[N].add(x),
            o[E].add(x),
            o[M].add(x),
            l[N].add(p),
            l[E].add(p),
            l[M].add(p))
        }
        let b = this.groups;
        b.length === 0 && (b = [{
            start: 0,
            count: t.count
        }]);
        for (let N = 0, E = b.length; N < E; ++N) {
            const M = b[N]
              , P = M.start
              , k = M.count;
            for (let z = P, j = P + k; z < j; z += 3)
                d(t.getX(z + 0), t.getX(z + 1), t.getX(z + 2))
        }
        const T = new U
          , S = new U
          , I = new U
          , R = new U;
        function w(N) {
            I.fromBufferAttribute(s, N),
            R.copy(I);
            const E = o[N];
            T.copy(E),
            T.sub(I.multiplyScalar(I.dot(E))).normalize(),
            S.crossVectors(R, E);
            const P = S.dot(l[N]) < 0 ? -1 : 1;
            a.setXYZW(N, T.x, T.y, T.z, P)
        }
        for (let N = 0, E = b.length; N < E; ++N) {
            const M = b[N]
              , P = M.start
              , k = M.count;
            for (let z = P, j = P + k; z < j; z += 3)
                w(t.getX(z + 0)),
                w(t.getX(z + 1)),
                w(t.getX(z + 2))
        }
    }
    computeVertexNormals() {
        const t = this.index
          , e = this.getAttribute("position");
        if (e !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new nn(new Float32Array(e.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let f = 0, m = n.count; f < m; f++)
                    n.setXYZ(f, 0, 0, 0);
            const s = new U
              , r = new U
              , a = new U
              , o = new U
              , l = new U
              , c = new U
              , u = new U
              , h = new U;
            if (t)
                for (let f = 0, m = t.count; f < m; f += 3) {
                    const g = t.getX(f + 0)
                      , x = t.getX(f + 1)
                      , p = t.getX(f + 2);
                    s.fromBufferAttribute(e, g),
                    r.fromBufferAttribute(e, x),
                    a.fromBufferAttribute(e, p),
                    u.subVectors(a, r),
                    h.subVectors(s, r),
                    u.cross(h),
                    o.fromBufferAttribute(n, g),
                    l.fromBufferAttribute(n, x),
                    c.fromBufferAttribute(n, p),
                    o.add(u),
                    l.add(u),
                    c.add(u),
                    n.setXYZ(g, o.x, o.y, o.z),
                    n.setXYZ(x, l.x, l.y, l.z),
                    n.setXYZ(p, c.x, c.y, c.z)
                }
            else
                for (let f = 0, m = e.count; f < m; f += 3)
                    s.fromBufferAttribute(e, f + 0),
                    r.fromBufferAttribute(e, f + 1),
                    a.fromBufferAttribute(e, f + 2),
                    u.subVectors(a, r),
                    h.subVectors(s, r),
                    u.cross(h),
                    n.setXYZ(f + 0, u.x, u.y, u.z),
                    n.setXYZ(f + 1, u.x, u.y, u.z),
                    n.setXYZ(f + 2, u.x, u.y, u.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const t = this.attributes.normal;
        for (let e = 0, n = t.count; e < n; e++)
            pe.fromBufferAttribute(t, e),
            pe.normalize(),
            t.setXYZ(e, pe.x, pe.y, pe.z)
    }
    toNonIndexed() {
        function t(o, l) {
            const c = o.array
              , u = o.itemSize
              , h = o.normalized
              , f = new c.constructor(l.length * u);
            let m = 0
              , g = 0;
            for (let x = 0, p = l.length; x < p; x++) {
                o.isInterleavedBufferAttribute ? m = l[x] * o.data.stride + o.offset : m = l[x] * u;
                for (let d = 0; d < u; d++)
                    f[g++] = c[m++]
            }
            return new nn(f,u,h)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const e = new Ze
          , n = this.index.array
          , s = this.attributes;
        for (const o in s) {
            const l = s[o]
              , c = t(l, n);
            e.setAttribute(o, c)
        }
        const r = this.morphAttributes;
        for (const o in r) {
            const l = []
              , c = r[o];
            for (let u = 0, h = c.length; u < h; u++) {
                const f = c[u]
                  , m = t(f, n);
                l.push(m)
            }
            e.morphAttributes[o] = l
        }
        e.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, l = a.length; o < l; o++) {
            const c = a[o];
            e.addGroup(c.start, c.count, c.materialIndex)
        }
        return e
    }
    toJSON() {
        const t = {
            metadata: {
                version: 4.7,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (t.uuid = this.uuid,
        t.type = this.type,
        this.name !== "" && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        this.parameters !== void 0) {
            const l = this.parameters;
            for (const c in l)
                l[c] !== void 0 && (t[c] = l[c]);
            return t
        }
        t.data = {
            attributes: {}
        };
        const e = this.index;
        e !== null && (t.data.index = {
            type: e.array.constructor.name,
            array: Array.prototype.slice.call(e.array)
        });
        const n = this.attributes;
        for (const l in n) {
            const c = n[l];
            t.data.attributes[l] = c.toJSON(t.data)
        }
        const s = {};
        let r = !1;
        for (const l in this.morphAttributes) {
            const c = this.morphAttributes[l]
              , u = [];
            for (let h = 0, f = c.length; h < f; h++) {
                const m = c[h];
                u.push(m.toJSON(t.data))
            }
            u.length > 0 && (s[l] = u,
            r = !0)
        }
        r && (t.data.morphAttributes = s,
        t.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (t.data.boundingSphere = o.toJSON()),
        t
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(t) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const e = {};
        this.name = t.name;
        const n = t.index;
        n !== null && this.setIndex(n.clone());
        const s = t.attributes;
        for (const c in s) {
            const u = s[c];
            this.setAttribute(c, u.clone(e))
        }
        const r = t.morphAttributes;
        for (const c in r) {
            const u = []
              , h = r[c];
            for (let f = 0, m = h.length; f < m; f++)
                u.push(h[f].clone(e));
            this.morphAttributes[c] = u
        }
        this.morphTargetsRelative = t.morphTargetsRelative;
        const a = t.groups;
        for (let c = 0, u = a.length; c < u; c++) {
            const h = a[c];
            this.addGroup(h.start, h.count, h.materialIndex)
        }
        const o = t.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const l = t.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()),
        this.drawRange.start = t.drawRange.start,
        this.drawRange.count = t.drawRange.count,
        this.userData = t.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const lo = new ae
  , On = new Ki
  , hs = new ji
  , co = new U
  , us = new U
  , ds = new U
  , fs = new U
  , _r = new U
  , ps = new U
  , ho = new U
  , ms = new U;
class He extends ve {
    constructor(t=new Ze, e=new gl) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = t,
        this.material = e,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.count = 1,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    const o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
    getVertexPosition(t, e) {
        const n = this.geometry
          , s = n.attributes.position
          , r = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        e.fromBufferAttribute(s, t);
        const o = this.morphTargetInfluences;
        if (r && o) {
            ps.set(0, 0, 0);
            for (let l = 0, c = r.length; l < c; l++) {
                const u = o[l]
                  , h = r[l];
                u !== 0 && (_r.fromBufferAttribute(h, t),
                a ? ps.addScaledVector(_r, u) : ps.addScaledVector(_r.sub(e), u))
            }
            e.add(ps)
        }
        return e
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.material
          , r = this.matrixWorld;
        s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        hs.copy(n.boundingSphere),
        hs.applyMatrix4(r),
        On.copy(t.ray).recast(t.near),
        !(hs.containsPoint(On.origin) === !1 && (On.intersectSphere(hs, co) === null || On.origin.distanceToSquared(co) > (t.far - t.near) ** 2)) && (lo.copy(r).invert(),
        On.copy(t.ray).applyMatrix4(lo),
        !(n.boundingBox !== null && On.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, On)))
    }
    _computeIntersections(t, e, n) {
        let s;
        const r = this.geometry
          , a = this.material
          , o = r.index
          , l = r.attributes.position
          , c = r.attributes.uv
          , u = r.attributes.uv1
          , h = r.attributes.normal
          , f = r.groups
          , m = r.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let g = 0, x = f.length; g < x; g++) {
                    const p = f[g]
                      , d = a[p.materialIndex]
                      , b = Math.max(p.start, m.start)
                      , T = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
                    for (let S = b, I = T; S < I; S += 3) {
                        const R = o.getX(S)
                          , w = o.getX(S + 1)
                          , N = o.getX(S + 2);
                        s = _s(this, d, t, n, c, u, h, R, w, N),
                        s && (s.faceIndex = Math.floor(S / 3),
                        s.face.materialIndex = p.materialIndex,
                        e.push(s))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , x = Math.min(o.count, m.start + m.count);
                for (let p = g, d = x; p < d; p += 3) {
                    const b = o.getX(p)
                      , T = o.getX(p + 1)
                      , S = o.getX(p + 2);
                    s = _s(this, a, t, n, c, u, h, b, T, S),
                    s && (s.faceIndex = Math.floor(p / 3),
                    e.push(s))
                }
            }
        else if (l !== void 0)
            if (Array.isArray(a))
                for (let g = 0, x = f.length; g < x; g++) {
                    const p = f[g]
                      , d = a[p.materialIndex]
                      , b = Math.max(p.start, m.start)
                      , T = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
                    for (let S = b, I = T; S < I; S += 3) {
                        const R = S
                          , w = S + 1
                          , N = S + 2;
                        s = _s(this, d, t, n, c, u, h, R, w, N),
                        s && (s.faceIndex = Math.floor(S / 3),
                        s.face.materialIndex = p.materialIndex,
                        e.push(s))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , x = Math.min(l.count, m.start + m.count);
                for (let p = g, d = x; p < d; p += 3) {
                    const b = p
                      , T = p + 1
                      , S = p + 2;
                    s = _s(this, a, t, n, c, u, h, b, T, S),
                    s && (s.faceIndex = Math.floor(p / 3),
                    e.push(s))
                }
            }
    }
}
function ah(i, t, e, n, s, r, a, o) {
    let l;
    if (t.side === Pe ? l = n.intersectTriangle(a, r, s, !0, o) : l = n.intersectTriangle(s, r, a, t.side === Pn, o),
    l === null)
        return null;
    ms.copy(o),
    ms.applyMatrix4(i.matrixWorld);
    const c = e.ray.origin.distanceTo(ms);
    return c < e.near || c > e.far ? null : {
        distance: c,
        point: ms.clone(),
        object: i
    }
}
function _s(i, t, e, n, s, r, a, o, l, c) {
    i.getVertexPosition(o, us),
    i.getVertexPosition(l, ds),
    i.getVertexPosition(c, fs);
    const u = ah(i, t, e, n, us, ds, fs, ho);
    if (u) {
        const h = new U;
        qe.getBarycoord(ho, us, ds, fs, h),
        s && (u.uv = qe.getInterpolatedAttribute(s, o, l, c, h, new Ut)),
        r && (u.uv1 = qe.getInterpolatedAttribute(r, o, l, c, h, new Ut)),
        a && (u.normal = qe.getInterpolatedAttribute(a, o, l, c, h, new U),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
        const f = {
            a: o,
            b: l,
            c,
            normal: new U,
            materialIndex: 0
        };
        qe.getNormal(us, ds, fs, f.normal),
        u.face = f,
        u.barycoord = h
    }
    return u
}
class Zi extends Ze {
    constructor(t=1, e=1, n=1, s=1, r=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: n,
            widthSegments: s,
            heightSegments: r,
            depthSegments: a
        };
        const o = this;
        s = Math.floor(s),
        r = Math.floor(r),
        a = Math.floor(a);
        const l = []
          , c = []
          , u = []
          , h = [];
        let f = 0
          , m = 0;
        g("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        g("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        g("x", "z", "y", 1, 1, t, n, e, s, a, 2),
        g("x", "z", "y", 1, -1, t, n, -e, s, a, 3),
        g("x", "y", "z", 1, -1, t, e, n, s, r, 4),
        g("x", "y", "z", -1, -1, t, e, -n, s, r, 5),
        this.setIndex(l),
        this.setAttribute("position", new Ee(c,3)),
        this.setAttribute("normal", new Ee(u,3)),
        this.setAttribute("uv", new Ee(h,2));
        function g(x, p, d, b, T, S, I, R, w, N, E) {
            const M = S / w
              , P = I / N
              , k = S / 2
              , z = I / 2
              , j = R / 2
              , K = w + 1
              , X = N + 1;
            let $ = 0
              , H = 0;
            const ot = new U;
            for (let ut = 0; ut < X; ut++) {
                const St = ut * P - z;
                for (let Ot = 0; Ot < K; Ot++) {
                    const Zt = Ot * M - k;
                    ot[x] = Zt * b,
                    ot[p] = St * T,
                    ot[d] = j,
                    c.push(ot.x, ot.y, ot.z),
                    ot[x] = 0,
                    ot[p] = 0,
                    ot[d] = R > 0 ? 1 : -1,
                    u.push(ot.x, ot.y, ot.z),
                    h.push(Ot / w),
                    h.push(1 - ut / N),
                    $ += 1
                }
            }
            for (let ut = 0; ut < N; ut++)
                for (let St = 0; St < w; St++) {
                    const Ot = f + St + K * ut
                      , Zt = f + St + K * (ut + 1)
                      , W = f + (St + 1) + K * (ut + 1)
                      , et = f + (St + 1) + K * ut;
                    l.push(Ot, Zt, et),
                    l.push(Zt, W, et),
                    H += 6
                }
            o.addGroup(m, H, E),
            m += H,
            f += $
        }
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new Zi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)
    }
}
function Ai(i) {
    const t = {};
    for (const e in i) {
        t[e] = {};
        for (const n in i[e]) {
            const s = i[e][n];
            s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s
        }
    }
    return t
}
function Se(i) {
    const t = {};
    for (let e = 0; e < i.length; e++) {
        const n = Ai(i[e]);
        for (const s in n)
            t[s] = n[s]
    }
    return t
}
function oh(i) {
    const t = [];
    for (let e = 0; e < i.length; e++)
        t.push(i[e].clone());
    return t
}
function Ml(i) {
    const t = i.getRenderTarget();
    return t === null ? i.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Gt.workingColorSpace
}
const lh = {
    clone: Ai,
    merge: Se
};
var ch = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , hh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Dn extends sn {
    constructor(t) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = ch,
        this.fragmentShader = hh,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        t !== void 0 && this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.fragmentShader = t.fragmentShader,
        this.vertexShader = t.vertexShader,
        this.uniforms = Ai(t.uniforms),
        this.uniformsGroups = oh(t.uniformsGroups),
        this.defines = Object.assign({}, t.defines),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.fog = t.fog,
        this.lights = t.lights,
        this.clipping = t.clipping,
        this.extensions = Object.assign({}, t.extensions),
        this.glslVersion = t.glslVersion,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        e.glslVersion = this.glslVersion,
        e.uniforms = {};
        for (const s in this.uniforms) {
            const a = this.uniforms[s].value;
            a && a.isTexture ? e.uniforms[s] = {
                type: "t",
                value: a.toJSON(t).uuid
            } : a && a.isColor ? e.uniforms[s] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? e.uniforms[s] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? e.uniforms[s] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? e.uniforms[s] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? e.uniforms[s] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? e.uniforms[s] = {
                type: "m4",
                value: a.toArray()
            } : e.uniforms[s] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e.lights = this.lights,
        e.clipping = this.clipping;
        const n = {};
        for (const s in this.extensions)
            this.extensions[s] === !0 && (n[s] = !0);
        return Object.keys(n).length > 0 && (e.extensions = n),
        e
    }
}
class Sl extends ve {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new ae,
        this.projectionMatrix = new ae,
        this.projectionMatrixInverse = new ae,
        this.coordinateSystem = mn
    }
    copy(t, e) {
        return super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        this.coordinateSystem = t.coordinateSystem,
        this
    }
    getWorldDirection(t) {
        return super.getWorldDirection(t).negate()
    }
    updateMatrixWorld(t) {
        super.updateMatrixWorld(t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(t, e) {
        super.updateWorldMatrix(t, e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const bn = new U
  , uo = new Ut
  , fo = new Ut;
class ze extends Sl {
    constructor(t=50, e=1, n=.1, s=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = t,
        this.zoom = 1,
        this.near = n,
        this.far = s,
        this.focus = 10,
        this.aspect = e,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.fov = t.fov,
        this.zoom = t.zoom,
        this.near = t.near,
        this.far = t.far,
        this.focus = t.focus,
        this.aspect = t.aspect,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this.filmGauge = t.filmGauge,
        this.filmOffset = t.filmOffset,
        this
    }
    setFocalLength(t) {
        const e = .5 * this.getFilmHeight() / t;
        this.fov = _a * 2 * Math.atan(e),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const t = Math.tan(Ls * .5 * this.fov);
        return .5 * this.getFilmHeight() / t
    }
    getEffectiveFOV() {
        return _a * 2 * Math.atan(Math.tan(Ls * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(t, e, n) {
        bn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        e.set(bn.x, bn.y).multiplyScalar(-t / bn.z),
        bn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(bn.x, bn.y).multiplyScalar(-t / bn.z)
    }
    getViewSize(t, e) {
        return this.getViewBounds(t, uo, fo),
        e.subVectors(fo, uo)
    }
    setViewOffset(t, e, n, s, r, a) {
        this.aspect = t / e,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = this.near;
        let e = t * Math.tan(Ls * .5 * this.fov) / this.zoom
          , n = 2 * e
          , s = this.aspect * n
          , r = -.5 * s;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = a.fullWidth
              , c = a.fullHeight;
            r += a.offsetX * s / l,
            e -= a.offsetY * n / c,
            s *= a.width / l,
            n *= a.height / c
        }
        const o = this.filmOffset;
        o !== 0 && (r += t * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.fov = this.fov,
        e.object.zoom = this.zoom,
        e.object.near = this.near,
        e.object.far = this.far,
        e.object.focus = this.focus,
        e.object.aspect = this.aspect,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e.object.filmGauge = this.filmGauge,
        e.object.filmOffset = this.filmOffset,
        e
    }
}
const di = -90
  , fi = 1;
class uh extends ve {
    constructor(t, e, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const s = new ze(di,fi,t,e);
        s.layers = this.layers,
        this.add(s);
        const r = new ze(di,fi,t,e);
        r.layers = this.layers,
        this.add(r);
        const a = new ze(di,fi,t,e);
        a.layers = this.layers,
        this.add(a);
        const o = new ze(di,fi,t,e);
        o.layers = this.layers,
        this.add(o);
        const l = new ze(di,fi,t,e);
        l.layers = this.layers,
        this.add(l);
        const c = new ze(di,fi,t,e);
        c.layers = this.layers,
        this.add(c)
    }
    updateCoordinateSystem() {
        const t = this.coordinateSystem
          , e = this.children.concat()
          , [n,s,r,a,o,l] = e;
        for (const c of e)
            this.remove(c);
        if (t === mn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            s.up.set(0, 1, 0),
            s.lookAt(-1, 0, 0),
            r.up.set(0, 0, -1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, -1);
        else if (t === Os)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            s.up.set(0, -1, 0),
            s.lookAt(1, 0, 0),
            r.up.set(0, 0, 1),
            r.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
        for (const c of e)
            this.add(c),
            c.updateMatrixWorld()
    }
    update(t, e) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: s} = this;
        this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem,
        this.updateCoordinateSystem());
        const [r,a,o,l,c,u] = this.children
          , h = t.getRenderTarget()
          , f = t.getActiveCubeFace()
          , m = t.getActiveMipmapLevel()
          , g = t.xr.enabled;
        t.xr.enabled = !1;
        const x = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        t.setRenderTarget(n, 0, s),
        t.render(e, r),
        t.setRenderTarget(n, 1, s),
        t.render(e, a),
        t.setRenderTarget(n, 2, s),
        t.render(e, o),
        t.setRenderTarget(n, 3, s),
        t.render(e, l),
        t.setRenderTarget(n, 4, s),
        t.render(e, c),
        n.texture.generateMipmaps = x,
        t.setRenderTarget(n, 5, s),
        t.render(e, u),
        t.setRenderTarget(h, f, m),
        t.xr.enabled = g,
        n.texture.needsPMREMUpdate = !0
    }
}
class El extends ye {
    constructor(t=[], e=yi, n, s, r, a, o, l, c, u) {
        super(t, e, n, s, r, a, o, l, c, u),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(t) {
        this.image = t
    }
}
class dh extends Kn {
    constructor(t=1, e={}) {
        super(t, t, e),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: t,
            height: t,
            depth: 1
        }
          , s = [n, n, n, n, n, n];
        this.texture = new El(s),
        this._setTextureOptions(e),
        this.texture.isRenderTargetTexture = !0
    }
    fromEquirectangularTexture(t, e) {
        this.texture.type = e.type,
        this.texture.colorSpace = e.colorSpace,
        this.texture.generateMipmaps = e.generateMipmaps,
        this.texture.minFilter = e.minFilter,
        this.texture.magFilter = e.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , s = new Zi(5,5,5)
          , r = new Dn({
            name: "CubemapFromEquirect",
            uniforms: Ai(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: Pe,
            blending: Rn
        });
        r.uniforms.tEquirect.value = e;
        const a = new He(s,r)
          , o = e.minFilter;
        return e.minFilter === Xn && (e.minFilter = en),
        new uh(1,10,this).update(t, a),
        e.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(t, e=!0, n=!0, s=!0) {
        const r = t.getRenderTarget();
        for (let a = 0; a < 6; a++)
            t.setRenderTarget(this, a),
            t.clear(e, n, s);
        t.setRenderTarget(r)
    }
}
class Ni extends ve {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const fh = {
    type: "move"
};
class gr {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Ni,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Ni,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new U,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new U),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Ni,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new U,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new U),
        this._grip
    }
    dispatchEvent(t) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(t),
        this._grip !== null && this._grip.dispatchEvent(t),
        this._hand !== null && this._hand.dispatchEvent(t),
        this
    }
    connect(t) {
        if (t && t.hand) {
            const e = this._hand;
            if (e)
                for (const n of t.hand.values())
                    this._getHandJoint(e, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: t
        }),
        this
    }
    disconnect(t) {
        return this.dispatchEvent({
            type: "disconnected",
            data: t
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(t, e, n) {
        let s = null
          , r = null
          , a = null;
        const o = this._targetRay
          , l = this._grip
          , c = this._hand;
        if (t && e.session.visibilityState !== "visible-blurred") {
            if (c && t.hand) {
                a = !0;
                for (const x of t.hand.values()) {
                    const p = e.getJointPose(x, n)
                      , d = this._getHandJoint(c, x);
                    p !== null && (d.matrix.fromArray(p.transform.matrix),
                    d.matrix.decompose(d.position, d.rotation, d.scale),
                    d.matrixWorldNeedsUpdate = !0,
                    d.jointRadius = p.radius),
                    d.visible = p !== null
                }
                const u = c.joints["index-finger-tip"]
                  , h = c.joints["thumb-tip"]
                  , f = u.position.distanceTo(h.position)
                  , m = .02
                  , g = .005;
                c.inputState.pinching && f > m + g ? (c.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: t.handedness,
                    target: this
                })) : !c.inputState.pinching && f <= m - g && (c.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: t.handedness,
                    target: this
                }))
            } else
                l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n),
                r !== null && (l.matrix.fromArray(r.transform.matrix),
                l.matrix.decompose(l.position, l.rotation, l.scale),
                l.matrixWorldNeedsUpdate = !0,
                r.linearVelocity ? (l.hasLinearVelocity = !0,
                l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1,
                r.angularVelocity ? (l.hasAngularVelocity = !0,
                l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1));
            o !== null && (s = e.getPose(t.targetRaySpace, n),
            s === null && r !== null && (s = r),
            s !== null && (o.matrix.fromArray(s.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            s.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = !1,
            s.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(fh)))
        }
        return o !== null && (o.visible = s !== null),
        l !== null && (l.visible = r !== null),
        c !== null && (c.visible = a !== null),
        this
    }
    _getHandJoint(t, e) {
        if (t.joints[e.jointName] === void 0) {
            const n = new Ni;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            t.joints[e.jointName] = n,
            t.add(n)
        }
        return t.joints[e.jointName]
    }
}
class ph extends ve {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new Ke,
        this.environmentIntensity = 1,
        this.environmentRotation = new Ke,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(t, e) {
        return super.copy(t, e),
        t.background !== null && (this.background = t.background.clone()),
        t.environment !== null && (this.environment = t.environment.clone()),
        t.fog !== null && (this.fog = t.fog.clone()),
        this.backgroundBlurriness = t.backgroundBlurriness,
        this.backgroundIntensity = t.backgroundIntensity,
        this.backgroundRotation.copy(t.backgroundRotation),
        this.environmentIntensity = t.environmentIntensity,
        this.environmentRotation.copy(t.environmentRotation),
        t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.fog !== null && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity),
        e.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity),
        e.object.environmentRotation = this.environmentRotation.toArray(),
        e
    }
}
const vr = new U
  , mh = new U
  , _h = new It;
class An {
    constructor(t=new U(1,0,0), e=0) {
        this.isPlane = !0,
        this.normal = t,
        this.constant = e
    }
    set(t, e) {
        return this.normal.copy(t),
        this.constant = e,
        this
    }
    setComponents(t, e, n, s) {
        return this.normal.set(t, e, n),
        this.constant = s,
        this
    }
    setFromNormalAndCoplanarPoint(t, e) {
        return this.normal.copy(t),
        this.constant = -e.dot(this.normal),
        this
    }
    setFromCoplanarPoints(t, e, n) {
        const s = vr.subVectors(n, e).cross(mh.subVectors(t, e)).normalize();
        return this.setFromNormalAndCoplanarPoint(s, t),
        this
    }
    copy(t) {
        return this.normal.copy(t.normal),
        this.constant = t.constant,
        this
    }
    normalize() {
        const t = 1 / this.normal.length();
        return this.normal.multiplyScalar(t),
        this.constant *= t,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(t) {
        return this.normal.dot(t) + this.constant
    }
    distanceToSphere(t) {
        return this.distanceToPoint(t.center) - t.radius
    }
    projectPoint(t, e) {
        return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
    }
    intersectLine(t, e) {
        const n = t.delta(vr)
          , s = this.normal.dot(n);
        if (s === 0)
            return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
        const r = -(t.start.dot(this.normal) + this.constant) / s;
        return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r)
    }
    intersectsLine(t) {
        const e = this.distanceToPoint(t.start)
          , n = this.distanceToPoint(t.end);
        return e < 0 && n > 0 || n < 0 && e > 0
    }
    intersectsBox(t) {
        return t.intersectsPlane(this)
    }
    intersectsSphere(t) {
        return t.intersectsPlane(this)
    }
    coplanarPoint(t) {
        return t.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(t, e) {
        const n = e || _h.getNormalMatrix(t)
          , s = this.coplanarPoint(vr).applyMatrix4(t)
          , r = this.normal.applyMatrix3(n).normalize();
        return this.constant = -s.dot(r),
        this
    }
    translate(t) {
        return this.constant -= t.dot(this.normal),
        this
    }
    equals(t) {
        return t.normal.equals(this.normal) && t.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Bn = new ji
  , gh = new Ut(.5,.5)
  , gs = new U;
class yl {
    constructor(t=new An, e=new An, n=new An, s=new An, r=new An, a=new An) {
        this.planes = [t, e, n, s, r, a]
    }
    set(t, e, n, s, r, a) {
        const o = this.planes;
        return o[0].copy(t),
        o[1].copy(e),
        o[2].copy(n),
        o[3].copy(s),
        o[4].copy(r),
        o[5].copy(a),
        this
    }
    copy(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++)
            e[n].copy(t.planes[n]);
        return this
    }
    setFromProjectionMatrix(t, e=mn) {
        const n = this.planes
          , s = t.elements
          , r = s[0]
          , a = s[1]
          , o = s[2]
          , l = s[3]
          , c = s[4]
          , u = s[5]
          , h = s[6]
          , f = s[7]
          , m = s[8]
          , g = s[9]
          , x = s[10]
          , p = s[11]
          , d = s[12]
          , b = s[13]
          , T = s[14]
          , S = s[15];
        if (n[0].setComponents(l - r, f - c, p - m, S - d).normalize(),
        n[1].setComponents(l + r, f + c, p + m, S + d).normalize(),
        n[2].setComponents(l + a, f + u, p + g, S + b).normalize(),
        n[3].setComponents(l - a, f - u, p - g, S - b).normalize(),
        n[4].setComponents(l - o, f - h, p - x, S - T).normalize(),
        e === mn)
            n[5].setComponents(l + o, f + h, p + x, S + T).normalize();
        else if (e === Os)
            n[5].setComponents(o, h, x, T).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        return this
    }
    intersectsObject(t) {
        if (t.boundingSphere !== void 0)
            t.boundingSphere === null && t.computeBoundingSphere(),
            Bn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
        else {
            const e = t.geometry;
            e.boundingSphere === null && e.computeBoundingSphere(),
            Bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
        }
        return this.intersectsSphere(Bn)
    }
    intersectsSprite(t) {
        Bn.center.set(0, 0, 0);
        const e = gh.distanceTo(t.center);
        return Bn.radius = .7071067811865476 + e,
        Bn.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(Bn)
    }
    intersectsSphere(t) {
        const e = this.planes
          , n = t.center
          , s = -t.radius;
        for (let r = 0; r < 6; r++)
            if (e[r].distanceToPoint(n) < s)
                return !1;
        return !0
    }
    intersectsBox(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++) {
            const s = e[n];
            if (gs.x = s.normal.x > 0 ? t.max.x : t.min.x,
            gs.y = s.normal.y > 0 ? t.max.y : t.min.y,
            gs.z = s.normal.z > 0 ? t.max.z : t.min.z,
            s.distanceToPoint(gs) < 0)
                return !1
        }
        return !0
    }
    containsPoint(t) {
        const e = this.planes;
        for (let n = 0; n < 6; n++)
            if (e[n].distanceToPoint(t) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class Us extends sn {
    constructor(t) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new Lt(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this.fog = t.fog,
        this
    }
}
const Bs = new U
  , zs = new U
  , po = new ae
  , Ii = new Ki
  , vs = new ji
  , xr = new U
  , mo = new U;
class vh extends ve {
    constructor(t=new Ze, e=new Us) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = t,
        this.material = e,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position
              , n = [0];
            for (let s = 1, r = e.count; s < r; s++)
                Bs.fromBufferAttribute(e, s - 1),
                zs.fromBufferAttribute(e, s),
                n[s] = n[s - 1],
                n[s] += Bs.distanceTo(zs);
            t.setAttribute("lineDistance", new Ee(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.matrixWorld
          , r = t.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        vs.copy(n.boundingSphere),
        vs.applyMatrix4(s),
        vs.radius += r,
        t.ray.intersectsSphere(vs) === !1)
            return;
        po.copy(s).invert(),
        Ii.copy(t.ray).applyMatrix4(po);
        const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , l = o * o
          , c = this.isLineSegments ? 2 : 1
          , u = n.index
          , f = n.attributes.position;
        if (u !== null) {
            const m = Math.max(0, a.start)
              , g = Math.min(u.count, a.start + a.count);
            for (let x = m, p = g - 1; x < p; x += c) {
                const d = u.getX(x)
                  , b = u.getX(x + 1)
                  , T = xs(this, t, Ii, l, d, b, x);
                T && e.push(T)
            }
            if (this.isLineLoop) {
                const x = u.getX(g - 1)
                  , p = u.getX(m)
                  , d = xs(this, t, Ii, l, x, p, g - 1);
                d && e.push(d)
            }
        } else {
            const m = Math.max(0, a.start)
              , g = Math.min(f.count, a.start + a.count);
            for (let x = m, p = g - 1; x < p; x += c) {
                const d = xs(this, t, Ii, l, x, x + 1, x);
                d && e.push(d)
            }
            if (this.isLineLoop) {
                const x = xs(this, t, Ii, l, g - 1, m, g - 1);
                x && e.push(x)
            }
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    const o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
}
function xs(i, t, e, n, s, r, a) {
    const o = i.geometry.attributes.position;
    if (Bs.fromBufferAttribute(o, s),
    zs.fromBufferAttribute(o, r),
    e.distanceSqToSegment(Bs, zs, xr, mo) > n)
        return;
    xr.applyMatrix4(i.matrixWorld);
    const c = t.ray.origin.distanceTo(xr);
    if (!(c < t.near || c > t.far))
        return {
            distance: c,
            point: mo.clone().applyMatrix4(i.matrixWorld),
            index: a,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: i
        }
}
const _o = new U
  , go = new U;
class vo extends vh {
    constructor(t, e) {
        super(t, e),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const t = this.geometry;
        if (t.index === null) {
            const e = t.attributes.position
              , n = [];
            for (let s = 0, r = e.count; s < r; s += 2)
                _o.fromBufferAttribute(e, s),
                go.fromBufferAttribute(e, s + 1),
                n[s] = s === 0 ? 0 : n[s - 1],
                n[s + 1] = n[s] + _o.distanceTo(go);
            t.setAttribute("lineDistance", new Ee(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class Fi extends sn {
    constructor(t) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new Lt(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this.fog = t.fog,
        this
    }
}
const xo = new ae
  , ga = new Ki
  , Ms = new ji
  , Ss = new U;
class Mr extends ve {
    constructor(t=new Ze, e=new Fi) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = t,
        this.material = e,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.material = Array.isArray(t.material) ? t.material.slice() : t.material,
        this.geometry = t.geometry,
        this
    }
    raycast(t, e) {
        const n = this.geometry
          , s = this.matrixWorld
          , r = t.params.Points.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        Ms.copy(n.boundingSphere),
        Ms.applyMatrix4(s),
        Ms.radius += r,
        t.ray.intersectsSphere(Ms) === !1)
            return;
        xo.copy(s).invert(),
        ga.copy(t.ray).applyMatrix4(xo);
        const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , l = o * o
          , c = n.index
          , h = n.attributes.position;
        if (c !== null) {
            const f = Math.max(0, a.start)
              , m = Math.min(c.count, a.start + a.count);
            for (let g = f, x = m; g < x; g++) {
                const p = c.getX(g);
                Ss.fromBufferAttribute(h, p),
                Mo(Ss, p, l, s, t, e, this)
            }
        } else {
            const f = Math.max(0, a.start)
              , m = Math.min(h.count, a.start + a.count);
            for (let g = f, x = m; g < x; g++)
                Ss.fromBufferAttribute(h, g),
                Mo(Ss, g, l, s, t, e, this)
        }
    }
    updateMorphTargets() {
        const e = this.geometry.morphAttributes
          , n = Object.keys(e);
        if (n.length > 0) {
            const s = e[n[0]];
            if (s !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let r = 0, a = s.length; r < a; r++) {
                    const o = s[r].name || String(r);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = r
                }
            }
        }
    }
}
function Mo(i, t, e, n, s, r, a) {
    const o = ga.distanceSqToPoint(i);
    if (o < e) {
        const l = new U;
        ga.closestPointToPoint(i, l),
        l.applyMatrix4(n);
        const c = s.ray.origin.distanceTo(l);
        if (c < s.near || c > s.far)
            return;
        r.push({
            distance: c,
            distanceToRay: Math.sqrt(o),
            point: l,
            index: t,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: a
        })
    }
}
class Tl extends ye {
    constructor(t, e, n=Yn, s, r, a, o=je, l=je, c, u=Gi, h=1) {
        if (u !== Gi && u !== ki)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        const f = {
            width: t,
            height: e,
            depth: h
        };
        super(f, s, r, a, o, l, u, n, c),
        this.isDepthTexture = !0,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(t) {
        return super.copy(t),
        this.source = new Ca(Object.assign({}, t.image)),
        this.compareFunction = t.compareFunction,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return this.compareFunction !== null && (e.compareFunction = this.compareFunction),
        e
    }
}
class ks extends Ze {
    constructor(t=1, e=1, n=1, s=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: n,
            heightSegments: s
        };
        const r = t / 2
          , a = e / 2
          , o = Math.floor(n)
          , l = Math.floor(s)
          , c = o + 1
          , u = l + 1
          , h = t / o
          , f = e / l
          , m = []
          , g = []
          , x = []
          , p = [];
        for (let d = 0; d < u; d++) {
            const b = d * f - a;
            for (let T = 0; T < c; T++) {
                const S = T * h - r;
                g.push(S, -b, 0),
                x.push(0, 0, 1),
                p.push(T / o),
                p.push(1 - d / l)
            }
        }
        for (let d = 0; d < l; d++)
            for (let b = 0; b < o; b++) {
                const T = b + c * d
                  , S = b + c * (d + 1)
                  , I = b + 1 + c * (d + 1)
                  , R = b + 1 + c * d;
                m.push(T, S, R),
                m.push(S, I, R)
            }
        this.setIndex(m),
        this.setAttribute("position", new Ee(g,3)),
        this.setAttribute("normal", new Ee(x,3)),
        this.setAttribute("uv", new Ee(p,2))
    }
    copy(t) {
        return super.copy(t),
        this.parameters = Object.assign({}, t.parameters),
        this
    }
    static fromJSON(t) {
        return new ks(t.width,t.height,t.widthSegments,t.heightSegments)
    }
}
class xh extends sn {
    constructor(t) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.type = "MeshStandardMaterial",
        this.defines = {
            STANDARD: ""
        },
        this.color = new Lt(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Lt(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Ra,
        this.normalScale = new Ut(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Ke,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapRotation.copy(t.envMapRotation),
        this.envMapIntensity = t.envMapIntensity,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.flatShading = t.flatShading,
        this.fog = t.fog,
        this
    }
}
class Mh extends sn {
    constructor(t) {
        super(),
        this.isMeshPhongMaterial = !0,
        this.type = "MeshPhongMaterial",
        this.color = new Lt(16777215),
        this.specular = new Lt(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Lt(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Ra,
        this.normalScale = new Ut(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Ke,
        this.combine = Sa,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalMapType = t.normalMapType,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapRotation.copy(t.envMapRotation),
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.flatShading = t.flatShading,
        this.fog = t.fog,
        this
    }
}
class Sh extends sn {
    constructor(t) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = Rc,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.depthPacking = t.depthPacking,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
}
class Eh extends sn {
    constructor(t) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(t)
    }
    copy(t) {
        return super.copy(t),
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this
    }
}
const Bi = {
    enabled: !1,
    files: {},
    add: function(i, t) {
        this.enabled !== !1 && (this.files[i] = t)
    },
    get: function(i) {
        if (this.enabled !== !1)
            return this.files[i]
    },
    remove: function(i) {
        delete this.files[i]
    },
    clear: function() {
        this.files = {}
    }
};
class yh {
    constructor(t, e, n) {
        const s = this;
        let r = !1, a = 0, o = 0, l;
        const c = [];
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = n,
        this.itemStart = function(u) {
            o++,
            r === !1 && s.onStart !== void 0 && s.onStart(u, a, o),
            r = !0
        }
        ,
        this.itemEnd = function(u) {
            a++,
            s.onProgress !== void 0 && s.onProgress(u, a, o),
            a === o && (r = !1,
            s.onLoad !== void 0 && s.onLoad())
        }
        ,
        this.itemError = function(u) {
            s.onError !== void 0 && s.onError(u)
        }
        ,
        this.resolveURL = function(u) {
            return l ? l(u) : u
        }
        ,
        this.setURLModifier = function(u) {
            return l = u,
            this
        }
        ,
        this.addHandler = function(u, h) {
            return c.push(u, h),
            this
        }
        ,
        this.removeHandler = function(u) {
            const h = c.indexOf(u);
            return h !== -1 && c.splice(h, 2),
            this
        }
        ,
        this.getHandler = function(u) {
            for (let h = 0, f = c.length; h < f; h += 2) {
                const m = c[h]
                  , g = c[h + 1];
                if (m.global && (m.lastIndex = 0),
                m.test(u))
                    return g
            }
            return null
        }
    }
}
const Th = new yh;
class $i {
    constructor(t) {
        this.manager = t !== void 0 ? t : Th,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(t, e) {
        const n = this;
        return new Promise(function(s, r) {
            n.load(t, s, e, r)
        }
        )
    }
    parse() {}
    setCrossOrigin(t) {
        return this.crossOrigin = t,
        this
    }
    setWithCredentials(t) {
        return this.withCredentials = t,
        this
    }
    setPath(t) {
        return this.path = t,
        this
    }
    setResourcePath(t) {
        return this.resourcePath = t,
        this
    }
    setRequestHeader(t) {
        return this.requestHeader = t,
        this
    }
}
$i.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const dn = {};
class bh extends Error {
    constructor(t, e) {
        super(t),
        this.response = e
    }
}
class Ah extends $i {
    constructor(t) {
        super(t),
        this.mimeType = "",
        this.responseType = ""
    }
    load(t, e, n, s) {
        t === void 0 && (t = ""),
        this.path !== void 0 && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const r = Bi.get(`file:${t}`);
        if (r !== void 0)
            return this.manager.itemStart(t),
            setTimeout( () => {
                e && e(r),
                this.manager.itemEnd(t)
            }
            , 0),
            r;
        if (dn[t] !== void 0) {
            dn[t].push({
                onLoad: e,
                onProgress: n,
                onError: s
            });
            return
        }
        dn[t] = [],
        dn[t].push({
            onLoad: e,
            onProgress: n,
            onError: s
        });
        const a = new Request(t,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        })
          , o = this.mimeType
          , l = this.responseType;
        fetch(a).then(c => {
            if (c.status === 200 || c.status === 0) {
                if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0)
                    return c;
                const u = dn[t]
                  , h = c.body.getReader()
                  , f = c.headers.get("X-File-Size") || c.headers.get("Content-Length")
                  , m = f ? parseInt(f) : 0
                  , g = m !== 0;
                let x = 0;
                const p = new ReadableStream({
                    start(d) {
                        b();
                        function b() {
                            h.read().then( ({done: T, value: S}) => {
                                if (T)
                                    d.close();
                                else {
                                    x += S.byteLength;
                                    const I = new ProgressEvent("progress",{
                                        lengthComputable: g,
                                        loaded: x,
                                        total: m
                                    });
                                    for (let R = 0, w = u.length; R < w; R++) {
                                        const N = u[R];
                                        N.onProgress && N.onProgress(I)
                                    }
                                    d.enqueue(S),
                                    b()
                                }
                            }
                            , T => {
                                d.error(T)
                            }
                            )
                        }
                    }
                });
                return new Response(p)
            } else
                throw new bh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)
        }
        ).then(c => {
            switch (l) {
            case "arraybuffer":
                return c.arrayBuffer();
            case "blob":
                return c.blob();
            case "document":
                return c.text().then(u => new DOMParser().parseFromString(u, o));
            case "json":
                return c.json();
            default:
                if (o === "")
                    return c.text();
                {
                    const h = /charset="?([^;"\s]*)"?/i.exec(o)
                      , f = h && h[1] ? h[1].toLowerCase() : void 0
                      , m = new TextDecoder(f);
                    return c.arrayBuffer().then(g => m.decode(g))
                }
            }
        }
        ).then(c => {
            Bi.add(`file:${t}`, c);
            const u = dn[t];
            delete dn[t];
            for (let h = 0, f = u.length; h < f; h++) {
                const m = u[h];
                m.onLoad && m.onLoad(c)
            }
        }
        ).catch(c => {
            const u = dn[t];
            if (u === void 0)
                throw this.manager.itemError(t),
                c;
            delete dn[t];
            for (let h = 0, f = u.length; h < f; h++) {
                const m = u[h];
                m.onError && m.onError(c)
            }
            this.manager.itemError(t)
        }
        ).finally( () => {
            this.manager.itemEnd(t)
        }
        ),
        this.manager.itemStart(t)
    }
    setResponseType(t) {
        return this.responseType = t,
        this
    }
    setMimeType(t) {
        return this.mimeType = t,
        this
    }
}
const pi = new WeakMap;
class wh extends $i {
    constructor(t) {
        super(t)
    }
    load(t, e, n, s) {
        this.path !== void 0 && (t = this.path + t),
        t = this.manager.resolveURL(t);
        const r = this
          , a = Bi.get(`image:${t}`);
        if (a !== void 0) {
            if (a.complete === !0)
                r.manager.itemStart(t),
                setTimeout(function() {
                    e && e(a),
                    r.manager.itemEnd(t)
                }, 0);
            else {
                let h = pi.get(a);
                h === void 0 && (h = [],
                pi.set(a, h)),
                h.push({
                    onLoad: e,
                    onError: s
                })
            }
            return a
        }
        const o = Wi("img");
        function l() {
            u(),
            e && e(this);
            const h = pi.get(this) || [];
            for (let f = 0; f < h.length; f++) {
                const m = h[f];
                m.onLoad && m.onLoad(this)
            }
            pi.delete(this),
            r.manager.itemEnd(t)
        }
        function c(h) {
            u(),
            s && s(h),
            Bi.remove(`image:${t}`);
            const f = pi.get(this) || [];
            for (let m = 0; m < f.length; m++) {
                const g = f[m];
                g.onError && g.onError(h)
            }
            pi.delete(this),
            r.manager.itemError(t),
            r.manager.itemEnd(t)
        }
        function u() {
            o.removeEventListener("load", l, !1),
            o.removeEventListener("error", c, !1)
        }
        return o.addEventListener("load", l, !1),
        o.addEventListener("error", c, !1),
        t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
        Bi.add(`image:${t}`, o),
        r.manager.itemStart(t),
        o.src = t,
        o
    }
}
class Rh extends $i {
    constructor(t) {
        super(t)
    }
    load(t, e, n, s) {
        const r = new ye
          , a = new wh(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(t, function(o) {
            r.image = o,
            r.needsUpdate = !0,
            e !== void 0 && e(r)
        }, n, s),
        r
    }
}
class Ch extends ve {
    constructor(t, e=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new Lt(t),
        this.intensity = e
    }
    dispose() {}
    copy(t, e) {
        return super.copy(t, e),
        this.color.copy(t.color),
        this.intensity = t.intensity,
        this
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.color = this.color.getHex(),
        e.object.intensity = this.intensity,
        this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (e.object.distance = this.distance),
        this.angle !== void 0 && (e.object.angle = this.angle),
        this.decay !== void 0 && (e.object.decay = this.decay),
        this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
        this.target !== void 0 && (e.object.target = this.target.uuid),
        e
    }
}
class Ph extends Sl {
    constructor(t=-1, e=1, n=1, s=-1, r=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = n,
        this.bottom = s,
        this.near = r,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(t, e) {
        return super.copy(t, e),
        this.left = t.left,
        this.right = t.right,
        this.top = t.top,
        this.bottom = t.bottom,
        this.near = t.near,
        this.far = t.far,
        this.zoom = t.zoom,
        this.view = t.view === null ? null : Object.assign({}, t.view),
        this
    }
    setViewOffset(t, e, n, s, r, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = t,
        this.view.fullHeight = e,
        this.view.offsetX = n,
        this.view.offsetY = s,
        this.view.width = r,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const t = (this.right - this.left) / (2 * this.zoom)
          , e = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , s = (this.top + this.bottom) / 2;
        let r = n - t
          , a = n + t
          , o = s + e
          , l = s - e;
        if (this.view !== null && this.view.enabled) {
            const c = (this.right - this.left) / this.view.fullWidth / this.zoom
              , u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            r += c * this.view.offsetX,
            a = r + c * this.view.width,
            o -= u * this.view.offsetY,
            l = o - u * this.view.height
        }
        this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(t) {
        const e = super.toJSON(t);
        return e.object.zoom = this.zoom,
        e.object.left = this.left,
        e.object.right = this.right,
        e.object.top = this.top,
        e.object.bottom = this.bottom,
        e.object.near = this.near,
        e.object.far = this.far,
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e
    }
}
class Dh extends Ch {
    constructor(t, e) {
        super(t, e),
        this.isAmbientLight = !0,
        this.type = "AmbientLight"
    }
}
class Lh extends ze {
    constructor(t=[]) {
        super(),
        this.isArrayCamera = !0,
        this.isMultiViewCamera = !1,
        this.cameras = t
    }
}
const So = new ae;
class bl {
    constructor(t, e, n=0, s=1 / 0) {
        this.ray = new Ki(t,e),
        this.near = n,
        this.far = s,
        this.camera = null,
        this.layers = new Pa,
        this.params = {
            Mesh: {},
            Line: {
                threshold: 1
            },
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }
    }
    set(t, e) {
        this.ray.set(t, e)
    }
    setFromCamera(t, e) {
        e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
        this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(),
        this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
        this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
        this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
    }
    setFromXRController(t) {
        return So.identity().extractRotation(t.matrixWorld),
        this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(So),
        this
    }
    intersectObject(t, e=!0, n=[]) {
        return va(t, this, n, e),
        n.sort(Eo),
        n
    }
    intersectObjects(t, e=!0, n=[]) {
        for (let s = 0, r = t.length; s < r; s++)
            va(t[s], this, n, e);
        return n.sort(Eo),
        n
    }
}
function Eo(i, t) {
    return i.distance - t.distance
}
function va(i, t, e, n) {
    let s = !0;
    if (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1),
    s === !0 && n === !0) {
        const r = i.children;
        for (let a = 0, o = r.length; a < o; a++)
            va(r[a], t, e, !0)
    }
}
class yo {
    constructor(t=1, e=0, n=0) {
        this.radius = t,
        this.phi = e,
        this.theta = n
    }
    set(t, e, n) {
        return this.radius = t,
        this.phi = e,
        this.theta = n,
        this
    }
    copy(t) {
        return this.radius = t.radius,
        this.phi = t.phi,
        this.theta = t.theta,
        this
    }
    makeSafe() {
        return this.phi = Bt(this.phi, 1e-6, Math.PI - 1e-6),
        this
    }
    setFromVector3(t) {
        return this.setFromCartesianCoords(t.x, t.y, t.z)
    }
    setFromCartesianCoords(t, e, n) {
        return this.radius = Math.sqrt(t * t + e * e + n * n),
        this.radius === 0 ? (this.theta = 0,
        this.phi = 0) : (this.theta = Math.atan2(t, n),
        this.phi = Math.acos(Bt(e / this.radius, -1, 1))),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class Uh extends Jn {
    constructor(t, e=null) {
        super(),
        this.object = t,
        this.domElement = e,
        this.enabled = !0,
        this.state = -1,
        this.keys = {},
        this.mouseButtons = {
            LEFT: null,
            MIDDLE: null,
            RIGHT: null
        },
        this.touches = {
            ONE: null,
            TWO: null
        }
    }
    connect(t) {
        if (t === void 0) {
            console.warn("THREE.Controls: connect() now requires an element.");
            return
        }
        this.domElement !== null && this.disconnect(),
        this.domElement = t
    }
    disconnect() {}
    dispose() {}
    update() {}
}
function To(i, t, e, n) {
    const s = Ih(n);
    switch (e) {
    case ll:
        return i * t;
    case hl:
        return i * t / s.components * s.byteLength;
    case ba:
        return i * t / s.components * s.byteLength;
    case ul:
        return i * t * 2 / s.components * s.byteLength;
    case Aa:
        return i * t * 2 / s.components * s.byteLength;
    case cl:
        return i * t * 3 / s.components * s.byteLength;
    case Ye:
        return i * t * 4 / s.components * s.byteLength;
    case wa:
        return i * t * 4 / s.components * s.byteLength;
    case ws:
    case Rs:
        return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Cs:
    case Ps:
        return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Xr:
    case Yr:
        return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Wr:
    case qr:
        return Math.max(i, 8) * Math.max(t, 8) / 2;
    case jr:
    case Kr:
        return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Zr:
        return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case $r:
        return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Jr:
        return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Qr:
        return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case ta:
        return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ea:
        return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case na:
        return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case ia:
        return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case sa:
        return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case ra:
        return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case aa:
        return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case oa:
        return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case la:
        return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case ca:
        return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ha:
        return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Ds:
    case ua:
    case da:
        return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case dl:
    case fa:
        return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case pa:
    case ma:
        return Math.ceil(i / 4) * Math.ceil(t / 4) * 16
    }
    throw new Error(`Unable to determine texture byte length for ${e} format.`)
}
function Ih(i) {
    switch (i) {
    case xn:
    case rl:
        return {
            byteLength: 1,
            components: 1
        };
    case Hi:
    case al:
    case Xi:
        return {
            byteLength: 2,
            components: 1
        };
    case ya:
    case Ta:
        return {
            byteLength: 2,
            components: 4
        };
    case Yn:
    case Ea:
    case pn:
        return {
            byteLength: 4,
            components: 1
        };
    case ol:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw new Error(`Unknown texture type ${i}.`)
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: Ma
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ma);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
function Al() {
    let i = null
      , t = !1
      , e = null
      , n = null;
    function s(r, a) {
        e(r, a),
        n = i.requestAnimationFrame(s)
    }
    return {
        start: function() {
            t !== !0 && e !== null && (n = i.requestAnimationFrame(s),
            t = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            t = !1
        },
        setAnimationLoop: function(r) {
            e = r
        },
        setContext: function(r) {
            i = r
        }
    }
}
function Nh(i) {
    const t = new WeakMap;
    function e(o, l) {
        const c = o.array
          , u = o.usage
          , h = c.byteLength
          , f = i.createBuffer();
        i.bindBuffer(l, f),
        i.bufferData(l, c, u),
        o.onUploadCallback();
        let m;
        if (c instanceof Float32Array)
            m = i.FLOAT;
        else if (typeof Float16Array < "u" && c instanceof Float16Array)
            m = i.HALF_FLOAT;
        else if (c instanceof Uint16Array)
            o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
        else if (c instanceof Int16Array)
            m = i.SHORT;
        else if (c instanceof Uint32Array)
            m = i.UNSIGNED_INT;
        else if (c instanceof Int32Array)
            m = i.INT;
        else if (c instanceof Int8Array)
            m = i.BYTE;
        else if (c instanceof Uint8Array)
            m = i.UNSIGNED_BYTE;
        else if (c instanceof Uint8ClampedArray)
            m = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
        return {
            buffer: f,
            type: m,
            bytesPerElement: c.BYTES_PER_ELEMENT,
            version: o.version,
            size: h
        }
    }
    function n(o, l, c) {
        const u = l.array
          , h = l.updateRanges;
        if (i.bindBuffer(c, o),
        h.length === 0)
            i.bufferSubData(c, 0, u);
        else {
            h.sort( (m, g) => m.start - g.start);
            let f = 0;
            for (let m = 1; m < h.length; m++) {
                const g = h[f]
                  , x = h[m];
                x.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, x.start + x.count - g.start) : (++f,
                h[f] = x)
            }
            h.length = f + 1;
            for (let m = 0, g = h.length; m < g; m++) {
                const x = h[m];
                i.bufferSubData(c, x.start * u.BYTES_PER_ELEMENT, u, x.start, x.count)
            }
            l.clearUpdateRanges()
        }
        l.onUploadCallback()
    }
    function s(o) {
        return o.isInterleavedBufferAttribute && (o = o.data),
        t.get(o)
    }
    function r(o) {
        o.isInterleavedBufferAttribute && (o = o.data);
        const l = t.get(o);
        l && (i.deleteBuffer(l.buffer),
        t.delete(o))
    }
    function a(o, l) {
        if (o.isInterleavedBufferAttribute && (o = o.data),
        o.isGLBufferAttribute) {
            const u = t.get(o);
            (!u || u.version < o.version) && t.set(o, {
                buffer: o.buffer,
                type: o.type,
                bytesPerElement: o.elementSize,
                version: o.version
            });
            return
        }
        const c = t.get(o);
        if (c === void 0)
            t.set(o, e(o, l));
        else if (c.version < o.version) {
            if (c.size !== o.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(c.buffer, o, l),
            c.version = o.version
        }
    }
    return {
        get: s,
        remove: r,
        update: a
    }
}
var Fh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , Oh = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , Bh = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , zh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Hh = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , Vh = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , Gh = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , kh = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , Wh = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`
  , Xh = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
  , qh = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , Yh = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , jh = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , Kh = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , Zh = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , $h = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , Jh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , Qh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , tu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , eu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , nu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , iu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`
  , su = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`
  , ru = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , au = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , ou = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , lu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , cu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , hu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , uu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , du = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , fu = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , pu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , mu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , _u = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , gu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , vu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , xu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , Mu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , Su = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Eu = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , yu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , Tu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , bu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , Au = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , wu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Ru = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , Cu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , Pu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Du = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , Lu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , Uu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , Iu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Nu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Fu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , Ou = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , Bu = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , zu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Hu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , Vu = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , Gu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , ku = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , Wu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Xu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , qu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , Yu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , ju = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , Ku = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , Zu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , $u = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
  , Ju = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , Qu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , td = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , ed = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , nd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , id = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , sd = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , rd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , ad = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , od = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , ld = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , cd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , hd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , ud = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , dd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , fd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , pd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , md = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , _d = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , gd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`
  , vd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , xd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Md = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Sd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Ed = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , yd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , Td = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , bd = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Ad = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , wd = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Rd = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , Cd = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Pd = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , Dd = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Ld = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Ud = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , Id = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Nd = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Fd = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Od = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Bd = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , zd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Hd = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Vd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , Gd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
  , kd = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , Wd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , Xd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , qd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Yd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , jd = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Kd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , Zd = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , $d = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Jd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Qd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , tf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , ef = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , nf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , sf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , rf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , af = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , of = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , lf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , cf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , hf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , uf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , df = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , ff = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , pf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , mf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Ft = {
    alphahash_fragment: Fh,
    alphahash_pars_fragment: Oh,
    alphamap_fragment: Bh,
    alphamap_pars_fragment: zh,
    alphatest_fragment: Hh,
    alphatest_pars_fragment: Vh,
    aomap_fragment: Gh,
    aomap_pars_fragment: kh,
    batching_pars_vertex: Wh,
    batching_vertex: Xh,
    begin_vertex: qh,
    beginnormal_vertex: Yh,
    bsdfs: jh,
    iridescence_fragment: Kh,
    bumpmap_pars_fragment: Zh,
    clipping_planes_fragment: $h,
    clipping_planes_pars_fragment: Jh,
    clipping_planes_pars_vertex: Qh,
    clipping_planes_vertex: tu,
    color_fragment: eu,
    color_pars_fragment: nu,
    color_pars_vertex: iu,
    color_vertex: su,
    common: ru,
    cube_uv_reflection_fragment: au,
    defaultnormal_vertex: ou,
    displacementmap_pars_vertex: lu,
    displacementmap_vertex: cu,
    emissivemap_fragment: hu,
    emissivemap_pars_fragment: uu,
    colorspace_fragment: du,
    colorspace_pars_fragment: fu,
    envmap_fragment: pu,
    envmap_common_pars_fragment: mu,
    envmap_pars_fragment: _u,
    envmap_pars_vertex: gu,
    envmap_physical_pars_fragment: Ru,
    envmap_vertex: vu,
    fog_vertex: xu,
    fog_pars_vertex: Mu,
    fog_fragment: Su,
    fog_pars_fragment: Eu,
    gradientmap_pars_fragment: yu,
    lightmap_pars_fragment: Tu,
    lights_lambert_fragment: bu,
    lights_lambert_pars_fragment: Au,
    lights_pars_begin: wu,
    lights_toon_fragment: Cu,
    lights_toon_pars_fragment: Pu,
    lights_phong_fragment: Du,
    lights_phong_pars_fragment: Lu,
    lights_physical_fragment: Uu,
    lights_physical_pars_fragment: Iu,
    lights_fragment_begin: Nu,
    lights_fragment_maps: Fu,
    lights_fragment_end: Ou,
    logdepthbuf_fragment: Bu,
    logdepthbuf_pars_fragment: zu,
    logdepthbuf_pars_vertex: Hu,
    logdepthbuf_vertex: Vu,
    map_fragment: Gu,
    map_pars_fragment: ku,
    map_particle_fragment: Wu,
    map_particle_pars_fragment: Xu,
    metalnessmap_fragment: qu,
    metalnessmap_pars_fragment: Yu,
    morphinstance_vertex: ju,
    morphcolor_vertex: Ku,
    morphnormal_vertex: Zu,
    morphtarget_pars_vertex: $u,
    morphtarget_vertex: Ju,
    normal_fragment_begin: Qu,
    normal_fragment_maps: td,
    normal_pars_fragment: ed,
    normal_pars_vertex: nd,
    normal_vertex: id,
    normalmap_pars_fragment: sd,
    clearcoat_normal_fragment_begin: rd,
    clearcoat_normal_fragment_maps: ad,
    clearcoat_pars_fragment: od,
    iridescence_pars_fragment: ld,
    opaque_fragment: cd,
    packing: hd,
    premultiplied_alpha_fragment: ud,
    project_vertex: dd,
    dithering_fragment: fd,
    dithering_pars_fragment: pd,
    roughnessmap_fragment: md,
    roughnessmap_pars_fragment: _d,
    shadowmap_pars_fragment: gd,
    shadowmap_pars_vertex: vd,
    shadowmap_vertex: xd,
    shadowmask_pars_fragment: Md,
    skinbase_vertex: Sd,
    skinning_pars_vertex: Ed,
    skinning_vertex: yd,
    skinnormal_vertex: Td,
    specularmap_fragment: bd,
    specularmap_pars_fragment: Ad,
    tonemapping_fragment: wd,
    tonemapping_pars_fragment: Rd,
    transmission_fragment: Cd,
    transmission_pars_fragment: Pd,
    uv_pars_fragment: Dd,
    uv_pars_vertex: Ld,
    uv_vertex: Ud,
    worldpos_vertex: Id,
    background_vert: Nd,
    background_frag: Fd,
    backgroundCube_vert: Od,
    backgroundCube_frag: Bd,
    cube_vert: zd,
    cube_frag: Hd,
    depth_vert: Vd,
    depth_frag: Gd,
    distanceRGBA_vert: kd,
    distanceRGBA_frag: Wd,
    equirect_vert: Xd,
    equirect_frag: qd,
    linedashed_vert: Yd,
    linedashed_frag: jd,
    meshbasic_vert: Kd,
    meshbasic_frag: Zd,
    meshlambert_vert: $d,
    meshlambert_frag: Jd,
    meshmatcap_vert: Qd,
    meshmatcap_frag: tf,
    meshnormal_vert: ef,
    meshnormal_frag: nf,
    meshphong_vert: sf,
    meshphong_frag: rf,
    meshphysical_vert: af,
    meshphysical_frag: of,
    meshtoon_vert: lf,
    meshtoon_frag: cf,
    points_vert: hf,
    points_frag: uf,
    shadow_vert: df,
    shadow_frag: ff,
    sprite_vert: pf,
    sprite_frag: mf
}
  , it = {
    common: {
        diffuse: {
            value: new Lt(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new It
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new It
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new It
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new It
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new It
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new It
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new It
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new It
        },
        normalScale: {
            value: new Ut(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new It
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new It
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new It
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new It
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Lt(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Lt(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new It
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new It
        }
    },
    sprite: {
        diffuse: {
            value: new Lt(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Ut(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new It
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new It
        },
        alphaTest: {
            value: 0
        }
    }
}
  , Je = {
    basic: {
        uniforms: Se([it.common, it.specularmap, it.envmap, it.aomap, it.lightmap, it.fog]),
        vertexShader: Ft.meshbasic_vert,
        fragmentShader: Ft.meshbasic_frag
    },
    lambert: {
        uniforms: Se([it.common, it.specularmap, it.envmap, it.aomap, it.lightmap, it.emissivemap, it.bumpmap, it.normalmap, it.displacementmap, it.fog, it.lights, {
            emissive: {
                value: new Lt(0)
            }
        }]),
        vertexShader: Ft.meshlambert_vert,
        fragmentShader: Ft.meshlambert_frag
    },
    phong: {
        uniforms: Se([it.common, it.specularmap, it.envmap, it.aomap, it.lightmap, it.emissivemap, it.bumpmap, it.normalmap, it.displacementmap, it.fog, it.lights, {
            emissive: {
                value: new Lt(0)
            },
            specular: {
                value: new Lt(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: Ft.meshphong_vert,
        fragmentShader: Ft.meshphong_frag
    },
    standard: {
        uniforms: Se([it.common, it.envmap, it.aomap, it.lightmap, it.emissivemap, it.bumpmap, it.normalmap, it.displacementmap, it.roughnessmap, it.metalnessmap, it.fog, it.lights, {
            emissive: {
                value: new Lt(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Ft.meshphysical_vert,
        fragmentShader: Ft.meshphysical_frag
    },
    toon: {
        uniforms: Se([it.common, it.aomap, it.lightmap, it.emissivemap, it.bumpmap, it.normalmap, it.displacementmap, it.gradientmap, it.fog, it.lights, {
            emissive: {
                value: new Lt(0)
            }
        }]),
        vertexShader: Ft.meshtoon_vert,
        fragmentShader: Ft.meshtoon_frag
    },
    matcap: {
        uniforms: Se([it.common, it.bumpmap, it.normalmap, it.displacementmap, it.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Ft.meshmatcap_vert,
        fragmentShader: Ft.meshmatcap_frag
    },
    points: {
        uniforms: Se([it.points, it.fog]),
        vertexShader: Ft.points_vert,
        fragmentShader: Ft.points_frag
    },
    dashed: {
        uniforms: Se([it.common, it.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Ft.linedashed_vert,
        fragmentShader: Ft.linedashed_frag
    },
    depth: {
        uniforms: Se([it.common, it.displacementmap]),
        vertexShader: Ft.depth_vert,
        fragmentShader: Ft.depth_frag
    },
    normal: {
        uniforms: Se([it.common, it.bumpmap, it.normalmap, it.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ft.meshnormal_vert,
        fragmentShader: Ft.meshnormal_frag
    },
    sprite: {
        uniforms: Se([it.sprite, it.fog]),
        vertexShader: Ft.sprite_vert,
        fragmentShader: Ft.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new It
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Ft.background_vert,
        fragmentShader: Ft.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new It
            }
        },
        vertexShader: Ft.backgroundCube_vert,
        fragmentShader: Ft.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Ft.cube_vert,
        fragmentShader: Ft.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Ft.equirect_vert,
        fragmentShader: Ft.equirect_frag
    },
    distanceRGBA: {
        uniforms: Se([it.common, it.displacementmap, {
            referencePosition: {
                value: new U
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Ft.distanceRGBA_vert,
        fragmentShader: Ft.distanceRGBA_frag
    },
    shadow: {
        uniforms: Se([it.lights, it.fog, {
            color: {
                value: new Lt(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ft.shadow_vert,
        fragmentShader: Ft.shadow_frag
    }
};
Je.physical = {
    uniforms: Se([Je.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new It
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new It
        },
        clearcoatNormalScale: {
            value: new Ut(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new It
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new It
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new It
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new Lt(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new It
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new It
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new It
        },
        transmissionSamplerSize: {
            value: new Ut
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new It
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new Lt(0)
        },
        specularColor: {
            value: new Lt(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new It
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new It
        },
        anisotropyVector: {
            value: new Ut
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new It
        }
    }]),
    vertexShader: Ft.meshphysical_vert,
    fragmentShader: Ft.meshphysical_frag
};
const Es = {
    r: 0,
    b: 0,
    g: 0
}
  , zn = new Ke
  , _f = new ae;
function gf(i, t, e, n, s, r, a) {
    const o = new Lt(0);
    let l = r === !0 ? 0 : 1, c, u, h = null, f = 0, m = null;
    function g(T) {
        let S = T.isScene === !0 ? T.background : null;
        return S && S.isTexture && (S = (T.backgroundBlurriness > 0 ? e : t).get(S)),
        S
    }
    function x(T) {
        let S = !1;
        const I = g(T);
        I === null ? d(o, l) : I && I.isColor && (d(I, 1),
        S = !0);
        const R = i.xr.getEnvironmentBlendMode();
        R === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : R === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
        (i.autoClear || S) && (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
    }
    function p(T, S) {
        const I = g(S);
        I && (I.isCubeTexture || I.mapping === Gs) ? (u === void 0 && (u = new He(new Zi(1,1,1),new Dn({
            name: "BackgroundCubeMaterial",
            uniforms: Ai(Je.backgroundCube.uniforms),
            vertexShader: Je.backgroundCube.vertexShader,
            fragmentShader: Je.backgroundCube.fragmentShader,
            side: Pe,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        u.geometry.deleteAttribute("normal"),
        u.geometry.deleteAttribute("uv"),
        u.onBeforeRender = function(R, w, N) {
            this.matrixWorld.copyPosition(N.matrixWorld)
        }
        ,
        Object.defineProperty(u.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        s.update(u)),
        zn.copy(S.backgroundRotation),
        zn.x *= -1,
        zn.y *= -1,
        zn.z *= -1,
        I.isCubeTexture && I.isRenderTargetTexture === !1 && (zn.y *= -1,
        zn.z *= -1),
        u.material.uniforms.envMap.value = I,
        u.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1,
        u.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness,
        u.material.uniforms.backgroundIntensity.value = S.backgroundIntensity,
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(_f.makeRotationFromEuler(zn)),
        u.material.toneMapped = Gt.getTransfer(I.colorSpace) !== jt,
        (h !== I || f !== I.version || m !== i.toneMapping) && (u.material.needsUpdate = !0,
        h = I,
        f = I.version,
        m = i.toneMapping),
        u.layers.enableAll(),
        T.unshift(u, u.geometry, u.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new He(new ks(2,2),new Dn({
            name: "BackgroundMaterial",
            uniforms: Ai(Je.background.uniforms),
            vertexShader: Je.background.vertexShader,
            fragmentShader: Je.background.fragmentShader,
            side: Pn,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        c.geometry.deleteAttribute("normal"),
        Object.defineProperty(c.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        s.update(c)),
        c.material.uniforms.t2D.value = I,
        c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity,
        c.material.toneMapped = Gt.getTransfer(I.colorSpace) !== jt,
        I.matrixAutoUpdate === !0 && I.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(I.matrix),
        (h !== I || f !== I.version || m !== i.toneMapping) && (c.material.needsUpdate = !0,
        h = I,
        f = I.version,
        m = i.toneMapping),
        c.layers.enableAll(),
        T.unshift(c, c.geometry, c.material, 0, 0, null))
    }
    function d(T, S) {
        T.getRGB(Es, Ml(i)),
        n.buffers.color.setClear(Es.r, Es.g, Es.b, S, a)
    }
    function b() {
        u !== void 0 && (u.geometry.dispose(),
        u.material.dispose(),
        u = void 0),
        c !== void 0 && (c.geometry.dispose(),
        c.material.dispose(),
        c = void 0)
    }
    return {
        getClearColor: function() {
            return o
        },
        setClearColor: function(T, S=1) {
            o.set(T),
            l = S,
            d(o, l)
        },
        getClearAlpha: function() {
            return l
        },
        setClearAlpha: function(T) {
            l = T,
            d(o, l)
        },
        render: x,
        addToRenderList: p,
        dispose: b
    }
}
function vf(i, t) {
    const e = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , n = {}
      , s = f(null);
    let r = s
      , a = !1;
    function o(M, P, k, z, j) {
        let K = !1;
        const X = h(z, k, P);
        r !== X && (r = X,
        c(r.object)),
        K = m(M, z, k, j),
        K && g(M, z, k, j),
        j !== null && t.update(j, i.ELEMENT_ARRAY_BUFFER),
        (K || a) && (a = !1,
        S(M, P, k, z),
        j !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(j).buffer))
    }
    function l() {
        return i.createVertexArray()
    }
    function c(M) {
        return i.bindVertexArray(M)
    }
    function u(M) {
        return i.deleteVertexArray(M)
    }
    function h(M, P, k) {
        const z = k.wireframe === !0;
        let j = n[M.id];
        j === void 0 && (j = {},
        n[M.id] = j);
        let K = j[P.id];
        K === void 0 && (K = {},
        j[P.id] = K);
        let X = K[z];
        return X === void 0 && (X = f(l()),
        K[z] = X),
        X
    }
    function f(M) {
        const P = []
          , k = []
          , z = [];
        for (let j = 0; j < e; j++)
            P[j] = 0,
            k[j] = 0,
            z[j] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: P,
            enabledAttributes: k,
            attributeDivisors: z,
            object: M,
            attributes: {},
            index: null
        }
    }
    function m(M, P, k, z) {
        const j = r.attributes
          , K = P.attributes;
        let X = 0;
        const $ = k.getAttributes();
        for (const H in $)
            if ($[H].location >= 0) {
                const ut = j[H];
                let St = K[H];
                if (St === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (St = M.instanceMatrix),
                H === "instanceColor" && M.instanceColor && (St = M.instanceColor)),
                ut === void 0 || ut.attribute !== St || St && ut.data !== St.data)
                    return !0;
                X++
            }
        return r.attributesNum !== X || r.index !== z
    }
    function g(M, P, k, z) {
        const j = {}
          , K = P.attributes;
        let X = 0;
        const $ = k.getAttributes();
        for (const H in $)
            if ($[H].location >= 0) {
                let ut = K[H];
                ut === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (ut = M.instanceMatrix),
                H === "instanceColor" && M.instanceColor && (ut = M.instanceColor));
                const St = {};
                St.attribute = ut,
                ut && ut.data && (St.data = ut.data),
                j[H] = St,
                X++
            }
        r.attributes = j,
        r.attributesNum = X,
        r.index = z
    }
    function x() {
        const M = r.newAttributes;
        for (let P = 0, k = M.length; P < k; P++)
            M[P] = 0
    }
    function p(M) {
        d(M, 0)
    }
    function d(M, P) {
        const k = r.newAttributes
          , z = r.enabledAttributes
          , j = r.attributeDivisors;
        k[M] = 1,
        z[M] === 0 && (i.enableVertexAttribArray(M),
        z[M] = 1),
        j[M] !== P && (i.vertexAttribDivisor(M, P),
        j[M] = P)
    }
    function b() {
        const M = r.newAttributes
          , P = r.enabledAttributes;
        for (let k = 0, z = P.length; k < z; k++)
            P[k] !== M[k] && (i.disableVertexAttribArray(k),
            P[k] = 0)
    }
    function T(M, P, k, z, j, K, X) {
        X === !0 ? i.vertexAttribIPointer(M, P, k, j, K) : i.vertexAttribPointer(M, P, k, z, j, K)
    }
    function S(M, P, k, z) {
        x();
        const j = z.attributes
          , K = k.getAttributes()
          , X = P.defaultAttributeValues;
        for (const $ in K) {
            const H = K[$];
            if (H.location >= 0) {
                let ot = j[$];
                if (ot === void 0 && ($ === "instanceMatrix" && M.instanceMatrix && (ot = M.instanceMatrix),
                $ === "instanceColor" && M.instanceColor && (ot = M.instanceColor)),
                ot !== void 0) {
                    const ut = ot.normalized
                      , St = ot.itemSize
                      , Ot = t.get(ot);
                    if (Ot === void 0)
                        continue;
                    const Zt = Ot.buffer
                      , W = Ot.type
                      , et = Ot.bytesPerElement
                      , xt = W === i.INT || W === i.UNSIGNED_INT || ot.gpuType === Ea;
                    if (ot.isInterleavedBufferAttribute) {
                        const lt = ot.data
                          , Mt = lt.stride
                          , kt = ot.offset;
                        if (lt.isInstancedInterleavedBuffer) {
                            for (let wt = 0; wt < H.locationSize; wt++)
                                d(H.location + wt, lt.meshPerAttribute);
                            M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = lt.meshPerAttribute * lt.count)
                        } else
                            for (let wt = 0; wt < H.locationSize; wt++)
                                p(H.location + wt);
                        i.bindBuffer(i.ARRAY_BUFFER, Zt);
                        for (let wt = 0; wt < H.locationSize; wt++)
                            T(H.location + wt, St / H.locationSize, W, ut, Mt * et, (kt + St / H.locationSize * wt) * et, xt)
                    } else {
                        if (ot.isInstancedBufferAttribute) {
                            for (let lt = 0; lt < H.locationSize; lt++)
                                d(H.location + lt, ot.meshPerAttribute);
                            M.isInstancedMesh !== !0 && z._maxInstanceCount === void 0 && (z._maxInstanceCount = ot.meshPerAttribute * ot.count)
                        } else
                            for (let lt = 0; lt < H.locationSize; lt++)
                                p(H.location + lt);
                        i.bindBuffer(i.ARRAY_BUFFER, Zt);
                        for (let lt = 0; lt < H.locationSize; lt++)
                            T(H.location + lt, St / H.locationSize, W, ut, St * et, St / H.locationSize * lt * et, xt)
                    }
                } else if (X !== void 0) {
                    const ut = X[$];
                    if (ut !== void 0)
                        switch (ut.length) {
                        case 2:
                            i.vertexAttrib2fv(H.location, ut);
                            break;
                        case 3:
                            i.vertexAttrib3fv(H.location, ut);
                            break;
                        case 4:
                            i.vertexAttrib4fv(H.location, ut);
                            break;
                        default:
                            i.vertexAttrib1fv(H.location, ut)
                        }
                }
            }
        }
        b()
    }
    function I() {
        N();
        for (const M in n) {
            const P = n[M];
            for (const k in P) {
                const z = P[k];
                for (const j in z)
                    u(z[j].object),
                    delete z[j];
                delete P[k]
            }
            delete n[M]
        }
    }
    function R(M) {
        if (n[M.id] === void 0)
            return;
        const P = n[M.id];
        for (const k in P) {
            const z = P[k];
            for (const j in z)
                u(z[j].object),
                delete z[j];
            delete P[k]
        }
        delete n[M.id]
    }
    function w(M) {
        for (const P in n) {
            const k = n[P];
            if (k[M.id] === void 0)
                continue;
            const z = k[M.id];
            for (const j in z)
                u(z[j].object),
                delete z[j];
            delete k[M.id]
        }
    }
    function N() {
        E(),
        a = !0,
        r !== s && (r = s,
        c(r.object))
    }
    function E() {
        s.geometry = null,
        s.program = null,
        s.wireframe = !1
    }
    return {
        setup: o,
        reset: N,
        resetDefaultState: E,
        dispose: I,
        releaseStatesOfGeometry: R,
        releaseStatesOfProgram: w,
        initAttributes: x,
        enableAttribute: p,
        disableUnusedAttributes: b
    }
}
function xf(i, t, e) {
    let n;
    function s(c) {
        n = c
    }
    function r(c, u) {
        i.drawArrays(n, c, u),
        e.update(u, n, 1)
    }
    function a(c, u, h) {
        h !== 0 && (i.drawArraysInstanced(n, c, u, h),
        e.update(u, n, h))
    }
    function o(c, u, h) {
        if (h === 0)
            return;
        t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
        let m = 0;
        for (let g = 0; g < h; g++)
            m += u[g];
        e.update(m, n, 1)
    }
    function l(c, u, h, f) {
        if (h === 0)
            return;
        const m = t.get("WEBGL_multi_draw");
        if (m === null)
            for (let g = 0; g < c.length; g++)
                a(c[g], u[g], f[g]);
        else {
            m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, f, 0, h);
            let g = 0;
            for (let x = 0; x < h; x++)
                g += u[x] * f[x];
            e.update(g, n, 1)
        }
    }
    this.setMode = s,
    this.render = r,
    this.renderInstances = a,
    this.renderMultiDraw = o,
    this.renderMultiDrawInstances = l
}
function Mf(i, t, e, n) {
    let s;
    function r() {
        if (s !== void 0)
            return s;
        if (t.has("EXT_texture_filter_anisotropic") === !0) {
            const w = t.get("EXT_texture_filter_anisotropic");
            s = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            s = 0;
        return s
    }
    function a(w) {
        return !(w !== Ye && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function o(w) {
        const N = w === Xi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
        return !(w !== xn && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && w !== pn && !N)
    }
    function l(w) {
        if (w === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            w = "mediump"
        }
        return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let c = e.precision !== void 0 ? e.precision : "highp";
    const u = l(c);
    u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."),
    c = u);
    const h = e.logarithmicDepthBuffer === !0
      , f = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control")
      , m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , x = i.getParameter(i.MAX_TEXTURE_SIZE)
      , p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , d = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , T = i.getParameter(i.MAX_VARYING_VECTORS)
      , S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , I = g > 0
      , R = i.getParameter(i.MAX_SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: r,
        getMaxPrecision: l,
        textureFormatReadable: a,
        textureTypeReadable: o,
        precision: c,
        logarithmicDepthBuffer: h,
        reverseDepthBuffer: f,
        maxTextures: m,
        maxVertexTextures: g,
        maxTextureSize: x,
        maxCubemapSize: p,
        maxAttributes: d,
        maxVertexUniforms: b,
        maxVaryings: T,
        maxFragmentUniforms: S,
        vertexTextures: I,
        maxSamples: R
    }
}
function Sf(i) {
    const t = this;
    let e = null
      , n = 0
      , s = !1
      , r = !1;
    const a = new An
      , o = new It
      , l = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = l,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(h, f) {
        const m = h.length !== 0 || f || n !== 0 || s;
        return s = f,
        n = h.length,
        m
    }
    ,
    this.beginShadows = function() {
        r = !0,
        u(null)
    }
    ,
    this.endShadows = function() {
        r = !1
    }
    ,
    this.setGlobalState = function(h, f) {
        e = u(h, f, 0)
    }
    ,
    this.setState = function(h, f, m) {
        const g = h.clippingPlanes
          , x = h.clipIntersection
          , p = h.clipShadows
          , d = i.get(h);
        if (!s || g === null || g.length === 0 || r && !p)
            r ? u(null) : c();
        else {
            const b = r ? 0 : n
              , T = b * 4;
            let S = d.clippingState || null;
            l.value = S,
            S = u(g, f, T, m);
            for (let I = 0; I !== T; ++I)
                S[I] = e[I];
            d.clippingState = S,
            this.numIntersection = x ? this.numPlanes : 0,
            this.numPlanes += b
        }
    }
    ;
    function c() {
        l.value !== e && (l.value = e,
        l.needsUpdate = n > 0),
        t.numPlanes = n,
        t.numIntersection = 0
    }
    function u(h, f, m, g) {
        const x = h !== null ? h.length : 0;
        let p = null;
        if (x !== 0) {
            if (p = l.value,
            g !== !0 || p === null) {
                const d = m + x * 4
                  , b = f.matrixWorldInverse;
                o.getNormalMatrix(b),
                (p === null || p.length < d) && (p = new Float32Array(d));
                for (let T = 0, S = m; T !== x; ++T,
                S += 4)
                    a.copy(h[T]).applyMatrix4(b, o),
                    a.normal.toArray(p, S),
                    p[S + 3] = a.constant
            }
            l.value = p,
            l.needsUpdate = !0
        }
        return t.numPlanes = x,
        t.numIntersection = 0,
        p
    }
}
function Ef(i) {
    let t = new WeakMap;
    function e(a, o) {
        return o === Ns ? a.mapping = yi : o === Vr && (a.mapping = Ti),
        a
    }
    function n(a) {
        if (a && a.isTexture) {
            const o = a.mapping;
            if (o === Ns || o === Vr)
                if (t.has(a)) {
                    const l = t.get(a).texture;
                    return e(l, a.mapping)
                } else {
                    const l = a.image;
                    if (l && l.height > 0) {
                        const c = new dh(l.height);
                        return c.fromEquirectangularTexture(i, a),
                        t.set(a, c),
                        a.addEventListener("dispose", s),
                        e(c.texture, a.mapping)
                    } else
                        return null
                }
        }
        return a
    }
    function s(a) {
        const o = a.target;
        o.removeEventListener("dispose", s);
        const l = t.get(o);
        l !== void 0 && (t.delete(o),
        l.dispose())
    }
    function r() {
        t = new WeakMap
    }
    return {
        get: n,
        dispose: r
    }
}
const gi = 4
  , bo = [.125, .215, .35, .446, .526, .582]
  , kn = 20
  , Sr = new Ph
  , Ao = new Lt;
let Er = null
  , yr = 0
  , Tr = 0
  , br = !1;
const Vn = (1 + Math.sqrt(5)) / 2
  , mi = 1 / Vn
  , wo = [new U(-Vn,mi,0), new U(Vn,mi,0), new U(-mi,0,Vn), new U(mi,0,Vn), new U(0,Vn,-mi), new U(0,Vn,mi), new U(-1,1,-1), new U(1,1,-1), new U(-1,1,1), new U(1,1,1)]
  , yf = new U;
class Ro {
    constructor(t) {
        this._renderer = t,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(t, e=0, n=.1, s=100, r={}) {
        const {size: a=256, position: o=yf} = r;
        Er = this._renderer.getRenderTarget(),
        yr = this._renderer.getActiveCubeFace(),
        Tr = this._renderer.getActiveMipmapLevel(),
        br = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(a);
        const l = this._allocateTargets();
        return l.depthBuffer = !0,
        this._sceneToCubeUV(t, n, s, l, o),
        e > 0 && this._blur(l, 0, 0, e),
        this._applyPMREM(l),
        this._cleanup(l),
        l
    }
    fromEquirectangular(t, e=null) {
        return this._fromTexture(t, e)
    }
    fromCubemap(t, e=null) {
        return this._fromTexture(t, e)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Do(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = Po(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(t) {
        this._lodMax = Math.floor(Math.log2(t)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let t = 0; t < this._lodPlanes.length; t++)
            this._lodPlanes[t].dispose()
    }
    _cleanup(t) {
        this._renderer.setRenderTarget(Er, yr, Tr),
        this._renderer.xr.enabled = br,
        t.scissorTest = !1,
        ys(t, 0, 0, t.width, t.height)
    }
    _fromTexture(t, e) {
        t.mapping === yi || t.mapping === Ti ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4),
        Er = this._renderer.getRenderTarget(),
        yr = this._renderer.getActiveCubeFace(),
        Tr = this._renderer.getActiveMipmapLevel(),
        br = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const n = e || this._allocateTargets();
        return this._textureToCubeUV(t, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const t = 3 * Math.max(this._cubeSize, 112)
          , e = 4 * this._cubeSize
          , n = {
            magFilter: en,
            minFilter: en,
            generateMipmaps: !1,
            type: Xi,
            format: Ye,
            colorSpace: bi,
            depthBuffer: !1
        }
          , s = Co(t, e, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = Co(t, e, n);
            const {_lodMax: r} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = Tf(r)),
            this._blurMaterial = bf(r, t, e)
        }
        return s
    }
    _compileMaterial(t) {
        const e = new He(this._lodPlanes[0],t);
        this._renderer.compile(e, Sr)
    }
    _sceneToCubeUV(t, e, n, s, r) {
        const l = new ze(90,1,e,n)
          , c = [1, -1, 1, 1, 1, 1]
          , u = [1, 1, 1, -1, -1, -1]
          , h = this._renderer
          , f = h.autoClear
          , m = h.toneMapping;
        h.getClearColor(Ao),
        h.toneMapping = Cn,
        h.autoClear = !1;
        const g = new gl({
            name: "PMREM.Background",
            side: Pe,
            depthWrite: !1,
            depthTest: !1
        })
          , x = new He(new Zi,g);
        let p = !1;
        const d = t.background;
        d ? d.isColor && (g.color.copy(d),
        t.background = null,
        p = !0) : (g.color.copy(Ao),
        p = !0);
        for (let b = 0; b < 6; b++) {
            const T = b % 3;
            T === 0 ? (l.up.set(0, c[b], 0),
            l.position.set(r.x, r.y, r.z),
            l.lookAt(r.x + u[b], r.y, r.z)) : T === 1 ? (l.up.set(0, 0, c[b]),
            l.position.set(r.x, r.y, r.z),
            l.lookAt(r.x, r.y + u[b], r.z)) : (l.up.set(0, c[b], 0),
            l.position.set(r.x, r.y, r.z),
            l.lookAt(r.x, r.y, r.z + u[b]));
            const S = this._cubeSize;
            ys(s, T * S, b > 2 ? S : 0, S, S),
            h.setRenderTarget(s),
            p && h.render(x, l),
            h.render(t, l)
        }
        x.geometry.dispose(),
        x.material.dispose(),
        h.toneMapping = m,
        h.autoClear = f,
        t.background = d
    }
    _textureToCubeUV(t, e) {
        const n = this._renderer
          , s = t.mapping === yi || t.mapping === Ti;
        s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Do()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Po());
        const r = s ? this._cubemapMaterial : this._equirectMaterial
          , a = new He(this._lodPlanes[0],r)
          , o = r.uniforms;
        o.envMap.value = t;
        const l = this._cubeSize;
        ys(e, 0, 0, 3 * l, 2 * l),
        n.setRenderTarget(e),
        n.render(a, Sr)
    }
    _applyPMREM(t) {
        const e = this._renderer
          , n = e.autoClear;
        e.autoClear = !1;
        const s = this._lodPlanes.length;
        for (let r = 1; r < s; r++) {
            const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1])
              , o = wo[(s - r - 1) % wo.length];
            this._blur(t, r - 1, r, a, o)
        }
        e.autoClear = n
    }
    _blur(t, e, n, s, r) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(t, a, e, n, s, "latitudinal", r),
        this._halfBlur(a, t, n, n, s, "longitudinal", r)
    }
    _halfBlur(t, e, n, s, r, a, o) {
        const l = this._renderer
          , c = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const u = 3
          , h = new He(this._lodPlanes[s],c)
          , f = c.uniforms
          , m = this._sizeLods[n] - 1
          , g = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * kn - 1)
          , x = r / g
          , p = isFinite(r) ? 1 + Math.floor(u * x) : kn;
        p > kn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kn}`);
        const d = [];
        let b = 0;
        for (let w = 0; w < kn; ++w) {
            const N = w / x
              , E = Math.exp(-N * N / 2);
            d.push(E),
            w === 0 ? b += E : w < p && (b += 2 * E)
        }
        for (let w = 0; w < d.length; w++)
            d[w] = d[w] / b;
        f.envMap.value = t.texture,
        f.samples.value = p,
        f.weights.value = d,
        f.latitudinal.value = a === "latitudinal",
        o && (f.poleAxis.value = o);
        const {_lodMax: T} = this;
        f.dTheta.value = g,
        f.mipInt.value = T - n;
        const S = this._sizeLods[s]
          , I = 3 * S * (s > T - gi ? s - T + gi : 0)
          , R = 4 * (this._cubeSize - S);
        ys(e, I, R, 3 * S, 2 * S),
        l.setRenderTarget(e),
        l.render(h, Sr)
    }
}
function Tf(i) {
    const t = []
      , e = []
      , n = [];
    let s = i;
    const r = i - gi + 1 + bo.length;
    for (let a = 0; a < r; a++) {
        const o = Math.pow(2, s);
        e.push(o);
        let l = 1 / o;
        a > i - gi ? l = bo[a - i + gi - 1] : a === 0 && (l = 0),
        n.push(l);
        const c = 1 / (o - 2)
          , u = -c
          , h = 1 + c
          , f = [u, u, h, u, h, h, u, u, h, h, u, h]
          , m = 6
          , g = 6
          , x = 3
          , p = 2
          , d = 1
          , b = new Float32Array(x * g * m)
          , T = new Float32Array(p * g * m)
          , S = new Float32Array(d * g * m);
        for (let R = 0; R < m; R++) {
            const w = R % 3 * 2 / 3 - 1
              , N = R > 2 ? 0 : -1
              , E = [w, N, 0, w + 2 / 3, N, 0, w + 2 / 3, N + 1, 0, w, N, 0, w + 2 / 3, N + 1, 0, w, N + 1, 0];
            b.set(E, x * g * R),
            T.set(f, p * g * R);
            const M = [R, R, R, R, R, R];
            S.set(M, d * g * R)
        }
        const I = new Ze;
        I.setAttribute("position", new nn(b,x)),
        I.setAttribute("uv", new nn(T,p)),
        I.setAttribute("faceIndex", new nn(S,d)),
        t.push(I),
        s > gi && s--
    }
    return {
        lodPlanes: t,
        sizeLods: e,
        sigmas: n
    }
}
function Co(i, t, e) {
    const n = new Kn(i,t,e);
    return n.texture.mapping = Gs,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function ys(i, t, e, n, s) {
    i.viewport.set(t, e, n, s),
    i.scissor.set(t, e, n, s)
}
function bf(i, t, e) {
    const n = new Float32Array(kn)
      , s = new U(0,1,0);
    return new Dn({
        name: "SphericalGaussianBlur",
        defines: {
            n: kn,
            CUBEUV_TEXEL_WIDTH: 1 / t,
            CUBEUV_TEXEL_HEIGHT: 1 / e,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: s
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Po() {
    return new Dn({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Do() {
    return new Dn({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: Da(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: Rn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Da() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Af(i) {
    let t = new WeakMap
      , e = null;
    function n(o) {
        if (o && o.isTexture) {
            const l = o.mapping
              , c = l === Ns || l === Vr
              , u = l === yi || l === Ti;
            if (c || u) {
                let h = t.get(o);
                const f = h !== void 0 ? h.texture.pmremVersion : 0;
                if (o.isRenderTargetTexture && o.pmremVersion !== f)
                    return e === null && (e = new Ro(i)),
                    h = c ? e.fromEquirectangular(o, h) : e.fromCubemap(o, h),
                    h.texture.pmremVersion = o.pmremVersion,
                    t.set(o, h),
                    h.texture;
                if (h !== void 0)
                    return h.texture;
                {
                    const m = o.image;
                    return c && m && m.height > 0 || u && m && s(m) ? (e === null && (e = new Ro(i)),
                    h = c ? e.fromEquirectangular(o) : e.fromCubemap(o),
                    h.texture.pmremVersion = o.pmremVersion,
                    t.set(o, h),
                    o.addEventListener("dispose", r),
                    h.texture) : null
                }
            }
        }
        return o
    }
    function s(o) {
        let l = 0;
        const c = 6;
        for (let u = 0; u < c; u++)
            o[u] !== void 0 && l++;
        return l === c
    }
    function r(o) {
        const l = o.target;
        l.removeEventListener("dispose", r);
        const c = t.get(l);
        c !== void 0 && (t.delete(l),
        c.dispose())
    }
    function a() {
        t = new WeakMap,
        e !== null && (e.dispose(),
        e = null)
    }
    return {
        get: n,
        dispose: a
    }
}
function wf(i) {
    const t = {};
    function e(n) {
        if (t[n] !== void 0)
            return t[n];
        let s;
        switch (n) {
        case "WEBGL_depth_texture":
            s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            s = i.getExtension(n)
        }
        return t[n] = s,
        s
    }
    return {
        has: function(n) {
            return e(n) !== null
        },
        init: function() {
            e("EXT_color_buffer_float"),
            e("WEBGL_clip_cull_distance"),
            e("OES_texture_float_linear"),
            e("EXT_color_buffer_half_float"),
            e("WEBGL_multisampled_render_to_texture"),
            e("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            const s = e(n);
            return s === null && xi("THREE.WebGLRenderer: " + n + " extension not supported."),
            s
        }
    }
}
function Rf(i, t, e, n) {
    const s = {}
      , r = new WeakMap;
    function a(h) {
        const f = h.target;
        f.index !== null && t.remove(f.index);
        for (const g in f.attributes)
            t.remove(f.attributes[g]);
        f.removeEventListener("dispose", a),
        delete s[f.id];
        const m = r.get(f);
        m && (t.remove(m),
        r.delete(f)),
        n.releaseStatesOfGeometry(f),
        f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
        e.memory.geometries--
    }
    function o(h, f) {
        return s[f.id] === !0 || (f.addEventListener("dispose", a),
        s[f.id] = !0,
        e.memory.geometries++),
        f
    }
    function l(h) {
        const f = h.attributes;
        for (const m in f)
            t.update(f[m], i.ARRAY_BUFFER)
    }
    function c(h) {
        const f = []
          , m = h.index
          , g = h.attributes.position;
        let x = 0;
        if (m !== null) {
            const b = m.array;
            x = m.version;
            for (let T = 0, S = b.length; T < S; T += 3) {
                const I = b[T + 0]
                  , R = b[T + 1]
                  , w = b[T + 2];
                f.push(I, R, R, w, w, I)
            }
        } else if (g !== void 0) {
            const b = g.array;
            x = g.version;
            for (let T = 0, S = b.length / 3 - 1; T < S; T += 3) {
                const I = T + 0
                  , R = T + 1
                  , w = T + 2;
                f.push(I, R, R, w, w, I)
            }
        } else
            return;
        const p = new (pl(f) ? xl : vl)(f,1);
        p.version = x;
        const d = r.get(h);
        d && t.remove(d),
        r.set(h, p)
    }
    function u(h) {
        const f = r.get(h);
        if (f) {
            const m = h.index;
            m !== null && f.version < m.version && c(h)
        } else
            c(h);
        return r.get(h)
    }
    return {
        get: o,
        update: l,
        getWireframeAttribute: u
    }
}
function Cf(i, t, e) {
    let n;
    function s(f) {
        n = f
    }
    let r, a;
    function o(f) {
        r = f.type,
        a = f.bytesPerElement
    }
    function l(f, m) {
        i.drawElements(n, m, r, f * a),
        e.update(m, n, 1)
    }
    function c(f, m, g) {
        g !== 0 && (i.drawElementsInstanced(n, m, r, f * a, g),
        e.update(m, n, g))
    }
    function u(f, m, g) {
        if (g === 0)
            return;
        t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, g);
        let p = 0;
        for (let d = 0; d < g; d++)
            p += m[d];
        e.update(p, n, 1)
    }
    function h(f, m, g, x) {
        if (g === 0)
            return;
        const p = t.get("WEBGL_multi_draw");
        if (p === null)
            for (let d = 0; d < f.length; d++)
                c(f[d] / a, m[d], x[d]);
        else {
            p.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, x, 0, g);
            let d = 0;
            for (let b = 0; b < g; b++)
                d += m[b] * x[b];
            e.update(d, n, 1)
        }
    }
    this.setMode = s,
    this.setIndex = o,
    this.render = l,
    this.renderInstances = c,
    this.renderMultiDraw = u,
    this.renderMultiDrawInstances = h
}
function Pf(i) {
    const t = {
        geometries: 0,
        textures: 0
    }
      , e = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(r, a, o) {
        switch (e.calls++,
        a) {
        case i.TRIANGLES:
            e.triangles += o * (r / 3);
            break;
        case i.LINES:
            e.lines += o * (r / 2);
            break;
        case i.LINE_STRIP:
            e.lines += o * (r - 1);
            break;
        case i.LINE_LOOP:
            e.lines += o * r;
            break;
        case i.POINTS:
            e.points += o * r;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", a);
            break
        }
    }
    function s() {
        e.calls = 0,
        e.triangles = 0,
        e.points = 0,
        e.lines = 0
    }
    return {
        memory: t,
        render: e,
        programs: null,
        autoReset: !0,
        reset: s,
        update: n
    }
}
function Df(i, t, e) {
    const n = new WeakMap
      , s = new le;
    function r(a, o, l) {
        const c = a.morphTargetInfluences
          , u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , h = u !== void 0 ? u.length : 0;
        let f = n.get(o);
        if (f === void 0 || f.count !== h) {
            let M = function() {
                N.dispose(),
                n.delete(o),
                o.removeEventListener("dispose", M)
            };
            var m = M;
            f !== void 0 && f.texture.dispose();
            const g = o.morphAttributes.position !== void 0
              , x = o.morphAttributes.normal !== void 0
              , p = o.morphAttributes.color !== void 0
              , d = o.morphAttributes.position || []
              , b = o.morphAttributes.normal || []
              , T = o.morphAttributes.color || [];
            let S = 0;
            g === !0 && (S = 1),
            x === !0 && (S = 2),
            p === !0 && (S = 3);
            let I = o.attributes.position.count * S
              , R = 1;
            I > t.maxTextureSize && (R = Math.ceil(I / t.maxTextureSize),
            I = t.maxTextureSize);
            const w = new Float32Array(I * R * 4 * h)
              , N = new ml(w,I,R,h);
            N.type = pn,
            N.needsUpdate = !0;
            const E = S * 4;
            for (let P = 0; P < h; P++) {
                const k = d[P]
                  , z = b[P]
                  , j = T[P]
                  , K = I * R * 4 * P;
                for (let X = 0; X < k.count; X++) {
                    const $ = X * E;
                    g === !0 && (s.fromBufferAttribute(k, X),
                    w[K + $ + 0] = s.x,
                    w[K + $ + 1] = s.y,
                    w[K + $ + 2] = s.z,
                    w[K + $ + 3] = 0),
                    x === !0 && (s.fromBufferAttribute(z, X),
                    w[K + $ + 4] = s.x,
                    w[K + $ + 5] = s.y,
                    w[K + $ + 6] = s.z,
                    w[K + $ + 7] = 0),
                    p === !0 && (s.fromBufferAttribute(j, X),
                    w[K + $ + 8] = s.x,
                    w[K + $ + 9] = s.y,
                    w[K + $ + 10] = s.z,
                    w[K + $ + 11] = j.itemSize === 4 ? s.w : 1)
                }
            }
            f = {
                count: h,
                texture: N,
                size: new Ut(I,R)
            },
            n.set(o, f),
            o.addEventListener("dispose", M)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
        else {
            let g = 0;
            for (let p = 0; p < c.length; p++)
                g += c[p];
            const x = o.morphTargetsRelative ? 1 : 1 - g;
            l.getUniforms().setValue(i, "morphTargetBaseInfluence", x),
            l.getUniforms().setValue(i, "morphTargetInfluences", c)
        }
        l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e),
        l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size)
    }
    return {
        update: r
    }
}
function Lf(i, t, e, n) {
    let s = new WeakMap;
    function r(l) {
        const c = n.render.frame
          , u = l.geometry
          , h = t.get(l, u);
        if (s.get(h) !== c && (t.update(h),
        s.set(h, c)),
        l.isInstancedMesh && (l.hasEventListener("dispose", o) === !1 && l.addEventListener("dispose", o),
        s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER),
        l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER),
        s.set(l, c))),
        l.isSkinnedMesh) {
            const f = l.skeleton;
            s.get(f) !== c && (f.update(),
            s.set(f, c))
        }
        return h
    }
    function a() {
        s = new WeakMap
    }
    function o(l) {
        const c = l.target;
        c.removeEventListener("dispose", o),
        e.remove(c.instanceMatrix),
        c.instanceColor !== null && e.remove(c.instanceColor)
    }
    return {
        update: r,
        dispose: a
    }
}
const wl = new ye
  , Lo = new Tl(1,1)
  , Rl = new ml
  , Cl = new Kc
  , Pl = new El
  , Uo = []
  , Io = []
  , No = new Float32Array(16)
  , Fo = new Float32Array(9)
  , Oo = new Float32Array(4);
function wi(i, t, e) {
    const n = i[0];
    if (n <= 0 || n > 0)
        return i;
    const s = t * e;
    let r = Uo[s];
    if (r === void 0 && (r = new Float32Array(s),
    Uo[s] = r),
    t !== 0) {
        n.toArray(r, 0);
        for (let a = 1, o = 0; a !== t; ++a)
            o += e,
            i[a].toArray(r, o)
    }
    return r
}
function de(i, t) {
    if (i.length !== t.length)
        return !1;
    for (let e = 0, n = i.length; e < n; e++)
        if (i[e] !== t[e])
            return !1;
    return !0
}
function fe(i, t) {
    for (let e = 0, n = t.length; e < n; e++)
        i[e] = t[e]
}
function Ws(i, t) {
    let e = Io[t];
    e === void 0 && (e = new Int32Array(t),
    Io[t] = e);
    for (let n = 0; n !== t; ++n)
        e[n] = i.allocateTextureUnit();
    return e
}
function Uf(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1f(this.addr, t),
    e[0] = t)
}
function If(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (de(e, t))
            return;
        i.uniform2fv(this.addr, t),
        fe(e, t)
    }
}
function Nf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else if (t.r !== void 0)
        (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b),
        e[0] = t.r,
        e[1] = t.g,
        e[2] = t.b);
    else {
        if (de(e, t))
            return;
        i.uniform3fv(this.addr, t),
        fe(e, t)
    }
}
function Ff(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (de(e, t))
            return;
        i.uniform4fv(this.addr, t),
        fe(e, t)
    }
}
function Of(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (de(e, t))
            return;
        i.uniformMatrix2fv(this.addr, !1, t),
        fe(e, t)
    } else {
        if (de(e, n))
            return;
        Oo.set(n),
        i.uniformMatrix2fv(this.addr, !1, Oo),
        fe(e, n)
    }
}
function Bf(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (de(e, t))
            return;
        i.uniformMatrix3fv(this.addr, !1, t),
        fe(e, t)
    } else {
        if (de(e, n))
            return;
        Fo.set(n),
        i.uniformMatrix3fv(this.addr, !1, Fo),
        fe(e, n)
    }
}
function zf(i, t) {
    const e = this.cache
      , n = t.elements;
    if (n === void 0) {
        if (de(e, t))
            return;
        i.uniformMatrix4fv(this.addr, !1, t),
        fe(e, t)
    } else {
        if (de(e, n))
            return;
        No.set(n),
        i.uniformMatrix4fv(this.addr, !1, No),
        fe(e, n)
    }
}
function Hf(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1i(this.addr, t),
    e[0] = t)
}
function Vf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (de(e, t))
            return;
        i.uniform2iv(this.addr, t),
        fe(e, t)
    }
}
function Gf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (de(e, t))
            return;
        i.uniform3iv(this.addr, t),
        fe(e, t)
    }
}
function kf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (de(e, t))
            return;
        i.uniform4iv(this.addr, t),
        fe(e, t)
    }
}
function Wf(i, t) {
    const e = this.cache;
    e[0] !== t && (i.uniform1ui(this.addr, t),
    e[0] = t)
}
function Xf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y),
        e[0] = t.x,
        e[1] = t.y);
    else {
        if (de(e, t))
            return;
        i.uniform2uiv(this.addr, t),
        fe(e, t)
    }
}
function qf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z);
    else {
        if (de(e, t))
            return;
        i.uniform3uiv(this.addr, t),
        fe(e, t)
    }
}
function Yf(i, t) {
    const e = this.cache;
    if (t.x !== void 0)
        (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
        e[0] = t.x,
        e[1] = t.y,
        e[2] = t.z,
        e[3] = t.w);
    else {
        if (de(e, t))
            return;
        i.uniform4uiv(this.addr, t),
        fe(e, t)
    }
}
function jf(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s);
    let r;
    this.type === i.SAMPLER_2D_SHADOW ? (Lo.compareFunction = fl,
    r = Lo) : r = wl,
    e.setTexture2D(t || r, s)
}
function Kf(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTexture3D(t || Cl, s)
}
function Zf(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTextureCube(t || Pl, s)
}
function $f(i, t, e) {
    const n = this.cache
      , s = e.allocateTextureUnit();
    n[0] !== s && (i.uniform1i(this.addr, s),
    n[0] = s),
    e.setTexture2DArray(t || Rl, s)
}
function Jf(i) {
    switch (i) {
    case 5126:
        return Uf;
    case 35664:
        return If;
    case 35665:
        return Nf;
    case 35666:
        return Ff;
    case 35674:
        return Of;
    case 35675:
        return Bf;
    case 35676:
        return zf;
    case 5124:
    case 35670:
        return Hf;
    case 35667:
    case 35671:
        return Vf;
    case 35668:
    case 35672:
        return Gf;
    case 35669:
    case 35673:
        return kf;
    case 5125:
        return Wf;
    case 36294:
        return Xf;
    case 36295:
        return qf;
    case 36296:
        return Yf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return jf;
    case 35679:
    case 36299:
    case 36307:
        return Kf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Zf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return $f
    }
}
function Qf(i, t) {
    i.uniform1fv(this.addr, t)
}
function tp(i, t) {
    const e = wi(t, this.size, 2);
    i.uniform2fv(this.addr, e)
}
function ep(i, t) {
    const e = wi(t, this.size, 3);
    i.uniform3fv(this.addr, e)
}
function np(i, t) {
    const e = wi(t, this.size, 4);
    i.uniform4fv(this.addr, e)
}
function ip(i, t) {
    const e = wi(t, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, e)
}
function sp(i, t) {
    const e = wi(t, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, e)
}
function rp(i, t) {
    const e = wi(t, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, e)
}
function ap(i, t) {
    i.uniform1iv(this.addr, t)
}
function op(i, t) {
    i.uniform2iv(this.addr, t)
}
function lp(i, t) {
    i.uniform3iv(this.addr, t)
}
function cp(i, t) {
    i.uniform4iv(this.addr, t)
}
function hp(i, t) {
    i.uniform1uiv(this.addr, t)
}
function up(i, t) {
    i.uniform2uiv(this.addr, t)
}
function dp(i, t) {
    i.uniform3uiv(this.addr, t)
}
function fp(i, t) {
    i.uniform4uiv(this.addr, t)
}
function pp(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Ws(e, s);
    de(n, r) || (i.uniform1iv(this.addr, r),
    fe(n, r));
    for (let a = 0; a !== s; ++a)
        e.setTexture2D(t[a] || wl, r[a])
}
function mp(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Ws(e, s);
    de(n, r) || (i.uniform1iv(this.addr, r),
    fe(n, r));
    for (let a = 0; a !== s; ++a)
        e.setTexture3D(t[a] || Cl, r[a])
}
function _p(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Ws(e, s);
    de(n, r) || (i.uniform1iv(this.addr, r),
    fe(n, r));
    for (let a = 0; a !== s; ++a)
        e.setTextureCube(t[a] || Pl, r[a])
}
function gp(i, t, e) {
    const n = this.cache
      , s = t.length
      , r = Ws(e, s);
    de(n, r) || (i.uniform1iv(this.addr, r),
    fe(n, r));
    for (let a = 0; a !== s; ++a)
        e.setTexture2DArray(t[a] || Rl, r[a])
}
function vp(i) {
    switch (i) {
    case 5126:
        return Qf;
    case 35664:
        return tp;
    case 35665:
        return ep;
    case 35666:
        return np;
    case 35674:
        return ip;
    case 35675:
        return sp;
    case 35676:
        return rp;
    case 5124:
    case 35670:
        return ap;
    case 35667:
    case 35671:
        return op;
    case 35668:
    case 35672:
        return lp;
    case 35669:
    case 35673:
        return cp;
    case 5125:
        return hp;
    case 36294:
        return up;
    case 36295:
        return dp;
    case 36296:
        return fp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return pp;
    case 35679:
    case 36299:
    case 36307:
        return mp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return _p;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return gp
    }
}
class xp {
    constructor(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.type = e.type,
        this.setValue = Jf(e.type)
    }
}
class Mp {
    constructor(t, e, n) {
        this.id = t,
        this.addr = n,
        this.cache = [],
        this.type = e.type,
        this.size = e.size,
        this.setValue = vp(e.type)
    }
}
class Sp {
    constructor(t) {
        this.id = t,
        this.seq = [],
        this.map = {}
    }
    setValue(t, e, n) {
        const s = this.seq;
        for (let r = 0, a = s.length; r !== a; ++r) {
            const o = s[r];
            o.setValue(t, e[o.id], n)
        }
    }
}
const Ar = /(\w+)(\])?(\[|\.)?/g;
function Bo(i, t) {
    i.seq.push(t),
    i.map[t.id] = t
}
function Ep(i, t, e) {
    const n = i.name
      , s = n.length;
    for (Ar.lastIndex = 0; ; ) {
        const r = Ar.exec(n)
          , a = Ar.lastIndex;
        let o = r[1];
        const l = r[2] === "]"
          , c = r[3];
        if (l && (o = o | 0),
        c === void 0 || c === "[" && a + 2 === s) {
            Bo(e, c === void 0 ? new xp(o,i,t) : new Mp(o,i,t));
            break
        } else {
            let h = e.map[o];
            h === void 0 && (h = new Sp(o),
            Bo(e, h)),
            e = h
        }
    }
}
class Is {
    constructor(t, e) {
        this.seq = [],
        this.map = {};
        const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (let s = 0; s < n; ++s) {
            const r = t.getActiveUniform(e, s)
              , a = t.getUniformLocation(e, r.name);
            Ep(r, a, this)
        }
    }
    setValue(t, e, n, s) {
        const r = this.map[e];
        r !== void 0 && r.setValue(t, n, s)
    }
    setOptional(t, e, n) {
        const s = e[n];
        s !== void 0 && this.setValue(t, n, s)
    }
    static upload(t, e, n, s) {
        for (let r = 0, a = e.length; r !== a; ++r) {
            const o = e[r]
              , l = n[o.id];
            l.needsUpdate !== !1 && o.setValue(t, l.value, s)
        }
    }
    static seqWithValue(t, e) {
        const n = [];
        for (let s = 0, r = t.length; s !== r; ++s) {
            const a = t[s];
            a.id in e && n.push(a)
        }
        return n
    }
}
function zo(i, t, e) {
    const n = i.createShader(t);
    return i.shaderSource(n, e),
    i.compileShader(n),
    n
}
const yp = 37297;
let Tp = 0;
function bp(i, t) {
    const e = i.split(`
`)
      , n = []
      , s = Math.max(t - 6, 0)
      , r = Math.min(t + 6, e.length);
    for (let a = s; a < r; a++) {
        const o = a + 1;
        n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`)
    }
    return n.join(`
`)
}
const Ho = new It;
function Ap(i) {
    Gt._getMatrix(Ho, Gt.workingColorSpace, i);
    const t = `mat3( ${Ho.elements.map(e => e.toFixed(4))} )`;
    switch (Gt.getTransfer(i)) {
    case Fs:
        return [t, "LinearTransferOETF"];
    case jt:
        return [t, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space: ", i),
        [t, "LinearTransferOETF"]
    }
}
function Vo(i, t, e) {
    const n = i.getShaderParameter(t, i.COMPILE_STATUS)
      , s = i.getShaderInfoLog(t).trim();
    if (n && s === "")
        return "";
    const r = /ERROR: 0:(\d+)/.exec(s);
    if (r) {
        const a = parseInt(r[1]);
        return e.toUpperCase() + `

` + s + `

` + bp(i.getShaderSource(t), a)
    } else
        return s
}
function wp(i, t) {
    const e = Ap(t);
    return [`vec4 ${i}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`)
}
function Rp(i, t) {
    let e;
    switch (t) {
    case Mc:
        e = "Linear";
        break;
    case Sc:
        e = "Reinhard";
        break;
    case Ec:
        e = "Cineon";
        break;
    case yc:
        e = "ACESFilmic";
        break;
    case bc:
        e = "AgX";
        break;
    case Ac:
        e = "Neutral";
        break;
    case Tc:
        e = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        e = "Linear"
    }
    return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
}
const Ts = new U;
function Cp() {
    Gt.getLuminanceCoefficients(Ts);
    const i = Ts.x.toFixed(4)
      , t = Ts.y.toFixed(4)
      , e = Ts.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`)
}
function Pp(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Oi).join(`
`)
}
function Dp(i) {
    const t = [];
    for (const e in i) {
        const n = i[e];
        n !== !1 && t.push("#define " + e + " " + n)
    }
    return t.join(`
`)
}
function Lp(i, t) {
    const e = {}
      , n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < n; s++) {
        const r = i.getActiveAttrib(t, s)
          , a = r.name;
        let o = 1;
        r.type === i.FLOAT_MAT2 && (o = 2),
        r.type === i.FLOAT_MAT3 && (o = 3),
        r.type === i.FLOAT_MAT4 && (o = 4),
        e[a] = {
            type: r.type,
            location: i.getAttribLocation(t, a),
            locationSize: o
        }
    }
    return e
}
function Oi(i) {
    return i !== ""
}
function Go(i, t) {
    const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
}
function ko(i, t) {
    return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
}
const Up = /^[ \t]*#include +<([\w\d./]+)>/gm;
function xa(i) {
    return i.replace(Up, Np)
}
const Ip = new Map;
function Np(i, t) {
    let e = Ft[t];
    if (e === void 0) {
        const n = Ip.get(t);
        if (n !== void 0)
            e = Ft[n],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
        else
            throw new Error("Can not resolve #include <" + t + ">")
    }
    return xa(e)
}
const Fp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wo(i) {
    return i.replace(Fp, Op)
}
function Op(i, t, e, n) {
    let s = "";
    for (let r = parseInt(t); r < parseInt(e); r++)
        s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
    return s
}
function Xo(i) {
    let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`),
    t
}
function Bp(i) {
    let t = "SHADOWMAP_TYPE_BASIC";
    return i.shadowMapType === il ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Ql ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === fn && (t = "SHADOWMAP_TYPE_VSM"),
    t
}
function zp(i) {
    let t = "ENVMAP_TYPE_CUBE";
    if (i.envMap)
        switch (i.envMapMode) {
        case yi:
        case Ti:
            t = "ENVMAP_TYPE_CUBE";
            break;
        case Gs:
            t = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return t
}
function Hp(i) {
    let t = "ENVMAP_MODE_REFLECTION";
    if (i.envMap)
        switch (i.envMapMode) {
        case Ti:
            t = "ENVMAP_MODE_REFRACTION";
            break
        }
    return t
}
function Vp(i) {
    let t = "ENVMAP_BLENDING_NONE";
    if (i.envMap)
        switch (i.combine) {
        case Sa:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case vc:
            t = "ENVMAP_BLENDING_MIX";
            break;
        case xc:
            t = "ENVMAP_BLENDING_ADD";
            break
        }
    return t
}
function Gp(i) {
    const t = i.envMapCubeUVHeight;
    if (t === null)
        return null;
    const e = Math.log2(t) - 2
      , n = 1 / t;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
        texelHeight: n,
        maxMip: e
    }
}
function kp(i, t, e, n) {
    const s = i.getContext()
      , r = e.defines;
    let a = e.vertexShader
      , o = e.fragmentShader;
    const l = Bp(e)
      , c = zp(e)
      , u = Hp(e)
      , h = Vp(e)
      , f = Gp(e)
      , m = Pp(e)
      , g = Dp(r)
      , x = s.createProgram();
    let p, d, b = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
    e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Oi).join(`
`),
    p.length > 0 && (p += `
`),
    d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g].filter(Oi).join(`
`),
    d.length > 0 && (d += `
`)) : (p = [Xo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + u : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Oi).join(`
`),
    d = [Xo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, g, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + u : "", e.envMap ? "#define " + h : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== Cn ? "#define TONE_MAPPING" : "", e.toneMapping !== Cn ? Ft.tonemapping_pars_fragment : "", e.toneMapping !== Cn ? Rp("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Ft.colorspace_pars_fragment, wp("linearToOutputTexel", e.outputColorSpace), Cp(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Oi).join(`
`)),
    a = xa(a),
    a = Go(a, e),
    a = ko(a, e),
    o = xa(o),
    o = Go(o, e),
    o = ko(o, e),
    a = Wo(a),
    o = Wo(o),
    e.isRawShaderMaterial !== !0 && (b = `#version 300 es
`,
    p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p,
    d = ["#define varying in", e.glslVersion === Ka ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Ka ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
    const T = b + p + a
      , S = b + d + o
      , I = zo(s, s.VERTEX_SHADER, T)
      , R = zo(s, s.FRAGMENT_SHADER, S);
    s.attachShader(x, I),
    s.attachShader(x, R),
    e.index0AttributeName !== void 0 ? s.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === !0 && s.bindAttribLocation(x, 0, "position"),
    s.linkProgram(x);
    function w(P) {
        if (i.debug.checkShaderErrors) {
            const k = s.getProgramInfoLog(x).trim()
              , z = s.getShaderInfoLog(I).trim()
              , j = s.getShaderInfoLog(R).trim();
            let K = !0
              , X = !0;
            if (s.getProgramParameter(x, s.LINK_STATUS) === !1)
                if (K = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(s, x, I, R);
                else {
                    const $ = Vo(s, I, "vertex")
                      , H = Vo(s, R, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(x, s.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + k + `
` + $ + `
` + H)
                }
            else
                k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (z === "" || j === "") && (X = !1);
            X && (P.diagnostics = {
                runnable: K,
                programLog: k,
                vertexShader: {
                    log: z,
                    prefix: p
                },
                fragmentShader: {
                    log: j,
                    prefix: d
                }
            })
        }
        s.deleteShader(I),
        s.deleteShader(R),
        N = new Is(s,x),
        E = Lp(s, x)
    }
    let N;
    this.getUniforms = function() {
        return N === void 0 && w(this),
        N
    }
    ;
    let E;
    this.getAttributes = function() {
        return E === void 0 && w(this),
        E
    }
    ;
    let M = e.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return M === !1 && (M = s.getProgramParameter(x, yp)),
        M
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        s.deleteProgram(x),
        this.program = void 0
    }
    ,
    this.type = e.shaderType,
    this.name = e.shaderName,
    this.id = Tp++,
    this.cacheKey = t,
    this.usedTimes = 1,
    this.program = x,
    this.vertexShader = I,
    this.fragmentShader = R,
    this
}
let Wp = 0;
class Xp {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(t) {
        const e = t.vertexShader
          , n = t.fragmentShader
          , s = this._getShaderStage(e)
          , r = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(t);
        return a.has(s) === !1 && (a.add(s),
        s.usedTimes++),
        a.has(r) === !1 && (a.add(r),
        r.usedTimes++),
        this
    }
    remove(t) {
        const e = this.materialCache.get(t);
        for (const n of e)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(t),
        this
    }
    getVertexShaderID(t) {
        return this._getShaderStage(t.vertexShader).id
    }
    getFragmentShaderID(t) {
        return this._getShaderStage(t.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(t) {
        const e = this.materialCache;
        let n = e.get(t);
        return n === void 0 && (n = new Set,
        e.set(t, n)),
        n
    }
    _getShaderStage(t) {
        const e = this.shaderCache;
        let n = e.get(t);
        return n === void 0 && (n = new qp(t),
        e.set(t, n)),
        n
    }
}
class qp {
    constructor(t) {
        this.id = Wp++,
        this.code = t,
        this.usedTimes = 0
    }
}
function Yp(i, t, e, n, s, r, a) {
    const o = new Pa
      , l = new Xp
      , c = new Set
      , u = []
      , h = s.logarithmicDepthBuffer
      , f = s.vertexTextures;
    let m = s.precision;
    const g = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function x(E) {
        return c.add(E),
        E === 0 ? "uv" : `uv${E}`
    }
    function p(E, M, P, k, z) {
        const j = k.fog
          , K = z.geometry
          , X = E.isMeshStandardMaterial ? k.environment : null
          , $ = (E.isMeshStandardMaterial ? e : t).get(E.envMap || X)
          , H = $ && $.mapping === Gs ? $.image.height : null
          , ot = g[E.type];
        E.precision !== null && (m = s.getMaxPrecision(E.precision),
        m !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", m, "instead."));
        const ut = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color
          , St = ut !== void 0 ? ut.length : 0;
        let Ot = 0;
        K.morphAttributes.position !== void 0 && (Ot = 1),
        K.morphAttributes.normal !== void 0 && (Ot = 2),
        K.morphAttributes.color !== void 0 && (Ot = 3);
        let Zt, W, et, xt;
        if (ot) {
            const qt = Je[ot];
            Zt = qt.vertexShader,
            W = qt.fragmentShader
        } else
            Zt = E.vertexShader,
            W = E.fragmentShader,
            l.update(E),
            et = l.getVertexShaderID(E),
            xt = l.getFragmentShaderID(E);
        const lt = i.getRenderTarget()
          , Mt = i.state.buffers.depth.getReversed()
          , kt = z.isInstancedMesh === !0
          , wt = z.isBatchedMesh === !0
          , ie = !!E.map
          , se = !!E.matcap
          , Wt = !!$
          , A = !!E.aoMap
          , xe = !!E.lightMap
          , Xt = !!E.bumpMap
          , Qt = !!E.normalMap
          , _t = !!E.displacementMap
          , Ht = !!E.emissiveMap
          , yt = !!E.metalnessMap
          , Nt = !!E.roughnessMap
          , he = E.anisotropy > 0
          , y = E.clearcoat > 0
          , _ = E.dispersion > 0
          , F = E.iridescence > 0
          , G = E.sheen > 0
          , Y = E.transmission > 0
          , V = he && !!E.anisotropyMap
          , gt = y && !!E.clearcoatMap
          , st = y && !!E.clearcoatNormalMap
          , mt = y && !!E.clearcoatRoughnessMap
          , vt = F && !!E.iridescenceMap
          , Z = F && !!E.iridescenceThicknessMap
          , ct = G && !!E.sheenColorMap
          , At = G && !!E.sheenRoughnessMap
          , bt = !!E.specularMap
          , nt = !!E.specularColorMap
          , Pt = !!E.specularIntensityMap
          , C = Y && !!E.transmissionMap
          , rt = Y && !!E.thicknessMap
          , J = !!E.gradientMap
          , dt = !!E.alphaMap
          , Q = E.alphaTest > 0
          , q = !!E.alphaHash
          , ft = !!E.extensions;
        let Dt = Cn;
        E.toneMapped && (lt === null || lt.isXRRenderTarget === !0) && (Dt = i.toneMapping);
        const te = {
            shaderID: ot,
            shaderType: E.type,
            shaderName: E.name,
            vertexShader: Zt,
            fragmentShader: W,
            defines: E.defines,
            customVertexShaderID: et,
            customFragmentShaderID: xt,
            isRawShaderMaterial: E.isRawShaderMaterial === !0,
            glslVersion: E.glslVersion,
            precision: m,
            batching: wt,
            batchingColor: wt && z._colorsTexture !== null,
            instancing: kt,
            instancingColor: kt && z.instanceColor !== null,
            instancingMorph: kt && z.morphTexture !== null,
            supportsVertexTextures: f,
            outputColorSpace: lt === null ? i.outputColorSpace : lt.isXRRenderTarget === !0 ? lt.texture.colorSpace : bi,
            alphaToCoverage: !!E.alphaToCoverage,
            map: ie,
            matcap: se,
            envMap: Wt,
            envMapMode: Wt && $.mapping,
            envMapCubeUVHeight: H,
            aoMap: A,
            lightMap: xe,
            bumpMap: Xt,
            normalMap: Qt,
            displacementMap: f && _t,
            emissiveMap: Ht,
            normalMapObjectSpace: Qt && E.normalMapType === Pc,
            normalMapTangentSpace: Qt && E.normalMapType === Ra,
            metalnessMap: yt,
            roughnessMap: Nt,
            anisotropy: he,
            anisotropyMap: V,
            clearcoat: y,
            clearcoatMap: gt,
            clearcoatNormalMap: st,
            clearcoatRoughnessMap: mt,
            dispersion: _,
            iridescence: F,
            iridescenceMap: vt,
            iridescenceThicknessMap: Z,
            sheen: G,
            sheenColorMap: ct,
            sheenRoughnessMap: At,
            specularMap: bt,
            specularColorMap: nt,
            specularIntensityMap: Pt,
            transmission: Y,
            transmissionMap: C,
            thicknessMap: rt,
            gradientMap: J,
            opaque: E.transparent === !1 && E.blending === vi && E.alphaToCoverage === !1,
            alphaMap: dt,
            alphaTest: Q,
            alphaHash: q,
            combine: E.combine,
            mapUv: ie && x(E.map.channel),
            aoMapUv: A && x(E.aoMap.channel),
            lightMapUv: xe && x(E.lightMap.channel),
            bumpMapUv: Xt && x(E.bumpMap.channel),
            normalMapUv: Qt && x(E.normalMap.channel),
            displacementMapUv: _t && x(E.displacementMap.channel),
            emissiveMapUv: Ht && x(E.emissiveMap.channel),
            metalnessMapUv: yt && x(E.metalnessMap.channel),
            roughnessMapUv: Nt && x(E.roughnessMap.channel),
            anisotropyMapUv: V && x(E.anisotropyMap.channel),
            clearcoatMapUv: gt && x(E.clearcoatMap.channel),
            clearcoatNormalMapUv: st && x(E.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: mt && x(E.clearcoatRoughnessMap.channel),
            iridescenceMapUv: vt && x(E.iridescenceMap.channel),
            iridescenceThicknessMapUv: Z && x(E.iridescenceThicknessMap.channel),
            sheenColorMapUv: ct && x(E.sheenColorMap.channel),
            sheenRoughnessMapUv: At && x(E.sheenRoughnessMap.channel),
            specularMapUv: bt && x(E.specularMap.channel),
            specularColorMapUv: nt && x(E.specularColorMap.channel),
            specularIntensityMapUv: Pt && x(E.specularIntensityMap.channel),
            transmissionMapUv: C && x(E.transmissionMap.channel),
            thicknessMapUv: rt && x(E.thicknessMap.channel),
            alphaMapUv: dt && x(E.alphaMap.channel),
            vertexTangents: !!K.attributes.tangent && (Qt || he),
            vertexColors: E.vertexColors,
            vertexAlphas: E.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4,
            pointsUvs: z.isPoints === !0 && !!K.attributes.uv && (ie || dt),
            fog: !!j,
            useFog: E.fog === !0,
            fogExp2: !!j && j.isFogExp2,
            flatShading: E.flatShading === !0 && E.wireframe === !1,
            sizeAttenuation: E.sizeAttenuation === !0,
            logarithmicDepthBuffer: h,
            reverseDepthBuffer: Mt,
            skinning: z.isSkinnedMesh === !0,
            morphTargets: K.morphAttributes.position !== void 0,
            morphNormals: K.morphAttributes.normal !== void 0,
            morphColors: K.morphAttributes.color !== void 0,
            morphTargetsCount: St,
            morphTextureStride: Ot,
            numDirLights: M.directional.length,
            numPointLights: M.point.length,
            numSpotLights: M.spot.length,
            numSpotLightMaps: M.spotLightMap.length,
            numRectAreaLights: M.rectArea.length,
            numHemiLights: M.hemi.length,
            numDirLightShadows: M.directionalShadowMap.length,
            numPointLightShadows: M.pointShadowMap.length,
            numSpotLightShadows: M.spotShadowMap.length,
            numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
            numLightProbes: M.numLightProbes,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: E.dithering,
            shadowMapEnabled: i.shadowMap.enabled && P.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: Dt,
            decodeVideoTexture: ie && E.map.isVideoTexture === !0 && Gt.getTransfer(E.map.colorSpace) === jt,
            decodeVideoTextureEmissive: Ht && E.emissiveMap.isVideoTexture === !0 && Gt.getTransfer(E.emissiveMap.colorSpace) === jt,
            premultipliedAlpha: E.premultipliedAlpha,
            doubleSided: E.side === tn,
            flipSided: E.side === Pe,
            useDepthPacking: E.depthPacking >= 0,
            depthPacking: E.depthPacking || 0,
            index0AttributeName: E.index0AttributeName,
            extensionClipCullDistance: ft && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: (ft && E.extensions.multiDraw === !0 || wt) && n.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: E.customProgramCacheKey()
        };
        return te.vertexUv1s = c.has(1),
        te.vertexUv2s = c.has(2),
        te.vertexUv3s = c.has(3),
        c.clear(),
        te
    }
    function d(E) {
        const M = [];
        if (E.shaderID ? M.push(E.shaderID) : (M.push(E.customVertexShaderID),
        M.push(E.customFragmentShaderID)),
        E.defines !== void 0)
            for (const P in E.defines)
                M.push(P),
                M.push(E.defines[P]);
        return E.isRawShaderMaterial === !1 && (b(M, E),
        T(M, E),
        M.push(i.outputColorSpace)),
        M.push(E.customProgramCacheKey),
        M.join()
    }
    function b(E, M) {
        E.push(M.precision),
        E.push(M.outputColorSpace),
        E.push(M.envMapMode),
        E.push(M.envMapCubeUVHeight),
        E.push(M.mapUv),
        E.push(M.alphaMapUv),
        E.push(M.lightMapUv),
        E.push(M.aoMapUv),
        E.push(M.bumpMapUv),
        E.push(M.normalMapUv),
        E.push(M.displacementMapUv),
        E.push(M.emissiveMapUv),
        E.push(M.metalnessMapUv),
        E.push(M.roughnessMapUv),
        E.push(M.anisotropyMapUv),
        E.push(M.clearcoatMapUv),
        E.push(M.clearcoatNormalMapUv),
        E.push(M.clearcoatRoughnessMapUv),
        E.push(M.iridescenceMapUv),
        E.push(M.iridescenceThicknessMapUv),
        E.push(M.sheenColorMapUv),
        E.push(M.sheenRoughnessMapUv),
        E.push(M.specularMapUv),
        E.push(M.specularColorMapUv),
        E.push(M.specularIntensityMapUv),
        E.push(M.transmissionMapUv),
        E.push(M.thicknessMapUv),
        E.push(M.combine),
        E.push(M.fogExp2),
        E.push(M.sizeAttenuation),
        E.push(M.morphTargetsCount),
        E.push(M.morphAttributeCount),
        E.push(M.numDirLights),
        E.push(M.numPointLights),
        E.push(M.numSpotLights),
        E.push(M.numSpotLightMaps),
        E.push(M.numHemiLights),
        E.push(M.numRectAreaLights),
        E.push(M.numDirLightShadows),
        E.push(M.numPointLightShadows),
        E.push(M.numSpotLightShadows),
        E.push(M.numSpotLightShadowsWithMaps),
        E.push(M.numLightProbes),
        E.push(M.shadowMapType),
        E.push(M.toneMapping),
        E.push(M.numClippingPlanes),
        E.push(M.numClipIntersection),
        E.push(M.depthPacking)
    }
    function T(E, M) {
        o.disableAll(),
        M.supportsVertexTextures && o.enable(0),
        M.instancing && o.enable(1),
        M.instancingColor && o.enable(2),
        M.instancingMorph && o.enable(3),
        M.matcap && o.enable(4),
        M.envMap && o.enable(5),
        M.normalMapObjectSpace && o.enable(6),
        M.normalMapTangentSpace && o.enable(7),
        M.clearcoat && o.enable(8),
        M.iridescence && o.enable(9),
        M.alphaTest && o.enable(10),
        M.vertexColors && o.enable(11),
        M.vertexAlphas && o.enable(12),
        M.vertexUv1s && o.enable(13),
        M.vertexUv2s && o.enable(14),
        M.vertexUv3s && o.enable(15),
        M.vertexTangents && o.enable(16),
        M.anisotropy && o.enable(17),
        M.alphaHash && o.enable(18),
        M.batching && o.enable(19),
        M.dispersion && o.enable(20),
        M.batchingColor && o.enable(21),
        M.gradientMap && o.enable(22),
        E.push(o.mask),
        o.disableAll(),
        M.fog && o.enable(0),
        M.useFog && o.enable(1),
        M.flatShading && o.enable(2),
        M.logarithmicDepthBuffer && o.enable(3),
        M.reverseDepthBuffer && o.enable(4),
        M.skinning && o.enable(5),
        M.morphTargets && o.enable(6),
        M.morphNormals && o.enable(7),
        M.morphColors && o.enable(8),
        M.premultipliedAlpha && o.enable(9),
        M.shadowMapEnabled && o.enable(10),
        M.doubleSided && o.enable(11),
        M.flipSided && o.enable(12),
        M.useDepthPacking && o.enable(13),
        M.dithering && o.enable(14),
        M.transmission && o.enable(15),
        M.sheen && o.enable(16),
        M.opaque && o.enable(17),
        M.pointsUvs && o.enable(18),
        M.decodeVideoTexture && o.enable(19),
        M.decodeVideoTextureEmissive && o.enable(20),
        M.alphaToCoverage && o.enable(21),
        E.push(o.mask)
    }
    function S(E) {
        const M = g[E.type];
        let P;
        if (M) {
            const k = Je[M];
            P = lh.clone(k.uniforms)
        } else
            P = E.uniforms;
        return P
    }
    function I(E, M) {
        let P;
        for (let k = 0, z = u.length; k < z; k++) {
            const j = u[k];
            if (j.cacheKey === M) {
                P = j,
                ++P.usedTimes;
                break
            }
        }
        return P === void 0 && (P = new kp(i,M,E,r),
        u.push(P)),
        P
    }
    function R(E) {
        if (--E.usedTimes === 0) {
            const M = u.indexOf(E);
            u[M] = u[u.length - 1],
            u.pop(),
            E.destroy()
        }
    }
    function w(E) {
        l.remove(E)
    }
    function N() {
        l.dispose()
    }
    return {
        getParameters: p,
        getProgramCacheKey: d,
        getUniforms: S,
        acquireProgram: I,
        releaseProgram: R,
        releaseShaderCache: w,
        programs: u,
        dispose: N
    }
}
function jp() {
    let i = new WeakMap;
    function t(a) {
        return i.has(a)
    }
    function e(a) {
        let o = i.get(a);
        return o === void 0 && (o = {},
        i.set(a, o)),
        o
    }
    function n(a) {
        i.delete(a)
    }
    function s(a, o, l) {
        i.get(a)[o] = l
    }
    function r() {
        i = new WeakMap
    }
    return {
        has: t,
        get: e,
        remove: n,
        update: s,
        dispose: r
    }
}
function Kp(i, t) {
    return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id
}
function qo(i, t) {
    return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id
}
function Yo() {
    const i = [];
    let t = 0;
    const e = []
      , n = []
      , s = [];
    function r() {
        t = 0,
        e.length = 0,
        n.length = 0,
        s.length = 0
    }
    function a(h, f, m, g, x, p) {
        let d = i[t];
        return d === void 0 ? (d = {
            id: h.id,
            object: h,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: x,
            group: p
        },
        i[t] = d) : (d.id = h.id,
        d.object = h,
        d.geometry = f,
        d.material = m,
        d.groupOrder = g,
        d.renderOrder = h.renderOrder,
        d.z = x,
        d.group = p),
        t++,
        d
    }
    function o(h, f, m, g, x, p) {
        const d = a(h, f, m, g, x, p);
        m.transmission > 0 ? n.push(d) : m.transparent === !0 ? s.push(d) : e.push(d)
    }
    function l(h, f, m, g, x, p) {
        const d = a(h, f, m, g, x, p);
        m.transmission > 0 ? n.unshift(d) : m.transparent === !0 ? s.unshift(d) : e.unshift(d)
    }
    function c(h, f) {
        e.length > 1 && e.sort(h || Kp),
        n.length > 1 && n.sort(f || qo),
        s.length > 1 && s.sort(f || qo)
    }
    function u() {
        for (let h = t, f = i.length; h < f; h++) {
            const m = i[h];
            if (m.id === null)
                break;
            m.id = null,
            m.object = null,
            m.geometry = null,
            m.material = null,
            m.group = null
        }
    }
    return {
        opaque: e,
        transmissive: n,
        transparent: s,
        init: r,
        push: o,
        unshift: l,
        finish: u,
        sort: c
    }
}
function Zp() {
    let i = new WeakMap;
    function t(n, s) {
        const r = i.get(n);
        let a;
        return r === void 0 ? (a = new Yo,
        i.set(n, [a])) : s >= r.length ? (a = new Yo,
        r.push(a)) : a = r[s],
        a
    }
    function e() {
        i = new WeakMap
    }
    return {
        get: t,
        dispose: e
    }
}
function $p() {
    const i = {};
    return {
        get: function(t) {
            if (i[t.id] !== void 0)
                return i[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    direction: new U,
                    color: new Lt
                };
                break;
            case "SpotLight":
                e = {
                    position: new U,
                    direction: new U,
                    color: new Lt,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                e = {
                    position: new U,
                    color: new Lt,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                e = {
                    direction: new U,
                    skyColor: new Lt,
                    groundColor: new Lt
                };
                break;
            case "RectAreaLight":
                e = {
                    color: new Lt,
                    position: new U,
                    halfWidth: new U,
                    halfHeight: new U
                };
                break
            }
            return i[t.id] = e,
            e
        }
    }
}
function Jp() {
    const i = {};
    return {
        get: function(t) {
            if (i[t.id] !== void 0)
                return i[t.id];
            let e;
            switch (t.type) {
            case "DirectionalLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut
                };
                break;
            case "SpotLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut
                };
                break;
            case "PointLight":
                e = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ut,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[t.id] = e,
            e
        }
    }
}
let Qp = 0;
function tm(i, t) {
    return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0)
}
function em(i) {
    const t = new $p
      , e = Jp()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let c = 0; c < 9; c++)
        n.probe.push(new U);
    const s = new U
      , r = new ae
      , a = new ae;
    function o(c) {
        let u = 0
          , h = 0
          , f = 0;
        for (let E = 0; E < 9; E++)
            n.probe[E].set(0, 0, 0);
        let m = 0
          , g = 0
          , x = 0
          , p = 0
          , d = 0
          , b = 0
          , T = 0
          , S = 0
          , I = 0
          , R = 0
          , w = 0;
        c.sort(tm);
        for (let E = 0, M = c.length; E < M; E++) {
            const P = c[E]
              , k = P.color
              , z = P.intensity
              , j = P.distance
              , K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
            if (P.isAmbientLight)
                u += k.r * z,
                h += k.g * z,
                f += k.b * z;
            else if (P.isLightProbe) {
                for (let X = 0; X < 9; X++)
                    n.probe[X].addScaledVector(P.sh.coefficients[X], z);
                w++
            } else if (P.isDirectionalLight) {
                const X = t.get(P);
                if (X.color.copy(P.color).multiplyScalar(P.intensity),
                P.castShadow) {
                    const $ = P.shadow
                      , H = e.get(P);
                    H.shadowIntensity = $.intensity,
                    H.shadowBias = $.bias,
                    H.shadowNormalBias = $.normalBias,
                    H.shadowRadius = $.radius,
                    H.shadowMapSize = $.mapSize,
                    n.directionalShadow[m] = H,
                    n.directionalShadowMap[m] = K,
                    n.directionalShadowMatrix[m] = P.shadow.matrix,
                    b++
                }
                n.directional[m] = X,
                m++
            } else if (P.isSpotLight) {
                const X = t.get(P);
                X.position.setFromMatrixPosition(P.matrixWorld),
                X.color.copy(k).multiplyScalar(z),
                X.distance = j,
                X.coneCos = Math.cos(P.angle),
                X.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)),
                X.decay = P.decay,
                n.spot[x] = X;
                const $ = P.shadow;
                if (P.map && (n.spotLightMap[I] = P.map,
                I++,
                $.updateMatrices(P),
                P.castShadow && R++),
                n.spotLightMatrix[x] = $.matrix,
                P.castShadow) {
                    const H = e.get(P);
                    H.shadowIntensity = $.intensity,
                    H.shadowBias = $.bias,
                    H.shadowNormalBias = $.normalBias,
                    H.shadowRadius = $.radius,
                    H.shadowMapSize = $.mapSize,
                    n.spotShadow[x] = H,
                    n.spotShadowMap[x] = K,
                    S++
                }
                x++
            } else if (P.isRectAreaLight) {
                const X = t.get(P);
                X.color.copy(k).multiplyScalar(z),
                X.halfWidth.set(P.width * .5, 0, 0),
                X.halfHeight.set(0, P.height * .5, 0),
                n.rectArea[p] = X,
                p++
            } else if (P.isPointLight) {
                const X = t.get(P);
                if (X.color.copy(P.color).multiplyScalar(P.intensity),
                X.distance = P.distance,
                X.decay = P.decay,
                P.castShadow) {
                    const $ = P.shadow
                      , H = e.get(P);
                    H.shadowIntensity = $.intensity,
                    H.shadowBias = $.bias,
                    H.shadowNormalBias = $.normalBias,
                    H.shadowRadius = $.radius,
                    H.shadowMapSize = $.mapSize,
                    H.shadowCameraNear = $.camera.near,
                    H.shadowCameraFar = $.camera.far,
                    n.pointShadow[g] = H,
                    n.pointShadowMap[g] = K,
                    n.pointShadowMatrix[g] = P.shadow.matrix,
                    T++
                }
                n.point[g] = X,
                g++
            } else if (P.isHemisphereLight) {
                const X = t.get(P);
                X.skyColor.copy(P.color).multiplyScalar(z),
                X.groundColor.copy(P.groundColor).multiplyScalar(z),
                n.hemi[d] = X,
                d++
            }
        }
        p > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = it.LTC_FLOAT_1,
        n.rectAreaLTC2 = it.LTC_FLOAT_2) : (n.rectAreaLTC1 = it.LTC_HALF_1,
        n.rectAreaLTC2 = it.LTC_HALF_2)),
        n.ambient[0] = u,
        n.ambient[1] = h,
        n.ambient[2] = f;
        const N = n.hash;
        (N.directionalLength !== m || N.pointLength !== g || N.spotLength !== x || N.rectAreaLength !== p || N.hemiLength !== d || N.numDirectionalShadows !== b || N.numPointShadows !== T || N.numSpotShadows !== S || N.numSpotMaps !== I || N.numLightProbes !== w) && (n.directional.length = m,
        n.spot.length = x,
        n.rectArea.length = p,
        n.point.length = g,
        n.hemi.length = d,
        n.directionalShadow.length = b,
        n.directionalShadowMap.length = b,
        n.pointShadow.length = T,
        n.pointShadowMap.length = T,
        n.spotShadow.length = S,
        n.spotShadowMap.length = S,
        n.directionalShadowMatrix.length = b,
        n.pointShadowMatrix.length = T,
        n.spotLightMatrix.length = S + I - R,
        n.spotLightMap.length = I,
        n.numSpotLightShadowsWithMaps = R,
        n.numLightProbes = w,
        N.directionalLength = m,
        N.pointLength = g,
        N.spotLength = x,
        N.rectAreaLength = p,
        N.hemiLength = d,
        N.numDirectionalShadows = b,
        N.numPointShadows = T,
        N.numSpotShadows = S,
        N.numSpotMaps = I,
        N.numLightProbes = w,
        n.version = Qp++)
    }
    function l(c, u) {
        let h = 0
          , f = 0
          , m = 0
          , g = 0
          , x = 0;
        const p = u.matrixWorldInverse;
        for (let d = 0, b = c.length; d < b; d++) {
            const T = c[d];
            if (T.isDirectionalLight) {
                const S = n.directional[h];
                S.direction.setFromMatrixPosition(T.matrixWorld),
                s.setFromMatrixPosition(T.target.matrixWorld),
                S.direction.sub(s),
                S.direction.transformDirection(p),
                h++
            } else if (T.isSpotLight) {
                const S = n.spot[m];
                S.position.setFromMatrixPosition(T.matrixWorld),
                S.position.applyMatrix4(p),
                S.direction.setFromMatrixPosition(T.matrixWorld),
                s.setFromMatrixPosition(T.target.matrixWorld),
                S.direction.sub(s),
                S.direction.transformDirection(p),
                m++
            } else if (T.isRectAreaLight) {
                const S = n.rectArea[g];
                S.position.setFromMatrixPosition(T.matrixWorld),
                S.position.applyMatrix4(p),
                a.identity(),
                r.copy(T.matrixWorld),
                r.premultiply(p),
                a.extractRotation(r),
                S.halfWidth.set(T.width * .5, 0, 0),
                S.halfHeight.set(0, T.height * .5, 0),
                S.halfWidth.applyMatrix4(a),
                S.halfHeight.applyMatrix4(a),
                g++
            } else if (T.isPointLight) {
                const S = n.point[f];
                S.position.setFromMatrixPosition(T.matrixWorld),
                S.position.applyMatrix4(p),
                f++
            } else if (T.isHemisphereLight) {
                const S = n.hemi[x];
                S.direction.setFromMatrixPosition(T.matrixWorld),
                S.direction.transformDirection(p),
                x++
            }
        }
    }
    return {
        setup: o,
        setupView: l,
        state: n
    }
}
function jo(i) {
    const t = new em(i)
      , e = []
      , n = [];
    function s(u) {
        c.camera = u,
        e.length = 0,
        n.length = 0
    }
    function r(u) {
        e.push(u)
    }
    function a(u) {
        n.push(u)
    }
    function o() {
        t.setup(e)
    }
    function l(u) {
        t.setupView(e, u)
    }
    const c = {
        lightsArray: e,
        shadowsArray: n,
        camera: null,
        lights: t,
        transmissionRenderTarget: {}
    };
    return {
        init: s,
        state: c,
        setupLights: o,
        setupLightsView: l,
        pushLight: r,
        pushShadow: a
    }
}
function nm(i) {
    let t = new WeakMap;
    function e(s, r=0) {
        const a = t.get(s);
        let o;
        return a === void 0 ? (o = new jo(i),
        t.set(s, [o])) : r >= a.length ? (o = new jo(i),
        a.push(o)) : o = a[r],
        o
    }
    function n() {
        t = new WeakMap
    }
    return {
        get: e,
        dispose: n
    }
}
const im = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , sm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function rm(i, t, e) {
    let n = new yl;
    const s = new Ut
      , r = new Ut
      , a = new le
      , o = new Sh({
        depthPacking: Cc
    })
      , l = new Eh
      , c = {}
      , u = e.maxTextureSize
      , h = {
        [Pn]: Pe,
        [Pe]: Pn,
        [tn]: tn
    }
      , f = new Dn({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Ut
            },
            radius: {
                value: 4
            }
        },
        vertexShader: im,
        fragmentShader: sm
    })
      , m = f.clone();
    m.defines.HORIZONTAL_PASS = 1;
    const g = new Ze;
    g.setAttribute("position", new nn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const x = new He(g,f)
      , p = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = il;
    let d = this.type;
    this.render = function(R, w, N) {
        if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || R.length === 0)
            return;
        const E = i.getRenderTarget()
          , M = i.getActiveCubeFace()
          , P = i.getActiveMipmapLevel()
          , k = i.state;
        k.setBlending(Rn),
        k.buffers.color.setClear(1, 1, 1, 1),
        k.buffers.depth.setTest(!0),
        k.setScissorTest(!1);
        const z = d !== fn && this.type === fn
          , j = d === fn && this.type !== fn;
        for (let K = 0, X = R.length; K < X; K++) {
            const $ = R[K]
              , H = $.shadow;
            if (H === void 0) {
                console.warn("THREE.WebGLShadowMap:", $, "has no shadow.");
                continue
            }
            if (H.autoUpdate === !1 && H.needsUpdate === !1)
                continue;
            s.copy(H.mapSize);
            const ot = H.getFrameExtents();
            if (s.multiply(ot),
            r.copy(H.mapSize),
            (s.x > u || s.y > u) && (s.x > u && (r.x = Math.floor(u / ot.x),
            s.x = r.x * ot.x,
            H.mapSize.x = r.x),
            s.y > u && (r.y = Math.floor(u / ot.y),
            s.y = r.y * ot.y,
            H.mapSize.y = r.y)),
            H.map === null || z === !0 || j === !0) {
                const St = this.type !== fn ? {
                    minFilter: je,
                    magFilter: je
                } : {};
                H.map !== null && H.map.dispose(),
                H.map = new Kn(s.x,s.y,St),
                H.map.texture.name = $.name + ".shadowMap",
                H.camera.updateProjectionMatrix()
            }
            i.setRenderTarget(H.map),
            i.clear();
            const ut = H.getViewportCount();
            for (let St = 0; St < ut; St++) {
                const Ot = H.getViewport(St);
                a.set(r.x * Ot.x, r.y * Ot.y, r.x * Ot.z, r.y * Ot.w),
                k.viewport(a),
                H.updateMatrices($, St),
                n = H.getFrustum(),
                S(w, N, H.camera, $, this.type)
            }
            H.isPointLightShadow !== !0 && this.type === fn && b(H, N),
            H.needsUpdate = !1
        }
        d = this.type,
        p.needsUpdate = !1,
        i.setRenderTarget(E, M, P)
    }
    ;
    function b(R, w) {
        const N = t.update(x);
        f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples,
        m.defines.VSM_SAMPLES = R.blurSamples,
        f.needsUpdate = !0,
        m.needsUpdate = !0),
        R.mapPass === null && (R.mapPass = new Kn(s.x,s.y)),
        f.uniforms.shadow_pass.value = R.map.texture,
        f.uniforms.resolution.value = R.mapSize,
        f.uniforms.radius.value = R.radius,
        i.setRenderTarget(R.mapPass),
        i.clear(),
        i.renderBufferDirect(w, null, N, f, x, null),
        m.uniforms.shadow_pass.value = R.mapPass.texture,
        m.uniforms.resolution.value = R.mapSize,
        m.uniforms.radius.value = R.radius,
        i.setRenderTarget(R.map),
        i.clear(),
        i.renderBufferDirect(w, null, N, m, x, null)
    }
    function T(R, w, N, E) {
        let M = null;
        const P = N.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial;
        if (P !== void 0)
            M = P;
        else if (M = N.isPointLight === !0 ? l : o,
        i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0 || w.alphaToCoverage === !0) {
            const k = M.uuid
              , z = w.uuid;
            let j = c[k];
            j === void 0 && (j = {},
            c[k] = j);
            let K = j[z];
            K === void 0 && (K = M.clone(),
            j[z] = K,
            w.addEventListener("dispose", I)),
            M = K
        }
        if (M.visible = w.visible,
        M.wireframe = w.wireframe,
        E === fn ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : h[w.side],
        M.alphaMap = w.alphaMap,
        M.alphaTest = w.alphaToCoverage === !0 ? .5 : w.alphaTest,
        M.map = w.map,
        M.clipShadows = w.clipShadows,
        M.clippingPlanes = w.clippingPlanes,
        M.clipIntersection = w.clipIntersection,
        M.displacementMap = w.displacementMap,
        M.displacementScale = w.displacementScale,
        M.displacementBias = w.displacementBias,
        M.wireframeLinewidth = w.wireframeLinewidth,
        M.linewidth = w.linewidth,
        N.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
            const k = i.properties.get(M);
            k.light = N
        }
        return M
    }
    function S(R, w, N, E, M) {
        if (R.visible === !1)
            return;
        if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && M === fn) && (!R.frustumCulled || n.intersectsObject(R))) {
            R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, R.matrixWorld);
            const z = t.update(R)
              , j = R.material;
            if (Array.isArray(j)) {
                const K = z.groups;
                for (let X = 0, $ = K.length; X < $; X++) {
                    const H = K[X]
                      , ot = j[H.materialIndex];
                    if (ot && ot.visible) {
                        const ut = T(R, ot, E, M);
                        R.onBeforeShadow(i, R, w, N, z, ut, H),
                        i.renderBufferDirect(N, null, z, ut, R, H),
                        R.onAfterShadow(i, R, w, N, z, ut, H)
                    }
                }
            } else if (j.visible) {
                const K = T(R, j, E, M);
                R.onBeforeShadow(i, R, w, N, z, K, null),
                i.renderBufferDirect(N, null, z, K, R, null),
                R.onAfterShadow(i, R, w, N, z, K, null)
            }
        }
        const k = R.children;
        for (let z = 0, j = k.length; z < j; z++)
            S(k[z], w, N, E, M)
    }
    function I(R) {
        R.target.removeEventListener("dispose", I);
        for (const N in c) {
            const E = c[N]
              , M = R.target.uuid;
            M in E && (E[M].dispose(),
            delete E[M])
        }
    }
}
const am = {
    [Ir]: Nr,
    [Fr]: zr,
    [Or]: Hr,
    [Ei]: Br,
    [Nr]: Ir,
    [zr]: Fr,
    [Hr]: Or,
    [Br]: Ei
};
function om(i, t) {
    function e() {
        let C = !1;
        const rt = new le;
        let J = null;
        const dt = new le(0,0,0,0);
        return {
            setMask: function(Q) {
                J !== Q && !C && (i.colorMask(Q, Q, Q, Q),
                J = Q)
            },
            setLocked: function(Q) {
                C = Q
            },
            setClear: function(Q, q, ft, Dt, te) {
                te === !0 && (Q *= Dt,
                q *= Dt,
                ft *= Dt),
                rt.set(Q, q, ft, Dt),
                dt.equals(rt) === !1 && (i.clearColor(Q, q, ft, Dt),
                dt.copy(rt))
            },
            reset: function() {
                C = !1,
                J = null,
                dt.set(-1, 0, 0, 0)
            }
        }
    }
    function n() {
        let C = !1
          , rt = !1
          , J = null
          , dt = null
          , Q = null;
        return {
            setReversed: function(q) {
                if (rt !== q) {
                    const ft = t.get("EXT_clip_control");
                    q ? ft.clipControlEXT(ft.LOWER_LEFT_EXT, ft.ZERO_TO_ONE_EXT) : ft.clipControlEXT(ft.LOWER_LEFT_EXT, ft.NEGATIVE_ONE_TO_ONE_EXT),
                    rt = q;
                    const Dt = Q;
                    Q = null,
                    this.setClear(Dt)
                }
            },
            getReversed: function() {
                return rt
            },
            setTest: function(q) {
                q ? lt(i.DEPTH_TEST) : Mt(i.DEPTH_TEST)
            },
            setMask: function(q) {
                J !== q && !C && (i.depthMask(q),
                J = q)
            },
            setFunc: function(q) {
                if (rt && (q = am[q]),
                dt !== q) {
                    switch (q) {
                    case Ir:
                        i.depthFunc(i.NEVER);
                        break;
                    case Nr:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case Fr:
                        i.depthFunc(i.LESS);
                        break;
                    case Ei:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case Or:
                        i.depthFunc(i.EQUAL);
                        break;
                    case Br:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case zr:
                        i.depthFunc(i.GREATER);
                        break;
                    case Hr:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    dt = q
                }
            },
            setLocked: function(q) {
                C = q
            },
            setClear: function(q) {
                Q !== q && (rt && (q = 1 - q),
                i.clearDepth(q),
                Q = q)
            },
            reset: function() {
                C = !1,
                J = null,
                dt = null,
                Q = null,
                rt = !1
            }
        }
    }
    function s() {
        let C = !1
          , rt = null
          , J = null
          , dt = null
          , Q = null
          , q = null
          , ft = null
          , Dt = null
          , te = null;
        return {
            setTest: function(qt) {
                C || (qt ? lt(i.STENCIL_TEST) : Mt(i.STENCIL_TEST))
            },
            setMask: function(qt) {
                rt !== qt && !C && (i.stencilMask(qt),
                rt = qt)
            },
            setFunc: function(qt, Ge, an) {
                (J !== qt || dt !== Ge || Q !== an) && (i.stencilFunc(qt, Ge, an),
                J = qt,
                dt = Ge,
                Q = an)
            },
            setOp: function(qt, Ge, an) {
                (q !== qt || ft !== Ge || Dt !== an) && (i.stencilOp(qt, Ge, an),
                q = qt,
                ft = Ge,
                Dt = an)
            },
            setLocked: function(qt) {
                C = qt
            },
            setClear: function(qt) {
                te !== qt && (i.clearStencil(qt),
                te = qt)
            },
            reset: function() {
                C = !1,
                rt = null,
                J = null,
                dt = null,
                Q = null,
                q = null,
                ft = null,
                Dt = null,
                te = null
            }
        }
    }
    const r = new e
      , a = new n
      , o = new s
      , l = new WeakMap
      , c = new WeakMap;
    let u = {}
      , h = {}
      , f = new WeakMap
      , m = []
      , g = null
      , x = !1
      , p = null
      , d = null
      , b = null
      , T = null
      , S = null
      , I = null
      , R = null
      , w = new Lt(0,0,0)
      , N = 0
      , E = !1
      , M = null
      , P = null
      , k = null
      , z = null
      , j = null;
    const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let X = !1
      , $ = 0;
    const H = i.getParameter(i.VERSION);
    H.indexOf("WebGL") !== -1 ? ($ = parseFloat(/^WebGL (\d)/.exec(H)[1]),
    X = $ >= 1) : H.indexOf("OpenGL ES") !== -1 && ($ = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),
    X = $ >= 2);
    let ot = null
      , ut = {};
    const St = i.getParameter(i.SCISSOR_BOX)
      , Ot = i.getParameter(i.VIEWPORT)
      , Zt = new le().fromArray(St)
      , W = new le().fromArray(Ot);
    function et(C, rt, J, dt) {
        const Q = new Uint8Array(4)
          , q = i.createTexture();
        i.bindTexture(C, q),
        i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let ft = 0; ft < J; ft++)
            C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(rt, 0, i.RGBA, 1, 1, dt, 0, i.RGBA, i.UNSIGNED_BYTE, Q) : i.texImage2D(rt + ft, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Q);
        return q
    }
    const xt = {};
    xt[i.TEXTURE_2D] = et(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    xt[i.TEXTURE_CUBE_MAP] = et(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    xt[i.TEXTURE_2D_ARRAY] = et(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    xt[i.TEXTURE_3D] = et(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    lt(i.DEPTH_TEST),
    a.setFunc(Ei),
    Xt(!1),
    Qt(ka),
    lt(i.CULL_FACE),
    A(Rn);
    function lt(C) {
        u[C] !== !0 && (i.enable(C),
        u[C] = !0)
    }
    function Mt(C) {
        u[C] !== !1 && (i.disable(C),
        u[C] = !1)
    }
    function kt(C, rt) {
        return h[C] !== rt ? (i.bindFramebuffer(C, rt),
        h[C] = rt,
        C === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = rt),
        C === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = rt),
        !0) : !1
    }
    function wt(C, rt) {
        let J = m
          , dt = !1;
        if (C) {
            J = f.get(rt),
            J === void 0 && (J = [],
            f.set(rt, J));
            const Q = C.textures;
            if (J.length !== Q.length || J[0] !== i.COLOR_ATTACHMENT0) {
                for (let q = 0, ft = Q.length; q < ft; q++)
                    J[q] = i.COLOR_ATTACHMENT0 + q;
                J.length = Q.length,
                dt = !0
            }
        } else
            J[0] !== i.BACK && (J[0] = i.BACK,
            dt = !0);
        dt && i.drawBuffers(J)
    }
    function ie(C) {
        return g !== C ? (i.useProgram(C),
        g = C,
        !0) : !1
    }
    const se = {
        [Gn]: i.FUNC_ADD,
        [ec]: i.FUNC_SUBTRACT,
        [nc]: i.FUNC_REVERSE_SUBTRACT
    };
    se[ic] = i.MIN,
    se[sc] = i.MAX;
    const Wt = {
        [rc]: i.ZERO,
        [ac]: i.ONE,
        [oc]: i.SRC_COLOR,
        [Lr]: i.SRC_ALPHA,
        [fc]: i.SRC_ALPHA_SATURATE,
        [uc]: i.DST_COLOR,
        [cc]: i.DST_ALPHA,
        [lc]: i.ONE_MINUS_SRC_COLOR,
        [Ur]: i.ONE_MINUS_SRC_ALPHA,
        [dc]: i.ONE_MINUS_DST_COLOR,
        [hc]: i.ONE_MINUS_DST_ALPHA,
        [pc]: i.CONSTANT_COLOR,
        [mc]: i.ONE_MINUS_CONSTANT_COLOR,
        [_c]: i.CONSTANT_ALPHA,
        [gc]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function A(C, rt, J, dt, Q, q, ft, Dt, te, qt) {
        if (C === Rn) {
            x === !0 && (Mt(i.BLEND),
            x = !1);
            return
        }
        if (x === !1 && (lt(i.BLEND),
        x = !0),
        C !== tc) {
            if (C !== p || qt !== E) {
                if ((d !== Gn || S !== Gn) && (i.blendEquation(i.FUNC_ADD),
                d = Gn,
                S = Gn),
                qt)
                    switch (C) {
                    case vi:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Wa:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case Xa:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case qa:
                        i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                else
                    switch (C) {
                    case vi:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Wa:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
                        break;
                    case Xa:
                        console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                        break;
                    case qa:
                        console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                b = null,
                T = null,
                I = null,
                R = null,
                w.set(0, 0, 0),
                N = 0,
                p = C,
                E = qt
            }
            return
        }
        Q = Q || rt,
        q = q || J,
        ft = ft || dt,
        (rt !== d || Q !== S) && (i.blendEquationSeparate(se[rt], se[Q]),
        d = rt,
        S = Q),
        (J !== b || dt !== T || q !== I || ft !== R) && (i.blendFuncSeparate(Wt[J], Wt[dt], Wt[q], Wt[ft]),
        b = J,
        T = dt,
        I = q,
        R = ft),
        (Dt.equals(w) === !1 || te !== N) && (i.blendColor(Dt.r, Dt.g, Dt.b, te),
        w.copy(Dt),
        N = te),
        p = C,
        E = !1
    }
    function xe(C, rt) {
        C.side === tn ? Mt(i.CULL_FACE) : lt(i.CULL_FACE);
        let J = C.side === Pe;
        rt && (J = !J),
        Xt(J),
        C.blending === vi && C.transparent === !1 ? A(Rn) : A(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha),
        a.setFunc(C.depthFunc),
        a.setTest(C.depthTest),
        a.setMask(C.depthWrite),
        r.setMask(C.colorWrite);
        const dt = C.stencilWrite;
        o.setTest(dt),
        dt && (o.setMask(C.stencilWriteMask),
        o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
        Ht(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
        C.alphaToCoverage === !0 ? lt(i.SAMPLE_ALPHA_TO_COVERAGE) : Mt(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Xt(C) {
        M !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        M = C)
    }
    function Qt(C) {
        C !== $l ? (lt(i.CULL_FACE),
        C !== P && (C === ka ? i.cullFace(i.BACK) : C === Jl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Mt(i.CULL_FACE),
        P = C
    }
    function _t(C) {
        C !== k && (X && i.lineWidth(C),
        k = C)
    }
    function Ht(C, rt, J) {
        C ? (lt(i.POLYGON_OFFSET_FILL),
        (z !== rt || j !== J) && (i.polygonOffset(rt, J),
        z = rt,
        j = J)) : Mt(i.POLYGON_OFFSET_FILL)
    }
    function yt(C) {
        C ? lt(i.SCISSOR_TEST) : Mt(i.SCISSOR_TEST)
    }
    function Nt(C) {
        C === void 0 && (C = i.TEXTURE0 + K - 1),
        ot !== C && (i.activeTexture(C),
        ot = C)
    }
    function he(C, rt, J) {
        J === void 0 && (ot === null ? J = i.TEXTURE0 + K - 1 : J = ot);
        let dt = ut[J];
        dt === void 0 && (dt = {
            type: void 0,
            texture: void 0
        },
        ut[J] = dt),
        (dt.type !== C || dt.texture !== rt) && (ot !== J && (i.activeTexture(J),
        ot = J),
        i.bindTexture(C, rt || xt[C]),
        dt.type = C,
        dt.texture = rt)
    }
    function y() {
        const C = ut[ot];
        C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null),
        C.type = void 0,
        C.texture = void 0)
    }
    function _() {
        try {
            i.compressedTexImage2D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function F() {
        try {
            i.compressedTexImage3D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function G() {
        try {
            i.texSubImage2D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function Y() {
        try {
            i.texSubImage3D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function V() {
        try {
            i.compressedTexSubImage2D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function gt() {
        try {
            i.compressedTexSubImage3D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function st() {
        try {
            i.texStorage2D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function mt() {
        try {
            i.texStorage3D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function vt() {
        try {
            i.texImage2D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function Z() {
        try {
            i.texImage3D(...arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ct(C) {
        Zt.equals(C) === !1 && (i.scissor(C.x, C.y, C.z, C.w),
        Zt.copy(C))
    }
    function At(C) {
        W.equals(C) === !1 && (i.viewport(C.x, C.y, C.z, C.w),
        W.copy(C))
    }
    function bt(C, rt) {
        let J = c.get(rt);
        J === void 0 && (J = new WeakMap,
        c.set(rt, J));
        let dt = J.get(C);
        dt === void 0 && (dt = i.getUniformBlockIndex(rt, C.name),
        J.set(C, dt))
    }
    function nt(C, rt) {
        const dt = c.get(rt).get(C);
        l.get(rt) !== dt && (i.uniformBlockBinding(rt, dt, C.__bindingPointIndex),
        l.set(rt, dt))
    }
    function Pt() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        a.setReversed(!1),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        u = {},
        ot = null,
        ut = {},
        h = {},
        f = new WeakMap,
        m = [],
        g = null,
        x = !1,
        p = null,
        d = null,
        b = null,
        T = null,
        S = null,
        I = null,
        R = null,
        w = new Lt(0,0,0),
        N = 0,
        E = !1,
        M = null,
        P = null,
        k = null,
        z = null,
        j = null,
        Zt.set(0, 0, i.canvas.width, i.canvas.height),
        W.set(0, 0, i.canvas.width, i.canvas.height),
        r.reset(),
        a.reset(),
        o.reset()
    }
    return {
        buffers: {
            color: r,
            depth: a,
            stencil: o
        },
        enable: lt,
        disable: Mt,
        bindFramebuffer: kt,
        drawBuffers: wt,
        useProgram: ie,
        setBlending: A,
        setMaterial: xe,
        setFlipSided: Xt,
        setCullFace: Qt,
        setLineWidth: _t,
        setPolygonOffset: Ht,
        setScissorTest: yt,
        activeTexture: Nt,
        bindTexture: he,
        unbindTexture: y,
        compressedTexImage2D: _,
        compressedTexImage3D: F,
        texImage2D: vt,
        texImage3D: Z,
        updateUBOMapping: bt,
        uniformBlockBinding: nt,
        texStorage2D: st,
        texStorage3D: mt,
        texSubImage2D: G,
        texSubImage3D: Y,
        compressedTexSubImage2D: V,
        compressedTexSubImage3D: gt,
        scissor: ct,
        viewport: At,
        reset: Pt
    }
}
function lm(i, t, e, n, s, r, a) {
    const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null
      , l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , c = new Ut
      , u = new WeakMap;
    let h;
    const f = new WeakMap;
    let m = !1;
    try {
        m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(y, _) {
        return m ? new OffscreenCanvas(y,_) : Wi("canvas")
    }
    function x(y, _, F) {
        let G = 1;
        const Y = he(y);
        if ((Y.width > F || Y.height > F) && (G = F / Math.max(Y.width, Y.height)),
        G < 1)
            if (typeof HTMLImageElement < "u" && y instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && y instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && y instanceof ImageBitmap || typeof VideoFrame < "u" && y instanceof VideoFrame) {
                const V = Math.floor(G * Y.width)
                  , gt = Math.floor(G * Y.height);
                h === void 0 && (h = g(V, gt));
                const st = _ ? g(V, gt) : h;
                return st.width = V,
                st.height = gt,
                st.getContext("2d").drawImage(y, 0, 0, V, gt),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + V + "x" + gt + ")."),
                st
            } else
                return "data"in y && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."),
                y;
        return y
    }
    function p(y) {
        return y.generateMipmaps
    }
    function d(y) {
        i.generateMipmap(y)
    }
    function b(y) {
        return y.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : y.isWebGL3DRenderTarget ? i.TEXTURE_3D : y.isWebGLArrayRenderTarget || y.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
    }
    function T(y, _, F, G, Y=!1) {
        if (y !== null) {
            if (i[y] !== void 0)
                return i[y];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + y + "'")
        }
        let V = _;
        if (_ === i.RED && (F === i.FLOAT && (V = i.R32F),
        F === i.HALF_FLOAT && (V = i.R16F),
        F === i.UNSIGNED_BYTE && (V = i.R8)),
        _ === i.RED_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.R8UI),
        F === i.UNSIGNED_SHORT && (V = i.R16UI),
        F === i.UNSIGNED_INT && (V = i.R32UI),
        F === i.BYTE && (V = i.R8I),
        F === i.SHORT && (V = i.R16I),
        F === i.INT && (V = i.R32I)),
        _ === i.RG && (F === i.FLOAT && (V = i.RG32F),
        F === i.HALF_FLOAT && (V = i.RG16F),
        F === i.UNSIGNED_BYTE && (V = i.RG8)),
        _ === i.RG_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RG8UI),
        F === i.UNSIGNED_SHORT && (V = i.RG16UI),
        F === i.UNSIGNED_INT && (V = i.RG32UI),
        F === i.BYTE && (V = i.RG8I),
        F === i.SHORT && (V = i.RG16I),
        F === i.INT && (V = i.RG32I)),
        _ === i.RGB_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGB8UI),
        F === i.UNSIGNED_SHORT && (V = i.RGB16UI),
        F === i.UNSIGNED_INT && (V = i.RGB32UI),
        F === i.BYTE && (V = i.RGB8I),
        F === i.SHORT && (V = i.RGB16I),
        F === i.INT && (V = i.RGB32I)),
        _ === i.RGBA_INTEGER && (F === i.UNSIGNED_BYTE && (V = i.RGBA8UI),
        F === i.UNSIGNED_SHORT && (V = i.RGBA16UI),
        F === i.UNSIGNED_INT && (V = i.RGBA32UI),
        F === i.BYTE && (V = i.RGBA8I),
        F === i.SHORT && (V = i.RGBA16I),
        F === i.INT && (V = i.RGBA32I)),
        _ === i.RGB && F === i.UNSIGNED_INT_5_9_9_9_REV && (V = i.RGB9_E5),
        _ === i.RGBA) {
            const gt = Y ? Fs : Gt.getTransfer(G);
            F === i.FLOAT && (V = i.RGBA32F),
            F === i.HALF_FLOAT && (V = i.RGBA16F),
            F === i.UNSIGNED_BYTE && (V = gt === jt ? i.SRGB8_ALPHA8 : i.RGBA8),
            F === i.UNSIGNED_SHORT_4_4_4_4 && (V = i.RGBA4),
            F === i.UNSIGNED_SHORT_5_5_5_1 && (V = i.RGB5_A1)
        }
        return (V === i.R16F || V === i.R32F || V === i.RG16F || V === i.RG32F || V === i.RGBA16F || V === i.RGBA32F) && t.get("EXT_color_buffer_float"),
        V
    }
    function S(y, _) {
        let F;
        return y ? _ === null || _ === Yn || _ === Vi ? F = i.DEPTH24_STENCIL8 : _ === pn ? F = i.DEPTH32F_STENCIL8 : _ === Hi && (F = i.DEPTH24_STENCIL8,
        console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : _ === null || _ === Yn || _ === Vi ? F = i.DEPTH_COMPONENT24 : _ === pn ? F = i.DEPTH_COMPONENT32F : _ === Hi && (F = i.DEPTH_COMPONENT16),
        F
    }
    function I(y, _) {
        return p(y) === !0 || y.isFramebufferTexture && y.minFilter !== je && y.minFilter !== en ? Math.log2(Math.max(_.width, _.height)) + 1 : y.mipmaps !== void 0 && y.mipmaps.length > 0 ? y.mipmaps.length : y.isCompressedTexture && Array.isArray(y.image) ? _.mipmaps.length : 1
    }
    function R(y) {
        const _ = y.target;
        _.removeEventListener("dispose", R),
        N(_),
        _.isVideoTexture && u.delete(_)
    }
    function w(y) {
        const _ = y.target;
        _.removeEventListener("dispose", w),
        M(_)
    }
    function N(y) {
        const _ = n.get(y);
        if (_.__webglInit === void 0)
            return;
        const F = y.source
          , G = f.get(F);
        if (G) {
            const Y = G[_.__cacheKey];
            Y.usedTimes--,
            Y.usedTimes === 0 && E(y),
            Object.keys(G).length === 0 && f.delete(F)
        }
        n.remove(y)
    }
    function E(y) {
        const _ = n.get(y);
        i.deleteTexture(_.__webglTexture);
        const F = y.source
          , G = f.get(F);
        delete G[_.__cacheKey],
        a.memory.textures--
    }
    function M(y) {
        const _ = n.get(y);
        if (y.depthTexture && (y.depthTexture.dispose(),
        n.remove(y.depthTexture)),
        y.isWebGLCubeRenderTarget)
            for (let G = 0; G < 6; G++) {
                if (Array.isArray(_.__webglFramebuffer[G]))
                    for (let Y = 0; Y < _.__webglFramebuffer[G].length; Y++)
                        i.deleteFramebuffer(_.__webglFramebuffer[G][Y]);
                else
                    i.deleteFramebuffer(_.__webglFramebuffer[G]);
                _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[G])
            }
        else {
            if (Array.isArray(_.__webglFramebuffer))
                for (let G = 0; G < _.__webglFramebuffer.length; G++)
                    i.deleteFramebuffer(_.__webglFramebuffer[G]);
            else
                i.deleteFramebuffer(_.__webglFramebuffer);
            if (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
            _.__webglMultisampledFramebuffer && i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
            _.__webglColorRenderbuffer)
                for (let G = 0; G < _.__webglColorRenderbuffer.length; G++)
                    _.__webglColorRenderbuffer[G] && i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);
            _.__webglDepthRenderbuffer && i.deleteRenderbuffer(_.__webglDepthRenderbuffer)
        }
        const F = y.textures;
        for (let G = 0, Y = F.length; G < Y; G++) {
            const V = n.get(F[G]);
            V.__webglTexture && (i.deleteTexture(V.__webglTexture),
            a.memory.textures--),
            n.remove(F[G])
        }
        n.remove(y)
    }
    let P = 0;
    function k() {
        P = 0
    }
    function z() {
        const y = P;
        return y >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + y + " texture units while this GPU supports only " + s.maxTextures),
        P += 1,
        y
    }
    function j(y) {
        const _ = [];
        return _.push(y.wrapS),
        _.push(y.wrapT),
        _.push(y.wrapR || 0),
        _.push(y.magFilter),
        _.push(y.minFilter),
        _.push(y.anisotropy),
        _.push(y.internalFormat),
        _.push(y.format),
        _.push(y.type),
        _.push(y.generateMipmaps),
        _.push(y.premultiplyAlpha),
        _.push(y.flipY),
        _.push(y.unpackAlignment),
        _.push(y.colorSpace),
        _.join()
    }
    function K(y, _) {
        const F = n.get(y);
        if (y.isVideoTexture && yt(y),
        y.isRenderTargetTexture === !1 && y.version > 0 && F.__version !== y.version) {
            const G = y.image;
            if (G === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (G.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                xt(F, y, _);
                return
            }
        }
        e.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + _)
    }
    function X(y, _) {
        const F = n.get(y);
        if (y.version > 0 && F.__version !== y.version) {
            xt(F, y, _);
            return
        }
        e.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + _)
    }
    function $(y, _) {
        const F = n.get(y);
        if (y.version > 0 && F.__version !== y.version) {
            xt(F, y, _);
            return
        }
        e.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + _)
    }
    function H(y, _) {
        const F = n.get(y);
        if (y.version > 0 && F.__version !== y.version) {
            lt(F, y, _);
            return
        }
        e.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + _)
    }
    const ot = {
        [Gr]: i.REPEAT,
        [Wn]: i.CLAMP_TO_EDGE,
        [kr]: i.MIRRORED_REPEAT
    }
      , ut = {
        [je]: i.NEAREST,
        [wc]: i.NEAREST_MIPMAP_NEAREST,
        [ts]: i.NEAREST_MIPMAP_LINEAR,
        [en]: i.LINEAR,
        [Ks]: i.LINEAR_MIPMAP_NEAREST,
        [Xn]: i.LINEAR_MIPMAP_LINEAR
    }
      , St = {
        [Dc]: i.NEVER,
        [Oc]: i.ALWAYS,
        [Lc]: i.LESS,
        [fl]: i.LEQUAL,
        [Uc]: i.EQUAL,
        [Fc]: i.GEQUAL,
        [Ic]: i.GREATER,
        [Nc]: i.NOTEQUAL
    };
    function Ot(y, _) {
        if (_.type === pn && t.has("OES_texture_float_linear") === !1 && (_.magFilter === en || _.magFilter === Ks || _.magFilter === ts || _.magFilter === Xn || _.minFilter === en || _.minFilter === Ks || _.minFilter === ts || _.minFilter === Xn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        i.texParameteri(y, i.TEXTURE_WRAP_S, ot[_.wrapS]),
        i.texParameteri(y, i.TEXTURE_WRAP_T, ot[_.wrapT]),
        (y === i.TEXTURE_3D || y === i.TEXTURE_2D_ARRAY) && i.texParameteri(y, i.TEXTURE_WRAP_R, ot[_.wrapR]),
        i.texParameteri(y, i.TEXTURE_MAG_FILTER, ut[_.magFilter]),
        i.texParameteri(y, i.TEXTURE_MIN_FILTER, ut[_.minFilter]),
        _.compareFunction && (i.texParameteri(y, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(y, i.TEXTURE_COMPARE_FUNC, St[_.compareFunction])),
        t.has("EXT_texture_filter_anisotropic") === !0) {
            if (_.magFilter === je || _.minFilter !== ts && _.minFilter !== Xn || _.type === pn && t.has("OES_texture_float_linear") === !1)
                return;
            if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
                const F = t.get("EXT_texture_filter_anisotropic");
                i.texParameterf(y, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_.anisotropy, s.getMaxAnisotropy())),
                n.get(_).__currentAnisotropy = _.anisotropy
            }
        }
    }
    function Zt(y, _) {
        let F = !1;
        y.__webglInit === void 0 && (y.__webglInit = !0,
        _.addEventListener("dispose", R));
        const G = _.source;
        let Y = f.get(G);
        Y === void 0 && (Y = {},
        f.set(G, Y));
        const V = j(_);
        if (V !== y.__cacheKey) {
            Y[V] === void 0 && (Y[V] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            F = !0),
            Y[V].usedTimes++;
            const gt = Y[y.__cacheKey];
            gt !== void 0 && (Y[y.__cacheKey].usedTimes--,
            gt.usedTimes === 0 && E(_)),
            y.__cacheKey = V,
            y.__webglTexture = Y[V].texture
        }
        return F
    }
    function W(y, _, F) {
        return Math.floor(Math.floor(y / F) / _)
    }
    function et(y, _, F, G) {
        const V = y.updateRanges;
        if (V.length === 0)
            e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, _.width, _.height, F, G, _.data);
        else {
            V.sort( (Z, ct) => Z.start - ct.start);
            let gt = 0;
            for (let Z = 1; Z < V.length; Z++) {
                const ct = V[gt]
                  , At = V[Z]
                  , bt = ct.start + ct.count
                  , nt = W(At.start, _.width, 4)
                  , Pt = W(ct.start, _.width, 4);
                At.start <= bt + 1 && nt === Pt && W(At.start + At.count - 1, _.width, 4) === nt ? ct.count = Math.max(ct.count, At.start + At.count - ct.start) : (++gt,
                V[gt] = At)
            }
            V.length = gt + 1;
            const st = i.getParameter(i.UNPACK_ROW_LENGTH)
              , mt = i.getParameter(i.UNPACK_SKIP_PIXELS)
              , vt = i.getParameter(i.UNPACK_SKIP_ROWS);
            i.pixelStorei(i.UNPACK_ROW_LENGTH, _.width);
            for (let Z = 0, ct = V.length; Z < ct; Z++) {
                const At = V[Z]
                  , bt = Math.floor(At.start / 4)
                  , nt = Math.ceil(At.count / 4)
                  , Pt = bt % _.width
                  , C = Math.floor(bt / _.width)
                  , rt = nt
                  , J = 1;
                i.pixelStorei(i.UNPACK_SKIP_PIXELS, Pt),
                i.pixelStorei(i.UNPACK_SKIP_ROWS, C),
                e.texSubImage2D(i.TEXTURE_2D, 0, Pt, C, rt, J, F, G, _.data)
            }
            y.clearUpdateRanges(),
            i.pixelStorei(i.UNPACK_ROW_LENGTH, st),
            i.pixelStorei(i.UNPACK_SKIP_PIXELS, mt),
            i.pixelStorei(i.UNPACK_SKIP_ROWS, vt)
        }
    }
    function xt(y, _, F) {
        let G = i.TEXTURE_2D;
        (_.isDataArrayTexture || _.isCompressedArrayTexture) && (G = i.TEXTURE_2D_ARRAY),
        _.isData3DTexture && (G = i.TEXTURE_3D);
        const Y = Zt(y, _)
          , V = _.source;
        e.bindTexture(G, y.__webglTexture, i.TEXTURE0 + F);
        const gt = n.get(V);
        if (V.version !== gt.__version || Y === !0) {
            e.activeTexture(i.TEXTURE0 + F);
            const st = Gt.getPrimaries(Gt.workingColorSpace)
              , mt = _.colorSpace === wn ? null : Gt.getPrimaries(_.colorSpace)
              , vt = _.colorSpace === wn || st === mt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
            let Z = x(_.image, !1, s.maxTextureSize);
            Z = Nt(_, Z);
            const ct = r.convert(_.format, _.colorSpace)
              , At = r.convert(_.type);
            let bt = T(_.internalFormat, ct, At, _.colorSpace, _.isVideoTexture);
            Ot(G, _);
            let nt;
            const Pt = _.mipmaps
              , C = _.isVideoTexture !== !0
              , rt = gt.__version === void 0 || Y === !0
              , J = V.dataReady
              , dt = I(_, Z);
            if (_.isDepthTexture)
                bt = S(_.format === ki, _.type),
                rt && (C ? e.texStorage2D(i.TEXTURE_2D, 1, bt, Z.width, Z.height) : e.texImage2D(i.TEXTURE_2D, 0, bt, Z.width, Z.height, 0, ct, At, null));
            else if (_.isDataTexture)
                if (Pt.length > 0) {
                    C && rt && e.texStorage2D(i.TEXTURE_2D, dt, bt, Pt[0].width, Pt[0].height);
                    for (let Q = 0, q = Pt.length; Q < q; Q++)
                        nt = Pt[Q],
                        C ? J && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, nt.width, nt.height, ct, At, nt.data) : e.texImage2D(i.TEXTURE_2D, Q, bt, nt.width, nt.height, 0, ct, At, nt.data);
                    _.generateMipmaps = !1
                } else
                    C ? (rt && e.texStorage2D(i.TEXTURE_2D, dt, bt, Z.width, Z.height),
                    J && et(_, Z, ct, At)) : e.texImage2D(i.TEXTURE_2D, 0, bt, Z.width, Z.height, 0, ct, At, Z.data);
            else if (_.isCompressedTexture)
                if (_.isCompressedArrayTexture) {
                    C && rt && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, bt, Pt[0].width, Pt[0].height, Z.depth);
                    for (let Q = 0, q = Pt.length; Q < q; Q++)
                        if (nt = Pt[Q],
                        _.format !== Ye)
                            if (ct !== null)
                                if (C) {
                                    if (J)
                                        if (_.layerUpdates.size > 0) {
                                            const ft = To(nt.width, nt.height, _.format, _.type);
                                            for (const Dt of _.layerUpdates) {
                                                const te = nt.data.subarray(Dt * ft / nt.data.BYTES_PER_ELEMENT, (Dt + 1) * ft / nt.data.BYTES_PER_ELEMENT);
                                                e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, Dt, nt.width, nt.height, 1, ct, te)
                                            }
                                            _.clearLayerUpdates()
                                        } else
                                            e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, nt.width, nt.height, Z.depth, ct, nt.data)
                                } else
                                    e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, Q, bt, nt.width, nt.height, Z.depth, 0, nt.data, 0, 0);
                            else
                                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else
                            C ? J && e.texSubImage3D(i.TEXTURE_2D_ARRAY, Q, 0, 0, 0, nt.width, nt.height, Z.depth, ct, At, nt.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, Q, bt, nt.width, nt.height, Z.depth, 0, ct, At, nt.data)
                } else {
                    C && rt && e.texStorage2D(i.TEXTURE_2D, dt, bt, Pt[0].width, Pt[0].height);
                    for (let Q = 0, q = Pt.length; Q < q; Q++)
                        nt = Pt[Q],
                        _.format !== Ye ? ct !== null ? C ? J && e.compressedTexSubImage2D(i.TEXTURE_2D, Q, 0, 0, nt.width, nt.height, ct, nt.data) : e.compressedTexImage2D(i.TEXTURE_2D, Q, bt, nt.width, nt.height, 0, nt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? J && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, nt.width, nt.height, ct, At, nt.data) : e.texImage2D(i.TEXTURE_2D, Q, bt, nt.width, nt.height, 0, ct, At, nt.data)
                }
            else if (_.isDataArrayTexture)
                if (C) {
                    if (rt && e.texStorage3D(i.TEXTURE_2D_ARRAY, dt, bt, Z.width, Z.height, Z.depth),
                    J)
                        if (_.layerUpdates.size > 0) {
                            const Q = To(Z.width, Z.height, _.format, _.type);
                            for (const q of _.layerUpdates) {
                                const ft = Z.data.subarray(q * Q / Z.data.BYTES_PER_ELEMENT, (q + 1) * Q / Z.data.BYTES_PER_ELEMENT);
                                e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, Z.width, Z.height, 1, ct, At, ft)
                            }
                            _.clearLayerUpdates()
                        } else
                            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Z.width, Z.height, Z.depth, ct, At, Z.data)
                } else
                    e.texImage3D(i.TEXTURE_2D_ARRAY, 0, bt, Z.width, Z.height, Z.depth, 0, ct, At, Z.data);
            else if (_.isData3DTexture)
                C ? (rt && e.texStorage3D(i.TEXTURE_3D, dt, bt, Z.width, Z.height, Z.depth),
                J && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Z.width, Z.height, Z.depth, ct, At, Z.data)) : e.texImage3D(i.TEXTURE_3D, 0, bt, Z.width, Z.height, Z.depth, 0, ct, At, Z.data);
            else if (_.isFramebufferTexture) {
                if (rt)
                    if (C)
                        e.texStorage2D(i.TEXTURE_2D, dt, bt, Z.width, Z.height);
                    else {
                        let Q = Z.width
                          , q = Z.height;
                        for (let ft = 0; ft < dt; ft++)
                            e.texImage2D(i.TEXTURE_2D, ft, bt, Q, q, 0, ct, At, null),
                            Q >>= 1,
                            q >>= 1
                    }
            } else if (Pt.length > 0) {
                if (C && rt) {
                    const Q = he(Pt[0]);
                    e.texStorage2D(i.TEXTURE_2D, dt, bt, Q.width, Q.height)
                }
                for (let Q = 0, q = Pt.length; Q < q; Q++)
                    nt = Pt[Q],
                    C ? J && e.texSubImage2D(i.TEXTURE_2D, Q, 0, 0, ct, At, nt) : e.texImage2D(i.TEXTURE_2D, Q, bt, ct, At, nt);
                _.generateMipmaps = !1
            } else if (C) {
                if (rt) {
                    const Q = he(Z);
                    e.texStorage2D(i.TEXTURE_2D, dt, bt, Q.width, Q.height)
                }
                J && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ct, At, Z)
            } else
                e.texImage2D(i.TEXTURE_2D, 0, bt, ct, At, Z);
            p(_) && d(G),
            gt.__version = V.version,
            _.onUpdate && _.onUpdate(_)
        }
        y.__version = _.version
    }
    function lt(y, _, F) {
        if (_.image.length !== 6)
            return;
        const G = Zt(y, _)
          , Y = _.source;
        e.bindTexture(i.TEXTURE_CUBE_MAP, y.__webglTexture, i.TEXTURE0 + F);
        const V = n.get(Y);
        if (Y.version !== V.__version || G === !0) {
            e.activeTexture(i.TEXTURE0 + F);
            const gt = Gt.getPrimaries(Gt.workingColorSpace)
              , st = _.colorSpace === wn ? null : Gt.getPrimaries(_.colorSpace)
              , mt = _.colorSpace === wn || gt === st ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, mt);
            const vt = _.isCompressedTexture || _.image[0].isCompressedTexture
              , Z = _.image[0] && _.image[0].isDataTexture
              , ct = [];
            for (let q = 0; q < 6; q++)
                !vt && !Z ? ct[q] = x(_.image[q], !0, s.maxCubemapSize) : ct[q] = Z ? _.image[q].image : _.image[q],
                ct[q] = Nt(_, ct[q]);
            const At = ct[0]
              , bt = r.convert(_.format, _.colorSpace)
              , nt = r.convert(_.type)
              , Pt = T(_.internalFormat, bt, nt, _.colorSpace)
              , C = _.isVideoTexture !== !0
              , rt = V.__version === void 0 || G === !0
              , J = Y.dataReady;
            let dt = I(_, At);
            Ot(i.TEXTURE_CUBE_MAP, _);
            let Q;
            if (vt) {
                C && rt && e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, Pt, At.width, At.height);
                for (let q = 0; q < 6; q++) {
                    Q = ct[q].mipmaps;
                    for (let ft = 0; ft < Q.length; ft++) {
                        const Dt = Q[ft];
                        _.format !== Ye ? bt !== null ? C ? J && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft, 0, 0, Dt.width, Dt.height, bt, Dt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft, Pt, Dt.width, Dt.height, 0, Dt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : C ? J && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft, 0, 0, Dt.width, Dt.height, bt, nt, Dt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft, Pt, Dt.width, Dt.height, 0, bt, nt, Dt.data)
                    }
                }
            } else {
                if (Q = _.mipmaps,
                C && rt) {
                    Q.length > 0 && dt++;
                    const q = he(ct[0]);
                    e.texStorage2D(i.TEXTURE_CUBE_MAP, dt, Pt, q.width, q.height)
                }
                for (let q = 0; q < 6; q++)
                    if (Z) {
                        C ? J && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, ct[q].width, ct[q].height, bt, nt, ct[q].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Pt, ct[q].width, ct[q].height, 0, bt, nt, ct[q].data);
                        for (let ft = 0; ft < Q.length; ft++) {
                            const te = Q[ft].image[q].image;
                            C ? J && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft + 1, 0, 0, te.width, te.height, bt, nt, te.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft + 1, Pt, te.width, te.height, 0, bt, nt, te.data)
                        }
                    } else {
                        C ? J && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, bt, nt, ct[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Pt, bt, nt, ct[q]);
                        for (let ft = 0; ft < Q.length; ft++) {
                            const Dt = Q[ft];
                            C ? J && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft + 1, 0, 0, bt, nt, Dt.image[q]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, ft + 1, Pt, bt, nt, Dt.image[q])
                        }
                    }
            }
            p(_) && d(i.TEXTURE_CUBE_MAP),
            V.__version = Y.version,
            _.onUpdate && _.onUpdate(_)
        }
        y.__version = _.version
    }
    function Mt(y, _, F, G, Y, V) {
        const gt = r.convert(F.format, F.colorSpace)
          , st = r.convert(F.type)
          , mt = T(F.internalFormat, gt, st, F.colorSpace)
          , vt = n.get(_)
          , Z = n.get(F);
        if (Z.__renderTarget = _,
        !vt.__hasExternalTextures) {
            const ct = Math.max(1, _.width >> V)
              , At = Math.max(1, _.height >> V);
            Y === i.TEXTURE_3D || Y === i.TEXTURE_2D_ARRAY ? e.texImage3D(Y, V, mt, ct, At, _.depth, 0, gt, st, null) : e.texImage2D(Y, V, mt, ct, At, 0, gt, st, null)
        }
        e.bindFramebuffer(i.FRAMEBUFFER, y),
        Ht(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, G, Y, Z.__webglTexture, 0, _t(_)) : (Y === i.TEXTURE_2D || Y >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, G, Y, Z.__webglTexture, V),
        e.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function kt(y, _, F) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, y),
        _.depthBuffer) {
            const G = _.depthTexture
              , Y = G && G.isDepthTexture ? G.type : null
              , V = S(_.stencilBuffer, Y)
              , gt = _.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
              , st = _t(_);
            Ht(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, st, V, _.width, _.height) : F ? i.renderbufferStorageMultisample(i.RENDERBUFFER, st, V, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, V, _.width, _.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, gt, i.RENDERBUFFER, y)
        } else {
            const G = _.textures;
            for (let Y = 0; Y < G.length; Y++) {
                const V = G[Y]
                  , gt = r.convert(V.format, V.colorSpace)
                  , st = r.convert(V.type)
                  , mt = T(V.internalFormat, gt, st, V.colorSpace)
                  , vt = _t(_);
                F && Ht(_) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, vt, mt, _.width, _.height) : Ht(_) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, vt, mt, _.width, _.height) : i.renderbufferStorage(i.RENDERBUFFER, mt, _.width, _.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function wt(y, _) {
        if (_ && _.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (e.bindFramebuffer(i.FRAMEBUFFER, y),
        !(_.depthTexture && _.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        const G = n.get(_.depthTexture);
        G.__renderTarget = _,
        (!G.__webglTexture || _.depthTexture.image.width !== _.width || _.depthTexture.image.height !== _.height) && (_.depthTexture.image.width = _.width,
        _.depthTexture.image.height = _.height,
        _.depthTexture.needsUpdate = !0),
        K(_.depthTexture, 0);
        const Y = G.__webglTexture
          , V = _t(_);
        if (_.depthTexture.format === Gi)
            Ht(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Y, 0);
        else if (_.depthTexture.format === ki)
            Ht(_) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0, V) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Y, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function ie(y) {
        const _ = n.get(y)
          , F = y.isWebGLCubeRenderTarget === !0;
        if (_.__boundDepthTexture !== y.depthTexture) {
            const G = y.depthTexture;
            if (_.__depthDisposeCallback && _.__depthDisposeCallback(),
            G) {
                const Y = () => {
                    delete _.__boundDepthTexture,
                    delete _.__depthDisposeCallback,
                    G.removeEventListener("dispose", Y)
                }
                ;
                G.addEventListener("dispose", Y),
                _.__depthDisposeCallback = Y
            }
            _.__boundDepthTexture = G
        }
        if (y.depthTexture && !_.__autoAllocateDepthBuffer) {
            if (F)
                throw new Error("target.depthTexture not supported in Cube render targets");
            const G = y.texture.mipmaps;
            G && G.length > 0 ? wt(_.__webglFramebuffer[0], y) : wt(_.__webglFramebuffer, y)
        } else if (F) {
            _.__webglDepthbuffer = [];
            for (let G = 0; G < 6; G++)
                if (e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[G]),
                _.__webglDepthbuffer[G] === void 0)
                    _.__webglDepthbuffer[G] = i.createRenderbuffer(),
                    kt(_.__webglDepthbuffer[G], y, !1);
                else {
                    const Y = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                      , V = _.__webglDepthbuffer[G];
                    i.bindRenderbuffer(i.RENDERBUFFER, V),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, V)
                }
        } else {
            const G = y.texture.mipmaps;
            if (G && G.length > 0 ? e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[0]) : e.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
            _.__webglDepthbuffer === void 0)
                _.__webglDepthbuffer = i.createRenderbuffer(),
                kt(_.__webglDepthbuffer, y, !1);
            else {
                const Y = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , V = _.__webglDepthbuffer;
                i.bindRenderbuffer(i.RENDERBUFFER, V),
                i.framebufferRenderbuffer(i.FRAMEBUFFER, Y, i.RENDERBUFFER, V)
            }
        }
        e.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function se(y, _, F) {
        const G = n.get(y);
        _ !== void 0 && Mt(G.__webglFramebuffer, y, y.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        F !== void 0 && ie(y)
    }
    function Wt(y) {
        const _ = y.texture
          , F = n.get(y)
          , G = n.get(_);
        y.addEventListener("dispose", w);
        const Y = y.textures
          , V = y.isWebGLCubeRenderTarget === !0
          , gt = Y.length > 1;
        if (gt || (G.__webglTexture === void 0 && (G.__webglTexture = i.createTexture()),
        G.__version = _.version,
        a.memory.textures++),
        V) {
            F.__webglFramebuffer = [];
            for (let st = 0; st < 6; st++)
                if (_.mipmaps && _.mipmaps.length > 0) {
                    F.__webglFramebuffer[st] = [];
                    for (let mt = 0; mt < _.mipmaps.length; mt++)
                        F.__webglFramebuffer[st][mt] = i.createFramebuffer()
                } else
                    F.__webglFramebuffer[st] = i.createFramebuffer()
        } else {
            if (_.mipmaps && _.mipmaps.length > 0) {
                F.__webglFramebuffer = [];
                for (let st = 0; st < _.mipmaps.length; st++)
                    F.__webglFramebuffer[st] = i.createFramebuffer()
            } else
                F.__webglFramebuffer = i.createFramebuffer();
            if (gt)
                for (let st = 0, mt = Y.length; st < mt; st++) {
                    const vt = n.get(Y[st]);
                    vt.__webglTexture === void 0 && (vt.__webglTexture = i.createTexture(),
                    a.memory.textures++)
                }
            if (y.samples > 0 && Ht(y) === !1) {
                F.__webglMultisampledFramebuffer = i.createFramebuffer(),
                F.__webglColorRenderbuffer = [],
                e.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
                for (let st = 0; st < Y.length; st++) {
                    const mt = Y[st];
                    F.__webglColorRenderbuffer[st] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[st]);
                    const vt = r.convert(mt.format, mt.colorSpace)
                      , Z = r.convert(mt.type)
                      , ct = T(mt.internalFormat, vt, Z, mt.colorSpace, y.isXRRenderTarget === !0)
                      , At = _t(y);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, At, ct, y.width, y.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + st, i.RENDERBUFFER, F.__webglColorRenderbuffer[st])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                y.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(),
                kt(F.__webglDepthRenderbuffer, y, !0)),
                e.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if (V) {
            e.bindTexture(i.TEXTURE_CUBE_MAP, G.__webglTexture),
            Ot(i.TEXTURE_CUBE_MAP, _);
            for (let st = 0; st < 6; st++)
                if (_.mipmaps && _.mipmaps.length > 0)
                    for (let mt = 0; mt < _.mipmaps.length; mt++)
                        Mt(F.__webglFramebuffer[st][mt], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + st, mt);
                else
                    Mt(F.__webglFramebuffer[st], y, _, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + st, 0);
            p(_) && d(i.TEXTURE_CUBE_MAP),
            e.unbindTexture()
        } else if (gt) {
            for (let st = 0, mt = Y.length; st < mt; st++) {
                const vt = Y[st]
                  , Z = n.get(vt);
                e.bindTexture(i.TEXTURE_2D, Z.__webglTexture),
                Ot(i.TEXTURE_2D, vt),
                Mt(F.__webglFramebuffer, y, vt, i.COLOR_ATTACHMENT0 + st, i.TEXTURE_2D, 0),
                p(vt) && d(i.TEXTURE_2D)
            }
            e.unbindTexture()
        } else {
            let st = i.TEXTURE_2D;
            if ((y.isWebGL3DRenderTarget || y.isWebGLArrayRenderTarget) && (st = y.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
            e.bindTexture(st, G.__webglTexture),
            Ot(st, _),
            _.mipmaps && _.mipmaps.length > 0)
                for (let mt = 0; mt < _.mipmaps.length; mt++)
                    Mt(F.__webglFramebuffer[mt], y, _, i.COLOR_ATTACHMENT0, st, mt);
            else
                Mt(F.__webglFramebuffer, y, _, i.COLOR_ATTACHMENT0, st, 0);
            p(_) && d(st),
            e.unbindTexture()
        }
        y.depthBuffer && ie(y)
    }
    function A(y) {
        const _ = y.textures;
        for (let F = 0, G = _.length; F < G; F++) {
            const Y = _[F];
            if (p(Y)) {
                const V = b(y)
                  , gt = n.get(Y).__webglTexture;
                e.bindTexture(V, gt),
                d(V),
                e.unbindTexture()
            }
        }
    }
    const xe = []
      , Xt = [];
    function Qt(y) {
        if (y.samples > 0) {
            if (Ht(y) === !1) {
                const _ = y.textures
                  , F = y.width
                  , G = y.height;
                let Y = i.COLOR_BUFFER_BIT;
                const V = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , gt = n.get(y)
                  , st = _.length > 1;
                if (st)
                    for (let vt = 0; vt < _.length; vt++)
                        e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, null),
                        e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, null, 0);
                e.bindFramebuffer(i.READ_FRAMEBUFFER, gt.__webglMultisampledFramebuffer);
                const mt = y.texture.mipmaps;
                mt && mt.length > 0 ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglFramebuffer[0]) : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglFramebuffer);
                for (let vt = 0; vt < _.length; vt++) {
                    if (y.resolveDepthBuffer && (y.depthBuffer && (Y |= i.DEPTH_BUFFER_BIT),
                    y.stencilBuffer && y.resolveStencilBuffer && (Y |= i.STENCIL_BUFFER_BIT)),
                    st) {
                        i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, gt.__webglColorRenderbuffer[vt]);
                        const Z = n.get(_[vt]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Z, 0)
                    }
                    i.blitFramebuffer(0, 0, F, G, 0, 0, F, G, Y, i.NEAREST),
                    l === !0 && (xe.length = 0,
                    Xt.length = 0,
                    xe.push(i.COLOR_ATTACHMENT0 + vt),
                    y.depthBuffer && y.resolveDepthBuffer === !1 && (xe.push(V),
                    Xt.push(V),
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Xt)),
                    i.invalidateFramebuffer(i.READ_FRAMEBUFFER, xe))
                }
                if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null),
                e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
                st)
                    for (let vt = 0; vt < _.length; vt++) {
                        e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, gt.__webglColorRenderbuffer[vt]);
                        const Z = n.get(_[vt]).__webglTexture;
                        e.bindFramebuffer(i.FRAMEBUFFER, gt.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, Z, 0)
                    }
                e.bindFramebuffer(i.DRAW_FRAMEBUFFER, gt.__webglMultisampledFramebuffer)
            } else if (y.depthBuffer && y.resolveDepthBuffer === !1 && l) {
                const _ = y.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_])
            }
        }
    }
    function _t(y) {
        return Math.min(s.maxSamples, y.samples)
    }
    function Ht(y) {
        const _ = n.get(y);
        return y.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && _.__useRenderToTexture !== !1
    }
    function yt(y) {
        const _ = a.render.frame;
        u.get(y) !== _ && (u.set(y, _),
        y.update())
    }
    function Nt(y, _) {
        const F = y.colorSpace
          , G = y.format
          , Y = y.type;
        return y.isCompressedTexture === !0 || y.isVideoTexture === !0 || F !== bi && F !== wn && (Gt.getTransfer(F) === jt ? (G !== Ye || Y !== xn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)),
        _
    }
    function he(y) {
        return typeof HTMLImageElement < "u" && y instanceof HTMLImageElement ? (c.width = y.naturalWidth || y.width,
        c.height = y.naturalHeight || y.height) : typeof VideoFrame < "u" && y instanceof VideoFrame ? (c.width = y.displayWidth,
        c.height = y.displayHeight) : (c.width = y.width,
        c.height = y.height),
        c
    }
    this.allocateTextureUnit = z,
    this.resetTextureUnits = k,
    this.setTexture2D = K,
    this.setTexture2DArray = X,
    this.setTexture3D = $,
    this.setTextureCube = H,
    this.rebindTextures = se,
    this.setupRenderTarget = Wt,
    this.updateRenderTargetMipmap = A,
    this.updateMultisampleRenderTarget = Qt,
    this.setupDepthRenderbuffer = ie,
    this.setupFrameBufferTexture = Mt,
    this.useMultisampledRTT = Ht
}
function cm(i, t) {
    function e(n, s=wn) {
        let r;
        const a = Gt.getTransfer(s);
        if (n === xn)
            return i.UNSIGNED_BYTE;
        if (n === ya)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (n === Ta)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (n === ol)
            return i.UNSIGNED_INT_5_9_9_9_REV;
        if (n === rl)
            return i.BYTE;
        if (n === al)
            return i.SHORT;
        if (n === Hi)
            return i.UNSIGNED_SHORT;
        if (n === Ea)
            return i.INT;
        if (n === Yn)
            return i.UNSIGNED_INT;
        if (n === pn)
            return i.FLOAT;
        if (n === Xi)
            return i.HALF_FLOAT;
        if (n === ll)
            return i.ALPHA;
        if (n === cl)
            return i.RGB;
        if (n === Ye)
            return i.RGBA;
        if (n === Gi)
            return i.DEPTH_COMPONENT;
        if (n === ki)
            return i.DEPTH_STENCIL;
        if (n === hl)
            return i.RED;
        if (n === ba)
            return i.RED_INTEGER;
        if (n === ul)
            return i.RG;
        if (n === Aa)
            return i.RG_INTEGER;
        if (n === wa)
            return i.RGBA_INTEGER;
        if (n === ws || n === Rs || n === Cs || n === Ps)
            if (a === jt)
                if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"),
                r !== null) {
                    if (n === ws)
                        return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === Rs)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === Cs)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === Ps)
                        return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (r = t.get("WEBGL_compressed_texture_s3tc"),
            r !== null) {
                if (n === ws)
                    return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Rs)
                    return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === Cs)
                    return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Ps)
                    return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === Wr || n === Xr || n === qr || n === Yr)
            if (r = t.get("WEBGL_compressed_texture_pvrtc"),
            r !== null) {
                if (n === Wr)
                    return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === Xr)
                    return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === qr)
                    return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Yr)
                    return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === jr || n === Kr || n === Zr)
            if (r = t.get("WEBGL_compressed_texture_etc"),
            r !== null) {
                if (n === jr || n === Kr)
                    return a === jt ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
                if (n === Zr)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (n === $r || n === Jr || n === Qr || n === ta || n === ea || n === na || n === ia || n === sa || n === ra || n === aa || n === oa || n === la || n === ca || n === ha)
            if (r = t.get("WEBGL_compressed_texture_astc"),
            r !== null) {
                if (n === $r)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === Jr)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === Qr)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === ta)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === ea)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === na)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === ia)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === sa)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === ra)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === aa)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === oa)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === la)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === ca)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === ha)
                    return a === jt ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === Ds || n === ua || n === da)
            if (r = t.get("EXT_texture_compression_bptc"),
            r !== null) {
                if (n === Ds)
                    return a === jt ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === ua)
                    return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === da)
                    return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === dl || n === fa || n === pa || n === ma)
            if (r = t.get("EXT_texture_compression_rgtc"),
            r !== null) {
                if (n === Ds)
                    return r.COMPRESSED_RED_RGTC1_EXT;
                if (n === fa)
                    return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === pa)
                    return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === ma)
                    return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === Vi ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
    }
    return {
        convert: e
    }
}
const hm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , um = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class dm {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(t, e, n) {
        if (this.texture === null) {
            const s = new ye
              , r = t.properties.get(s);
            r.__webglTexture = e.texture,
            (e.depthNear !== n.depthNear || e.depthFar !== n.depthFar) && (this.depthNear = e.depthNear,
            this.depthFar = e.depthFar),
            this.texture = s
        }
    }
    getMesh(t) {
        if (this.texture !== null && this.mesh === null) {
            const e = t.cameras[0].viewport
              , n = new Dn({
                vertexShader: hm,
                fragmentShader: um,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: e.z
                    },
                    depthHeight: {
                        value: e.w
                    }
                }
            });
            this.mesh = new He(new ks(20,20),n)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
class fm extends Jn {
    constructor(t, e) {
        super();
        const n = this;
        let s = null
          , r = 1
          , a = null
          , o = "local-floor"
          , l = 1
          , c = null
          , u = null
          , h = null
          , f = null
          , m = null
          , g = null;
        const x = new dm
          , p = e.getContextAttributes();
        let d = null
          , b = null;
        const T = []
          , S = []
          , I = new Ut;
        let R = null;
        const w = new ze;
        w.viewport = new le;
        const N = new ze;
        N.viewport = new le;
        const E = [w, N]
          , M = new Lh;
        let P = null
          , k = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(W) {
            let et = T[W];
            return et === void 0 && (et = new gr,
            T[W] = et),
            et.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(W) {
            let et = T[W];
            return et === void 0 && (et = new gr,
            T[W] = et),
            et.getGripSpace()
        }
        ,
        this.getHand = function(W) {
            let et = T[W];
            return et === void 0 && (et = new gr,
            T[W] = et),
            et.getHandSpace()
        }
        ;
        function z(W) {
            const et = S.indexOf(W.inputSource);
            if (et === -1)
                return;
            const xt = T[et];
            xt !== void 0 && (xt.update(W.inputSource, W.frame, c || a),
            xt.dispatchEvent({
                type: W.type,
                data: W.inputSource
            }))
        }
        function j() {
            s.removeEventListener("select", z),
            s.removeEventListener("selectstart", z),
            s.removeEventListener("selectend", z),
            s.removeEventListener("squeeze", z),
            s.removeEventListener("squeezestart", z),
            s.removeEventListener("squeezeend", z),
            s.removeEventListener("end", j),
            s.removeEventListener("inputsourceschange", K);
            for (let W = 0; W < T.length; W++) {
                const et = S[W];
                et !== null && (S[W] = null,
                T[W].disconnect(et))
            }
            P = null,
            k = null,
            x.reset(),
            t.setRenderTarget(d),
            m = null,
            f = null,
            h = null,
            s = null,
            b = null,
            Zt.stop(),
            n.isPresenting = !1,
            t.setPixelRatio(R),
            t.setSize(I.width, I.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(W) {
            r = W,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(W) {
            o = W,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return c || a
        }
        ,
        this.setReferenceSpace = function(W) {
            c = W
        }
        ,
        this.getBaseLayer = function() {
            return f !== null ? f : m
        }
        ,
        this.getBinding = function() {
            return h
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return s
        }
        ,
        this.setSession = async function(W) {
            if (s = W,
            s !== null) {
                if (d = t.getRenderTarget(),
                s.addEventListener("select", z),
                s.addEventListener("selectstart", z),
                s.addEventListener("selectend", z),
                s.addEventListener("squeeze", z),
                s.addEventListener("squeezestart", z),
                s.addEventListener("squeezeend", z),
                s.addEventListener("end", j),
                s.addEventListener("inputsourceschange", K),
                p.xrCompatible !== !0 && await e.makeXRCompatible(),
                R = t.getPixelRatio(),
                t.getSize(I),
                typeof XRWebGLBinding < "u" && "createProjectionLayer"in XRWebGLBinding.prototype) {
                    let xt = null
                      , lt = null
                      , Mt = null;
                    p.depth && (Mt = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24,
                    xt = p.stencil ? ki : Gi,
                    lt = p.stencil ? Vi : Yn);
                    const kt = {
                        colorFormat: e.RGBA8,
                        depthFormat: Mt,
                        scaleFactor: r
                    };
                    h = new XRWebGLBinding(s,e),
                    f = h.createProjectionLayer(kt),
                    s.updateRenderState({
                        layers: [f]
                    }),
                    t.setPixelRatio(1),
                    t.setSize(f.textureWidth, f.textureHeight, !1),
                    b = new Kn(f.textureWidth,f.textureHeight,{
                        format: Ye,
                        type: xn,
                        depthTexture: new Tl(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,xt),
                        stencilBuffer: p.stencil,
                        colorSpace: t.outputColorSpace,
                        samples: p.antialias ? 4 : 0,
                        resolveDepthBuffer: f.ignoreDepthValues === !1,
                        resolveStencilBuffer: f.ignoreDepthValues === !1
                    })
                } else {
                    const xt = {
                        antialias: p.antialias,
                        alpha: !0,
                        depth: p.depth,
                        stencil: p.stencil,
                        framebufferScaleFactor: r
                    };
                    m = new XRWebGLLayer(s,e,xt),
                    s.updateRenderState({
                        baseLayer: m
                    }),
                    t.setPixelRatio(1),
                    t.setSize(m.framebufferWidth, m.framebufferHeight, !1),
                    b = new Kn(m.framebufferWidth,m.framebufferHeight,{
                        format: Ye,
                        type: xn,
                        colorSpace: t.outputColorSpace,
                        stencilBuffer: p.stencil,
                        resolveDepthBuffer: m.ignoreDepthValues === !1,
                        resolveStencilBuffer: m.ignoreDepthValues === !1
                    })
                }
                b.isXRRenderTarget = !0,
                this.setFoveation(l),
                c = null,
                a = await s.requestReferenceSpace(o),
                Zt.setContext(s),
                Zt.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (s !== null)
                return s.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return x.getDepthTexture()
        }
        ;
        function K(W) {
            for (let et = 0; et < W.removed.length; et++) {
                const xt = W.removed[et]
                  , lt = S.indexOf(xt);
                lt >= 0 && (S[lt] = null,
                T[lt].disconnect(xt))
            }
            for (let et = 0; et < W.added.length; et++) {
                const xt = W.added[et];
                let lt = S.indexOf(xt);
                if (lt === -1) {
                    for (let kt = 0; kt < T.length; kt++)
                        if (kt >= S.length) {
                            S.push(xt),
                            lt = kt;
                            break
                        } else if (S[kt] === null) {
                            S[kt] = xt,
                            lt = kt;
                            break
                        }
                    if (lt === -1)
                        break
                }
                const Mt = T[lt];
                Mt && Mt.connect(xt)
            }
        }
        const X = new U
          , $ = new U;
        function H(W, et, xt) {
            X.setFromMatrixPosition(et.matrixWorld),
            $.setFromMatrixPosition(xt.matrixWorld);
            const lt = X.distanceTo($)
              , Mt = et.projectionMatrix.elements
              , kt = xt.projectionMatrix.elements
              , wt = Mt[14] / (Mt[10] - 1)
              , ie = Mt[14] / (Mt[10] + 1)
              , se = (Mt[9] + 1) / Mt[5]
              , Wt = (Mt[9] - 1) / Mt[5]
              , A = (Mt[8] - 1) / Mt[0]
              , xe = (kt[8] + 1) / kt[0]
              , Xt = wt * A
              , Qt = wt * xe
              , _t = lt / (-A + xe)
              , Ht = _t * -A;
            if (et.matrixWorld.decompose(W.position, W.quaternion, W.scale),
            W.translateX(Ht),
            W.translateZ(_t),
            W.matrixWorld.compose(W.position, W.quaternion, W.scale),
            W.matrixWorldInverse.copy(W.matrixWorld).invert(),
            Mt[10] === -1)
                W.projectionMatrix.copy(et.projectionMatrix),
                W.projectionMatrixInverse.copy(et.projectionMatrixInverse);
            else {
                const yt = wt + _t
                  , Nt = ie + _t
                  , he = Xt - Ht
                  , y = Qt + (lt - Ht)
                  , _ = se * ie / Nt * yt
                  , F = Wt * ie / Nt * yt;
                W.projectionMatrix.makePerspective(he, y, _, F, yt, Nt),
                W.projectionMatrixInverse.copy(W.projectionMatrix).invert()
            }
        }
        function ot(W, et) {
            et === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(et.matrixWorld, W.matrix),
            W.matrixWorldInverse.copy(W.matrixWorld).invert()
        }
        this.updateCamera = function(W) {
            if (s === null)
                return;
            let et = W.near
              , xt = W.far;
            x.texture !== null && (x.depthNear > 0 && (et = x.depthNear),
            x.depthFar > 0 && (xt = x.depthFar)),
            M.near = N.near = w.near = et,
            M.far = N.far = w.far = xt,
            (P !== M.near || k !== M.far) && (s.updateRenderState({
                depthNear: M.near,
                depthFar: M.far
            }),
            P = M.near,
            k = M.far),
            w.layers.mask = W.layers.mask | 2,
            N.layers.mask = W.layers.mask | 4,
            M.layers.mask = w.layers.mask | N.layers.mask;
            const lt = W.parent
              , Mt = M.cameras;
            ot(M, lt);
            for (let kt = 0; kt < Mt.length; kt++)
                ot(Mt[kt], lt);
            Mt.length === 2 ? H(M, w, N) : M.projectionMatrix.copy(w.projectionMatrix),
            ut(W, M, lt)
        }
        ;
        function ut(W, et, xt) {
            xt === null ? W.matrix.copy(et.matrixWorld) : (W.matrix.copy(xt.matrixWorld),
            W.matrix.invert(),
            W.matrix.multiply(et.matrixWorld)),
            W.matrix.decompose(W.position, W.quaternion, W.scale),
            W.updateMatrixWorld(!0),
            W.projectionMatrix.copy(et.projectionMatrix),
            W.projectionMatrixInverse.copy(et.projectionMatrixInverse),
            W.isPerspectiveCamera && (W.fov = _a * 2 * Math.atan(1 / W.projectionMatrix.elements[5]),
            W.zoom = 1)
        }
        this.getCamera = function() {
            return M
        }
        ,
        this.getFoveation = function() {
            if (!(f === null && m === null))
                return l
        }
        ,
        this.setFoveation = function(W) {
            l = W,
            f !== null && (f.fixedFoveation = W),
            m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W)
        }
        ,
        this.hasDepthSensing = function() {
            return x.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return x.getMesh(M)
        }
        ;
        let St = null;
        function Ot(W, et) {
            if (u = et.getViewerPose(c || a),
            g = et,
            u !== null) {
                const xt = u.views;
                m !== null && (t.setRenderTargetFramebuffer(b, m.framebuffer),
                t.setRenderTarget(b));
                let lt = !1;
                xt.length !== M.cameras.length && (M.cameras.length = 0,
                lt = !0);
                for (let wt = 0; wt < xt.length; wt++) {
                    const ie = xt[wt];
                    let se = null;
                    if (m !== null)
                        se = m.getViewport(ie);
                    else {
                        const A = h.getViewSubImage(f, ie);
                        se = A.viewport,
                        wt === 0 && (t.setRenderTargetTextures(b, A.colorTexture, A.depthStencilTexture),
                        t.setRenderTarget(b))
                    }
                    let Wt = E[wt];
                    Wt === void 0 && (Wt = new ze,
                    Wt.layers.enable(wt),
                    Wt.viewport = new le,
                    E[wt] = Wt),
                    Wt.matrix.fromArray(ie.transform.matrix),
                    Wt.matrix.decompose(Wt.position, Wt.quaternion, Wt.scale),
                    Wt.projectionMatrix.fromArray(ie.projectionMatrix),
                    Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),
                    Wt.viewport.set(se.x, se.y, se.width, se.height),
                    wt === 0 && (M.matrix.copy(Wt.matrix),
                    M.matrix.decompose(M.position, M.quaternion, M.scale)),
                    lt === !0 && M.cameras.push(Wt)
                }
                const Mt = s.enabledFeatures;
                if (Mt && Mt.includes("depth-sensing") && s.depthUsage == "gpu-optimized" && h) {
                    const wt = h.getDepthInformation(xt[0]);
                    wt && wt.isValid && wt.texture && x.init(t, wt, s.renderState)
                }
            }
            for (let xt = 0; xt < T.length; xt++) {
                const lt = S[xt]
                  , Mt = T[xt];
                lt !== null && Mt !== void 0 && Mt.update(lt, et, c || a)
            }
            St && St(W, et),
            et.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: et
            }),
            g = null
        }
        const Zt = new Al;
        Zt.setAnimationLoop(Ot),
        this.setAnimationLoop = function(W) {
            St = W
        }
        ,
        this.dispose = function() {}
    }
}
const Hn = new Ke
  , pm = new ae;
function mm(i, t) {
    function e(p, d) {
        p.matrixAutoUpdate === !0 && p.updateMatrix(),
        d.value.copy(p.matrix)
    }
    function n(p, d) {
        d.color.getRGB(p.fogColor.value, Ml(i)),
        d.isFog ? (p.fogNear.value = d.near,
        p.fogFar.value = d.far) : d.isFogExp2 && (p.fogDensity.value = d.density)
    }
    function s(p, d, b, T, S) {
        d.isMeshBasicMaterial || d.isMeshLambertMaterial ? r(p, d) : d.isMeshToonMaterial ? (r(p, d),
        h(p, d)) : d.isMeshPhongMaterial ? (r(p, d),
        u(p, d)) : d.isMeshStandardMaterial ? (r(p, d),
        f(p, d),
        d.isMeshPhysicalMaterial && m(p, d, S)) : d.isMeshMatcapMaterial ? (r(p, d),
        g(p, d)) : d.isMeshDepthMaterial ? r(p, d) : d.isMeshDistanceMaterial ? (r(p, d),
        x(p, d)) : d.isMeshNormalMaterial ? r(p, d) : d.isLineBasicMaterial ? (a(p, d),
        d.isLineDashedMaterial && o(p, d)) : d.isPointsMaterial ? l(p, d, b, T) : d.isSpriteMaterial ? c(p, d) : d.isShadowMaterial ? (p.color.value.copy(d.color),
        p.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1)
    }
    function r(p, d) {
        p.opacity.value = d.opacity,
        d.color && p.diffuse.value.copy(d.color),
        d.emissive && p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
        d.map && (p.map.value = d.map,
        e(d.map, p.mapTransform)),
        d.alphaMap && (p.alphaMap.value = d.alphaMap,
        e(d.alphaMap, p.alphaMapTransform)),
        d.bumpMap && (p.bumpMap.value = d.bumpMap,
        e(d.bumpMap, p.bumpMapTransform),
        p.bumpScale.value = d.bumpScale,
        d.side === Pe && (p.bumpScale.value *= -1)),
        d.normalMap && (p.normalMap.value = d.normalMap,
        e(d.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(d.normalScale),
        d.side === Pe && p.normalScale.value.negate()),
        d.displacementMap && (p.displacementMap.value = d.displacementMap,
        e(d.displacementMap, p.displacementMapTransform),
        p.displacementScale.value = d.displacementScale,
        p.displacementBias.value = d.displacementBias),
        d.emissiveMap && (p.emissiveMap.value = d.emissiveMap,
        e(d.emissiveMap, p.emissiveMapTransform)),
        d.specularMap && (p.specularMap.value = d.specularMap,
        e(d.specularMap, p.specularMapTransform)),
        d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest);
        const b = t.get(d)
          , T = b.envMap
          , S = b.envMapRotation;
        T && (p.envMap.value = T,
        Hn.copy(S),
        Hn.x *= -1,
        Hn.y *= -1,
        Hn.z *= -1,
        T.isCubeTexture && T.isRenderTargetTexture === !1 && (Hn.y *= -1,
        Hn.z *= -1),
        p.envMapRotation.value.setFromMatrix4(pm.makeRotationFromEuler(Hn)),
        p.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === !1 ? -1 : 1,
        p.reflectivity.value = d.reflectivity,
        p.ior.value = d.ior,
        p.refractionRatio.value = d.refractionRatio),
        d.lightMap && (p.lightMap.value = d.lightMap,
        p.lightMapIntensity.value = d.lightMapIntensity,
        e(d.lightMap, p.lightMapTransform)),
        d.aoMap && (p.aoMap.value = d.aoMap,
        p.aoMapIntensity.value = d.aoMapIntensity,
        e(d.aoMap, p.aoMapTransform))
    }
    function a(p, d) {
        p.diffuse.value.copy(d.color),
        p.opacity.value = d.opacity,
        d.map && (p.map.value = d.map,
        e(d.map, p.mapTransform))
    }
    function o(p, d) {
        p.dashSize.value = d.dashSize,
        p.totalSize.value = d.dashSize + d.gapSize,
        p.scale.value = d.scale
    }
    function l(p, d, b, T) {
        p.diffuse.value.copy(d.color),
        p.opacity.value = d.opacity,
        p.size.value = d.size * b,
        p.scale.value = T * .5,
        d.map && (p.map.value = d.map,
        e(d.map, p.uvTransform)),
        d.alphaMap && (p.alphaMap.value = d.alphaMap,
        e(d.alphaMap, p.alphaMapTransform)),
        d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest)
    }
    function c(p, d) {
        p.diffuse.value.copy(d.color),
        p.opacity.value = d.opacity,
        p.rotation.value = d.rotation,
        d.map && (p.map.value = d.map,
        e(d.map, p.mapTransform)),
        d.alphaMap && (p.alphaMap.value = d.alphaMap,
        e(d.alphaMap, p.alphaMapTransform)),
        d.alphaTest > 0 && (p.alphaTest.value = d.alphaTest)
    }
    function u(p, d) {
        p.specular.value.copy(d.specular),
        p.shininess.value = Math.max(d.shininess, 1e-4)
    }
    function h(p, d) {
        d.gradientMap && (p.gradientMap.value = d.gradientMap)
    }
    function f(p, d) {
        p.metalness.value = d.metalness,
        d.metalnessMap && (p.metalnessMap.value = d.metalnessMap,
        e(d.metalnessMap, p.metalnessMapTransform)),
        p.roughness.value = d.roughness,
        d.roughnessMap && (p.roughnessMap.value = d.roughnessMap,
        e(d.roughnessMap, p.roughnessMapTransform)),
        d.envMap && (p.envMapIntensity.value = d.envMapIntensity)
    }
    function m(p, d, b) {
        p.ior.value = d.ior,
        d.sheen > 0 && (p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        p.sheenRoughness.value = d.sheenRoughness,
        d.sheenColorMap && (p.sheenColorMap.value = d.sheenColorMap,
        e(d.sheenColorMap, p.sheenColorMapTransform)),
        d.sheenRoughnessMap && (p.sheenRoughnessMap.value = d.sheenRoughnessMap,
        e(d.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
        d.clearcoat > 0 && (p.clearcoat.value = d.clearcoat,
        p.clearcoatRoughness.value = d.clearcoatRoughness,
        d.clearcoatMap && (p.clearcoatMap.value = d.clearcoatMap,
        e(d.clearcoatMap, p.clearcoatMapTransform)),
        d.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap,
        e(d.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap && (p.clearcoatNormalMap.value = d.clearcoatNormalMap,
        e(d.clearcoatNormalMap, p.clearcoatNormalMapTransform),
        p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
        d.side === Pe && p.clearcoatNormalScale.value.negate())),
        d.dispersion > 0 && (p.dispersion.value = d.dispersion),
        d.iridescence > 0 && (p.iridescence.value = d.iridescence,
        p.iridescenceIOR.value = d.iridescenceIOR,
        p.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0],
        p.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1],
        d.iridescenceMap && (p.iridescenceMap.value = d.iridescenceMap,
        e(d.iridescenceMap, p.iridescenceMapTransform)),
        d.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = d.iridescenceThicknessMap,
        e(d.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
        d.transmission > 0 && (p.transmission.value = d.transmission,
        p.transmissionSamplerMap.value = b.texture,
        p.transmissionSamplerSize.value.set(b.width, b.height),
        d.transmissionMap && (p.transmissionMap.value = d.transmissionMap,
        e(d.transmissionMap, p.transmissionMapTransform)),
        p.thickness.value = d.thickness,
        d.thicknessMap && (p.thicknessMap.value = d.thicknessMap,
        e(d.thicknessMap, p.thicknessMapTransform)),
        p.attenuationDistance.value = d.attenuationDistance,
        p.attenuationColor.value.copy(d.attenuationColor)),
        d.anisotropy > 0 && (p.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)),
        d.anisotropyMap && (p.anisotropyMap.value = d.anisotropyMap,
        e(d.anisotropyMap, p.anisotropyMapTransform))),
        p.specularIntensity.value = d.specularIntensity,
        p.specularColor.value.copy(d.specularColor),
        d.specularColorMap && (p.specularColorMap.value = d.specularColorMap,
        e(d.specularColorMap, p.specularColorMapTransform)),
        d.specularIntensityMap && (p.specularIntensityMap.value = d.specularIntensityMap,
        e(d.specularIntensityMap, p.specularIntensityMapTransform))
    }
    function g(p, d) {
        d.matcap && (p.matcap.value = d.matcap)
    }
    function x(p, d) {
        const b = t.get(d).light;
        p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),
        p.nearDistance.value = b.shadow.camera.near,
        p.farDistance.value = b.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: s
    }
}
function _m(i, t, e, n) {
    let s = {}
      , r = {}
      , a = [];
    const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(b, T) {
        const S = T.program;
        n.uniformBlockBinding(b, S)
    }
    function c(b, T) {
        let S = s[b.id];
        S === void 0 && (g(b),
        S = u(b),
        s[b.id] = S,
        b.addEventListener("dispose", p));
        const I = T.program;
        n.updateUBOMapping(b, I);
        const R = t.render.frame;
        r[b.id] !== R && (f(b),
        r[b.id] = R)
    }
    function u(b) {
        const T = h();
        b.__bindingPointIndex = T;
        const S = i.createBuffer()
          , I = b.__size
          , R = b.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, S),
        i.bufferData(i.UNIFORM_BUFFER, I, R),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, T, S),
        S
    }
    function h() {
        for (let b = 0; b < o; b++)
            if (a.indexOf(b) === -1)
                return a.push(b),
                b;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function f(b) {
        const T = s[b.id]
          , S = b.uniforms
          , I = b.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, T);
        for (let R = 0, w = S.length; R < w; R++) {
            const N = Array.isArray(S[R]) ? S[R] : [S[R]];
            for (let E = 0, M = N.length; E < M; E++) {
                const P = N[E];
                if (m(P, R, E, I) === !0) {
                    const k = P.__offset
                      , z = Array.isArray(P.value) ? P.value : [P.value];
                    let j = 0;
                    for (let K = 0; K < z.length; K++) {
                        const X = z[K]
                          , $ = x(X);
                        typeof X == "number" || typeof X == "boolean" ? (P.__data[0] = X,
                        i.bufferSubData(i.UNIFORM_BUFFER, k + j, P.__data)) : X.isMatrix3 ? (P.__data[0] = X.elements[0],
                        P.__data[1] = X.elements[1],
                        P.__data[2] = X.elements[2],
                        P.__data[3] = 0,
                        P.__data[4] = X.elements[3],
                        P.__data[5] = X.elements[4],
                        P.__data[6] = X.elements[5],
                        P.__data[7] = 0,
                        P.__data[8] = X.elements[6],
                        P.__data[9] = X.elements[7],
                        P.__data[10] = X.elements[8],
                        P.__data[11] = 0) : (X.toArray(P.__data, j),
                        j += $.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, k, P.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function m(b, T, S, I) {
        const R = b.value
          , w = T + "_" + S;
        if (I[w] === void 0)
            return typeof R == "number" || typeof R == "boolean" ? I[w] = R : I[w] = R.clone(),
            !0;
        {
            const N = I[w];
            if (typeof R == "number" || typeof R == "boolean") {
                if (N !== R)
                    return I[w] = R,
                    !0
            } else if (N.equals(R) === !1)
                return N.copy(R),
                !0
        }
        return !1
    }
    function g(b) {
        const T = b.uniforms;
        let S = 0;
        const I = 16;
        for (let w = 0, N = T.length; w < N; w++) {
            const E = Array.isArray(T[w]) ? T[w] : [T[w]];
            for (let M = 0, P = E.length; M < P; M++) {
                const k = E[M]
                  , z = Array.isArray(k.value) ? k.value : [k.value];
                for (let j = 0, K = z.length; j < K; j++) {
                    const X = z[j]
                      , $ = x(X)
                      , H = S % I
                      , ot = H % $.boundary
                      , ut = H + ot;
                    S += ot,
                    ut !== 0 && I - ut < $.storage && (S += I - ut),
                    k.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT),
                    k.__offset = S,
                    S += $.storage
                }
            }
        }
        const R = S % I;
        return R > 0 && (S += I - R),
        b.__size = S,
        b.__cache = {},
        this
    }
    function x(b) {
        const T = {
            boundary: 0,
            storage: 0
        };
        return typeof b == "number" || typeof b == "boolean" ? (T.boundary = 4,
        T.storage = 4) : b.isVector2 ? (T.boundary = 8,
        T.storage = 8) : b.isVector3 || b.isColor ? (T.boundary = 16,
        T.storage = 12) : b.isVector4 ? (T.boundary = 16,
        T.storage = 16) : b.isMatrix3 ? (T.boundary = 48,
        T.storage = 48) : b.isMatrix4 ? (T.boundary = 64,
        T.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b),
        T
    }
    function p(b) {
        const T = b.target;
        T.removeEventListener("dispose", p);
        const S = a.indexOf(T.__bindingPointIndex);
        a.splice(S, 1),
        i.deleteBuffer(s[T.id]),
        delete s[T.id],
        delete r[T.id]
    }
    function d() {
        for (const b in s)
            i.deleteBuffer(s[b]);
        a = [],
        s = {},
        r = {}
    }
    return {
        bind: l,
        update: c,
        dispose: d
    }
}
class gm {
    constructor(t={}) {
        const {canvas: e=Hc(), context: n=null, depth: s=!0, stencil: r=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: l=!0, preserveDrawingBuffer: c=!1, powerPreference: u="default", failIfMajorPerformanceCaveat: h=!1, reverseDepthBuffer: f=!1} = t;
        this.isWebGLRenderer = !0;
        let m;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            m = n.getContextAttributes().alpha
        } else
            m = a;
        const g = new Uint32Array(4)
          , x = new Int32Array(4);
        let p = null
          , d = null;
        const b = []
          , T = [];
        this.domElement = e,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.toneMapping = Cn,
        this.toneMappingExposure = 1,
        this.transmissionResolutionScale = 1;
        const S = this;
        let I = !1;
        this._outputColorSpace = Ce;
        let R = 0
          , w = 0
          , N = null
          , E = -1
          , M = null;
        const P = new le
          , k = new le;
        let z = null;
        const j = new Lt(0);
        let K = 0
          , X = e.width
          , $ = e.height
          , H = 1
          , ot = null
          , ut = null;
        const St = new le(0,0,X,$)
          , Ot = new le(0,0,X,$);
        let Zt = !1;
        const W = new yl;
        let et = !1
          , xt = !1;
        const lt = new ae
          , Mt = new ae
          , kt = new U
          , wt = new le
          , ie = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        let se = !1;
        function Wt() {
            return N === null ? H : 1
        }
        let A = n;
        function xe(v, D) {
            return e.getContext(v, D)
        }
        try {
            const v = {
                alpha: !0,
                depth: s,
                stencil: r,
                antialias: o,
                premultipliedAlpha: l,
                preserveDrawingBuffer: c,
                powerPreference: u,
                failIfMajorPerformanceCaveat: h
            };
            if ("setAttribute"in e && e.setAttribute("data-engine", `three.js r${Ma}`),
            e.addEventListener("webglcontextlost", dt, !1),
            e.addEventListener("webglcontextrestored", Q, !1),
            e.addEventListener("webglcontextcreationerror", q, !1),
            A === null) {
                const D = "webgl2";
                if (A = xe(D, v),
                A === null)
                    throw xe(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (v) {
            throw console.error("THREE.WebGLRenderer: " + v.message),
            v
        }
        let Xt, Qt, _t, Ht, yt, Nt, he, y, _, F, G, Y, V, gt, st, mt, vt, Z, ct, At, bt, nt, Pt, C;
        function rt() {
            Xt = new wf(A),
            Xt.init(),
            nt = new cm(A,Xt),
            Qt = new Mf(A,Xt,t,nt),
            _t = new om(A,Xt),
            Qt.reverseDepthBuffer && f && _t.buffers.depth.setReversed(!0),
            Ht = new Pf(A),
            yt = new jp,
            Nt = new lm(A,Xt,_t,yt,Qt,nt,Ht),
            he = new Ef(S),
            y = new Af(S),
            _ = new Nh(A),
            Pt = new vf(A,_),
            F = new Rf(A,_,Ht,Pt),
            G = new Lf(A,F,_,Ht),
            ct = new Df(A,Qt,Nt),
            mt = new Sf(yt),
            Y = new Yp(S,he,y,Xt,Qt,Pt,mt),
            V = new mm(S,yt),
            gt = new Zp,
            st = new nm(Xt),
            Z = new gf(S,he,y,_t,G,m,l),
            vt = new rm(S,G,Qt),
            C = new _m(A,Ht,Qt,_t),
            At = new xf(A,Xt,Ht),
            bt = new Cf(A,Xt,Ht),
            Ht.programs = Y.programs,
            S.capabilities = Qt,
            S.extensions = Xt,
            S.properties = yt,
            S.renderLists = gt,
            S.shadowMap = vt,
            S.state = _t,
            S.info = Ht
        }
        rt();
        const J = new fm(S,A);
        this.xr = J,
        this.getContext = function() {
            return A
        }
        ,
        this.getContextAttributes = function() {
            return A.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const v = Xt.get("WEBGL_lose_context");
            v && v.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const v = Xt.get("WEBGL_lose_context");
            v && v.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return H
        }
        ,
        this.setPixelRatio = function(v) {
            v !== void 0 && (H = v,
            this.setSize(X, $, !1))
        }
        ,
        this.getSize = function(v) {
            return v.set(X, $)
        }
        ,
        this.setSize = function(v, D, O=!0) {
            if (J.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            X = v,
            $ = D,
            e.width = Math.floor(v * H),
            e.height = Math.floor(D * H),
            O === !0 && (e.style.width = v + "px",
            e.style.height = D + "px"),
            this.setViewport(0, 0, v, D)
        }
        ,
        this.getDrawingBufferSize = function(v) {
            return v.set(X * H, $ * H).floor()
        }
        ,
        this.setDrawingBufferSize = function(v, D, O) {
            X = v,
            $ = D,
            H = O,
            e.width = Math.floor(v * O),
            e.height = Math.floor(D * O),
            this.setViewport(0, 0, v, D)
        }
        ,
        this.getCurrentViewport = function(v) {
            return v.copy(P)
        }
        ,
        this.getViewport = function(v) {
            return v.copy(St)
        }
        ,
        this.setViewport = function(v, D, O, B) {
            v.isVector4 ? St.set(v.x, v.y, v.z, v.w) : St.set(v, D, O, B),
            _t.viewport(P.copy(St).multiplyScalar(H).round())
        }
        ,
        this.getScissor = function(v) {
            return v.copy(Ot)
        }
        ,
        this.setScissor = function(v, D, O, B) {
            v.isVector4 ? Ot.set(v.x, v.y, v.z, v.w) : Ot.set(v, D, O, B),
            _t.scissor(k.copy(Ot).multiplyScalar(H).round())
        }
        ,
        this.getScissorTest = function() {
            return Zt
        }
        ,
        this.setScissorTest = function(v) {
            _t.setScissorTest(Zt = v)
        }
        ,
        this.setOpaqueSort = function(v) {
            ot = v
        }
        ,
        this.setTransparentSort = function(v) {
            ut = v
        }
        ,
        this.getClearColor = function(v) {
            return v.copy(Z.getClearColor())
        }
        ,
        this.setClearColor = function() {
            Z.setClearColor(...arguments)
        }
        ,
        this.getClearAlpha = function() {
            return Z.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            Z.setClearAlpha(...arguments)
        }
        ,
        this.clear = function(v=!0, D=!0, O=!0) {
            let B = 0;
            if (v) {
                let L = !1;
                if (N !== null) {
                    const tt = N.texture.format;
                    L = tt === wa || tt === Aa || tt === ba
                }
                if (L) {
                    const tt = N.texture.type
                      , at = tt === xn || tt === Yn || tt === Hi || tt === Vi || tt === ya || tt === Ta
                      , pt = Z.getClearColor()
                      , ht = Z.getClearAlpha()
                      , Rt = pt.r
                      , Ct = pt.g
                      , Et = pt.b;
                    at ? (g[0] = Rt,
                    g[1] = Ct,
                    g[2] = Et,
                    g[3] = ht,
                    A.clearBufferuiv(A.COLOR, 0, g)) : (x[0] = Rt,
                    x[1] = Ct,
                    x[2] = Et,
                    x[3] = ht,
                    A.clearBufferiv(A.COLOR, 0, x))
                } else
                    B |= A.COLOR_BUFFER_BIT
            }
            D && (B |= A.DEPTH_BUFFER_BIT),
            O && (B |= A.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            A.clear(B)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            e.removeEventListener("webglcontextlost", dt, !1),
            e.removeEventListener("webglcontextrestored", Q, !1),
            e.removeEventListener("webglcontextcreationerror", q, !1),
            Z.dispose(),
            gt.dispose(),
            st.dispose(),
            yt.dispose(),
            he.dispose(),
            y.dispose(),
            G.dispose(),
            Pt.dispose(),
            C.dispose(),
            Y.dispose(),
            J.dispose(),
            J.removeEventListener("sessionstart", Fa),
            J.removeEventListener("sessionend", Oa),
            Un.stop()
        }
        ;
        function dt(v) {
            v.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            I = !0
        }
        function Q() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            I = !1;
            const v = Ht.autoReset
              , D = vt.enabled
              , O = vt.autoUpdate
              , B = vt.needsUpdate
              , L = vt.type;
            rt(),
            Ht.autoReset = v,
            vt.enabled = D,
            vt.autoUpdate = O,
            vt.needsUpdate = B,
            vt.type = L
        }
        function q(v) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage)
        }
        function ft(v) {
            const D = v.target;
            D.removeEventListener("dispose", ft),
            Dt(D)
        }
        function Dt(v) {
            te(v),
            yt.remove(v)
        }
        function te(v) {
            const D = yt.get(v).programs;
            D !== void 0 && (D.forEach(function(O) {
                Y.releaseProgram(O)
            }),
            v.isShaderMaterial && Y.releaseShaderCache(v))
        }
        this.renderBufferDirect = function(v, D, O, B, L, tt) {
            D === null && (D = ie);
            const at = L.isMesh && L.matrixWorld.determinant() < 0
              , pt = Xl(v, D, O, B, L);
            _t.setMaterial(B, at);
            let ht = O.index
              , Rt = 1;
            if (B.wireframe === !0) {
                if (ht = F.getWireframeAttribute(O),
                ht === void 0)
                    return;
                Rt = 2
            }
            const Ct = O.drawRange
              , Et = O.attributes.position;
            let zt = Ct.start * Rt
              , Yt = (Ct.start + Ct.count) * Rt;
            tt !== null && (zt = Math.max(zt, tt.start * Rt),
            Yt = Math.min(Yt, (tt.start + tt.count) * Rt)),
            ht !== null ? (zt = Math.max(zt, 0),
            Yt = Math.min(Yt, ht.count)) : Et != null && (zt = Math.max(zt, 0),
            Yt = Math.min(Yt, Et.count));
            const oe = Yt - zt;
            if (oe < 0 || oe === 1 / 0)
                return;
            Pt.setup(L, B, pt, O, ht);
            let ee, $t = At;
            if (ht !== null && (ee = _.get(ht),
            $t = bt,
            $t.setIndex(ee)),
            L.isMesh)
                B.wireframe === !0 ? (_t.setLineWidth(B.wireframeLinewidth * Wt()),
                $t.setMode(A.LINES)) : $t.setMode(A.TRIANGLES);
            else if (L.isLine) {
                let Tt = B.linewidth;
                Tt === void 0 && (Tt = 1),
                _t.setLineWidth(Tt * Wt()),
                L.isLineSegments ? $t.setMode(A.LINES) : L.isLineLoop ? $t.setMode(A.LINE_LOOP) : $t.setMode(A.LINE_STRIP)
            } else
                L.isPoints ? $t.setMode(A.POINTS) : L.isSprite && $t.setMode(A.TRIANGLES);
            if (L.isBatchedMesh)
                if (L._multiDrawInstances !== null)
                    xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),
                    $t.renderMultiDrawInstances(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount, L._multiDrawInstances);
                else if (Xt.get("WEBGL_multi_draw"))
                    $t.renderMultiDraw(L._multiDrawStarts, L._multiDrawCounts, L._multiDrawCount);
                else {
                    const Tt = L._multiDrawStarts
                      , re = L._multiDrawCounts
                      , Vt = L._multiDrawCount
                      , De = ht ? _.get(ht).bytesPerElement : 1
                      , ti = yt.get(B).currentProgram.getUniforms();
                    for (let Le = 0; Le < Vt; Le++)
                        ti.setValue(A, "_gl_DrawID", Le),
                        $t.render(Tt[Le] / De, re[Le])
                }
            else if (L.isInstancedMesh)
                $t.renderInstances(zt, oe, L.count);
            else if (O.isInstancedBufferGeometry) {
                const Tt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0
                  , re = Math.min(O.instanceCount, Tt);
                $t.renderInstances(zt, oe, re)
            } else
                $t.render(zt, oe)
        }
        ;
        function qt(v, D, O) {
            v.transparent === !0 && v.side === tn && v.forceSinglePass === !1 ? (v.side = Pe,
            v.needsUpdate = !0,
            Qi(v, D, O),
            v.side = Pn,
            v.needsUpdate = !0,
            Qi(v, D, O),
            v.side = tn) : Qi(v, D, O)
        }
        this.compile = function(v, D, O=null) {
            O === null && (O = v),
            d = st.get(O),
            d.init(D),
            T.push(d),
            O.traverseVisible(function(L) {
                L.isLight && L.layers.test(D.layers) && (d.pushLight(L),
                L.castShadow && d.pushShadow(L))
            }),
            v !== O && v.traverseVisible(function(L) {
                L.isLight && L.layers.test(D.layers) && (d.pushLight(L),
                L.castShadow && d.pushShadow(L))
            }),
            d.setupLights();
            const B = new Set;
            return v.traverse(function(L) {
                if (!(L.isMesh || L.isPoints || L.isLine || L.isSprite))
                    return;
                const tt = L.material;
                if (tt)
                    if (Array.isArray(tt))
                        for (let at = 0; at < tt.length; at++) {
                            const pt = tt[at];
                            qt(pt, O, L),
                            B.add(pt)
                        }
                    else
                        qt(tt, O, L),
                        B.add(tt)
            }),
            d = T.pop(),
            B
        }
        ,
        this.compileAsync = function(v, D, O=null) {
            const B = this.compile(v, D, O);
            return new Promise(L => {
                function tt() {
                    if (B.forEach(function(at) {
                        yt.get(at).currentProgram.isReady() && B.delete(at)
                    }),
                    B.size === 0) {
                        L(v);
                        return
                    }
                    setTimeout(tt, 10)
                }
                Xt.get("KHR_parallel_shader_compile") !== null ? tt() : setTimeout(tt, 10)
            }
            )
        }
        ;
        let Ge = null;
        function an(v) {
            Ge && Ge(v)
        }
        function Fa() {
            Un.stop()
        }
        function Oa() {
            Un.start()
        }
        const Un = new Al;
        Un.setAnimationLoop(an),
        typeof self < "u" && Un.setContext(self),
        this.setAnimationLoop = function(v) {
            Ge = v,
            J.setAnimationLoop(v),
            v === null ? Un.stop() : Un.start()
        }
        ,
        J.addEventListener("sessionstart", Fa),
        J.addEventListener("sessionend", Oa),
        this.render = function(v, D) {
            if (D !== void 0 && D.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (I === !0)
                return;
            if (v.matrixWorldAutoUpdate === !0 && v.updateMatrixWorld(),
            D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(),
            J.enabled === !0 && J.isPresenting === !0 && (J.cameraAutoUpdate === !0 && J.updateCamera(D),
            D = J.getCamera()),
            v.isScene === !0 && v.onBeforeRender(S, v, D, N),
            d = st.get(v, T.length),
            d.init(D),
            T.push(d),
            Mt.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
            W.setFromProjectionMatrix(Mt),
            xt = this.localClippingEnabled,
            et = mt.init(this.clippingPlanes, xt),
            p = gt.get(v, b.length),
            p.init(),
            b.push(p),
            J.enabled === !0 && J.isPresenting === !0) {
                const tt = S.xr.getDepthSensingMesh();
                tt !== null && Ys(tt, D, -1 / 0, S.sortObjects)
            }
            Ys(v, D, 0, S.sortObjects),
            p.finish(),
            S.sortObjects === !0 && p.sort(ot, ut),
            se = J.enabled === !1 || J.isPresenting === !1 || J.hasDepthSensing() === !1,
            se && Z.addToRenderList(p, v),
            this.info.render.frame++,
            et === !0 && mt.beginShadows();
            const O = d.state.shadowsArray;
            vt.render(O, v, D),
            et === !0 && mt.endShadows(),
            this.info.autoReset === !0 && this.info.reset();
            const B = p.opaque
              , L = p.transmissive;
            if (d.setupLights(),
            D.isArrayCamera) {
                const tt = D.cameras;
                if (L.length > 0)
                    for (let at = 0, pt = tt.length; at < pt; at++) {
                        const ht = tt[at];
                        za(B, L, v, ht)
                    }
                se && Z.render(v);
                for (let at = 0, pt = tt.length; at < pt; at++) {
                    const ht = tt[at];
                    Ba(p, v, ht, ht.viewport)
                }
            } else
                L.length > 0 && za(B, L, v, D),
                se && Z.render(v),
                Ba(p, v, D);
            N !== null && w === 0 && (Nt.updateMultisampleRenderTarget(N),
            Nt.updateRenderTargetMipmap(N)),
            v.isScene === !0 && v.onAfterRender(S, v, D),
            Pt.resetDefaultState(),
            E = -1,
            M = null,
            T.pop(),
            T.length > 0 ? (d = T[T.length - 1],
            et === !0 && mt.setGlobalState(S.clippingPlanes, d.state.camera)) : d = null,
            b.pop(),
            b.length > 0 ? p = b[b.length - 1] : p = null
        }
        ;
        function Ys(v, D, O, B) {
            if (v.visible === !1)
                return;
            if (v.layers.test(D.layers)) {
                if (v.isGroup)
                    O = v.renderOrder;
                else if (v.isLOD)
                    v.autoUpdate === !0 && v.update(D);
                else if (v.isLight)
                    d.pushLight(v),
                    v.castShadow && d.pushShadow(v);
                else if (v.isSprite) {
                    if (!v.frustumCulled || W.intersectsSprite(v)) {
                        B && wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Mt);
                        const at = G.update(v)
                          , pt = v.material;
                        pt.visible && p.push(v, at, pt, O, wt.z, null)
                    }
                } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || W.intersectsObject(v))) {
                    const at = G.update(v)
                      , pt = v.material;
                    if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(),
                    wt.copy(v.boundingSphere.center)) : (at.boundingSphere === null && at.computeBoundingSphere(),
                    wt.copy(at.boundingSphere.center)),
                    wt.applyMatrix4(v.matrixWorld).applyMatrix4(Mt)),
                    Array.isArray(pt)) {
                        const ht = at.groups;
                        for (let Rt = 0, Ct = ht.length; Rt < Ct; Rt++) {
                            const Et = ht[Rt]
                              , zt = pt[Et.materialIndex];
                            zt && zt.visible && p.push(v, at, zt, O, wt.z, Et)
                        }
                    } else
                        pt.visible && p.push(v, at, pt, O, wt.z, null)
                }
            }
            const tt = v.children;
            for (let at = 0, pt = tt.length; at < pt; at++)
                Ys(tt[at], D, O, B)
        }
        function Ba(v, D, O, B) {
            const L = v.opaque
              , tt = v.transmissive
              , at = v.transparent;
            d.setupLightsView(O),
            et === !0 && mt.setGlobalState(S.clippingPlanes, O),
            B && _t.viewport(P.copy(B)),
            L.length > 0 && Ji(L, D, O),
            tt.length > 0 && Ji(tt, D, O),
            at.length > 0 && Ji(at, D, O),
            _t.buffers.depth.setTest(!0),
            _t.buffers.depth.setMask(!0),
            _t.buffers.color.setMask(!0),
            _t.setPolygonOffset(!1)
        }
        function za(v, D, O, B) {
            if ((O.isScene === !0 ? O.overrideMaterial : null) !== null)
                return;
            d.state.transmissionRenderTarget[B.id] === void 0 && (d.state.transmissionRenderTarget[B.id] = new Kn(1,1,{
                generateMipmaps: !0,
                type: Xt.has("EXT_color_buffer_half_float") || Xt.has("EXT_color_buffer_float") ? Xi : xn,
                minFilter: Xn,
                samples: 4,
                stencilBuffer: r,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1,
                colorSpace: Gt.workingColorSpace
            }));
            const tt = d.state.transmissionRenderTarget[B.id]
              , at = B.viewport || P;
            tt.setSize(at.z * S.transmissionResolutionScale, at.w * S.transmissionResolutionScale);
            const pt = S.getRenderTarget()
              , ht = S.getActiveCubeFace()
              , Rt = S.getActiveMipmapLevel();
            S.setRenderTarget(tt),
            S.getClearColor(j),
            K = S.getClearAlpha(),
            K < 1 && S.setClearColor(16777215, .5),
            S.clear(),
            se && Z.render(O);
            const Ct = S.toneMapping;
            S.toneMapping = Cn;
            const Et = B.viewport;
            if (B.viewport !== void 0 && (B.viewport = void 0),
            d.setupLightsView(B),
            et === !0 && mt.setGlobalState(S.clippingPlanes, B),
            Ji(v, O, B),
            Nt.updateMultisampleRenderTarget(tt),
            Nt.updateRenderTargetMipmap(tt),
            Xt.has("WEBGL_multisampled_render_to_texture") === !1) {
                let zt = !1;
                for (let Yt = 0, oe = D.length; Yt < oe; Yt++) {
                    const ee = D[Yt]
                      , $t = ee.object
                      , Tt = ee.geometry
                      , re = ee.material
                      , Vt = ee.group;
                    if (re.side === tn && $t.layers.test(B.layers)) {
                        const De = re.side;
                        re.side = Pe,
                        re.needsUpdate = !0,
                        Ha($t, O, B, Tt, re, Vt),
                        re.side = De,
                        re.needsUpdate = !0,
                        zt = !0
                    }
                }
                zt === !0 && (Nt.updateMultisampleRenderTarget(tt),
                Nt.updateRenderTargetMipmap(tt))
            }
            S.setRenderTarget(pt, ht, Rt),
            S.setClearColor(j, K),
            Et !== void 0 && (B.viewport = Et),
            S.toneMapping = Ct
        }
        function Ji(v, D, O) {
            const B = D.isScene === !0 ? D.overrideMaterial : null;
            for (let L = 0, tt = v.length; L < tt; L++) {
                const at = v[L]
                  , pt = at.object
                  , ht = at.geometry
                  , Rt = at.group;
                let Ct = at.material;
                Ct.allowOverride === !0 && B !== null && (Ct = B),
                pt.layers.test(O.layers) && Ha(pt, D, O, ht, Ct, Rt)
            }
        }
        function Ha(v, D, O, B, L, tt) {
            v.onBeforeRender(S, D, O, B, L, tt),
            v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld),
            v.normalMatrix.getNormalMatrix(v.modelViewMatrix),
            L.onBeforeRender(S, D, O, B, v, tt),
            L.transparent === !0 && L.side === tn && L.forceSinglePass === !1 ? (L.side = Pe,
            L.needsUpdate = !0,
            S.renderBufferDirect(O, D, B, L, v, tt),
            L.side = Pn,
            L.needsUpdate = !0,
            S.renderBufferDirect(O, D, B, L, v, tt),
            L.side = tn) : S.renderBufferDirect(O, D, B, L, v, tt),
            v.onAfterRender(S, D, O, B, L, tt)
        }
        function Qi(v, D, O) {
            D.isScene !== !0 && (D = ie);
            const B = yt.get(v)
              , L = d.state.lights
              , tt = d.state.shadowsArray
              , at = L.state.version
              , pt = Y.getParameters(v, L.state, tt, D, O)
              , ht = Y.getProgramCacheKey(pt);
            let Rt = B.programs;
            B.environment = v.isMeshStandardMaterial ? D.environment : null,
            B.fog = D.fog,
            B.envMap = (v.isMeshStandardMaterial ? y : he).get(v.envMap || B.environment),
            B.envMapRotation = B.environment !== null && v.envMap === null ? D.environmentRotation : v.envMapRotation,
            Rt === void 0 && (v.addEventListener("dispose", ft),
            Rt = new Map,
            B.programs = Rt);
            let Ct = Rt.get(ht);
            if (Ct !== void 0) {
                if (B.currentProgram === Ct && B.lightsStateVersion === at)
                    return Ga(v, pt),
                    Ct
            } else
                pt.uniforms = Y.getUniforms(v),
                v.onBeforeCompile(pt, S),
                Ct = Y.acquireProgram(pt, ht),
                Rt.set(ht, Ct),
                B.uniforms = pt.uniforms;
            const Et = B.uniforms;
            return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === !0) && (Et.clippingPlanes = mt.uniform),
            Ga(v, pt),
            B.needsLights = Yl(v),
            B.lightsStateVersion = at,
            B.needsLights && (Et.ambientLightColor.value = L.state.ambient,
            Et.lightProbe.value = L.state.probe,
            Et.directionalLights.value = L.state.directional,
            Et.directionalLightShadows.value = L.state.directionalShadow,
            Et.spotLights.value = L.state.spot,
            Et.spotLightShadows.value = L.state.spotShadow,
            Et.rectAreaLights.value = L.state.rectArea,
            Et.ltc_1.value = L.state.rectAreaLTC1,
            Et.ltc_2.value = L.state.rectAreaLTC2,
            Et.pointLights.value = L.state.point,
            Et.pointLightShadows.value = L.state.pointShadow,
            Et.hemisphereLights.value = L.state.hemi,
            Et.directionalShadowMap.value = L.state.directionalShadowMap,
            Et.directionalShadowMatrix.value = L.state.directionalShadowMatrix,
            Et.spotShadowMap.value = L.state.spotShadowMap,
            Et.spotLightMatrix.value = L.state.spotLightMatrix,
            Et.spotLightMap.value = L.state.spotLightMap,
            Et.pointShadowMap.value = L.state.pointShadowMap,
            Et.pointShadowMatrix.value = L.state.pointShadowMatrix),
            B.currentProgram = Ct,
            B.uniformsList = null,
            Ct
        }
        function Va(v) {
            if (v.uniformsList === null) {
                const D = v.currentProgram.getUniforms();
                v.uniformsList = Is.seqWithValue(D.seq, v.uniforms)
            }
            return v.uniformsList
        }
        function Ga(v, D) {
            const O = yt.get(v);
            O.outputColorSpace = D.outputColorSpace,
            O.batching = D.batching,
            O.batchingColor = D.batchingColor,
            O.instancing = D.instancing,
            O.instancingColor = D.instancingColor,
            O.instancingMorph = D.instancingMorph,
            O.skinning = D.skinning,
            O.morphTargets = D.morphTargets,
            O.morphNormals = D.morphNormals,
            O.morphColors = D.morphColors,
            O.morphTargetsCount = D.morphTargetsCount,
            O.numClippingPlanes = D.numClippingPlanes,
            O.numIntersection = D.numClipIntersection,
            O.vertexAlphas = D.vertexAlphas,
            O.vertexTangents = D.vertexTangents,
            O.toneMapping = D.toneMapping
        }
        function Xl(v, D, O, B, L) {
            D.isScene !== !0 && (D = ie),
            Nt.resetTextureUnits();
            const tt = D.fog
              , at = B.isMeshStandardMaterial ? D.environment : null
              , pt = N === null ? S.outputColorSpace : N.isXRRenderTarget === !0 ? N.texture.colorSpace : bi
              , ht = (B.isMeshStandardMaterial ? y : he).get(B.envMap || at)
              , Rt = B.vertexColors === !0 && !!O.attributes.color && O.attributes.color.itemSize === 4
              , Ct = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0)
              , Et = !!O.morphAttributes.position
              , zt = !!O.morphAttributes.normal
              , Yt = !!O.morphAttributes.color;
            let oe = Cn;
            B.toneMapped && (N === null || N.isXRRenderTarget === !0) && (oe = S.toneMapping);
            const ee = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color
              , $t = ee !== void 0 ? ee.length : 0
              , Tt = yt.get(B)
              , re = d.state.lights;
            if (et === !0 && (xt === !0 || v !== M)) {
                const Me = v === M && B.id === E;
                mt.setState(B, v, Me)
            }
            let Vt = !1;
            B.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== re.state.version || Tt.outputColorSpace !== pt || L.isBatchedMesh && Tt.batching === !1 || !L.isBatchedMesh && Tt.batching === !0 || L.isBatchedMesh && Tt.batchingColor === !0 && L.colorTexture === null || L.isBatchedMesh && Tt.batchingColor === !1 && L.colorTexture !== null || L.isInstancedMesh && Tt.instancing === !1 || !L.isInstancedMesh && Tt.instancing === !0 || L.isSkinnedMesh && Tt.skinning === !1 || !L.isSkinnedMesh && Tt.skinning === !0 || L.isInstancedMesh && Tt.instancingColor === !0 && L.instanceColor === null || L.isInstancedMesh && Tt.instancingColor === !1 && L.instanceColor !== null || L.isInstancedMesh && Tt.instancingMorph === !0 && L.morphTexture === null || L.isInstancedMesh && Tt.instancingMorph === !1 && L.morphTexture !== null || Tt.envMap !== ht || B.fog === !0 && Tt.fog !== tt || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== mt.numPlanes || Tt.numIntersection !== mt.numIntersection) || Tt.vertexAlphas !== Rt || Tt.vertexTangents !== Ct || Tt.morphTargets !== Et || Tt.morphNormals !== zt || Tt.morphColors !== Yt || Tt.toneMapping !== oe || Tt.morphTargetsCount !== $t) && (Vt = !0) : (Vt = !0,
            Tt.__version = B.version);
            let De = Tt.currentProgram;
            Vt === !0 && (De = Qi(B, D, L));
            let ti = !1
              , Le = !1
              , Ri = !1;
            const ne = De.getUniforms()
              , Ne = Tt.uniforms;
            if (_t.useProgram(De.program) && (ti = !0,
            Le = !0,
            Ri = !0),
            B.id !== E && (E = B.id,
            Le = !0),
            ti || M !== v) {
                _t.buffers.depth.getReversed() ? (lt.copy(v.projectionMatrix),
                Gc(lt),
                kc(lt),
                ne.setValue(A, "projectionMatrix", lt)) : ne.setValue(A, "projectionMatrix", v.projectionMatrix),
                ne.setValue(A, "viewMatrix", v.matrixWorldInverse);
                const be = ne.map.cameraPosition;
                be !== void 0 && be.setValue(A, kt.setFromMatrixPosition(v.matrixWorld)),
                Qt.logarithmicDepthBuffer && ne.setValue(A, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)),
                (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && ne.setValue(A, "isOrthographic", v.isOrthographicCamera === !0),
                M !== v && (M = v,
                Le = !0,
                Ri = !0)
            }
            if (L.isSkinnedMesh) {
                ne.setOptional(A, L, "bindMatrix"),
                ne.setOptional(A, L, "bindMatrixInverse");
                const Me = L.skeleton;
                Me && (Me.boneTexture === null && Me.computeBoneTexture(),
                ne.setValue(A, "boneTexture", Me.boneTexture, Nt))
            }
            L.isBatchedMesh && (ne.setOptional(A, L, "batchingTexture"),
            ne.setValue(A, "batchingTexture", L._matricesTexture, Nt),
            ne.setOptional(A, L, "batchingIdTexture"),
            ne.setValue(A, "batchingIdTexture", L._indirectTexture, Nt),
            ne.setOptional(A, L, "batchingColorTexture"),
            L._colorsTexture !== null && ne.setValue(A, "batchingColorTexture", L._colorsTexture, Nt));
            const Fe = O.morphAttributes;
            if ((Fe.position !== void 0 || Fe.normal !== void 0 || Fe.color !== void 0) && ct.update(L, O, De),
            (Le || Tt.receiveShadow !== L.receiveShadow) && (Tt.receiveShadow = L.receiveShadow,
            ne.setValue(A, "receiveShadow", L.receiveShadow)),
            B.isMeshGouraudMaterial && B.envMap !== null && (Ne.envMap.value = ht,
            Ne.flipEnvMap.value = ht.isCubeTexture && ht.isRenderTargetTexture === !1 ? -1 : 1),
            B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (Ne.envMapIntensity.value = D.environmentIntensity),
            Le && (ne.setValue(A, "toneMappingExposure", S.toneMappingExposure),
            Tt.needsLights && ql(Ne, Ri),
            tt && B.fog === !0 && V.refreshFogUniforms(Ne, tt),
            V.refreshMaterialUniforms(Ne, B, H, $, d.state.transmissionRenderTarget[v.id]),
            Is.upload(A, Va(Tt), Ne, Nt)),
            B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (Is.upload(A, Va(Tt), Ne, Nt),
            B.uniformsNeedUpdate = !1),
            B.isSpriteMaterial && ne.setValue(A, "center", L.center),
            ne.setValue(A, "modelViewMatrix", L.modelViewMatrix),
            ne.setValue(A, "normalMatrix", L.normalMatrix),
            ne.setValue(A, "modelMatrix", L.matrixWorld),
            B.isShaderMaterial || B.isRawShaderMaterial) {
                const Me = B.uniformsGroups;
                for (let be = 0, js = Me.length; be < js; be++) {
                    const In = Me[be];
                    C.update(In, De),
                    C.bind(In, De)
                }
            }
            return De
        }
        function ql(v, D) {
            v.ambientLightColor.needsUpdate = D,
            v.lightProbe.needsUpdate = D,
            v.directionalLights.needsUpdate = D,
            v.directionalLightShadows.needsUpdate = D,
            v.pointLights.needsUpdate = D,
            v.pointLightShadows.needsUpdate = D,
            v.spotLights.needsUpdate = D,
            v.spotLightShadows.needsUpdate = D,
            v.rectAreaLights.needsUpdate = D,
            v.hemisphereLights.needsUpdate = D
        }
        function Yl(v) {
            return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === !0
        }
        this.getActiveCubeFace = function() {
            return R
        }
        ,
        this.getActiveMipmapLevel = function() {
            return w
        }
        ,
        this.getRenderTarget = function() {
            return N
        }
        ,
        this.setRenderTargetTextures = function(v, D, O) {
            const B = yt.get(v);
            B.__autoAllocateDepthBuffer = v.resolveDepthBuffer === !1,
            B.__autoAllocateDepthBuffer === !1 && (B.__useRenderToTexture = !1),
            yt.get(v.texture).__webglTexture = D,
            yt.get(v.depthTexture).__webglTexture = B.__autoAllocateDepthBuffer ? void 0 : O,
            B.__hasExternalTextures = !0
        }
        ,
        this.setRenderTargetFramebuffer = function(v, D) {
            const O = yt.get(v);
            O.__webglFramebuffer = D,
            O.__useDefaultFramebuffer = D === void 0
        }
        ;
        const jl = A.createFramebuffer();
        this.setRenderTarget = function(v, D=0, O=0) {
            N = v,
            R = D,
            w = O;
            let B = !0
              , L = null
              , tt = !1
              , at = !1;
            if (v) {
                const ht = yt.get(v);
                if (ht.__useDefaultFramebuffer !== void 0)
                    _t.bindFramebuffer(A.FRAMEBUFFER, null),
                    B = !1;
                else if (ht.__webglFramebuffer === void 0)
                    Nt.setupRenderTarget(v);
                else if (ht.__hasExternalTextures)
                    Nt.rebindTextures(v, yt.get(v.texture).__webglTexture, yt.get(v.depthTexture).__webglTexture);
                else if (v.depthBuffer) {
                    const Et = v.depthTexture;
                    if (ht.__boundDepthTexture !== Et) {
                        if (Et !== null && yt.has(Et) && (v.width !== Et.image.width || v.height !== Et.image.height))
                            throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                        Nt.setupDepthRenderbuffer(v)
                    }
                }
                const Rt = v.texture;
                (Rt.isData3DTexture || Rt.isDataArrayTexture || Rt.isCompressedArrayTexture) && (at = !0);
                const Ct = yt.get(v).__webglFramebuffer;
                v.isWebGLCubeRenderTarget ? (Array.isArray(Ct[D]) ? L = Ct[D][O] : L = Ct[D],
                tt = !0) : v.samples > 0 && Nt.useMultisampledRTT(v) === !1 ? L = yt.get(v).__webglMultisampledFramebuffer : Array.isArray(Ct) ? L = Ct[O] : L = Ct,
                P.copy(v.viewport),
                k.copy(v.scissor),
                z = v.scissorTest
            } else
                P.copy(St).multiplyScalar(H).floor(),
                k.copy(Ot).multiplyScalar(H).floor(),
                z = Zt;
            if (O !== 0 && (L = jl),
            _t.bindFramebuffer(A.FRAMEBUFFER, L) && B && _t.drawBuffers(v, L),
            _t.viewport(P),
            _t.scissor(k),
            _t.setScissorTest(z),
            tt) {
                const ht = yt.get(v.texture);
                A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, ht.__webglTexture, O)
            } else if (at) {
                const ht = yt.get(v.texture)
                  , Rt = D;
                A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ht.__webglTexture, O, Rt)
            } else if (v !== null && O !== 0) {
                const ht = yt.get(v.texture);
                A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, ht.__webglTexture, O)
            }
            E = -1
        }
        ,
        this.readRenderTargetPixels = function(v, D, O, B, L, tt, at, pt=0) {
            if (!(v && v.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let ht = yt.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && at !== void 0 && (ht = ht[at]),
            ht) {
                _t.bindFramebuffer(A.FRAMEBUFFER, ht);
                try {
                    const Rt = v.textures[pt]
                      , Ct = Rt.format
                      , Et = Rt.type;
                    if (!Qt.textureFormatReadable(Ct)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!Qt.textureTypeReadable(Et)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - L && (v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt),
                    A.readPixels(D, O, B, L, nt.convert(Ct), nt.convert(Et), tt))
                } finally {
                    const Rt = N !== null ? yt.get(N).__webglFramebuffer : null;
                    _t.bindFramebuffer(A.FRAMEBUFFER, Rt)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(v, D, O, B, L, tt, at, pt=0) {
            if (!(v && v.isWebGLRenderTarget))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let ht = yt.get(v).__webglFramebuffer;
            if (v.isWebGLCubeRenderTarget && at !== void 0 && (ht = ht[at]),
            ht)
                if (D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - L) {
                    _t.bindFramebuffer(A.FRAMEBUFFER, ht);
                    const Rt = v.textures[pt]
                      , Ct = Rt.format
                      , Et = Rt.type;
                    if (!Qt.textureFormatReadable(Ct))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                    if (!Qt.textureTypeReadable(Et))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                    const zt = A.createBuffer();
                    A.bindBuffer(A.PIXEL_PACK_BUFFER, zt),
                    A.bufferData(A.PIXEL_PACK_BUFFER, tt.byteLength, A.STREAM_READ),
                    v.textures.length > 1 && A.readBuffer(A.COLOR_ATTACHMENT0 + pt),
                    A.readPixels(D, O, B, L, nt.convert(Ct), nt.convert(Et), 0);
                    const Yt = N !== null ? yt.get(N).__webglFramebuffer : null;
                    _t.bindFramebuffer(A.FRAMEBUFFER, Yt);
                    const oe = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return A.flush(),
                    await Vc(A, oe, 4),
                    A.bindBuffer(A.PIXEL_PACK_BUFFER, zt),
                    A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, tt),
                    A.deleteBuffer(zt),
                    A.deleteSync(oe),
                    tt
                } else
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
        }
        ,
        this.copyFramebufferToTexture = function(v, D=null, O=0) {
            const B = Math.pow(2, -O)
              , L = Math.floor(v.image.width * B)
              , tt = Math.floor(v.image.height * B)
              , at = D !== null ? D.x : 0
              , pt = D !== null ? D.y : 0;
            Nt.setTexture2D(v, 0),
            A.copyTexSubImage2D(A.TEXTURE_2D, O, 0, 0, at, pt, L, tt),
            _t.unbindTexture()
        }
        ;
        const Kl = A.createFramebuffer()
          , Zl = A.createFramebuffer();
        this.copyTextureToTexture = function(v, D, O=null, B=null, L=0, tt=null) {
            tt === null && (L !== 0 ? (xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),
            tt = L,
            L = 0) : tt = 0);
            let at, pt, ht, Rt, Ct, Et, zt, Yt, oe;
            const ee = v.isCompressedTexture ? v.mipmaps[tt] : v.image;
            if (O !== null)
                at = O.max.x - O.min.x,
                pt = O.max.y - O.min.y,
                ht = O.isBox3 ? O.max.z - O.min.z : 1,
                Rt = O.min.x,
                Ct = O.min.y,
                Et = O.isBox3 ? O.min.z : 0;
            else {
                const Fe = Math.pow(2, -L);
                at = Math.floor(ee.width * Fe),
                pt = Math.floor(ee.height * Fe),
                v.isDataArrayTexture ? ht = ee.depth : v.isData3DTexture ? ht = Math.floor(ee.depth * Fe) : ht = 1,
                Rt = 0,
                Ct = 0,
                Et = 0
            }
            B !== null ? (zt = B.x,
            Yt = B.y,
            oe = B.z) : (zt = 0,
            Yt = 0,
            oe = 0);
            const $t = nt.convert(D.format)
              , Tt = nt.convert(D.type);
            let re;
            D.isData3DTexture ? (Nt.setTexture3D(D, 0),
            re = A.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (Nt.setTexture2DArray(D, 0),
            re = A.TEXTURE_2D_ARRAY) : (Nt.setTexture2D(D, 0),
            re = A.TEXTURE_2D),
            A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY),
            A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha),
            A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment);
            const Vt = A.getParameter(A.UNPACK_ROW_LENGTH)
              , De = A.getParameter(A.UNPACK_IMAGE_HEIGHT)
              , ti = A.getParameter(A.UNPACK_SKIP_PIXELS)
              , Le = A.getParameter(A.UNPACK_SKIP_ROWS)
              , Ri = A.getParameter(A.UNPACK_SKIP_IMAGES);
            A.pixelStorei(A.UNPACK_ROW_LENGTH, ee.width),
            A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, ee.height),
            A.pixelStorei(A.UNPACK_SKIP_PIXELS, Rt),
            A.pixelStorei(A.UNPACK_SKIP_ROWS, Ct),
            A.pixelStorei(A.UNPACK_SKIP_IMAGES, Et);
            const ne = v.isDataArrayTexture || v.isData3DTexture
              , Ne = D.isDataArrayTexture || D.isData3DTexture;
            if (v.isDepthTexture) {
                const Fe = yt.get(v)
                  , Me = yt.get(D)
                  , be = yt.get(Fe.__renderTarget)
                  , js = yt.get(Me.__renderTarget);
                _t.bindFramebuffer(A.READ_FRAMEBUFFER, be.__webglFramebuffer),
                _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, js.__webglFramebuffer);
                for (let In = 0; In < ht; In++)
                    ne && (A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, yt.get(v).__webglTexture, L, Et + In),
                    A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, yt.get(D).__webglTexture, tt, oe + In)),
                    A.blitFramebuffer(Rt, Ct, at, pt, zt, Yt, at, pt, A.DEPTH_BUFFER_BIT, A.NEAREST);
                _t.bindFramebuffer(A.READ_FRAMEBUFFER, null),
                _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, null)
            } else if (L !== 0 || v.isRenderTargetTexture || yt.has(v)) {
                const Fe = yt.get(v)
                  , Me = yt.get(D);
                _t.bindFramebuffer(A.READ_FRAMEBUFFER, Kl),
                _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, Zl);
                for (let be = 0; be < ht; be++)
                    ne ? A.framebufferTextureLayer(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Fe.__webglTexture, L, Et + be) : A.framebufferTexture2D(A.READ_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Fe.__webglTexture, L),
                    Ne ? A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, Me.__webglTexture, tt, oe + be) : A.framebufferTexture2D(A.DRAW_FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_2D, Me.__webglTexture, tt),
                    L !== 0 ? A.blitFramebuffer(Rt, Ct, at, pt, zt, Yt, at, pt, A.COLOR_BUFFER_BIT, A.NEAREST) : Ne ? A.copyTexSubImage3D(re, tt, zt, Yt, oe + be, Rt, Ct, at, pt) : A.copyTexSubImage2D(re, tt, zt, Yt, Rt, Ct, at, pt);
                _t.bindFramebuffer(A.READ_FRAMEBUFFER, null),
                _t.bindFramebuffer(A.DRAW_FRAMEBUFFER, null)
            } else
                Ne ? v.isDataTexture || v.isData3DTexture ? A.texSubImage3D(re, tt, zt, Yt, oe, at, pt, ht, $t, Tt, ee.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(re, tt, zt, Yt, oe, at, pt, ht, $t, ee.data) : A.texSubImage3D(re, tt, zt, Yt, oe, at, pt, ht, $t, Tt, ee) : v.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, tt, zt, Yt, at, pt, $t, Tt, ee.data) : v.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, tt, zt, Yt, ee.width, ee.height, $t, ee.data) : A.texSubImage2D(A.TEXTURE_2D, tt, zt, Yt, at, pt, $t, Tt, ee);
            A.pixelStorei(A.UNPACK_ROW_LENGTH, Vt),
            A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, De),
            A.pixelStorei(A.UNPACK_SKIP_PIXELS, ti),
            A.pixelStorei(A.UNPACK_SKIP_ROWS, Le),
            A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ri),
            tt === 0 && D.generateMipmaps && A.generateMipmap(re),
            _t.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(v, D, O=null, B=null, L=0) {
            return xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),
            this.copyTextureToTexture(v, D, O, B, L)
        }
        ,
        this.initRenderTarget = function(v) {
            yt.get(v).__webglFramebuffer === void 0 && Nt.setupRenderTarget(v)
        }
        ,
        this.initTexture = function(v) {
            v.isCubeTexture ? Nt.setTextureCube(v, 0) : v.isData3DTexture ? Nt.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? Nt.setTexture2DArray(v, 0) : Nt.setTexture2D(v, 0),
            _t.unbindTexture()
        }
        ,
        this.resetState = function() {
            R = 0,
            w = 0,
            N = null,
            _t.reset(),
            Pt.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return mn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(t) {
        this._outputColorSpace = t;
        const e = this.getContext();
        e.drawingBufferColorSpace = Gt._getDrawingBufferColorSpace(t),
        e.unpackColorSpace = Gt._getUnpackColorSpace()
    }
}
const Ko = {
    type: "change"
}
  , La = {
    type: "start"
}
  , Dl = {
    type: "end"
}
  , bs = new Ki
  , Zo = new An
  , vm = Math.cos(70 * zc.DEG2RAD)
  , ue = new U
  , we = 2 * Math.PI
  , Kt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6
}
  , wr = 1e-6;
class xm extends Uh {
    constructor(t, e=null) {
        super(t, e),
        this.state = Kt.NONE,
        this.target = new U,
        this.cursor = new U,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.minZoom = 0,
        this.maxZoom = 1 / 0,
        this.minTargetRadius = 0,
        this.maxTargetRadius = 1 / 0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.minAzimuthAngle = -1 / 0,
        this.maxAzimuthAngle = 1 / 0,
        this.enableDamping = !1,
        this.dampingFactor = .05,
        this.enableZoom = !0,
        this.zoomSpeed = 1,
        this.enableRotate = !0,
        this.rotateSpeed = 1,
        this.keyRotateSpeed = 1,
        this.enablePan = !0,
        this.panSpeed = 1,
        this.screenSpacePanning = !0,
        this.keyPanSpeed = 7,
        this.zoomToCursor = !1,
        this.autoRotate = !1,
        this.autoRotateSpeed = 2,
        this.keys = {
            LEFT: "ArrowLeft",
            UP: "ArrowUp",
            RIGHT: "ArrowRight",
            BOTTOM: "ArrowDown"
        },
        this.mouseButtons = {
            LEFT: _n.ROTATE,
            MIDDLE: _n.DOLLY,
            RIGHT: _n.PAN
        },
        this.touches = {
            ONE: _i.ROTATE,
            TWO: _i.DOLLY_PAN
        },
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone(),
        this.zoom0 = this.object.zoom,
        this._domElementKeyEvents = null,
        this._lastPosition = new U,
        this._lastQuaternion = new jn,
        this._lastTargetPosition = new U,
        this._quat = new jn().setFromUnitVectors(t.up, new U(0,1,0)),
        this._quatInverse = this._quat.clone().invert(),
        this._spherical = new yo,
        this._sphericalDelta = new yo,
        this._scale = 1,
        this._panOffset = new U,
        this._rotateStart = new Ut,
        this._rotateEnd = new Ut,
        this._rotateDelta = new Ut,
        this._panStart = new Ut,
        this._panEnd = new Ut,
        this._panDelta = new Ut,
        this._dollyStart = new Ut,
        this._dollyEnd = new Ut,
        this._dollyDelta = new Ut,
        this._dollyDirection = new U,
        this._mouse = new Ut,
        this._performCursorZoom = !1,
        this._pointers = [],
        this._pointerPositions = {},
        this._controlActive = !1,
        this._onPointerMove = Sm.bind(this),
        this._onPointerDown = Mm.bind(this),
        this._onPointerUp = Em.bind(this),
        this._onContextMenu = Cm.bind(this),
        this._onMouseWheel = bm.bind(this),
        this._onKeyDown = Am.bind(this),
        this._onTouchStart = wm.bind(this),
        this._onTouchMove = Rm.bind(this),
        this._onMouseDown = ym.bind(this),
        this._onMouseMove = Tm.bind(this),
        this._interceptControlDown = Pm.bind(this),
        this._interceptControlUp = Dm.bind(this),
        this.domElement !== null && this.connect(this.domElement),
        this.update()
    }
    connect(t) {
        super.connect(t),
        this.domElement.addEventListener("pointerdown", this._onPointerDown),
        this.domElement.addEventListener("pointercancel", this._onPointerUp),
        this.domElement.addEventListener("contextmenu", this._onContextMenu),
        this.domElement.addEventListener("wheel", this._onMouseWheel, {
            passive: !1
        }),
        this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
            passive: !0,
            capture: !0
        }),
        this.domElement.style.touchAction = "none"
    }
    disconnect() {
        this.domElement.removeEventListener("pointerdown", this._onPointerDown),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.domElement.removeEventListener("pointercancel", this._onPointerUp),
        this.domElement.removeEventListener("wheel", this._onMouseWheel),
        this.domElement.removeEventListener("contextmenu", this._onContextMenu),
        this.stopListenToKeyEvents(),
        this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, {
            capture: !0
        }),
        this.domElement.style.touchAction = "auto"
    }
    dispose() {
        this.disconnect()
    }
    getPolarAngle() {
        return this._spherical.phi
    }
    getAzimuthalAngle() {
        return this._spherical.theta
    }
    getDistance() {
        return this.object.position.distanceTo(this.target)
    }
    listenToKeyEvents(t) {
        t.addEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = t
    }
    stopListenToKeyEvents() {
        this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown),
        this._domElementKeyEvents = null)
    }
    saveState() {
        this.target0.copy(this.target),
        this.position0.copy(this.object.position),
        this.zoom0 = this.object.zoom
    }
    reset() {
        this.target.copy(this.target0),
        this.object.position.copy(this.position0),
        this.object.zoom = this.zoom0,
        this.object.updateProjectionMatrix(),
        this.dispatchEvent(Ko),
        this.update(),
        this.state = Kt.NONE
    }
    update(t=null) {
        const e = this.object.position;
        ue.copy(e).sub(this.target),
        ue.applyQuaternion(this._quat),
        this._spherical.setFromVector3(ue),
        this.autoRotate && this.state === Kt.NONE && this._rotateLeft(this._getAutoRotationAngle(t)),
        this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor,
        this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta,
        this._spherical.phi += this._sphericalDelta.phi);
        let n = this.minAzimuthAngle
          , s = this.maxAzimuthAngle;
        isFinite(n) && isFinite(s) && (n < -Math.PI ? n += we : n > Math.PI && (n -= we),
        s < -Math.PI ? s += we : s > Math.PI && (s -= we),
        n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)),
        this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)),
        this._spherical.makeSafe(),
        this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset),
        this.target.sub(this.cursor),
        this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
        this.target.add(this.cursor);
        let r = !1;
        if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera)
            this._spherical.radius = this._clampDistance(this._spherical.radius);
        else {
            const a = this._spherical.radius;
            this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale),
            r = a != this._spherical.radius
        }
        if (ue.setFromSpherical(this._spherical),
        ue.applyQuaternion(this._quatInverse),
        e.copy(this.target).add(ue),
        this.object.lookAt(this.target),
        this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor,
        this._sphericalDelta.phi *= 1 - this.dampingFactor,
        this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0),
        this._panOffset.set(0, 0, 0)),
        this.zoomToCursor && this._performCursorZoom) {
            let a = null;
            if (this.object.isPerspectiveCamera) {
                const o = ue.length();
                a = this._clampDistance(o * this._scale);
                const l = o - a;
                this.object.position.addScaledVector(this._dollyDirection, l),
                this.object.updateMatrixWorld(),
                r = !!l
            } else if (this.object.isOrthographicCamera) {
                const o = new U(this._mouse.x,this._mouse.y,0);
                o.unproject(this.object);
                const l = this.object.zoom;
                this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
                this.object.updateProjectionMatrix(),
                r = l !== this.object.zoom;
                const c = new U(this._mouse.x,this._mouse.y,0);
                c.unproject(this.object),
                this.object.position.sub(c).add(o),
                this.object.updateMatrixWorld(),
                a = ue.length()
            } else
                console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),
                this.zoomToCursor = !1;
            a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (bs.origin.copy(this.object.position),
            bs.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(bs.direction)) < vm ? this.object.lookAt(this.target) : (Zo.setFromNormalAndCoplanarPoint(this.object.up, this.target),
            bs.intersectPlane(Zo, this.target))))
        } else if (this.object.isOrthographicCamera) {
            const a = this.object.zoom;
            this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)),
            a !== this.object.zoom && (this.object.updateProjectionMatrix(),
            r = !0)
        }
        return this._scale = 1,
        this._performCursorZoom = !1,
        r || this._lastPosition.distanceToSquared(this.object.position) > wr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > wr || this._lastTargetPosition.distanceToSquared(this.target) > wr ? (this.dispatchEvent(Ko),
        this._lastPosition.copy(this.object.position),
        this._lastQuaternion.copy(this.object.quaternion),
        this._lastTargetPosition.copy(this.target),
        !0) : !1
    }
    _getAutoRotationAngle(t) {
        return t !== null ? we / 60 * this.autoRotateSpeed * t : we / 60 / 60 * this.autoRotateSpeed
    }
    _getZoomScale(t) {
        const e = Math.abs(t * .01);
        return Math.pow(.95, this.zoomSpeed * e)
    }
    _rotateLeft(t) {
        this._sphericalDelta.theta -= t
    }
    _rotateUp(t) {
        this._sphericalDelta.phi -= t
    }
    _panLeft(t, e) {
        ue.setFromMatrixColumn(e, 0),
        ue.multiplyScalar(-t),
        this._panOffset.add(ue)
    }
    _panUp(t, e) {
        this.screenSpacePanning === !0 ? ue.setFromMatrixColumn(e, 1) : (ue.setFromMatrixColumn(e, 0),
        ue.crossVectors(this.object.up, ue)),
        ue.multiplyScalar(t),
        this._panOffset.add(ue)
    }
    _pan(t, e) {
        const n = this.domElement;
        if (this.object.isPerspectiveCamera) {
            const s = this.object.position;
            ue.copy(s).sub(this.target);
            let r = ue.length();
            r *= Math.tan(this.object.fov / 2 * Math.PI / 180),
            this._panLeft(2 * t * r / n.clientHeight, this.object.matrix),
            this._panUp(2 * e * r / n.clientHeight, this.object.matrix)
        } else
            this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix),
            this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),
            this.enablePan = !1)
    }
    _dollyOut(t) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _dollyIn(t) {
        this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),
        this.enableZoom = !1)
    }
    _updateZoomParameters(t, e) {
        if (!this.zoomToCursor)
            return;
        this._performCursorZoom = !0;
        const n = this.domElement.getBoundingClientRect()
          , s = t - n.left
          , r = e - n.top
          , a = n.width
          , o = n.height;
        this._mouse.x = s / a * 2 - 1,
        this._mouse.y = -(r / o) * 2 + 1,
        this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize()
    }
    _clampDistance(t) {
        return Math.max(this.minDistance, Math.min(this.maxDistance, t))
    }
    _handleMouseDownRotate(t) {
        this._rotateStart.set(t.clientX, t.clientY)
    }
    _handleMouseDownDolly(t) {
        this._updateZoomParameters(t.clientX, t.clientX),
        this._dollyStart.set(t.clientX, t.clientY)
    }
    _handleMouseDownPan(t) {
        this._panStart.set(t.clientX, t.clientY)
    }
    _handleMouseMoveRotate(t) {
        this._rotateEnd.set(t.clientX, t.clientY),
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const e = this.domElement;
        this._rotateLeft(we * this._rotateDelta.x / e.clientHeight),
        this._rotateUp(we * this._rotateDelta.y / e.clientHeight),
        this._rotateStart.copy(this._rotateEnd),
        this.update()
    }
    _handleMouseMoveDolly(t) {
        this._dollyEnd.set(t.clientX, t.clientY),
        this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
        this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
        this._dollyStart.copy(this._dollyEnd),
        this.update()
    }
    _handleMouseMovePan(t) {
        this._panEnd.set(t.clientX, t.clientY),
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd),
        this.update()
    }
    _handleMouseWheel(t) {
        this._updateZoomParameters(t.clientX, t.clientY),
        t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)),
        this.update()
    }
    _handleKeyDown(t) {
        let e = !1;
        switch (t.code) {
        case this.keys.UP:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed),
            e = !0;
            break;
        case this.keys.BOTTOM:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateUp(-we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed),
            e = !0;
            break;
        case this.keys.LEFT:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0),
            e = !0;
            break;
        case this.keys.RIGHT:
            t.ctrlKey || t.metaKey || t.shiftKey ? this.enableRotate && this._rotateLeft(-we * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0),
            e = !0;
            break
        }
        e && (t.preventDefault(),
        this.update())
    }
    _handleTouchStartRotate(t) {
        if (this._pointers.length === 1)
            this._rotateStart.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , n = .5 * (t.pageX + e.x)
              , s = .5 * (t.pageY + e.y);
            this._rotateStart.set(n, s)
        }
    }
    _handleTouchStartPan(t) {
        if (this._pointers.length === 1)
            this._panStart.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , n = .5 * (t.pageX + e.x)
              , s = .5 * (t.pageY + e.y);
            this._panStart.set(n, s)
        }
    }
    _handleTouchStartDolly(t) {
        const e = this._getSecondPointerPosition(t)
          , n = t.pageX - e.x
          , s = t.pageY - e.y
          , r = Math.sqrt(n * n + s * s);
        this._dollyStart.set(0, r)
    }
    _handleTouchStartDollyPan(t) {
        this.enableZoom && this._handleTouchStartDolly(t),
        this.enablePan && this._handleTouchStartPan(t)
    }
    _handleTouchStartDollyRotate(t) {
        this.enableZoom && this._handleTouchStartDolly(t),
        this.enableRotate && this._handleTouchStartRotate(t)
    }
    _handleTouchMoveRotate(t) {
        if (this._pointers.length == 1)
            this._rotateEnd.set(t.pageX, t.pageY);
        else {
            const n = this._getSecondPointerPosition(t)
              , s = .5 * (t.pageX + n.x)
              , r = .5 * (t.pageY + n.y);
            this._rotateEnd.set(s, r)
        }
        this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
        const e = this.domElement;
        this._rotateLeft(we * this._rotateDelta.x / e.clientHeight),
        this._rotateUp(we * this._rotateDelta.y / e.clientHeight),
        this._rotateStart.copy(this._rotateEnd)
    }
    _handleTouchMovePan(t) {
        if (this._pointers.length === 1)
            this._panEnd.set(t.pageX, t.pageY);
        else {
            const e = this._getSecondPointerPosition(t)
              , n = .5 * (t.pageX + e.x)
              , s = .5 * (t.pageY + e.y);
            this._panEnd.set(n, s)
        }
        this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed),
        this._pan(this._panDelta.x, this._panDelta.y),
        this._panStart.copy(this._panEnd)
    }
    _handleTouchMoveDolly(t) {
        const e = this._getSecondPointerPosition(t)
          , n = t.pageX - e.x
          , s = t.pageY - e.y
          , r = Math.sqrt(n * n + s * s);
        this._dollyEnd.set(0, r),
        this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)),
        this._dollyOut(this._dollyDelta.y),
        this._dollyStart.copy(this._dollyEnd);
        const a = (t.pageX + e.x) * .5
          , o = (t.pageY + e.y) * .5;
        this._updateZoomParameters(a, o)
    }
    _handleTouchMoveDollyPan(t) {
        this.enableZoom && this._handleTouchMoveDolly(t),
        this.enablePan && this._handleTouchMovePan(t)
    }
    _handleTouchMoveDollyRotate(t) {
        this.enableZoom && this._handleTouchMoveDolly(t),
        this.enableRotate && this._handleTouchMoveRotate(t)
    }
    _addPointer(t) {
        this._pointers.push(t.pointerId)
    }
    _removePointer(t) {
        delete this._pointerPositions[t.pointerId];
        for (let e = 0; e < this._pointers.length; e++)
            if (this._pointers[e] == t.pointerId) {
                this._pointers.splice(e, 1);
                return
            }
    }
    _isTrackingPointer(t) {
        for (let e = 0; e < this._pointers.length; e++)
            if (this._pointers[e] == t.pointerId)
                return !0;
        return !1
    }
    _trackPointer(t) {
        let e = this._pointerPositions[t.pointerId];
        e === void 0 && (e = new Ut,
        this._pointerPositions[t.pointerId] = e),
        e.set(t.pageX, t.pageY)
    }
    _getSecondPointerPosition(t) {
        const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
        return this._pointerPositions[e]
    }
    _customWheelEvent(t) {
        const e = t.deltaMode
          , n = {
            clientX: t.clientX,
            clientY: t.clientY,
            deltaY: t.deltaY
        };
        switch (e) {
        case 1:
            n.deltaY *= 16;
            break;
        case 2:
            n.deltaY *= 100;
            break
        }
        return t.ctrlKey && !this._controlActive && (n.deltaY *= 10),
        n
    }
}
function Mm(i) {
    this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId),
    this.domElement.addEventListener("pointermove", this._onPointerMove),
    this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(i) && (this._addPointer(i),
    i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)))
}
function Sm(i) {
    this.enabled !== !1 && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i))
}
function Em(i) {
    switch (this._removePointer(i),
    this._pointers.length) {
    case 0:
        this.domElement.releasePointerCapture(i.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(Dl),
        this.state = Kt.NONE;
        break;
    case 1:
        const t = this._pointers[0]
          , e = this._pointerPositions[t];
        this._onTouchStart({
            pointerId: t,
            pageX: e.x,
            pageY: e.y
        });
        break
    }
}
function ym(i) {
    let t;
    switch (i.button) {
    case 0:
        t = this.mouseButtons.LEFT;
        break;
    case 1:
        t = this.mouseButtons.MIDDLE;
        break;
    case 2:
        t = this.mouseButtons.RIGHT;
        break;
    default:
        t = -1
    }
    switch (t) {
    case _n.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseDownDolly(i),
        this.state = Kt.DOLLY;
        break;
    case _n.ROTATE:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(i),
            this.state = Kt.PAN
        } else {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(i),
            this.state = Kt.ROTATE
        }
        break;
    case _n.PAN:
        if (i.ctrlKey || i.metaKey || i.shiftKey) {
            if (this.enableRotate === !1)
                return;
            this._handleMouseDownRotate(i),
            this.state = Kt.ROTATE
        } else {
            if (this.enablePan === !1)
                return;
            this._handleMouseDownPan(i),
            this.state = Kt.PAN
        }
        break;
    default:
        this.state = Kt.NONE
    }
    this.state !== Kt.NONE && this.dispatchEvent(La)
}
function Tm(i) {
    switch (this.state) {
    case Kt.ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleMouseMoveRotate(i);
        break;
    case Kt.DOLLY:
        if (this.enableZoom === !1)
            return;
        this._handleMouseMoveDolly(i);
        break;
    case Kt.PAN:
        if (this.enablePan === !1)
            return;
        this._handleMouseMovePan(i);
        break
    }
}
function bm(i) {
    this.enabled === !1 || this.enableZoom === !1 || this.state !== Kt.NONE || (i.preventDefault(),
    this.dispatchEvent(La),
    this._handleMouseWheel(this._customWheelEvent(i)),
    this.dispatchEvent(Dl))
}
function Am(i) {
    this.enabled !== !1 && this._handleKeyDown(i)
}
function wm(i) {
    switch (this._trackPointer(i),
    this._pointers.length) {
    case 1:
        switch (this.touches.ONE) {
        case _i.ROTATE:
            if (this.enableRotate === !1)
                return;
            this._handleTouchStartRotate(i),
            this.state = Kt.TOUCH_ROTATE;
            break;
        case _i.PAN:
            if (this.enablePan === !1)
                return;
            this._handleTouchStartPan(i),
            this.state = Kt.TOUCH_PAN;
            break;
        default:
            this.state = Kt.NONE
        }
        break;
    case 2:
        switch (this.touches.TWO) {
        case _i.DOLLY_PAN:
            if (this.enableZoom === !1 && this.enablePan === !1)
                return;
            this._handleTouchStartDollyPan(i),
            this.state = Kt.TOUCH_DOLLY_PAN;
            break;
        case _i.DOLLY_ROTATE:
            if (this.enableZoom === !1 && this.enableRotate === !1)
                return;
            this._handleTouchStartDollyRotate(i),
            this.state = Kt.TOUCH_DOLLY_ROTATE;
            break;
        default:
            this.state = Kt.NONE
        }
        break;
    default:
        this.state = Kt.NONE
    }
    this.state !== Kt.NONE && this.dispatchEvent(La)
}
function Rm(i) {
    switch (this._trackPointer(i),
    this.state) {
    case Kt.TOUCH_ROTATE:
        if (this.enableRotate === !1)
            return;
        this._handleTouchMoveRotate(i),
        this.update();
        break;
    case Kt.TOUCH_PAN:
        if (this.enablePan === !1)
            return;
        this._handleTouchMovePan(i),
        this.update();
        break;
    case Kt.TOUCH_DOLLY_PAN:
        if (this.enableZoom === !1 && this.enablePan === !1)
            return;
        this._handleTouchMoveDollyPan(i),
        this.update();
        break;
    case Kt.TOUCH_DOLLY_ROTATE:
        if (this.enableZoom === !1 && this.enableRotate === !1)
            return;
        this._handleTouchMoveDollyRotate(i),
        this.update();
        break;
    default:
        this.state = Kt.NONE
    }
}
function Cm(i) {
    this.enabled !== !1 && i.preventDefault()
}
function Pm(i) {
    i.key === "Control" && (this._controlActive = !0,
    this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
function Dm(i) {
    i.key === "Control" && (this._controlActive = !1,
    this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0
    }))
}
const Lm = /^[og]\s*(.+)?/
  , Um = /^mtllib /
  , Im = /^usemtl /
  , Nm = /^usemap /
  , $o = /\s+/
  , Jo = new U
  , Rr = new U
  , Qo = new U
  , tl = new U
  , Be = new U
  , As = new Lt;
function Fm() {
    const i = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materials: {},
        materialLibraries: [],
        startObject: function(t, e) {
            if (this.object && this.object.fromDeclaration === !1) {
                this.object.name = t,
                this.object.fromDeclaration = e !== !1;
                return
            }
            const n = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : void 0;
            if (this.object && typeof this.object._finalize == "function" && this.object._finalize(!0),
            this.object = {
                name: t || "",
                fromDeclaration: e !== !1,
                geometry: {
                    vertices: [],
                    normals: [],
                    colors: [],
                    uvs: [],
                    hasUVIndices: !1
                },
                materials: [],
                smooth: !0,
                startMaterial: function(s, r) {
                    const a = this._finalize(!1);
                    a && (a.inherited || a.groupCount <= 0) && this.materials.splice(a.index, 1);
                    const o = {
                        index: this.materials.length,
                        name: s || "",
                        mtllib: Array.isArray(r) && r.length > 0 ? r[r.length - 1] : "",
                        smooth: a !== void 0 ? a.smooth : this.smooth,
                        groupStart: a !== void 0 ? a.groupEnd : 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: !1,
                        clone: function(l) {
                            const c = {
                                index: typeof l == "number" ? l : this.index,
                                name: this.name,
                                mtllib: this.mtllib,
                                smooth: this.smooth,
                                groupStart: 0,
                                groupEnd: -1,
                                groupCount: -1,
                                inherited: !1
                            };
                            return c.clone = this.clone.bind(c),
                            c
                        }
                    };
                    return this.materials.push(o),
                    o
                },
                currentMaterial: function() {
                    if (this.materials.length > 0)
                        return this.materials[this.materials.length - 1]
                },
                _finalize: function(s) {
                    const r = this.currentMaterial();
                    if (r && r.groupEnd === -1 && (r.groupEnd = this.geometry.vertices.length / 3,
                    r.groupCount = r.groupEnd - r.groupStart,
                    r.inherited = !1),
                    s && this.materials.length > 1)
                        for (let a = this.materials.length - 1; a >= 0; a--)
                            this.materials[a].groupCount <= 0 && this.materials.splice(a, 1);
                    return s && this.materials.length === 0 && this.materials.push({
                        name: "",
                        smooth: this.smooth
                    }),
                    r
                }
            },
            n && n.name && typeof n.clone == "function") {
                const s = n.clone(0);
                s.inherited = !0,
                this.object.materials.push(s)
            }
            this.objects.push(this.object)
        },
        finalize: function() {
            this.object && typeof this.object._finalize == "function" && this.object._finalize(!0)
        },
        parseVertexIndex: function(t, e) {
            const n = parseInt(t, 10);
            return (n >= 0 ? n - 1 : n + e / 3) * 3
        },
        parseNormalIndex: function(t, e) {
            const n = parseInt(t, 10);
            return (n >= 0 ? n - 1 : n + e / 3) * 3
        },
        parseUVIndex: function(t, e) {
            const n = parseInt(t, 10);
            return (n >= 0 ? n - 1 : n + e / 2) * 2
        },
        addVertex: function(t, e, n) {
            const s = this.vertices
              , r = this.object.geometry.vertices;
            r.push(s[t + 0], s[t + 1], s[t + 2]),
            r.push(s[e + 0], s[e + 1], s[e + 2]),
            r.push(s[n + 0], s[n + 1], s[n + 2])
        },
        addVertexPoint: function(t) {
            const e = this.vertices;
            this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
        },
        addVertexLine: function(t) {
            const e = this.vertices;
            this.object.geometry.vertices.push(e[t + 0], e[t + 1], e[t + 2])
        },
        addNormal: function(t, e, n) {
            const s = this.normals
              , r = this.object.geometry.normals;
            r.push(s[t + 0], s[t + 1], s[t + 2]),
            r.push(s[e + 0], s[e + 1], s[e + 2]),
            r.push(s[n + 0], s[n + 1], s[n + 2])
        },
        addFaceNormal: function(t, e, n) {
            const s = this.vertices
              , r = this.object.geometry.normals;
            Jo.fromArray(s, t),
            Rr.fromArray(s, e),
            Qo.fromArray(s, n),
            Be.subVectors(Qo, Rr),
            tl.subVectors(Jo, Rr),
            Be.cross(tl),
            Be.normalize(),
            r.push(Be.x, Be.y, Be.z),
            r.push(Be.x, Be.y, Be.z),
            r.push(Be.x, Be.y, Be.z)
        },
        addColor: function(t, e, n) {
            const s = this.colors
              , r = this.object.geometry.colors;
            s[t] !== void 0 && r.push(s[t + 0], s[t + 1], s[t + 2]),
            s[e] !== void 0 && r.push(s[e + 0], s[e + 1], s[e + 2]),
            s[n] !== void 0 && r.push(s[n + 0], s[n + 1], s[n + 2])
        },
        addUV: function(t, e, n) {
            const s = this.uvs
              , r = this.object.geometry.uvs;
            r.push(s[t + 0], s[t + 1]),
            r.push(s[e + 0], s[e + 1]),
            r.push(s[n + 0], s[n + 1])
        },
        addDefaultUV: function() {
            const t = this.object.geometry.uvs;
            t.push(0, 0),
            t.push(0, 0),
            t.push(0, 0)
        },
        addUVLine: function(t) {
            const e = this.uvs;
            this.object.geometry.uvs.push(e[t + 0], e[t + 1])
        },
        addFace: function(t, e, n, s, r, a, o, l, c) {
            const u = this.vertices.length;
            let h = this.parseVertexIndex(t, u)
              , f = this.parseVertexIndex(e, u)
              , m = this.parseVertexIndex(n, u);
            if (this.addVertex(h, f, m),
            this.addColor(h, f, m),
            o !== void 0 && o !== "") {
                const g = this.normals.length;
                h = this.parseNormalIndex(o, g),
                f = this.parseNormalIndex(l, g),
                m = this.parseNormalIndex(c, g),
                this.addNormal(h, f, m)
            } else
                this.addFaceNormal(h, f, m);
            if (s !== void 0 && s !== "") {
                const g = this.uvs.length;
                h = this.parseUVIndex(s, g),
                f = this.parseUVIndex(r, g),
                m = this.parseUVIndex(a, g),
                this.addUV(h, f, m),
                this.object.geometry.hasUVIndices = !0
            } else
                this.addDefaultUV()
        },
        addPointGeometry: function(t) {
            this.object.geometry.type = "Points";
            const e = this.vertices.length;
            for (let n = 0, s = t.length; n < s; n++) {
                const r = this.parseVertexIndex(t[n], e);
                this.addVertexPoint(r),
                this.addColor(r)
            }
        },
        addLineGeometry: function(t, e) {
            this.object.geometry.type = "Line";
            const n = this.vertices.length
              , s = this.uvs.length;
            for (let r = 0, a = t.length; r < a; r++)
                this.addVertexLine(this.parseVertexIndex(t[r], n));
            for (let r = 0, a = e.length; r < a; r++)
                this.addUVLine(this.parseUVIndex(e[r], s))
        }
    };
    return i.startObject("", !1),
    i
}
class Om extends $i {
    constructor(t) {
        super(t),
        this.materials = null
    }
    load(t, e, n, s) {
        const r = this
          , a = new Ah(this.manager);
        a.setPath(this.path),
        a.setRequestHeader(this.requestHeader),
        a.setWithCredentials(this.withCredentials),
        a.load(t, function(o) {
            try {
                e(r.parse(o))
            } catch (l) {
                s ? s(l) : console.error(l),
                r.manager.itemError(t)
            }
        }, n, s)
    }
    setMaterials(t) {
        return this.materials = t,
        this
    }
    parse(t) {
        const e = new Fm;
        t.indexOf(`\r
`) !== -1 && (t = t.replace(/\r\n/g, `
`)),
        t.indexOf(`\\
`) !== -1 && (t = t.replace(/\\\n/g, ""));
        const n = t.split(`
`);
        let s = [];
        for (let o = 0, l = n.length; o < l; o++) {
            const c = n[o].trimStart();
            if (c.length === 0)
                continue;
            const u = c.charAt(0);
            if (u !== "#")
                if (u === "v") {
                    const h = c.split($o);
                    switch (h[0]) {
                    case "v":
                        e.vertices.push(parseFloat(h[1]), parseFloat(h[2]), parseFloat(h[3])),
                        h.length >= 7 ? (As.setRGB(parseFloat(h[4]), parseFloat(h[5]), parseFloat(h[6]), Ce),
                        e.colors.push(As.r, As.g, As.b)) : e.colors.push(void 0, void 0, void 0);
                        break;
                    case "vn":
                        e.normals.push(parseFloat(h[1]), parseFloat(h[2]), parseFloat(h[3]));
                        break;
                    case "vt":
                        e.uvs.push(parseFloat(h[1]), parseFloat(h[2]));
                        break
                    }
                } else if (u === "f") {
                    const f = c.slice(1).trim().split($o)
                      , m = [];
                    for (let x = 0, p = f.length; x < p; x++) {
                        const d = f[x];
                        if (d.length > 0) {
                            const b = d.split("/");
                            m.push(b)
                        }
                    }
                    const g = m[0];
                    for (let x = 1, p = m.length - 1; x < p; x++) {
                        const d = m[x]
                          , b = m[x + 1];
                        e.addFace(g[0], d[0], b[0], g[1], d[1], b[1], g[2], d[2], b[2])
                    }
                } else if (u === "l") {
                    const h = c.substring(1).trim().split(" ");
                    let f = [];
                    const m = [];
                    if (c.indexOf("/") === -1)
                        f = h;
                    else
                        for (let g = 0, x = h.length; g < x; g++) {
                            const p = h[g].split("/");
                            p[0] !== "" && f.push(p[0]),
                            p[1] !== "" && m.push(p[1])
                        }
                    e.addLineGeometry(f, m)
                } else if (u === "p") {
                    const f = c.slice(1).trim().split(" ");
                    e.addPointGeometry(f)
                } else if ((s = Lm.exec(c)) !== null) {
                    const h = (" " + s[0].slice(1).trim()).slice(1);
                    e.startObject(h)
                } else if (Im.test(c))
                    e.object.startMaterial(c.substring(7).trim(), e.materialLibraries);
                else if (Um.test(c))
                    e.materialLibraries.push(c.substring(7).trim());
                else if (Nm.test(c))
                    console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');
                else if (u === "s") {
                    if (s = c.split(" "),
                    s.length > 1) {
                        const f = s[1].trim().toLowerCase();
                        e.object.smooth = f !== "0" && f !== "off"
                    } else
                        e.object.smooth = !0;
                    const h = e.object.currentMaterial();
                    h && (h.smooth = e.object.smooth)
                } else {
                    if (c === "\0")
                        continue;
                    console.warn('THREE.OBJLoader: Unexpected line: "' + c + '"')
                }
        }
        e.finalize();
        const r = new Ni;
        if (r.materialLibraries = [].concat(e.materialLibraries),
        !(e.objects.length === 1 && e.objects[0].geometry.vertices.length === 0) === !0)
            for (let o = 0, l = e.objects.length; o < l; o++) {
                const c = e.objects[o]
                  , u = c.geometry
                  , h = c.materials
                  , f = u.type === "Line"
                  , m = u.type === "Points";
                let g = !1;
                if (u.vertices.length === 0)
                    continue;
                const x = new Ze;
                x.setAttribute("position", new Ee(u.vertices,3)),
                u.normals.length > 0 && x.setAttribute("normal", new Ee(u.normals,3)),
                u.colors.length > 0 && (g = !0,
                x.setAttribute("color", new Ee(u.colors,3))),
                u.hasUVIndices === !0 && x.setAttribute("uv", new Ee(u.uvs,2));
                const p = [];
                for (let b = 0, T = h.length; b < T; b++) {
                    const S = h[b]
                      , I = S.name + "_" + S.smooth + "_" + g;
                    let R = e.materials[I];
                    if (this.materials !== null) {
                        if (R = this.materials.create(S.name),
                        f && R && !(R instanceof Us)) {
                            const w = new Us;
                            sn.prototype.copy.call(w, R),
                            w.color.copy(R.color),
                            R = w
                        } else if (m && R && !(R instanceof Fi)) {
                            const w = new Fi({
                                size: 10,
                                sizeAttenuation: !1
                            });
                            sn.prototype.copy.call(w, R),
                            w.color.copy(R.color),
                            w.map = R.map,
                            R = w
                        }
                    }
                    R === void 0 && (f ? R = new Us : m ? R = new Fi({
                        size: 1,
                        sizeAttenuation: !1
                    }) : R = new Mh,
                    R.name = S.name,
                    R.flatShading = !S.smooth,
                    R.vertexColors = g,
                    e.materials[I] = R),
                    p.push(R)
                }
                let d;
                if (p.length > 1) {
                    for (let b = 0, T = h.length; b < T; b++) {
                        const S = h[b];
                        x.addGroup(S.groupStart, S.groupCount, b)
                    }
                    f ? d = new vo(x,p) : m ? d = new Mr(x,p) : d = new He(x,p)
                } else
                    f ? d = new vo(x,p[0]) : m ? d = new Mr(x,p[0]) : d = new He(x,p[0]);
                d.name = c.name,
                r.add(d)
            }
        else if (e.vertices.length > 0) {
            const o = new Fi({
                size: 1,
                sizeAttenuation: !1
            })
              , l = new Ze;
            l.setAttribute("position", new Ee(e.vertices,3)),
            e.colors.length > 0 && e.colors[0] !== void 0 && (l.setAttribute("color", new Ee(e.colors,3)),
            o.vertexColors = !0);
            const c = new Mr(l,o);
            r.add(c)
        }
        return r
    }
}
const me = new Lt(16711680)
  , rn = new Lt(255)
  , Ll = new Lt(8951432)
  , Ul = new Lt(16755370)
  , Il = new Lt(11184895);
new U(0,0,0);
const Zn = 20
  , vn = 1
  , Qe = .001
  , Bm = .65
  , Xs = new ph
  , Ln = new ze(Zn,innerWidth / innerHeight,.1,100);
Ln.position.set(0, 0, vn * 140 / Zn);
const qs = new gm({
    antialias: !0
});
qs.setSize(innerWidth, innerHeight);
document.body.appendChild(qs.domElement);
const Qn = new xm(Ln,qs.domElement);
Qn.listenToKeyEvents(window);
Qn.enableDamping = !0;
Qn.keyRotateSpeed = 15;
Qn.enablePan = !1;
Qn.enableZoom = !0;
Qn.mouseButtons = {
    LEFT: _n.ROTATE,
    MIDDLE: _n.ROTATE,
    RIGHT: _n.ROTATE
};
const zm = new Rh
  , Cr = zm.load("./textures/Equirectangular_projection_SW.jpg", () => {
    Cr.mapping = Ns,
    Cr.colorSpace = Ce
}
);
function Nl() {
    const i = Math.random() * .1 + .15;
    return new Lt(i,i * 1.2,i)
}
let Si = null, Jt = new Array, Re = new Array, Ve = new Array, Ua = !1, $e, Fl = !1, Ol = !1, Bl = !1, zl = !1, Hs = 3, qn = null, Ia = !1;
let vsAI = !1, humanColor = null, aiColor = null, mctsIter = 7071;

function cloneState() {
    const state = [];
    for (let i = 0; i < Jt.length; i++) {
        const c = Jt[i].material.color;
        if (c.equals(me)) state.push(1);
        else if (c.equals(rn)) state.push(2);
        else state.push(0);
    }
    return state;
}

function getValidMoves(state) {
    const moves = [];
    for (let i = 0; i < state.length; i++) {
        if (state[i] === 0) moves.push(i);
    }
    return moves;
}

function applyMove(state, move, player) {
    const newState = state.slice();
    newState[move] = player;
    return newState;
}

function checkWinFast(state, player) {
    for (let start = 0; start < state.length; start++) {
        if (state[start] !== player) continue;
        const target = Re[start];
        const visited = new Set();
        const queue = [start];
        visited.add(start);
        while (queue.length > 0) {
            const curr = queue.shift();
            if (curr === target) return true;
            for (const neighbor of Ve[curr]) {
                if (!visited.has(neighbor) && state[neighbor] === player) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    return false;
}

class MctsNode {
    constructor(move, parent, state, playerToMove) {
        this.move = move;
        this.parent = parent;
        this.state = state;
        this.playerToMove = playerToMove;
        this.children = [];
        this.wins = 0;
        this.visits = 0;
        this.untriedMoves = getValidMoves(state);
    }
    
    ucb1(c = 1.414) {
        if (this.visits === 0) return Infinity;
        return this.wins / this.visits + c * Math.sqrt(Math.log(this.parent.visits) / this.visits);
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
    
    expand() {
        const idx = Math.floor(Math.random() * this.untriedMoves.length);
        const move = this.untriedMoves.splice(idx, 1)[0];
        const newState = applyMove(this.state, move, this.playerToMove);
        const nextPlayer = this.playerToMove === 1 ? 2 : 1;
        const child = new MctsNode(move, this, newState, nextPlayer);
        this.children.push(child);
        return child;
    }
}

function mctsSimulate(state, currentPlayer) {
    let simState = state.slice();
    let player = currentPlayer;
    let moves = getValidMoves(simState);
    while (moves.length > 0) {
        if (checkWinFast(simState, 1)) return 1;
        if (checkWinFast(simState, 2)) return 2;
        const move = moves[Math.floor(Math.random() * moves.length)];
        simState[move] = player;
        player = player === 1 ? 2 : 1;
        moves = getValidMoves(simState);
    }
    if (checkWinFast(simState, 1)) return 1;
    if (checkWinFast(simState, 2)) return 2;
    return 0;
}

function mctsBackpropagate(node, winner, aiPlayer) {
    while (node !== null) {
        node.visits++;
        if (winner === aiPlayer) node.wins++;
        else if (winner !== 0) node.wins -= 0.5;
        node = node.parent;
    }
}

function mctsSearch(iterations, aiPlayer) {
    const state = cloneState();
    const root = new MctsNode(null, null, state, aiPlayer);
    
    for (let i = 0; i < iterations; i++) {
        let node = root;
        while (node.untriedMoves.length === 0 && node.children.length > 0) {
            node = node.bestChild();
        }
        if (node.untriedMoves.length > 0) {
            node = node.expand();
        }
        const winner = mctsSimulate(node.state, node.playerToMove);
        mctsBackpropagate(node, winner, aiPlayer);
    }
    
    let bestMove = null, bestVisits = -1;
    for (const child of root.children) {
        if (child.visits > bestVisits) {
            bestVisits = child.visits;
            bestMove = child.move;
        }
    }
    return bestMove;
}

function runAI() {
    if (!vsAI || Ia || !aiColor || !$e || !$e.equals(aiColor)) return;
    const aiPlayer = aiColor.equals(me) ? 1 : 2;
    const move = mctsSearch(mctsIter, aiPlayer);
    if (move !== null) {
        qn !== null && Vs(qn, 0);
        qn = move;
        Te(move, aiColor);
        Vs(move, Bm);
        Ia = Vl(move, aiColor);
        if (!Ia) zi();
    }
}

function Te(i, t) {
    Jt[i].material.color = t,
    Jt[i].material.opacity = 0.85,
    Jt[Re[i]].material.color = t,
    Jt[Re[i]].material.opacity = 0.85
}
function Vs(i, t) {
    Jt[i].material.metalness = t;
    Jt[Re[i]].material.metalness = t;
    if (t > 0) {
        Jt[i].material.emissive = Jt[i].material.color;
        Jt[i].material.emissiveIntensity = 0.4;
        Jt[Re[i]].material.emissive = Jt[Re[i]].material.color;
        Jt[Re[i]].material.emissiveIntensity = 0.4;
    } else {
        Jt[i].material.emissiveIntensity = 0;
        Jt[Re[i]].material.emissiveIntensity = 0;
    }
}
function Na() {
    Ia = !1;
    for (let i = 0; i < Jt.length; i++)
        Te(i, Nl()),
        Vs(i, 0);
    Fl && Hl(),
    Bl && Gm(Hs),
    Ol && km(Hs),
    zl && Vm(),
    document.getElementById("win-popup").style.display = "none"
}
function $n(i) {
    const t = Jt[i].geometry.attributes.position
      , e = new U;
    let n = new Array
      , s = 0;
    for (let r = 0; r < t.count; r++) {
        const a = new U(t.getX(r),t.getY(r),t.getZ(r));
        let o = !1;
        for (let l = 0; l < n.length; l++)
            a.distanceTo(n[l]) < Qe && (o = !0);
        n.push(a),
        o || (e.add(a),
        s++)
    }
    return e.divideScalar(s)
}
function Hm(i, t) {
    const earthTex = new Rh().load('./textures/Equirectangular_projection_SW.jpg');
    earthTex.wrapS = 1000;
    earthTex.wrapT = 1000;
    new Om().load(i, n => {
        Si = n;
        let s = 0;
        n.traverse(a => {
            if (a instanceof He) {
                a.geometry = a.geometry.toNonIndexed();
                const pos = a.geometry.attributes.position;
                const uvs = [];
                for (let j = 0; j < pos.count; j++) {
                    const x = pos.getX(j), y = pos.getY(j), z = pos.getZ(j);
                    const r = Math.sqrt(x*x + y*y + z*z);
                    const theta = Math.atan2(z, x);
                    const phi = Math.acos(y / r);
                    uvs.push(1 - (theta + Math.PI) / (2 * Math.PI), 1 - phi / Math.PI);
                }
                for (let j = 0; j < uvs.length; j += 6) {
                    const u0 = uvs[j], u1 = uvs[j+2], u2 = uvs[j+4];
                    const maxU = Math.max(u0, u1, u2), minU = Math.min(u0, u1, u2);
                    if (maxU - minU > 0.5) {
                        if (u0 < 0.5) uvs[j] += 1;
                        if (u1 < 0.5) uvs[j+2] += 1;
                        if (u2 < 0.5) uvs[j+4] += 1;
                    }
                }
                a.geometry.setAttribute('uv', new nn(new Float32Array(uvs), 2));
                a.material = new xh({
                    color: 0xffffff,
                    map: earthTex,
                flatShading: !0,
                    opacity: 1.0,
                transparent: !0,
                    side: tn,
                    polygonOffset: !0,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1
                });
                const edgeMap = new Map();
                const normals = [];
                for (let j = 0; j < pos.count; j += 3) {
                    const v0 = [pos.getX(j), pos.getY(j), pos.getZ(j)];
                    const v1 = [pos.getX(j+1), pos.getY(j+1), pos.getZ(j+1)];
                    const v2 = [pos.getX(j+2), pos.getY(j+2), pos.getZ(j+2)];
                    const e1 = [v1[0]-v0[0], v1[1]-v0[1], v1[2]-v0[2]];
                    const e2 = [v2[0]-v0[0], v2[1]-v0[1], v2[2]-v0[2]];
                    const nx = e1[1]*e2[2] - e1[2]*e2[1];
                    const ny = e1[2]*e2[0] - e1[0]*e2[2];
                    const nz = e1[0]*e2[1] - e1[1]*e2[0];
                    const nl = Math.sqrt(nx*nx + ny*ny + nz*nz);
                    normals.push([nx/nl, ny/nl, nz/nl]);
                    const triIdx = j / 3;
                    const makeKey = (a, b) => {
                        const ka = a.map(x => x.toFixed(6)).join(',');
                        const kb = b.map(x => x.toFixed(6)).join(',');
                        return ka < kb ? ka + '|' + kb : kb + '|' + ka;
                    };
                    [[v0,v1],[v1,v2],[v2,v0]].forEach(([a,b]) => {
                        const key = makeKey(a, b);
                        if (!edgeMap.has(key)) edgeMap.set(key, []);
                        edgeMap.get(key).push(triIdx);
                    });
                }
                const edgePos = [];
                edgeMap.forEach((tris, key) => {
                    let isBoundary = true;
                    if (tris.length === 2) {
                        const n1 = normals[tris[0]], n2 = normals[tris[1]];
                        const dot = n1[0]*n2[0] + n1[1]*n2[1] + n1[2]*n2[2];
                        if (dot > 0.999) isBoundary = false;
                    }
                    if (isBoundary) {
                        const pts = key.split('|').map(s => s.split(',').map(Number));
                        edgePos.push(...pts[0], ...pts[1]);
                    }
                });
                const edgeGeom = new Ze();
                edgeGeom.setAttribute('position', new nn(new Float32Array(edgePos), 3));
                const edgeMat = new Us({ color: 0x000000, linewidth: 2, transparent: !0, opacity: 0.4 });
                const edges = new vo(edgeGeom, edgeMat);
                edges.raycast = () => {};
                a.add(edges);
                a.name = s;
                s = Jt.push(a);
            }
        }),
        n.scale.set(vn, vn, vn),
        Xs.add(Si),
        console.log("Tiles:", Jt);
        for (let a = 0; a < Jt.length; a++) {
            const o = $n(a)
              , c = new bl(o.clone().multiplyScalar(-2),o.clone().normalize()).intersectObject(Si);
            c.length > 0 && Re.push(c[0].object.name),
            Ve.push(new Array)
        }
        console.log("Opposite Tiles:", Re);
        const r = document.getElementById("loading-bar");
        r.style.display = "block";
        for (let a = 0; a < Jt.length; a++) {
            const o = Jt[a].geometry.attributes.position;
            for (let l = 0; l < a; l++) {
                const c = Jt[l].geometry.attributes.position;
                t: for (let u = 0; u < o.count; u++)
                    for (let h = 0; h < c.count; h++) {
                        const f = new U(o.getX(u),o.getY(u),o.getZ(u))
                          , m = new U(c.getX(h),c.getY(h),c.getZ(h));
                        if (f.distanceTo(m) < Qe) {
                            Ve[a].push(l),
                            Ve[l].push(a);
                            break t
                        }
                    }
            }
        }
        r.style.display = "none",
        console.log("Adjacencies:", Ve),
        t()
    }
    )
}
function Hl() {
    Ln.position.set(vn * 80 / Zn, vn * 80 / Zn, 0);
    for (let i = 0; i < Jt.length; i++) {
        let t = $n(i);
        t.x > 0 - Qe && t.y < 0 + Qe && t.z > 0 - Qe && Te(i, me),
        t.x > 0 - Qe && t.y < 0 + Qe && t.z < 0 + Qe && Te(i, rn)
    }
}
function Vm() {
    Ln.position.set(0, 0, vn * 180 / Zn);
    for (let i = 0; i < Jt.length; i++) {
        const t = $n(i)
          , e = Ve[i].length;
        e > 6 ? Te(i, me) : e == 5 && t.y > 0 && (t.z > 0 || t.z == 0 && t.x > 0 ? Te(i, me) : Te(i, rn))
    }
}
function Gm(i) {
    Ln.position.set(0, 0, vn * 120 / Zn);
    let t = 0;
    for (let e = 0; e < Jt.length; e++) {
        let n = $n(e);
        t = Math.max(t, n.z)
    }
    for (let e = 0; e < Jt.length; e++) {
        let n = $n(e);
        Math.abs(n.z) < t - Qe && ((Math.atan(n.x / n.y) * i / Math.PI + i) % 1 < .5 ? Te(e, me) : Te(e, rn))
    }
}
function km(i) {
    Ln.position.set(0, 0, vn * 120 / Zn);
    let t = new Set;
    for (let e = 0; e < Jt.length; e++) {
        const n = $n(e);
        Math.abs(n.z) < Qe && t.add(e)
    }
    for (const e of t)
        for (let n = 0; n < Ve[e].length; n++) {
            const s = Ve[e][n]
              , r = $n(s);
            (Math.atan(r.x / r.y) * i / Math.PI + i) % 1 < .5 ? Te(s, me) : Te(s, rn)
        }
}
function Wm() {
    for (let n = 0; n < Jt.length; n++) {
        if (Re[Re[n]] != n)
            return console.log("involution fail", n, Re[n], Re[Re[n]]),
            !1;
        for (let s = 0; s < Ve[n].length; s++) {
            const r = Ve[n][s];
            if (!Ve[Re[n]].includes(Re[r]))
                return console.log("hom fail", n, r, Re[n], Re[r]),
                !1
        }
    }
    let i = 0;
    for (let n = 0; n < Jt.length; n++) {
        const s = Ve[n].length;
        i += s
    }
    if (i % 2 != 0)
        return console.log("edge count gamemode", i),
        !1;
    i /= 2;
    const t = i * 2 / 3
      , e = t + Jt.length - i;
    return console.log(t, i, Jt.length, e),
    e != 2 ? (console.log("euler characteristic gamemode"),
    !1) : !0
}
const Xm = new Dh(16777215,2);
Xs.add(Xm);
const el = new bl
  , Pr = new Ut
  , Dr = document.getElementById("model-picker");
Dr.addEventListener("click", i => {
    let t = i.target;
    for (; t && t !== Dr && !(t.classList && t.classList.contains("model-button")); )
        t = t.parentElement;
    if (!t || !t.classList.contains("model-button"))
        return;
    const e = t.dataset
      , n = e.model
      , s = e.gamemode;
    s === "hex" && (Fl = !0),
    s === "mobius" && (zl = !0),
    s === "atoll2" && (Ol = !0,
    Hs = parseInt(e.atoll)),
    s === "atoll" && (Bl = !0,
    Hs = parseInt(e.atoll)),
    n && (Dr.style.display = "none",
    document.getElementById("loading-bar").style.display = "block",
    requestAnimationFrame( () => {
        Hm(`./obj_files/${n}`, function() {
            Wm() || (document.getElementById("error-popup").style.display = "block"),
            Na(),
            Ua = !0,
            zi(me)
        })
    }
    ))
}
);
function zi(i) {
    if (Ia)
        return;
    i ? $e = i : $e === me ? $e = rn : $e === rn && ($e = me);
    const t = document.getElementById("turn-popup");
    t.style.background = $e === me ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, 1)";
    const e = $e === me ? "Red" : "Blue";
    t.textContent = `${e}'s turn`,
    t.style.display = "block";
    if (vsAI && $e === aiColor) {
        t.textContent = `${e} (AI) thinking...`;
        setTimeout(runAI, 150);
    }
}
function Vl(i, t) {
    const e = t === me ? Ul : Il
      , n = [i]
      , s = Re[i]
      , r = new Set
      , a = new Map;
    for (r.add(i); n.length > 0; ) {
        const o = n.shift();
        if (o === s) {
            let l = []
              , c = o;
            for (; c !== i; )
                l.push(c),
                c = a.get(c);
            for (const f of l)
                Te(f, e);
            const u = t === me ? "Red" : "Blue"
              , h = document.getElementById("win-popup");
            return h.style.background = t === me ? "rgba(255, 0, 0, 1)" : "rgba(0, 0, 255, 1)",
            h.textContent = `${u} wins!`,
            h.style.display = "block",
            document.getElementById("turn-popup").style.display = "none",
            !0
        }
        for (const l of Ve[o])
            !r.has(l) && Jt[l].material.color.equals(t) && (n.push(l),
            r.add(l),
            a.set(l, o))
    }
    return !1
}
function qm(i) {
    if (!Ua || !Si)
        return;
    Pr.x = i.clientX / innerWidth * 2 - 1,
    Pr.y = -(i.clientY / innerHeight) * 2 + 1,
    el.setFromCamera(Pr, Ln);
    const t = el.intersectObject(Si);
    if (t.length > 0) {
        const e = t[0].object
          , n = Jt.indexOf(e);
        i.shiftKey ? Te(n, Ll) : $e && Jt[n].material.color != me && Jt[n].material.color != rn && (qn != null && Vs(qn, 0),
        qn = n,
        Te(n, $e),
        Vs(n, Bm),
        Ia = Vl(n, $e),
        zi())
    }
}
function Ym() {
    if (Na(),
    !Ua || !Si) {
        console.log("Game not started yet. Please select a model.");
        return
    }
    for (let i = 0; i < Jt.length; i++) {
        const t = Jt[i].material.color;
        if (t != me && t != rn && t != Ul && t != Il) {
            const n = Math.random() < .5 ? me : rn;
            Te(i, n),
            Vl(i, n)
        }
    }
}
function jm(i) {
    i.key === "Q" & i.shiftKey ? (console.log("Randomizing board..."),
    Ym()) : i.key === "W" & i.shiftKey ? (console.log("Resetting board..."),
    Na()) : i.key === "Z" && i.shiftKey ? qn !== null && (Te(qn, Nl()),
    Vs(qn, 0),
    zi(),
    qn = null) : i.key === "H" && i.shiftKey ? Hl() : i.key === "r" ? zi(me) : i.key === "b" && zi(rn)
}
const nl = 6;
let Gl, kl;
function Km(i) {
    Gl = i.pageX,
    kl = i.pageY
}
function Zm(i) {
    const t = Math.abs(i.pageX - Gl)
      , e = Math.abs(i.pageY - kl);
    t < nl && e < nl && qm(i)
}
document.addEventListener("mousedown", Km);
document.addEventListener("mouseup", Zm);
document.addEventListener("keydown", jm);
function Wl() {
    requestAnimationFrame(Wl),
    Qn.update(),
    qs.render(Xs, Ln)
}
Wl();

window.setAIEnabled = function(enabled) {
    vsAI = enabled;
    if (enabled && humanColor === null) {
        humanColor = me;
        aiColor = rn;
    }
};

window.setHumanColor = function(color) {
    if (color === 'red') {
        humanColor = me;
        aiColor = rn;
    } else {
        humanColor = rn;
        aiColor = me;
    }
};

window.setMctsIterations = function(iter) {
    mctsIter = parseInt(iter);
};

window.getAISettings = function() {
    return { vsAI, mctsIter };
};
