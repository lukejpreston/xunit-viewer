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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1278 1074v109q0 50-36.5 89t-94 60.5-118 32.5-117.5 11q-205 0-342.5-139t-137.5-346q0-203 136-339t339-136q34 0 75.5 4.5t93 18 92.5 34 69 56.5 28 81v109q0 16-16 16h-118q-16 0-16-16v-70q0-43-65.5-67.5t-137.5-24.5q-140 0-228.5 91.5t-88.5 237.5q0 151 91.5 249.5t233.5 98.5q68 0 138-24t70-66v-70q0-7 4.5-11.5t10.5-4.5h119q6 0 11 4.5t5 11.5zm-382-818q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z' }));;
}