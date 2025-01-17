"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    // url: env('PUBLIC_URL', 'http://strapi-backend-app-xkrjbm-3bac21-206-81-26-245.traefik.me'),
    app: {
        keys: env.array('APP_KEYS'),
    },
});
