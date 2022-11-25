//Elements selection
const toDoList_form = document.querySelector("#toDoList_form");
const toDoList_input = document.querySelector("#toDoList_input");
const toDoList = document.querySelector("#toDoList");
const toDoList_edit_form = document.querySelector("#toDoList_edit_form");
const toDoList_edit_input = document.querySelector("#toDoList_edit_input");
const toDoList_cancel_edit_button = document.querySelector("#toDoList_cancelEditButton");
const toDoList_searchInput = document.querySelector("#toDoList_searchInput");
const toDoList_reset_button = document.querySelector("#reset");


//Functions (for Renderization)
const renderTodo = (toDo) => {

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");

    const toDoTitle = document.createElement("h3");
    toDoTitle.innerText = toDo.name;
    toDoDiv.appendChild(toDoTitle);

    const doneButton = document.createElement("button");
    doneButton.setAttribute('id', toDo.id);
    doneButton.classList.add("finish_toDo");
    doneButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    toDoDiv.appendChild(doneButton);

    const editButton = document.createElement("button");
    editButton.setAttribute('id', toDo.id);
    editButton.classList.add("edit_toDo");
    if(toDo.done){
        toDoDiv.classList.toggle("done");
    }
    editButton.innerHTML = ' <i class="fa-solid fa-pen"></i>';
    toDoDiv.appendChild(editButton);

    const attachButton = document.createElement("button");
    attachButton.classList.add("attach_toDo");
    attachButton.innerHTML = ' <i class="fa-solid fa-paperclip"></i>';
    toDoDiv.appendChild(attachButton);

    const removeButton = document.createElement("button");
    removeButton.setAttribute('id', toDo.id);
    removeButton.classList.add("remove_toDo");
    removeButton.innerHTML = ' <i class="fa-solid fa-xmark"></i>';
    toDoDiv.appendChild(removeButton);

    toDoList.appendChild(toDoDiv);
    toDoList_input.value = "";
    toDoList_input.focus();

}

//Searching
// const getSearchedTodos = (search) => {
//     const todos = document.querySelectorAll(".toDo");
  
//     todos.forEach((todo) => {
//       const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
  
//       todo.style.display = "flex";
  
//       if (!todoTitle.includes(search)) {
//         todo.style.display = "none";
//       }
//     });
//   };

//Events

//Add Forms
toDoList_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = toDoList_input.value
    const todos = getTodosLocalStorage();

    if (inputValue) {
        const obj = {
            name: inputValue,
            id: todos.length + 1,
        }
        
        todos.push(obj)
        localStorage.setItem('toDo', JSON.stringify(todos))
        renderTodo(obj);
    }
})

//Reset itens
toDoList_reset_button.addEventListener("click", () => {
    renderTodo.doneButton.remove();
})

//Search Itens
const getSearchedTodos = (search) => {
    const todos = document.querySelectorAll(".toDo");
  
    todos.forEach((todo) => {
      const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
  
      todo.style.display = "flex";
  
      if (!todoTitle.includes(search)) {
        todo.style.display = "none";
      }
    });
  };
toDoList_searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;

  getSearchedTodos(search);
});

//Tag Itens
document.addEventListener("click", (e) => {

    const targetEl = e.target;

    const parentEl = targetEl.closest("div");

    if (targetEl.classList.contains("finish_toDo")) {
        parentEl.classList.toggle("done");

        const id = parseInt(targetEl.getAttribute('id'));
        const todos = getTodosLocalStorage();
        const index = todos.findIndex(todo => todo.id === id);
        todos[index] = {
            ...todos[index],
            done: !todos[index].done
        }
        localStorage.setItem('toDo', JSON.stringify(todos));
    }

    if (targetEl.classList.contains("remove_toDo")) {
        parentEl.remove();

        const id = parseInt(targetEl.getAttribute('id'));
        const todos = getTodosLocalStorage();
        const index = todos.findIndex(todo => todo.id === id);
        todos[index] = {
            done: true
        }
        todos.splice(index, 1);
        localStorage.setItem('toDo', JSON.stringify(todos));
    }


})



//Events (Local Storage)
const getTodosLocalStorage = () => {
    const todos = JSON.parse(localStorage.getItem("toDo")) || [];

    return todos;
};

const loadTodos = () => {
    const todos = getTodosLocalStorage();

    todos.forEach((toDo) => {
        renderTodo(toDo);
    });
};


loadTodos();