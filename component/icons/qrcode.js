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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M576 1152v128h-128v-128h128zm0-768v128h-128v-128h128zm768 0v128h-128v-128h128zm-1024 1023h384v-383h-384v383zm0-767h384v-384h-384v384zm768 0h384v-384h-384v384zm-256 256v640h-640v-640h640zm512 512v128h-128v-128h128zm256 0v128h-128v-128h128zm0-512v384h-384v-128h-128v384h-128v-640h384v128h128v-128h128zm-768-768v640h-640v-640h640zm768 0v640h-640v-640h640z' }));;
}