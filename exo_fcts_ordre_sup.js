// Exercices d'ordre supérieurs

// 1 : Transformation de données avec .map()
/*
function square(number) {
    return number ** 2; // Calcule la puissance de 2
}

const init_array = [1,2,3,4,5]
// .map() crée un nouveau tableau en appliquant 'square' à chaque élément
const squared_array = init_array.map(square)

console.log(squared_array) // [1, 4, 9, 16, 25]
*/

// 2 : Recherche et filtrage dans un tableau d'objets
/*
const cars = [
    {name : 'Fiat 500', cv : 5},
    {name : 'Bugatti Chiron', cv : 214},
    {name : 'Aixam', cv : 1},
    {name : 'Aston Martin Vantage', cv : 57},
    {name : 'Peugeot 308', cv : 13},
]

function horsePowerMoreThan10(car) {
    return car.cv > 10; // Condition : vrai si supérieur à 10
}

// .filter() retourne un tableau contenant TOUS les éléments qui valident la condition
const carPower = cars.filter(horsePowerMoreThan10);

// .find() retourne uniquement le PREMIER élément qui correspond à la condition (l'objet lui-même)
const carcv57 = cars.find(car => car.cv === 57);

console.log(carPower);
console.log(carcv57)
*/

// 3 : Accumulation de valeurs avec .reduce()
/*
const number_array = [1,2,3,5,7,9,11,13,17]

// .reduce() "réduit" le tableau à une seule valeur.
// Ici, on part de 0 et on ajoute chaque 'currentValue' à l''accumulator'.
const totalSum = number_array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(totalSum); // 68
 */

// 4 : Calcul complexe (Moyenne)
/*
const number_array = [1, 2, 3, 5, 7, 9, 11, 13, 17];

// Encapsulation du .reduce() dans une fonction réutilisable
function calculateSum(array) {
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

// On divise la somme totale par le nombre d'éléments (.length)
const average = calculateSum(number_array) / number_array.length;

console.log(average); // 7.555...
*/

// 5 : Chaînage et fonction pure (Immuabilité)
/*
const eleves = [
    { nom: "Alexandre", moyenne: 5.3 },
    { nom: "Fabian", moyenne: 5.4 },
    { nom: "Alex", moyenne: 3.1 },
    { nom: "Kilian", moyenne: 5.3 },
    { nom: "Niels", moyenne: 3.9 }
];

// Cette fonction est "pure" car elle ne modifie pas le tableau original 'students'.
function getSortedTopStudents(students) {
    // [...students] crée une copie (shallow copy) pour éviter de modifier l'original avec .sort()
    return [...students]
        // Garde uniquement les élèves avec une moyenne > 4.0
        .filter(student => student.moyenne > 4.0)
        // Trie le nouveau tableau par nom (ordre alphabétique)
        .sort((a, b) => a.nom.localeCompare(b.nom));
}

const result = getSortedTopStudents(eleves);

console.log("Résultat filtré et trié :", result);
 */

// Mise en pratique
/*
const participants =
    [
        {
            firstName: "Alice",
            lastName: "Durand",
            diet: "végétarien",
            role: "manager"
        },
        {
            firstName: "Bruno",
            lastName: "Martin",
            diet: "standard",
            role: "technicien"
        },
        {
            firstName: "Chloé",
            lastName: "Petit",
            diet: "vegan",
            role: "secrétaire"
        },
        {
            firstName: "David",
            lastName: "Lemoine",
            diet: "sans porc",
            role: "technicien"
        },
        {
            firstName: "Emma",
            lastName: "Roux",
            diet: "végétarien",
            role: "manager"
        },
        {
            firstName: "François",
            lastName: "Giraud",
            diet: "standard",
            role: "directeur"
        },
        {
            firstName: "Gabrielle",
            lastName: "Lefèvre",
            diet: "sans porc",
            role: "secrétaire"
        },
        {
            firstName: "Hugo",
            lastName: "Bernard",
            diet: "vegan",
            role: "technicien"
        },
        {
            firstName: "Inès",
            lastName: "Moreau",
            diet: "standard",
            role: "secrétaire"
        },
        {
            firstName: "Jules",
            lastName: "Robert",
            diet: "végétarien",
            role: "technicien"
        },
        {
            firstName: "Karine",
            lastName: "Fontaine",
            diet: "sans porc",
            role: "manager"
        },
        {
            firstName: "Louis",
            lastName: "Chevalier",
            diet: "vegan",
            role: "directeur"
        }
    ]

const countDiets = (list) => {
    return list.reduce((acc, person) => {
        const diet = person.diet;
        // Si le régime existe déjà dans l'accumulateur, on ajoute 1, sinon on l'initialise à 1
        acc[diet] = (acc[diet] || 0) + 1;
        return acc;
    }, {}); // {} est l'objet vide de départ (l'accumulateur)
};

console.log(countDiets(participants));
// Résultat : { végétarien: 3, standard: 3, vegan: 3, "sans porc": 3 }
*/

// 2
/*
const temperaturesF = [32, 45, 12, 0, 75, 89, -10, 52];

const getMinPositiveCelsius = (temps) => {
    return temps
        // 1. Conversion en Celsius
        .map(f => (f - 32) * 5 / 9)
        // 2. On ne garde que les températures positives
        .filter(c => c > 0)
        // 3. On trouve le minimum parmi les survivants
        .reduce((min, curr) => curr < min ? curr : min);
};

const result = getMinPositiveCelsius(temperaturesF);

console.log(`La plus petite température positive est : ${result.toFixed(1)}°C`);
// Pour 45°F, le résultat est environ 7.2°C
 */