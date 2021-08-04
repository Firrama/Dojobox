/* alert("selamat datang dikelas ini...");
var nama =prompt("masukkan nama kamu...");
document.write("selamat data ka "+ nama + '<br>');
document.write("silahkan belajar dengan penuh semangat.."); */
// alert("test");
// var namapengunjung = prompt('silahkan masukkan nama anda', "nama saya ilham");
// document.write('hai ' + namapengunjung + ', selamat datang di dojobox');
// document.write('halo dojobers');

//perulangan while

// var ulang=1;
// while(ulang<=5){
//     document.write('siswa ' + ulang + ' adalah member TA Intan dituliskan menggunakan WHILE' + '<br>');
//     ulang+=1;
// }

// for(var i = 6; i <= 10; i++) {
//     document.write("siswa " +i+ " adalah member TA Intan dituliskan menggunakan FOR" + "<br>");
// }

// var buah=['apel','mangga','salak','jeruk']
// document.write(buah[1]);
// document.write('<br>');
// document.write(buah.length);

// var iniadalahfungsi=function(){
//     alert('haidojobers');
// }
// var myarr=['teks',1234,true,iniadalahfungsi,[2,3,4]]
// document.write('<br>');
// document.write(myarr[4][1]);

var buah=['apel','belimbing','cempedak','duku','salak']
// document.write(buah);
// document.write(buah.join('<br>'));
// buah.push('ikan');
// document.write(buah.join('<br>'));
// buah.pop()
// document.write(buah.join('<br>'))
// buah.unshift("jambu")
// // document.write(buah.join("<br>"));
// buah.shift()
// // document.write(buah.join("<br>"));

// buah.splice(2,2 ,'jeruk','semangka');
// document.write(buah.join("<br>"));

//foreach
// buah.forEach(function(e,i){
// document.write((i+1)+'.'+e+'<br>')
// })

// //map

// var buahBaru=buah.map(function(e,i){
//     return e  +  ' enak dimakan'
// })

// document.write("<br>")
// document.write("<br>")
// document.write(buahBaru.join('<br>'))

var x = myFunction(125,64);
document.write(x);
function myFunction(a,b){
    return a + b;
}
