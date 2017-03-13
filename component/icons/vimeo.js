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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1709 518q-10 236-332 651-333 431-562 431-142 0-240-263-44-160-132-482-72-262-157-262-18 0-127 76l-77-98q24-21 108-96.5t130-115.5q156-138 241-146 95-9 153 55.5t81 203.5q44 287 66 373 55 249 120 249 51 0 154-161 101-161 109-246 13-139-109-139-57 0-121 26 120-393 459-382 251 8 236 326z' }));;
}