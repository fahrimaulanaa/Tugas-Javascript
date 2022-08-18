const nilai = document.getElementById('nilai');
const gradeDisplay = document.getElementById('gradeDisplay');
function convert(){
    const numeric = parseInt(nilai.value)
    let grade;

    if (numeric >= 93 && numeric <= 100){
        grade = 'A';
    }else if (numeric >= 83 && numeric <= 92){
        grade = 'B';
    }else if (numeric >= 75 && numeric <= 82){
        grade = 'C';
    }else if (numeric >= 50 && numeric <= 74){
        grade = 'D';
    }else if (numeric >= 0 && numeric <= 49){
        grade = 'E';
    }
    gradeDisplay.innerText = `Nilai Anda adalah ${grade}`;
}