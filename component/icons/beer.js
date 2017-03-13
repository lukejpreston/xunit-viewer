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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M704 896v-384h-256v256q0 53 37.5 90.5t90.5 37.5h128zm1024 448v192h-1152v-192l128-192h-128q-159 0-271.5-112.5t-112.5-271.5v-320l-64-64 32-128h480l32-128h960l32 192-64 32v800z' }));;
}