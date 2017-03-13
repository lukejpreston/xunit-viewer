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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M987 957l13 707q-62-11-105-11-41 0-105 11l13-707q-40-69-168.5-295.5t-216.5-374.5-181-287q58 15 108 15 43 0 111-15 63 111 133.5 229.5t167 276.5 138.5 227q37-61 109.5-177.5t117.5-190 105-176 107-189.5q54 14 107 14 56 0 114-14-28 39-60 88.5t-49.5 78.5-56.5 96-49 84q-146 248-353 610z' }));;
}