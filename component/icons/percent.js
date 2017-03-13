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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1408 1280q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm-768-768q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm1024 768q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5zm-96-1088q0 20-13 38l-1056 1408q-19 26-51 26h-160q-26 0-45-19t-19-45q0-20 13-38l1056-1408q19-26 51-26h160q26 0 45 19t19 45zm-672 320q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z' }));;
}