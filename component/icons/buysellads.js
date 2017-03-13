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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1043 1086h-294l147-551zm86 322h311l-324-1024h-440l-324 1024h311l383-314zm535-992v960q0 118-85 203t-203 85h-960q-118 0-203-85t-85-203v-960q0-118 85-203t203-85h960q118 0 203 85t85 203z' }));;
}