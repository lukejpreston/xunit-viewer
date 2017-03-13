import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1920 384h-128v1024h128v384h-384v-128h-1280v128h-384v-384h128v-1024h-128v-384h384v128h1280v-128h384v384zm-256-256v128h128v-128h-128zm-1664 0v128h128v-128h-128zm128 1536v-128h-128v128h128zm1408-128v-128h128v-1024h-128v-128h-1280v128h-128v1024h128v128h1280zm256 128v-128h-128v128h128zm-640-1024h384v768h-896v-256h-384v-768h896v256zm-768 384h640v-512h-640v512zm1024 256v-512h-256v384h-384v128h640z' }));;
}