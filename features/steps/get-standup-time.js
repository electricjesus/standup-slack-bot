'use strict';
var sinon = require('sinon');
var botLib = require('../../lib/bot');
var common = require('./common');
var models = require('../../models');

module.exports = function() {
  var _channelFindStub = null;

  // TODO: move these functions to common.js
  this.Given(/the standup is scheduled for ([1-2]?\d:[0-5]\d [ap]m)/, function(time) {
    var plus12 = time.substr(-2, 2) === 'pm' ? 1200 : 0;
    var utcTime = Number(time.replace(':', '').substr(0, 4).trim()) + plus12;

    _channelFindStub = sinon.stub(models.Channel, 'findOne').resolves({ time: utcTime });
  });

  // TODO: move these functions to common.js
  this.Given('no standup is scheduled', function() {
    _channelFindStub = sinon.stub(models.Channel, 'findOne').resolves(null);
  });

  this.When(/I say "@bot when"/, function(done) {
    botLib.getStandupInfo(common.botController);

    var message = {
      type: 'message',
      text: 'standup time',
      channel: 'CSomethingSaySomething'
    };

    common.botRepliesToHearing(message, done);
  });

  this.After(function() {
    if(_channelFindStub) {
      _channelFindStub.restore();
      _channelFindStub = null;
    }
  });
};
