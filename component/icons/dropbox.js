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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M402 707l494 305-342 285-490-319zm986 555v108l-490 293v1l-1-1-1 1v-1l-489-293v-108l147 96 342-284v-2l1 1 1-1v2l343 284zm-834-1144l342 285-494 304-338-270zm836 589l338 271-489 319-343-285zm-151-589l489 319-338 270-494-304z' }));;
}