function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var cx = _interopDefault(require('classnames'));
var copy = _interopDefault(require('copy-to-clipboard'));
var reactI18next = require('react-i18next');
var RcTooltip = _interopDefault(require('rc-tooltip'));
var ReactMarkdown = _interopDefault(require('react-markdown'));
var MathJax = _interopDefault(require('react-mathjax'));
var RemarkMathPlugin = _interopDefault(require('remark-math'));
var reactPortal = require('react-portal');
var Select = require('rc-select');
var Select__default = _interopDefault(Select);
var Slider = _interopDefault(require('rc-slider'));

var image = require("./lock~ZBorChcU.svg");

var css = {"forbidden":"_3PN84","message":"_2i8KH"};

var AccessForbidden = function AccessForbidden(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: css.forbidden
  }, /*#__PURE__*/React__default.createElement("img", {
    src: image,
    alt: "",
    width: "85",
    height: "104"
  }), children && /*#__PURE__*/React__default.createElement("div", {
    className: css.message
  }, children));
};

var css$1 = {"avatar":"_3xvkT"};

var Avatar = React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      name = _ref.name,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'violet' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      withBorder = _ref.withBorder,
      onClick = _ref.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: cx(css$1.avatar, className, color, size, {
      border: withBorder
    }),
    onClick: onClick
  }, name.slice(0, 2));
});

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var css$2 = {"button":"_2lKoS","spinner":"_31PPt"};

var css$3 = {"spinner":"_3XhrC","spinner-animation":"_2UA3s"};

var COLORS = {
  white: '#fff',
  blue: '#507CD0'
};

var Spinner = function Spinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 22 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'white' : _ref$color,
      isShown = _ref.isShown,
      className = _ref.className,
      align = _ref.align;
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$3.spinner, className, align, {
      show: isShown
    })
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M11.7046 18.9689C13.3618 18.8224 14.9321 18.1628 16.1969 17.0821C17.4617 16.0014 18.3581 14.5532 18.7614 12.9392C19.1647 11.3252 19.0548 9.62557 18.4469 8.07695C17.839 6.52832 16.7635 5.20773 15.37 4.29897C13.9765 3.39021 12.3343 2.9385 10.672 3.00671C9.00979 3.07491 7.41015 3.65964 6.09577 4.67951C4.78139 5.69938 3.81766 7.10365 3.33871 8.69687C2.85976 10.2901 2.88943 11.993 3.42358 13.5686L5.19569 12.9678C4.78648 11.7607 4.76375 10.4561 5.13067 9.23556C5.4976 8.01499 6.23591 6.93918 7.24286 6.15785C8.24981 5.37653 9.4753 4.92857 10.7488 4.87632C12.0222 4.82406 13.2803 5.17012 14.3478 5.86632C15.4154 6.56253 16.2394 7.57423 16.7051 8.76064C17.1708 9.94704 17.255 11.2491 16.946 12.4856C16.6371 13.7221 15.9503 14.8316 14.9814 15.6595C14.0124 16.4875 12.8094 16.9927 11.5398 17.105L11.7046 18.9689Z",
    fill: "url(#paint0_linear)"
  }), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
    id: "paint0_linear",
    x1: "13.5",
    y1: "18",
    x2: "4",
    y2: "13",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__default.createElement("stop", {
    stopColor: COLORS[color]
  }), /*#__PURE__*/React__default.createElement("stop", {
    offset: "1",
    stopColor: COLORS[color],
    stopOpacity: "0.2"
  })))));
};

var Button = React.forwardRef(function (_ref, ref) {
  var _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'button' : _ref$Component,
      children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      isShowSpinner = _ref.isShowSpinner,
      props = _objectWithoutPropertiesLoose(_ref, ["Component", "children", "className", "size", "color", "variant", "fullWidth", "isShowSpinner"]);

  return /*#__PURE__*/React__default.createElement(Component, _extends({
    ref: ref,
    className: cx(css$2.button, size, "color-" + color, "variant-" + variant, className, {
      'full-width': fullWidth
    })
  }, props), isShowSpinner && /*#__PURE__*/React__default.createElement(Spinner, {
    className: css$2.spinner,
    color: "white",
    isShown: true
  }), children);
});

var css$4 = {"checkbox":"_3lqFk","toggle-label":"_1aLAG","label":"_2PZb-","wrapper":"_2Vufp","mark":"_2Pb2f"};

