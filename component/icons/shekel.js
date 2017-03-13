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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1120 624v496q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-496q0-112-80-192t-192-80h-272v1152q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-1344q0-14 9-23t23-9h464q135 0 249 66.5t180.5 180.5 66.5 249zm384-464v880q0 135-66.5 249t-180.5 180.5-249 66.5h-464q-14 0-23-9t-9-23v-960q0-14 9-23t23-9h160q14 0 23 9t9 23v768h272q112 0 192-80t80-192v-880q0-14 9-23t23-9h160q14 0 23 9t9 23z' }));;
}