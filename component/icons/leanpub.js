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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1765 392l155 1272q-131 0-257-57-200-91-393-91-226 0-374 148-148-148-374-148-193 0-393 91-128 57-252 57h-5l155-1272q224-127 482-127 233 0 387 106 154-106 387-106 258 0 482 127zm-495 987q129 0 232 28.5t260 93.5l-124-1021q-171-78-368-78-224 0-374 141-150-141-374-141-197 0-368 78l-124 1021q105-43 165.5-65t148.5-39.5 178-17.5q202 0 374 108 172-108 374-108zm40-34l-55-907q-211 4-359 155-152-155-374-155-176 0-336 66l-114 941q124-51 228.5-76t221.5-25q209 0 374 102 172-107 374-102z' }));;
}