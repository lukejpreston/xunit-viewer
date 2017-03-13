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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M384 1632l384-192v-314l-384 164v342zm-64-454l404-173-404-173-404 173zm1088 454l384-192v-314l-384 164v342zm-64-454l404-173-404-173-404 173zm-448-293l384-165v-266l-384 164v267zm-64-379l441-189-441-189-441 189zm1088 518v416q0 36-19 67t-52 47l-448 224q-25 14-57 14t-57-14l-448-224q-5-2-7-4-2 2-7 4l-448 224q-25 14-57 14t-57-14l-448-224q-33-16-52-47t-19-67v-416q0-38 21.5-70t56.5-48l434-186v-400q0-38 21.5-70t56.5-48l448-192q23-10 50-10t50 10l448 192q35 16 56.5 48t21.5 70v400l434 186q36 16 57 48t21 70z' }));;
}