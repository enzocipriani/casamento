function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../assets/close/menu.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../assets/close/close.svg"
    }
}

function copyToClipboard() {
    var textToCopy = "00020101021126750014br.gov.bcb.pix0114+55329992985020235Obrigada por ajudar maquina de lava52040000530398654071500.005802BR5917LETICIA N C PINTO6013SAO JOAO DEL 62070503***6304491B";
    var input = document.createElement('textarea');
    input.innerHTML = textToCopy;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    alert('Pix copiado com sucesso!');
    return result;
}