Local Storage JSON
==================

Simple wrapper on localStorage to store JSON

## Install

    npm install local-storage-json


## Usage

    var storage = require('local-storage-json');
    storage.get(key);
    storage.set(key, json);
    storage.remove(key);
    storage.clear();
    
    $(window).addEventListener('storageQuotaExceeded', fn, false);