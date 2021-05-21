// function pobierzImie(val) {
//     const imie = document.getElementById('imie').value
//     console.log("imie", imie)
// }
// function pobierzNazwisko(val) {
//     const nazwisko = document.getElementById('nazwisko').value
//     console.log("nazwisko", nazwisko)
// }

// function pobierzEmail(val) {
//     const email = document.getElementById('email').value
//     console.log("email", email)
// }

// function pobierzNumer(val) {
//     const numer = document.getElementById('telefon').value
//     console.log("numer", numer)
// }

// function pobierzWiadomosc(val) {
//     const wiadomosc = document.getElementById('komentarz').value
//     console.log("wiadomosc", wiadomosc)
// }

// function walidacjaImie(val) {
//     if (val.lenght < 2) {
//         alert("za krotie imie")
//     }
// }
// function walidacjaNawiska(val) {
//     if (val.lenght < 3) {
//         alert("za krotie nazwisko")
//     }
// }
// function walidacjaEmail(val) {
//     let email = val.split('')
//     console.log(email)
//     const isEmail = email.some(item => item === '@' || item === '.')
//     console.log("e-mail", isEmail)
// }
// function telefon(val) {
//     const arr = val.split('')
//     const num = arr.filter(item => {
//         if (item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9' || item === '0') {
//             return item
//         }
//     })
//     console.log("numer telefonu", num)
// }
// function sprawdzNumer(val) {
//     if (val.lenght < telefon(val)) {
//         alert("tylko cyfry")
//     }
// }
// function walidacjaKomentarza(val) {
//     if (val.lenght < 10) {
//         alert("za krotki komentarz")
//     }
// }


// new
let tablica = new Array()
function changeImie() {
    let imie = document.getElementById('inp1').value
    if (imie.length < 3) {
        document.getElementById('p1').style = 'visibility: visibles'
    } else {
        document.getElementById('p1').style = 'visibility: hidden'
    }
}
function getImie() {
    let imie = document.getElementById('inp1').value
    tablica.push("Imie:", imie)
}
function changeNazwisko() {
    let nazwisko = document.getElementById('inp2').value
    if (nazwisko.lenght < 4) {
        document.getElementById('p2').style = 'visibility: visibles'
    } else {
        document.getElementById('p2').style = 'visibility: hidden'
    }
}
function getNazwisko() {
    let imie = document.getElementById('inp2').value
    tablica.push("Nazwisko:", imie)
}
function changeTelefon(val) {
    // let telefon = document.getElementById('inp3').value
    const arr = val.split('')
    const num = arr.filter(item => {
        if (item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            document.getElementById('p4').style = 'visiblity: hidden'
        } else {
            document.getElementById('p4').style = 'visiblity: visible'
        }
    })
}
function getTelefon(val) {
    let telefon = document.getElementById('inp4').value
    let xd = val.split('')
    const isTelefon = xd.some(item => item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9')
    if (isTelefon == true) {
        alert('Numer telefonu musi mieć cyfry i tylko cyfry')
    }
    else {
        tablica.push("Telefon:", telefon)
    }
}
function changeEmail(val) {
    // const email = document.getElementById('inp4').value
    let xd = val.split('')
    const isEmail = xd.some(item => item === '@')
    if (isEmail == false) {
        document.getElementById('p3').style = 'visiblity: visible'
    } else {
        document.getElementById('p3').style = 'visiblity: hidden'
    }
}
function getEmail(val) {
    let email = document.getElementById('inp3').value
    let xd = val.split('')
    const isEmail = xd.some(item => item == '@')
    if (isEmail == true) {
        alert('Adres e-mail musi posiadać "@" w sobie.')
    } else {
        tablica.push("Email:", email)
    }
}
const info = document.getElementById('inp5').value
function changeWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    if (wiadomosc.length < 10) {
        document.getElementById('p5').style = 'visiblity: visible'
    } else {
        document.getElementById('p5').style = "visiblity: hidden"
    }
}
function getWiadomosc() {
    let wiadomosc = document.getElementById('inp5').value
    tablica.push("Wiadomość do sprzedającego:", wiadomosc)
}

function xd(value) {
    changeImie(), getImie(), changeNazwisko(), getNazwisko(), changeEmail(value), getEmail(value), changeTelefon(value), getTelefon(value), changeWiadomosc(), getWiadomosc()
    console.log(tablica)
    tablica = []
}
