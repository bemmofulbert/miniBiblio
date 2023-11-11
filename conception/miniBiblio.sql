CREATE DATABASE IF NOT EXISTS `miniBiblio`;
USE `miniBiblio`;

CREATE TABLE Utilisateur (
	id int not null PRIMARY KEY 
	# id = numero de telephone
);

CREATE TABLE Livre (
	id int auto_increment not null PRIMARY KEY,
	titre varchar(120),
	auteur varchar(120),
	genre varchar(120),
	id_Utilisateur int REFERENCES Utilisateur(id) ON DELETE CASCADE
);

CREATE TABLE Emprunt(
	id int auto_increment not null PRIMARY KEY,
	id_Utilisateur int REFERENCES Utilisateur(id) ON DELETE CASCADE,
	id_Livre int REFERENCES Livre(id) ON DELETE CASCADE,
	dateEmprunt DATE DEFAULT NOW()
);



INSERT INTO Utilisateur(id) values('673595014'), ('677366924');
INSERT INTO Livre(titre, auteur, genre, id_Utilisateur)
values('Lunar Park','Bret Easton Ellis (Robert Laffont)', 'Roman',673595014),
('Waltenberg','Hédi Kaddour (Gallimard)','Roman français',9),
(' Louis XVI','Jean-Christian Petitfils (Perrin)','Biographie',677366924);
INSERT INTO Emprunt(id_Utilisateur,id_Livre) values(673595014,2);
