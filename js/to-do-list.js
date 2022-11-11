const form = document.querySelector('form');
const all = document.querySelector('.all');
let firstTodo = document.querySelector("#to");
const filter = document.querySelector('#filter')

form.addEventListener('submit', addTodo);
all.addEventListener('click', deleteTodo);
filter.addEventListener('click', filterTodo)

function addTodo(e) {

    all.innerHTML += `
    <div class="todo-div">
              <input type="text" id="todo" class="to filterTodos " />
              <div class="delete">
                <span class="x">&times</span>
              </div>
            </div>
    `
    const inputs = document.querySelectorAll('#todo');

    inputs.forEach(todo => {
        todo.addEventListener('blur', (_) => {
            todo.setAttribute('value', todo.value)
        })
    })
    e.preventDefault();
}



firstTodo.addEventListener("blur", (_) => {

    firstTodo.setAttribute("value", firstTodo.value);

});

function deleteTodo(e) {
    if (e.target.className == 'delete') {
        e.target.parentElement.remove();
    }
    else if (e.target.className == 'x') {
        e.target.parentElement.parentElement.remove()
    }
}

let index = 0;
function filterTodo(e) {

    let input = document.querySelectorAll('.filterTodos');

    let arr = [];

    input.forEach((i) => {
        if (i.value != 0) {
            arr.push(i.value);
        }

    })

    if (index == 0) {
        filter.src = "images/za.svg"

        arr.sort((a, b) => {
            if (a > b) {
                return 1;
            }
            else if (a < b) {
                return -1
            }

            else {
                return 0
            }
        })

        index++;
    }

    else {
        filter.src = "images/az.svg";
        arr.sort((a, b) => {
            if (a > b) {
                return -1;
            }
            else if (a < b) {
                return 1;
            }
            else {
                return 0;
            }
        })

        index--;
    }

    all.innerHTML = "";
    arr.forEach((item) => {
        all.innerHTML += `
        <div class="todo-div">
    <input type="text" id="todo" class="todo filterTodos local" value="${item}"  />
    <div class="delete">
    <span class="x">&times</span>
    </div>
    </div>`
    })

}   