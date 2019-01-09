Local Storage JSON
==================

Simple wrapper on localStorage to store JSON

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