var CheckboxField = function CheckboxField(_ref) {
  var className = _ref.className,
      value = _ref.value,
      disabled = _ref.disabled,
      _ref$appearance = _ref.appearance,
      appearance = _ref$appearance === void 0 ? 'checkbox' : _ref$appearance,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      label = _ref.label,
      onLabel = _ref.onLabel,
      offLabel = _ref.offLabel,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "value", "disabled", "appearance", "align", "label", "onLabel", "offLabel", "children"]);

  return /*#__PURE__*/React__default.createElement("label", {
    className: cx(css$4.checkbox, className, appearance, align, {
      disabled: disabled
    })
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("input", _extends({
    type: "checkbox",
    checked: value
  }, props)), offLabel && /*#__PURE__*/React__default.createElement("span", {
    className: cx(css$4['toggle-label'], 'off'),
    dangerouslySetInnerHTML: {
      __html: offLabel
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$4.wrapper
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$4.mark, 'mdi', 'mdi-check', {
      'toggle-color': !(onLabel && offLabel)
    })
  })), onLabel && /*#__PURE__*/React__default.createElement("span", {
    className: cx(css$4['toggle-label'], 'on'),
    dangerouslySetInnerHTML: {
      __html: onLabel
    }
  }), label && /*#__PURE__*/React__default.createElement("span", {
    className: css$4.label
  }, label)), children);
};

var css$5 = {"copy":"_3J5hd","message":"_3RWnQ","button":"_2YqEb","icon":"_25GMO"};

var Copy = function Copy(_ref) {
  var children = _ref.children,
      className = _ref.className,
      copyText = _ref.copyText,
      successMessage = _ref.successMessage,
      buttonTitle = _ref.buttonTitle;

  var _useTranslation = reactI18next.useTranslation(),
      t = _useTranslation.t;

  var _useState = React.useState(false),
      isShowMessage = _useState[0],
      setIsShowMessage = _useState[1];

  var onCLick = function onCLick() {
    copy(copyText);
    setIsShowMessage(true);
    setTimeout(function () {
      return setIsShowMessage(false);
    }, 3000);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$5.copy, className)
  }, children ? children({
    onClick: onCLick
  }) : /*#__PURE__*/React__default.createElement("div", {
    className: css$5.button,
    onClick: onCLick
  }, /*#__PURE__*/React__default.createElement("span", {
    className: cx(css$5.icon, 'mdi mdi-content-copy')
  }), buttonTitle ? buttonTitle : t('copy')), /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$5.message, {
      'is-show': isShowMessage
    })
  }, successMessage ? successMessage : t('copied')));
};

var css$6 = {"dropdown":"_1qRCw","button":"_fzNEm","menu":"_AJ1Y3","item":"_3lbfY"};

var Dropdown = function Dropdown(_ref) {
  var className = _ref.className,
      buttonClassName = _ref.buttonClassName,
      children = _ref.children,
      items = _ref.items;

  var _useState = React.useState(false),
      isShow = _useState[0],
      setIsShow = _useState[1];

  var buttonRef = React.useRef(null);
  var dropdownRef = React.useRef(null);
  React.useEffect(function () {
    document.body.addEventListener('click', outlineClickHandle);
    return function () {
      return document.body.removeEventListener('click', outlineClickHandle);
    };
  });

  var outlineClickHandle = function outlineClickHandle(event) {
    var targetElement = event.target;

    do {
      if (targetElement === buttonRef.current || targetElement === dropdownRef.current) return;
      targetElement = targetElement.parentNode;
    } while (targetElement);

    if (isShow) setIsShow(false);
  };

  var onCLickButton = function onCLickButton(event) {
    clickStopPropagation(event);
    setIsShow(!isShow);
  };

  var clickStopPropagation = function clickStopPropagation(event) {
    event.stopPropagation();
    event.preventDefault();
  };

  var onCLickItem = function onCLickItem(item) {
    return function () {
      setIsShow(!isShow);
      if (item.onClick) item.onClick();
    };
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$6.dropdown, className, {
      active: isShow
    })
  }, /*#__PURE__*/React__default.createElement(RcTooltip, {
    arrowContent: null,
    visible: isShow,
    placement: "bottomRight",
    destroyTooltipOnHide: true,
    align: {
      offset: [0, 0]
    },
    overlay: /*#__PURE__*/React__default.createElement("div", {
      className: cx(css$6.menu, 'show'),
      ref: dropdownRef,
      onClick: clickStopPropagation
    }, items.map(function (i, index) {
      return /*#__PURE__*/React__default.createElement("div", {
        key: index,
        className: css$6.item,
        onClick: onCLickItem(i)
      }, i.title);
    }))
  }, children ? React__default.cloneElement(children, {
    onClick: onCLickButton,
    ref: buttonRef
  }) : /*#__PURE__*/React__default.createElement("div", {
    ref: buttonRef,
    className: cx(css$6.button, buttonClassName),
    onClick: onCLickButton
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-dots-vertical"
  }))));
};

