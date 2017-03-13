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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1299 565q0-100-65-162t-171-62h-320v448h320q106 0 171-62t65-162zm237 0q0 193-126.5 315t-326.5 122h-340v118h505q14 0 23 9t9 23v128q0 14-9 23t-23 9h-505v192q0 14-9.5 23t-22.5 9h-167q-14 0-23-9t-9-23v-192h-224q-14 0-23-9t-9-23v-128q0-14 9-23t23-9h224v-118h-224q-14 0-23-9t-9-23v-149q0-13 9-22.5t23-9.5h224v-629q0-14 9-23t23-9h539q200 0 326.5 122t126.5 315z' }));;
}