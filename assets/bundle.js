/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/doc/js/bundle.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/doc/js/bundle.ts":
/*!******************************!*\
  !*** ./src/doc/js/bundle.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(/*! ./route/index */ "./src/doc/js/route/index.ts");
var input_1 = __webpack_require__(/*! ./route/input */ "./src/doc/js/route/input.ts");
var misc_1 = __webpack_require__(/*! ./route/misc */ "./src/doc/js/route/misc.ts");
var monitor_1 = __webpack_require__(/*! ./route/monitor */ "./src/doc/js/route/monitor.ts");
var simple_router_1 = __webpack_require__(/*! ./simple-router */ "./src/doc/js/simple-router.ts");
(function () {
    var router = new simple_router_1.default();
    router.add(index_1.default);
    router.add(input_1.default);
    router.add(misc_1.default);
    router.add(monitor_1.default);
    router.route(location.pathname);
    var markElem = document.querySelector('.common-logo_symbol');
    if (markElem) {
        window.addEventListener('scroll', function () {
            var angle = window.scrollY * 0.5;
            markElem.style.transform = "rotate(" + angle + "deg)";
        });
    }
    hljs.initHighlightingOnLoad();
})();


/***/ }),

/***/ "./src/doc/js/route/index.ts":
/*!***********************************!*\
  !*** ./src/doc/js/route/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sketch_1 = __webpack_require__(/*! ../sketch */ "./src/doc/js/sketch.ts");
var Util = __webpack_require__(/*! ../util */ "./src/doc/js/util.ts");
exports.default = {
    pathname: /^(\/tweakpane)?\/$/,
    init: function () {
        var ENV = {
            color: '#e4e4e7',
            maxSize: 64,
            range: 0.8,
            spacing: 24,
            speed: 0.02,
            title: 'Tweakpane',
            xamp: 0.1,
            xfreq: 2 * Math.PI * 2,
            yamp: 0.5,
            yfreq: 2 * Math.PI,
        };
        var PRESETS = {
            atmos: {
                color: '#e4e4e7',
                maxSize: 128,
                range: 0.7934782608695652,
                spacing: 24,
                speed: 0.02,
                title: 'Tweakpane',
                xamp: 0.10434782608695652,
                xfreq: 45,
                yamp: 0.53,
                yfreq: 16,
            },
            bubble: {
                color: '#ffffff',
                maxSize: 128,
                range: 0.65,
                spacing: 48,
                speed: 0.02,
                title: 'Tweakpane',
                xamp: 0.3,
                xfreq: 64,
                yamp: 0.51,
                yfreq: 32,
            },
            cloud: {
                color: '#e4e4e7',
                maxSize: 105,
                range: 0.63,
                spacing: 48,
                speed: 0.02,
                title: 'Tweakpane',
                xamp: 0.07,
                xfreq: 22.25,
                yamp: 0,
                yfreq: 0,
            },
        };
        var HIDDEN_PARAMS = {
            presetId: '',
            presetJson: '',
        };
        var sketchElem = document.querySelector('.common-pageHeader_sketchContainer');
        if (!sketchElem) {
            return;
        }
        var sketch = new sketch_1.default(sketchElem, ENV);
        var markerToFnMap = {
            index: function (container) {
                var pane = new Tweakpane({
                    container: container,
                    title: 'Tweakpane',
                });
                pane.addInput(ENV, 'title').on('change', function (value) {
                    var titleElem = document.querySelector('.common-pageHeader_title');
                    if (titleElem) {
                        titleElem.textContent = value;
                    }
                });
                pane.addInput(ENV, 'color');
                pane.addSeparator();
                pane.addInput(ENV, 'spacing', {
                    max: 48,
                    min: 24,
                });
                pane.addInput(ENV, 'range', {
                    max: 1,
                    min: 0,
                });
                pane.addInput(ENV, 'maxSize', {
                    max: 128,
                    min: 5,
                });
                var xf = pane.addFolder({
                    expanded: false,
                    title: 'X',
                });
                xf.addInput(ENV, 'xfreq', {
                    max: 64,
                    min: 0,
                });
                xf.addInput(ENV, 'xamp', {
                    max: 0.3,
                    min: 0,
                });
                var yf = pane.addFolder({
                    expanded: false,
                    title: 'Y',
                });
                yf.addInput(ENV, 'yfreq', {
                    max: 32,
                    min: 0,
                });
                yf.addInput(ENV, 'yamp', {
                    max: 1,
                    min: 0,
                });
                var pf = pane.addFolder({
                    expanded: false,
                    title: 'Preset',
                });
                pf.addInput(HIDDEN_PARAMS, 'presetId', {
                    label: 'preset',
                    options: {
                        'Import...': '',
                        Atmos: 'atmos',
                        Bubble: 'bubble',
                        Cloud: 'cloud',
                    },
                }).on('change', function (value) {
                    var preset = PRESETS[value];
                    if (preset) {
                        HIDDEN_PARAMS.presetId = '';
                        pane.importPreset(preset);
                    }
                });
                pf.addMonitor(HIDDEN_PARAMS, 'presetJson', {
                    label: 'data',
                    multiline: true,
                });
                pane.on('change', function () {
                    sketch.reset();
                    HIDDEN_PARAMS.presetJson = JSON.stringify(pane.exportPreset(), null, 2);
                });
                pane.on('fold', function () {
                    sketch.resize();
                    setTimeout(function () {
                        sketch.resize();
                    }, 200);
                });
            },
            first: function (container) {
                var PARAMS = { speed: 0.5 };
                var pane = new Tweakpane({
                    container: container,
                });
                var updatePreset = function () {
                    var elem = document.querySelector('*[data-first]');
                    if (elem) {
                        var preset = pane.exportPreset();
                        elem.textContent =
                            'PARAMS = ' + JSON.stringify(preset, null, 2) + ';';
                    }
                };
                pane.addInput(PARAMS, 'speed').on('change', updatePreset);
                updatePreset();
            },
        };
        Object.keys(markerToFnMap).forEach(function (marker) {
            var initFn = markerToFnMap[marker];
            var container = Util.selectContainer(marker);
            initFn(container);
        });
        sketch.resize();
    },
};


