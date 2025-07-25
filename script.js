let toDoList = [];
let completedList = [];

// Función para generar ID único usando Math
function generateUniqueId() {
    return Math.floor(Math.random() * 1000000);
}

// Función para anunciar cambios a lectores de pantalla
function announceToScreenReader(message) {
    const announcements = document.getElementById('announcements');
    announcements.textContent = message;
    
    // Limpiar después de 3 segundos
    setTimeout(() => {
        announcements.textContent = '';
    }, 3000);
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
    
    // Anunciar a lectores de pantalla
    announceToScreenReader(`Tarea "${toDo}" agregada a la lista de pendientes`);
    
    //Limpiar el campo de entrada
    form.toDo.value = "";
}
function updateToDoList(){
    let toDoListElement = document.getElementById("pendientes");
    toDoListElement.innerHTML = ""; // Limpiar la lista antes de mostrarla
    
    toDoList.forEach((task, index) => {
        let newElement = `
        <li>
            <input 
                type="checkbox" 
                id="task-${task.id}" 
                onchange="checkTask(${index})"
                aria-label="Marcar como completada la tarea: ${task.text}"
            >
            <label for="task-${task.id}">
                <strong>${task.text}</strong><br>
                <small style="color: #666;">Agregada: ${task.dateAdded}</small>
            </label>
            <button 
                onclick="deleteTask(${index})" 
                aria-label="Eliminar tarea: ${task.text}"
                title="Eliminar tarea"
            >
                Eliminar
            </button>
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
            <button 
                onclick="removeCompletedTask(${index})" 
                aria-label="Eliminar tarea completada: ${task.text}"
                title="Eliminar de completadas"
            >
                Eliminar
            </button>
        </li>`;
        completedListElement.innerHTML += newElement;
    });
}
function checkTask(index){
    // Mover la tarea de pendientes a completadas usando manipulación de arreglos
    let task = toDoList[index];
    completedList.push(task);
    toDoList.splice(index, 1); // Usar splice() para eliminar del arreglo original
    
    // Actualizar ambas listas dinámicamente
    updateToDoList();
    updateCompletedList();
    
    // Anunciar a lectores de pantalla
    announceToScreenReader(`Tarea "${task.text}" marcada como completada`);
}

function deleteTask(index){
    // Obtener la tarea antes de eliminarla para el anuncio
    let task = toDoList[index];
    
    //Eliminar la tarea de la lista de pendientes
    toDoList.splice(index, 1);
    //Actualizar la lista de tareas pendientes
    updateToDoList();
    
    // Anunciar a lectores de pantalla
    announceToScreenReader(`Tarea "${task.text}" eliminada de pendientes`);
}

function removeCompletedTask(index){
    // Obtener la tarea antes de eliminarla para el anuncio
    let task = completedList[index];
    
    //Eliminar la tarea de la lista de completadas
    completedList.splice(index, 1);
    //Actualizar la lista de tareas completadas
    updateCompletedList();
    
    // Anunciar a lectores de pantalla
    announceToScreenReader(`Tarea "${task.text}" eliminada de completadas`);
}
