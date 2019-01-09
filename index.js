module.exports.get = function(key){
  return JSON.parse(localStorage.getItem(key));
};

module.exports.set = function(key, value){
  localStorage.setItem(key, JSON.stringify(value));
};

module.exports.remove = function(key){
  localStorage.removeItem(key);
};

module.exports.clear = function(){
  localStorage.clear();
};

