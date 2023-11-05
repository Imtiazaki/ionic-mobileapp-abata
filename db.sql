# Host: localhost  (Version 5.5.5-10.4.11-MariaDB)
# Date: 2022-01-19 14:42:14
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "mhs"
#

DROP TABLE IF EXISTS `mhs`;
CREATE TABLE `mhs` (
  `nim` varchar(10) NOT NULL DEFAULT '',
  `nama` varchar(20) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `jenkel` varchar(6) DEFAULT NULL,
  `pass` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`nim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Structure for table "mtk"
#

DROP TABLE IF EXISTS `mtk`;
CREATE TABLE `mtk` (
  `kdmtk` varchar(5) NOT NULL DEFAULT '',
  `namamtk` varchar(30) DEFAULT NULL,
  `sks` int(1) DEFAULT NULL,
  PRIMARY KEY (`kdmtk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Structure for table "nilai"
#

DROP TABLE IF EXISTS `nilai`;
CREATE TABLE `nilai` (
  `nim` varchar(10) NOT NULL DEFAULT '',
  `kdmtk` varchar(5) NOT NULL,
  `absen` int(3) DEFAULT NULL,
  `uts` int(3) DEFAULT NULL,
  `uas` int(3) DEFAULT NULL,
  PRIMARY KEY (`nim`,`kdmtk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#
# Structure for table "users"
#

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `userpass` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
