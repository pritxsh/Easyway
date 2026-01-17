# ---- Build Stage ----
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and build jar
COPY src ./src
RUN mvn clean package -DskipTests

# ---- Runtime Stage ----
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the jar from build stage
COPY --from=build /app/target/EasywayEmployee-0.0.1-SNAPSHOT.jar app.jar

# Expose port (change if needed)
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java","-jar","app.jar"]
