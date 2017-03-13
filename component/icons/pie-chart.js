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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M768 890l546 546q-106 108-247.5 168t-298.5 60q-209 0-385.5-103t-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103v762zm187 6h773q0 157-60 298.5t-168 247.5zm709-128h-768v-768q209 0 385.5 103t279.5 279.5 103 385.5z' }));;
}