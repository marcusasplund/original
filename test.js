describe('original', function () {
  'use strict';

  var assume = require('assume')
    , origin = require('./')
    , same = origin.same;

  it('is exposed as a function', function () {
    assume(origin).is.a('function');
  });

  it('removes default ports for http', function () {
    var o = origin('http://google.com:80/pathname');
    assume(o).equals('http://google.com');

    o = origin('https://google.com:443/pathname');
    assume(o).equals('https://google.com');

    o = origin('http://google.com:443/pathname');
    assume(o).equals('http://google.com:443');

    o = origin('https://google.com:80/pathname');
    assume(o).equals('https://google.com:80');
  });

  it('removes default ports for ws', function () {
    var o = origin('ws://google.com:80/pathname');
    assume(o).equals('ws://google.com');

    o = origin('wss://google.com:443/pathname');
    assume(o).equals('wss://google.com');

    o = origin('ws://google.com:443/pathname');
    assume(o).equals('ws://google.com:443');

    o = origin('wss://google.com:80/pathname');
    assume(o).equals('wss://google.com:80');
  });

  describe('.same', function () {
    assume(origin.same).is.a('function');

    it('equals', function () {
      assume(same('http://google.com', 'http://google.com:80')).is.true();
    });
  });
});