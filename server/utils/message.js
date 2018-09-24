var generateMessage= (from,text)=>{
  return {
    from,
    text
  };
};

var generateMessageLocation= (from,latitude,longitude)=>{
  return {
    from,
    url:`https://www.google.com/maps?q=${latitude},${longitude}`
  };
};
module.exports={generateMessage,generateMessageLocation};
