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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1404 1137v367q0 14-9 23t-23 9h-956q-14 0-23-9t-9-23v-150q0-13 9.5-22.5t22.5-9.5h97v-383h-95q-14 0-23-9.5t-9-22.5v-131q0-14 9-23t23-9h95v-223q0-171 123.5-282t314.5-111q185 0 335 125 9 8 10 20.5t-7 22.5l-103 127q-9 11-22 12-13 2-23-7-5-5-26-19t-69-32-93-18q-85 0-137 47t-52 123v215h305q13 0 22.5 9t9.5 23v131q0 13-9.5 22.5t-22.5 9.5h-305v379h414v-181q0-13 9-22.5t23-9.5h162q14 0 23 9.5t9 22.5z' }));;
}