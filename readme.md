Node Push7
----

promised push7 client for node.


### simple usage
(for es6)
```javascript
import {Push7} from 'node-push7'
p7 = new Push7({
    //host:'api.push7.jp',
    appno:'YOUR_PUSH7_APPNO',
    apikey:'YOUR_PUSH7_APIKEY',
    //endpoint:'https://:host/api/v1/:appno/:endpoint',
    //useragent:'Node-Push7 Client/' + version,
})

// get app info
p7.head()
    // domain, icon, name, subscriber count ……etc
    .then(j=>console.log(j)
    // on err
    .catch(err=> console.error(`Error: ${err.name} (${err.message})`))

// push notification
p7send({
  title:'Push Title',
  body:"Here, main messege",
  icon:"http://example.com/example-image.png", // push icon
  url:'https://push7.jp/', // uri to open when click notification
})
// { success: 'created' }
.then(res=>console.log(res))
// on err
.catch(err=>console.error(`Error: ${err.name} (${err.message})`));

```

### installation
```sh
npm install -S node-push7
```

