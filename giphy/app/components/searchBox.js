'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var giphy = require('../modules/giphyClient');

var SearchBox = function (_React$Component) {
    _inherits(SearchBox, _React$Component);

    function SearchBox(props) {
        _classCallCheck(this, SearchBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBox).call(this, props));

        _this.state = {
            query: ''
        };
        return _this;
    }

    _createClass(SearchBox, [{
        key: 'handleKeyUp',
        value: function handleKeyUp(e) {

            var self = this;
            if (e.keyCode === 13) {
                giphy.search(e.target.value).then(function (res) {
                    self.props.OnSearchResults(res.data);
                });
                this.setState({
                    query: e.target.value
                });
            }
        }
    }, {
        key: 'handleOnChange',
        value: function handleOnChange(e) {

            var self = this;

            this.setState({
                query: e.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'div',
                    { className: 'form-inline center-block' },
                    React.createElement('input', { value: this.state.query, onChange: this.handleOnChange.bind(this), onKeyUp: this.handleKeyUp.bind(this), type: 'text', className: 'form-control' })
                )
            );
        }
    }]);

    return SearchBox;
}(React.Component);

window.SearchBox = SearchBox;