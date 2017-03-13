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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1264 1461l-62-183q-44 22-103 22-36 1-62-10.5t-38.5-31.5-17.5-40.5-5-43.5v-398h257v-194h-256v-326h-188q-8 0-9 10-5 44-17.5 87t-39 95-77 95-118.5 68v165h130v418q0 57 21.5 115t65 111 121 85.5 176.5 30.5q69-1 136.5-25t85.5-50zm400-1045v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z' }));;
}