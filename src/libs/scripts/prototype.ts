import Vue from 'vue';
import Router from 'vue-router';
import Axios from 'axios';
import { httpConfig } from '@/config/http';
import { Service } from '../service';

Vue.prototype.$http = Axios.create(httpConfig);
Vue.prototype.$http.interceptors.request.use((request: any) => {
    request.headers = {
        ...request.headers,
        'Access-Control-Expose-Headers': 'sessionToken,freshtoken',
        'sessiontoken': localStorage.getItem('sessiontoken'),
        'freshtoken': localStorage.getItem('freshtoken'),
        'authorization': localStorage.getItem('sessiontoken'),
    }
    return request;
});
Vue.prototype.$http.interceptors.response.use((response: any) => {
    if (response && response.headers) {
        const { sessiontoken, freshtoken } = response.headers;
        localStorage.setItem('sessiontoken', sessiontoken);
        localStorage.setItem('freshtoken', freshtoken);
    }
    return response;
});
Service.prototype.http = Axios.create(httpConfig);
Service.prototype.http.interceptors.request.use((request) => {
    request.headers = {
        ...request.headers,
        'Access-Control-Expose-Headers': 'sessionToken,freshtoken',
        'sessiontoken': localStorage.getItem('sessiontoken'),
        'freshtoken': localStorage.getItem('freshtoken'),
        'authorization': localStorage.getItem('sessiontoken'),
    }
    return request;
});
Service.prototype.http.interceptors.response.use((response) => {
    if (response && response.headers) {
        const { sessiontoken, freshtoken } = response.headers;
        localStorage.setItem('sessiontoken', sessiontoken);
        localStorage.setItem('freshtoken', freshtoken);
    }
    return response;
});

const routerPush = Router.prototype.push;

Router.prototype.push = function push(location: any) {
    return (routerPush.call(this, location) as any).catch(
        (error: any) => error
    );
};
