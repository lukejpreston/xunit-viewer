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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M84 768l623 665-300-665h-323zm812 772l349-772h-698zm-486-900l204-384h-262l-288 384h346zm675 793l623-665h-323zm-530-793h682l-204-384h-274zm827 0h346l-288-384h-262zm141-486l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20l-960-1024q-16-17-17-40.5t13-41.5l384-512q18-26 51-26h1152q33 0 51 26z' }));;
}