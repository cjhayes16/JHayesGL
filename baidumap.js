! function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) r.d(n, o, function (t) {
                return e[t]
            }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 5)
}([function (e, t) {
    e.exports = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    function r(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    e.exports = function (e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    function r(t) {
        return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, r) {
    var n = r(6);
    e.exports = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && n(e, t)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, r) {
    var n = r(7).default,
        o = r(8);
    e.exports = function (e, t) {
        if (t && ("object" === n(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return o(e)
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, r) {
    e.exports = r(9)
}, function (e, t) {
    function r(t, n) {
        return e.exports = r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
            return e.__proto__ = t, e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t, n)
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    function r(t) {
        return e.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t)
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }, e.exports.__esModule = !0, e.exports.default = e.exports
}, function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
        o = r.n(n),
        i = r(1),
        a = r.n(i),
        s = r(3),
        u = r.n(s),
        l = r(4),
        c = r.n(l),
        f = r(2),
        h = r.n(f),
        y = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        p = [75, 60, 45, 30, 15, 0],
        g = [
            [1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2],
            [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
            [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37],
            [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06],
            [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4],
            [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]
        ],
        m = [
            [-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5],
            [.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
            [.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
            [.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]
        ],
        v = function () {
            function e() {
                o()(this, e), this.isWgs84 = !1
            }
            return a()(e, [{
                key: "getDistanceByMC",
                value: function (e, t) {
                    if (!e || !t) return 0;
                    if (!(e = this.convertMC2LL(e))) return 0;
                    var r = this.toRadians(e.lng),
                        n = this.toRadians(e.lat);
                    if (!(t = this.convertMC2LL(t))) return 0;
                    var o = this.toRadians(t.lng),
                        i = this.toRadians(t.lat);
                    return this.getDistance(r, o, n, i)
                }
            }, {
                key: "getDistanceByLL",
                value: function (e, t) {
                    if (!e || !t) return 0;
                    e.lng = this.getLoop(e.lng, -180, 180), e.lat = this.getRange(e.lat, -74, 74), t.lng = this.getLoop(t.lng, -180, 180), t.lat = this.getRange(t.lat, -74, 74);
                    var r = this.toRadians(e.lng),
                        n = this.toRadians(e.lat),
                        o = this.toRadians(t.lng),
                        i = this.toRadians(t.lat);
                    return this.getDistance(r, o, n, i)
                }
            }, {
                key: "convertMC2LL",
                value: function (e) {
                    if (!e) return {
                        lng: 0,
                        lat: 0
                    };
                    var t = {};
                    if (this.isWgs84) {
                        t.lng = e.lng / 20037508.34 * 180;
                        var r = e.lat / 20037508.34 * 180;
                        return t.lat = 180 / Math.PI * (2 * Math.atan(Math.exp(r * Math.PI / 180)) - Math.PI / 2), {
                            lng: t.lng.toFixed(6),
                            lat: t.lat.toFixed(6)
                        }
                    }
                    Math.abs(e.lng);
                    for (var n = Math.abs(e.lat), o = void 0, i = 0; i < y.length; i++)
                        if (n >= y[i]) {
                            o = g[i];
                            break
                        } return {
                        lng: (t = this.convertor(e, o)).lng.toFixed(6),
                        lat: t.lat.toFixed(6)
                    }
                }
            }, {
                key: "convertLL2MC",
                value: function (e) {
                    if (!e) return {
                        lng: 0,
                        lat: 0
                    };
                    if (e.lng > 180 || e.lng < -180 || e.lat > 90 || e.lat < -90) return e;
                    if (this.isWgs84) {
                        var t = {};
                        t.lng = e.lng * Math.PI / 180 * 6378137;
                        var r = e.lat * Math.PI / 180;
                        return t.lat = 3189068.5 * Math.log((1 + Math.sin(r)) / (1 - Math.sin(r))), {
                            lng: parseFloat(t.lng.toFixed(2)),
                            lat: parseFloat(t.lat.toFixed(2))
                        }
                    }
                    e.lng = this.getLoop(e.lng, -180, 180), e.lat = this.getRange(e.lat, -74, 74);
                    e.lng;
                    for (var n = e.lat, o = void 0, i = 0; i < p.length; i++)
                        if (n >= p[i]) {
                            o = m[i];
                            break
                        } if (!o)
                        for (var a = 0; a < p.length; a++)
                            if (n <= -p[a]) {
                                o = m[a];
                                break
                            } var s = this.convertor(e, o);
                    return {
                        lng: parseFloat(s.lng.toFixed(2)),
                        lat: parseFloat(s.lat.toFixed(2))
                    }
                }
            }, {
                key: "convertor",
                value: function (e, t) {
                    if (!e || !t) return {
                        lng: 0,
                        lat: 0
                    };
                    var r = t[0] + t[1] * Math.abs(e.lng),
                        n = Math.abs(e.lat) / t[9],
                        o = t[2] + t[3] * n + t[4] * n * n + t[5] * n * n * n + t[6] * n * n * n * n + t[7] * n * n * n * n * n + t[8] * n * n * n * n * n * n;
                    return {
                        lng: r *= e.lng < 0 ? -1 : 1,
                        lat: o *= e.lat < 0 ? -1 : 1
                    }
                }
            }, {
                key: "getDistance",
                value: function (e, t, r, n) {
                    return 6370996.81 * Math.acos(Math.sin(r) * Math.sin(n) + Math.cos(r) * Math.cos(n) * Math.cos(t - e))
                }
            }, {
                key: "toRadians",
                value: function (e) {
                    return Math.PI * e / 180
                }
            }, {
                key: "toDegrees",
                value: function (e) {
                    return 180 * e / Math.PI
                }
            }, {
                key: "getRange",
                value: function (e, t, r) {
                    return null != t && (e = Math.max(e, t)), null != r && (e = Math.min(e, r)), e
                }
            }, {
                key: "getLoop",
                value: function (e, t, r) {
                    for (; e > r;) e -= r - t;
                    for (; e < t;) e += r - t;
                    return e
                }
            }, {
                key: "lngLatToMercator",
                value: function (e) {
                    return this.convertLL2MC(e)
                }
            }, {
                key: "lngLatToPoint",
                value: function (e) {
                    var t = this.convertLL2MC(e);
                    return {
                        x: t.lng,
                        y: t.lat
                    }
                }
            }, {
                key: "mercatorToLngLat",
                value: function (e) {
                    return this.convertMC2LL(e)
                }
            }, {
                key: "pointToLngLat",
                value: function (e) {
                    var t = {
                        lng: e.x,
                        lat: e.y
                    };
                    return this.convertMC2LL(t)
                }
            }, {
                key: "pointToPixel",
                value: function (e, t, r, n) {
                    if (e) {
                        e = this.lngLatToMercator(e);
                        var o = this.getZoomUnits(t);
                        return {
                            x: Math.round((e.lng - r.lng) / o + n.width / 2),
                            y: Math.round((r.lat - e.lat) / o + n.height / 2)
                        }
                    }
                }
            }, {
                key: "pixelToPoint",
                value: function (e, t, r, n) {
                    if (e) {
                        var o = this.getZoomUnits(t),
                            i = {
                                lng: r.lng + o * (e.x - n.width / 2),
                                lat: r.lat - o * (e.y - n.height / 2)
                            };
                        return this.mercatorToLngLat(i)
                    }
                }
            }, {
                key: "getZoomUnits",
                value: function (e) {
                    return Math.pow(2, 18 - e)
                }
            }]), e
        }(),
        d = 52.35987755982988,
        x = 3.141592653589793,
        M = .006693421622965943,
        b = function () {
            function e() {
                o()(this, e)
            }
            return a()(e, null, [{
                key: "BD09ToGCJ02",
                value: function (e, t) {
                    var r = +e - .0065,
                        n = +t - .006,
                        o = Math.sqrt(r * r + n * n) - 2e-5 * Math.sin(n * d),
                        i = Math.atan2(n, r) - 3e-6 * Math.cos(r * d);
                    return [o * Math.cos(i), o * Math.sin(i)]
                }
            }, {
                key: "GCJ02ToBD09",
                value: function (e, t) {
                    t = +t, e = +e;
                    var r = Math.sqrt(e * e + t * t) + 2e-5 * Math.sin(t * d),
                        n = Math.atan2(t, e) + 3e-6 * Math.cos(e * d);
                    return [r * Math.cos(n) + .0065, r * Math.sin(n) + .006]
                }
            }, {
                key: "WGS84ToGCJ02",
                value: function (e, t) {
                    if (t = +t, e = +e, this.out_of_china(e, t)) return [e, t];
                    var r = this.delta(e, t);
                    return [e + r[0], t + r[1]]
                }
            }, {
                key: "GCJ02ToWGS84",
                value: function (e, t) {
                    if (t = +t, e = +e, this.out_of_china(e, t)) return [e, t];
                    var r = this.delta(e, t);
                    return [2 * e - (e + r[0]), 2 * t - (t + r[1])]
                }
            }, {
                key: "delta",
                value: function (e, t) {
                    var r = this.transformLng(e - 105, t - 35),
                        n = this.transformLat(e - 105, t - 35),
                        o = t / 180 * x,
                        i = Math.sin(o);
                    i = 1 - M * i * i;
                    var a = Math.sqrt(i);
                    return [r = 180 * r / (6378245 / a * Math.cos(o) * x), n = 180 * n / (6378245 * (1 - M) / (i * a) * x)]
                }
            }, {
                key: "transformLng",
                value: function (e, t) {
                    var r = 300 + (e = +e) + 2 * (t = +t) + .1 * e * e + .1 * e * t + .1 * Math.sqrt(Math.abs(e));
                    return r += 2 * (20 * Math.sin(6 * e * x) + 20 * Math.sin(2 * e * x)) / 3, r += 2 * (20 * Math.sin(e * x) + 40 * Math.sin(e / 3 * x)) / 3, r += 2 * (150 * Math.sin(e / 12 * x) + 300 * Math.sin(e / 30 * x)) / 3
                }
            }, {
                key: "transformLat",
                value: function (e, t) {
                    var r = 2 * (e = +e) - 100 + 3 * (t = +t) + .2 * t * t + .1 * e * t + .2 * Math.sqrt(Math.abs(e));
                    return r += 2 * (20 * Math.sin(6 * e * x) + 20 * Math.sin(2 * e * x)) / 3, r += 2 * (20 * Math.sin(t * x) + 40 * Math.sin(t / 3 * x)) / 3, r += 2 * (160 * Math.sin(t / 12 * x) + 320 * Math.sin(t * x / 30)) / 3
                }
            }, {
                key: "out_of_china",
                value: function (e, t) {
                    return t = +t, !((e = +e) > 73.66 && e < 135.05 && t > 3.86 && t < 53.55)
                }
            }]), e
        }();

    function C(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var _ = function (e) {
            u()(r, e);
            var t = C(r);

            function r(e) {
                var n;
                o()(this, r), n = t.call(this, e);
                var i = new v;
                return n._projection.project = function (e, t) {
                    return t = t || {}, t = b.WGS84ToGCJ02(Cesium.Math.toDegrees(e.longitude), Cesium.Math.toDegrees(e.latitude)), (t = b.GCJ02ToBD09(t[0], t[1]))[0] = Math.min(t[0], 180), t[0] = Math.max(t[0], -180), t[1] = Math.min(t[1], 74.000022), t[1] = Math.max(t[1], -71.988531), t = i.lngLatToPoint({
                        lng: t[0],
                        lat: t[1]
                    }), new Cesium.Cartesian2(t.x, t.y)
                }, n._projection.unproject = function (e, t) {
                    return t = t || {}, t = i.mercatorToLngLat({
                        lng: e.x,
                        lat: e.y
                    }), t = b.BD09ToGCJ02(t.lng, t.lat), t = b.GCJ02ToWGS84(t[0], t[1]), new Cesium.Cartographic(Cesium.Math.toRadians(t[0]), Cesium.Math.toRadians(t[1]))
                }, n.resolutions = e.resolutions || [], n
            }
            return a()(r, [{
                key: "tileXYToNativeRectangle",
                value: function (e, t, r, n) {
                    var o = this.resolutions[r],
                        i = e * o,
                        a = (e + 1) * o,
                        s = (1 + (t = -t)) * o,
                        u = t * o;
                    return Cesium.defined(n) ? (n.west = i, n.south = u, n.east = a, n.north = s, n) : new Cesium.Rectangle(i, u, a, s)
                }
            }, {
                key: "positionToTileXY",
                value: function (e, t, r) {
                    var n = this._rectangle;
                    if (Cesium.Rectangle.contains(n, e)) {
                        var o = this._projection.project(e);
                        if (Cesium.defined(o)) {
                            var i = this.resolutions[t],
                                a = Math.floor(o.x / i),
                                s = -Math.floor(o.y / i);
                            return Cesium.defined(r) ? (r.x = a, r.y = s, r) : new Cesium.Cartesian2(a, s)
                        }
                    }
                }
            }]), r
        }(Cesium.WebMercatorTilingScheme),
        w = {
            img: "//shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46",
            vec: "//online{s}.map.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=sl&v=020",
            custom: "//api{s}.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&scale=1&customid={style}",
            traffic: "//its.map.baidu.com:8002/traffic/TrafficTileService?time={time}&label={labelStyle}&v=016&level={z}&x={x}&y={y}&scaler=2"
        },
        R = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (o()(this, e), this._url = t.url || [t.protocol || "", w[t.style] || w.custom].join(""), this._tileWidth = 256, this._tileHeight = 256, this._maximumLevel = 18, this._crs = t.crs || "BD09", "WGS84" === t.crs) {
                    for (var r = [], n = 0; n < 19; n++) r[n] = 256 * Math.pow(2, 18 - n);
                    this._tilingScheme = new _({
                        resolutions: r,
                        rectangleSouthwestInMeters: new Cesium.Cartesian2(-20037726.37, -12474104.17),
                        rectangleNortheastInMeters: new Cesium.Cartesian2(20037726.37, 12474104.17)
                    })
                } else this._tilingScheme = new Cesium.WebMercatorTilingScheme({
                    rectangleSouthwestInMeters: new Cesium.Cartesian2(-33554054, -33746824),
                    rectangleNortheastInMeters: new Cesium.Cartesian2(33554054, 33746824)
                });
                this._rectangle = this._tilingScheme.rectangle, this._credit = void 0, this._style = t.style || "normal", this._errorEvent = new Cesium.Event
            }
            return a()(e, [{
                key: "url",
                get: function () {
                    return this._url
                }
            }, {
                key: "token",
                get: function () {
                    return this._token
                }
            }, {
                key: "tileWidth",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("tileWidth must not be called before the imagery provider is ready.");
                    return this._tileWidth
                }
            }, {
                key: "tileHeight",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("tileHeight must not be called before the imagery provider is ready.");
                    return this._tileHeight
                }
            }, {
                key: "maximumLevel",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("maximumLevel must not be called before the imagery provider is ready.");
                    return this._maximumLevel
                }
            }, {
                key: "minimumLevel",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("minimumLevel must not be called before the imagery provider is ready.");
                    return 0
                }
            }, {
                key: "tilingScheme",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("tilingScheme must not be called before the imagery provider is ready.");
                    return this._tilingScheme
                }
            }, {
                key: "rectangle",
                get: function () {
                    if (!this.ready) throw new Cesium.DeveloperError("rectangle must not be called before the imagery provider is ready.");
                    return this._rectangle
                }
            }, {
                key: "ready",
                get: function () {
                    return !!this._url
                }
            }, {
                key: "errorEvent",
                get: function () {
                    return this._errorEvent
                }
            }, {
                key: "credit",
                get: function () {
                    return this._credit
                }
            }, {
                key: "hasAlphaChannel",
                get: function () {
                    return !0
                }
            }, {
                key: "getTileCredits",
                value: function (e, t, r) {}
            }, {
                key: "requestImage",
                value: function (e, t, r) {
                    if (!this.ready) throw new Cesium.DeveloperError("requestImage must not be called before the imagery provider is ready.");
                    var n = this._tilingScheme.getNumberOfXTilesAtLevel(r),
                        o = this._tilingScheme.getNumberOfYTilesAtLevel(r),
                        i = this._url.replace("{z}", r).replace("{s}", String(1)).replace("{style}", this._style);
                    return i = "WGS84" === this._crs ? i.replace("{x}", String(e)).replace("{y}", String(-t)) : i.replace("{x}", String(e - n / 2)).replace("{y}", String(o / 2 - t - 1)), Cesium.ImageryProvider.loadImage(this, i)
                }
            }]), e
        }();

    function k(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var L = function (e) {
        u()(r, e);
        var t = k(r);

        function r(e) {
            var n;
            o()(this, r), n = t.call(this, e);
            var i = new Cesium.WebMercatorProjection;
            return n._projection.project = function (e, t) {
                return t = b.WGS84ToGCJ02(Cesium.Math.toDegrees(e.longitude), Cesium.Math.toDegrees(e.latitude)), t = i.project(new Cesium.Cartographic(Cesium.Math.toRadians(t[0]), Cesium.Math.toRadians(t[1]))), new Cesium.Cartesian2(t.x, t.y)
            }, n._projection.unproject = function (e, t) {
                var r = i.unproject(e);
                return t = b.GCJ02ToWGS84(Cesium.Math.toDegrees(r.longitude), Cesium.Math.toDegrees(r.latitude)), new Cesium.Cartographic(Cesium.Math.toRadians(t[0]), Cesium.Math.toRadians(t[1]))
            }, n
        }
        return a()(r)
    }(Cesium.WebMercatorTilingScheme);

    function T(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var S = {
            img: "//webst{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
            elec: "//webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
            cva: "//webst{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
        },
        P = function (e) {
            u()(r, e);
            var t = T(r);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o()(this, r), e.url = e.url || [e.protocol || "", S[e.style] || S.elec].join(""), e.subdomains && e.subdomains.length || (e.subdomains = ["01", "02", "03", "04"]), "WGS84" === e.crs && (e.tilingScheme = new L), t.call(this, e)
            }
            return a()(r)
        }(Cesium.UrlTemplateImageryProvider);

    function j(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var z = {
            img: "//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{reverseY}.jpg?version=400",
            elec: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={reverseY}&styleid={style}&scene=0&version=347"
        },
        O = function (e) {
            u()(r, e);
            var t = j(r);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                o()(this, r);
                var n = e.url || [e.protocol || "", z[e.style] || z.elec].join("");
                return e.url = n.replace("{style}", e.style || 1), e.subdomains && e.subdomains.length || (e.subdomains = ["0", "1", "2"]), "img" === e.style && (e.customTags = {
                    sx: function (e, t, r, n) {
                        return t >> 4
                    },
                    sy: function (e, t, r, n) {
                        return (1 << n) - r >> 4
                    }
                }), t.call(this, e)
            }
            return a()(r)
        }(Cesium.UrlTemplateImageryProvider);

    function D(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var I = "//t{s}.tianditu.gov.cn/DataServer?T={style}_c&x={x}&y={y}&l={z}&tk={key}",
        G = function (e) {
            u()(r, e);
            var t = D(r);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o()(this, r), t.call(this, {
                    url: [e.protocol || "", I.replace(/\{style\}/g, e.style || "vec").replace(/\{key\}/g, e.key || "")].join(""),
                    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
                    maximumLevel: 18
                })
            }
            return a()(r)
        }(Cesium.UrlTemplateImageryProvider);

    function B(e) {
        var t = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function () {
            var r, n = h()(e);
            if (t) {
                var o = h()(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return c()(this, r)
        }
    }
    var W = {
            img: "//mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali",
            elec: "//mt{s}.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile",
            ter: "//mt{s}.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}&s=Galile"
        },
        E = function (e) {
            u()(r, e);
            var t = B(r);

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return o()(this, r), e.url || [e.protocol || "", W[e.style] || W.elec].join(""), e.subdomains = e.subdomains || ["1", "2", "3"], t.call(this, e)
            }
            return a()(r)
        }(Cesium.UrlTemplateImageryProvider);
    Cesium.AmapImageryProvider = P, Cesium.BaiduImageryProvider = R, Cesium.TencentImageryProvider = O, Cesium.TdtImageryProvider = G, Cesium.GoogleImageryProvider = E
}]);