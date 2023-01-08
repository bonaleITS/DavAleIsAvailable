# DavAleIsAvailable

Membri del gruppo:

- Alessandro Bonaldo (responsabile);
- Davide Maria Piccinato

Progetto Iot Drone - 2022

## Documentazione

Comunicazione tra client (drone) e server tramite vari protocolli al fine di comprendere le criticità e il funzionamento. 

Il drone comunica ogni secondo al server le proprie informazioni (altitudine, latitudine, longitudine, velocità, carica residua) in formato json. Il server si occupa quindi di leggere tali dati e inserirli in un db postgres.
