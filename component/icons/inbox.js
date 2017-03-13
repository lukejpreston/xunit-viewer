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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1151 960h316q-1-3-2.5-8t-2.5-8l-212-496h-708l-212 496q-1 2-2.5 8t-2.5 8h316l95 192h320zm513 30v482q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-482q0-62 25-123l238-552q10-25 36.5-42t52.5-17h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123z' }));;
}