var css$7 = {"loader":"_18_Ho","text":"_3dZu_","stacks-pulse":"_350eA","grid":"_Uki0v","item":"_MvjKB","pic":"_Pc6fT","section":"_2EIKh"};

var Loader = function Loader(_ref) {
  _objectDestructuringEmpty(_ref);

  return /*#__PURE__*/React__default.createElement("div", {
    className: css$7.loader
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.text
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.grid
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.item
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.pic
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.section
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.item
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.pic
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.section
  })), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.item
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$7.pic
  }), /*#__PURE__*/React__default.createElement("div", {
    className: css$7.section
  }))));
};

var MarkdownRender = function MarkdownRender(props) {
  var newProps = _extends({}, props, {
    plugins: [RemarkMathPlugin],
    renderers: _extends({}, props.renderers, {
      math: function math(props) {
        return /*#__PURE__*/React__default.createElement(MathJax.Node, {
          formula: props.value
        });
      },
      inlineMath: function inlineMath(props) {
        return /*#__PURE__*/React__default.createElement(MathJax.Node, {
          inline: true,
          formula: props.value
        });
      }
    })
  });

  return /*#__PURE__*/React__default.createElement(MathJax.Provider, {
    input: "tex"
  }, /*#__PURE__*/React__default.createElement(ReactMarkdown, newProps));
};

var css$8 = {"modal":"_3FQ59","dialog":"_268e0","close":"_1Y7yz","title":"_knxNI"};

var Modal = function Modal(_ref) {
  var title = _ref.title,
      className = _ref.className,
      dialogClassName = _ref.dialogClassName,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'big' : _ref$size,
      onClose = _ref.onClose,
      isShow = _ref.isShow,
      children = _ref.children,
      withCloseButton = _ref.withCloseButton;

  var onClickByLayer = function onClickByLayer(event) {
    if (event.currentTarget === event.target && onClose) onClose();
  };

  return /*#__PURE__*/React__default.createElement(reactPortal.Portal, null, /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$8.modal, className, {
      show: isShow
    }),
    onClick: onClickByLayer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$8.dialog, size, dialogClassName)
  }, withCloseButton && /*#__PURE__*/React__default.createElement("span", {
    className: cx(css$8.close, 'mdi mdi-close'),
    onClick: onClose
  }), title && /*#__PURE__*/React__default.createElement("div", {
    className: css$8.title
  }, title), children)));
};

var usePrevious = (function (value) {
  var ref = React.useRef(value);
  React.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
});

var css$9 = {"bar":"_12oWc","progress":"_3JWjz"};

var ProgressBar = function ProgressBar(_ref) {
  var className = _ref.className,
      isActive = _ref.isActive,
      globalProgress = _ref.progress;

  var _useState = React.useState(0),
      progress = _useState[0],
      setProgress = _useState[1];

  var _useState2 = React.useState(1000),
      width = _useState2[0],
      setWidth = _useState2[1];

  var prevIsActive = usePrevious(isActive);
  var step = React.useRef(0.01);
  var currentProgress = React.useRef(0);
  var requestFrame = React.useRef(null);
  var ref = React.useRef(null);
  React.useEffect(function () {
    if (isActive) {
      setProgress(0);
      step.current = 0.01;
      currentProgress.current = 0;
      startCalculateProgress();
    }

    if (prevIsActive === true && isActive === false) {
      if (requestFrame.current) cancelAnimationFrame(requestFrame.current);
      setProgress(100);
      setTimeout(function () {
        return setProgress(0);
      }, 800);
    }

    if (isActive === null) {
      if (requestFrame.current) cancelAnimationFrame(requestFrame.current);
      setProgress(0);
    }
  }, [isActive]);
  React.useEffect(function () {
    if (globalProgress !== null) setProgress(globalProgress);else {
      setProgress(0);
    }
  }, [globalProgress]);
  React.useEffect(function () {
    window.addEventListener('resize', onResize);
    if (ref.current) setWidth(ref.current.offsetWidth);
    return function () {
      return window.removeEventListener('resize', onResize);
    };
  }, []);

  var startCalculateProgress = function startCalculateProgress() {
    requestAnimationFrame(calculateProgress);
  };

  var calculateProgress = React.useCallback(function () {
    currentProgress.current += step.current;
    var progress = Math.round(Math.atan(currentProgress.current) / (Math.PI / 2) * 100 * 1000) / 1000;
    setProgress(progress);
    if (progress > 70) step.current = 0.005;
    if (progress >= 100) cancelAnimationFrame(requestFrame.current);
    requestFrame.current = requestAnimationFrame(calculateProgress);
  }, [isActive]);

  var onResize = function onResize() {
    if (ref.current) setWidth(ref.current.offsetWidth);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    ref: ref,
    className: cx(css$9.bar, className)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$9.progress,
    style: {
      width: progress + "%",
      backgroundSize: width + "px 5px"
    }
  }));
};

