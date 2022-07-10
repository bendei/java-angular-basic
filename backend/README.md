## Spring Boot

Spring Boot Tutorials:
https://www.baeldung.com/spring-boot

# OpenAPI generated server
## Overview  
This server was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.
By using the [OpenAPI-Spec](https://openapis.org), you can easily generate a server stub.
This is an example of building a OpenAPI-enabled server in Java using the SpringBoot framework.

The underlying library integrating OpenAPI to SpringBoot is [springfox](https://github.com/springfox/springfox)

Start your server as a simple java application

You can view the api documentation in swagger-ui by pointing to  
http://localhost:8081/

Change default port value in application.properties

https://support.smartbear.com/swaggerhub/docs/tutorials/openapi-3-tutorial.html

https://swagger.io/docs/specification/describing-parameters/

---------------------------------------------------------------------------------------------------------
## Database

backend uses H2 database, datas are persisted on the filesystem

## h2 console im browser:
http://localhost:8081/h2-console

H2 Database runs in this app in embedded mode = only local, and datas will be stored on disk. (not by default in memory)
lásd: https://www.baeldung.com/h2-embedded-db-data-storage

## lentebb kitűnő spring data jpa tutorialok vannak ezen az oldalon, mint transactionok, @query, pagination, 
https://www.baeldung.com/persistence-with-spring-series

## application.properties setting for auto/not auto db schema creation:
https://www.baeldung.com/spring-boot-data-sql-and-schema-sql

## save()
https://www.baeldung.com/spring-data-crud-repository-save

## Criteria Predicate:
https://www.baeldung.com/jpa-and-or-criteria-predicates

## integration teszhez @SQL
https://www.baeldung.com/spring-boot-data-sql-and-schema-sql

---------------------------------------------------------------------------------------------------------
## ERROR HANDLING 

https://www.toptal.com/java/spring-boot-rest-api-error-handling

---------------------------------------------------------------------------------------------------------
## Testing

unit testing with JUnit5 ( Jupiter): https://www.baeldung.com/junit-5

// leirja, hogy mi a @Mock ill @InjectMocj stb, nagyon jó
https://www.arhohuttunen.com/junit-5-mockito/

// @Spy
https://www.baeldung.com/mockito-annotations

// @Mock vagy @Spy ??:
https://stackoverflow.com/questions/15052984/what-is-the-difference-between-mocking-and-spying-when-using-mockito#:~:text=about%20partial%20mocks.-,Mockito.,passed%20to%20spy()%20method.



