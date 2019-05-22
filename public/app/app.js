/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ToDoModel =
/*#__PURE__*/
function () {
  function ToDoModel() {
    _classCallCheck(this, ToDoModel);

    this.list = [];
  }

  _createClass(ToDoModel, [{
    key: "getItems",
    value: function getItems() {
      return this.list;
    }
  }, {
    key: "getActiveItems",
    value: function getActiveItems() {
      return this.list.filter(function (x) {
        return !x.completed;
      });
    }
  }, {
    key: "getCompletedItems",
    value: function getCompletedItems() {
      return this.list.filter(function (x) {
        return x.completed;
      });
    }
  }, {
    key: "getActiveCount",
    value: function getActiveCount() {
      return this.list.filter(function (x) {
        return !x.completed;
      }).length;
    }
  }, {
    key: "getCompletedCount",
    value: function getCompletedCount() {
      return this.list.filter(function (x) {
        return x.completed;
      }).length;
    }
  }, {
    key: "addItem",
    value: function addItem(text) {
      var item = {
        id: Math.floor(Date.now() / 10000) + this.list.length,
        text: text,
        completed: false
      };
      this.list.push(item);
      return item;
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var index = this.list.findIndex(function (x) {
        return x.id === id;
      });
      this.list.splice(index, 1);
    }
  }, {
    key: "removeCompleted",
    value: function removeCompleted() {
      this.list = this.getActiveItems();
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, text) {
      var index = this.list.findIndex(function (x) {
        return x.id === id;
      });
      this.list[index].text = text;
    }
  }, {
    key: "toggleItem",
    value: function toggleItem(id) {
      var index = this.list.findIndex(function (x) {
        return x.id === id;
      });
      this.list[index].completed = !this.list[index].completed;
    }
  }, {
    key: "switchAllTo",
    value: function switchAllTo(completed) {
      this.list.forEach(function (x) {
        return x.completed = completed;
      });
    }
  }]);

  return ToDoModel;
}();

var NavModel =
/*#__PURE__*/
function () {
  function NavModel() {
    _classCallCheck(this, NavModel);

    this.links = [{
      title: 'All'
    }, {
      title: 'Active'
    }, {
      title: 'Completed'
    }];
    this.active = this.links[0];
  }

  _createClass(NavModel, [{
    key: "getLinks",
    value: function getLinks() {
      return this.links;
    }
  }, {
    key: "getActive",
    value: function getActive() {
      return this.active;
    }
  }, {
    key: "setActive",
    value: function setActive(link) {
      this.active = link;
    }
  }]);

  return NavModel;
}();

var NotificationsModel =
/*#__PURE__*/
function () {
  function NotificationsModel() {
    _classCallCheck(this, NotificationsModel);

    this.closeTimeout = 5000;
    this.notifications = [];
  }

  _createClass(NotificationsModel, [{
    key: "getNotifications",
    value: function getNotifications() {
      return this.notifications;
    }
  }, {
    key: "push",
    value: function push(task, error, cb) {
      var _this = this;

      var timerId = setTimeout(function () {
        _this.notifications = _this.notifications.filter(function (item) {
          return item.task.id !== task.id;
        });
        cb();
      }, this.closeTimeout);
      this.notifications.push({
        task: task,
        timerId: timerId,
        error: error
      });
    }
  }]);

  return NotificationsModel;
}();

var todoModel = new ToDoModel();
var navModel = new NavModel();
var notificationModel = new NotificationsModel();

var Notifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications() {
    _classCallCheck(this, Notifications);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notifications).apply(this, arguments));
  }

  _createClass(Notifications, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "notifications_container"
      }, this.props.notifications.map(function (item) {
        return React.createElement(Notification, {
          notification: item
        });
      }));
    }
  }]);

  return Notifications;
}(React.Component);

var Notification =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Notification, _React$PureComponent);

  function Notification() {
    _classCallCheck(this, Notification);

    return _possibleConstructorReturn(this, _getPrototypeOf(Notification).apply(this, arguments));
  }

  _createClass(Notification, [{
    key: "render",
    value: function render() {
      var _this$props$notificat = this.props.notification,
          task = _this$props$notificat.task,
          error = _this$props$notificat.error;
      return error ? React.createElement("div", {
        className: "notification_item reject_add"
      }, "The task ", task.id, "(", task.text.slice(0, 10), "...) was not added to the task list") : React.createElement("div", {
        className: "notification_item success_add"
      }, "The task ", task.id, "(", task.text.slice(0, 10), "...) was successfully added to the list");
    }
  }]);

  return Notification;
}(React.PureComponent);

