var students = [
    { name: "Anwar", isSenior: true, hasCompletedAssignments: true },
    { name: "Maroof", isSenior: false, hasCompletedAssignments: false },
    { name: "Faisal", isSenior: true, hasCompletedAssignments: false },
    { name: "Zaheer", isSenior: false, hasCompletedAssignments: true },
    { name: "Jamal", isSenior: true, hasCompletedAssignments: true },
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior Students with Assignments :", seniorStudentsWithAssignments);
function removeIncompleteAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var updatedClassList = removeIncompleteAssignments(students);
console.log("Updated Class List :", updatedClassList);
