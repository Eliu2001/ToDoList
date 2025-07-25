let toDoList = [];
let completedList = [];

// Función para generar ID único usando Math
function generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
}

// Función para obtener fecha actual usando Date
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function addTask(event){
    event.preventDefault();
    
    let form = event.target;
    let toDo = form.toDo.value.trim(); // Obtener el valor del campo y eliminar espacios

    //Condiciones de BORDE
    if (toDo === ""){
        alert("El campo no puede estar vacío");
        return;
    }
    
    // Crear objeto tarea con ID único y fecha usando objetos preconstruidos
    let taskObject = {
        id: generateUniqueId(), // Usando Math
        text: toDo,
        dateAdded: getCurrentDate() // Usando Date
    };
    
    //Agregar la tarea a la lista de pendientes
    toDoList.push(taskObject);
    
    //Actualizar la lista de tareas pendientes
    updateToDoList();
    
    //Limpiar el campo de entrada
    form.toDo.value = "";
}
function updateToDoList(){
    let toDoListElement = document.getElementById("pendientes");
    toDoListElement.innerHTML = ""; // Limpiar la lista antes de mostrarla
    
    toDoList.forEach((task, index) => {
        let newElement = `
        <li>
            <input type="checkbox" id="task-${index}" onchange="checkTask(${index})">
            <label for="task-${index}">
                <strong>${task.text}</strong><br>
                <small style="color: #666;">Agregada: ${task.dateAdded}</small>
            </label>
            <button onclick="deleteTask(${index})">Eliminar Tarea</button>
        </li>`;
        toDoListElement.innerHTML += newElement;
    });
}

function updateCompletedList(){
    let completedListElement = document.getElementById("completadas");
    completedListElement.innerHTML = ""; // Limpiar la lista antes de mostrarla
    
    completedList.forEach((task, index) => {
        let newElement = `
        <li>
            <span>
                <strong>${task.text}</strong><br>
                <small style="color: #666;">Completada desde: ${task.dateAdded}</small>
            </span>
            <button onclick="removeCompletedTask(${index})">Eliminar</button>
        </li>`;
        completedListElement.innerHTML += newElement;
    });
}
