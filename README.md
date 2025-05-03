# 🐾 Virtual Pet Adoption Center - Backend

This is the backend server for the **Virtual Pet Adoption Center**, built with **Node.js** and **Express.js**. It handles API endpoints for managing virtual pet data, user interactions, and provides services to the frontend application.

---

## 🚀 Getting Started

Follow these instructions to set up and run the backend server locally.

### Prerequisites

- Node.js (v14 or higher)
- npm

---

### 📦 Installation

```bash
# Clone the repository
https://github.com/Virtual-Pet-Adoption-Center/pet-adoption-backend.git

# Navigate into the project directory
cd pet-adoption-backend

# Install dependencies
npm install

#Run the server
npx nodemon server.js

```

The backend server will run on http://localhost:5000. 


### 🛠️ Tech Stack

1. Node.js – JavaScript runtime
2. Express.js – Web framework
3. CORS – Cross-Origin Resource Sharing

### Installed Packages

1. express – Server framework
2. cors – Enable CORS
3. nodemon – Development utility (for auto-restart)

    npm install express cors
    npm install --save-dev nodemon

## 📌 API Endpoints

Below is the list of available REST API endpoints provided by the backend:

| Method | Endpoint                    | Description                          |
|--------|-----------------------------|--------------------------------------|
| POST   | `/addPets`                  | Add a new pet to the database        |
| GET    | `/getPets`                  | Retrieve all pets                    |
| GET    | `/getPets/:id`              | Retrieve a specific pet by ID        |
| PUT    | `/updatePets/:id`           | Update a pet's profile by ID         |
| PATCH  | `/adoptPets/:id/adopt`      | Mark a specific pet as adopted       |
| DELETE | `/deletePets/:id`           | Delete a pet by ID                   |
| GET    | `/filterPets`               | Filter pets by mood                  |


## 📬 Contact

For questions or collaboration, feel free to reach out:
- [Hashini Thilinika](https://github.com/hashii99)
- Email: hashinithilinika.av@gmail.com
