(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["d3", "react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Charts"] = factory(require("d3"), require("react"), require("react-dom"));
	else
		root["Charts"] = factory(root["d3"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Gauge=exports.TickMarks=exports.BucketX=exports.Legend=exports.Lines=exports.Bars=exports.Chart=undefined;exports.colorScale=colorScale;var _d=__webpack_require__(1);var _d2=_interopRequireDefault(_d);var _Chart2=__webpack_require__(2);var _Chart3=_interopRequireDefault(_Chart2);var _Bars2=__webpack_require__(15);var _Bars3=_interopRequireDefault(_Bars2);var _Lines2=__webpack_require__(27);var _Lines3=_interopRequireDefault(_Lines2);var _Legend2=__webpack_require__(29);var _Legend3=_interopRequireDefault(_Legend2);var _BucketX2=__webpack_require__(32);var _BucketX3=_interopRequireDefault(_BucketX2);var _TickMarks2=__webpack_require__(34);var _TickMarks3=_interopRequireDefault(_TickMarks2);var _Gauge2=__webpack_require__(35);var _Gauge3=_interopRequireDefault(_Gauge2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/* eslint block-scoped-var: 0*//* UI Layout Components */exports.Chart=_Chart3.default;exports.Bars=_Bars3.default;exports.Lines=_Lines3.default;exports.Legend=_Legend3.default;exports.BucketX=_BucketX3.default;exports.TickMarks=_TickMarks3.default;exports.Gauge=_Gauge3.default;function colorScale(count){return _d2.default.scale.category20().domain(_d2.default.range(count));}

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _PropTypes=__webpack_require__(4);var _reactMeasure=__webpack_require__(5);var _reactMeasure2=_interopRequireDefault(_reactMeasure);var _Hover=__webpack_require__(12);var _Hover2=_interopRequireDefault(_Hover);var _Chart=__webpack_require__(14);var _Chart2=_interopRequireDefault(_Chart);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Chart=function(_Component){_inherits(Chart,_Component);function Chart(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Chart);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Chart.__proto__||Object.getPrototypeOf(Chart)).call.apply(_ref,[this].concat(args))),_this),_this.updateDimensions=function(dimensions){_this.setState(_extends({},dimensions));},_this.state={hover:false,activeElement:false},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Chart,[{key:'onClick',value:function onClick(){this.setState({hover:false,activeElement:false});}},{key:'getChildContext',value:function getChildContext(){var _props=this.props,padding=_props.padding,outerPadding=_props.outerPadding,tickMarks=_props.tickMarks;return{padding:padding,outerPadding:outerPadding,setHoverData:this.setHoverState.bind(this),setActiveElement:this.setActiveElement.bind(this),hasActiveElement:this.hasActiveElement.bind(this),isActiveElement:this.hasActiveElement.bind(this),activeElement:this.state.activeElement,clientWidth:this.state.width,clientHeight:this.state.height,tickMarks:tickMarks};}},{key:'renderHover',value:function renderHover(){var out=undefined;if(this.props.hover&&this.state.hover){out=_react2.default.createElement('div',null,_react2.default.createElement(_Hover2.default,this.state.hover));}return out;}},{key:'render',value:function render(){var _props2=this.props,width=_props2.width,height=_props2.height,children=_props2.children;var hover=this.renderHover();var cls=_Chart2.default['oui-chart'];if(this.props.tickMarks){cls+=' oui-tick-marks';}return _react2.default.createElement(_reactMeasure2.default,{onMeasure:this.updateDimensions},_react2.default.createElement('div',{className:cls},_react2.default.createElement('svg',{width:width,height:height,onClick:this.onClick.bind(this)},children),hover));}},{key:'setHoverState',value:function setHoverState(data){if(!this.state.activeElement){this.setState({hover:data});}}},{key:'setActiveElement',value:function setActiveElement(hoverKey,data){this.setState({hover:data,activeElement:hoverKey});if(this.props.onClickElement){this.props.onClickElement(hoverKey,data);}}},{key:'hasActiveElement',value:function hasActiveElement(){return!!this.state.activeElement;}}]);return Chart;}(_react.Component);Chart.propTypes={width:_PropTypes.Size,height:_PropTypes.Size,padding:_react.PropTypes.number,outerPadding:_react.PropTypes.number,children:_PropTypes.Children,tickMarks:_react.PropTypes.bool,hover:_react.PropTypes.oneOfType([_react.PropTypes.bool,_react.PropTypes.func]),onClickElement:_react.PropTypes.func};Chart.defaultProps={padding:0.1,outerPadding:0.1,width:'100%',height:400,tickMarks:false};Chart.childContextTypes={padding:_react.PropTypes.number,outerPadding:_react.PropTypes.number,setHoverData:_react.PropTypes.func,setActiveElement:_react.PropTypes.func,hasActiveElement:_react.PropTypes.func,isActiveElement:_react.PropTypes.func,activeElement:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.bool]),clientWidth:_react.PropTypes.number,clientHeight:_react.PropTypes.number,tickMarks:_react.PropTypes.bool};exports.default=Chart;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Children=exports.Size=undefined;var _react=__webpack_require__(3);var Size=exports.Size=_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.string]);var Children=exports.Children=_react.PropTypes.oneOfType([_react.PropTypes.node,_react.PropTypes.array,_react.PropTypes.string]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;
	
	var _Measure = __webpack_require__(6);
	
	var _Measure2 = _interopRequireDefault(_Measure);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Measure2.default;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(7);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _getNodeDimensions = __webpack_require__(8);
	
	var _getNodeDimensions2 = _interopRequireDefault(_getNodeDimensions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var isWindowDefined = typeof window !== 'undefined';
	
	// only require ResizeObserver polyfill if it isn't available and we aren't in a SSR environment
	if (isWindowDefined && !window.ResizeObserver) {
	  window.ResizeObserver = __webpack_require__(11);
	}
	
	var Measure = function (_Component) {
	  _inherits(Measure, _Component);
	
	  function Measure(props) {
	    _classCallCheck(this, Measure);
	
	    var _this = _possibleConstructorReturn(this, (Measure.__proto__ || Object.getPrototypeOf(Measure)).call(this, props));
	
	    _this.measure = function () {
	      var includeMargin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.includeMargin;
	      var useClone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.useClone;
	
	      // bail out if we shouldn't measure
	      if (!_this.props.shouldMeasure) return;
	
	      // if no parent available we need to requery the DOM node
	      if (!_this._node.parentNode) {
	        _this._setDOMNode();
	      }
	
	      var dimensions = _this.getDimensions(_this._node, includeMargin, useClone);
	      var isChildFunction = typeof _this.props.children === 'function';
	
	      // determine if we need to update our callback with new dimensions or not
	      _this._propsToMeasure.some(function (prop) {
	        if (dimensions[prop] !== _this._lastDimensions[prop]) {
	          // update our callback if we've found a dimension that has changed
	          _this.props.onMeasure(dimensions);
	
	          // update state to send dimensions to child function
	          if (isChildFunction && typeof _this !== 'undefined') {
	            _this.setState({ dimensions: dimensions });
	          }
	
	          // store last dimensions to compare changes
	          _this._lastDimensions = dimensions;
	
	          // we don't need to look any further, bail out
	          return true;
	        }
	      });
	    };
	
	    _this.state = {
	      dimensions: {
	        width: 0,
	        height: 0,
	        top: 0,
	        right: 0,
	        bottom: 0,
	        left: 0
	      }
	    };
	    _this._node = null;
	    _this._propsToMeasure = _this._getPropsToMeasure(props);
	    _this._lastDimensions = {};
	    return _this;
	  }
	
	  _createClass(Measure, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      this._setDOMNode();
	
	      // measure on first render
	      this.measure();
	
	      // add component to resize observer to detect changes on resize
	      if (isWindowDefined) {
	        this.resizeObserver = new ResizeObserver(function () {
	          return _this2.measure();
	        });
	        this.resizeObserver.observe(this._node);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var config = _ref.config;
	      var whitelist = _ref.whitelist;
	      var blacklist = _ref.blacklist;
	
	      // we store the properties ourselves so we need to update them if the
	      // whitelist or blacklist props have changed
	      if (this.props.whitelist !== whitelist || this.props.blacklist !== blacklist) {
	        this._propsToMeasure = this._getPropsToMeasure({ whitelist: whitelist, blacklist: blacklist });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (isWindowDefined) {
	        this.resizeObserver.disconnect(this._node);
	      }
	      this._node = null;
	    }
	  }, {
	    key: '_setDOMNode',
	    value: function _setDOMNode() {
	      this._node = _reactDom2.default.findDOMNode(this);
	    }
	  }, {
	    key: 'getDimensions',
	    value: function getDimensions() {
	      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._node;
	      var includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.includeMargin;
	      var useClone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.useClone;
	      var cloneOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props.cloneOptions;
	
	      return (0, _getNodeDimensions2.default)(node, _extends({
	        margin: includeMargin,
	        clone: useClone
	      }, cloneOptions));
	    }
	  }, {
	    key: '_getPropsToMeasure',
	    value: function _getPropsToMeasure(_ref2) {
	      var whitelist = _ref2.whitelist;
	      var blacklist = _ref2.blacklist;
	
	      return whitelist.filter(function (prop) {
	        return blacklist.indexOf(prop) < 0;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      return _react.Children.only(typeof children === 'function' ? children(this.state.dimensions) : children);
	    }
	  }]);
	
	  return Measure;
	}(_react.Component);
	
	Measure.propTypes = {
	  whitelist: _react.PropTypes.array,
	  blacklist: _react.PropTypes.array,
	  includeMargin: _react.PropTypes.bool,
	  useClone: _react.PropTypes.bool,
	  cloneOptions: _react.PropTypes.object,
	  shouldMeasure: _react.PropTypes.bool,
	  onMeasure: _react.PropTypes.func
	};
	Measure.defaultProps = {
	  whitelist: ['width', 'height', 'top', 'right', 'bottom', 'left'],
	  blacklist: [],
	  includeMargin: true,
	  useClone: false,
	  cloneOptions: {},
	  shouldMeasure: true,
	  onMeasure: function onMeasure() {
	    return null;
	  }
	};
	exports.default = Measure;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getNodeDimensions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getCloneDimensions = __webpack_require__(9);
	
	var _getCloneDimensions2 = _interopRequireDefault(_getCloneDimensions);
	
	var _getMargin = __webpack_require__(10);
	
	var _getMargin2 = _interopRequireDefault(_getMargin);
	
	function getNodeDimensions(node) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var rect = node.getBoundingClientRect();
	  var width = undefined,
	      height = undefined,
	      margin = undefined;
	
	  // determine if we need to clone the element to get proper dimensions or not
	  if (!rect.width || !rect.height || options.clone) {
	    var cloneDimensions = (0, _getCloneDimensions2['default'])(node, options);
	    rect = cloneDimensions.rect;
	    margin = cloneDimensions.margin;
	  }
	  // if no cloning needed, we need to determine if margin should be accounted for
	  else if (options.margin) {
	      margin = (0, _getMargin2['default'])(getComputedStyle(node));
	    }
	
	  // include margin in width/height calculation if desired
	  if (options.margin) {
	    width = margin.left + rect.width + margin.right;
	    height = margin.top + rect.height + margin.bottom;
	  } else {
	    width = rect.width;
	    height = rect.height;
	  }
	
	  return {
	    width: width,
	    height: height,
	    top: rect.top,
	    right: rect.right,
	    bottom: rect.bottom,
	    left: rect.left
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getCloneDimensions;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getMargin = __webpack_require__(10);
	
	var _getMargin2 = _interopRequireDefault(_getMargin);
	
	function getCloneDimensions(node, options) {
	  var parentNode = node.parentNode;
	
	  var context = document.createElement('div');
	  var clone = node.cloneNode(true);
	  var style = getComputedStyle(node);
	  var rect = undefined,
	      width = undefined,
	      height = undefined,
	      margin = undefined;
	
	  // give the node some context to measure off of
	  // no height and hidden overflow hide node copy
	  context.style.height = 0;
	  context.style.overflow = 'hidden';
	
	  // clean up any attributes that might cause a conflict with the original node
	  // i.e. inputs that should focus or submit data
	  clone.setAttribute('id', '');
	  clone.setAttribute('name', '');
	
	  // set props to get a true dimension calculation
	  if (options.display || style.getPropertyValue('display') === 'none') {
	    clone.style.display = options.display || 'block';
	  }
	  if (options.width || !parseInt(style.getPropertyValue('width'))) {
	    clone.style.width = options.width || 'auto';
	  }
	  if (options.height || !parseInt(style.getPropertyValue('height'))) {
	    clone.style.height = options.height || 'auto';
	  }
	
	  // append copy to context
	  context.appendChild(clone);
	
	  // append context to DOM so we can measure
	  parentNode.appendChild(context);
	
	  // get accurate dimensions
	  rect = clone.getBoundingClientRect();
	  width = clone.offsetWidth;
	  height = clone.offsetHeight;
	
	  // destroy clone
	  parentNode.removeChild(context);
	
	  return {
	    rect: {
	      width: width,
	      height: height,
	      top: rect.top,
	      right: rect.right,
	      bottom: rect.bottom,
	      left: rect.left
	    },
	    margin: (0, _getMargin2['default'])(style)
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getMargin;
	var toNumber = function toNumber(n) {
	  return parseInt(n) || 0;
	};
	
	function getMargin(style) {
	  return {
	    top: toNumber(style.marginTop),
	    right: toNumber(style.marginRight),
	    bottom: toNumber(style.marginBottom),
	    left: toNumber(style.marginLeft)
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.ResizeObserver = factory());
	}(this, (function () { 'use strict';
	
	var classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	};
	
	var createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];
	            descriptor.enumerable = descriptor.enumerable || false;
	            descriptor.configurable = true;
	            if ("value" in descriptor) descriptor.writable = true;
	            Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }
	
	    return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);
	        if (staticProps) defineProperties(Constructor, staticProps);
	        return Constructor;
	    };
	}();
	
	var inherits = function (subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }
	
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	            value: subClass,
	            enumerable: false,
	            writable: true,
	            configurable: true
	        }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	var possibleConstructorReturn = function (self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	
	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	/**
	 * A collection of shims that provides minimal
	 * support of WeakMap and Map classes.
	 *
	 * These implementations are not meant to be used outside of
	 * ResizeObserver modules as they cover only a limited range
	 * of use cases.
	 *//* eslint-disable require-jsdoc */
	var hasNativeCollections = typeof window.WeakMap === 'function' && typeof window.Map === 'function';
	
	var WeakMap = function () {
	    if (hasNativeCollections) {
	        return window.WeakMap;
	    }
	
	    function getIndex(arr, key) {
	        var result = -1;
	
	        arr.some(function (entry, index) {
	            var matches = entry[0] === key;
	
	            if (matches) {
	                result = index;
	            }
	
	            return matches;
	        });
	
	        return result;
	    }
	
	    return function () {
	        function _class() {
	            classCallCheck(this, _class);
	
	            this.__entries__ = [];
	        }
	
	        _class.prototype.get = function get(key) {
	            var index = getIndex(this.__entries__, key);
	
	            return this.__entries__[index][1];
	        };
	
	        _class.prototype.set = function set(key, value) {
	            var index = getIndex(this.__entries__, key);
	
	            if (~index) {
	                this.__entries__[index][1] = value;
	            } else {
	                this.__entries__.push([key, value]);
	            }
	        };
	
	        _class.prototype.delete = function _delete(key) {
	            var entries = this.__entries__,
	                index = getIndex(entries, key);
	
	            if (~index) {
	                entries.splice(index, 1);
	            }
	        };
	
	        _class.prototype.has = function has(key) {
	            return !!~getIndex(this.__entries__, key);
	        };
	
	        return _class;
	    }();
	}();
	
	var Map = function () {
	    if (hasNativeCollections) {
	        return window.Map;
	    }
	
	    return function (_WeakMap) {
	        inherits(_class2, _WeakMap);
	
	        function _class2() {
	            classCallCheck(this, _class2);
	            return possibleConstructorReturn(this, _WeakMap.apply(this, arguments));
	        }
	
	        _class2.prototype.clear = function clear() {
	            this.__entries__.splice(0, this.__entries__.length);
	        };
	
	        _class2.prototype.entries = function entries() {
	            return this.__entries__.slice();
	        };
	
	        _class2.prototype.keys = function keys() {
	            return this.__entries__.map(function (entry) {
	                return entry[0];
	            });
	        };
	
	        _class2.prototype.values = function values() {
	            return this.__entries__.map(function (entry) {
	                return entry[1];
	            });
	        };
	
	        _class2.prototype.forEach = function forEach(callback) {
	            var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
	            for (var _iterator = this.__entries__, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	                var _ref;
	
	                if (_isArray) {
	                    if (_i >= _iterator.length) break;
	                    _ref = _iterator[_i++];
	                } else {
	                    _i = _iterator.next();
	                    if (_i.done) break;
	                    _ref = _i.value;
	                }
	
	                var entry = _ref;
	
	                callback.call(ctx, entry[1], entry[0]);
	            }
	        };
	
	        createClass(_class2, [{
	            key: 'size',
	            get: function get() {
	                return this.__entries__.length;
	            }
	        }]);
	        return _class2;
	    }(WeakMap);
	}();
	
	/**
	 * A shim for requestAnimationFrame which falls back
	 * to setTimeout if the first one is not supported.
	 *
	 * @returns {Number} Requests' identifier.
	 */
	var reqAnimFrame = (function () {
	    if (typeof window.requestAnimationFrame === 'function') {
	        return window.requestAnimationFrame;
	    }
	
	    return function (callback) {
	        return setTimeout(function () {
	            return callback(Date.now());
	        }, 1000 / 60);
	    };
	})();
	
	/**
	 * Creates a wrapper function that ensures that provided callback will
	 * be invoked only once during the specified delay period. It caches the last
	 * call and re-invokes it after pending activation is resolved.
	 *
	 * @param {Function} callback - Function to be invoked after the delay period.
	 * @param {Number} [delay = 0] - Delay after which to invoke callback.
	 * @param {Boolean} [afterRAF = false] - Whether function needs to be invoked as
	 *      a requestAnimationFrame callback.
	 * @returns {Function}
	 */
	var throttle = function (callback) {
	    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	    var afterRAF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	    var leadCall = null,
	        edgeCall = null;
	
	    /**
	     * Invokes the original callback function and schedules a new invocation if
	     * the wrapper was called during current request.
	     */
	    function invokeCallback() {
	        // Invoke original function.
	        callback.apply.apply(callback, leadCall);
	
	        leadCall = null;
	
	        // Schedule new invocation if there was a call during delay period.
	        if (edgeCall) {
	            proxy.apply.apply(proxy, edgeCall);
	
	            edgeCall = null;
	        }
	    }
	
	    /**
	     * Callback that will be invoked after the specified delay period. It will
	     * delegate invocation of the original function to the requestAnimationFrame
	     * if "afterRAF" parameter is set to "true".
	     */
	    function timeoutCallback() {
	        afterRAF ? reqAnimFrame(invokeCallback) : invokeCallback();
	    }
	
	    /**
	     * Schedules invocation of the initial function.
	     */
	    function proxy() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        // eslint-disable-next-line no-invalid-this
	        var callData = [this, args];
	
	        // Cache current call to be re-invoked later if there is already a
	        // pending call.
	        if (leadCall) {
	            edgeCall = callData;
	        } else {
	            leadCall = callData;
	
	            // Schedule new invocation.
	            setTimeout(timeoutCallback, delay);
	        }
	    }
	
	    return proxy;
	};
	
	// Define whether the MutationObserver is supported.
	var mutationsSupported = typeof window.MutationObserver === 'function';
	
	/**
	 * Controller class which handles updates of ResizeObserver instances.
	 * It decides when and for how long it's necessary to run updates by listening
	 * to the windows "resize" event along with a tracking of DOM mutations
	 * (nodes removal, changes of attributes, etc.).
	 *
	 * Transitions and animations are handled by running a repeatable update cycle
	 * until the dimensions of observed elements are changing.
	 *
	 * Continuous update cycle will be used automatically in case MutationObserver
	 * is not supported.
	 */
	var ResizeObserverController = function () {
	    /**
	     * Creates a new instance of ResizeObserverController.
	     *
	     * @param {Boolean} [continuousUpdates = false] - Whether to use a continuous
	     *      update cycle.
	     */
	    function ResizeObserverController() {
	        var continuousUpdates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	        classCallCheck(this, ResizeObserverController);
	
	        // Continuous updates must be enabled if MutationObserver is not supported.
	        this._isCycleContinuous = !mutationsSupported || continuousUpdates;
	
	        // Indicates whether DOM listeners have been added.
	        this._listenersEnabled = false;
	
	        // Keeps reference to the instance of MutationObserver.
	        this._mutationsObserver = null;
	
	        // A list of connected observers.
	        this._observers = [];
	
	        // Make sure that the "refresh" method is invoked as a RAF callback and
	        // that it happens only once during the period of 30 milliseconds.
	        this.refresh = throttle(this.refresh.bind(this), 30, true);
	
	        // Additionally postpone invocation of the continuous updates.
	        this._continuousUpdateHandler = throttle(this.refresh, 70);
	    }
	
	    /**
	     * Adds observer to observers list.
	     *
	     * @param {ResizeObserver} observer - Observer to be added.
	     */
	    ResizeObserverController.prototype.connect = function connect(observer) {
	        if (!this.isConnected(observer)) {
	            this._observers.push(observer);
	        }
	
	        // Add listeners if they haven't been added yet.
	        if (!this._listenersEnabled) {
	            this._addListeners();
	        }
	    };
	
	    /**
	     * Removes observer from observers list.
	     *
	     * @param {ResizeObserver} observer - Observer to be removed.
	     */
	    ResizeObserverController.prototype.disconnect = function disconnect(observer) {
	        var observers = this._observers;
	        var index = observers.indexOf(observer);
	
	        // Remove observer if it's present in registry.
	        if (~index) {
	            observers.splice(index, 1);
	        }
	
	        // Remove listeners if controller has no connected observers.
	        if (!observers.length && this._listenersEnabled) {
	            this._removeListeners();
	        }
	    };
	
	    /**
	     * Tells whether the provided observer is connected to controller.
	     *
	     * @param {ResizeObserver} observer - Observer to be checked.
	     * @returns {Boolean}
	     */
	    ResizeObserverController.prototype.isConnected = function isConnected(observer) {
	        return !!~this._observers.indexOf(observer);
	    };
	
	    /**
	     * Invokes the update of observers. It will continue running updates insofar
	     * it detects changes or if continuous updates are enabled.
	     */
	    ResizeObserverController.prototype.refresh = function refresh() {
	        var hasChanges = this._updateObservers();
	
	        // Continue running updates if changes have been detected as there might
	        // be future ones caused by CSS transitions.
	        if (hasChanges) {
	            this.refresh();
	        } else if (this._isCycleContinuous && this._listenersEnabled) {
	            // Automatically repeat cycle if it's necessary.
	            this._continuousUpdateHandler();
	        }
	    };
	
	    /**
	     * Updates every observer from observers list and notifies them of queued
	     * entries.
	     *
	     * @private
	     * @returns {Boolean} Returns "true" if any observer has detected changes in
	     *      dimensions of its' elements.
	     */
	    ResizeObserverController.prototype._updateObservers = function _updateObservers() {
	        var hasChanges = false;
	
	        for (var _iterator = this._observers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	            var _ref;
	
	            if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	            } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	            }
	
	            var observer = _ref;
	
	            // Collect active observations.
	            observer.gatherActive();
	
	            // Broadcast active observations and set the flag that changes have
	            // been detected.
	            if (observer.hasActive()) {
	                hasChanges = true;
	
	                observer.broadcastActive();
	            }
	        }
	
	        return hasChanges;
	    };
	
	    /**
	     * Initializes DOM listeners.
	     *
	     * @private
	     */
	    ResizeObserverController.prototype._addListeners = function _addListeners() {
	        // Do nothing if listeners have been already added.
	        if (this._listenersEnabled) {
	            return;
	        }
	
	        window.addEventListener('resize', this.refresh);
	
	        // Subscribe to DOM mutations if it's possible as they may lead to
	        // changes in the dimensions of elements.
	        if (mutationsSupported) {
	            this._mutationsObserver = new MutationObserver(this.refresh);
	
	            this._mutationsObserver.observe(document, {
	                attributes: true,
	                childList: true,
	                characterData: true,
	                subtree: true
	            });
	        }
	
	        this._listenersEnabled = true;
	
	        // Don't wait for a possible event that might trigger the update of
	        // observers and manually initiate the update process.
	        if (this._isCycleContinuous) {
	            this.refresh();
	        }
	    };
	
	    /**
	     * Removes DOM listeners.
	     *
	     * @private
	     */
	    ResizeObserverController.prototype._removeListeners = function _removeListeners() {
	        // Do nothing if listeners have been already removed.
	        if (!this._listenersEnabled) {
	            return;
	        }
	
	        window.removeEventListener('resize', this.refresh);
	
	        if (this._mutationsObserver) {
	            this._mutationsObserver.disconnect();
	        }
	
	        this._mutationsObserver = null;
	        this._listenersEnabled = false;
	    };
	
	    createClass(ResizeObserverController, [{
	        key: 'continuousUpdates',
	
	        /**
	         * Tells whether continuous updates are enabled.
	         *
	         * @returns {Boolean}
	         */
	        get: function get() {
	            return this._isCycleContinuous;
	        },
	
	        /**
	         * Enables or disables continuous updates.
	         *
	         * @param {Boolean} useContinuous - Whether to enable or disable continuous
	         *      updates. Note that the value won't be applied if MutationObserver is
	         *      not supported.
	         */
	        set: function set(useContinuous) {
	            // The state of continuous updates should not be modified if
	            // MutationObserver is not supported.
	            if (!mutationsSupported) {
	                return;
	            }
	
	            this._isCycleContinuous = useContinuous;
	
	            // Immediately start the update cycle in order not to wait for a possible
	            // event that might initiate it.
	            if (this._listenersEnabled && useContinuous) {
	                this.refresh();
	            }
	        }
	    }]);
	    return ResizeObserverController;
	}();
	
	// Placeholder of an empty content rectangle.
	var emptyRect = createContentRect(0, 0, 0, 0);
	
	/**
	 * Extracts computed styles of provided element.
	 *
	 * @param {Element} target
	 * @returns {CSSStyleDeclaration}
	 */
	function getStyles(target) {
	    return window.getComputedStyle(target);
	}
	
	/**
	 * Converts provided string defined in q form of '{{value}}px' to number.
	 *
	 * @param {String} value
	 * @returns {Number}
	 */
	function pixelsToNumber(value) {
	    return parseFloat(value) || 0;
	}
	
	/**
	 * Extracts borders size from provided styles.
	 *
	 * @param {CSSStyleDeclaration} styles
	 * @param {...String} positions - Borders positions (top, right, ...)
	 * @returns {Number}
	 */
	function getBordersSize(styles) {
	    for (var _len = arguments.length, positions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        positions[_key - 1] = arguments[_key];
	    }
	
	    return positions.reduce(function (size, pos) {
	        var value = styles['border-' + pos + '-width'];
	
	        return size + pixelsToNumber(value);
	    }, 0);
	}
	
	/**
	 * Extracts paddings sizes from provided styles.
	 *
	 * @param {CSSStyleDeclaration} styles
	 * @returns {Object} Paddings box.
	 */
	function getPaddings(styles) {
	    var boxKeys = ['top', 'right', 'bottom', 'left'];
	    var paddings = {};
	
	    for (var _iterator = boxKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;
	
	        if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	        } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	        }
	
	        var key = _ref;
	
	        var value = styles['padding-' + key];
	
	        paddings[key] = pixelsToNumber(value);
	    }
	
	    return paddings;
	}
	
	/**
	 * Creates content rectangle based on the provided dimensions
	 * and the top/left positions.
	 *
	 * @param {Number} width - Width of rectangle.
	 * @param {Number} height - Height of rectangle.
	 * @param {Number} top - Top position.
	 * @param {Number} left - Left position.
	 * @returns {ClientRect}
	 */
	function createContentRect(width, height, top, left) {
	    return {
	        width: width, height: height, top: top,
	        right: width + left,
	        bottom: height + top,
	        left: left
	    };
	}
	
	/**
	 * Calculates content rectangle of provided SVG element.
	 *
	 * @param {SVGElement} target - Element whose content
	 *      rectangle needs to be calculated.
	 * @returns {ClientRect}
	 */
	function getSVGContentRect(target) {
	    var bbox = target.getBBox();
	
	    return createContentRect(bbox.width, bbox.height, 0, 0);
	}
	
	/**
	 * Calculates content rectangle of a root element.
	 *
	 * @returns {ClientRect}
	 */
	function getDocElementRect() {
	    // Neither scroll[Width/Height] nor offset[Width/Height] can be used to
	    // define content dimensions as they give inconsistent results across
	    // different browsers. E.g. in the Internet Explorer 10 and lower value of
	    // these properties can't be less than the client dimensions (same thing
	    // with the "getBoundingClientRect" method). And Firefox has the same
	    // behavior with its "scroll" properties.
	    var styles = getStyles(document.documentElement);
	
	    var width = pixelsToNumber(styles.width);
	    var height = pixelsToNumber(styles.height);
	
	    return createContentRect(width, height, 0, 0);
	}
	
	/**
	 * Calculates content rectangle of provided HTMLElement.
	 *
	 * @param {HTMLElement} target - Element whose content
	 *      rectangle needs to be calculated.
	 * @returns {ClientRect}
	 */
	function getHTMLElementContentRect(target) {
	    // Client width & height properties can't be
	    // used exclusively as they provide rounded values.
	    var clientWidth = target.clientWidth;
	    var clientHeight = target.clientHeight;
	
	    // By this condition we can catch all non-replaced inline, hidden and detached
	    // elements. Though elements with width & height properties less than 0.5 will
	    // be discarded as well.
	    //
	    // Without it we would need to implement separate methods for each of
	    // those cases and it's not possible to perform a precise and performance
	    // effective test for hidden elements. E.g. even jQuerys' ':visible' filter
	    // gives wrong results for elements with width & height less than 0.5.
	    if (!clientWidth && !clientHeight) {
	        return emptyRect;
	    }
	
	    var styles = getStyles(target);
	    var paddings = getPaddings(styles);
	    var horizPad = paddings.left + paddings.right;
	    var vertPad = paddings.top + paddings.bottom;
	
	    // Computed styles of width & height are being used because they are the
	    // only dimensions available to JS that contain non-rounded values. It could
	    // be possible to utilize getBoundingClientRect if only its' data wasn't
	    // affected by CSS transformations let alone paddings, borders and scroll bars.
	    var width = pixelsToNumber(styles.width),
	        height = pixelsToNumber(styles.height);
	
	    // Width & height include paddings and borders
	    // when 'border-box' box model is applied (except for IE).
	    if (styles.boxSizing === 'border-box') {
	        // Following conditions are required to handle Internet Explorer which
	        // doesn't include paddings and borders to computed CSS dimensions.
	        //
	        // We can say that if CSS dimensions + paddings are equal to the "client"
	        // properties then it's either IE, and thus we don't need to subtract
	        // anything, or an element merely doesn't have paddings/borders styles.
	        if (Math.round(width + horizPad) !== clientWidth) {
	            width -= getBordersSize(styles, 'left', 'right') + horizPad;
	        }
	
	        if (Math.round(height + vertPad) !== clientHeight) {
	            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
	        }
	    }
	
	    // In some browsers (only in Firefox, actually) CSS width & height
	    // include scroll bars size which can be removed at this step as scroll bars
	    // are the only difference between rounded dimensions + paddings and "client"
	    // properties, though that is not always true in Chrome.
	    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
	    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
	
	    // Chrome has a rather weird rounding of "client" properties.
	    // E.g. for an element with content width of 314.2px it sometimes gives the
	    // client width of 315px and for the width of 314.7px it may give 314px.
	    // And it doesn't happen all the time. Such difference needs to be ignored.
	    if (Math.abs(vertScrollbar) !== 1) {
	        width -= vertScrollbar;
	    }
	
	    if (Math.abs(horizScrollbar) !== 1) {
	        height -= horizScrollbar;
	    }
	
	    return createContentRect(width, height, paddings.top, paddings.left);
	}
	
	/**
	 * Checks whether provided element is an instance of SVGElement.
	 *
	 * @param {Element} target - Element to be checked.
	 * @returns {Boolean}
	 */
	function isSVGElement(target) {
	    return target instanceof window.SVGElement;
	}
	
	/**
	 * Checks whether provided element is a document element (root element of a document).
	 *
	 * @param {Element} target - Element to be checked.
	 * @returns {Boolean}
	 */
	function isDocumentElement(target) {
	    return target === document.documentElement;
	}
	
	/**
	 * Calculates an appropriate content rectangle for provided html or svg element.
	 *
	 * @param {Element} target - Element whose content rectangle
	 *      needs to be calculated.
	 * @returns {ClientRect}
	 */
	function getContentRect(target) {
	    if (isSVGElement(target)) {
	        return getSVGContentRect(target);
	    }
	
	    if (isDocumentElement(target)) {
	        return getDocElementRect();
	    }
	
	    return getHTMLElementContentRect(target);
	}
	
	/**
	 * Class that is responsible for computations of the content rectangle of
	 * provided DOM element and for keeping track of its' changes.
	 */
	var ResizeObservation = function () {
	    /**
	     * Creates an instance of ResizeObservation.
	     *
	     * @param {Element} target - Element to be observed.
	     */
	    function ResizeObservation(target) {
	        classCallCheck(this, ResizeObservation);
	
	        this.target = target;
	
	        // Keeps reference to the last observed content rectangle.
	        this._contentRect = emptyRect;
	
	        // Broadcasted width of content rectangle.
	        this.broadcastWidth = 0;
	
	        // Broadcasted height of content rectangle.
	        this.broadcastHeight = 0;
	    }
	
	    /**
	     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
	     * from the corresponding properties of the last observed content rectangle.
	     *
	     * @returns {ClientRect} Last observed content rectangle.
	     */
	    ResizeObservation.prototype.broadcastRect = function broadcastRect() {
	        var rect = this._contentRect;
	
	        this.broadcastWidth = rect.width;
	        this.broadcastHeight = rect.height;
	
	        return rect;
	    };
	
	    /**
	     * Updates content rectangle and tells whether its' width or height properties
	     * have changed since the last broadcast.
	     *
	     * @returns {Boolean}
	     */
	    ResizeObservation.prototype.isActive = function isActive() {
	        var rect = getContentRect(this.target);
	
	        this._contentRect = rect;
	
	        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
	    };
	
	    return ResizeObservation;
	}();
	
	/**
	 * Defines properties of the provided target object.
	 *
	 * @param {Object} target - Object for which to define properties.
	 * @param {Object} props - Properties to be defined.
	 * @param {Object} [descr = {}] - Properties descriptor.
	 * @returns {Object} Target object.
	 */
	function defineProperties(target, props) {
	    var descr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    var descriptor = {
	        configurable: descr.configurable || false,
	        writable: descr.writable || false,
	        enumerable: descr.enumerable || false
	    };
	
	    for (var _iterator = Object.keys(props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	        var _ref;
	
	        if (_isArray) {
	            if (_i >= _iterator.length) break;
	            _ref = _iterator[_i++];
	        } else {
	            _i = _iterator.next();
	            if (_i.done) break;
	            _ref = _i.value;
	        }
	
	        var key = _ref;
	
	        descriptor.value = props[key];
	
	        Object.defineProperty(target, key, descriptor);
	    }
	
	    return target;
	}
	
	var ResizeObserverEntry =
	/**
	 * Creates an instance of ResizeObserverEntry.
	 *
	 * @param {Element} target - Element that is being observed.
	 * @param {ClientRect} rectData - Data of the elements' content rectangle.
	 */
	function ResizeObserverEntry(target, rectData) {
	    classCallCheck(this, ResizeObserverEntry);
	
	    // Content rectangle needs to be an instance of ClientRect if it's
	    // available.
	    var rectInterface = window.ClientRect || Object;
	    var contentRect = Object.create(rectInterface.prototype);
	
	    // According to the specification following properties are not writable
	    // and are also not enumerable in the native implementation.
	    //
	    // Property accessors are not being used as they'd require to define a
	    // private WeakMap storage which may cause memory leaks in browsers that
	    // don't support this type of collections.
	    defineProperties(contentRect, rectData, { configurable: true });
	
	    defineProperties(this, {
	        target: target, contentRect: contentRect
	    }, { configurable: true });
	};
	
	var ResizeObserver$3 = function () {
	    /**
	     * Creates a new instance of ResizeObserver.
	     *
	     * @param {Function} callback - Callback function that is invoked when one
	     *      of the observed elements changes it's content rectangle.
	     * @param {ResizeObsreverController} controller - Controller instance which
	     *      is responsible for the updates of observer.
	     * @param {ResizeObserver} publicObserver - Reference to the public
	     *      ResizeObserver instance which will be passed to callback function.
	     */
	    function ResizeObserver(callback, controller, publicObserver) {
	        classCallCheck(this, ResizeObserver);
	
	        if (typeof callback !== 'function') {
	            throw new TypeError('The callback provided as parameter 1 is not a function.');
	        }
	
	        // Reference to the callback function.
	        this._callback = callback;
	
	        // Registry of ResizeObservation instances.
	        this._targets = new Map();
	
	        // Collection of resize observations that have detected changes in
	        // dimensions of elements.
	        this._activeTargets = [];
	
	        // Reference to the associated ResizeObserverController.
	        this._controller = controller;
	
	        // Public ResizeObserver instance which will be passed to callback function.
	        this._publicObserver = publicObserver;
	    }
	
	    /**
	     * Starts observing provided element.
	     *
	     * @param {Element} target - Element to be observed.
	     */
	    ResizeObserver.prototype.observe = function observe(target) {
	        //  Throw the same errors as in a native implementation.
	        if (!arguments.length) {
	            throw new TypeError('1 argument required, but only 0 present.');
	        }
	
	        if (!(target instanceof Element)) {
	            throw new TypeError('parameter 1 is not of type "Element".');
	        }
	
	        var targets = this._targets;
	
	        // Do nothing if element is already being observed.
	        if (targets.has(target)) {
	            return;
	        }
	
	        // Register new ResizeObservation instance.
	        targets.set(target, new ResizeObservation(target));
	
	        // Add observer to controller if it hasn't been connected yet.
	        if (!this._controller.isConnected(this)) {
	            this._controller.connect(this);
	        }
	
	        // Update observations.
	        this._controller.refresh();
	    };
	
	    /**
	     * Stops observing provided element.
	     *
	     * @param {Element} target - Element to stop observing.
	     */
	    ResizeObserver.prototype.unobserve = function unobserve(target) {
	        //  Throw the same errors as in a native implementation.
	        if (!arguments.length) {
	            throw new TypeError('1 argument required, but only 0 present.');
	        }
	
	        if (!(target instanceof Element)) {
	            throw new TypeError('parameter 1 is not of type "Element".');
	        }
	
	        var targets = this._targets;
	
	        // Do nothing if element is not being observed.
	        if (!targets.has(target)) {
	            return;
	        }
	
	        // Remove element and associated with it ResizeObsrvation instance from
	        // registry.
	        targets.delete(target);
	
	        // Set back the initial state if there is nothing to observe.
	        if (!targets.size) {
	            this.disconnect();
	        }
	    };
	
	    /**
	     * Stops observing all elements and clears the observations list.
	     */
	    ResizeObserver.prototype.disconnect = function disconnect() {
	        this.clearActive();
	        this._targets.clear();
	        this._controller.disconnect(this);
	    };
	
	    /**
	     * Clears an array of previously collected active observations and collects
	     * observation instances which associated element has changed its' content
	     * rectangle.
	     */
	    ResizeObserver.prototype.gatherActive = function gatherActive() {
	        this.clearActive();
	
	        var activeTargets = this._activeTargets;
	
	        this._targets.forEach(function (observation) {
	            if (observation.isActive()) {
	                activeTargets.push(observation);
	            }
	        });
	    };
	
	    /**
	     * Invokes initial callback function with a list of ResizeObserverEntry
	     * instances collected from active resize observations.
	     */
	    ResizeObserver.prototype.broadcastActive = function broadcastActive() {
	        // Do nothing if observer doesn't have active observations.
	        if (!this.hasActive()) {
	            return;
	        }
	
	        var observer = this._publicObserver;
	
	        // Create ResizeObserverEntry instance for every active observation.
	        var entries = this._activeTargets.map(function (observation) {
	            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
	        });
	
	        this.clearActive();
	        this._callback.call(observer, entries, observer);
	    };
	
	    /**
	     * Clears the collection of pending/active observations.
	     */
	    ResizeObserver.prototype.clearActive = function clearActive() {
	        this._activeTargets.splice(0);
	    };
	
	    /**
	     * Tells whether observer has pending observations.
	     *
	     * @returns {Boolean}
	     */
	    ResizeObserver.prototype.hasActive = function hasActive() {
	        return !!this._activeTargets.length;
	    };
	
	    return ResizeObserver;
	}();
	
	// Controller that will be assigned to all instances of ResizeObserver.
	var controller = new ResizeObserverController();
	
	// Registry of the internal observers.
	var observers = new WeakMap();
	
	/**
	 * ResizeObservers' "Proxy" class which is meant to hide private properties and
	 * methods from public instances.
	 *
	 * Additionally implements the "continuousUpdates" static property accessor to
	 * give control over the behavior of the ResizeObserverController instance.
	 * Changes made to this property affect all future and existing observers.
	 */
	var ResizeObserver$2 = function () {
	    /**
	     * Creates a new instance of ResizeObserver.
	     *
	     * @param {Function} callback - Callback that is invoked when dimensions of
	     *      one of the observed elements change.
	     */
	    function ResizeObserver(callback) {
	        classCallCheck(this, ResizeObserver);
	
	        if (!arguments.length) {
	            throw new TypeError('1 argument required, but only 0 present.');
	        }
	
	        // Create a new instance of the internal ResizeObserver.
	        var observer = new ResizeObserver$3(callback, controller, this);
	
	        // Register internal observer.
	        observers.set(this, observer);
	    }
	
	    createClass(ResizeObserver, null, [{
	        key: 'continuousUpdates',
	
	        /**
	         * Tells whether continuous updates are enabled.
	         *
	         * @returns {Boolean}
	         */
	        get: function get() {
	            return controller.continuousUpdates;
	        },
	
	        /**
	         * Enables or disables continuous updates.
	         *
	         * @param {Boolean} value - Whether to enable or disable continuous updates.
	         */
	        set: function set(value) {
	            if (typeof value !== 'boolean') {
	                throw new TypeError('type of "continuousUpdates" value must be boolean.');
	            }
	
	            controller.continuousUpdates = value;
	        }
	    }]);
	    return ResizeObserver;
	}();
	
	// Expose public methods of ResizeObserver.
	['observe', 'unobserve', 'disconnect'].forEach(function (method) {
	    ResizeObserver$2.prototype[method] = function () {
	        var _observers$get;
	
	        return (_observers$get = observers.get(this))[method].apply(_observers$get, arguments);
	    };
	});
	
	var ResizeObserver = ResizeObserver$2;
	
	// Export existing implementation if it's available.
	if (typeof window.ResizeObserver === 'function') {
	    ResizeObserver = window.ResizeObserver;
	}
	
	var ResizeObserver$1 = ResizeObserver;
	
	return ResizeObserver$1;
	})));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _Hover=__webpack_require__(13);var _Hover2=_interopRequireDefault(_Hover);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Hover=function(_Component){_inherits(Hover,_Component);function Hover(){_classCallCheck(this,Hover);return _possibleConstructorReturn(this,(Hover.__proto__||Object.getPrototypeOf(Hover)).apply(this,arguments));}_createClass(Hover,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('div',{className:_Hover2.default.hover+' oui-chart-hover'},_react2.default.createElement('div',{className:'hover-attribute-label'},this.props.label),Object.keys(this.props.attributes).map(function(key){return _react2.default.createElement('div',{key:key,className:'hover-attributes'},_react2.default.createElement('span',{className:_Hover2.default['hover-attribute-key']+' hover-attribute-key'},key),_react2.default.createElement('span',{className:_Hover2.default['hover-attribute-value']+' hover-attribute-value'},_this2.props.attributes[key]));}));}}]);return Hover;}(_react.Component);Hover.propTypes={label:_react.PropTypes.string,attributes:_react.PropTypes.object};exports.default=Hover;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hover":"Hover__hover___3j3DQ","hover-attribute-label":"Hover__hover-attribute-label___2NMdZ","hover-attribute-key":"Hover__hover-attribute-key___2b6z_","hover-attribute-value":"Hover__hover-attribute-value___UB5f8"};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"oui-chart":"Chart__oui-chart___13MaY"};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _PropTypes=__webpack_require__(4);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _BucketData=__webpack_require__(19);var _BucketData2=_interopRequireDefault(_BucketData);var _Rect=__webpack_require__(21);var _Rect2=_interopRequireDefault(_Rect);var _Line=__webpack_require__(24);var _Line2=_interopRequireDefault(_Line);var _Formatters=__webpack_require__(25);var _d=__webpack_require__(1);var _d2=_interopRequireDefault(_d);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Bars=function(_Component){_inherits(Bars,_Component);function Bars(){_classCallCheck(this,Bars);return _possibleConstructorReturn(this,(Bars.__proto__||Object.getPrototypeOf(Bars)).apply(this,arguments));}_createClass(Bars,[{key:'renderBars',value:function renderBars(){var bars=[];var p=this.percent;var numberFormatter=this.props.numberFormatter;var _context=this.context,outerPadding=_context.outerPadding,padding=_context.padding;var validBuckets=this.getValidBuckets();var deviation=this.props.standardDeviation?this.getValidBuckets(this.props.standardDeviation):false;var valueKeys=Object.keys(validBuckets[0]||{}).filter(function(key){return!key.match(/^_/);});var facetCount=valueKeys.length;var bucketX=this.getBucketScale();var bucketSize=bucketX.rangeBand();var vals=this.getValues();var _buildVerticalScales=this.buildVerticalScales(),ht=_buildVerticalScales.ht,y=_buildVerticalScales.y;var color=_d2.default.scale.category20().domain(_d2.default.range(facetCount));validBuckets.forEach(function(bucket,i){var currentBucketX=bucketX(i);var barX=_d2.default.scale.ordinal().domain(_d2.default.range(facetCount)).rangeBands([currentBucketX,currentBucketX+bucketSize],padding,outerPadding);var barWidth=barX.rangeBand();valueKeys.forEach(function(key,j){var barKey=key+'_'+i;var animationOffset=750/vals.length;var hoverData={label:bucket._label,attributes:_defineProperty({},key,numberFormatter(bucket[key]))};if(bucket._meta&&bucket._meta[key]){hoverData.attributes=Object.assign(hoverData.attributes,bucket._meta[key]);}if(deviation&&deviation[i]){hoverData.attributes['Std. Dev.']=numberFormatter(deviation[i][key]);}bars.push(_react2.default.createElement(_Rect2.default,{key:barKey,x:p(barX(j)),width:p(barWidth),height:p(ht(bucket[key])),y:p(y(bucket[key])),fill:color(j),hoverKey:barKey,hoverData:hoverData,animationDuration:750,animationDelay:bars.length*animationOffset}));if(deviation&&deviation[i]){var devKey=barKey+'_dev';bars.push(_react2.default.createElement(_Line2.default,{key:devKey,x1:p(barX(j)+barWidth/2),x2:p(barX(j)+barWidth/2),y1:p(y(bucket[key])-ht(deviation[i][key])),y2:p(y(bucket[key])+ht(deviation[i][key])),stroke:color(j),hoverKey:barKey,hoverData:hoverData,style:{strokeWidth:3},animationDuration:750,animationDelay:bars.length*animationOffset}));}});});return bars;}},{key:'render',value:function render(){return _react2.default.createElement('g',null,this.renderBars());}}]);return Bars;}(_react.Component);Bars.propTypes={width:_PropTypes.Size,height:_PropTypes.Size,data:_react.PropTypes.array.isRequired,minY:_react.PropTypes.number,maxY:_react.PropTypes.number,standardDeviation:_react.PropTypes.oneOfType([_react.PropTypes.array,_react.PropTypes.bool]),numberFormatter:_react.PropTypes.func};Bars.defaultProps={numberFormatter:_Formatters.number};Bars.contextTypes={padding:_react.PropTypes.number.isRequired,outerPadding:_react.PropTypes.number.isRequired,tickMarks:_react.PropTypes.bool,isActiveElement:_react.PropTypes.func};_reactMixin2.default.onClass(Bars,_BucketData2.default);exports.default=Bars;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var mixin = __webpack_require__(17);
	var assign = __webpack_require__(18);
	
	var mixinProto = mixin({
	  // lifecycle stuff is as you'd expect
	  componentDidMount: mixin.MANY,
	  componentWillMount: mixin.MANY,
	  componentWillReceiveProps: mixin.MANY,
	  shouldComponentUpdate: mixin.ONCE,
	  componentWillUpdate: mixin.MANY,
	  componentDidUpdate: mixin.MANY,
	  componentWillUnmount: mixin.MANY,
	  getChildContext: mixin.MANY_MERGED
	});
	
	function setDefaultProps(reactMixin) {
	  var getDefaultProps = reactMixin.getDefaultProps;
	
	  if (getDefaultProps) {
	    reactMixin.defaultProps = getDefaultProps();
	
	    delete reactMixin.getDefaultProps;
	  }
	}
	
	function setInitialState(reactMixin) {
	  var getInitialState = reactMixin.getInitialState;
	  var componentWillMount = reactMixin.componentWillMount;
	
	  function applyInitialState(instance) {
	    var state = instance.state || {};
	    assign(state, getInitialState.call(instance));
	    instance.state = state;
	  }
	
	  if (getInitialState) {
	    if (!componentWillMount) {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	      };
	    } else {
	      reactMixin.componentWillMount = function() {
	        applyInitialState(this);
	        componentWillMount.call(this);
	      };
	    }
	
	    delete reactMixin.getInitialState;
	  }
	}
	
	function mixinClass(reactClass, reactMixin) {
	  setDefaultProps(reactMixin);
	  setInitialState(reactMixin);
	
	  var prototypeMethods = {};
	  var staticProps = {};
	
	  Object.keys(reactMixin).forEach(function(key) {
	    if (key === 'mixins') {
	      return; // Handled below to ensure proper order regardless of property iteration order
	    }
	    if (key === 'statics') {
	      return; // gets special handling
	    } else if (typeof reactMixin[key] === 'function') {
	      prototypeMethods[key] = reactMixin[key];
	    } else {
	      staticProps[key] = reactMixin[key];
	    }
	  });
	
	  mixinProto(reactClass.prototype, prototypeMethods);
	
	  var mergePropTypes = function(left, right, key) {
	    if (!left) return right;
	    if (!right) return left;
	
	    var result = {};
	    Object.keys(left).forEach(function(leftKey) {
	      if (!right[leftKey]) {
	        result[leftKey] = left[leftKey];
	      }
	    });
	
	    Object.keys(right).forEach(function(rightKey) {
	      if (left[rightKey]) {
	        result[rightKey] = function checkBothContextTypes() {
	          return right[rightKey].apply(this, arguments) && left[rightKey].apply(this, arguments);
	        };
	      } else {
	        result[rightKey] = right[rightKey];
	      }
	    });
	
	    return result;
	  };
	
	  mixin({
	    childContextTypes: mergePropTypes,
	    contextTypes: mergePropTypes,
	    propTypes: mixin.MANY_MERGED_LOOSE,
	    defaultProps: mixin.MANY_MERGED_LOOSE
	  })(reactClass, staticProps);
	
	  // statics is a special case because it merges directly onto the class
	  if (reactMixin.statics) {
	    Object.getOwnPropertyNames(reactMixin.statics).forEach(function(key) {
	      var left = reactClass[key];
	      var right = reactMixin.statics[key];
	
	      if (left !== undefined && right !== undefined) {
	        throw new TypeError('Cannot mixin statics because statics.' + key + ' and Component.' + key + ' are defined.');
	      }
	
	      reactClass[key] = left !== undefined ? left : right;
	    });
	  }
	
	  // If more mixins are defined, they need to run. This emulate's react's behavior.
	  // See behavior in code at:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L468
	  // Note the .reverse(). In React, a fresh constructor is created, then all mixins are mixed in recursively,
	  // then the actual spec is mixed in last.
	  //
	  // With ES6 classes, the properties are already there, so smart-mixin mixes functions (a, b) -> b()a(), which is
	  // the opposite of how React does it. If we reverse this array, we basically do the whole logic in reverse,
	  // which makes the result the same. See the test for more.
	  // See also:
	  // https://github.com/facebook/react/blob/41aa3496aa632634f650edbe10d617799922d265/src/isomorphic/classic/class/ReactClass.js#L853
	  if (reactMixin.mixins) {
	    reactMixin.mixins.reverse().forEach(mixinClass.bind(null, reactClass));
	  }
	
	  return reactClass;
	}
	
	module.exports = (function() {
	  var reactMixin = mixinProto;
	
	  reactMixin.onClass = function(reactClass, mixin) {
	    // we mutate the mixin so let's clone it
	    mixin = assign({}, mixin);
	    return mixinClass(reactClass, mixin);
	  };
	
	  reactMixin.decorate = function(mixin) {
	    return function(reactClass) {
	      return reactMixin.onClass(reactClass, mixin);
	    };
	  };
	
	  return reactMixin;
	})();


