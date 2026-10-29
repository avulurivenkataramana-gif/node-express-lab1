# BDF Lab 1 – Node.js and Express Server

**Deployment URL:** https://avuluri-venkata-ramana.onrender.com

## Student Details

- **Name:** Avuluri Venkata Ramana
- **Registration Number:** 252U1R1018
- **Section:** S-15
- **Course:** Backend Development Fundamentals
- **Lab:** Lab 1 – Node.js and Express Server

## Project Description

This project demonstrates how to create a basic web server using Node.js and its built-in HTTP module, as well as how to build a web server using Express.js.

The Express server provides three API endpoints and returns a 404 response for unknown routes.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm

## Project Repository

**GitHub:** https://github.com/avulurivenkataramana-gif/Avuluri-Venkata-Ramana

**Live Deployment:** https://avuluri-venkata-ramana.onrender.com

## Project Structure

```text
BDF-1/
├── http-server.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── not-found.png
```

## Installation

1. Install Node.js and npm.
2. Clone the repository:

   ```bash
   git clone https://github.com/avulurivenkataramana-gif/Avuluri-Venkata-Ramana.git
   ```

3. Open the project folder in VS Code.
4. Open the terminal and install dependencies:

   ```bash
   npm install
   ```

This installs the dependencies listed in `package.json`. The `node_modules` folder is generated automatically.

## Execution

### 1. Run the Basic HTTP Server

```bash
node http-server.js
```

Open http://localhost:3000 in your browser. The server should display `Hello`.

Stop the server using `Ctrl + C` before running the next server.

### 2. Run the Express Server

```bash
node server.js
```

The Express server runs at http://localhost:3000.

## API Endpoints

| Method | Endpoint | Expected Response |
|---|---|---|
| GET | `/` | Welcome message, status code 200 |
| GET | `/about` | JSON containing student name and section, status code 200 |
| GET | `/time` | Current date and time, status code 200 |
| GET | Any unknown path | 404 – Page Not Found |

## Screenshots

### 1. Home Endpoint – GET /

![Home endpoint screenshot](screenshots/home.png)

### 2. About Endpoint – GET /about

![About endpoint screenshot](screenshots/about.png)

### 3. Time Endpoint – GET /time

![Time endpoint screenshot](screenshots/time.png)

### 4. Unknown Route – 404 Response

![404 response screenshot](screenshots/not-found.png)

## Testing

The API endpoints were tested by opening the corresponding URLs in a browser. The responses were checked to verify that the routes return the expected content and status codes.

Additional Postman screenshots or a Postman collection can be included as testing evidence.

## Deployment

The project has been deployed using Render.

- **Deployment URL:** https://avuluri-venkata-ramana.onrender.com
- **Source Code:** https://github.com/avulurivenkataramana-gif/Avuluri-Venkata-Ramana

Open the deployment URL to verify that the deployed application is accessible. If the application uses a specific route, append the appropriate endpoint, such as `/about` or `/time`.

## Notes

- Install dependencies using `npm install`.
- Do not upload the `node_modules` folder to GitHub.
- Do not commit or share any `.env` file.
- The basic HTTP server and Express server both use port 3000, so run them one at a time.
- Ensure the Render deployment uses the correct start command and listens on the port provided by `process.env.PORT`.
- Include genuine screenshots of the running endpoints in the `screenshots/` folder before submitting the lab report.

## Conclusion

This lab demonstrates the fundamentals of creating web servers using Node.js and Express.js. It covers HTTP request handling, API endpoint creation, JSON responses, date and time generation, and 404 error handling. The project also provides practical experience with GitHub repository management and deployment using Render.