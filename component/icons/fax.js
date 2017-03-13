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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M288 384q66 0 113 47t47 113v1088q0 66-47 113t-113 47h-128q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h128zm1376 163q58 34 93 93t35 128v768q0 106-75 181t-181 75h-864q-66 0-113-47t-47-113v-1536q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v163zm-736 989v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm256 512v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm0-256v-128q0-14-9-23t-23-9h-128q-14 0-23 9t-9 23v128q0 14 9 23t23 9h128q14 0 23-9t9-23zm96-384v-256h-160q-40 0-68-28t-28-68v-160h-640v512h896z' }));;
}