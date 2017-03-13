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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M597 421v1173q0 25-12.5 42.5t-36.5 17.5q-17 0-33-8l-465-233q-21-10-35.5-33.5t-14.5-46.5v-1140q0-20 10-34t29-14q14 0 44 15l511 256q3 3 3 5zm64 101l534 866-534-266v-600zm1131 18v1054q0 25-14 40.5t-38 15.5-47-13l-441-220zm-3-120q0 3-256.5 419.5t-300.5 487.5l-390-634 324-527q17-28 52-28 14 0 26 6l541 270q4 2 4 6z' }));;
}