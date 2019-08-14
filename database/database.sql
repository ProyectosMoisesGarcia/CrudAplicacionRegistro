CREATE DATABASE peruapps_bd;

USE peruapps_bd;

CREATE TABLE peruapps(
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(200),
        apellidopat VARCHAR(200),
        apellidomat VARCHAR(200),
        email VARCHAR(200),
        fchnac  VARCHAR(200),
        fchingreso VARCHAR(200),
        created_at TIMESTAMP DEFAULT CURREN_TIMESTAMP
);
