let students = ['Vicky', 'Simon', 'Jérémy', 'Hugo', 'Amaël', 'Samuel']

//A noter que la fonction upperSortArray dépend de la variable students, extérieure à la fonction
function upperSortArray() {
    let students_modified = []
    //Noter le caractère mutable de la fonction push() : students_modified est modifié par l'ajout de données
    for (let i = 0; i < students.length; i++) {
        students_modified.push(students[i].toUpperCase());
    }
    //Noter le caractère mutable de la fonction sort() : students_modified est modifié par le tri
    students_modified.sort()
    return students_modified
}

console.log(upperSortArray())