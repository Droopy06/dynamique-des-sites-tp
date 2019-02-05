






/*IF*/
/* Ouvrir une invite de commande pour y inscrire un nombre, une popUp vous indiquera si il est positif*/
const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}

/*IF ELSE*/
/* Ouvrir une invite de commande pour y inscrire un nombre, une popUp vous indiquera si il est positif ou negatif*/

const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
else {
  console.log(nombre + " est négatif ou nul");
}
/*Ouvrir une invite de commande pour y inscrire un nombre, vérifier que le nombre est compris entre 0 et 10*/
if ((nombre >= 0) && (nombre <= 10)) {
  console.log(nombre + " est compris entre 0 et 10");
}

/*FOR*/
/*Vous me copierez 100 fois "Je chercherai la solution avant de regarder la solution"*/


/*FOR*/
/*Afficher les valeurs valeurs du tableau*/

/*WHILE*/
/*Créer une boucle dont seul le mot "stop" peut en sortir */
let lettre = "";
while (lettre !== "stop") {
  lettre = prompt("Quel est le mot de passe ?");
}


/*Object*/
/* Modélisation d'un compte bancaire*/
/* Créer un methode pour modifier le solde*/
/* Créer une methode pour afficher le solde*/


const compte = {
  titulaire: "Alex",
  solde: 0,

  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  },

  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
};

// "titulaire: Alex, solde: 0"
console.log(compte.decrire());
compte.crediter(250);
compte.crediter(-80);
console.log(compte.decrire());