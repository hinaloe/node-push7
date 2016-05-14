'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Push7 = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var packagejson = require('../package.json');

var version = packagejson.version;

/**
 * Push7 API Client
 */

var Push7 = exports.Push7 = function () {

    /**
     *
     * @param {{host:string, appno:string, apikey:string, endpoint:string, useragent: string}} param
     */

    function Push7(_ref) {
        var _ref$host = _ref.host;
        var host = _ref$host === undefined ? 'api.push7.jp' : _ref$host;
        var appno = _ref.appno;
        var apikey = _ref.apikey;
        var _ref$endpoint = _ref.endpoint;
        var endpoint = _ref$endpoint === undefined ? 'https://:host/api/v1/:appno/:endpoint' : _ref$endpoint;
        var _ref$useragent = _ref.useragent;
        var useragent = _ref$useragent === undefined ? 'Node-Push7 Client/' + version : _ref$useragent;

        _classCallCheck(this, Push7);

        /** @type {string} API Host */
        this.host = host;
        /** @type {string} Push7 AppNo */
        this.appno = appno;
        /** @type {string} Push7 AppKey */
        this.apikey = apikey;
        /** @type {string} API Endpoint */
        this.endpoint = endpoint;
        /**
         *
         * @type {object} request Header
         * @property {string} User-Agent User Agent
         */
        this.headers = {
            'User-Agent': useragent
        };
    }

    /**
     * Get App Info
     * @param {object} param
     * @returns {Promise} request
     */


    _createClass(Push7, [{
        key: 'head',
        value: function head() {
            var param = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            return Push7.get(this.reqUrl('head'), param);
        }

        /**
         * Send Push Notification
         * @param {{title:string, body:string, icon:string, url:string, apikey:string, param:object}} param
         * @return {Promise} request
         */

    }, {
        key: 'send',
        value: function send(_ref2) {
            var title = _ref2.title;
            var body = _ref2.body;
            var icon = _ref2.icon;
            var url = _ref2.url;
            var apikey = _ref2.apikey;
            var _ref2$param = _ref2.param;
            var param = _ref2$param === undefined ? {} : _ref2$param;

            param = _extends({
                title: title,
                body: body,
                icon: icon,
                url: url,
                apikey: apikey === undefined ? this.apikey : apikey
            }, param);
            return Push7.post(this.reqUrl('send'), param);
        }

        /**
         *
         * @param {string} url
         * @param {object} param
         * @return {Promise} request
         */

    }, {
        key: 'reqUrl',


        /**
         *
         * @param {string} endpoint
         * @return {string} full url
         */
        value: function reqUrl(endpoint) {
            return this.endpoint.replace(':host', this.host).replace(':appno', this.appno).replace(':endpoint', endpoint);
        }
    }], [{
        key: 'get',
        value: function get(url, param) {
            return (0, _requestPromise2.default)({
                qs: param,
                uri: url,
                headers: this.headers,
                json: true
            });
        }

        /**
         *
         * @param {string} url
         * @param {object} param
         * @return {Promise} request
         */

    }, {
        key: 'post',
        value: function post(url, param) {
            return (0, _requestPromise2.default)({
                method: 'POST',
                uri: url,
                body: param,
                headers: this.headers,
                json: true
            });
        }
    }]);

    return Push7;
}();

//# sourceMappingURL=push7.js.map