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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M128 1024h1728q26 0 45 19t19 45v448h-256v-256h-1536v256h-256v-1216q0-26 19-45t45-19h128q26 0 45 19t19 45v704zm576-320q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm1216 256v-64q0-159-112.5-271.5t-271.5-112.5h-704q-26 0-45 19t-19 45v384h1152z' }));;
}