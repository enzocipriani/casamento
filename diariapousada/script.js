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
    var textToCopy = "00020101021126670014br.gov.bcb.pix0114+55329992985020227Obrigada por ajudar pousada5204000053039865406300.005802BR5917LETICIA N C PINTO6013SAO JOAO DEL 62070503***63047FAE";
    var input = document.createElement('textarea');
    input.innerHTML = textToCopy;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    alert('Pix copiado com sucesso!');
    return result;
}