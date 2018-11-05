// var obj = {
//     foo: 'Hello',
//     bar: 'World'
// };
//
// var obj = {
//     'foo': 'Hello',
//     'bar': 'World'
// };

// var obj = {
//     p: function (x) {
//         return 2*x;
//     }
// };
//
// console.log(obj.p(2));

var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
o1.foo.bar// "hello"
