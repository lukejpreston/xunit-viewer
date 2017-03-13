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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1720 339h-511v124h511v-124zm-252 426q-90 0-146 52.5t-62 142.5h408q-18-195-200-195zm16 585q63 0 122-32t76-87h221q-100 307-427 307-214 0-340.5-132t-126.5-347q0-208 130.5-345.5t336.5-137.5q138 0 240.5 68t153 179 50.5 248q0 17-2 47h-658q0 111 57.5 171.5t166.5 60.5zm-1335-50h296q205 0 205-167 0-180-199-180h-302v347zm0-537h281q78 0 123.5-36.5t45.5-113.5q0-144-190-144h-260v294zm-277-509h594q87 0 155 14t126.5 47.5 90 96.5 31.5 154q0 181-172 263 114 32 172 115t58 204q0 75-24.5 136.5t-66 103.5-98.5 71-121 42-134 13h-611v-1260z' }));;
}