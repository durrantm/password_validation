const o=String.fromCharCode(97) + String.fromCharCode(97 + 1) + String.fromCharCode(97 + 2) + String.fromCharCode(97 + 3) + String.fromCharCode(97 + 4) + String.fromCharCode(97 + 5) + String.fromCharCode(97 + 6) + String.fromCharCode(49) + String.fromCharCode(49 + 1) + String.fromCharCode(49 + 2) + String.fromCharCode(49 + 3)
const pwd=() => { return o.substring(0,4) + o.substring(7,11); };
const big_pwd=()=> { return o + Number.parseInt(Math.random() *100) + "91" };
exports.pwd = pwd;
exports.big_pwd = big_pwd;
