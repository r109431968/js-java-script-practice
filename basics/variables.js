const accountId = 144553
let accountEmail = "rahul@gmail.com"
var accountPassword = "12345"
accountcity = "Raisen"
let accountState

//accountId =2 // Not allowed in const.

accountEmail = "r@gm.cm"
accountPassword = "2344"
accountcity = "Bpl"

/*
Prefer not to use var bcoz of ussue in block scope and functional scope.

*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState])