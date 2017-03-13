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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M789 667q-10 18-257 456-27 46-65 46h-239q-21 0-31-17t0-36l253-448q1 0 0-1l-161-279q-12-22-1-37 9-15 32-15h239q40 0 66 45zm806-642q11 16 0 37l-528 934v1l336 615q11 20 1 37-10 15-32 15h-239q-42 0-66-45l-339-622q18-32 531-942 25-45 64-45h241q22 0 31 15z' }));;
}