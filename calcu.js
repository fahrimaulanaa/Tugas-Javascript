const bilangan1 = document.getElementById('bilangan1');
const bilangan2 = document.getElementById('bilangan2');
const hasil1 = document.getElementById('hasil1');
function tambah(){
    const inputan1 = parseInt(bilangan1.value);
    const inputan2 = parseInt(bilangan2.value);
    let hasil = (inputan1 + inputan2);
    hasil1.innerText = `${inputan1} + ${inputan2} = ${hasil}`;
}

function kurang(){
    const inputan1 = parseInt(bilangan1.value);
    const inputan2 = parseInt(bilangan2.value);
    let hasil = (inputan1 - inputan2);
    hasil1.innerText = `${inputan1} - ${inputan2} = ${hasil}`;
}

function bagi(){
    const inputan1 = parseInt(bilangan1.value);
    const inputan2 = parseInt(bilangan2.value);
    let hasil = (inputan1 / inputan2);
    hasil1.innerText = `${inputan1} / ${inputan2} = ${hasil}`;
}

function kali(){
    const inputan1 = parseInt(bilangan1.value);
    const inputan2 = parseInt(bilangan2.value);
    let hasil = (inputan1 * inputan2);
    hasil1.innerText = `${inputan1} * ${inputan2} = ${hasil}`;
}