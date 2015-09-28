'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _reactDom = require('react-dom');

var AnimatedPrimitive = {
    shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
        var _this = this;

        var ignore = ['animationDuration', 'animationDelay'];
        var props = this.props;
        var changedKeys = Object.keys(this.props).filter(function (prop) {
            return ignore.indexOf(prop) < 0;
        }).filter(function (prop) {
            return nextProps[prop] !== props[prop];
        });
        var shouldUpdate = true;
        if (changedKeys.length) {
            (function () {
                var $el = _d32['default'].select(_reactDom.findDOMNode(_this));
                var trans = $el.transition().duration(nextProps.animationDuration);
                changedKeys.forEach(function (key) {
                    var val = nextProps[key];
                    trans.attr(key, val);
                });
                if (changedKeys.indexOf('children') > 0) {
                    trans.text(nextProps.children);
                }
                shouldUpdate = false;
            })();
        }
        return shouldUpdate;
    }
};

exports['default'] = AnimatedPrimitive;
module.exports = exports['default'];