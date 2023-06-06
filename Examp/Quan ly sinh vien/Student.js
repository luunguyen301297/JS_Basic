let data = []

document.getElementById('add-student').onclick = () => {addStudent()}

addStudent = () => {
  let student_id = document.getElementById('student-id').value
  let name = document.getElementById('name').value

  let maths_score = document.getElementById('maths-score').value
  let physics_score = document.getElementById('physics-score').value
  let chemystry_score = document.getElementById('chemystry-score').value

  let gpa = (parseInt(maths_score) + parseInt(physics_score) + parseInt(chemystry_score)) / 3
  let ranked = ""

  let listStudent = {
    ID: student_id,
    Name: name,
    GPA: gpa,
    Ranked: ranked
  }
  data.push(listStudent)
  renderTable()
}


renderTable = () => {
  table = `<tr>
    <th></th>
    <th>Student ID</th>
    <th>Name</th>
    <th>GPA</th>
    <th>Ranker</th>
  </tr>`

  for (i = 0; i < data.length; i++) {
    table += `<tr>
      <td></td>
      <td>${data[i].ID}</td>
      <td>${data[i].Name}</td>
      <td>${data[i].GPA}</td>
      <td>Ranked</td>
    </tr>`
  }
  document.getElementById('student-table').innerHTML = table
}
