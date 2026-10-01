# Siesta Beauty

Blank full-stack project with a Spring Boot backend and a React frontend.

## Requirements

- Java 21
- Maven 3.9+
- Node.js 20.19+ or 22.12+

## Start the backend

```powershell
cd backend
mvn spring-boot:run
```

The API runs at `http://localhost:8080`. Its starter health endpoint is:

```text
GET http://localhost:8080/api/health
```

## Start the frontend

In a second terminal:

```powershell
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`). During
development, frontend requests to `/api` are proxied to the backend.
