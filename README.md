# HRMS Backend

## Overview

The HTMS backend is designed to support a Human Resources Management System, providing secure and efficient API services for handling user authentication, employee data management, and more. It's built with Node.js and Express, incorporating best practices in API development.

## Features

- Secure Authentication: Utilizes JSON Web Tokens (JWT) and bcryptjs for handling secure authentication and password hashing.
- Database Integration: MongoDB through Mongoose for schema-based solutions. 

## Technologies

- Express: Framework for building efficient APIs.
- Mongoose: Database solutions for robust data storage and retrieval.
- Cors: Package to enable CORS.

## Getting Started

### Prerequisites

- Node.js and npm must be installed.
- Install project dependencies with npm install.

### Running the Application

#### Scripts

`start`: Runs the server using Node.
`dev`: Runs the server in development mode with nodemon.
`test`: Placeholder for running tests.
`vercel-build`: Custom build command for deployments on Vercel.
`npm test` to run the placeholder test script.

### API Documentation

Access the Swagger UI by navigating to `/api-docs` on your running server to view and interact with the API routes.
You can also access [onine](https://hr-io-tau.vercel.app/api). 


## Deployment 
Used Vercel to deploy the project. Here is the [URL](https://hr-io-tau.vercel.app/). 