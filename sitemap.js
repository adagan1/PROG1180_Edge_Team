function generateRandomUserData() {
    const users = [];
    for (let i = 1; i <= 10; i++) {
     const user = {
       id: i,
       name: 'User ${i}',
       email: 'user${i}@example.com',
       age: Math.floor(Math.random() * 50) + 18, // Random age between 18 and 67
    };
    users.push(user)
  }
  return users;
}
const sampleData = generateRandomUserData();
const dataRows = document.getElementsByClassName("dataRows");
sampleData.forEach((user) => {
  row = document.createElement("tr")
  dataRows.innerHTML += `
  <tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
  </tr>
  `;
});
