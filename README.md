🚀 Dynamic CRUD Table (React)

This project is a React app that demonstrates how to build a dynamic table based on array values.
It includes full CRUD functionality:

✅ Add rows

✅ Remove rows

✅ Mark rows as complete/undo

📌 Features

Dynamic table creation from an array of objects

Add new rows using an input form

Delete rows individually

Toggle tasks between "complete" and "incomplete"

Styled with basic HTML table + inline CSS

Easily extendable (e.g., localStorage, backend API)

🛠️ Tech Stack

React
 (with hooks)

JavaScript (ES6+)

CSS (inline styling)

📂 Project Structure
├── src
│   ├── App.js              # Main component with state and CRUD logic
│   ├── DynamicTable.jsx    # Reusable dynamic table component
│   ├── index.js            # React entry point
│   └── ...
├── package.json
├── README.md

⚙️ Installation & Setup

Clone the repository

https://github.com/Trivedishivansh/Dynamic-Table.git

cd dynamic-crud-table


Install dependencies

npm install


Run the project

npm start


Open your browser at

http://localhost:3000

📸 Screenshots
Default View
| NAME      | AGE | ACTIONS               |
|-----------|-----|-----------------------|
| Shivansh  | 22  | [Complete] [Delete]   |
| Raj       | 23  | [Complete] [Delete]   |
| Aman      | 21  | [Complete] [Delete]   |

Adding a New User

Fill name & age in input fields

Click Add User → New row appears in the table

Marking Complete

Click Complete → Row is struck through ✅

Deleting User

Click Delete → Row is removed ❌

🚀 Future Improvements

Store data in localStorage (to persist after refresh)

Connect to a backend API (Node.js + MongoDB)

Add search & sorting functionality

Add pagination for large data
