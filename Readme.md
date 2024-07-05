# Refer & Earn Backend 🎉

This is the backend for the Refer & Earn application built with Express.js and Prisma ORM. It handles the referral form data and connects to a MySQL database. It also sends referral emails using the Google Mail Service API.

## Features ✨

- RESTful API endpoints for referral form data.
- Connects to a MySQL database using Prisma ORM.
- Sends referral emails upon successful submission.
- Error handling for various scenarios.

## Prerequisites 📋

- Node.js and npm installed.
- MySQL database.
- Google Mail Service credentials.

## Installation 🛠️

1. Clone the repository:

   ```bash
   git clone https://github.com/satyamkumar420/Accredian-backend-task.git
   cd Accredian-backend-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:

   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/referrals"
     EMAIL_USER="your-email@gmail.com"
     EMAIL_PASS="your-email-password"
     ```

4. Initialize Prisma:
   ```bash
   npx prisma migrate dev --name init
   ```

## Running the Server 🚀

Start the server with the following command:

```bash
node src/index.js
```

The server will run on `http://localhost:5000`.

## API Endpoints 📮

- **POST** `/api/referral`
  - Description: Save referral form data and send referral email.
  - Request Body:
    ```json
    {
      "referrerName": "John Doe",
      "referrerEmail": "john.doe@example.com",
      "refereeName": "Jane Smith",
      "refereeEmail": "jane.smith@example.com"
    }
    ```
  - Response:
    - Success: `200 OK` with message `Referral created and email sent`.
    - Failure: `500 Internal Server Error` with error message.

## Built With 🛠️

- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [Nodemailer](https://nodemailer.com/)
