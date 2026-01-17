# Easyway Employee Management System

A full-stack employee management application with authentication, authorization, and role-based access control. Built with React and Spring Boot, deployed on Render with PostgreSQL database.

## Features

- **User Authentication**: Secure JWT-based authentication with login and registration
- **Authorization**: Role-based access control (ADMIN and USER roles)
- **Employee Management**: Create, read, update, and delete employees
- **Pagination**: View employees with pagination support
- **Responsive UI**: Mobile-friendly interface with Tailwind CSS
- **State Management**: Zustand for efficient state management
- **API Integration**: Axios with JWT interceptors for secure API calls
- **Token Persistence**: Automatic session persistence with localStorage

## Tech Stack

### Frontend
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Build Tool**: Vite

### Backend
- **Framework**: Spring Boot 3.5.7
- **Language**: Java 17
- **Database**: PostgreSQL (Render)
- **Security**: Spring Security + JWT (JJWT)
- **ORM**: Hibernate/JPA
- **Build Tool**: Maven 3.9
- **Container**: Docker

### DevOps & CI/CD
- **Deployment**: Render (Frontend & Backend)
- **CI/CD**: GitHub Actions
- **Code Quality**: SonarCloud
- **Container Registry**: Docker Hub
- **Database**: Render PostgreSQL

## Installation

### Prerequisites

- Node.js 18 or higher
- Java 17 or higher
- Maven 3.9 or higher
- PostgreSQL 12 or higher (or Docker)
- Git

### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Easyway.git
   cd Easyway/easyway-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd Easyway/easyway-backend
   ```

2. Set environment variables (Windows PowerShell):
   ```powershell
   $env:DB_URL="jdbc:postgresql://localhost:5432/easywaydb"
   $env:DB_USERNAME="postgres"
   $env:DB_PASSWORD="password"
   $env:JWT_SECRET="your-secret-key"
   $env:JWT_EXPIRATION="86400000"
   ```

3. Build the application:
   ```bash
   mvn clean package -DskipTests
   ```

4. Run the application:
   ```bash
   mvn spring-boot:run
   ```

5. Backend runs on [http://localhost:8080](http://localhost:8080)

### Database Setup

**Option 1: Docker**
```bash
docker run --name postgres-easyway \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=easywaydb \
  -p 5432:5432 \
  -d postgres:latest
```

**Option 2: Local PostgreSQL**
1. Install PostgreSQL
2. Create database: `createdb easywaydb`
3. Update credentials in environment variables

## Usage

### Register & Login

1. Navigate to [http://localhost:5173/register](http://localhost:5173/register)
2. Create a new account with username, email, and password
3. Login with your credentials
4. JWT token is automatically saved to localStorage

### Employee Management

1. **View Employees**: Navigate to Employees page (paginated view)
2. **Add Employee**: Click "Add Employee" button, fill form, submit
3. **Edit Employee**: Click "Edit" on employee card, modify details
4. **Delete Employee**: Click "Delete" button (admin only)
5. **View Details**: Click "View" to see full employee information

## Project Structure

```
Easyway/
├── easyway-frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   ├── AddEmployee.jsx
│   │   │   ├── EditEmployee.jsx
│   │   │   └── ViewEmployee.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── EmployeeCard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── authStore.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── easyway-backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/easyway/employeemanagement/
│   │   │   │   ├── controller/
│   │   │   │   │   ├── AuthController.java
│   │   │   │   │   └── EmployeeController.java
│   │   │   │   ├── service/
│   │   │   │   │   ├── AuthService.java
│   │   │   │   │   └── EmployeeService.java
│   │   │   │   ├── model/
│   │   │   │   │   ├── User.java
│   │   │   │   │   └── Employee.java
│   │   │   │   ├── repository/
│   │   │   │   │   ├── UserRepository.java
│   │   │   │   │   └── EmployeeRepository.java
│   │   │   │   ├── dto/
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   ├── RegisterRequest.java
│   │   │   │   │   └── AuthResponse.java
│   │   │   │   ├── security/
│   │   │   │   │   ├── SecurityConfig.java
│   │   │   │   │   ├── JwtUtil.java
│   │   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   │   ├── JwtAuthenticationEntryPoint.java
│   │   │   │   │   └── CustomUserDetailsService.java
│   │   │   │   └── EasywayEmployeeApplication.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── resources/
│   │           └── application.properties
│   ├── Dockerfile
│   ├── pom.xml
│   └── .env
│
├── .github/
│   └── workflows/
│       └── workflow.yml
│
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Employees (Protected)
- `GET /api/employees` - Get all employees (paginated)
- `GET /api/employees/{id}` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

### Pipeline Steps
1. **Checkout**: Clones the repository
2. **Setup Node & Java**: Installs Node.js 18 and Java 17
3. **Frontend Build**: Builds React application
4. **Backend Build**: Builds Spring Boot JAR
5. **SonarCloud Scan**: Analyzes code quality
6. **Docker Build**: Creates Docker images for frontend and backend
7. **Docker Push**: Pushes images to Docker Hub
8. **Deploy to Render**: Auto-deploys on push to main branch

### Triggered On
- Push to `main` branch
- Pull requests to `main` branch
- Manual workflow dispatch

## Deployment

### Production URLs

- **Frontend**: https://easyway-frontend-bxyo.onrender.com
- **Backend**: https://easyway-backend-wgmy.onrender.com

### Environment Variables (Render)

**Backend:**
```
DB_URL=postgresql://user:pass@host:port/db
DB_USERNAME=postgres
DB_PASSWORD=your-password
JWT_SECRET=your-secret-key
JWT_EXPIRATION=86400000
```

## Security Features

- JWT token-based authentication
- Password hashing with BCrypt
- Role-based access control (RBAC)
- CORS configuration for secure cross-origin requests
- HTTP-only token storage (localStorage in frontend)
- Request/Response validation with DTOs

## Testing

Run unit tests:
```bash
mvn test
```

Skip tests during build:
```bash
mvn clean package -DskipTests
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## Troubleshooting

### CORS Error
- Verify `SecurityConfig.java` has correct allowed origins
- Check frontend API URL matches backend base URL

### Database Connection Error
- Ensure PostgreSQL is running
- Check environment variables are set correctly
- Verify database credentials

### JWT Token Expired
- Clear localStorage and login again
- Token expiration is set to 24 hours by default

### Tests Failing
- Use H2 test configuration in `src/test/resources/application.properties`
- Tests run with in-memory H2 database

## License

This project is licensed under the MIT License.

## Authors

- **Frontend**: React Development Team
- **Backend**: Spring Boot Development Team

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Backend with [Spring Boot](https://spring.io/projects/spring-boot)
- Database: [PostgreSQL](https://www.postgresql.org/)
- Deployment: [Render](https://render.com/)
- CI/CD: [GitHub Actions](https://github.com/features/actions)
- Code Quality: [SonarCloud](https://sonarcloud.io/)
