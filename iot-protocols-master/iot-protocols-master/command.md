# ToDo

## Creazione DB su GNU/Linux

Per la creazione del DB su PostgreSQL, dell'utente e delle varie configurazioni, seguire questa guida : [https://gitea.it/PicciHud/Appunti/wiki/Database](https://gitea.it/PicciHud/Appunti/wiki/Database)

```sql
postgres@pop-os:~$ psql
psql (14.5 (Ubuntu 14.5-0ubuntu0.22.04.1))
Type "help" for help.

postgres=# CREATE DATABASE drone_db
WITH owner DAVIDE
ALLOW_CONNECTIONS = true
;
CREATE DATABASE
postgres=#\l

                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges   
-----------+----------+----------+-------------+-------------+-----------------------
 drone_db  | davide   | UTF8     | it_IT.UTF-8 | it_IT.UTF-8 | 
 postgres  | postgres | UTF8     | it_IT.UTF-8 | it_IT.UTF-8 | 
 template0 | postgres | UTF8     | it_IT.UTF-8 | it_IT.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
 template1 | postgres | UTF8     | it_IT.UTF-8 | it_IT.UTF-8 | =c/postgres          +
           |          |          |             |             | postgres=CTc/postgres
(4 rows)
```

## Connessione al DB tramite Node.js

Installare prima `node.js` e poi il pacchetto `pg` , all'interno della cartella `server`:

```bash
sudo apt install nodejs npm -y
npm install pg
```

che permetterà la connessione al DB PostgreSQL.