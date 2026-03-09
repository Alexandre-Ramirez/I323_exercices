/**
 * DONNÉES DE BASE
 * Ces tableaux servent de source de données pour tous les exercices ci-dessous[cite: 3, 4, 5].
 */
const nombres = [3, 7, 12, 4, 9, 15, 2, 8, 21, 5];
const utilisateurs = [
    { id: 1, nom: "Léa", age: 28, score: 85, ville: "Lyon", tags: ["js", "react"] },
    { id: 2, nom: "Noah", age: 34, score: 92, ville: "Paris", tags: ["ts", "node"] },
    { id: 3, nom: "Zoe", age: 22, score: 68, ville: "Bordeaux", tags: ["css", "html"] },
    { id: 4, nom: "Liam", age: 41, score: 77, ville: "Lyon", tags: ["js", "vue"] },
    { id: 5, nom: "Emma", age: 19, score: 95, ville: "Paris", tags: ["react", "node"] },
    { id: 6, nom: "Theo", age: 30, score: 88, ville: "Lyon", tags: ["ts", "react"] }
];

// --- NIVEAU 1 : BASES (.map et .filter) ---

// 1. .map() crée un nouveau tableau en transformant chaque élément individuellement[cite: 46, 47].
const carres = nombres.map(n => n ** 2);

// 2. .filter() crée un nouveau tableau contenant uniquement les éléments qui valident une condition (ici pair)[cite: 48, 49].
const pairs = nombres.filter(n => n % 2 === 0);

// 3. Filtrage d'objets : on ne garde que les utilisateurs avec un score élevé[cite: 50].
const scoresEleves = utilisateurs.filter(u => u.score >= 85);

// 4. Extraction : .map() permet de ne récupérer qu'une seule propriété d'un objet (ici le nom)[cite: 51].
const prenomsUniquement = utilisateurs.map(u => u.nom);

// 5. Chaînage : On filtre d'abord par âge, puis on transforme le résultat pour n'avoir que les noms[cite: 52].
const prenomsPlus25 = utilisateurs
    .filter(u => u.age > 25)
    .map(u => u.nom);

// --- NIVEAU 2 : REDUCE SIMPLE ---

// 6. .reduce() accumule les valeurs d'un tableau pour n'en faire qu'une seule (somme, produit, etc.)[cite: 53, 54].
const sommeTotale = nombres.reduce((acc, curr) => acc + curr, 0);

// 7. Calcul de moyenne : Somme des âges divisée par le nombre d'utilisateurs[cite: 55, 56, 57].
const moyenneAge = utilisateurs.reduce((acc, u) => acc + u.age, 0) / utilisateurs.length;

// 8. Trouver un extremum : on compare chaque score au score maximum actuel (acc)[cite: 58, 59].
const meilleurScore = utilisateurs.reduce((max, u) => u.score > max ? u.score : max, 0);

// 9. Création d'un dictionnaire : l'accumulateur (acc) est un objet {} que l'on remplit par ville[cite: 60].
const compteParVille = utilisateurs.reduce((acc, u) => {
    acc[u.ville] = (acc[u.ville] || 0) + 1; // On initialise à 0 ou on ajoute 1
    return acc;
}, {});

// --- NIVEAU 3 : COMBINAISONS ---

// 10. Calcul ciblé : Filtre sur les villes, puis somme des scores[cite: 61, 62].
const sommeScoresLyonParis = utilisateurs
    .filter(u => u.ville === "Lyon" || u.ville === "Paris")
    .reduce((acc, u) => acc + u.score, 0);

// 11. flatMap() aplatit les tableaux de tags, puis Set retire les doublons[cite: 63].
const tagsUniques = [...new Set(utilisateurs.flatMap(u => u.tags))];

// 12. Formatage : .map() retourne un objet "simplifié" avec une nouvelle propriété calculée (senior)[cite: 64, 65].
const elevesSimplifies = utilisateurs.map(u => ({
    nom: u.nom,
    ville: u.ville,
    senior: u.age >= 30
}));

// 14. Tri complexe : On transforme l'objet des villes en tableau, on trie sur le nombre, puis on extrait le nom[cite: 68, 69].
const villesTriees = Object.entries(compteParVille)
    .sort((a, b) => b[1] - a[1]) // Tri décroissant sur la valeur
    .map(entry => entry[0]);

// --- NIVEAU 4 : PATTERNS CRÉATIFS ---

// 15. Groupement : L'accumulateur devient un objet dont les valeurs sont des tableaux[cite: 70, 71].
const groupeParVille = utilisateurs.reduce((acc, u) => {
    acc[u.ville] = acc[u.ville] || []; // Création du tableau de la ville s'il n'existe pas
    acc[u.ville].push(u);
    return acc;
}, {});

// 16. Multi-stats : .reduce() peut retourner un objet contenant plusieurs résultats calculés en une seule passe[cite: 77, 78, 79].
const statsNombres = nombres.reduce((acc, n) => ({
    min: Math.min(acc.min, n),
    max: Math.max(acc.max, n),
    sum: acc.sum + n,
    count: acc.count + 1
}), { min: Infinity, max: -Infinity, sum: 0, count: 0 });

// 18. Construction de chaîne : .reduce() sert ici à assembler une phrase avec une ponctuation précise[cite: 80, 81].
const phraseEleves = utilisateurs
    .map(u => `${u.nom} (${u.ville})`)
    .reduce((acc, curr, i, arr) =>
        i === 0 ? curr : (i === arr.length - 1 ? `${acc} et ${curr}` : `${acc}, ${curr}`)
    );

// --- NIVEAU 5 : MINI-DÉFI ---

// 20. Statistiques avancées par ville[cite: 84, 85, 89].
const statsParVille = utilisateurs.reduce((acc, u) => {
    if (!acc[u.ville]) {
        acc[u.ville] = { count: 0, totalAge: 0, scoreMax: 0 };
    }
    acc[u.ville].count++;
    acc[u.ville].totalAge += u.age;
    acc[u.ville].scoreMax = Math.max(acc[u.ville].scoreMax, u.score);
    return acc;
}, {});

// Calcul final de la moyenne pour chaque ville (post-traitement)
Object.keys(statsParVille).forEach(v => {
    statsParVille[v].ageMoyen = statsParVille[v].totalAge / statsParVille[v].count;
    delete statsParVille[v].totalAge; // On supprime la donnée temporaire
});

console.log("Stats finales par ville :", statsParVille);