# Server Web locale su Fedora

**Indirizzo di ascolto:** `127.0.0.1:80`  
**Accesso ai siti:** `http://nome_sito.localhost`

## Avviare e fermare il server

Per avviare, fermare o controllare lo stato dei servizi Apache, PHP-FPM e MariaDB, eseguire lo script:

```bash
~/Documenti/avvia_ferma_server_localhost.sh
```

## Creare e avviare un sito PHP

### 1. Creare il file di configurazione

Creare un file `.conf` nella directory di configurazione di Apache:

```bash
sudo nano /etc/httpd/conf.d/nome_sito.conf
```

### 2. Configurare il VirtualHost

Inserire il seguente contenuto, sostituendo `nome_utente` con il proprio nome utente Linux e `Cartella_del_sito` con il nome della cartella del progetto.

```apache
<VirtualHost 127.0.0.1:80>
    ServerName nome_sito.localhost
    DocumentRoot "/home/nome_utente/Documenti/Scuola/Informatica/WEB/Cartella_del_sito"

    <Directory "/home/nome_utente/Documenti/Scuola/Informatica/WEB/Cartella_del_sito">
        Options -Indexes
        AllowOverride None
        Require local
    </Directory>
</VirtualHost>
```

**Nota:** il percorso deve essere assoluto. Non utilizzare `~` per indicare la home dell'utente nella configurazione Apache.

### 3. Verificare e applicare la configurazione

Controllare che non ci siano errori di sintassi:

```bash
sudo apachectl configtest
```

Se viene restituito `Syntax OK`, ricaricare Apache:

```bash
sudo systemctl reload httpd
```

Se il sito si trova nella home dell'utente, verificare anche che i permessi delle directory e i contesti SELinux consentano ad Apache di leggere i file.

### 4. Aprire il sito nel browser

Aprire il seguente indirizzo:

```text
http://nome_sito.localhost
```

Non utilizzare `http://nome_sito.127.0.0.1:80`: l'indirizzo IP e la porta non fanno parte del nome del sito.

La porta `80` è quella predefinita per HTTP e può essere omessa nell'indirizzo del browser.

## Note importanti

- Ogni sito deve avere un proprio file `.conf` e un `ServerName` univoco.
- Più siti possono utilizzare lo stesso Apache e la stessa porta `80`.
- PHP-FPM deve essere attivo e correttamente collegato ad Apache affinché i file PHP vengano eseguiti.
- MariaDB deve essere attivo se il sito deve utilizzare un database.
- La configurazione è destinata all'accesso locale; non aprire le porte sul firewall per questo scopo.
