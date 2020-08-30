# Videoaula 1 - Conteúdos para copiar

## Dependências Maven

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-web</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
	<groupId>com.h2database</groupId>
	<artifactId>h2</artifactId>
	<scope>runtime</scope>
</dependency>

<dependency>
	<groupId>org.postgresql</groupId>
	<artifactId>postgresql</artifactId>
	<scope>runtime</scope>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-validation</artifactId>
</dependency>

<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## Arquivos de configuração

### application.properties

```
spring.profiles.active=test

spring.jpa.open-in-view=false
```

### application-test.properties

```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

### application-dev.properties

```
spring.jpa.properties.javax.persistence.schema-generation.create-source=metadata
spring.jpa.properties.javax.persistence.schema-generation.scripts.action=create
spring.jpa.properties.javax.persistence.schema-generation.scripts.create-target=create.sql
spring.jpa.properties.hibernate.hbm2ddl.delimiter=;

spring.datasource.url=jdbc:postgresql://localhost:5432/dspesquisa
spring.datasource.username=postgres
spring.datasource.password=1234567

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation=true
spring.jpa.hibernate.ddl-auto=none
```

### application-prod.properties

```
spring.datasource.url=${DATABASE_URL}

spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=false
```

## Endpoint /records

```
{{host}}/records?min=2020-01-01T00:00:00Z&max=2020-07-31T00:00:00Z&page=0&linesPerPage=20&orderBy=moment&direction=DESC
```

```java
@RequestParam(value = "page", defaultValue = "0") Integer page,
@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
@RequestParam(value = "orderBy", defaultValue = "moment") String orderBy,
@RequestParam(value = "direction", defaultValue = "DESC") String direction)
```

## Teste local para CORS

```js
fetch("https://dspesquisapoc.herokuapp.com/records", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site"
  },
  "referrer": "http://localhost:3000/records",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
});
```

## Script SQL de instanciação da base de dados

```sql
INSERT INTO tb_genre (name) VALUES ('Shooter');
INSERT INTO tb_genre (name) VALUES ('MOBA');
INSERT INTO tb_genre (name) VALUES ('RPG');
INSERT INTO tb_genre (name) VALUES ('Battle Royale');

INSERT INTO tb_game (title, platform, genre_id) VALUES ('The Witcher 3', 2, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('League of Legends', 0, 2);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('CS GO', 0, 1);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Cyberpunk 2077', 0, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Cyberpunk 2077', 2, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('God of War', 0, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('God of War', 1, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Overwatch', 0, 1);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Valorant', 0, 1);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Fall Guys', 0, 4);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Fall Guys', 1, 4);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Fortnite', 0, 4);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Dragon Age Inquisition', 2, 3);
INSERT INTO tb_game (title, platform, genre_id) VALUES ('Dragon Age Inquisition', 1, 3);

INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Tulio', 44, TIMESTAMP WITH TIME ZONE '2020-07-21T20:59:19Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Alex', 33, TIMESTAMP WITH TIME ZONE '2020-06-20T20:30:26Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Marcos', 45, TIMESTAMP WITH TIME ZONE '2020-06-15T15:01:37Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Tony', 32, TIMESTAMP WITH TIME ZONE '2020-05-22T19:05:38Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Meire', 24, TIMESTAMP WITH TIME ZONE '2020-07-11T11:31:03Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Maria', 31, TIMESTAMP WITH TIME ZONE '2020-07-11T00:36:59Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Alex', 39, TIMESTAMP WITH TIME ZONE '2020-06-14T03:33:16Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Aline', 42, TIMESTAMP WITH TIME ZONE '2020-05-20T09:27:22Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Filipe', 27, TIMESTAMP WITH TIME ZONE '2020-06-25T06:44:58Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Tulio', 45, TIMESTAMP WITH TIME ZONE '2020-05-29T15:26:15Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Filipe', 39, TIMESTAMP WITH TIME ZONE '2020-05-04T21:41:42Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Tulio', 42, TIMESTAMP WITH TIME ZONE '2020-05-30T12:35:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Silas', 32, TIMESTAMP WITH TIME ZONE '2020-05-14T23:27:26Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Alex', 44, TIMESTAMP WITH TIME ZONE '2020-07-18T01:20:44Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Carlos', 42, TIMESTAMP WITH TIME ZONE '2020-05-31T02:43:24Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Tito', 26, TIMESTAMP WITH TIME ZONE '2020-06-05T16:59:51Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Erico', 34, TIMESTAMP WITH TIME ZONE '2020-07-23T14:22:42Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Marina', 39, TIMESTAMP WITH TIME ZONE '2020-07-23T14:02:26Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Erico', 45, TIMESTAMP WITH TIME ZONE '2020-07-24T03:59:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Maria', 39, TIMESTAMP WITH TIME ZONE '2020-06-26T10:37:29Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Marcela', 20, TIMESTAMP WITH TIME ZONE '2020-06-19T19:02:59Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Marcos', 41, TIMESTAMP WITH TIME ZONE '2020-06-22T00:12:31Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Francisco', 29, TIMESTAMP WITH TIME ZONE '2020-07-01T09:59:35Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Manasses', 20, TIMESTAMP WITH TIME ZONE '2020-06-24T12:09:54Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Bob', 21, TIMESTAMP WITH TIME ZONE '2020-07-05T15:09:38Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Tony', 22, TIMESTAMP WITH TIME ZONE '2020-06-20T15:29:45Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Ana', 33, TIMESTAMP WITH TIME ZONE '2020-06-08T03:26:33Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Marcos', 40, TIMESTAMP WITH TIME ZONE '2020-06-16T18:18:31Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Jessica', 46, TIMESTAMP WITH TIME ZONE '2020-06-22T14:39:55Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Tulio', 22, TIMESTAMP WITH TIME ZONE '2020-07-22T16:49:11Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Erico', 25, TIMESTAMP WITH TIME ZONE '2020-06-06T06:48:33Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Meire', 31, TIMESTAMP WITH TIME ZONE '2020-07-12T04:16:15Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Cesar', 26, TIMESTAMP WITH TIME ZONE '2020-05-20T07:15:10Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Carolina', 21, TIMESTAMP WITH TIME ZONE '2020-06-19T11:33:35Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Marcos', 40, TIMESTAMP WITH TIME ZONE '2020-07-14T12:27:11Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Marcela', 23, TIMESTAMP WITH TIME ZONE '2020-06-27T21:40:33Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Rita', 33, TIMESTAMP WITH TIME ZONE '2020-06-23T09:09:14Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Alex', 18, TIMESTAMP WITH TIME ZONE '2020-07-10T13:58:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Jessica', 28, TIMESTAMP WITH TIME ZONE '2020-07-30T00:40:16Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Marcela', 22, TIMESTAMP WITH TIME ZONE '2020-06-21T15:17:07Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Maria', 45, TIMESTAMP WITH TIME ZONE '2020-06-11T17:36:44Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Marcos', 46, TIMESTAMP WITH TIME ZONE '2020-06-30T00:25:28Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Maria', 18, TIMESTAMP WITH TIME ZONE '2020-05-05T16:44:51Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Francisco', 45, TIMESTAMP WITH TIME ZONE '2020-06-19T02:24:11Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Manasses', 42, TIMESTAMP WITH TIME ZONE '2020-05-18T23:54:59Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Tulio', 30, TIMESTAMP WITH TIME ZONE '2020-07-23T00:20:54Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Bob', 40, TIMESTAMP WITH TIME ZONE '2020-05-22T17:13:10Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Jessica', 24, TIMESTAMP WITH TIME ZONE '2020-07-04T10:35:28Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Tony', 27, TIMESTAMP WITH TIME ZONE '2020-06-08T16:45:34Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Manasses', 34, TIMESTAMP WITH TIME ZONE '2020-07-10T19:26:49Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Francisco', 38, TIMESTAMP WITH TIME ZONE '2020-07-21T23:54:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Maria', 32, TIMESTAMP WITH TIME ZONE '2020-06-24T11:04:57Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Maria', 37, TIMESTAMP WITH TIME ZONE '2020-05-28T04:51:07Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Marina', 37, TIMESTAMP WITH TIME ZONE '2020-06-13T10:20:06Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Marina', 27, TIMESTAMP WITH TIME ZONE '2020-07-05T09:10:16Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Tulio', 28, TIMESTAMP WITH TIME ZONE '2020-05-05T09:01:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Manasses', 43, TIMESTAMP WITH TIME ZONE '2020-05-27T14:42:01Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Tito', 23, TIMESTAMP WITH TIME ZONE '2020-06-16T07:22:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Bob', 46, TIMESTAMP WITH TIME ZONE '2020-06-04T12:43:47Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Manasses', 43, TIMESTAMP WITH TIME ZONE '2020-05-29T00:39:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Marcos', 30, TIMESTAMP WITH TIME ZONE '2020-05-07T18:58:45Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Marcos', 26, TIMESTAMP WITH TIME ZONE '2020-05-20T15:12:10Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Jessica', 35, TIMESTAMP WITH TIME ZONE '2020-06-23T00:38:49Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Marcela', 23, TIMESTAMP WITH TIME ZONE '2020-05-01T05:40:58Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Tulio', 37, TIMESTAMP WITH TIME ZONE '2020-06-26T00:51:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Tony', 37, TIMESTAMP WITH TIME ZONE '2020-07-28T05:46:23Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Monica', 35, TIMESTAMP WITH TIME ZONE '2020-06-28T10:49:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Ana', 20, TIMESTAMP WITH TIME ZONE '2020-05-25T11:29:38Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Bob', 37, TIMESTAMP WITH TIME ZONE '2020-06-05T05:03:03Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Erico', 43, TIMESTAMP WITH TIME ZONE '2020-05-21T03:30:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Maria', 20, TIMESTAMP WITH TIME ZONE '2020-07-23T16:49:02Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Tony', 18, TIMESTAMP WITH TIME ZONE '2020-05-15T02:24:46Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Filipe', 24, TIMESTAMP WITH TIME ZONE '2020-05-14T08:26:00Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Marcela', 27, TIMESTAMP WITH TIME ZONE '2020-07-25T13:11:09Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Monica', 39, TIMESTAMP WITH TIME ZONE '2020-06-03T04:28:58Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Monica', 34, TIMESTAMP WITH TIME ZONE '2020-07-12T20:12:21Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Meire', 39, TIMESTAMP WITH TIME ZONE '2020-05-12T14:57:23Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Marina', 25, TIMESTAMP WITH TIME ZONE '2020-06-23T12:17:23Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Tito', 20, TIMESTAMP WITH TIME ZONE '2020-05-20T15:24:43Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Ana', 36, TIMESTAMP WITH TIME ZONE '2020-07-01T16:51:09Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Jessica', 25, TIMESTAMP WITH TIME ZONE '2020-06-03T13:08:05Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Aline', 41, TIMESTAMP WITH TIME ZONE '2020-06-12T23:50:42Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Maria', 35, TIMESTAMP WITH TIME ZONE '2020-05-23T15:33:18Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Cesar', 25, TIMESTAMP WITH TIME ZONE '2020-07-02T19:06:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Bob', 38, TIMESTAMP WITH TIME ZONE '2020-06-26T13:49:49Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Alex', 30, TIMESTAMP WITH TIME ZONE '2020-05-26T00:13:35Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Cesar', 30, TIMESTAMP WITH TIME ZONE '2020-05-04T22:08:03Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Tulio', 46, TIMESTAMP WITH TIME ZONE '2020-07-21T08:58:17Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Cesar', 44, TIMESTAMP WITH TIME ZONE '2020-06-02T20:51:22Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Marcela', 27, TIMESTAMP WITH TIME ZONE '2020-07-13T23:17:38Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Bob', 39, TIMESTAMP WITH TIME ZONE '2020-06-28T19:16:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Erico', 40, TIMESTAMP WITH TIME ZONE '2020-07-29T02:41:47Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Marcos', 47, TIMESTAMP WITH TIME ZONE '2020-07-15T23:10:50Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Tito', 41, TIMESTAMP WITH TIME ZONE '2020-06-27T20:03:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Francisco', 41, TIMESTAMP WITH TIME ZONE '2020-06-27T22:24:43Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Tony', 21, TIMESTAMP WITH TIME ZONE '2020-05-11T19:08:56Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Erico', 32, TIMESTAMP WITH TIME ZONE '2020-07-17T12:50:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Filipe', 22, TIMESTAMP WITH TIME ZONE '2020-07-07T18:33:37Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Tiago', 39, TIMESTAMP WITH TIME ZONE '2020-07-06T22:15:07Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Filipe', 32, TIMESTAMP WITH TIME ZONE '2020-06-06T17:40:06Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Carolina', 20, TIMESTAMP WITH TIME ZONE '2020-07-11T18:25:34Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Manasses', 45, TIMESTAMP WITH TIME ZONE '2020-06-25T10:03:38Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Maria', 31, TIMESTAMP WITH TIME ZONE '2020-06-24T19:13:42Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Marcela', 41, TIMESTAMP WITH TIME ZONE '2020-07-14T11:35:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Marina', 27, TIMESTAMP WITH TIME ZONE '2020-07-08T11:32:31Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Carolina', 39, TIMESTAMP WITH TIME ZONE '2020-07-07T06:17:55Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Alex', 29, TIMESTAMP WITH TIME ZONE '2020-05-07T16:55:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Meire', 26, TIMESTAMP WITH TIME ZONE '2020-06-21T22:35:13Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Silas', 28, TIMESTAMP WITH TIME ZONE '2020-06-21T07:55:41Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Meire', 27, TIMESTAMP WITH TIME ZONE '2020-06-29T12:36:02Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Cesar', 19, TIMESTAMP WITH TIME ZONE '2020-06-05T23:35:06Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Meire', 21, TIMESTAMP WITH TIME ZONE '2020-06-13T00:16:11Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Carolina', 35, TIMESTAMP WITH TIME ZONE '2020-06-21T20:27:18Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Marcos', 33, TIMESTAMP WITH TIME ZONE '2020-06-10T09:41:17Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Francisco', 22, TIMESTAMP WITH TIME ZONE '2020-07-17T21:53:18Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Francisco', 45, TIMESTAMP WITH TIME ZONE '2020-05-09T16:31:29Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Tito', 29, TIMESTAMP WITH TIME ZONE '2020-07-19T19:39:54Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Tiago', 37, TIMESTAMP WITH TIME ZONE '2020-05-05T16:23:54Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Tulio', 35, TIMESTAMP WITH TIME ZONE '2020-06-03T06:06:01Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Meire', 25, TIMESTAMP WITH TIME ZONE '2020-07-19T02:02:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Francisco', 44, TIMESTAMP WITH TIME ZONE '2020-07-24T03:32:22Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Francisco', 23, TIMESTAMP WITH TIME ZONE '2020-05-18T16:45:37Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Ana', 26, TIMESTAMP WITH TIME ZONE '2020-07-07T22:11:51Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Aline', 30, TIMESTAMP WITH TIME ZONE '2020-07-25T12:18:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Erico', 21, TIMESTAMP WITH TIME ZONE '2020-05-23T11:24:09Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Marina', 42, TIMESTAMP WITH TIME ZONE '2020-07-04T10:16:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Marina', 32, TIMESTAMP WITH TIME ZONE '2020-06-14T13:25:11Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Carlos', 43, TIMESTAMP WITH TIME ZONE '2020-05-29T19:52:07Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Tiago', 34, TIMESTAMP WITH TIME ZONE '2020-07-24T08:36:19Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Aline', 46, TIMESTAMP WITH TIME ZONE '2020-07-20T05:32:53Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Manasses', 18, TIMESTAMP WITH TIME ZONE '2020-06-04T11:43:05Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Rita', 36, TIMESTAMP WITH TIME ZONE '2020-05-08T18:06:04Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Manasses', 22, TIMESTAMP WITH TIME ZONE '2020-07-15T14:19:44Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Tiago', 21, TIMESTAMP WITH TIME ZONE '2020-05-15T16:58:55Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Maria', 26, TIMESTAMP WITH TIME ZONE '2020-06-04T10:20:57Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Marcos', 30, TIMESTAMP WITH TIME ZONE '2020-06-10T06:55:09Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Bob', 45, TIMESTAMP WITH TIME ZONE '2020-07-08T20:00:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Marina', 41, TIMESTAMP WITH TIME ZONE '2020-06-16T13:14:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Maria', 33, TIMESTAMP WITH TIME ZONE '2020-06-08T13:26:00Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Aline', 41, TIMESTAMP WITH TIME ZONE '2020-05-19T01:56:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Maria', 20, TIMESTAMP WITH TIME ZONE '2020-07-28T23:53:21Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Aline', 39, TIMESTAMP WITH TIME ZONE '2020-06-15T23:42:27Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Tulio', 26, TIMESTAMP WITH TIME ZONE '2020-06-02T16:05:39Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Rita', 34, TIMESTAMP WITH TIME ZONE '2020-07-30T06:33:00Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Cesar', 41, TIMESTAMP WITH TIME ZONE '2020-07-11T14:05:22Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Carlos', 22, TIMESTAMP WITH TIME ZONE '2020-05-29T01:54:35Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Carlos', 27, TIMESTAMP WITH TIME ZONE '2020-06-10T19:30:33Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Tulio', 32, TIMESTAMP WITH TIME ZONE '2020-07-02T22:32:56Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Silas', 43, TIMESTAMP WITH TIME ZONE '2020-07-10T11:30:09Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Meire', 24, TIMESTAMP WITH TIME ZONE '2020-06-21T08:29:45Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Meire', 28, TIMESTAMP WITH TIME ZONE '2020-06-30T10:27:21Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Tony', 29, TIMESTAMP WITH TIME ZONE '2020-07-06T10:09:46Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Maria', 24, TIMESTAMP WITH TIME ZONE '2020-06-17T04:34:20Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Carlos', 46, TIMESTAMP WITH TIME ZONE '2020-07-05T13:40:20Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Ana', 45, TIMESTAMP WITH TIME ZONE '2020-05-07T03:56:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Filipe', 43, TIMESTAMP WITH TIME ZONE '2020-06-10T17:39:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Tulio', 21, TIMESTAMP WITH TIME ZONE '2020-05-22T23:35:31Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Monica', 42, TIMESTAMP WITH TIME ZONE '2020-06-03T22:37:55Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Erico', 24, TIMESTAMP WITH TIME ZONE '2020-07-17T11:50:22Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Meire', 30, TIMESTAMP WITH TIME ZONE '2020-05-15T03:22:50Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Francisco', 20, TIMESTAMP WITH TIME ZONE '2020-07-09T13:22:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Silas', 19, TIMESTAMP WITH TIME ZONE '2020-05-17T08:03:08Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Bob', 22, TIMESTAMP WITH TIME ZONE '2020-07-13T09:04:01Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Tulio', 19, TIMESTAMP WITH TIME ZONE '2020-05-28T12:00:37Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Rita', 24, TIMESTAMP WITH TIME ZONE '2020-05-11T02:15:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Aline', 20, TIMESTAMP WITH TIME ZONE '2020-05-01T22:43:35Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Carolina', 18, TIMESTAMP WITH TIME ZONE '2020-06-22T02:48:39Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Tony', 28, TIMESTAMP WITH TIME ZONE '2020-06-09T21:45:20Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Maria', 33, TIMESTAMP WITH TIME ZONE '2020-05-30T05:59:56Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (9, 'Ana', 42, TIMESTAMP WITH TIME ZONE '2020-07-06T22:57:28Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Monica', 24, TIMESTAMP WITH TIME ZONE '2020-07-16T19:28:31Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Bob', 22, TIMESTAMP WITH TIME ZONE '2020-05-28T04:33:37Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Alex', 18, TIMESTAMP WITH TIME ZONE '2020-06-01T19:10:08Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (4, 'Marina', 27, TIMESTAMP WITH TIME ZONE '2020-06-20T07:05:43Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (8, 'Tiago', 36, TIMESTAMP WITH TIME ZONE '2020-05-17T12:10:00Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (2, 'Manasses', 40, TIMESTAMP WITH TIME ZONE '2020-06-05T22:23:12Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Tulio', 43, TIMESTAMP WITH TIME ZONE '2020-05-20T11:40:56Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Marcela', 19, TIMESTAMP WITH TIME ZONE '2020-07-18T16:48:43Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Tony', 27, TIMESTAMP WITH TIME ZONE '2020-07-13T13:08:47Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Monica', 47, TIMESTAMP WITH TIME ZONE '2020-07-18T15:02:10Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Tony', 35, TIMESTAMP WITH TIME ZONE '2020-05-31T04:52:18Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (13, 'Manasses', 44, TIMESTAMP WITH TIME ZONE '2020-07-24T10:46:01Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Marcela', 42, TIMESTAMP WITH TIME ZONE '2020-07-23T20:08:36Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Meire', 23, TIMESTAMP WITH TIME ZONE '2020-06-06T15:39:10Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Marina', 26, TIMESTAMP WITH TIME ZONE '2020-05-25T12:29:17Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Maria', 25, TIMESTAMP WITH TIME ZONE '2020-05-08T20:34:49Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Francisco', 41, TIMESTAMP WITH TIME ZONE '2020-06-24T07:41:40Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Jessica', 18, TIMESTAMP WITH TIME ZONE '2020-06-04T10:33:15Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Marina', 39, TIMESTAMP WITH TIME ZONE '2020-06-05T08:07:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (6, 'Meire', 34, TIMESTAMP WITH TIME ZONE '2020-05-26T18:01:20Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (7, 'Cesar', 40, TIMESTAMP WITH TIME ZONE '2020-05-02T09:57:52Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (11, 'Silas', 34, TIMESTAMP WITH TIME ZONE '2020-07-20T19:47:59Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Aline', 32, TIMESTAMP WITH TIME ZONE '2020-07-11T18:00:15Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (14, 'Marcela', 24, TIMESTAMP WITH TIME ZONE '2020-05-08T20:15:34Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (5, 'Carlos', 32, TIMESTAMP WITH TIME ZONE '2020-07-17T04:35:32Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (10, 'Filipe', 38, TIMESTAMP WITH TIME ZONE '2020-05-20T04:20:48Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Tulio', 27, TIMESTAMP WITH TIME ZONE '2020-07-29T22:41:07Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (12, 'Alex', 27, TIMESTAMP WITH TIME ZONE '2020-06-14T21:05:20Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (1, 'Aline', 24, TIMESTAMP WITH TIME ZONE '2020-05-06T21:06:39Z');
INSERT INTO tb_record (game_id, name, age, moment) VALUES (3, 'Erico', 36, TIMESTAMP WITH TIME ZONE '2020-06-01T14:24:21Z');
```