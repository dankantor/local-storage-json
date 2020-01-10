module.exports.get = function(key){
  console.log('get');
  if (localStorage) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};

module.exports.set = function(key, value){
  console.log('set');
  if (localStorage) {
    try {
      var val = JSON.stringify(value);
      localStorage.setItem(key, val);
      return val;
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};

module.exports.remove = function(key){
  console.log('remove');
  if (localStorage) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};

module.exports.clear = function(){
  console.log('clear');
  if (localStorage) {
    try {
      localStorage.clear();
      return true;
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};