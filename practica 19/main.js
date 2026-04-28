const personContainter = document.querySelectorAll("figure");
let activeElement;

// Mantener funcionalidad existente
personContainter.forEach((element) => {
    element.addEventListener("mouseenter", changeActive);
    if (element.className == "activeItem") activeElement = element;
});

function changeActive() {
    activeElement.classList.toggle("activeItem");
    this.classList.toggle("activeItem");
    activeElement = this;
}

// PARTE DE LA API
async function loadUsers() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        const users = data.results;

        users.forEach((user, index) => {
            const figure = personContainter[index];

            // Acceder a elementos del figure
            const img = figure.children[0];
            const figcaption = figure.children[1];

            const name = figcaption.children[0];
            const location = figcaption.children[1];
            const cell = figcaption.children[2];

            // Asignar datos
            img.src = user.picture.large;

            name.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;

            location.textContent = `${user.location.country}, ${user.location.state}, ${user.location.city}`;

            cell.textContent = user.cell;
        });

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}

// Ejecutar al cargar
loadUsers();