var Popup =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Popup, _React$PureComponent2);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popup).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "popup"
      }, React.createElement("div", {
        className: "popup_inner"
      }, React.createElement("h1", null, this.props.text), React.createElement("button", {
        onClick: this.props.complete
      }, "Yes"), React.createElement("button", {
        onClick: this.props.closePopup
      }, "No")));
    }
  }]);

  return Popup;
}(React.PureComponent);

var ToDoSummary =
/*#__PURE__*/
function (_React$PureComponent3) {
  _inherits(ToDoSummary, _React$PureComponent3);

  function ToDoSummary() {
    _classCallCheck(this, ToDoSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToDoSummary).apply(this, arguments));
  }

  _createClass(ToDoSummary, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "todo-info"
      }, React.createElement("span", {
        className: "todo-info__remains"
      }, this.props.remains, " remains"), ' ', React.createElement("span", {
        className: "todo-info__completed"
      }, "/ ", this.props.completed, " completed"));
    }
  }]);

  return ToDoSummary;
}(React.PureComponent);

var ToDoTextInput =
/*#__PURE__*/
function (_React$PureComponent4) {
  _inherits(ToDoTextInput, _React$PureComponent4);

  function ToDoTextInput(props) {
    var _this2;

    _classCallCheck(this, ToDoTextInput);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ToDoTextInput).call(this, props));
    _this2._save = _this2._save.bind(_assertThisInitialized(_this2));
    _this2._onChange = _this2._onChange.bind(_assertThisInitialized(_this2));
    _this2._onKeyDown = _this2._onKeyDown.bind(_assertThisInitialized(_this2));
    _this2.state = {
      text: _this2.props.text ? _this2.props.text : ''
    };
    return _this2;
  }

  _createClass(ToDoTextInput, [{
    key: "render",
    value: function render() {
      return React.createElement("input", {
        className: this.props.className,
        placeholder: this.props.placeholder,
        value: this.state.text,
        onChange: this._onChange,
        onKeyDown: this._onKeyDown
      });
    }
  }, {
    key: "_save",
    value: function _save() {
      this.props.onSave(this.state.text);
      this.setState({
        text: ''
      });
    }
  }, {
    key: "_onChange",
    value: function _onChange(event) {
      this.setState({
        text: event.target.value
      });
    }
  }, {
    key: "_onKeyDown",
    value: function _onKeyDown(event) {
      if (event.keyCode !== 13) return;

      this._save();
    }
  }]);

  return ToDoTextInput;
}(React.PureComponent);

var ToDoItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ToDoItem, _React$Component2);

  function ToDoItem(props) {
    var _this3;

    _classCallCheck(this, ToDoItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(ToDoItem).call(this, props));
    _this3._edit = _this3._edit.bind(_assertThisInitialized(_this3));
    _this3._save = _this3._save.bind(_assertThisInitialized(_this3));
    _this3._toggleItem = _this3._toggleItem.bind(_assertThisInitialized(_this3));
    _this3._removeItem = _this3._removeItem.bind(_assertThisInitialized(_this3));
    _this3._togglePopup = _this3._togglePopup.bind(_assertThisInitialized(_this3));
    _this3.state = {
      isEditing: false,
      popup: false
    };
    return _this3;
  }

  _createClass(ToDoItem, [{
    key: "render",
    value: function render() {
      var text = this.state.isEditing ? React.createElement(ToDoTextInput, {
        className: "todo__text todo__text_editing",
        text: this.props.task.text,
        onSave: this._save
      }) : React.createElement("span", {
        className: 'todo__text' + (this.props.task.completed ? ' todo__text_completed' : ''),
        onDoubleClick: this._edit
      }, this.props.task.text);
      return React.createElement("div", {
        className: "todo__item"
      }, React.createElement("input", {
        type: "checkbox",
        className: "todo__checkbox",
        checked: this.props.task.completed,
        onChange: this._toggleItem
      }), React.createElement("span", {
        className: "todo__destroy",
        onClick: this._togglePopup
      }, "-"), ' ', text, this.state.popup ? React.createElement(Popup, {
        text: "Do you sure?",
        complete: this._removeItem,
        closePopup: this._togglePopup
      }) : null);
    }
  }, {
    key: "_edit",
    value: function _edit() {
      this.setState({
        isEditing: true
      });
    }
  }, {
    key: "_save",
    value: function _save(text) {
      this.setState({
        isEditing: false
      });
      this.props.updateItem(this.props.task.id, text);
    }
  }, {
    key: "_toggleItem",
    value: function _toggleItem() {
      this.props.toggleItem(this.props.task.id);
    }
  }, {
    key: "_removeItem",
    value: function _removeItem() {
      this.props.removeItem(this.props.task.id);
    }
  }, {
    key: "_togglePopup",
    value: function _togglePopup() {
      this.setState({
        popup: !this.state.popup
      });
    }
  }]);

  return ToDoItem;
}(React.Component);

