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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1216 128q-320 0-320 224v416h128v128h-128v544q0 224 320 224h64v128h-64q-272 0-384-146-112 146-384 146h-64v-128h64q320 0 320-224v-544h-128v-128h128v-416q0-224-320-224h-64v-128h64q272 0 384 146 112-146 384-146h64v128h-64z' }));;
}