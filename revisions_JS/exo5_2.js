let students = [
    {firstname : 'Asterix', marks : [4.0, 4.5, 5, 4.5]},
    {firstname : 'Obelix', marks : [4.5, 5, 6, 4.5]},
    {firstname : 'Panoramix', marks : [3.0, 4.5, 2, 5]},
    {firstname : 'Abraracourcix', marks : [3.0, 4, 3.5, 5]}
]
console.log(students)

let students_firstname = []
for (let student of students) {
    students_firstname.push(student.firstname)
}
console.log(students_firstname)

let search_letter = (letter) => {
    let students_filter_by_firstname = []
    for (let student of students) {
        if (student.firstname.toLowerCase().indexOf(letter) >= 0)
            students_filter_by_firstname.push(student.firstname)
    }
    return students_filter_by_firstname
}
console.log(search_letter('a'))

let getAverageMarks = (marks) => {
    let sum = 0
    for (let mark of marks) {
        sum +=mark
    }
    let avg = sum / marks.length
    return avg
}

for (let i = 0; i < students.length; i++) {
    //console.log("Moyenne de " + students[i].firstname + " : " + getAverageMarks(students[i].marks))
    console.log(`Moyenne de ${students[i].firstname} : ${getAverageMarks(students[i].marks)}`)
}