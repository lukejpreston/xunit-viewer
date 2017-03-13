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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1344 960v-640h-448v1137q119-63 213-137 235-184 235-360zm192-768v768q0 86-33.5 170.5t-83 150-118 127.5-126.5 103-121 77.5-89.5 49.5-42.5 20q-12 6-26 6t-26-6q-16-7-42.5-20t-89.5-49.5-121-77.5-126.5-103-118-127.5-83-150-33.5-170.5v-768q0-26 19-45t45-19h1152q26 0 45 19t19 45z' }));;
}