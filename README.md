# React_Springboot

UI is done using ReactJs. Backend is done using Springboot

## Prerequisites

Before running this project, ensure that you have the following installed on your machine:

- Node - (v16.16.0)
- npm - (8.11.0)
- Java Development Kit (JDK) - (11.0.15)
- Maven - (apache-maven-3.9.2)

## Installation

1. Clone the repository to your local machine:
   
   ```bash
   git clone https://github.com/akhilrgeorge007/react_springboot.git
   
2. Navigate to the project's root directory:
    ```bash
    cd React_Springboot
    
## Frontend (React)

1. Install the dependencies:
    ```bash
    cd healspan
    npm install
    
2. Start the development server:
    ```bash
    npm start
    
The React frontend will be running on http://localhost:3000


## Backend(Springboot)

1. Build the backend using Maven:
    ```bash
    cd healspanspringboot
    mvn clean install
    
2. Start the Spring Boot server:
    ```bash
    java -jar .\target\healspanspringboot-0.0.1-SNAPSHOT.jar
    
The Spring Boot backend will be running on http://localhost:8080.
    
Update the Java version in pom.xml file if required


Dummy data is added in healspanspringboot/src/main/resources/data.json file