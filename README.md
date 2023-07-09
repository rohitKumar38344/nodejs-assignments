# Node.js-assignments

node.js assignments solution

## API Endpoint for Assingment-3

### Setup

### Environment Variables

This project relies on certain environment variables to function correctly. Please follow the steps below to set up the necessary environment variables:

1. Create a new `.env` file in the root directory of the project.
2. Copy the contents from `.env.example` and fill in the required values for each variable.
3. Obtain the connection string from the mongodb atlas and update the values in the `.env` file under MONGO_URI.
4. Ensure that the `.env` file is included in the `.gitignore` file to prevent it from being committed to the repository.
5. Keep the `.env` file secure and do not share it publicly or commit it to version control.

**.env.example**

```
  PORT = 8000
  MONGO_URI = mongodb+srv://username:<password>@cluster0.4cqmex4.mongodb.net/
```

### To run the app

1. npm install
2. npm run start
3. Running on http://localhost:8000

### Register

- Method: POST
- Endpoint: **/register**
- Payload:

  ```
  {
    "name": "user_name",
    "email": "user_email",
    "password": "user_password"
  }

  ```

- Response:
  ```
  {"msg": "User Registered Successfully"}
  ```

### Login

- Method: POST
- Endpoint: **/login**
- Payload:

  ```
  {
    "email": "user_email",
    "password": "user_password"
  }
  ```

- Response:
  ```
    {"msg": "User Login Successfully"}
  ```
