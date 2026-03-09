//1
/*
const calculerSomme = (tableau) => {
    // Condition d'arrêt : si le tableau est vide, la somme est 0
    if (tableau.length === 0) return 0;

    // Appel récursif : premier élément + la somme du reste du tableau
    return tableau[0] + calculerSomme(tableau.slice(1));
};

console.log(calculerSomme([1, 2, 3, 4])); // Affiche 10
*/

//2
/*
const boucleRecursive = (i = 0) => {
    // Condition d'arrêt : on s'arrête quand i atteint 10
    if (i >= 10) return;

    console.log(`i vaut ${i}`);

    // Appel récursif en incrémentant i
    boucleRecursive(i + 1);
};

boucleRecursive();
*/

//3
/*
const nums = [5, 10, 25, 3, 10, 7];

const bouclesImbriqueesRecursives = (i = 0, j = i + 1) => {
    // Condition d'arrêt globale : si 'i' a parcouru tout le tableau (sauf le dernier)
    if (i >= nums.length - 1) return;

    // Si 'j' arrive à la fin du tableau, on passe à l'itération 'i' suivante
    if (j >= nums.length) {
        return bouclesImbriqueesRecursives(i + 1, i + 2);
    }

    // Action (console.log)
    console.log(`élément en position ${i} et ${j} : ${nums[i]} et ${nums[j]}`);

    // Itération sur la boucle interne 'j'
    bouclesImbriqueesRecursives(i, j + 1);
};

bouclesImbriqueesRecursives();
*/

//LE COMPTE EST BON - SOLUTION 1
/**
 * Fonction pure et d'ordre supérieur pour générer toutes les paires possibles
 * d'un tableau et retourner les éléments restants sans modifier le tableau original.
 */
const getPairs = (arr) => {
    return arr.flatMap((a, i) =>
        arr.slice(i + 1).map((b, j) => ({
            a,
            b,
            // Immutabilité : on filtre pour créer un nouveau tableau des restes
            remaining: arr.filter((_, index) => index !== i && index !== (i + 1 + j))
        }))
    );
};

/**
 * Fonction pure pour obtenir les 4 opérations de base valides entre deux nombres.
 * Garantit que les résultats intermédiaires sont des entiers positifs.
 */
const getValidOperations = (a, b) => {
    const ops = [
        { val: a + b, str: `${a} + ${b} = ${a + b}` },
        { val: a * b, str: `${a} * ${b} = ${a * b}` }
    ];

    // Soustractions (résultat positif strict)
    if (a - b > 0) ops.push({ val: a - b, str: `${a} - ${b} = ${a - b}` });
    if (b - a > 0) ops.push({ val: b - a, str: `${b} - ${a} = ${b - a}` });

    // Divisions (résultat entier)
    if (a % b === 0 && b !== 0) ops.push({ val: a / b, str: `${a} / ${b} = ${a / b}` });
    if (b % a === 0 && a !== 0) ops.push({ val: b / a, str: `${b} / ${a} = ${b / a}` });

    return ops;
};

/**
 * Fonction principale récursive (Fonction Pure)
 */
const solve = (target, numbers, history = [], best = { diff: Infinity, history: [], val: null }) => {
    // 1. Trouver le meilleur résultat dans la liste actuelle (Fonction d'ordre supérieur : reduce)
    const currentBest = numbers.reduce((acc, num) => {
        const diff = Math.abs(target - num);
        return diff < acc.diff ? { val: num, diff, history } : acc;
    }, best);

    // Condition d'arrêt de la récursivité
    if (currentBest.diff === 0 || numbers.length === 1) {
        return currentBest;
    }

    // 2. Générer les paires disponibles
    const pairs = getPairs(numbers);

    // 3. Récursivité interne pour parcourir les paires (remplace une boucle for/of)
    const explorePairs = (pairsList, currentBestSoFar) => {
        // Si on a épuisé les paires ou trouvé le compte exact, on remonte le résultat
        if (pairsList.length === 0 || currentBestSoFar.diff === 0) return currentBestSoFar;

        // Déstructuration (Immutabilité)
        const [{ a, b, remaining }, ...restPairs] = pairsList;
        const ops = getValidOperations(a, b);

        // 4. Récursivité interne pour parcourir les opérations d'une paire (remplace une boucle)
        const exploreOps = (opsList, bestOpSoFar) => {
            if (opsList.length === 0 || bestOpSoFar.diff === 0) return bestOpSoFar;

            const [op, ...restOps] = opsList;

            // Création de NOUVEAUX tableaux pour l'appel suivant (Immutabilité)
            const nextNumbers = [...remaining, op.val];
            const nextHistory = [...history, op.str];

            // Appel récursif principal pour creuser cet arbre de calcul
            const result = solve(target, nextNumbers, nextHistory, bestOpSoFar);

            // On continue avec le reste des opérations en gardant le meilleur résultat
            return exploreOps(restOps, result.diff < bestOpSoFar.diff ? result : bestOpSoFar);
        };

        // On explore toutes les opérations de la paire actuelle
        const bestFromPair = exploreOps(ops, currentBestSoFar);

        // On passe à la paire suivante
        return explorePairs(restPairs, bestFromPair);
    };

    // Lancement de l'exploration
    return explorePairs(pairs, currentBest);
};

// --- TEST AVEC L'EXEMPLE DU DOCUMENT ---
// Le nombre à trouver est compris entre 101 et 999.
const cible = 952;
const tirage = [25, 50, 75, 100, 3, 6];

console.log(`Recherche de la cible : ${cible} avec les nombres : ${tirage.join(', ')}...`);
const resultat = solve(cible, tirage);

console.log(`\nMeilleur résultat trouvé : ${resultat.val}`);
console.log("Étapes du calcul :");
resultat.history.forEach(etape => console.log(etape));


//LE COMPTE EST BON - SOLUTION 2
/*
const operate = (a, b) => [
    a + b,
    a - b, b - a,
    a * b,
    a % b === 0 && a / b, b % a === 0 && b / a
].filter(v => v > 0); // Garde uniquement les entiers positifs

const solve = (nums, target) => {
    // 1. Vérifier si la cible est dans le tableau actuel
    if (nums.includes(target)) return { found: true, path: [target] };

    // 2. Explorer toutes les combinaisons de paires
    return nums.flatMap((a, i) =>
        nums.slice(i + 1).flatMap((b, j) => {
            const remaining = nums.filter((_, idx) => idx !== i && idx !== i + 1 + j);

            return operate(a, b).flatMap(res => {
                const solution = solve([...remaining, res], target);
                if (solution.found) return { ...solution, path: [`${a} op ${b} = ${res}`, ...solution.path] };
                return [];
            });
        })
    )[0] || { found: false, closest: nums[0] }; // Retourne la première solution trouvée
};

// Test rapide
const tirage = [25, 50, 75, 100, 3, 6]; [cite: 25]
console.log(solve(tirage, 952));
*/
