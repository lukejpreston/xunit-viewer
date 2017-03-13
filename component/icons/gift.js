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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1056 1356v-716h-320v716q0 25 18 38.5t46 13.5h192q28 0 46-13.5t18-38.5zm-456-844h195l-126-161q-26-31-69-31-40 0-68 28t-28 68 28 68 68 28zm688-96q0-40-28-68t-68-28q-43 0-69 31l-125 161h194q40 0 68-28t28-68zm376 256v320q0 14-9 23t-23 9h-96v416q0 40-28 68t-68 28h-1088q-40 0-68-28t-28-68v-416h-96q-14 0-23-9t-9-23v-320q0-14 9-23t23-9h440q-93 0-158.5-65.5t-65.5-158.5 65.5-158.5 158.5-65.5q107 0 168 77l128 165 128-165q61-77 168-77 93 0 158.5 65.5t65.5 158.5-65.5 158.5-158.5 65.5h440q14 0 23 9t9 23z' }));;
}