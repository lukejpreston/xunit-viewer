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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1472 832q0 191-94.5 353t-256.5 256.5-353 94.5h-160q-14 0-23-9t-9-23v-611l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-93l-215 66q-3 1-9 1-10 0-19-6-13-10-13-26v-128q0-23 23-31l233-71v-250q0-14 9-23t23-9h160q14 0 23 9t9 23v181l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v93l375-116q15-5 28 5t13 26v128q0 23-23 31l-393 121v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23z' }));;
}