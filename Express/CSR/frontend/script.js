const APILINK = "http://localhost:3000/";
const todoList = document.getElementById('todoList');
fetch(`${APILINK}todos`)
    
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then(data => {
       console.log(data);

        for (const item of data) {
            const para = document.createElement("p");
            para.textContent = item;
            todoList.appendChild(para);
        }
    });
function displayTodos() {
    fetch(`${APILINK}todos`)
        .then(res => res.json())
        .then(data => {
            todoList.innerHTML = "";
            for (const item of data) {
                const para = document.createElement("p");
                para.textContent = item;
                todoList.appendChild(para);
            }
        });
}
displayTodos();

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const inp = document.getElementById('todoInput');

    if (inp.value.trim() === "") return;

    fetch(`${APILINK}todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: inp.value })
    })
    .then(res => res.json())
    .then(() => {
        inp.value = "";
        displayTodos(); 
    })
    .catch(err => console.error(err));
});