/***/ },
/* 17 */
/***/ function(module, exports) {

	function objToStr(x){ return Object.prototype.toString.call(x); };
	
	function returner(x) { return x; }
	
	function wrapIfFunction(thing){
	    return typeof thing !== "function" ? thing
	    : function(){
	        return thing.apply(this, arguments);
	    };
	}
	
	function setNonEnumerable(target, key, value){
	    if (key in target){
	        target[key] = value;
	    }
	    else {
	        Object.defineProperty(target, key, {
	            value: value,
	            writable: true,
	            configurable: true
	        });
	    }
	}
	
	function defaultNonFunctionProperty(left, right, key){
	    if (left !== undefined && right !== undefined) {
	        var getTypeName = function(obj){
	            if (obj && obj.constructor && obj.constructor.name) {
	                return obj.constructor.name;
	            }
	            else {
	                return objToStr(obj).slice(8, -1);
	            }
	        };
	        throw new TypeError('Cannot mixin key ' + key + ' because it is provided by multiple sources, '
	                + 'and the types are ' + getTypeName(left) + ' and ' + getTypeName(right));
	    }
	    return left === undefined ? right : left;
	};
	
	function assertObject(obj, obj2){
	    var type = objToStr(obj);
	    if (type !== '[object Object]') {
	        var displayType = obj.constructor ? obj.constructor.name : 'Unknown';
	        var displayType2 = obj2.constructor ? obj2.constructor.name : 'Unknown';
	        throw new Error('cannot merge returned value of type ' + displayType + ' with an ' + displayType2);
	    }
	};
	
	
	var mixins = module.exports = function makeMixinFunction(rules, _opts){
	    var opts = _opts || {};
	
	    if (!opts.unknownFunction) {
	        opts.unknownFunction = mixins.ONCE;
	    }
	
	    if (!opts.nonFunctionProperty) {
	        opts.nonFunctionProperty = defaultNonFunctionProperty;
	    }
	
	    return function applyMixin(source, mixin){
	        Object.keys(mixin).forEach(function(key){
	            var left = source[key], right = mixin[key], rule = rules[key];
	
	            // this is just a weird case where the key was defined, but there's no value
	            // behave like the key wasn't defined
	            if (left === undefined && right === undefined) return;
	
	            // do we have a rule for this key?
	            if (rule) {
	                // may throw here
	                var fn = rule(left, right, key);
	                setNonEnumerable(source, key, wrapIfFunction(fn));
	                return;
	            }
	
	            var leftIsFn = typeof left === "function";
	            var rightIsFn = typeof right === "function";
	
	            // check to see if they're some combination of functions or undefined
	            // we already know there's no rule, so use the unknown function behavior
	            if (leftIsFn && right === undefined
	             || rightIsFn && left === undefined
	             || leftIsFn && rightIsFn) {
	                // may throw, the default is ONCE so if both are functions
	                // the default is to throw
	                setNonEnumerable(source, key, wrapIfFunction(opts.unknownFunction(left, right, key)));
	                return;
	            }
	
	            // we have no rule for them, one may be a function but one or both aren't
	            // our default is MANY_MERGED_LOOSE which will merge objects, concat arrays
	            // and throw if there's a type mismatch or both are primitives (how do you merge 3, and "foo"?)
	            source[key] = opts.nonFunctionProperty(left, right, key);
	        });
	    };
	};
	
	mixins._mergeObjects = function(obj1, obj2) {
	    if (Array.isArray(obj1) && Array.isArray(obj2)) {
	        return obj1.concat(obj2);
	    }
	
	    assertObject(obj1, obj2);
	    assertObject(obj2, obj1);
	
	    var result = {};
	    Object.keys(obj1).forEach(function(k){
	        if (Object.prototype.hasOwnProperty.call(obj2, k)) {
	            throw new Error('cannot merge returns because both have the ' + JSON.stringify(k) + ' key');
	        }
	        result[k] = obj1[k];
	    });
	
	    Object.keys(obj2).forEach(function(k){
	        // we can skip the conflict check because all conflicts would already be found
	        result[k] = obj2[k];
	    });
	    return result;
	};
	
	// define our built-in mixin types
	mixins.ONCE = function(left, right, key){
	    if (left && right) {
	        throw new TypeError('Cannot mixin ' + key + ' because it has a unique constraint.');
	    }
	    return left || right;
	};
	
	mixins.MANY = function(left, right, key){
	    return function(){
	        if (right) right.apply(this, arguments);
	        return left ? left.apply(this, arguments) : undefined;
	    };
	};
	
	mixins.MANY_MERGED_LOOSE = function(left, right, key) {
	    if (left && right) {
	        return mixins._mergeObjects(left, right);
	    }
	    return left || right;
	};
	
	mixins.MANY_MERGED = function(left, right, key){
	    return function(){
	        var res1 = right && right.apply(this, arguments);
	        var res2 = left && left.apply(this, arguments);
	        if (res1 && res2) {
	            return mixins._mergeObjects(res1, res2)
	        }
	        return res2 || res1;
	    };
	};
	
	mixins.REDUCE_LEFT = function(_left, _right, key){
	    var left = _left || returner;
	    var right = _right || returner;
	    return function(){
	        return right.call(this, left.apply(this, arguments));
	    };
	};
	
	mixins.REDUCE_RIGHT = function(_left, _right, key){
	    var left = _left || returner;
	    var right = _right || returner;
	    return function(){
	        return left.call(this, right.apply(this, arguments));
	    };
	};
	


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _d2=__webpack_require__(1);var _d3=_interopRequireDefault(_d2);var _react=__webpack_require__(3);var _underscore=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var bucketData={getMinY:function getMinY(){var out=void 0;if(this.props&&!isNaN(this.props.minY)){out=this.props.minY;}return out;},getMaxY:function getMaxY(){var out=void 0;if(this.props&&!isNaN(this.props.maxY)){out=this.props.maxY;}return out;},getValidBuckets:function getValidBuckets(data){var dt=data||this.props.data;var validBuckets=(0,_underscore.filter)(dt,function(bucket){return(0,_underscore.some)(bucket,function(val,key){return val!==null&&!key.match(/^_/);});});return validBuckets;},getValues:function getValues(data){var dt=data||this.props.data;var validBuckets=this.getValidBuckets(dt);var valueBuckets=validBuckets.map(function(bucket){var out={};Object.keys(bucket).filter(function(k){return!k.match(/^_/);}).forEach(function(k){out[k]=bucket[k];});return out;});return(0,_underscore.filter)((0,_underscore.flatten)(valueBuckets.map(_underscore.values)),function(val){return val!==null;});},getValueKeys:function getValueKeys(data){var dt=data||this.props.data;var validBuckets=this.getValidBuckets(dt);return Object.keys(validBuckets[0]||{}).filter(function(key){return!key.match(/^_/);});},getBucketScale:function getBucketScale(data){var dt=data||this.props.data;var validBuckets=this.getValidBuckets(dt);var bucketCount=validBuckets.length;var _context=this.context,outerPadding=_context.outerPadding,padding=_context.padding;return _d3.default.scale.ordinal().domain(_d3.default.range(bucketCount)).rangeBands([this.getLeftX(),100],padding,outerPadding);},getLeftX:function getLeftX(){return this.context.tickMarks||this.props.tickMarks?10:0;},buildXExtents:function buildXExtents(){var _context2=this.context,padding=_context2.padding,outerPadding=_context2.outerPadding;var widthBand=_d3.default.scale.ordinal().domain([0,1]).rangeBands([this.getLeftX(),100],padding,outerPadding);var totalWidth=widthBand.rangeBand();var _widthBand$range=widthBand.range(),_widthBand$range2=_slicedToArray(_widthBand$range,2),minX=_widthBand$range2[0],maxX=_widthBand$range2[1];return[this.getLeftX(),maxX-minX+totalWidth];},buildYExtents:function buildYExtents(){var _context3=this.context,padding=_context3.padding,outerPadding=_context3.outerPadding;var heightBand=_d3.default.scale.ordinal().domain([0,1]).rangeBands([0,95],padding,outerPadding);var totalHeight=heightBand.rangeBand();var _heightBand$range=heightBand.range(),_heightBand$range2=_slicedToArray(_heightBand$range,2),minY=_heightBand$range2[0],maxY=_heightBand$range2[1];return[0,maxY-minY+totalHeight];},paddedExtent:function paddedExtent(vals,minimum,maximum){var _d3$extent=_d3.default.extent(vals),_d3$extent2=_slicedToArray(_d3$extent,2),minVal=_d3$extent2[0],maxVal=_d3$extent2[1];if(typeof minimum!=='undefined'){minVal=minimum;}if(typeof maximum!=='undefined'){maxVal=maximum;}var offset=Math.max(0.1,(maxVal-minVal)*this.context.outerPadding);return[minVal-offset,maxVal+offset];},percent:function percent(input){return input.toString()+'%';},getColorScale:function getColorScale(data){var dt=data||this.props.data;var valueKeys=this.getValueKeys(dt);return _d3.default.scale.category20().domain(_d3.default.range(valueKeys.length));},getBucketAverage:function getBucketAverage(bucket){var vals=(0,_underscore.values)((0,_underscore.omit)(bucket,function(val,key){return key.match(/^_/);}));return _d3.default.mean(vals);},buildVerticalScales:function buildVerticalScales(){var vals=this.getValues();var yExtents=this.buildYExtents();var ht=_d3.default.scale.linear().domain(this.paddedExtent(vals,this.getMinY(),this.getMaxY())).nice().clamp(true).range(yExtents);var y=ht.copy().range(yExtents.reverse());return{ht:ht,y:y};},getValueExtents:function getValueExtents(minimum,maximum){var vals=this.getValues();var minVal=(0,_underscore.min)(vals);var maxVal=(0,_underscore.max)(vals);if(typeof minimum!=='undefined'){minVal=minimum;}if(typeof maximum!=='undefined'){maxVal=maximum;}return[minVal,maxVal];},getVerticalExtents:function getVerticalExtents(){var _buildVerticalScales=this.buildVerticalScales(),y=_buildVerticalScales.y;var _getValueExtents=this.getValueExtents(this.getMinY(),this.getMaxY()),_getValueExtents2=_slicedToArray(_getValueExtents,2),minVal=_getValueExtents2[0],maxVal=_getValueExtents2[1];return[y(maxVal),y(minVal)];},getTickMarks:function getTickMarks(){var tickCount=arguments.length>0&&arguments[0]!==undefined?arguments[0]:4;var format=_d3.default.format('.2f');var _buildVerticalScales2=this.buildVerticalScales(),y=_buildVerticalScales2.y;return y.ticks(tickCount).map(function(val){return{value:val,label:format(val),y:y(val)};});},contextTypes:{padding:_react.PropTypes.number.isRequired,outerPadding:_react.PropTypes.number.isRequired,tickMarks:_react.PropTypes.bool}};exports.default=bucketData;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function() {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var
	    push             = ArrayProto.push,
	    slice            = ArrayProto.slice,
	    toString         = ObjProto.toString,
	    hasOwnProperty   = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var
	    nativeIsArray      = Array.isArray,
	    nativeKeys         = Object.keys,
	    nativeBind         = FuncProto.bind,
	    nativeCreate       = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function(){};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1: return function(value) {
	        return func.call(context, value);
	      };
	      case 2: return function(value, other) {
	        return func.call(context, value, other);
	      };
	      case 3: return function(value, index, collection) {
	        return func.call(context, value, index, collection);
	      };
	      case 4: return function(accumulator, value, index, collection) {
	        return func.call(context, accumulator, value, index, collection);
	      };
	    }
	    return function() {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function(value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function(keysFunc, undefinedOnly) {
	    return function(obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor;
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function(key) {
	    return function(obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function(obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function(obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function(obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function(obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function(value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function(obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function(obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function(value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function(obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function(obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function(obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function(obj, iteratee, context) {
	    var result = -Infinity, lastComputed = -Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function(obj, iteratee, context) {
	    var result = Infinity, lastComputed = Infinity,
	        value, computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function(obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function(obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function(value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function(left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function(behavior) {
	    return function(obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function(value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function(result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function(result, value, key) {
	    if (_.has(result, key)) result[key]++; else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function(obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function(obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [], fail = [];
	    _.each(obj, function(value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function(array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function(array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function(array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function(array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function(input, shallow, strict, startIndex) {
	    var output = [], idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0, len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function(array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function(array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function() {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function(array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function(array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function(value){
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function() {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function(array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function(list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function(array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function(array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0, high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function(array, item, idx) {
	      var i = 0, length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	            i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function(start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function(func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function(func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function() {
	      var position = 0, length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) args.push(arguments[position++]);
	      return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function(obj) {
	    var i, length = arguments.length, key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function(func, hasher) {
	    var memoize = function(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function(func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function(){
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function(func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function() {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function() {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function(func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function() {
	    var args = arguments;
	    var start = args.length - 1;
	    return function() {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) result = args[i].call(this, result);
	      return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function(times, func) {
	    return function() {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function(times, func) {
	    var memo;
	    return function() {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
	                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) if (_.has(obj, key)) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function(obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function(obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys =  _.keys(obj),
	          length = keys.length,
	          results = {},
	          currentKey;
	      for (var index = 0; index < length; index++) {
	        currentKey = keys[index];
	        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	      }
	      return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function(obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function(obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function(obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function(obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj), key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function(object, oiteratee, context) {
	    var result = {}, obj = object, iteratee, keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function(value, key, obj) { return key in obj; };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	   // Return a copy of the object without the blacklisted properties.
	  _.omit = function(obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function(prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function(obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function(obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function(object, attrs) {
	    var keys = _.keys(attrs), length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if (typeof a != 'object' || typeof b != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor, bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
	                               _.isFunction(bCtor) && bCtor instanceof bCtor)
	                          && ('constructor' in a && 'constructor' in b)) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a), key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function(a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function(obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function(obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function(obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function(obj) {
	    var type = typeof obj;
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
	    _['is' + name] = function(obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function(obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
	    _.isFunction = function(obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function(obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function(obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function(obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function(obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function(obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function(obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function() {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function(value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function(value) {
	    return function() {
	      return value;
	    };
	  };
	
	  _.noop = function(){};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function(obj) {
	    return obj == null ? function(){} : function(key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function(attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function(obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function(n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
	    return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function(min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function() {
	    return new Date().getTime();
	  };
	
	   // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function(map) {
	    var escaper = function(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function(string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function(object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function(prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate    : /<%([\s\S]+?)%>/g,
	    interpolate : /<%=([\s\S]+?)%>/g,
	    escape      : /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'":      "'",
	    '\\':     '\\',
	    '\r':     'r',
	    '\n':     'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function(text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([
	      (settings.escape || noMatch).source,
	      (settings.interpolate || noMatch).source,
	      (settings.evaluate || noMatch).source
	    ].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," +
	      "print=function(){__p+=__j.call(arguments,'');};\n" +
	      source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function(obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function(obj) {
	    _.each(_.functions(obj), function(name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function() {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function(name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function() {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function() {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function() {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}.call(this));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _d=__webpack_require__(1);var _d2=_interopRequireDefault(_d);var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(7);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _AnimatedPrimitive=__webpack_require__(22);var _AnimatedPrimitive2=_interopRequireDefault(_AnimatedPrimitive);var _Hoverable=__webpack_require__(23);var _Hoverable2=_interopRequireDefault(_Hoverable);var _underscore=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Rect=function(_Component){_inherits(Rect,_Component);function Rect(){_classCallCheck(this,Rect);return _possibleConstructorReturn(this,(Rect.__proto__||Object.getPrototypeOf(Rect)).apply(this,arguments));}_createClass(Rect,[{key:'componentDidMount',value:function componentDidMount(){var _props=this.props,animationDuration=_props.animationDuration,animationDelay=_props.animationDelay;if(animationDuration){var $el=_d2.default.select((0,_reactDom.findDOMNode)(this));var initialY=$el.attr('y');$el.interrupt().transition().attr('y','100%').duration(animationDuration).delay(animationDelay).attr('y',initialY);}}},{key:'render',value:function render(){var props=_extends({},this.props,{opacity:this.getOpacity()});var okProps=(0,_underscore.omit)(props,['animationDuration','animationDelay','hoverKey','hoverData']);return _react2.default.createElement('rect',_extends({},this.hoverableEvents(),okProps));}}]);return Rect;}(_react.Component);Rect.propTypes={animationDuration:_react.PropTypes.number,animationDelay:_react.PropTypes.number};Rect.defaultProps={animationDuration:1000,animationDelay:0};Rect.contextTypes={setHoverData:_react.PropTypes.func,setActiveElement:_react.PropTypes.func,hasActiveElement:_react.PropTypes.func,activeElement:_react.PropTypes.oneOfType([_react.PropTypes.string,_react.PropTypes.bool])};_reactMixin2.default.onClass(Rect,_AnimatedPrimitive2.default);_reactMixin2.default.onClass(Rect,_Hoverable2.default);exports.default=Rect;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _d=__webpack_require__(1);var _d2=_interopRequireDefault(_d);var _reactDom=__webpack_require__(7);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var AnimatedPrimitive={shouldComponentUpdate:function shouldComponentUpdate(nextProps){var _this=this;var ignore=['animationDuration','animationDelay','hoverData','style'];var props=this.props;var changedKeys=Object.keys(this.props).filter(function(prop){return ignore.indexOf(prop)<0;}).filter(function(prop){return nextProps[prop]!==props[prop];});var shouldUpdate=true;if(changedKeys.length){(function(){var $el=_d2.default.select((0,_reactDom.findDOMNode)(_this));var trans=$el.interrupt().transition().duration(nextProps.animationDuration);changedKeys.forEach(function(key){var val=nextProps[key];trans.attr(key,val);});if(changedKeys.indexOf('children')>0){trans.text(nextProps.children);}shouldUpdate=false;})();}return shouldUpdate;}};exports.default=AnimatedPrimitive;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";Object.defineProperty(exports,"__esModule",{value:true});var Hoverable={onMouseOver:function onMouseOver(){if(this.context.setHoverData){this.context.setHoverData(this.props.hoverData);}},onMouseOut:function onMouseOut(){if(this.context.setHoverData){this.context.setHoverData(false);}},onClick:function onClick(e){if(this.context.setActiveElement){if(this.isActiveElement()){this.setState({active:false});this.context.setActiveElement(false);}else{this.setState({active:true});this.context.setActiveElement(this.props.hoverKey,this.props.hoverData);}e.preventDefault();e.stopPropagation();}},hoverableEvents:function hoverableEvents(){return{onMouseOver:this.onMouseOver.bind(this),onMouseOut:this.onMouseOut.bind(this),onClick:this.onClick.bind(this)};},getInitialState:function getInitialState(){return{active:false};},getDefaultProps:function getDefaultProps(){return{hoverData:false,hoverKey:false};},getOpacity:function getOpacity(){var out=1.0;if(this.props.hoverData){if(!this.isActiveElement()&&this.context.hasActiveElement()){out=0.3;}}return out;},isActiveElement:function isActiveElement(){return this.context.activeElement===this.props.hoverKey;}};exports.default=Hoverable;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _AnimatedPrimitive=__webpack_require__(22);var _AnimatedPrimitive2=_interopRequireDefault(_AnimatedPrimitive);var _Hoverable=__webpack_require__(23);var _Hoverable2=_interopRequireDefault(_Hoverable);var _underscore=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Line=function(_Component){_inherits(Line,_Component);function Line(){_classCallCheck(this,Line);return _possibleConstructorReturn(this,(Line.__proto__||Object.getPrototypeOf(Line)).apply(this,arguments));}_createClass(Line,[{key:'render',value:function render(){var props=_extends({},this.props,{opacity:this.getOpacity()});var okProps=(0,_underscore.omit)(props,['animationDuration','animationDelay','hoverKey','hoverData']);return _react2.default.createElement('line',_extends({},this.hoverableEvents(),okProps));}}]);return Line;}(_react.Component);Line.propTypes={animationDuration:_react.PropTypes.number,animationDelay:_react.PropTypes.number};Line.defaultProps={animationDuration:1000,animationDelay:0};Line.contextTypes={setHoverData:_react.PropTypes.func,setActiveElement:_react.PropTypes.func,hasActiveElement:_react.PropTypes.func};_reactMixin2.default.onClass(Line,_AnimatedPrimitive2.default);_reactMixin2.default.onClass(Line,_Hoverable2.default);exports.default=Line;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.number=number;var _numeral=__webpack_require__(26);var _numeral2=_interopRequireDefault(_numeral);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function number(input){return(0,_numeral2.default)(input).format('0.000');}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
	 * numeral.js
	 * version : 1.5.5
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */
	
	(function() {
	
	    /************************************
	        Variables
	    ************************************/
	
	    var numeral,
	        VERSION = '1.5.5',
	        // internal storage for language config files
	        languages = {},
	        defaults = {
	            currentLanguage: 'en',
	            zeroFormat: null,
	            nullFormat: null,
	            defaultFormat: '0,0'
	        },
	        options = {
	            currentLanguage: defaults.currentLanguage,
	            zeroFormat: defaults.zeroFormat,
	            nullFormat: defaults.nullFormat,
	            defaultFormat: defaults.defaultFormat
	        };
	
	
	    /************************************
	        Constructors
	    ************************************/
	
	
	    // Numeral prototype object
	    function Numeral(number) {
	        this._value = number;
	    }
	
	    /**
	     * Implementation of toFixed() that treats floats more like decimals
	     *
	     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	     * problems for accounting- and finance-related software.
	     */
	    function toFixed (value, maxDecimals, roundingFunction, optionals) {
	        var splitValue = value.toString().split('.'),
	            minDecimals = maxDecimals - (optionals || 0),
	            boundedPrecision,
	            optionalsRegExp,
	            power,
	            output;
	
	        // Use the smallest precision value possible to avoid errors from floating point representation
	        if (splitValue.length === 2) {
	          boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
	        } else {
	          boundedPrecision = minDecimals;
	        }
	
	        power = Math.pow(10, boundedPrecision);
	
	        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
	        // Multiply up by precision, round accurately, then divide and use native toFixed():
	        output = (roundingFunction(value * power) / power).toFixed(boundedPrecision);
	
	        if (optionals > maxDecimals - boundedPrecision) {
	            optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
	            output = output.replace(optionalsRegExp, '');
	        }
	
	        return output;
	    }
	
	    /************************************
	        Formatting
	    ************************************/
	
	    // determine what type of formatting we need to do
	    function formatNumeral(n, format, roundingFunction) {
	        var output;
	
	        // figure out what kind of format we are dealing with
	        if (format.indexOf('$') > -1) { // currency!!!!!
	            output = formatCurrency(n, format, roundingFunction);
	        } else if (format.indexOf('%') > -1) { // percentage
	            output = formatPercentage(n, format, roundingFunction);
	        } else if (format.indexOf(':') > -1) { // time
	            output = formatTime(n, format);
	        } else { // plain ol' numbers or bytes
	            output = formatNumber(n._value, format, roundingFunction);
	        }
	
	        // return string
	        return output;
	    }
	
	    // revert to number
	    function unformatNumeral(n, string) {
	        var stringOriginal = string,
	            thousandRegExp,
	            millionRegExp,
	            billionRegExp,
	            trillionRegExp,
	            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            iecSuffixes = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
	            bytesMultiplier = false,
	            power;
	
	        if (string.indexOf(':') > -1) {
	            n._value = unformatTime(string);
	        } else {
	            if (string === options.zeroFormat || string === options.nullFormat) {
	                n._value = 0;
	            } else {
	                if (languages[options.currentLanguage].delimiters.decimal !== '.') {
	                    string = string.replace(/\./g, '').replace(languages[options.currentLanguage].delimiters.decimal, '.');
	                }
	
	                // see if abbreviations are there so that we can multiply to the correct number
	                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                millionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                billionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	
	                // see if bytes are there so that we can multiply to the correct number
	                for (power = 0; power <= suffixes.length; power++) {
	                    bytesMultiplier = ((string.indexOf(suffixes[power]) > -1) || (string.indexOf(iecSuffixes[power]) > -1))? Math.pow(1024, power + 1) : false;
	
	                    if (bytesMultiplier) {
	                        break;
	                    }
	                }
	
	                // do some math to create our number
	                n._value = ((bytesMultiplier) ? bytesMultiplier : 1) * ((stringOriginal.match(thousandRegExp)) ? Math.pow(10, 3) : 1) * ((stringOriginal.match(millionRegExp)) ? Math.pow(10, 6) : 1) * ((stringOriginal.match(billionRegExp)) ? Math.pow(10, 9) : 1) * ((stringOriginal.match(trillionRegExp)) ? Math.pow(10, 12) : 1) * ((string.indexOf('%') > -1) ? 0.01 : 1) * (((string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2) ? 1 : -1) * Number(string.replace(/[^0-9\.]+/g, ''));
	
	                // round if we are talking about bytes
	                n._value = (bytesMultiplier) ? Math.ceil(n._value) : n._value;
	            }
	        }
	        return n._value;
	    }
	
	    function formatCurrency(n, format, roundingFunction) {
	        var symbolIndex = format.indexOf('$'),
	            openParenIndex = format.indexOf('('),
	            minusSignIndex = format.indexOf('-'),
	            space = '',
	            spliceIndex,
	            output;
	
	        // check for space before or after currency
	        if (format.indexOf(' $') > -1) {
	            space = ' ';
	            format = format.replace(' $', '');
	        } else if (format.indexOf('$ ') > -1) {
	            space = ' ';
	            format = format.replace('$ ', '');
	        } else {
	            format = format.replace('$', '');
	        }
	
	        // format the number
	        output = formatNumber(n._value, format, roundingFunction);
	
	        // position the symbol
	        if (symbolIndex <= 1) {
	            if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
	                output = output.split('');
	                spliceIndex = 1;
	                if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex) {
	                    // the symbol appears before the "(" or "-"
	                    spliceIndex = 0;
	                }
	                output.splice(spliceIndex, 0, languages[options.currentLanguage].currency.symbol + space);
	                output = output.join('');
	            } else {
	                output = languages[options.currentLanguage].currency.symbol + space + output;
	            }
	        } else {
	            if (output.indexOf(')') > -1) {
	                output = output.split('');
	                output.splice(-1, 0, space + languages[options.currentLanguage].currency.symbol);
	                output = output.join('');
	            } else {
	                output = output + space + languages[options.currentLanguage].currency.symbol;
	            }
	        }
	
	        return output;
	    }
	
	    function formatPercentage(n, format, roundingFunction) {
	        var space = '',
	            output,
	            value = n._value * 100;
	
	        // check for space before %
	        if (format.indexOf(' %') > -1) {
	            space = ' ';
	            format = format.replace(' %', '');
	        } else {
	            format = format.replace('%', '');
	        }
	
	        output = formatNumber(value, format, roundingFunction);
	
	        if (output.indexOf(')') > -1) {
	            output = output.split('');
	            output.splice(-1, 0, space + '%');
	            output = output.join('');
	        } else {
	            output = output + space + '%';
	        }
	
	        return output;
	    }
	
	    function formatTime(n) {
	        var hours = Math.floor(n._value / 60 / 60),
	            minutes = Math.floor((n._value - (hours * 60 * 60)) / 60),
	            seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));
	        return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
	    }
	
	    function unformatTime(string) {
	        var timeArray = string.split(':'),
	            seconds = 0;
	        // turn hours and minutes into seconds and add them all up
	        if (timeArray.length === 3) {
	            // hours
	            seconds = seconds + (Number(timeArray[0]) * 60 * 60);
	            // minutes
	            seconds = seconds + (Number(timeArray[1]) * 60);
	            // seconds
	            seconds = seconds + Number(timeArray[2]);
	        } else if (timeArray.length === 2) {
	            // minutes
	            seconds = seconds + (Number(timeArray[0]) * 60);
	            // seconds
	            seconds = seconds + Number(timeArray[1]);
	        }
	        return Number(seconds);
	    }
	
	    /*  format keys:
	     *  a - abbreviation
	     *  ib - binary bytes
	     *  b - decimal bytes
	     *  o - ordinal
	     */
	    function formatNumber(value, format, roundingFunction) {
	        var negP = false,
	            signed = false,
	            optDec = false,
	            abbr = '',
	            abbrK = false, // force abbreviation to thousands
	            abbrM = false, // force abbreviation to millions
	            abbrB = false, // force abbreviation to billions
	            abbrT = false, // force abbreviation to trillions
	            abbrForce = false, // force abbreviation
	            bytes = '',
	            ord = '',
	            abs = Math.abs(value),
	            iecSuffixes = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'],
	            suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            min,
	            max,
	            power,
	            w,
	            precision,
	            thousands,
	            d = '',
	            neg = false,
	            iecBinary = false;
	
	        // check if number is zero and a custom zero format has been set
	        if (value === 0 && options.zeroFormat !== null) {
	            return options.zeroFormat;
	        } else if (value === null && options.nullFormat !== null) {
	            return options.nullFormat;
	        } else {
	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (format.indexOf('(') > -1) {
	                negP = true;
	                format = format.slice(1, -1);
	            } else if (format.indexOf('+') > -1) {
	                signed = true;
	                format = format.replace(/\+/g, '');
	            }
	
	            // see if abbreviation is wanted
	            if (format.indexOf('a') > -1) {
	                // check if abbreviation is specified
	                abbrK = format.indexOf('aK') >= 0;
	                abbrM = format.indexOf('aM') >= 0;
	                abbrB = format.indexOf('aB') >= 0;
	                abbrT = format.indexOf('aT') >= 0;
	                abbrForce = abbrK || abbrM || abbrB || abbrT;
	
	                // check for space before abbreviation
	                if (format.indexOf(' a') > -1) {
	                    abbr = ' ';
	                }
	
	                format = format.replace(new RegExp(abbr + 'a[KMBT]?'), '');
	
	                if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
	                    // trillion
	                    abbr = abbr + languages[options.currentLanguage].abbreviations.trillion;
	                    value = value / Math.pow(10, 12);
	                } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
	                    // billion
	                    abbr = abbr + languages[options.currentLanguage].abbreviations.billion;
	                    value = value / Math.pow(10, 9);
	                } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
	                    // million
	                    abbr = abbr + languages[options.currentLanguage].abbreviations.million;
	                    value = value / Math.pow(10, 6);
	                } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
	                    // thousand
	                    abbr = abbr + languages[options.currentLanguage].abbreviations.thousand;
	                    value = value / Math.pow(10, 3);
	                }
	            }
	
	            // see if we are formatting bytes
	            if (format.indexOf('b') > -1) {
	
	                // check for IEC Binary byte notation
	                if (format.indexOf('ib') > -1) {
	                    iecBinary = true;
	                }
	
	                // check for space before
	                if (format.indexOf(' b') > -1 || format.indexOf(' ib') > -1) {
	                    bytes = ' ';
	                    format = format.replace(' ib', '').replace(' b', '');
	                } else {
	                    format = format.replace('ib', '').replace('b', '');
	                }
	
	                for (power = 0; power <= suffixes.length; power++) {
	                    min = Math.pow(1024, power);
	                    max = Math.pow(1024, power+1);
	
	                    if (value >= min && value < max) {
	                        bytes = bytes + (iecBinary ? iecSuffixes[power] : suffixes[power]);
	                        if (min > 0) {
	                            value = value / min;
	                        }
	                        break;
	                    }
	                }
	            }
	
	            // see if ordinal is wanted
	            if (format.indexOf('o') > -1) {
	                // check for space before
	                if (format.indexOf(' o') > -1) {
	                    ord = ' ';
	                    format = format.replace(' o', '');
	                } else {
	                    format = format.replace('o', '');
	                }
	
	                ord = ord + languages[options.currentLanguage].ordinal(value);
	            }
	
	            if (format.indexOf('[.]') > -1) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }
	
	            w = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');
	
	            if (precision) {
	                if (precision.indexOf('[') > -1) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
	                } else {
	                    d = toFixed(value, precision.length, roundingFunction);
	                }
	
	                w = d.split('.')[0];
	
	                if (d.indexOf('.') > -1) {
	                    d = languages[options.currentLanguage].delimiters.decimal + d.split('.')[1];
	                } else {
	                    d = '';
	                }
	
	                if (optDec && Number(d.slice(1)) === 0) {
	                    d = '';
	                }
	            } else {
	                w = toFixed(value, null, roundingFunction);
	            }
	
	            // format number
	            if (w.indexOf('-') > -1) {
	                w = w.slice(1);
	                neg = true;
	            }
	
	            if (thousands > -1) {
	                w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[options.currentLanguage].delimiters.thousands);
	            }
	
	            if (format.indexOf('.') === 0) {
	                w = '';
	            }
	
	            return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((ord) ? ord : '') + ((abbr) ? abbr : '') + ((bytes) ? bytes : '') + ((negP && neg) ? ')' : '');
	        }
	    }
	
	    /************************************
	        Top Level Functions
	    ************************************/
	
	    numeral = function(input) {
	        if (numeral.isNumeral(input)) {
	            input = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            input = 0;
	        } else if (input === null) {
	            input = null;
	        } else if (!Number(input)) {
	            input = numeral.fn.unformat(input);
	        }
	
	        return new Numeral(input);
	    };
	
	    // version number
	    numeral.version = VERSION;
	
	    // compare numeral object
	    numeral.isNumeral = function(obj) {
	        return obj instanceof Numeral;
	    };
	
	
	    // This function will load languages and then set the global language.  If
	    // no arguments are passed in, it will simply return the current global
	    // language key.
	    numeral.language = function(key, values) {
	        if (!key) {
	            return options.currentLanguage;
	        }
	
	        key = key.toLowerCase();
	
	        if (key && !values) {
	            if (!languages[key]) {
	                throw new Error('Unknown language : ' + key);
	            }
	
	            options.currentLanguage = key;
	        }
	
	        if (values || !languages[key]) {
	            loadLanguage(key, values);
	        }
	
	        return numeral;
	    };
	
	    numeral.reset = function() {
	        for (var property in defaults) {
	            options[property] = defaults[property];
	        }
	    };
	
	    // This function provides access to the loaded language data.  If
	    // no arguments are passed in, it will simply return the current
	    // global language object.
	    numeral.languageData = function(key) {
	        if (!key) {
	            return languages[options.currentLanguage];
	        }
	
	        if (!languages[key]) {
	            throw new Error('Unknown language : ' + key);
	        }
	
	        return languages[key];
	    };
	
	    numeral.language('en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function(number) {
	            var b = number % 10;
	            return (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });
	
	    numeral.zeroFormat = function(format) {
	        options.zeroFormat = typeof(format) === 'string' ? format : null;
	    };
	
	    numeral.nullFormat = function (format) {
	        options.nullFormat = typeof(format) === 'string' ? format : null;
	    };
	
	    numeral.defaultFormat = function(format) {
	        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
	    };
	
	    numeral.validate = function(val, culture) {
	
	        var _decimalSep,
	            _thousandSep,
	            _currSymbol,
	            _valArray,
	            _abbrObj,
	            _thousandRegEx,
	            languageData,
	            temp;
	
	        //coerce val to string
	        if (typeof val !== 'string') {
	            val += '';
	            if (console.warn) {
	                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
	            }
	        }
	
	        //trim whitespaces from either sides
	        val = val.trim();
	
	        //if val is just digits return true
	        if ( !! val.match(/^\d+$/)) {
	            return true;
	        }
	
	        //if val is empty return false
	        if (val === '') {
	            return false;
	        }
	
	        //get the decimal and thousands separator from numeral.languageData
	        try {
	            //check if the culture is understood by numeral. if not, default it to current language
	            languageData = numeral.languageData(culture);
	        } catch (e) {
	            languageData = numeral.languageData(numeral.language());
	        }
	
	        //setup the delimiters and currency symbol based on culture/language
	        _currSymbol = languageData.currency.symbol;
	        _abbrObj = languageData.abbreviations;
	        _decimalSep = languageData.delimiters.decimal;
	        if (languageData.delimiters.thousands === '.') {
	            _thousandSep = '\\.';
	        } else {
	            _thousandSep = languageData.delimiters.thousands;
	        }
	
	        // validating currency symbol
	        temp = val.match(/^[^\d]+/);
	        if (temp !== null) {
	            val = val.substr(1);
	            if (temp[0] !== _currSymbol) {
	                return false;
	            }
	        }
	
	        //validating abbreviation symbol
	        temp = val.match(/[^\d]+$/);
	        if (temp !== null) {
	            val = val.slice(0, -1);
	            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
	                return false;
	            }
	        }
	
	        _thousandRegEx = new RegExp(_thousandSep + '{2}');
	
	        if (!val.match(/[^\d.,]/g)) {
	            _valArray = val.split(_decimalSep);
	            if (_valArray.length > 2) {
	                return false;
	            } else {
	                if (_valArray.length < 2) {
	                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
	                } else {
	                    if (_valArray[0].length === 1) {
	                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    } else {
	                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
	                    }
	                }
	            }
	        }
	
	        return false;
	    };
	
	    /************************************
	        Helpers
	    ************************************/
	
	    function loadLanguage(key, values) {
	        languages[key] = values;
	    }
	
	    /************************************
	        Floating-point helpers
	    ************************************/
	
	    // The floating-point helper functions and implementation
	    // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/
	
	    // Production steps of ECMA-262, Edition 5, 15.4.4.21
	    // Reference: http://es5.github.io/#x15.4.4.21
	    if (!Array.prototype.reduce) {
	        Array.prototype.reduce = function(callback /*, initialValue*/) {
	            'use strict';
	            if (this === null) {
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }
	
	            if (typeof callback !== 'function') {
	                throw new TypeError(callback + ' is not a function');
	            }
	
	            var t = Object(this), len = t.length >>> 0, k = 0, value;
	
	            if (arguments.length === 2) {
	                value = arguments[1];
	            } else {
	                while (k < len && !(k in t)) {
	                    k++;
	                }
	
	                if (k >= len) {
	                    throw new TypeError('Reduce of empty array with no initial value');
	                }
	
	                value = t[k++];
	            }
	            for (; k < len; k++) {
	                if (k in t) {
	                    value = callback(value, t[k], k, t);
	                }
	            }
	            return value;
	        };
	    }
	
	    /**
	     * Computes the multiplier necessary to make x >= 1,
	     * effectively eliminating miscalculations caused by
	     * finite precision.
	     */
	    function multiplier(x) {
	        var parts = x.toString().split('.');
	        if (parts.length < 2) {
	            return 1;
	        }
	        return Math.pow(10, parts[1].length);
	    }
	
	    /**
	     * Given a variable number of arguments, returns the maximum
	     * multiplier that must be used to normalize an operation involving
	     * all of them.
	     */
	    function correctionFactor() {
	        var args = Array.prototype.slice.call(arguments);
	        return args.reduce(function(prev, next) {
	            var mp = multiplier(prev),
	                mn = multiplier(next);
	            return mp > mn ? mp : mn;
	        }, -Infinity);
	    }
	
	
	    /************************************
	        Numeral Prototype
	    ************************************/
	
	
	    numeral.fn = Numeral.prototype = {
	
	        clone: function() {
	            return numeral(this);
	        },
	
	        format : function (inputString, roundingFunction) {
	            return formatNumeral(this,
	                  inputString ? inputString : options.defaultFormat,
	                  (roundingFunction !== undefined) ? roundingFunction : Math.round
	              );
	        },
	
	        unformat : function (inputString) {
	            if (Object.prototype.toString.call(inputString) === '[object Number]') {
	                return inputString;
	            }
	            return unformatNumeral(this, inputString ? inputString : options.defaultFormat);
	        },
	
	        value: function() {
	            return this._value;
	        },
	
	        valueOf: function() {
	            return this._value;
	        },
	
	        set: function(value) {
	            this._value = Number(value);
	            return this;
	        },
	
	        add: function(value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum + corrFactor * curr;
	            }
	            this._value = [this._value, value].reduce(cback, 0) / corrFactor;
	            return this;
	        },
	
	        subtract: function(value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	
	            function cback(accum, curr, currI, O) {
	                return accum - corrFactor * curr;
	            }
	            this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;
	            return this;
	        },
	
	        multiply: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return (accum * corrFactor) * (curr * corrFactor) /
	                    (corrFactor * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback, 1);
	            return this;
	        },
	
	        divide: function(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return (accum * corrFactor) / (curr * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback);
	            return this;
	        },
	
	        difference: function(value) {
	            return Math.abs(numeral(this._value).subtract(value).value());
	        }
	
	    };
	
	    /************************************
	        Exposing Numeral
	    ************************************/
	
	    // CommonJS module is defined
	    if (typeof module !== 'undefined' && module.exports) {
	        module.exports = numeral;
	    }
	
	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `numeral` as a global object via a string identifier,
	        // for Closure Compiler 'advanced' mode
	        this['numeral'] = numeral;
	    }
	
	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return numeral;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(this);


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _BucketData=__webpack_require__(19);var _BucketData2=_interopRequireDefault(_BucketData);var _Line=__webpack_require__(24);var _Line2=_interopRequireDefault(_Line);var _Circle=__webpack_require__(28);var _Circle2=_interopRequireDefault(_Circle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Lines=function(_Component){_inherits(Lines,_Component);function Lines(){_classCallCheck(this,Lines);return _possibleConstructorReturn(this,(Lines.__proto__||Object.getPrototypeOf(Lines)).apply(this,arguments));}_createClass(Lines,[{key:'getPointX',value:function getPointX(){var range=this.getBucketScale();var offset=range.rangeBand()/2;return function(index){return range(index)+offset;};}},{key:'getPointY',value:function getPointY(){var _buildVerticalScales=this.buildVerticalScales(),y=_buildVerticalScales.y;return y;}},{key:'renderPoint',value:function renderPoint(bucketIndex,seriesIndex,value){var prevValue=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var out=[];var p=this.percent;var x=this.getPointX();var y=this.getPointY();var color=this.getColorScale();var circleKey=bucketIndex+'_'+seriesIndex;out.push(_react2.default.createElement(_Circle2.default,{key:circleKey,cx:p(x(bucketIndex)),cy:p(y(value)),r:'10',fill:color(seriesIndex)}));if(prevValue!==null){var lineKey='line_'+bucketIndex+'_'+seriesIndex;out.push(_react2.default.createElement(_Line2.default,{key:lineKey,x1:p(x(bucketIndex-1)),x2:p(x(bucketIndex)),y1:p(y(prevValue)),y2:p(y(value)),stroke:color(seriesIndex),style:{strokeWidth:this.props.strokeWidth}}));}return out;}},{key:'renderLines',value:function renderLines(){var _this2=this;var out=[];var valueKeys=this.getValueKeys();var avg=this.getBucketAverage;var average=this.props.average;var prevBucket=null;this.getValidBuckets().map(function(bucket,i){if(average){var prevValue=prevBucket?avg(prevBucket):null;out=out.concat(_this2.renderPoint(i,valueKeys.length,avg(bucket),prevValue));}else{valueKeys.forEach(function(key,j){var prevValue=prevBucket?prevBucket[key]:null;out=out.concat(_this2.renderPoint(i,j,bucket[key],prevValue));});}prevBucket=bucket;});return out;}},{key:'render',value:function render(){return _react2.default.createElement('g',null,this.renderLines());}}]);return Lines;}(_react.Component);Lines.propTypes={data:_react.PropTypes.array.isRequired,maxY:_react.PropTypes.number,minY:_react.PropTypes.number,average:_react.PropTypes.bool,strokeWidth:_react.PropTypes.number};Lines.defaultProps={strokeWidth:3};Lines.contextTypes={padding:_react.PropTypes.number.isRequired,outerPadding:_react.PropTypes.number.isRequired,tickMarks:_react.PropTypes.bool};_reactMixin2.default.onClass(Lines,_BucketData2.default);exports.default=Lines;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _AnimatedPrimitive=__webpack_require__(22);var _AnimatedPrimitive2=_interopRequireDefault(_AnimatedPrimitive);var _underscore=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Circle=function(_Component){_inherits(Circle,_Component);function Circle(){_classCallCheck(this,Circle);return _possibleConstructorReturn(this,(Circle.__proto__||Object.getPrototypeOf(Circle)).apply(this,arguments));}_createClass(Circle,[{key:'render',value:function render(){var okProps=(0,_underscore.omit)(this.props,['animationDuration','animationDelay','hoverKey','hoverData']);return _react2.default.createElement('circle',okProps);}}]);return Circle;}(_react.Component);Circle.propTypes={animationDuration:_react.PropTypes.number,animationDelay:_react.PropTypes.number};Circle.defaultProps={animationDuration:1000,animationDelay:0};_reactMixin2.default.onClass(Circle,_AnimatedPrimitive2.default);exports.default=Circle;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _d=__webpack_require__(1);var _d2=_interopRequireDefault(_d);var _Styles=__webpack_require__(30);var _Styles2=_interopRequireDefault(_Styles);var _Legend=__webpack_require__(31);var _Legend2=_interopRequireDefault(_Legend);var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Legend=function(_Component){_inherits(Legend,_Component);function Legend(){_classCallCheck(this,Legend);return _possibleConstructorReturn(this,(Legend.__proto__||Object.getPrototypeOf(Legend)).apply(this,arguments));}_createClass(Legend,[{key:'getColorScale',value:function getColorScale(){var _this2=this;if(this.props.data.length){var _ret=function(){var valKeys=Object.keys(_this2.props.data[0]).filter(function(key){return!key.match(/^_/);});var color=_d2.default.scale.category20().domain(_d2.default.range(valKeys.length));return{v:valKeys.map(function(key,i){return{label:key,color:color(i)};})};}();if((typeof _ret==='undefined'?'undefined':_typeof(_ret))==="object")return _ret.v;}}},{key:'render',value:function render(){var colorScale=this.getColorScale();var cls=[_Styles2.default['flex-row'],_Legend2.default.legend].join(' ');return _react2.default.createElement('div',{className:_Styles2.default['flex-row-wrap']},colorScale.map(function(series,i){return _react2.default.createElement('div',{className:cls,key:i},_react2.default.createElement('div',{className:_Legend2.default['legend-color'],style:{backgroundColor:series.color}}),_react2.default.createElement('div',{className:_Legend2.default['legend-label']+' '+_Styles2.default.flex},series.label));}));}}]);return Legend;}(_react.Component);Legend.propTypes={data:_react.PropTypes.array.isRequired};exports.default=Legend;

/***/ },
/* 30 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"flex-row":"Styles__flex-row___1RYyk","flex":"Styles__flex___2apGr","flex-row-wrap":"Styles__flex-row-wrap___2TB5y"};

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"legend":"Legend__legend___10RPW","legend-color":"Legend__legend-color____T8ud","legend-label":"Legend__legend-label___3_RKO"};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _BucketData=__webpack_require__(19);var _BucketData2=_interopRequireDefault(_BucketData);var _Rect=__webpack_require__(21);var _Rect2=_interopRequireDefault(_Rect);var _Text=__webpack_require__(33);var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var BucketX=function(_Component){_inherits(BucketX,_Component);function BucketX(){_classCallCheck(this,BucketX);return _possibleConstructorReturn(this,(BucketX.__proto__||Object.getPrototypeOf(BucketX)).apply(this,arguments));}_createClass(BucketX,[{key:'render',value:function render(){var p=this.percent;var validBuckets=this.getValidBuckets();var bucketScale=this.getBucketScale();var bucketWidth=bucketScale.rangeBand();var yExtents=this.buildYExtents();var centerOffset=bucketWidth/2;var textY=yExtents[1]+16/(this.context.clientHeight||400)*100;return _react2.default.createElement('g',null,bucketScale.range().map(function(startX,i){return _react2.default.createElement('g',{key:i},_react2.default.createElement(_Rect2.default,{x:p(startX),width:p(bucketWidth),height:3,y:p(yExtents[1]),fill:'currentColor'}),_react2.default.createElement(_Text2.default,{x:p(startX+centerOffset),y:p(textY),textAnchor:'middle'},validBuckets[i]._label||i));}));}}]);return BucketX;}(_react.Component);BucketX.contextTypes={padding:_react.PropTypes.number.isRequired,outerPadding:_react.PropTypes.number.isRequired,clientHeight:_react.PropTypes.number,tickMarks:_react.PropTypes.bool.isRequired};_reactMixin2.default.onClass(BucketX,_BucketData2.default);exports.default=BucketX;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _AnimatedPrimitive=__webpack_require__(22);var _AnimatedPrimitive2=_interopRequireDefault(_AnimatedPrimitive);var _underscore=__webpack_require__(20);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Text=function(_Component){_inherits(Text,_Component);function Text(){_classCallCheck(this,Text);return _possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments));}_createClass(Text,[{key:'render',value:function render(){var okProps=(0,_underscore.omit)(this.props,['animationDuration','animationDelay','hoverKey','hoverData']);return _react2.default.createElement('text',okProps);}}]);return Text;}(_react.Component);Text.propTypes={animationDuration:_react.PropTypes.number,animationDelay:_react.PropTypes.number,dy:_react.PropTypes.string};Text.defaultProps={animationDuration:1000,animationDelay:0,fill:'currentColor',textAnchor:'middle',dy:'0'};_reactMixin2.default.onClass(Text,_AnimatedPrimitive2.default);exports.default=Text;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactMixin=__webpack_require__(16);var _reactMixin2=_interopRequireDefault(_reactMixin);var _BucketData=__webpack_require__(19);var _BucketData2=_interopRequireDefault(_BucketData);var _Line=__webpack_require__(24);var _Line2=_interopRequireDefault(_Line);var _Text=__webpack_require__(33);var _Text2=_interopRequireDefault(_Text);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TickMarks=function(_Component){_inherits(TickMarks,_Component);function TickMarks(){_classCallCheck(this,TickMarks);return _possibleConstructorReturn(this,(TickMarks.__proto__||Object.getPrototypeOf(TickMarks)).apply(this,arguments));}_createClass(TickMarks,[{key:'render',value:function render(){var p=this.percent;var xExtents=this.buildXExtents();var ticks=this.getTickMarks();ticks=ticks.filter(function(tick){return tick.y>5&&tick.y<95;});return _react2.default.createElement('g',null,ticks.map(function(tick,i){return _react2.default.createElement('g',{key:i},_react2.default.createElement(_Line2.default,{x1:p(xExtents[0]),y1:p(tick.y),x2:p(100),y2:p(tick.y),strokeLinecap:'round',strokeDasharray:'1, 10',stroke:'currentColor',style:{opacity:0.5,strokeWidth:1}}),_react2.default.createElement(_Text2.default,{dy:'0.3em',x:p(5),y:p(tick.y),textAnchor:'middle'},tick.label));}));}}]);return TickMarks;}(_react.Component);TickMarks.propTypes={data:_react.PropTypes.array.isRequired,maxY:_react.PropTypes.number,minY:_react.PropTypes.number};TickMarks.contextTypes={padding:_react.PropTypes.number.isRequired,outerPadding:_react.PropTypes.number.isRequired};_reactMixin2.default.onClass(TickMarks,_BucketData2.default);exports.default=TickMarks;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Gauge=function(_Component){_inherits(Gauge,_Component);function Gauge(){_classCallCheck(this,Gauge);return _possibleConstructorReturn(this,(Gauge.__proto__||Object.getPrototypeOf(Gauge)).apply(this,arguments));}_createClass(Gauge,[{key:'render',value:function render(){var _props=this.props,value=_props.value,min=_props.min,max=_props.max;var interp=(value-min)/(max-min);var out=void 0;if(interp>0.99){out=this.drawCircle();}else{out=this.drawPartialCircle();}return out;}},{key:'drawPartialCircle',value:function drawPartialCircle(){var _props2=this.props,radius=_props2.radius,value=_props2.value,min=_props2.min,max=_props2.max;var interp=(value-min)/(max-min);var rad=interp*2*Math.PI;var centerX=100;var centerY=100;var startX=centerX;var startY=centerY-radius;var largeArc=interp>0.5?1:0;var x=centerX+radius*Math.cos(rad-Math.PI/2);var y=centerY+radius*Math.sin(rad-Math.PI/2);var d='M'+startX+' '+startY+' A '+radius+' '+radius+', 0, '+largeArc+', 1, '+x+' '+y;return _react2.default.createElement('g',null,_react2.default.createElement('path',{d:d,style:{fill:'none',stroke:'red',strokeWidth:8}}));}},{key:'drawCircle',value:function drawCircle(){var _props3=this.props,radius=_props3.radius,style=_props3.style;var centerX=100;var centerY=100;return _react2.default.createElement('g',null,_react2.default.createElement('circle',{cx:centerX,cy:centerY,r:radius,style:style}));}}]);return Gauge;}(_react.Component);Gauge.propTypes={value:_react.PropTypes.number,min:_react.PropTypes.number,max:_react.PropTypes.number,tickInterval:_react.PropTypes.number,showTicks:_react.PropTypes.bool,radius:_react.PropTypes.number,style:_react.PropTypes.object};Gauge.defaultProps={radius:75,value:80,min:0,max:100,style:{fill:'none',stroke:'red',strokeWidth:8}};exports.default=Gauge;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Charts.js.map