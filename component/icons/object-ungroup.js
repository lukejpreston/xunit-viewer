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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M2048 768h-128v640h128v384h-384v-128h-896v128h-384v-384h128v-128h-384v128h-384v-384h128v-640h-128v-384h384v128h896v-128h384v384h-128v128h384v-128h384v384zm-256-256v128h128v-128h-128zm-640-384v128h128v-128h-128zm-1280 0v128h128v-128h-128zm128 1152v-128h-128v128h128zm1280-128h-128v128h128v-128zm-1152 0h896v-128h128v-640h-128v-128h-896v128h-128v640h128v128zm512 512v-128h-128v128h128zm1280 0v-128h-128v128h128zm-128-256v-640h-128v-128h-384v384h128v384h-384v-128h-384v128h128v128h896v-128h128z' }));;
}