var css$a = {"field":"_3WCaE","input":"_9Tk5W","label":"_1mHtq","error":"_3jOrk"};

var TextField = function TextField(_ref) {
  var label = _ref.label,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "className", "size", "errors"]);

  var hasErrors = Boolean(errors.length);
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$a.field, className, size, {
      disabled: props.disabled
    })
  }, /*#__PURE__*/React__default.createElement("label", null, label && /*#__PURE__*/React__default.createElement("div", {
    className: css$a.label
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$a.input
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    className: cx({
      error: hasErrors
    })
  }, props))), hasErrors && /*#__PURE__*/React__default.createElement("div", {
    className: css$a.error
  }, errors.join(', '))));
};

var css$b = {"search":"_3s1gr","field":"_17rsB","clear":"_3oKZ5","button":"_3BfRl"};

var SearchField = function SearchField(_ref) {
  var className = _ref.className,
      showEverything = _ref.showEverything,
      isDark = _ref.isDark,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "showEverything", "isDark"]);

  var _useState = React.useState(showEverything || props.value && props.value.length),
      isShow = _useState[0],
      setIsShow = _useState[1];

  var clear = function clear() {
    if (props.onChange) props.onChange('');
    if (!showEverything) setIsShow(false);
  };

  var onChangeHandle = function onChangeHandle(event) {
    if (props.onChange) props.onChange(event.target.value);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$b.search, className, {
      'is-dark': isDark
    })
  }, isShow && /*#__PURE__*/React__default.createElement(TextField, _extends({}, props, {
    onChange: onChangeHandle,
    className: css$b.field
  })), isShow && Boolean(props.value && props.value.length) && /*#__PURE__*/React__default.createElement("div", {
    className: css$b.clear,
    onClick: clear
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-close"
  })), isShow && !Boolean(props.value && props.value.length) && /*#__PURE__*/React__default.createElement("div", {
    className: css$b.clear
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-magnify"
  })), !isShow && /*#__PURE__*/React__default.createElement("div", {
    className: css$b.button,
    onClick: function onClick() {
      return setIsShow(true);
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-magnify"
  })));
};

var css$c = {"field":"_2jF9E","label":"_iehEi","rcSelectLoadingIcon":"_VtsrG","rcSelectDropdownSlideUpIn":"_27wr-","rcSelectDropdownSlideUpOut":"_1QVN6","rcSelectDropdownSlideDownIn":"_1vYLX","rcSelectDropdownSlideDownOut":"_1-lNh","select-field":"_1mUh_","select-field-selector":"_V9Ufm","select-field-arrow":"_c4k8s","mdi":"_2hNDK","select-field-selection-placeholder":"_2Vdv0","select-field-selection-search":"_3GdNa","select-field-selection-search-input":"_3BOaB","select-field-selection-item":"_2uDu7","select-field-item-option-checkbox":"_2K_G1","select-field-selection-item-remove":"_1k1IW","select-field-show-search":"_3EVnU","select-field-show-arrow":"_1xlmm","select-field-open":"__jEZ1","select-field-multiple":"_2YFSs","select-field-single":"_1n3qF","select-field-clear":"_Mg5xq","select-field-item-option-state":"_2yGkG","select-field-selection__choice-zoom":"_3NUb5","select-field-selection__choice-zoom-appear":"_ZO73y","select-field-selection__choice-zoom-leave":"_2i54q","select-field-dropdown":"_14ngc"};

var allValue = 'all';

