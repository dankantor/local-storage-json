module.exports.get = function(key){
    return JSON.parse(localStorage.getItem(key));
};

module.exports.set = function(key, value){
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch(e){
        if(e.name === 'QUOTA_EXCEEDED_ERR') {
            $(window).trigger(
                'storageQuotaExceeded',
                e
            );
        }
    }
};

module.exports.remove = function(key){
    localStorage.removeItem(key);
};

module.exports.clear = function(){
    localStorage.clear();
};

