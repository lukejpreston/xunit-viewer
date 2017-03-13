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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1062 150q-317 121-556 362.5t-358 560.5q-20-89-20-176 0-208 102.5-384.5t278.5-279 384-102.5q82 0 169 19zm269 119q93 65 164 155-389 113-674.5 400.5t-396.5 676.5q-93-72-155-162 112-386 395-671t667-399zm-733 1334q115-356 379.5-622t619.5-384q40 92 54 195-292 120-516 345t-343 518q-103-14-194-52zm1066 58q-193-50-367-115-135 84-290 107 109-205 274-370.5t369-275.5q-21 152-101 284 65 175 115 370z' }));;
}