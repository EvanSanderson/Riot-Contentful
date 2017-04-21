var data = require('./data.js')

data.then(function(entries) {
    console.log(entries.items)
    riot.mount("zoo", { items: entries.items});
});
