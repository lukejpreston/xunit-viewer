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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M800 864v-448q0-14-9-23t-23-9-23 9-9 23v448q0 14 9 23t23 9 23-9 9-23zm672 352q0 26-19 45t-45 19h-429l-51 483q-2 12-10.5 20.5t-20.5 8.5h-1q-27 0-32-27l-76-485h-404q-26 0-45-19t-19-45q0-123 78.5-221.5t177.5-98.5v-512q-52 0-90-38t-38-90 38-90 90-38h640q52 0 90 38t38 90-38 90-90 38v512q99 0 177.5 98.5t78.5 221.5z' }));;
}