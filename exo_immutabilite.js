// --- MANIPULATION DE TABLEAUX ET OBJETS ---

// 1 : Déclaration d'un tableau simple
const prenomEleves = ["Alexandre", "Alex", "Kilian", "Fabian", "Niels"];
console.log(prenomEleves);

// 2 : Création d'un tableau imbriqué (Attention : ici on insère le tableau entier comme premier élément)
// Résultat : [["Alexandre", "Alex", ...], "Nathan"]
const tableauEleve2 = [prenomEleves, "Nathan"];
console.log(tableauEleve2);

// 3 : .slice(début, fin) extrait une partie du tableau sans modifier l'original.
// Ici : de l'index 0 (inclus) à 3 (exclu) -> les 3 premiers éléments.
const premiers3Eleves = prenomEleves.slice(0, 3);
console.log(premiers3Eleves);

// 4 : .slice avec index négatif commence l'extraction par la fin.
// -2 signifie : "Prendre les 2 derniers éléments".
const derniers2Eleves = prenomEleves.slice(-2);
console.log(derniers2Eleves);

// 5 : Mise à jour d'un objet avec Object.assign()
const eleve1 = {
    prenom : "Alexandre",
    nom : "Ramirez",
    age : 25
};
const eleve1Modified = {age : 26};

// Fusionne eleve1Modified dans eleve1. L'original est modifié (Mutation).
Object.assign(eleve1, eleve1Modified);
console.log(eleve1);

// 6 : Calcul et mise à jour de propriété
const employee1 = {
    prenom: "Alexandre",
    nom : "Ramirez",
    salaire : 5000
};

// On crée un objet partiel avec la nouvelle valeur calculée
const employee1Modified = {salaire : employee1.salaire * 2};

// Application de l'augmentation sur l'objet original
Object.assign(employee1, employee1Modified);
console.log(employee1);


// --- FONCTIONS PURES ---

// 1 : Une fonction pure ne dépend que de ses arguments et n'a pas d'effets de bord.
// Pour les mêmes entrées (a, b), le résultat sera toujours identique.
function multiply(a, b) {
    return a * b;
}

// Notation fléchée (Arrow Function) : Syntaxe plus moderne et concise.
// const multiplyArrow = (a, b) => a * b;

// 2 : Utilisation d'une fonction pure pour compter des éléments
const mesEleves = ["Alexandre", "Fabian", "Niels", "Kilian"];

// Cette fonction est pure : elle ne modifie pas le tableau passé en paramètre.
const compterEleves = (tableau) => {
    return tableau.length; // Accède à la propriété .length du tableau
};

const nombreTotal = compterEleves(mesEleves);
// Utilisation des "Template Literals" (backticks ``) pour injecter une variable dans une chaîne.
console.log(`Nombre d'élèves : ${nombreTotal}`);