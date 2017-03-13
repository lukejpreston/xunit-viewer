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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M813 765q0-1-126-222-21-34-52-34h-184q-18 0-26 11-7 12 1 29l125 216v1l-196 346q-9 14 0 28 8 13 24 13h185q31 0 50-36zm624-497q-7-12-24-12h-187q-30 0-49 35l-411 729q1 2 262 481 20 35 52 35h184q18 0 25-12 8-13-1-28l-260-476v-1l409-723q8-16 0-28zm227 148v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }));;
}