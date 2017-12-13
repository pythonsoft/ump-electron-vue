/**
 * Created by steven on 2017/11/12.
 */
const config = {};

config.baseDomain = (process.env.NODE_ENV !== 'development') ? 'http://ump.phoenixtv.com' : 'localhost:8080';
// config.baseDomain = '10.0.16.107:8080';

config.streamURL = 'http://ump-live.phoenixtv.com';
// config.streamURL = 'http://10.0.15.68:8099';

if (window.location.hostname.indexOf('phoenixtv.com') !== -1) {
  config.baseDomain = 'ump-api.phoenixtv.com';
}

config.baseURL = `http://${config.baseDomain}`;

module.exports = config;
