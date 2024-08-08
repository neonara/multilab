# Multi-Lab Project

The Multi-Lab project is a collaborative platform designed to streamline laboratory management and communication. It leverages the power of React for the frontend, Django for the backend, and utilizes postgerSQL as the database. The project aims to provide an efficient and user-friendly interface for managing multiple laboratories and their associated activities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Features

- **Lab Management:** Easily create, update, and delete laboratory information, admin (upload doc) and client dashboard.
- **Experiment Tracking:** Record and manage ongoing and completed experiments.
- **User Authentication:** Secure user authentication and authorization system.
- **API Integration:** Includes a robust API for testing and seamless communication with the client.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Django with SQLite database
- **API:** RESTful API for client interaction

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js and npm (for React)
- Python and pipenv (for Django)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/multi-lab.git
# Navigate to the project directory:
   cd multi-lab
# Install frontend dependencies:
   cd frontend
   npm install
# Install backend dependencies:
cd ../backend
pipenv install
# Usage
- Start the frontend:
cd ../frontend
npm run dev
- Start the backend:
  cd ../backend
pipenv run python manage.py runserver