var SelectField = function SelectField(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      label = _ref.label,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      _ref$value = _ref.value,
      propValue = _ref$value === void 0 ? [] : _ref$value,
      className = _ref.className,
      mode = _ref.mode,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$showSearch = _ref.showSearch,
      showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch,
      props = _objectWithoutPropertiesLoose(_ref, ["align", "label", "disabled", "placeholder", "value", "className", "mode", "onChange", "options", "showSearch"]);

  var onChangeHandle = function onChangeHandle(value) {
    if (value.indexOf(allValue) >= 0) if (value.length > options.length) value = [];else value = options.map(function (o) {
      return o.value;
    });
    if (onChange) onChange(value);
  };

  var onSelect = function onSelect() {};

  var onDeselect = function onDeselect() {};

  var renderOptions = function renderOptions() {
    return options.map(function (_ref2) {
      var value = _ref2.value,
          label = _ref2.label;
      return /*#__PURE__*/React__default.createElement(Select.Option, {
        key: value,
        value: value
      }, mode === 'multiple' && /*#__PURE__*/React__default.createElement(CheckboxField, {
        readOnly: true,
        className: "select-field-item-option-checkbox",
        value: propValue.indexOf(value) >= 0
      }), /*#__PURE__*/React__default.createElement("span", {
        className: "select-field-item-option-label"
      }, label));
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$c.field, className, align, {
      disabled: disabled
    })
  }, /*#__PURE__*/React__default.createElement(Select__default, _extends({
    value: propValue,
    prefixCls: "select-field",
    multiple: mode === 'multiple',
    showArrow: true,
    showSearch: showSearch,
    onSelect: onSelect,
    onDeselect: onDeselect,
    placeholder: placeholder,
    onChange: onChangeHandle,
    inputIcon: /*#__PURE__*/React__default.createElement("span", {
      className: "mdi mdi-chevron-down"
    })
  }, props), options.length && mode === 'multiple' && /*#__PURE__*/React__default.createElement(Select.Option, {
    key: allValue,
    value: allValue
  }, /*#__PURE__*/React__default.createElement(CheckboxField, {
    readOnly: true,
    className: "select-field-item-option-checkbox",
    value: propValue.length === options.length
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "select-field-item-option-label"
  }, "Select all")), mode === 'multiple' ? /*#__PURE__*/React__default.createElement(Select.OptGroup, null, renderOptions()) : renderOptions()), label && /*#__PURE__*/React__default.createElement("label", {
    className: css$c.label
  }, label));
};

var css$d = {"field":"_2_NXc","rcSliderTooltipZoomDownIn":"_2jvao","rcSliderTooltipZoomDownOut":"_2HgMB","slider":"_31Ylv","label":"_Zo_r8","rc-slider":"_1hLjI","rc-slider-rail":"_v9bxI","rc-slider-track":"__3emJ","rc-slider-handle":"_12sQ3","rc-slider-handle-dragging":"_2u63-","rc-slider-handle-click-focused":"_7xSSR","rc-slider-mark":"_1l2Qm","rc-slider-mark-text":"_2zf2c","rc-slider-mark-text-active":"_25tuh","rc-slider-step":"_3wC_L","rc-slider-dot":"_17-SM","rc-slider-dot-active":"_1eLwY","rc-slider-dot-reverse":"_Ewb1d","rc-slider-disabled":"_1YO43","rc-slider-vertical":"_12Juq","rc-slider-tooltip-zoom-down-enter":"_2a95b","rc-slider-tooltip-zoom-down-appear":"_2wvsD","rc-slider-tooltip-zoom-down-leave":"_3jMC3","rc-slider-tooltip-zoom-down-enter-active":"_1M8Be","rc-slider-tooltip-zoom-down-appear-active":"_3tu2z","rc-slider-tooltip-zoom-down-leave-active":"_P9_lk","rc-slider-tooltip":"_1PZK2","rc-slider-tooltip-hidden":"_2CvyB","rc-slider-tooltip-placement-top":"_qzmlA","rc-slider-tooltip-inner":"_27Bp4","rc-slider-tooltip-arrow":"_35-HY"};

var CustomHandle = function CustomHandle(props) {
  var style = {
    left: props.offset + '%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: props.className,
    key: props.index,
    style: style,
    "data-value": props.value
  });
};

