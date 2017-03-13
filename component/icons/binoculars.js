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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M704 320v768q0 26-19 45t-45 19v576q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-512l249-873q7-23 31-23h424zm320 0v704h-256v-704h256zm768 896v512q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-576q-26 0-45-19t-19-45v-768h424q24 0 31 23zm-1056-1184v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23zm672 0v224h-352v-224q0-14 9-23t23-9h288q14 0 23 9t9 23z' }));;
}