// Mendeklarasikan elemen paragraf elemen p 
const paragraph = document.getElementsByTagName('p') //htmlselector

//Soal Post Test

// buttonSatu untuk merubah warna background semua paragraph
const button1 = document.getElementById('buttonSatu')   //deklarasi variable agar buttonSatu dapat dipanggil di event

button1.addEventListener('click',function(){    // membuat event untuk buttonSatu

    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.backgroundColor ='Yellow'  
    }
})


// buttonDua untuk merubah warna background color dan warna text button "Dua"
const button2 = document.getElementById('buttonDua')

button2.addEventListener('click',function(){
    button2.style.backgroundColor ='Black'   // mengubah warna background button 2 menjadi hitam
    button2.style.color ='Yellow' //mengubah warna teks di button2 menjadi kuning
})



// buttonTiga untuk merubah font-family dan warna text semua paragraph
const button3 = document.getElementById('buttonTiga')

button3.addEventListener('click',function(){
    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.fontFamily = 'Calibri' //mengubah font family menjadi calibri
        paragraph[i].style.color ='blue' //mengubah warna font menjadi biru
    }
})



// buttonEmpat untuk merubah font-size semua paragraph
const button4 = document.getElementById('buttonEmpat')

button4.addEventListener('click',function(){
    for(let i = 0; i <= paragraph.length; i++){
        paragraph[i].style.fontSize ='20px'  //mengubah fontsize menjadi 20
    }
})



// buttonLima untuk merubah container background-color
const button5 = document.getElementById('buttonLima')

button5.addEventListener('click',function(){
    const bgContainer = document.getElementById('container')
    bgContainer.style.backgroundColor = 'orange'  //mengubah warna bg yang berada dalam container
})


// buttonEnam untuk merubah tag "p" pada class p1 menjadi "h2"
const button6 = document.getElementById('buttonEnam')
// deklarasi section dengan class = 'a'
const sectionA = document.getElementById('a')

button6.addEventListener('click',function(){
    const h2 = document.createElement('h2')
    const textNew = document.createTextNode('Selamat datang di DojoBox.id')
    const p1 = sectionA.getElementsByClassName('p1')[0] 
    h2.appendChild(textNew) 
    sectionA.replaceChild(h2,p1)      
})



// buttonTujuh untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const button7 = document.getElementById('buttonTujuh')

button7.addEventListener('click',function(){
    const newMentor = document.createElement('li') 
    const textNewMentor = document.createTextNode('Andika') 
    // deklarasi section dengan class = 'b'
    const sectionB = document.querySelector('#b ul')
    newMentor.appendChild(textNewMentor)
    sectionB.appendChild(newMentor)

    //menghapus nama mentor pertama
    const deletedChild = document.getElementsByTagName('li')[0] 
    sectionB.removeChild(deletedChild)
})

// buttonDelapan untuk mengganti text judul "DOJOBOX.id" menjadi "Post Test"
const button8 = document.getElementById('buttonDelapan')

button8.addEventListener('click',function(){
    
    const title = document.getElementById('judul')
    title.innerHTML='Post Test'
})



// buttonSembilan untuk menghapus link
const button9 = document.getElementById('buttonSembilan')

button9.addEventListener('click',function(){
    const deleteLink = document.getElementsByTagName('a')[0]
    sectionA.removeChild(deleteLink)
})



// buttonSepuluh untuk menambah link ke github masing masing
const button10 = document.getElementById('buttonSepuluh')

button10.addEventListener('click',function(){
    const linkGit = document.createElement('a')
    const textLinkNew = document.createTextNode('Klik disini untuk menuju GITHUB saya')
    linkGit.appendChild(textLinkNew)
    linkGit.href = "https://github.com/Firrama/Dojobox"
    sectionA.appendChild(linkGit)
})
