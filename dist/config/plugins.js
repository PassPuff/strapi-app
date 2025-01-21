"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000
                },
            },
        },
    },
});
