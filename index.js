module.exports.get = function(key){
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