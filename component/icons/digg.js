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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M200 282h204v983h-532v-697h328v-286zm0 819v-369h-123v369h123zm286-533v697h205v-697h-205zm0-286v204h205v-204h-205zm287 286h533v942h-533v-163h328v-82h-328v-697zm328 533v-369h-123v369h123zm287-533h532v942h-532v-163h327v-82h-327v-697zm327 533v-369h-123v369h123z' }));;
}