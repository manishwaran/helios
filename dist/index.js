module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/***/ function(module, exports) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  server: {\n    host: 'localhost',\n    port: '5000'\n  },\n  turbo: {\n    host: 'turbo01.production.indix.tv',\n    port: '9000',\n    fetchUrl: '/ondemand/fetch'\n  }\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jb25maWcvaW5kZXguanM/YzhjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHNlcnZlcjoge1xuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgIHBvcnQ6ICc1MDAwJyxcbiAgfSxcbiAgdHVyYm86IHtcbiAgICBob3N0OiAndHVyYm8wMS5wcm9kdWN0aW9uLmluZGl4LnR2JyxcbiAgICBwb3J0OiAnOTAwMCcsXG4gICAgZmV0Y2hVcmw6ICcvb25kZW1hbmQvZmV0Y2gnLFxuICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb25maWcvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFMQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/page-fetch/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _url = __webpack_require__(/*! url */ 7);\n\nvar _url2 = _interopRequireDefault(_url);\n\nvar _request = __webpack_require__(/*! request */ 6);\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _iconvLite = __webpack_require__(/*! iconv-lite */ 5);\n\nvar _iconvLite2 = _interopRequireDefault(_iconvLite);\n\nvar _config = __webpack_require__(/*! ../../config */ 0);\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PageFetcher = function () {\n  function PageFetcher() {\n    _classCallCheck(this, PageFetcher);\n\n    this.turboUrl = this.constructTurboUrl(_config2.default.turbo);\n    this.get = this.get.bind(this);\n  }\n\n  _createClass(PageFetcher, [{\n    key: 'constructTurboUrl',\n    value: function constructTurboUrl(urlComponents) {\n      return _url2.default.format({\n        protocol: 'http:',\n        hostname: urlComponents.host,\n        port: urlComponents.port,\n        pathname: urlComponents.fetchUrl\n      });\n    }\n  }, {\n    key: 'requestHTMLPage',\n    value: function requestHTMLPage(reqSettings) {\n      return new Promise(function (resolve, reject) {\n        (0, _request2.default)(reqSettings, function (error, response) {\n          if (error) return reject('Error in getting the requested page.');\n          return resolve(response);\n        });\n      });\n    }\n  }, {\n    key: 'fetchPage',\n    value: function fetchPage(siteUrl, ondemand) {\n      var url = siteUrl;\n      if (ondemand) {\n        url = this.turboUrl + '?url=' + encodeURIComponent(url);\n      }\n      var reqSettings = {\n        url: url,\n        headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.114 Safari/537.36' },\n        encoding: null\n      };\n\n      return this.requestHTMLPage(reqSettings).then(function (response) {\n        return _iconvLite2.default.decode(response.body, 'utf-8');\n      }).then(function (html) {\n        return html;\n      }).catch(function (err) {\n        console.log(err);\n        return { message: 'failed to fetch url' };\n      });\n    }\n  }, {\n    key: 'get',\n    value: function get(req, res) {\n      var siteUrl = req.query.url;\n      var ondemand = req.query.ondemand;\n      this.fetchPage(siteUrl, ondemand).then(function (response) {\n        return res.status(200).send(JSON.stringify({ response: response, message: 'HTML page fetched.' }));\n      }).catch(function (err) {\n        return res.status(500).send(JSON.stringify({ serverError: err.message }));\n      });\n    }\n  }]);\n\n  return PageFetcher;\n}();\n\nexports.default = PageFetcher;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcGFnZS1mZXRjaC9pbmRleC5qcz9iMGZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVUkwgZnJvbSAndXJsJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xuaW1wb3J0IGljb252IGZyb20gJ2ljb252LWxpdGUnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2VGZXRjaGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnR1cmJvVXJsID0gdGhpcy5jb25zdHJ1Y3RUdXJib1VybChjb25maWcudHVyYm8pO1xuICAgIHRoaXMuZ2V0ID0gdGhpcy5nZXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbnN0cnVjdFR1cmJvVXJsKHVybENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gVVJMLmZvcm1hdCh7XG4gICAgICBwcm90b2NvbDogJ2h0dHA6JyxcbiAgICAgIGhvc3RuYW1lOiB1cmxDb21wb25lbnRzLmhvc3QsXG4gICAgICBwb3J0OiB1cmxDb21wb25lbnRzLnBvcnQsXG4gICAgICBwYXRobmFtZTogdXJsQ29tcG9uZW50cy5mZXRjaFVybCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlcXVlc3RIVE1MUGFnZShyZXFTZXR0aW5ncykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXF1ZXN0KHJlcVNldHRpbmdzLCAoZXJyb3IsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIHJlamVjdCgnRXJyb3IgaW4gZ2V0dGluZyB0aGUgcmVxdWVzdGVkIHBhZ2UuJyk7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZmV0Y2hQYWdlKHNpdGVVcmwsIG9uZGVtYW5kKSB7XG4gICAgbGV0IHVybCA9IHNpdGVVcmw7XG4gICAgaWYgKG9uZGVtYW5kKSB7XG4gICAgICB1cmwgPSBgJHt0aGlzLnR1cmJvVXJsfT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQodXJsKX1gO1xuICAgIH1cbiAgICBjb25zdCByZXFTZXR0aW5ncyA9IHtcbiAgICAgIHVybCxcbiAgICAgIGhlYWRlcnM6IHsgJ1VzZXItQWdlbnQnOiAnTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMzAuMC4xNTk5LjExNCBTYWZhcmkvNTM3LjM2JyB9LFxuICAgICAgZW5jb2Rpbmc6IG51bGwsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlcXVlc3RIVE1MUGFnZShyZXFTZXR0aW5ncylcbiAgICAudGhlbihyZXNwb25zZSA9PiBpY29udi5kZWNvZGUocmVzcG9uc2UuYm9keSwgJ3V0Zi04JykpXG4gICAgLnRoZW4oaHRtbCA9PiBodG1sKVxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ2ZhaWxlZCB0byBmZXRjaCB1cmwnIH07XG4gICAgfSk7XG4gIH1cblxuICBnZXQocmVxLCByZXMpIHtcbiAgICBjb25zdCBzaXRlVXJsID0gcmVxLnF1ZXJ5LnVybDtcbiAgICBjb25zdCBvbmRlbWFuZCA9IHJlcS5xdWVyeS5vbmRlbWFuZDtcbiAgICB0aGlzLmZldGNoUGFnZShzaXRlVXJsLCBvbmRlbWFuZClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeSh7IHJlc3BvbnNlLCBtZXNzYWdlOiAnSFRNTCBwYWdlIGZldGNoZWQuJyB9KSkpXG4gICAgLmNhdGNoKGVyciA9PiByZXMuc3RhdHVzKDUwMCkuc2VuZChKU09OLnN0cmluZ2lmeSh7IHNlcnZlckVycm9yOiBlcnIubWVzc2FnZSB9KSkpO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcGFnZS1mZXRjaC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBbkRBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCI/NDY1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJvZHktcGFyc2VyXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

eval("module.exports = require(\"express\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ function(module, exports) {

eval("module.exports = require(\"path\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** external "iconv-lite" ***!
  \*****************************/
/***/ function(module, exports) {

eval("module.exports = require(\"iconv-lite\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImljb252LWxpdGVcIj82OTI1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImljb252LWxpdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJpY29udi1saXRlXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/***/ function(module, exports) {

eval("module.exports = require(\"request\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlcXVlc3RcIj80NjNkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlcXVlc3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZXF1ZXN0XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ function(module, exports) {

eval("module.exports = require(\"url\");//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiP2NhZWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidXJsXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ },
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

"use strict";
eval("'use strict';\n\nvar _path = __webpack_require__(/*! path */ 4);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _express = __webpack_require__(/*! express */ 3);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ 2);\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _config = __webpack_require__(/*! ../config */ 0);\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _pageFetch = __webpack_require__(/*! ./page-fetch */ 1);\n\nvar _pageFetch2 = _interopRequireDefault(_pageFetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar pageFetcher = new _pageFetch2.default();\napp.use('/', _express2.default.static(_path2.default.join(__dirname, '/app')));\napp.use('/:pathname', _express2.default.static(_path2.default.join(__dirname, '/app')));\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use(_bodyParser2.default.json());\n\napp.get('/helios/get-html', pageFetcher.get);\n\napp.listen(_config2.default.server.port, function () {\n  console.log('listening to host: ' + _config2.default.server.host + ' at port: ' + _config2.default.server.port);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgUGFnZUZldGNoZXIgZnJvbSAnLi9wYWdlLWZldGNoJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgcGFnZUZldGNoZXIgPSBuZXcgUGFnZUZldGNoZXIoKTtcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2FwcCcpKSk7XG5hcHAudXNlKCcvOnBhdGhuYW1lJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJy9hcHAnKSkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcblxuYXBwLmdldCgnL2hlbGlvcy9nZXQtaHRtbCcsIHBhZ2VGZXRjaGVyLmdldCk7XG5cbmFwcC5saXN0ZW4oY29uZmlnLnNlcnZlci5wb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBsaXN0ZW5pbmcgdG8gaG9zdDogJHtjb25maWcuc2VydmVyLmhvc3R9IGF0IHBvcnQ6ICR7Y29uZmlnLnNlcnZlci5wb3J0fWApO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);