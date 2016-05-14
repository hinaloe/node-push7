import Request from "request-promise"

const packagejson = require('../package.json');

const {version} = packagejson;

/**
 * Push7 API Client
 */
export class Push7 {

    /**
     *
     * @param {{host:string, appno:string, apikey:string, endpoint:string, useragent: string}} param
     */
    constructor({
        host='api.push7.jp',
        appno,
        apikey,
        endpoint='https://:host/api/v1/:appno/:endpoint',
        useragent='Node-Push7 Client/' + version,
    }) {
        /** @type {string} */
        this.host = host;
        /** @type {string} */
        this.appno = appno;
        /** @type {string} */
        this.apikey = apikey;
        /** @type {string} */
        this.endpoint = endpoint;
        /**
         *
         * @type {object}
         * @property {string} User-Agent
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
    head(param = {}) {
        return Push7.get(this.reqUrl('head'), param);
    }


    /**
     * Send Push Notification
     * @param {{title:string, body:string, icon:string, url:string, apikey:string, param:object}} param
     * @return {Promise} request
     */
    send({
        title,
        body,
        icon,
        url,
        apikey,
        param = {},
    }) {
        param = Object.assign({
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
    static get(url, param) {
        return Request({
            qs: param,
            uri: url,
            headers: this.headers,
            json: true
        })
    }

    /**
     *
     * @param {string} url
     * @param {object} param
     * @return {Promise} request
     */
    static post(url, param) {
        return Request({
            method: 'POST',
            uri: url,
            body: param,
            headers: this.headers,
            json: true
        })
    }


    /**
     *
     * @param {string} endpoint
     * @return {string} full url
     */
    reqUrl(endpoint) {
        return this.endpoint.replace(':host', this.host).replace(':appno', this.appno).replace(':endpoint', endpoint);
    }

}