/***/ }),

/***/ "./src/doc/js/route/input.ts":
/*!***********************************!*\
  !*** ./src/doc/js/route/input.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:object-literal-sort-keys
var Util = __webpack_require__(/*! ../util */ "./src/doc/js/util.ts");
exports.default = {
    pathname: /^(\/tweakpane)?\/input.html$/,
    init: function () {
        var markerToFnMap = {
            input: function (container) {
                var PARAMS = {
                    b: true,
                    c: '#ff8800',
                    n: 50,
                    s: 'string',
                };
                var pane = new Tweakpane({
                    container: container,
                });
                var nf = pane.addFolder({
                    title: 'Number',
                });
                nf.addInput(PARAMS, 'n', {
                    label: 'text',
                });
                nf.addInput(PARAMS, 'n', {
                    label: 'slider',
                    max: 100,
                    min: 0,
                });
                nf.addInput(PARAMS, 'n', {
                    label: 'list',
                    options: {
                        low: 0,
                        medium: 50,
                        high: 100,
                    },
                });
                var sf = pane.addFolder({
                    title: 'String',
                });
                sf.addInput(PARAMS, 's', {
                    label: 'text',
                });
                sf.addInput(PARAMS, 's', {
                    label: 'list',
                    options: {
                        dark: 'Dark',
                        light: 'Light',
                    },
                });
                var bf = pane.addFolder({
                    title: 'Boolean',
                });
                bf.addInput(PARAMS, 'b', {
                    label: 'checkbox',
                });
                var cf = pane.addFolder({
                    title: 'Color',
                });
                cf.addInput(PARAMS, 'c', {
                    label: 'text',
                });
            },
            numberText: function (container) {
                var PARAMS = { value: 50 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'text',
                });
            },
            slider: function (container) {
                var PARAMS = { value: 50 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'slider',
                    max: 100,
                    min: 0,
                });
            },
            step: function (container) {
                var PARAMS = {
                    speed: 0.5,
                    count: 10,
                };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'speed', {
                    step: 0.1,
                });
                pane.addInput(PARAMS, 'count', {
                    label: 'count',
                    max: 100,
                    min: 0,
                    step: 10,
                });
            },
            numberList: function (container) {
                var PARAMS = { value: 50 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'quality',
                    options: {
                        low: 0,
                        medium: 50,
                        high: 100,
                    },
                });
                pane.addSeparator();
                pane.addMonitor(PARAMS, 'value', {
                    label: '(actual)',
                });
            },
            stringText: function (container) {
                var PARAMS = { value: 'hello, world' };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'message',
                });
            },
            stringList: function (container) {
                var PARAMS = { value: '' };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'theme',
                    options: {
                        none: '',
                        dark: 'path/to/dark.json',
                        light: 'path/to/Light.json',
                    },
                });
                pane.addSeparator();
                pane.addMonitor(PARAMS, 'value', {
                    label: '(actual)',
                });
            },
            checkbox: function (container) {
                var PARAMS = { value: true };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'hidden',
                });
            },
            color: function (container) {
                var PARAMS = { value: '#ff8800' };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'color',
                });
            },
        };
        Object.keys(markerToFnMap).forEach(function (marker) {
            var initFn = markerToFnMap[marker];
            var container = Util.selectContainer(marker);
            initFn(container);
        });
    },
};


