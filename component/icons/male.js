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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1408 704v416q0 40-28 68t-68 28-68-28-28-68v-352h-64v912q0 46-33 79t-79 33-79-33-33-79v-464h-64v464q0 46-33 79t-79 33-79-33-33-79v-912h-64v352q0 40-28 68t-68 28-68-28-28-68v-416q0-80 56-136t136-56h640q80 0 136 56t56 136zm-288-448q0 93-65.5 158.5t-158.5 65.5-158.5-65.5-65.5-158.5 65.5-158.5 158.5-65.5 158.5 65.5 65.5 158.5z' }));;
}