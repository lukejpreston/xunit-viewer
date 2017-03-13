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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1504 448q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm224-288q0 249-75.5 430.5t-253.5 360.5q-81 80-195 176l-20 379q-2 16-16 26l-384 224q-7 4-16 4-12 0-23-9l-64-64q-13-14-8-32l85-276-281-281-276 85q-3 1-9 1-14 0-23-9l-64-64q-17-19-5-39l224-384q10-14 26-16l379-20q96-114 176-195 188-187 358-258t431-71q14 0 24 9.5t10 22.5z' }));;
}