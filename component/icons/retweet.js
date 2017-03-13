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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1216 1504q0 13-9.5 22.5t-22.5 9.5h-960q-8 0-13.5-2t-9-7-5.5-8-3-11.5-1-11.5v-600h-192q-26 0-45-19t-19-45q0-24 15-41l320-384q19-22 49-22t49 22l320 384q15 17 15 41 0 26-19 45t-45 19h-192v384h576q16 0 25 11l160 192q7 11 7 21zm640-416q0 24-15 41l-320 384q-20 23-49 23t-49-23l-320-384q-15-17-15-41 0-26 19-45t45-19h192v-384h-576q-16 0-25-12l-160-192q-7-9-7-20 0-13 9.5-22.5t22.5-9.5h960q8 0 13.5 2t9 7 5.5 8 3 11.5 1 11.5v600h192q26 0 45 19t19 45z' }));;
}