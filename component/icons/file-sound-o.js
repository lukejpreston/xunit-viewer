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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-788-814q20 8 20 30v544q0 22-20 30-8 2-12 2-12 0-23-9l-166-167h-131q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h131l166-167q16-15 35-7zm417 689q31 0 50-24 129-159 129-363t-129-363q-16-21-43-24t-47 14q-21 17-23.5 43.5t14.5 47.5q100 123 100 282t-100 282q-17 21-14.5 47.5t23.5 42.5q18 15 40 15zm-211-148q27 0 47-20 87-93 87-219t-87-219q-18-19-45-20t-46 17-20 44.5 18 46.5q52 57 52 131t-52 131q-19 20-18 46.5t20 44.5q20 17 44 17z' }));;
}