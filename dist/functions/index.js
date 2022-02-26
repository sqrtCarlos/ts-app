"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello = async (event) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello world, this is Carlos and this function was executed successfully!"
        }, null, 2),
    };
};
module.exports = hello;
