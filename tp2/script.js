var commandes =[
{
	"num":"123",
	"date":"01/01/2020",
	"HT":"100.00",
	"TVA":"10.00",
	"FP":"15.00",
	"TTC":"130.00",
	"nomClient":"Pierre D",
	"expedie":false,
	"ligne":[{
		"ref":"123",
		"nomProduit":"Sacccccc gant",
		"prixHT":"50",
		"qte":1
		},
		{
			"ref":"678",
			"nomProduit":"Pneu",
			"prixHT":"50",
			"qte":1
		},
		{
			"ref":"67à",
			"nomProduit":"Pneu",
			"prixHT":"50",
			"qte":12
		}
	]
	
},
{
	"num":"678",
	"date":"02/02/2020",
	"HT":"500.00",
	"TVA":"50.00",
	"FP":"55.00",
	"TTC":"157.00",
	"nomClient":"Jean B",
	"expedie":true,
	"ligne":[{
			"ref":"567",
			"nomProduit":"Jeu en bois",
			"prixHT":"10",
			"qte":6
		},
		{
			"ref":"678",
			"nomProduit":"Ordinateur",
			"prixHT":"20",
			"qte":3
		}
	]
	
}
];
document.addEventListener("DOMContentLoaded", function(event) {
	let HT=0,FP=0,TTC=0;
 	let table1 = "<table class=\"table table-striped\"><thead><th>Date</th><th>Num</th><th>Nom</th><th>HT</th><th>FP</th><th>TTC</th></thead>";
 	let table2 = "<table class=\"table table-striped\"><thead><th>Ref</th><th>Nom</th><th>PrixHT</th><th>Qte</th></thead><tbody>";
 	table1 += '<tbody>';
 	for (let i = 0; i <= commandes.length-1; i++) {
 		if (i) {}
 		table1 += '<tr onclick="show('+i+')" id="row'+i+'" class="tabrow"><th>'+commandes[i].date+'</th><th>'+commandes[i].num+'</th><th>'+commandes[i].nomClient+'</th><th>'+commandes[i].HT+'</th><th>'+commandes[i].FP+'</th><th>'+commandes[i].TTC+'</th></tr>';
		HT = Number(HT) + Number(commandes[i].HT);
		FP = Number(FP) + Number(commandes[i].FP);
		TTC = Number(TTC) +Number(commandes[i].TTC);

		for (let j=0; j <= commandes[i].ligne.length-1; j++) {
			table2 += '<tr class=\'subTab subTab'+i+'\'><th>'+commandes[i].ligne[j].ref+'</th><th>'+commandes[i].ligne[j].nomProduit+'</th><th>'+commandes[i].ligne[j].prixHT+'</th><th>'+commandes[i].ligne[j].qte+'</th></tr>'
		}
 	}
 	table2 += '</tbody></table>';
 	table1 += '<tr class="total"><th>Total</th><th></th><th></th><th>'+HT+'</th><th>'+FP+'</th><th>'+TTC+'</th></tr>'
 	table1 += '</tbody>';
 	table1 += '</table>';
 	document.getElementById("table1").innerHTML = table1;
 	document.getElementById("table2").innerHTML = table2;

 
});

	function show(line){
		for (let i = 0; i < document.getElementsByClassName("tabrow").length; i++) {
			document.getElementsByClassName("tabrow")[i].style.backgroundColor ="initial";
		}
	
		document.getElementById("row"+line).style.backgroundColor ="cornflowerblue";
		document.getElementById("table2").style.display="block";
		for ( i = 0; i < document.getElementsByClassName("subTab").length; i++) {
			document.getElementsByClassName("subTab")[i].style.display = "none";
		}
		
		for ( i = 0; i < document.getElementsByClassName("subTab"+line).length; i++) {
		document.getElementsByClassName("subTab"+line)[i].style.display="table-row";
		}
		
	}









































/*

var nom ="toto";
document.write("var ="+nom+" type: "+typeof(nom));*/





/*function Chien(txtNom, txtRace, txtMaitre){
        this.nom = txtNom;
        this.race = txtRace;
        this.maitre = txtMaitre;
        this.print = affChien;
    }

    function affChien(){
        document.write("Ce chien s'appelle " + this.nom + " de race "+ this.race + ". Il appartient à "+ this.maitre +".");
    }

    var chien = new Chien("milou","bichon","tintin");
    var chien1 = new Chien(chien.nom,chien.race,chien.maitre);
    chien1.nom = "youri";
    chien.toString();

var ze = "fez";
var fg = ze;
fg="dfgfgdfg"
document.write(ze);
document.write(chien1.print());*/
	





/*var compteur = 0;
var monTexte = "Ceci est mon super texte...";
var prixTotal = 12.5;
var string = "120";
var test = true;

document.write(typeof(compteur)+'     ');
document.write(typeof(monTexte)+'    ');
document.write(typeof(prixTotal)+'    ');
document.write(typeof(string))*/

/*const prenom = prompt("Entrez votre prénom :");
alert(`Bonjour, ${prenom}`);*/