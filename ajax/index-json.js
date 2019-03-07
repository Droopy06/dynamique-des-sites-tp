function getXMLHttpRequest() {
    let xhr = null;
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest();
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    }
    return xhr;
}

function requestJSon() {
    let xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
            afficherContentJson(this.response);
        }
    };

    xhr.open("GET", "commandes.json?rand="+Math.random(), true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(null);
}

function afficherContentJson(response){
    console.log(JSON.parse(response));
    let commandes = JSON.parse(response);
    for (let i=0; i<commandes.lenght; i++){
        console.log(commandes[i].ligne)
        for (let j=0; j<commandes[i].ligne.length; j++){
            console.log(commandes[i].ligne[j].ref+" "+commandes[i].ligne[j].nomProduit+" "+commandes[i].ligne[j].qte);
        }
    }

}

function chargerFichier() {
    requestJSon();
}