# Expense Tracker

A full-stack expense tracking application that allows users to record income and expenses, organize transactions by category, and automatically calculate their current balance.

Transaction data is stored in MongoDB, allowing the information to remain available after the application is refreshed or reopened.

## Live Demo

[View Expense Tracker](https://expense-tracker-147l.onrender.com)

> The application is hosted on Render, so the first load may take a few moments if the server has been inactive.

## Features

- Add income transactions
- Add expense transactions
- Categorize transactions
- Automatically calculate total income
- Automatically calculate total expenses
- Automatically calculate current balance
- Edit transactions
- Delete transactions
- Persistent MongoDB storage
- Responsive dashboard interface

## Technologies Used

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Deployment

- Render
- MongoDB Atlas

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/transactions` | Retrieve all transactions |
| POST | `/api/transactions` | Add a transaction |
| PUT | `/api/transactions/:id` | Update a transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

## Project Structure

```text
expense-tracker/
└── backend/
    ├── frontend/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── models/
    │   └── Transaction.js
    ├── server.js
    ├── package.json
    └── package-lock.json
```

## Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/2728-ane/expense-tracker.git
```

Open the backend folder:

```bash
cd expense-tracker/backend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder and add your MongoDB connection string:

```text
MONGODB_URI=your_mongodb_connection_string
```

Start the application:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

## What I Learned

Building this project helped me practice:

- Building a full-stack application
- Creating REST API endpoints with Express
- Connecting Node.js applications to MongoDB
- Using Mongoose models
- Implementing CRUD operations
- Connecting frontend JavaScript to a backend API
- Calculating application data dynamically
- Protecting database credentials with environment variables
- Deploying a full-stack application with Render

## Author

**Ane Wesonga**

- [Portfolio](https://2728-ane.github.io/my-portfolio/)
- [GitHub](https://github.com/2728-ane)
- [LinkedIn](https://www.linkedin.com/in/ane-tabitha-20bb50407)
