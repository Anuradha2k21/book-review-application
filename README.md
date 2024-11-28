# Book Review Application

This project is a Book Review Application built with Django for the backend and React with Vite for the frontend.

## Table of Contents

- [Book Review Application](#book-review-application)
  - [Table of Contents](#table-of-contents)
  - [Backend Setup](#backend-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Backend](#running-the-backend)
  - [Frontend Setup](#frontend-setup)
    - [Prerequisites](#prerequisites-1)
    - [Installation](#installation-1)
    - [Running the Frontend](#running-the-frontend)
  - [Project Structure](#project-structure)

## Backend Setup

### Prerequisites

- Python 3.8 or higher
- MySQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Anuradha2k21/book-review-application
   cd book-review-application/backend
   ```

2. Create a virtual environment and activate it:

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the dependencies:

   ```sh
   pip install -r requirements.txt
   ```

4. Set up the database:

   - Create a MySQL database named `book_review_db`.
   - Update the database settings in `book_review/book_review/settings.py` if necessary.

5. Apply the migrations:

   ```sh
   python manage.py makemigration
   python manage.py migrate
   ```

6. Create a superuser:
   ```sh
   python manage.py createsuperuser
   ```

### Running the Backend

1. Start the development server:

   ```sh
   python manage.py runserver
   ```

2. The backend API will be available at `http://localhost:8000/api/`

## Frontend Setup

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

1. Navigate to the frontend directory:

   ```sh
   cd book-review-application/frontend/book-review
   ```

2. Install the dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Frontend

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. The frontend application will be available at `http://localhost:5173`
