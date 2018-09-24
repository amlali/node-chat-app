const expect = require('expect');
var{generateMessage,generateMessageLocation}=require('./message');

describe('generateMessage',()=>{

  it('should generate correct message',()=>{
    var from='amal_@gg.com';
    var text='hello from outside'
  var massage=  generateMessage(from,text);
    expect(massage).toInclude({from,text});
  });
});

describe('generateMessageLocation',()=>{

  it('should get current location massage',()=>{
    var from='amal'
    var longitude=31.329421;
    var latitude=30.136662599999998;
    var url='https://www.google.com/maps?q=30.136662599999998,31.329421';
    var msg=generateMessageLocation(from,latitude,longitude);
    expect(msg).toInclude({from,url});
  });
});
