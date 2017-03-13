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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1683 1555q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-128-128 90-90 83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83 83-83q19-19 45-19t45 19l83 83zm-1574-38q-19 19-45 19t-45-19l-128-128 90-90 83 82 83-82q19-19 45-19t45 19l83 82 64-64v-293l-210-314q-17-26-7-56.5t40-40.5l177-58v-299h128v-128h256v-128h256v128h256v128h128v299l177 58q30 10 40 40.5t-7 56.5l-210 314v293l19-18q19-19 45-19t45 19l83 82 83-82q19-19 45-19t45 19l128 128-90 90-83-83-83 83q-18 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83-83 83q-19 19-45 19t-45-19l-83-83zm403-1133v128l384-128 384 128v-128h-128v-128h-512v128h-128z' }));;
}