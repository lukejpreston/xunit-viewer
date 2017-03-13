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
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M609 816l287-208 287 208-109 336h-355zm287-816q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71zm619 1350q149-203 149-454v-3l-102 89-240-224 63-323 134 12q-150-206-389-282l53 124-287 159-287-159 53-124q-239 76-389 282l135-12 62 323-240 224-102-89v3q0 251 149 454l30-132 326 40 139 298-116 69q117 39 240 39t240-39l-116-69 139-298 326-40z' }));;
}