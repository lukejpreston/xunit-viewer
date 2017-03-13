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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1815 952q0 31-31 66l-336 396q-43 51-120.5 86.5t-143.5 35.5h-1088q-34 0-60.5-13t-26.5-43q0-31 31-66l336-396q43-51 120.5-86.5t143.5-35.5h1088q34 0 60.5 13t26.5 43zm-343-344v160h-832q-94 0-197 47.5t-164 119.5l-337 396-5 6q0-4-.5-12.5t-.5-12.5v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h544q92 0 158 66t66 158z' }));;
}