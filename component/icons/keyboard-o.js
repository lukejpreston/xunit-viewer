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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M320 1168v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm128-256v96q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h224q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm1024 512v96q0 16-16 16h-864q-16 0-16-16v-96q0-16 16-16h864q16 0 16 16zm-640-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-128-256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm384 256v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm-512-512v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm256 0v96q0 16-16 16h-96q-16 0-16-16v-96q0-16 16-16h96q16 0 16 16zm256 0v352q0 16-16 16h-224q-16 0-16-16v-96q0-16 16-16h112v-240q0-16 16-16h96q16 0 16 16zm128 752v-896h-1664v896h1664zm128-896v896q0 53-37.5 90.5t-90.5 37.5h-1664q-53 0-90.5-37.5t-37.5-90.5v-896q0-53 37.5-90.5t90.5-37.5h1664q53 0 90.5 37.5t37.5 90.5z' }));;
}