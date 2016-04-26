//     Zepto.js
//     (c) 2010-2016 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;
(function ($) {
    $.fn.end = function () {
        return this.prevObject || $()
    }

    //从jQuery1.8开始，.andSelf()方法已经被标注过时，在jQuery1.8和更高版本中应使用.addBack()。
    $.fn.andSelf = function () {
        return this.add(this.prevObject || $())
    }

    'filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings'.split(',').forEach(function (property) {
        var fn = $.fn[property]
        $.fn[property] = function () {
            var ret = fn.apply(this, arguments)
            ret.prevObject = this
            return ret
        }
    })
})(Zepto)
