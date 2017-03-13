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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M63 1536h-63v-1408h63v1408zm63-1h-32v-1407h32v1407zm94 0h-31v-1407h31v1407zm157 0h-31v-1407h31v1407zm157 0h-62v-1407h62v1407zm126 0h-31v-1407h31v1407zm63 0h-31v-1407h31v1407zm63 0h-31v-1407h31v1407zm157 0h-63v-1407h63v1407zm157 0h-63v-1407h63v1407zm126 0h-63v-1407h63v1407zm126 0h-63v-1407h63v1407zm94 0h-63v-1407h63v1407zm189 0h-94v-1407h94v1407zm63 0h-32v-1407h32v1407zm94 1h-63v-1408h63v1408z' }));;
}