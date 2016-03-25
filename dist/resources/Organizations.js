'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClassyResource = require('../ClassyResource');

var _ClassyResource2 = _interopRequireDefault(_ClassyResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Organizations = function (_Resource) {
  _inherits(Organizations, _Resource);

  function Organizations(Classy) {
    _classCallCheck(this, Organizations);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Organizations).call(this, Classy, {
      includeBasic: ['retrieve'],
      path: '/organizations'
    }));

    _this.createCampaign = _this.createMethod({
      method: 'POST',
      path: '/{id}/campaigns'
    });

    _this.listCampaigns = _this.createMethod({
      method: 'GET',
      path: '/{id}/campaigns'
    });

    _this.listDesignations = _this.createMethod({
      method: 'GET',
      path: '/{id}/designations'
    });

    _this.createDesignation = _this.createMethod({
      method: 'POST',
      path: '/{id}/designations'
    });
    return _this;
  }

  return Organizations;
}(_ClassyResource2.default);

exports.default = Organizations;