/***/ }),

/***/ "./src/doc/js/route/misc.ts":
/*!**********************************!*\
  !*** ./src/doc/js/route/misc.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = __webpack_require__(/*! ../util */ "./src/doc/js/util.ts");
exports.default = {
    pathname: /^(\/tweakpane)?\/misc.html$/,
    init: function () {
        var IMEX_PARAMS = {
            color: '#ff8000',
            name: 'export',
            size: 10,
        };
        var markerToFnMap = {
            misc: function (container) {
                var PARAMS = { value: 0 };
                var pane = new Tweakpane({
                    container: container,
                    title: 'Global title',
                });
                pane.addInput(PARAMS, 'value', {
                    label: 'custom label',
                });
                var f = pane.addFolder({
                    title: 'Folder',
                });
                f.addButton({
                    title: 'Button1',
                });
                f.addButton({
                    title: 'Button2',
                });
                f.addSeparator();
                f.addButton({
                    title: 'Button3',
                });
            },
            folder: function (container) {
                var PARAMS = {
                    acceleration: 0,
                    randomness: 0,
                    speed: 0,
                };
                var pane = new Tweakpane({
                    container: container,
                });
                var f1 = pane.addFolder({
                    title: 'Basic',
                });
                f1.addInput(PARAMS, 'speed');
                var f2 = pane.addFolder({
                    expanded: false,
                    title: 'Advanced',
                });
                f2.addInput(PARAMS, 'acceleration');
                f2.addInput(PARAMS, 'randomness');
            },
            button: function (container) {
                var PARAMS = { count: 0 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane
                    .addButton({
                    title: 'Increment',
                })
                    .on('click', function () {
                    PARAMS.count += 1;
                });
                pane.addSeparator();
                pane.addMonitor(PARAMS, 'count');
            },
            separator: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addButton({
                    title: 'Previous',
                });
                pane.addButton({
                    title: 'Next',
                });
                pane.addSeparator();
                pane.addButton({
                    title: 'Reset',
                });
            },
            event: function (container) {
                var PARAMS = {
                    log: '',
                    value: 0,
                };
                var pane = new Tweakpane({
                    container: container,
                });
                var m = null;
                pane
                    .addInput(PARAMS, 'value', {
                    max: 100,
                    min: 0,
                })
                    .on('change', function (value) {
                    PARAMS.log = value.toFixed(2);
                    if (m) {
                        m.refresh();
                    }
                });
                pane.addSeparator();
                m = pane.addMonitor(PARAMS, 'log', {
                    count: 10,
                    interval: 0,
                    label: '(log)',
                });
            },
            globalEvent: function (container) {
                var PARAMS = {
                    log: '',
                    number: 0,
                    string: 'text',
                };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'number', {
                    max: 100,
                    min: 0,
                });
                pane.addInput(PARAMS, 'string');
                pane.addSeparator();
                var m = pane.addMonitor(PARAMS, 'log', {
                    count: 10,
                    interval: 0,
                    label: '(log)',
                });
                pane.on('change', function (value) {
                    var v = typeof value === 'number' ? value.toFixed(2) : value;
                    PARAMS.log = "changed: " + v;
                    m.refresh();
                });
            },
            export: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(IMEX_PARAMS, 'name');
                pane.addInput(IMEX_PARAMS, 'size', {
                    max: 100,
                    min: 0,
                });
                pane.addInput(IMEX_PARAMS, 'color');
                var updatePreset = function () {
                    var preset = pane.exportPreset();
                    var elems = Array.prototype.slice.call(document.querySelectorAll('*[data-imex]'));
                    elems.forEach(function (elem) {
                        if (elem) {
                            elem.textContent = JSON.stringify(preset, null, 2);
                        }
                    });
                };
                pane.on('change', updatePreset);
                updatePreset();
            },
            import: function (container) {
                var PARAMS = {
                    color: '#0080ff',
                    name: 'import',
                    size: 50,
                };
                var pane = new Tweakpane({
                    container: container,
                });
                pane
                    .addButton({
                    title: 'Import',
                })
                    .on('click', function () {
                    pane.importPreset(IMEX_PARAMS);
                });
                pane.addSeparator();
                pane.addInput(PARAMS, 'name');
                pane.addInput(PARAMS, 'size');
                pane.addInput(PARAMS, 'color');
            },
            presetKey: function (container) {
                var PARAMS1 = { speed: 1 / 3 };
                var PARAMS2 = { speed: 2 / 3 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS1, 'speed', {
                    max: 1,
                    min: 0,
                });
                pane.addInput(PARAMS2, 'speed', {
                    max: 1,
                    min: 0,
                    presetKey: 'speed2',
                });
                var updatePreset = function () {
                    var elem = document.querySelector('*[data-presetKey]');
                    if (elem) {
                        var preset = pane.exportPreset();
                        elem.textContent = JSON.stringify(preset, null, 2);
                    }
                };
                pane.on('change', updatePreset);
                updatePreset();
            },
            rootTitle: function (container) {
                var PARAMS = {
                    bounce: 0.5,
                    gravity: 0.01,
                    speed: 0.1,
                };
                var pane = new Tweakpane({
                    container: container,
                    title: 'Parameters',
                });
                pane.addInput(PARAMS, 'speed', {
                    max: 1,
                    min: 0,
                });
                var f = pane.addFolder({
                    title: 'Advanced',
                });
                f.addInput(PARAMS, 'gravity', {
                    max: 1,
                    min: 0,
                });
                f.addInput(PARAMS, 'bounce', {
                    max: 1,
                    min: 0,
                });
            },
            label: function (container) {
                var PARAMS = { initSpd: 0 };
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addInput(PARAMS, 'initSpd', {
                    label: 'Initial speed',
                });
            },
        };
        Object.keys(markerToFnMap).forEach(function (marker) {
            var initFn = markerToFnMap[marker];
            var container = Util.selectContainer(marker);
            initFn(container);
        });
    },
};


