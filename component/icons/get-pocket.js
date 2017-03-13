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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1601 128q65 0 110 45.5t45 110.5v519q0 176-68 336t-182.5 275-274 182.5-334.5 67.5q-176 0-335.5-67.5t-274.5-182.5-183-275-68-336v-519q0-64 46-110t110-46h1409zm-704 1064q47 0 82-33l404-388q37-35 37-85 0-49-34.5-83.5t-83.5-34.5q-47 0-82 33l-323 310-323-310q-35-33-81-33-49 0-83.5 34.5t-34.5 83.5q0 51 36 85l405 388q33 33 81 33z' }));;
}