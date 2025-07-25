¿Qué es JavaScript y cual es su rol en el desarrollo Web? 
JavaScript es un lenguaje de programacion orientado a objetos y enventos que se ejecuta principalmente en el navegador WEB

Su rol principal :
Es el motor de comportamiento de las aplicaciones web.
Permite que las pagians respondan al usuario sin recargarse
facilita la manipulacion del contenido HTML y CSS de forma dinamica
Es una parte esencial del desarrollo frontend(Aunque también se puede usar en Backend con NOde.js)

Ventajas de usar JavaScript para crear aplicaciones interactivas
 Interactividad: 	Permite respuestas en tiempo real al usuario (clics, movimientos del mouse, formularios dinámicos).
 Rapidez: 	Se ejecuta en el navegador del cliente, por lo que no hay necesidad de esperar al servidor para cada acción
 Compatibilidad: 	Es compatible con todos los navegadores modernos.
 Gran ecosistema:	Hay miles de bibliotecas y frameworks que lo amplían (React, Vue, Angular, jQuery, etc.).

 Ej. de funcionalidades posuibles gracias a JavaScript.
 Validacion en tiempo real: Cuando escribes en un formulario y te avisa inmediatamente si olvidaste un campo o escribiste un correo inválido..
 Listas Dinamicas o filtrado en vivo: Una lista de productos que se filtra automáticamente al escribir en un campo de búsqueda.
 Contadores o animaciones:Contadores que suben en tiempo real como número de seguidores
 Cambiar estilos dinamicamente:Cambiar el color de un botón o mostrar/ocultar secciones con solo un clic.


# 📝 To-Do List Application

Una aplicación web interactiva para gestionar tareas diarias, desarrollada con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

- ✅ **Agregar tareas** con validación de entrada
- ✅ **Marcar tareas como completadas** 
- ✅ **Eliminar tareas** de ambas listas
- ✅ **Fechas automáticas** cuando se agregan tareas
- ✅ **IDs únicos** para cada tarea
- ✅ **Interfaz responsiva** con gradientes modernos
- ✅ **Validaciones** para campos vacíos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y flexbox
- **JavaScript ES6**: Lógica interactiva y manipulación del DOM

## 📋 Requisitos Técnicos Implementados

### 1. Variables y Condicionales
- Variables simples para almacenar tareas: `toDoList`, `completedList`
- Sentencias condicionales para validar entrada vacía: `if/else`

### 2. Arreglos y Iteraciones
- Almacenamiento en arreglos: `[]`
- Iteración con `forEach()` para mostrar tareas
- Manipulación con `push()`, `splice()` para gestionar listas

### 3. Funciones Modulares
- `addTask()`: Añade nuevas tareas
- `deleteTask()`: Elimina tareas pendientes
- `checkTask()`: Marca tareas como completadas
- `updateToDoList()`: Actualiza lista de pendientes
- `updateCompletedList()`: Actualiza lista de completadas
- `removeCompletedTask()`: Elimina tareas completadas

### 4. Objetos Preconstruidos JavaScript
- **Math**: `Math.random()` y `Math.floor()` para generar IDs únicos
- **Date**: `new Date()` para timestamps automáticos con formato español

## 🎨 Estructura del Proyecto

```
📁 Portafolio Modulo 3/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 style.css           # Estilos CSS con gradientes
├── ⚡ script.js           # Lógica JavaScript
└── 📖 README.md           # Documentación
```

## 💻 Cómo Ejecutar

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en cualquier navegador web moderno
3. **¡Empezar a usar!** La aplicación funciona completamente del lado cliente

## 🔧 Funcionalidades Principales

### Agregar Tareas
```javascript
// Validación y creación de objeto tarea
if (toDo === "") {
    alert("El campo no puede estar vacío");
    return;
}

let taskObject = {
    id: generateUniqueId(),     // Math.random()
    text: toDo,
    dateAdded: getCurrentDate() // new Date()
};
```

### Gestión de Estados
- **Pendientes**: Tareas recién agregadas con checkbox
- **Completadas**: Tareas marcadas como finalizadas
- **Eliminación**: Remover de cualquier estado

## 🎯 Características Técnicas

### Manipulación del DOM
- Creación dinámica de elementos HTML
- Event listeners para interactividad
- Actualización en tiempo real de la interfaz

### Control de Flujo
- Validaciones de entrada de usuario
- Gestión de estados de tareas
- Manejo de eventos de formulario

### Estructura de Datos
- Arreglos para almacenar colecciones
- Objetos para entidades complejas
- Métodos de arreglo para manipulación

## 📱 Diseño Responsivo

- **Flexbox** para layouts adaptativos
- **Media queries** implícitas en el diseño
- **Gradientes CSS** para estética moderna
- **Transiciones** suaves en interacciones

## 🧪 Validaciones Implementadas

1. **Campo vacío**: Previene agregar tareas sin texto
2. **Trim de espacios**: Elimina espacios innecesarios
3. **Prevención de duplicados**: Por IDs únicos

## 📈 Próximas Mejoras

- [ ] Persistencia con LocalStorage
- [ ] Drag & Drop para reordenar
- [ ] Categorías de tareas
- [ ] Filtros y búsqueda
- [ ] Notificaciones push

## 👨‍💻 Desarrollo

Este proyecto demuestra el uso efectivo de:
- **JavaScript vanilla** sin frameworks
- **Programación funcional** con métodos de arreglo
- **Manipulación directa del DOM**
- **Objetos nativos** de JavaScript
- **Buenas prácticas** de código limpio

---

*Desarrollado como parte del Módulo 3 - Bootcamp de Desarrollo Web*
