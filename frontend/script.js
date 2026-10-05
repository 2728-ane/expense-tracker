const API_URL = "/api/transactions";

const form = document.getElementById("transactionForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");
const categoryInput = document.getElementById("category");

const transactionList = document.getElementById("transactionList");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expensesElement = document.getElementById("expenses");

async function getTransactions() {
    try {
        const response = await fetch(API_URL);
        const transactions = await response.json();

        displayTransactions(transactions);
        updateSummary(transactions);
    } catch (error) {
        console.error("Error:", error);
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const transaction = {
        description: descriptionInput.value.trim(),
        amount: Number(amountInput.value),
        type: typeInput.value,
        category: categoryInput.value
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transaction)
    });

    form.reset();

    getTransactions();
});

function displayTransactions(transactions) {
    transactionList.innerHTML = "";

    transactions.forEach((transaction) => {

        const div = document.createElement("div");
        div.classList.add("transaction");

        div.innerHTML = `
            <div>
                <strong>${transaction.description}</strong>
                <small>${transaction.category}</small>
            </div>

            <span class="${transaction.type}">
                ${transaction.type === "income" ? "+" : "-"}
                KSh ${transaction.amount.toLocaleString()}
            </span>

            <button onclick="editTransaction('${transaction._id}', '${transaction.description}', ${transaction.amount}, '${transaction.type}', '${transaction.category}')">
                Edit
            </button>

            <button class="delete-btn" onclick="deleteTransaction('${transaction._id}')">
                Delete
            </button>
        `;

        transactionList.appendChild(div);
    });
}

function updateSummary(transactions) {

    let income = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    });

    const balance = income - expenses;

    incomeElement.textContent = `KSh ${income.toLocaleString()}`;
    expensesElement.textContent = `KSh ${expenses.toLocaleString()}`;
    balanceElement.textContent = `KSh ${balance.toLocaleString()}`;
}

async function deleteTransaction(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    getTransactions();
}

async function editTransaction(id, description, amount, type, category) {

    const newDescription = prompt("Description:", description);

    if (newDescription === null || newDescription.trim() === "") {
        return;
    }

    const newAmount = prompt("Amount:", amount);

    if (newAmount === null || Number(newAmount) <= 0) {
        return;
    }

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            description: newDescription.trim(),
            amount: Number(newAmount),
            type,
            category
        })
    });

    getTransactions();
}

getTransactions();