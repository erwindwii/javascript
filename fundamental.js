//Tipe Data Number =  Javascript hanya mendukung satu tipe data number bisa berupa int dan float

//Variable
let nama;
nama = "Erwin Dwi Susanto"; //string

let number;
number = 1; //number

let boolean; 
boolean = false; //boolean

let float 
float = 12.00; //number
const sql = true;


//tipe data
let ThreeInOne;
ThreeInOne = 1; //number

ThreeInOne = "Hai"; //string

//accessing string value
let accs = "Erwin";
console.log(accs[0]);


ThreeInOne = false; //boolean

//NaN Not a Number
const frst = Number("Number"); //not a number
const ttl_number = frst + 100;
console.log(ttl_number);


let un; //undifined

let nll = null; //null atau nilai tidak diketahui/kosong

let sym = Symbol();
console.log(Symbol() != Symbol());// sysmbol

let arrr = ["Chris", "Erwin", "alex"]; //array
arrr[0] //should return "chris"


//objek mirip dengan array pada objek index tipe data bisa menggunakan string dan index objek disebut propertis/atribut
let oobjk = {};
oobjk["Nama"] = "Erwin"; // menambah atau mengubah
oobjk["Kelas"] = "a1";
delete oobjk["kelas"];

let users = { //objek
    nama: "Erwin",
    age: 21,
    nikah: false,
    pekerjaan: {
        bekerja: true,
        alamat: "Jakarta"
    }
};
console.log(users.pekerjaan["alamat"]); //print objek

users.nohp = "009090"; // menambahkan property ke objek
console.log(users.nohp); // 009090

let delt = delete users.nikah;
console.log(users.nikah); //undifined kerena sudah di hapus

//check jika properti ada atau tidak
console.log("pekerjaan" in users); //true

//objek terkomputasi
//?

typeof x; //sebagai operator


//operator matematika biasanya digunakan untuk tipe data number
//aritmatika
let tambah;
tambah = 11 + 1; //tambah

let kurang;
kurang = 12 - 1; //kurang

let pmbagi;
pmbagi = 12 / 2; //pembagian

let perka;
perka = 12 * 2; //perkalian

let exponensial;
exponensial = 12 ** 2; //exponensial

let sisaBagi;
sisaBagi = 10 % 2; //sisa bagi


//operator perbandingan = untuk membandingkan dua buat data dan hanya mennghasilkan boolean true atau false

/*
> lebih dari
< kurang dari
=> lebih dari sama dengan
<= kurang dari sama dengan
== sama dengan
=== sama dengan dan sama tipe (dan harus sama tipe datanya nya ex number dengan number) satu tipe
!= tidak sama dengan
!== tidak sama dengan atau tidak sama tipe
*/

//operator logika hasilnya boolean
/*
&& AND jika nilai keduanya sama is true
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

|| OR 
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

! unary -> untuk satu data membalikan data
*/

//or
let hour1 = 9;
if(hour1 < 10 || hour1 > 18){
    console.log("Store CLOSE");
};

//or mencari nilai benar pertama
let fname = "";
let lname= "";
let nname = "ewwn";
console.log(fname || lname || nname || "Anonymous");

//&& AND
let hour2 = 10;
let mnt = 30;

if(hour2 == 10 && mnt == 30){
    console.log("time is 10.30");
}

//&& AND Mencari niai false pertama
//operand pertama benar
console.log(1 && 0); // 0

//operand pertama salah
console.log(null && 1); //null

// ! (NOT)
console.log(!false); // true

// !! (NOT) ganda digunakan untuk mengkonversi nilai ke tipe BOOLEAN
console.log(!!"non empty"); //true
console.log(!!null);  //false   

//type conversion
let a = 12;
a = String(a); //int to string
console.log(typeof a);

let str_nama = "123";
let cvt = Number(str_nama);
console.log(cvt);


//inkremen = menaikan variable sebanyak 1
 let cnt = 12;
 cnt++;
 console.log(cnt); //yng tdinya 12 menejadi 13

 //dekremen = menurunkan variable sebanyak 1
cnt--;


//string template  gunakan ` ${nama var}`;
const lnd = "Welcome to Ancol";
const wel = `haii ${lnd} dunia fantasi anak`;
console.log(wel);

//expression pada string template ${value > 75};
let nli = 81;
const annc = `kamu lulus : ${nli > 80}`;
console.log(annc);

//multiline string
const anc2 = `
    nama saya Erwin,
    dan sekarang lagi magang.
`;
console.log(anc2);


//javascript numeric seperator
let amount = 1_000_000;
console.log(amount);

//array berisikan kumpulan data dan hanya bisa gunakan untuk tipe data number
//dan jika memasukan tipe data string akan terkonversi menjadi tipe data objek
/*
operasi array
array.push() // menambahakn value array
array.length //mendapatkan panjang array
array[index] // mendapatkan data di posisi index
array[index] = value // mengubah data di posisi index
delete array[index] //  mengahapus data di posisi index, namun index tidak bergeser
array.indexOf // mencari index dari element array
*/

let arr1 = []; //array kosong

arr1.push("Erwin", "DWi"); //tambah array

arr1.unshift("pter"); //menambahkan array di depan

let nameArr2 = ["Erwin", "Alex", "Dwi", "peter", 1, true];

let nameArr3 = new Array(1,2,3,4,5, "Erwin", true);

let nameArr4 = [
    "nama",
    "umur",
    "alamt"
];

let multidimensi = [ // array multidimensi
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

nameArr2[2] = "jack"; //replace data array
nameArr2.pop(); //removing array dari index terakhir
nameArr2.shift(); // removing array dari index pertama
nameArr2.indexOf("Alex");

/*
 Operator penggabungan nullish
 ??
 hasil dari a ?? b
 jika a didefinisikan, maka a,
 jika a tidak didefinisikan, maka b.

 Dengan kata lain, ?? mengembalikan argumen pertama jika bukan null/undefined. Kalau tidak, yang kedua.
*/

let pengguna;
let pengguna1 = null;
let pengguna2 = "alex";
console.log(pengguna ?? pengguna1 ?? pengguna2); // alex


//if expression
let pswd = "password";

if(pswd == "password"){
    console.log("Login berhasil");
} else if(pswd != "password"){
    console.log("password salah");
} else {
    console.log("Error");
}

//nested if statement
let gtng= "ganteng";
let pth = "putih";

if(gtng == "ganteng"){
    if(pth == "putih"){
        console.log("kamu adalah paket lengkap");
    }
}


//switch expression = statement percabangan sama dengan if,  dan hanyak untuk perbandingan == (sama dengan)
const nlai = "B";
switch (nlai){
    case "A":
        console.log("anda lulus");
        break;
    case "B":
    case "C":
        console.log("nilai anda b, masih lulus");
        break;
    case "D":
        console.log("maaf anda belum lulus");
        break;
    default:
        console.log("anda tidak mengikuti ujian");
};

// ? pengganti if ternary operator
let bnd = "bandung";
(bnd == "bandung") ? console.log("benar") : console.log("salah"); //jgn pakai ini

//pop alert, prompt and confirm
//prompt input dari user
//confirm akhirnya aka berupa boolean




console.log(multidimensi[2][0]); // 7
console.log(nameArr4.length); // 3 
console.log(nameArr3.length); // 7
console.log(Array.isArray(arr1)); // hasilnya true
console.log(nameArr2);
console.log(nameArr2[0]); //Erwin -> akses data index
console.log(nameArr2.length);
console.log(arr1);
console.log(String(multidimensi) === '1,2,3,4,5,6,7,8,9'); //true`

console.log(typeof(sym)); //to get current type of the value variable  
