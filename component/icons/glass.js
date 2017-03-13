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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1699 186q0 35-43 78l-632 632v768h320q26 0 45 19t19 45-19 45-45 19h-896q-26 0-45-19t-19-45 19-45 45-19h320v-768l-632-632q-43-43-43-78 0-23 18-36.5t38-17.5 43-4h1408q23 0 43 4t38 17.5 18 36.5z' }));;
}