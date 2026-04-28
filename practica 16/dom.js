function addImgs() {
    const perrosDiv = document.getElementById("idPerros");
    const gatosDiv = document.getElementById("idGatos");

    const imgPerro = document.createElement("img");
    imgPerro.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK1sAZ0mdsG2_MWlceZKUz3esKVTXNhxZsQw&s";

    const imgGato = document.createElement("img");
    imgGato.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeQovRbRqqlaxNOyThmtsmKc8v5y2rJg_Vg&s";


    perrosDiv.appendChild(imgPerro);
    gatosDiv.appendChild(imgGato);
}

function toggleClass() {
    const imagenes = document.querySelectorAll("img");

    imagenes.forEach(img => {
        img.classList.toggle("roundImg");
    });
}