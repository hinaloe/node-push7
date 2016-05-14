import Request from "request-promise"

const packagejson = require('../package.json');

const {version} = packagejson;

export class Push7 {

    constructor({
        host='api.push7.jp',
        appno,
        apikey,
        endpoint='https://:host/api/v1/:appno/:endpoint',
        useragent='Node-Push7 Client/' + version,
    }) {
        /** @member {string} */
        this.host = host;
        /** @member {string} */
        this.appno = appno;
        /** @member {string} */
        this.apikey = apikey;
        /** @member {string} */
        this.endpoint = endpoint;
        this.headers = {
            'User-Agent': useragent
        };
    }


    /**
     *
     * @param param
     * @returns {Promise} request
     */
    head(param = {}) {
        return Push7.get(this.reqUrl('head'), param);
    }


    /**
     *
     * @param {string} title
     * @param {string} body
     * @param {string} icon
     * @param {string} url
     * @param {string} apikey
     * @param  param
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
     * @param {*} param
     * @return {Promise} request
     */
    static get(url, param) {
        return Request({
            qs: param,
            uri: url,
            json: true
        })
    }

    /**
     *
     * @param url
     * @param param
     * @return {Promise} request
     */
    static post(url, param) {
        return Request({
            method: 'POST',
            uri: url,
            body: param,
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