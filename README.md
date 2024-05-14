# React Login and Signup Page with MySQL Database

This is a simple web application that provides login and signup functionality. User data is stored in a MySQL database, and the application is built using React.js, React Router, Axios, Node.js, MySQL, Nodemon, CORS, and Express.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)

`react-router-dom` is a library for handling routing in React applications.. <br><br>
`axios` use for making HTTP requests. <br><br>
`mysql` library is commonly used to interact with MySQL databases. This library provides a straightforward way to establish connections, execute queries, and handle results<br><br>
`cors` use for when a web page makes an HTTP request to a different domain, the browser enforces the same-origin policy, which typically prevents the request from succeeding. <br><br>
`express` is a web application framework for Node.js, and it simplifies the process of building robust and scalable web applications.<br><br>
`nodemon` is a tool that helps developers in the Node.js environment by automatically restarting the Node application when file changes are detected.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/Tushardev0172/Login_Signup_Page.git
   ```
   
2. Navigate to project folder:
   ```bash 
   cd Login_Signup_page
   ```
3. Install dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```
   ``` bash
   npm install axios
   npm install react-router-dom
4. Install dependencies for the Backend:
   ```bash
   cd server
   npm init -y
   npm install
   npm install express
   npm install cors
   npm intsall mysql
   npm install nodemon
   ```
5. Start Backend Server:
   ``` bash
   node index.js
   ```
   The server will be running at http://localhost:3001.

# Features
- Signup Page: Allows users to create a new account by providing a email,username and password.
- Login Page: Allows registered users to log in using their credentials.
- Authentication: Implements a simple authentication mechanism with tokens.
- MySQL Database: Stores user data in a MySQL database.
- React Router: Navigates between the login and signup pages.
- Axios: Makes HTTP requests to the backend for signup and login.

# Folder Structure
- `client`: Contains the React.js frontend code.
- `server`: Contains the Node.js backend code.

# Contributing
Feel free to contribute to the project by opening issues or submitting pull requests.

# License
This project is licensed under the MIT License.

# Screenshots
- Login Page

  ![Screenshot (82)](https://github.com/Tushardev0172/Login_Signup_Page/assets/120170474/457862fd-e367-4451-9492-81706c64e3d9)

- Signup Page
  
  ![Screenshot (81)](https://github.com/Tushardev0172/Login_Signup_Page/assets/120170474/dd90befe-46eb-49c1-9ffa-369cb8a7e5b6)

- Video

  

https://github.com/Tushardev0172/Login_Signup_Page/assets/120170474/9c7d9105-5cda-4fb6-999d-f8ac824365d8


