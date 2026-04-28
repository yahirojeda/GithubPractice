const customers = [
    { type: "Ejecutivo con prisa", patience: 6 },
    { type: "Obrero hambriento", patience: 9 },
    { type: "Anciano tranquilo", patience: 12 },
];

const dishes = [
    { id: "tacos", name: "Tacos", minPrep: 2, maxPrep: 6 },
    { id: "enchiladas", name: "Enchiladas", minPrep: 3, maxPrep: 8 },
    { id: "pozole", name: "Pozole", minPrep: 5, maxPrep: 10 },
    { id: "birria", name: "Birria", minPrep: 7, maxPrep: 11 },
    { id: "mole", name: "Mole", minPrep: 8, maxPrep: 14 },
];

// Elementos del DOM
const currentCustomerText = document.querySelector("#currentCustomer");
const statusText = document.querySelector("#status");
const successfulOrders = document.querySelector("#successfulOrders");
const failedOrders = document.querySelector("#failedOrders");
const menuList = document.querySelector("#menu");
const totalSuccess = document.querySelector("#totalSuccess");
const totalFailed = document.querySelector("#totalFailed");

let successCount = 0;
let failedCount = 0;
let currentCustomer;

// Configurar botones
dishes.forEach((dish) => {
    const button = document.querySelector(`#${dish.id}`);

    button.dish = dish;
    button.count = 0;
    button.textContent = `${dish.name} = 0`;

    button.addEventListener("click", handleOrder);
});

showMenu();
setNextCustomer();

// 1) Promesa
function prepareOrder(dish, customer) {
    const preparationTime = getRandomNumber(dish.minPrep, dish.maxPrep);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (preparationTime <= customer.patience) {
                resolve(preparationTime);
            } else {
                reject(preparationTime);
            }
        }, preparationTime * 1000);
    });
}

// 2) Async + 3) Await
async function handleOrder(event) {
    const button = event.currentTarget;

    const dish = button.dish;
    const customer = currentCustomer;

    button.disabled = true;
    button.textContent = `Preparando ${dish.name}...`;

    statusText.textContent = `Al ${customer.type} se le ofreció ${dish.name}.`;

    setNextCustomer();

    try {
        const preparationTime = await prepareOrder(dish, customer);

        button.count++;
        successCount++;
        totalSuccess.textContent = successCount;

        addOrder(
            successfulOrders,
            `${customer.type} recibió ${dish.name} en ${preparationTime}s.`
        );
    } catch (preparationTime) {
        failedCount++;
        totalFailed.textContent = failedCount;

        addOrder(
            failedOrders,
            `${customer.type} se fue. ${dish.name} tardó ${preparationTime}s, pero solo espera ${customer.patience}s.`
        );
    }

    button.disabled = false;
    button.textContent = `${dish.name} = ${button.count}`;
}

function setNextCustomer() {
    const randomIndex = getRandomNumber(0, customers.length - 1);
    currentCustomer = customers[randomIndex];
    currentCustomerText.textContent = `${currentCustomer.type} | Paciencia: ${currentCustomer.patience}s`;
}

function showMenu() {
    dishes.forEach((dish) => {
        const li = document.createElement("li");
        li.textContent = `${dish.name}: ${dish.minPrep}s a ${dish.maxPrep}s`;
        menuList.appendChild(li);
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addOrder(list, message) {
    const li = document.createElement("li");
    li.textContent = message;
    list.appendChild(li);
}