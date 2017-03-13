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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1444 548l-292 292v824q0 46-33 79t-79 33-79-33-33-79v-384h-64v384q0 46-33 79t-79 33-79-33-33-79v-824l-292-292q-28-28-28-68t28-68 68-28 68 28l228 228h368l228-228q28-28 68-28t68 28 28 68-28 68zm-324-164q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z' }));;
}