var ToDoList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ToDoList, _React$Component3);

  function ToDoList() {
    _classCallCheck(this, ToDoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToDoList).apply(this, arguments));
  }

  _createClass(ToDoList, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var items = this.props.tasks.map(function (task) {
        return React.createElement(ToDoItem, {
          key: task.id,
          task: task,
          toggleItem: _this4.props.toggleItem,
          removeItem: _this4.props.removeItem,
          updateItem: _this4.props.updateItem
        });
      });
      return React.createElement("div", {
        className: "todo__list"
      }, React.createElement("div", {
        className: "todo__toggle-all"
      }, React.createElement("input", {
        type: "checkbox",
        className: "todo__checkbox",
        checked: this.props.areAllComplete,
        onChange: this.props.toggleAll
      }), ' ', "Complete all"), items);
    }
  }]);

  return ToDoList;
}(React.Component);

var ToDoForm =
/*#__PURE__*/
function (_React$PureComponent5) {
  _inherits(ToDoForm, _React$PureComponent5);

  function ToDoForm(props) {
    var _this5;

    _classCallCheck(this, ToDoForm);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(ToDoForm).call(this, props));
    _this5._save = _this5._save.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(ToDoForm, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "todo__form"
      }, React.createElement(ToDoTextInput, {
        className: "todo__text-input",
        placeholder: "I need to do...",
        onSave: this._save
      }));
    }
  }, {
    key: "_save",
    value: function _save(text) {
      this.props.addItem(text);
    }
  }]);

  return ToDoForm;
}(React.PureComponent);

var ToDoClear =
/*#__PURE__*/
function (_React$PureComponent6) {
  _inherits(ToDoClear, _React$PureComponent6);

  function ToDoClear() {
    _classCallCheck(this, ToDoClear);

    return _possibleConstructorReturn(this, _getPrototypeOf(ToDoClear).apply(this, arguments));
  }

  _createClass(ToDoClear, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "todo__clear",
        onClick: this.props.removeCompleted
      }, "Clear");
    }
  }]);

  return ToDoClear;
}(React.PureComponent);

var NavItem =
/*#__PURE__*/
function (_React$PureComponent7) {
  _inherits(NavItem, _React$PureComponent7);

  function NavItem(props) {
    var _this6;

    _classCallCheck(this, NavItem);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(NavItem).call(this, props));
    _this6._navigate = _this6._navigate.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(NavItem, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: 'nav__item' + (this.props.isActive ? ' nav__item_active' : ''),
        onClick: this._navigate
      }, this.props.link.title);
    }
  }, {
    key: "_navigate",
    value: function _navigate() {
      this.props.navigate(this.props.link);
    }
  }]);

  return NavItem;
}(React.PureComponent);

var Nav =
/*#__PURE__*/
function (_React$PureComponent8) {
  _inherits(Nav, _React$PureComponent8);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var items = this.props.links.map(function (link) {
        return React.createElement(NavItem, {
          key: link.title,
          link: link,
          navigate: _this7.props.navigate,
          isActive: link.title === _this7.props.activeLink.title
        });
      });
      return React.createElement("div", {
        className: "nav"
      }, items);
    }
  }]);

  return Nav;
}(React.PureComponent);

