var data = require('./data.js')

data.getEntries({
  'content_type': 'product'
}).then(function(entries) {
    console.log(entries.items)
    riot.mount("zoo", { items: entries.items});
});

data.getEntries({
  'content_type': 'test'
}).then(function(entries){
  console.log(entries.items)
  riot.mount('blog', { items: entries.items});
})
