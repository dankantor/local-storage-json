Local Storage JSON
==================

Simple wrapper on localStorage to store JSON. On set, the value gets run through `JSON.stringify`. On get, 
the value gets run through `JSON.parse`. 

## Install

```
npm install local-storage-json
```


## Usage

```
const lStorage = require('local-storage-json');
    
lStorage.get(key);
lStorage.set(key, obj);
lStorage.remove(key);
lStorage.clear();
```

## Return Values

If the operation succeeds, these values will be returned:

get: the value (run through JSON.parse)
set: the value (run through JSON.stringify)
remove: boolean `true`
clear: boolean `true`

If the operation fails for any reason, `null` is returned. 