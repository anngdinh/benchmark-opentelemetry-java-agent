FROM openjdk:8-jdk
EXPOSE 8090
WORKDIR /app

# Copy maven executable to the image
COPY mvnw .
COPY .mvn .mvn

# Copy the pom.xml file
COPY pom.xml .

# Copy the project source
COPY ./src ./src
COPY ./pom.xml ./pom.xml
COPY ./agent/opentelemetry-javaagent.jar ./agent/opentelemetry-javaagent.jar
COPY ./agent/file.properties ./agent/file.properties

RUN chmod 755 /app/mvnw

RUN ./mvnw dependency:go-offline -B -Dmaven.artifact.threads=35

RUN ./mvnw package #-DskipTests
#RUN ls -al
# ENTRYPOINT ["java","-jar","target/NoteBookManagerRest-0.0.1-SNAPSHOT.jar"]
ENTRYPOINT ["java", "-javaagent:./agent/opentelemetry-javaagent.jar", "-Xms6g", "-Xmx6g", "-Dotel.javaagent.configuration-file=./agent/file.properties", "-jar","target/NoteBookManagerRest-0.0.1-SNAPSHOT.jar"]
# "",
 




# FROM openjdk:8-jdk
# EXPOSE 8090
# WORKDIR /app
# COPY ./target/NoteBookManagerRest-0.0.1-SNAPSHOT.jar NoteBookManagerRest-0.0.1-SNAPSHOT.jar
# COPY ./agent/opentelemetry-javaagent.jar ./agent/opentelemetry-javaagent.jar
# COPY ./agent/file.properties ./agent/file.properties

# ENTRYPOINT ["java", "-javaagent:./agent/opentelemetry-javaagent.jar", "-Xms6g", "-Xmx6g", "-Dotel.javaagent.configuration-file=./agent/file.properties", "-jar","NoteBookManagerRest-0.0.1-SNAPSHOT.jar"]
