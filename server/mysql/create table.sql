CREATE SCHEMA `gpa_calculator` ;

use `gpa_calculator`;

CREATE TABLE `user_credentials` (
  `username` varchar(25) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(45) NOT NULL,
  `profile` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
