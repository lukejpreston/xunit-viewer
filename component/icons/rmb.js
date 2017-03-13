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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M985.5 1536h-172q-13 0-22.5-9t-9.5-23v-330h-288q-13 0-22.5-9t-9.5-23v-103q0-13 9.5-22.5t22.5-9.5h288v-85h-288q-13 0-22.5-9t-9.5-23v-104q0-13 9.5-22.5t22.5-9.5h214l-321-578q-8-16 0-32 10-16 28-16h194q19 0 29 18l215 425q19 38 56 125 10-24 30.5-68t27.5-61l191-420q8-19 29-19h191q17 0 27 16 9 14 1 31l-313 579h215q13 0 22.5 9.5t9.5 22.5v104q0 14-9.5 23t-22.5 9h-290v85h290q13 0 22.5 9.5t9.5 22.5v103q0 14-9.5 23t-22.5 9h-290v330q0 13-9.5 22.5t-22.5 9.5z' }));;
}