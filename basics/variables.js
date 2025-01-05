const accountId = 123
let accountEmail = "yashkimaa93@gmail.com"
var acoountPassword = "ritesh123verma" 
accountCity = "jaipur"

let accountState

// if any variable is not defined then in result js will show that as undefined.

// accountId=11213  not allowed as accountId is constant
// prefer not to use var becoz of issue in blockscope and functional scope
accountEmail = "rv@gmail.com"
accountPassword = "riteshv"
accountCity = "ghaziabad"

console.table([accountId,accountEmail,accountPassword,accountCity])
