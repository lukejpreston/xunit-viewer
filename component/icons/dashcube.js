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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M128 680q0-131 91.5-226.5t222.5-95.5h742l352-358v1470q0 132-91.5 227t-222.5 95h-780q-131 0-222.5-95t-91.5-227v-790zm1232 754l-176-180v-425q0-46-32-79t-78-33h-484q-46 0-78 33t-32 79v492q0 46 32.5 79.5t77.5 33.5h770z' }));;
}