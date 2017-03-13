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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1408 576q0 221-147.5 384.5t-364.5 187.5v612q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-612q-217-24-364.5-187.5t-147.5-384.5q0-117 45.5-223.5t123-184 184-123 223.5-45.5 223.5 45.5 184 123 123 184 45.5 223.5zm-576 448q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z' }));;
}