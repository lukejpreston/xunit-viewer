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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M416 256h704q13 0 22.5 9.5t9.5 23.5v863h192q40 0 58 37t-9 69l-320 384q-18 22-49 22t-49-22l-320-384q-26-31-9-69 18-37 58-37h192v-640h-320q-14 0-25-11l-160-192q-13-14-4-34 9-19 29-19z' }));;
}