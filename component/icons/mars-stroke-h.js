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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1773 915q19 19 19 45t-19 45l-294 294q-9 10-22.5 10t-22.5-10l-45-45q-10-9-10-22.5t10-22.5l185-185h-294v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224h-132q-24 217-187.5 364.5t-384.5 147.5q-167 0-306-87t-212-236-54-319q15-133 88-245.5t188-182 249-80.5q155-12 292 52.5t224 186 103 271.5h132v-224q0-14 9-23t23-9h64q14 0 23 9t9 23v224h294l-185-185q-10-9-10-22.5t10-22.5l45-45q9-10 22.5-10t22.5 10zm-1325 493q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z' }));;
}