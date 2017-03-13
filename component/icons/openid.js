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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1086 0v1536l-272 128q-228-20-414-102t-293-208.5-107-272.5q0-140 100.5-263.5t275-205.5 391.5-108v172q-217 38-356.5 150t-139.5 255q0 152 154.5 267t388.5 145v-1360zm669 582l37 390-525-114 147-83q-119-70-280-99v-172q277 33 481 157z' }));;
}