var ToDo =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(ToDo, _React$Component4);

  function ToDo(props) {
    var _this8;

    _classCallCheck(this, ToDo);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(ToDo).call(this, props));
    _this8._rerender = _this8._rerender.bind(_assertThisInitialized(_this8));
    _this8._toggleItem = _this8._toggleItem.bind(_assertThisInitialized(_this8));
    _this8._toogleAll = _this8._toogleAll.bind(_assertThisInitialized(_this8));
    _this8._removeItem = _this8._removeItem.bind(_assertThisInitialized(_this8));
    _this8._addItem = _this8._addItem.bind(_assertThisInitialized(_this8));
    _this8._updateItem = _this8._updateItem.bind(_assertThisInitialized(_this8));
    _this8._removeCompleted = _this8._removeCompleted.bind(_assertThisInitialized(_this8));
    _this8._navigate = _this8._navigate.bind(_assertThisInitialized(_this8));
    _this8.state = {
      activeLink: {
        title: "All"
      },
      areAllCompleted: true,
      completed: 0,
      links: [],
      remains: 0,
      tasks: [],
      notifications: []
    };
    return _this8;
  }

  _createClass(ToDo, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this9 = this;

      axios.get('/tasks').then(function (_ref) {
        var data = _ref.data;
        todoModel.list = data;

        _this9._rerender();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "global"
      }, React.createElement("div", {
        className: "todo"
      }, React.createElement("div", {
        className: "todo__title"
      }, "React ToDo"), React.createElement(Nav, {
        links: this.state.links,
        activeLink: this.state.activeLink,
        navigate: this._navigate
      }), React.createElement(ToDoSummary, {
        remains: this.state.remains,
        completed: this.state.completed
      }), React.createElement(ToDoList, {
        tasks: this.state.tasks,
        areAllComplete: this.state.areAllCompleted,
        toggleItem: this._toggleItem,
        toggleAll: this._toogleAll,
        removeItem: this._removeItem,
        updateItem: this._updateItem
      }), React.createElement(ToDoForm, {
        addItem: this._addItem
      }), React.createElement(ToDoClear, {
        removeCompleted: this._removeCompleted
      })), React.createElement("div", {
        className: "notifications"
      }, React.createElement(Notifications, {
        notifications: this.state.notifications
      })));
    }
  }, {
    key: "_getState",
    value: function _getState() {
      var state = {
        remains: todoModel.getActiveCount(),
        completed: todoModel.getCompletedCount(),
        links: navModel.getLinks(),
        activeLink: navModel.getActive()
      };
      state.areAllCompleted = state.remains === 0;

      if (state.activeLink.title === 'All') {
        state.tasks = todoModel.getItems();
      } else if (state.activeLink.title === 'Completed') {
        state.tasks = todoModel.getCompletedItems();
      } else {
        state.tasks = todoModel.getActiveItems();
      }

      state.notifications = notificationModel.getNotifications();
      return state;
    }
  }, {
    key: "_rerender",
    value: function _rerender() {
      this.setState(this._getState());
    }
  }, {
    key: "_toggleItem",
    value: function _toggleItem(id) {
      var _this10 = this;

      axios.post('/toggle-item', {
        id: id
      }).then(function () {
        todoModel.toggleItem(id);

        _this10._rerender();
      });
    }
  }, {
    key: "_toogleAll",
    value: function _toogleAll() {
      var _this11 = this;

      axios.post('/toggle-all', {
        areAllCompleted: !this.state.areAllCompleted
      }).then(function () {
        todoModel.switchAllTo(!_this11.state.areAllCompleted);

        _this11._rerender();
      });
    }
  }, {
    key: "_removeItem",
    value: function _removeItem(id) {
      var _this12 = this;

      axios["delete"]("/tasks/".concat(id)).then(function () {
        todoModel.removeItem(id);

        _this12._rerender();
      });
    }
  }, {
    key: "_addItem",
    value: function _addItem(text) {
      var _this13 = this;

      var task = todoModel.addItem(text);

      this._rerender();

      axios.post('/tasks', {
        task: task
      }).then(function (_ref2) {
        var data = _ref2.data;

        if (data.error) {
          todoModel.removeItem(data.id);
        }

        notificationModel.push(task, data.error, function () {
          _this13._rerender();
        });

        _this13._rerender();
      });
    }
  }, {
    key: "_updateItem",
    value: function _updateItem(id, text) {
      var _this14 = this;

      axios.put("/tasks/".concat(id), {
        text: text
      }).then(function () {
        todoModel.updateItem(id, text);

        _this14._rerender();
      });
    }
  }, {
    key: "_removeCompleted",
    value: function _removeCompleted() {
      var _this15 = this;

      axios.post('/clear', {}).then(function () {
        todoModel.removeCompleted();

        _this15._rerender();
      });
    }
  }, {
    key: "_navigate",
    value: function _navigate(link) {
      navModel.setActive(link);

      this._rerender();
    }
  }]);

  return ToDo;
}(React.Component);

ReactDOM.render(React.createElement(ToDo, null), document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=app.js.map