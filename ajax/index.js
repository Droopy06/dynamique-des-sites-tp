
function afficherContentXml(xmlDocument){
    let contentDiv = "<ul> ";
    let restaurants = xmlDocument.getElementsByTagName("restaurant");

    for(let i = 0; i < restaurants.length; i++){
        console.log(restaurants.item(i).attributes.getNamedItem("name"));
        console.log(restaurants.item(i).attributes.getNamedItem("name").value);
        contentDiv += "<li>nom "+restaurants.item(i).attributes.getNamedItem("name").value+" ";
        contentDiv += "adresse: "+restaurants.item(i).attributes.getNamedItem("address").value+" </li>";
    }

    contentDiv += "</ul>";

    let target = document.getElementById("restaurants");
    target.innerHTML = contentDiv;
}

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

function request() {
    let xhr = getXMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
            afficherContentXml(this.responseXML);
        }
    };

    xhr.open("GET", "restaurants.xml?rand="+Math.random(), true);
    xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.send(null);
}

function chargerFichier() {
    request();
}