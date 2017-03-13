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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1216 528q0 145-57 243.5t-152 135.5l45 821q2 26-16 45t-44 19h-192q-26 0-44-19t-16-45l45-821q-95-37-152-135.5t-57-243.5q0-128 42.5-249.5t117.5-200 160-78.5 160 78.5 117.5 200 42.5 249.5z' }));;
}