/***/ }),

/***/ "./src/doc/js/route/monitor.ts":
/*!*************************************!*\
  !*** ./src/doc/js/route/monitor.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Util = __webpack_require__(/*! ../util */ "./src/doc/js/util.ts");
exports.default = {
    pathname: /^(\/tweakpane)?\/monitor.html$/,
    init: function () {
        var SHARED_PARAMS = {
            positive: false,
            time: '',
            wave: 0,
        };
        var updateTime = function () {
            var matches = String(new Date()).match(/\d{2}:\d{2}:\d{2}/);
            SHARED_PARAMS.time = (matches && matches[0]) || '';
        };
        setInterval(updateTime, 1000);
        updateTime();
        var wavep = 0;
        setInterval(function () {
            SHARED_PARAMS.wave =
                ((3 * 4) / Math.PI) *
                    (Math.sin(wavep * 1 * Math.PI) +
                        Math.sin(wavep * 3 * Math.PI) / 3 +
                        Math.sin(wavep * 5 * Math.PI) / 5) *
                    0.25;
            SHARED_PARAMS.positive = SHARED_PARAMS.wave >= 0;
            wavep += 0.02;
        }, 50);
        var markerToFnMap = {
            monitor: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                var nf = pane.addFolder({
                    title: 'Number',
                });
                nf.addMonitor(SHARED_PARAMS, 'wave', {
                    label: 'text',
                });
                nf.addMonitor(SHARED_PARAMS, 'wave', {
                    count: 10,
                    label: 'multiline',
                });
                nf.addMonitor(SHARED_PARAMS, 'wave', {
                    label: 'graph',
                    max: +1,
                    min: -1,
                    type: 'graph',
                });
                nf.addMonitor(SHARED_PARAMS, 'positive', {
                    label: 'positive',
                });
            },
            multiline: function (container) {
                var PARAMS = { params: '' };
                var pane = new Tweakpane({
                    container: container,
                });
                pane
                    .addMonitor(PARAMS, 'params', {
                    multiline: true,
                })
                    .on('update', function () {
                    PARAMS.params = JSON.stringify(SHARED_PARAMS, null, 2);
                });
            },
            count: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addMonitor(SHARED_PARAMS, 'wave', {
                    count: 10,
                });
            },
            interval: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addMonitor(SHARED_PARAMS, 'time', {
                    interval: 1000,
                });
            },
            graph: function (container) {
                var pane = new Tweakpane({
                    container: container,
                });
                pane.addMonitor(SHARED_PARAMS, 'wave', {
                    max: +1,
                    min: -1,
                    type: 'graph',
                });
            },
        };
        Object.keys(markerToFnMap).forEach(function (marker) {
            var initFn = markerToFnMap[marker];
            var container = Util.selectContainer(marker);
            initFn(container);
        });
    },
};


