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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M832 1344v-1024q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v1024q0 14 9 23t23 9h480q14 0 23-9t9-23zm672-384v-640q0-14-9-23t-23-9h-480q-14 0-23 9t-9 23v640q0 14 9 23t23 9h480q14 0 23-9t9-23zm160-768v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z' }));;
}