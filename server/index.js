// const { MongoClient } = require('mongodb');
// const URL = 'mongodb+srv://alex:123@cluster0.xmtlw.mongodb.net/product_list?retryWrites=true&w=majority';
//
//
// const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true });
//
// const start = async () => {
//     try {
//         await client.connect();
//         console.log('Соелинение установлено');
//     } catch (e) {
//         console.log(e);
//     }
// }
//
// start();

setTimeout(() => {
    console.log('Hi');
}, 200);

setTimeout(() => {
    console.log('Bye');
}, 0)

console.log(6);

console.log(9);
