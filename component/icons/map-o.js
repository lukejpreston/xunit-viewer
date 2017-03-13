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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1892 11q28 20 28 53v1408q0 20-11 36t-29 23l-640 256q-24 11-48 0l-616-246-616 246q-10 5-24 5-19 0-36-11-28-20-28-53v-1408q0-20 11-36t29-23l640-256q24-11 48 0l616 246 616-246q32-13 60 6zm-1284 135v1270l576 230v-1270zm-608 217v1270l544-217v-1270zm1792 1066v-1270l-544 217v1270z' }));;
}