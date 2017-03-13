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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1664 832v128q0 201-98.5 362t-274 251.5-395.5 90.5-395.5-90.5-274-251.5-98.5-362v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v128q0 52 23.5 90t53.5 57 71 30 64 13 44 2 44-2 64-13 71-30 53.5-57 23.5-90v-128q0-26 19-45t45-19h384q26 0 45 19t19 45zm-1024-640v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45zm1024 0v384q0 26-19 45t-45 19h-384q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h384q26 0 45 19t19 45z' }));;
}