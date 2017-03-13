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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M141 979l710-710q19-19 45-19t45 19l710 710q19 19 13 32t-32 13h-1472q-26 0-32-13t13-32zm1459 557h-1408q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1408q26 0 45 19t19 45v256q0 26-19 45t-45 19z' }));;
}