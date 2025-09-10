document.getElementById('filterForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const minGrade = document.querySelector('input[name="minGrade"').value;
    console.log(minGrade, 'MIN GRADE')
    const url = `/students/filter?minGrade=${minGrade}`

    try {
        const response = await fetch(url);
        const students = await response.json();
        const resultsDiv = document.getElementById('results')
        if (students.length === 0) {
            resultsDiv.innerHTML = `<p> No Students Found </p>`
            return
        }
        const list = students.map(s => `<li>${s.name}: ${s.grade}</li>`).join('')
        resultsDiv.innerHTML = `<ul>${list}</ul>`
        console.log(students, "STUDENTS")
    } catch (error) {
        resultsDiv.innerHTML = '<p> Error fetching students data </p>'
        console.log('error');
    }
})