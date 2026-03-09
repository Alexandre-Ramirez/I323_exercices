// --- Exercice 1 : Transformation et Tri ---
/*
const eleves = []
// .push() ajoute des éléments à la fin du tableau (méthode avec effet de bord)
eleves.push("Alexandre","Alex","Fabian","Kilian","Nathan","Niels");

// .map() crée un nouveau tableau avec les noms en majuscules
const elevesmajuscule = eleves.map(element => element.toUpperCase());

// .sort() trie le tableau par ordre alphabétique (modifie le tableau elevesmajuscule)
elevesmajuscule.sort()
console.log(elevesmajuscule)
*/

// --- Exercice 2 : Référence d'objet et Mutabilité ---
/*
const notes = [5.5, 4.5, 5, ...]

let student = new Object();
student.name = "Alexandre"
student.notes = notes // student.notes pointe vers l'adresse mémoire du tableau 'notes'

console.log(student)

// Comme student.notes est une référence vers 'notes',
// modifier le tableau original modifie aussi l'objet student.
notes.push(6)

console.log(student) // student.notes contient maintenant le 6
 */

// --- Exercice 3 : Logique algorithmique classique (Boucles) ---
/*
const eleves = [ ... ];

// Partie 1 : Extraction manuelle (équivalent d'un .map)
const nomEleves = [];
for (let i = 0; i < eleves.length; i++) {
    nomEleves.push(eleves[i].nom);
}

// Partie 2 : Filtrage manuel (équivalent d'un .filter)
function filtreNom(liste) {
    const resultat = [];
    for (const eleve of liste) {
        if (eleve.nom.toLowerCase().includes("a")) {
            resultat.push(eleve.nom);
        }
    }
    return resultat
}

// Partie 3 : Calcul de moyenne et transformation complexe
function moyenneEleve(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length; // Calcule la moyenne arithmétique
}

function filtreMeilleurs(listeEleves) {
    const resultat = [];
    for (const eleve of listeEleves) {
        const moyenne = moyenneEleve(eleve.notes);
        // On ne garde que les élèves au-dessus de 4.5
        if (moyenne > 4.5) {
            resultat.push({
                prenom: eleve.nom,
                moyenne: moyenne
            });
        }
    }
    return resultat
}
*/

// --- Exercice 4 & 5 : De la fonction classique à la fonction fléchée ---
/*
// Calcul de la somme des entiers de 1 à n (Somme de Gauss)
const sumPreviousNumber = (n) => {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
};
*/

// --- Exercice 6 : Le piège de la mutabilité (Moment.js) ---
/*
import moment from 'moment'

let today = moment()

// Moment.js est "mutable" : .add() modifie l'objet lui-même !
let future = today.add(1, 'day')

// En JS, les objets sont comparés par référence (adresse mémoire).
// Ici future et today pointent vers le MÊME objet en mémoire.
if (future === today) {
    console.log("Etrange, non ?") // S'affichera car c'est la même instance
}
*/