/***/ }),

/***/ "./src/doc/js/simple-router.ts":
/*!*************************************!*\
  !*** ./src/doc/js/simple-router.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SimpleRouter = /** @class */ (function () {
    function SimpleRouter() {
        this.routes_ = [];
    }
    SimpleRouter.prototype.add = function (route) {
        this.routes_.push(route);
    };
    SimpleRouter.prototype.route = function (pathname) {
        this.routes_.forEach(function (route) {
            if (route.pathname.test(pathname)) {
                route.init();
            }
        });
    };
    return SimpleRouter;
}());
exports.default = SimpleRouter;


/***/ }),

/***/ "./src/doc/js/sketch.ts":
/*!******************************!*\
  !*** ./src/doc/js/sketch.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function map(v, s1, e1, s2, e2) {
    return s2 + ((v - s1) / (e1 - s1)) * (e2 - s2);
}
function dist(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
var DEFAULT_DOT_SIZE = 20;
var Sketch = /** @class */ (function () {
    function Sketch(element, env) {
        var _this = this;
        this.elem_ = element;
        this.env_ = env;
        this.dots_ = [];
        this.t_ = 0;
        this.app_ = new PIXI.Application({
            transparent: true,
        });
        this.elem_.appendChild(this.app_.renderer.view);
        window.addEventListener('resize', function () {
            _this.resize();
        });
        this.resize();
        this.app_.ticker.add(function () {
            _this.onTick_();
        });
    }
    Sketch.prototype.reset = function () {
        var w = this.width_;
        var h = this.height_;
        var env = this.env_;
        var g = new PIXI.Graphics();
        var color = parseInt(env.color.substring(1), 16);
        g.beginFill(color)
            .drawCircle(0, 0, DEFAULT_DOT_SIZE)
            .endFill();
        var tex = g.generateCanvasTexture();
        this.app_.stage.removeChildren();
        this.dots_ = [];
        var xstep = env.spacing;
        var ystep = (xstep * Math.sqrt(3)) / 2;
        var xcount = Math.ceil(w / xstep);
        var ycount = Math.ceil(h / ystep);
        for (var iy = 0; iy <= ycount; iy++) {
            for (var ix = 0; ix <= xcount; ix++) {
                var dot = new PIXI.Sprite(tex);
                dot.anchor.set(0.5, 0.5);
                dot.en = 0;
                dot.x = (ix + (iy % 2 === 0 ? 0 : 0.5)) * xstep;
                dot.y = iy * ystep;
                this.app_.stage.addChild(dot);
                this.dots_.push(dot);
            }
        }
    };
    Sketch.prototype.resize = function () {
        var rect = this.elem_.getBoundingClientRect();
        this.height_ = rect.height;
        this.width_ = rect.width;
        this.app_.renderer.resize(this.width_, this.height_);
        this.reset();
    };
    Sketch.prototype.onTick_ = function () {
        var w = this.width_;
        var h = this.height_;
        var env = this.env_;
        this.dots_.forEach(function (dot) {
            dot.en = 0;
        });
        this.t_ -= env.speed;
        var t = this.t_;
        var _loop_1 = function (iw) {
            var p = map(iw, 0, 100, 0, 1);
            var wx = p * w + Math.sin(p * env.xfreq + t) * env.xamp * w;
            var py = Math.sin(t + p * env.yfreq);
            var wy = h / 2 + py * env.yamp * h;
            this_1.dots_.forEach(function (dot) {
                var d = dist(dot.x, dot.y, wx, wy);
                dot.en += Math.pow(env.range, d * 0.1);
            });
        };
        var this_1 = this;
        for (var iw = 0; iw <= 100; iw++) {
            _loop_1(iw);
        }
        this.dots_.forEach(function (dot) {
            var sz = ((1 - Math.pow(0.9, dot.en)) * env.maxSize) / DEFAULT_DOT_SIZE;
            dot.scale.set(sz);
        });
    };
    return Sketch;
}());
exports.default = Sketch;


/***/ }),

/***/ "./src/doc/js/util.ts":
/*!****************************!*\
  !*** ./src/doc/js/util.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function selectContainer(marker) {
    return document.querySelector(".common-paneContainer-" + marker);
}
exports.selectContainer = selectContainer;


/***/ })

/******/ });