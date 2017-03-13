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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M735 1032q0-112-79.5-191.5t-191.5-79.5-191 79.5-79 191.5 79 191 191 79 191.5-79 79.5-191zm863-1q0-112-79-191t-191-79-191.5 79-79.5 191q0 113 79.5 192t191.5 79 191-79.5 79-191.5zm322-809v1348q0 44-31.5 75.5t-76.5 31.5h-1832q-45 0-76.5-31.5t-31.5-75.5v-1348q0-44 31.5-75.5t76.5-31.5h431q44 0 76 31.5t32 75.5v161h754v-161q0-44 32-75.5t76-31.5h431q45 0 76.5 31.5t31.5 75.5z' }));;
}