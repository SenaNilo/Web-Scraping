function getEmentas(){
    var ementas = [];
    var divInfos = document.querySelectorAll(".tab-grid-info");
    var pInfos;
    for(let i = 0; i < divInfos.length; i++){
        pInfos = divInfos[i].querySelectorAll("p");
        ementas[i] = (pInfos[1].innerHTML).trim();
    }
    return ementas;
}