var SliderField = function SliderField(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      label = _ref.label,
      onChange = _ref.onChange,
      name = _ref.name,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      props = _objectWithoutPropertiesLoose(_ref, ["className", "disabled", "label", "onChange", "name", "align"]);

  var onChangeHandle = function onChangeHandle(value) {
    if (onChange) onChange({
      target: {
        value: value,
        name: name
      }
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$d.field, className, align, {
      disabled: disabled
    })
  }, /*#__PURE__*/React__default.createElement("div", {
    className: css$d.slider
  }, /*#__PURE__*/React__default.createElement(Slider, _extends({
    onChange: onChangeHandle,
    tipFormatter: function tipFormatter(value) {
      return "$" + value;
    },
    handle: CustomHandle
  }, props))), label && /*#__PURE__*/React__default.createElement("span", {
    className: css$d.label
  }, label));
};

var css$e = {"field":"_2DYF1","hidden":"_3z5o2"};

var StretchTitleField = function StretchTitleField(_ref) {
  var value = _ref.value,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "placeholder", "className"]);

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$e.field, className)
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    type: "text",
    placeholder: placeholder,
    value: value
  }, props)), /*#__PURE__*/React__default.createElement("div", {
    className: css$e.hidden
  }, value.length ? value : placeholder));
};

var css$f = {"field":"_3PgPN","textarea":"_2Ok_K","label":"_1qnsP","error":"_1C6bH"};

var TextAreaField = function TextAreaField(_ref) {
  var label = _ref.label,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "className", "size", "errors"]);

  var hasErrors = Boolean(errors.length);
  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$f.field, className, size, {
      disabled: props.disabled
    })
  }, /*#__PURE__*/React__default.createElement("label", null, label && /*#__PURE__*/React__default.createElement("div", {
    className: css$f.label
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: css$f.textarea
  }, /*#__PURE__*/React__default.createElement("textarea", _extends({
    className: cx({
      error: hasErrors
    })
  }, props))), hasErrors && /*#__PURE__*/React__default.createElement("div", {
    className: css$f.error
  }, errors.join(', '))));
};

var css$g = {"tooltip":"_rE8Jn"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      overlayContent = _ref.overlayContent,
      _ref$arrowContent = _ref.arrowContent,
      arrowContent = _ref$arrowContent === void 0 ? null : _ref$arrowContent,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottomLeft' : _ref$placement,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? ['hover'] : _ref$trigger,
      _ref$overlayStyle = _ref.overlayStyle,
      overlayStyle = _ref$overlayStyle === void 0 ? {
    'pointer-events': 'none'
  } : _ref$overlayStyle,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "overlayContent", "arrowContent", "placement", "trigger", "overlayStyle"]);

  return /*#__PURE__*/React__default.createElement(RcTooltip, _extends({
    overlayStyle: overlayStyle,
    arrowContent: arrowContent,
    placement: placement,
    trigger: trigger,
    overlay: /*#__PURE__*/React__default.createElement("div", {
      className: css$g.tooltip
    }, overlayContent)
  }, props), children);
};

var css$h = {"switcher":"_3NMzC"};

var ViewSwitcher = function ViewSwitcher(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? 'grid' : _ref$value,
      onChange = _ref.onChange,
      className = _ref.className;

  var _useState = React.useState(value),
      stateValue = _useState[0],
      setStateValue = _useState[1];

  React.useEffect(function () {
    if (value !== stateValue) setStateValue(value);
  }, [value]);

  var toggleValue = function toggleValue() {
    var newValue = stateValue === 'grid' ? 'list' : 'grid';
    setStateValue(newValue);
    if (onChange) onChange(newValue);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: cx(css$h.switcher, stateValue, className),
    onClick: toggleValue
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-view-grid"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "mdi mdi-view-list"
  }));
};

exports.AccessForbidden = AccessForbidden;
exports.Avatar = Avatar;
exports.Button = Button;
exports.CheckboxField = CheckboxField;
exports.Copy = Copy;
exports.Dropdown = Dropdown;
exports.Loader = Loader;
exports.MarkdownRender = MarkdownRender;
exports.Modal = Modal;
exports.ProgressBar = ProgressBar;
exports.SearchField = SearchField;
exports.SelectField = SelectField;
exports.SliderField = SliderField;
exports.Spinner = Spinner;
exports.StretchTitleField = StretchTitleField;
exports.TextAreaField = TextAreaField;
exports.TextField = TextField;
exports.Tooltip = Tooltip;
exports.ViewSwitcher = ViewSwitcher;
//# sourceMappingURL=index.js.map
