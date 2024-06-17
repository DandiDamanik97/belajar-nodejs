// Core Module
// FIle System

const fs = require('fs');

// mwenuliskan file secara sync

// try {

// fs.writeFileSync('test.txt', 'Hello World secara sync'); //otomatis dibuat file test.tst,jika file sudah ada maka akan di timpa

// } catch(e){ // menangkap pesan error
// console.log(e);
// }



//ini menuliskan string ke file (asyn)

//fs.writeFile('data/test.txt','Hallo duniasecara Asy', (e) => {
//    console.log(e); // callback error bisa
// });


// membaca isi fle secara sync

// const data = fs.readFileSync('data/test.txt');
// console.log(data.toString());

// membacaisi file secara async
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
//})


//contoh Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question('Masukan nama Anda: ' , (nama) => {
    rl.question('Masukan no WA anda: ' , (noWa) => {
const contact ={nama,noWa};
const file = fs.readFileSync('data/contacts.json', 'utf-8');
const contacts = JSON.parse(file); //parse, merubah string jadi json

contacts.push(contact);

fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); //stringify merubah json menjadi string

console.log('Terimakasih sudah mengisi data');
    rl.close();
});
});