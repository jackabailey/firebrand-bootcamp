CREATE DATABASE anotherDB;
CREATE TABLE houseResidents(
    HouseID int PRIMARY KEY,
    StreetNameNumber varchar(255),
    PostalCode varchar(255), 
    PrimaryResident varchar(255),
    PhoneNumber varchar(255),
    Email varchar(255)
)

SELECT * FROM houseResidents;

INSERT INTO houseResidents  VALUES (90, '13 Clemons Lane', null, null, '+86 687 402 4066', 'kstorre2h@ocn.ne.jp');
INSERT INTO houseResidents  VALUES (91, '98602 Bartillon Alley', null, 'Millie Simonich', '+218 552 595 4567', 'msimonich2i@bigcartel.com');
INSERT INTO houseResidents  VALUES (92, '83764 Warbler Point', '601974', 'Catlaina Rickell', '+7 968 694 3643', 'crickell2j@stumbleupon.com');
INSERT INTO houseResidents  VALUES (93, '8572 Londonderry Hill', null, 'Barty Cestard', '+58 502 312 4240', 'bcestard2k@cam.ac.uk');
INSERT INTO houseResidents  VALUES (94, '974 Amoth Lane', null, 'Harbert Larrat', '+86 415 650 0128', 'hlarrat2l@reddit.com');
INSERT INTO houseResidents  VALUES (95, '8 Carioca Trail', '382 91', 'Ravid Tranter', '+46 426 600 4415', 'rtranter2m@pen.io');
INSERT INTO houseResidents  VALUES (96, '806 Loomis Street', '4715477', 'Norris Twiggins', '+351 561 609 5551', 'ntwiggins2n@issuu.com');
INSERT INTO houseResidents  VALUES (97, '70493 Mifflin Terrace', '1230', 'Darcy Quinlan', '+880 105 256 0214', 'dquinlan2o@storify.com');
INSERT INTO houseResidents  VALUES (98, '48 Red Cloud Hill', '9713', 'Eustacia Salack', '+63 420 924 3682', 'esalack2p@cloudflare.com');
INSERT INTO houseResidents  VALUES (99, '605 Bashford Place', null, 'Lorinda Schultze', '+256 106 313 0514', 'lschultze2q@ow.ly');
INSERT INTO houseResidents  VALUES (100, '4186 Drewry Avenue', null, 'Ogden Matelyunas', '+86 885 352 8483', 'omatelyunas2r@domainmarket.com');

SELECT * FROM houseResidents;

SELECT HouseID, PrimaryResident FROM houseResidents WHERE HouseID > 95;

UPDATE houseResidents
SET Email = "ChrissieMcCreek@CMC.co.uk", PhoneNumber = "+44 7984 746758", PrimaryResident = "Chrissie McCreek", PostalCode = "EH2 3GA" 
WHERE HouseID = 90;
SELECT * FROM houseResidents;

DELETE FROM houseResidents WHERE HouseID > 96 OR HouseID = 91;

ALTER TABLE houseResidents
ADD Salary int;

UPDATE houseResidents
SET Salary = 100000
WHERE HouseID = 90;

UPDATE houseResidents
SET Salary = 80000
WHERE HouseID > 90;