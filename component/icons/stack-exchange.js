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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1515 1253v66q0 85-57.5 144.5t-138.5 59.5h-57l-260 269v-269h-529q-81 0-138.5-59.5t-57.5-144.5v-66h1238zm0-326v255h-1238v-255h1238zm0-328v255h-1238v-255h1238zm0-140v67h-1238v-67q0-84 57.5-143.5t138.5-59.5h846q81 0 138.5 59.5t57.5 143.5z' }));;
}