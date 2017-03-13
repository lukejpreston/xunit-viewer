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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M969 1053l148 148-149 149zm-1-611l149 149-148 148zm-130 1224l464-464-306-306 306-306-464-464v611l-255-255-93 93 320 321-320 321 93 93 255-255v611zm719-770q0 209-32 365.5t-87.5 257-140.5 162.5-181.5 86.5-219.5 24.5-219.5-24.5-181.5-86.5-140.5-162.5-87.5-257-32-365.5 32-365.5 87.5-257 140.5-162.5 181.5-86.5 219.5-24.5 219.5 24.5 181.5 86.5 140.5 162.5 87.5 257 32 365.5z' }));;
}