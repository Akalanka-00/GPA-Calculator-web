DROP TABLE `gpacalculator`.`system_log`;
DROP TABLE `gpacalculator`.`usercredentials`;

use gpacalculator;

CREATE TABLE `usercredentials` (
  `user_id` varchar(20) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(45) NOT NULL,
  `psw` varchar(45) NOT NULL,
  `createdDateTime` datetime NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `gpacalculator`.`system_log` (
  `log_id` VARCHAR(20) NOT NULL,
  `date_and_time` DATETIME NOT NULL,
  `log_action` VARCHAR(100) NOT NULL,
  `country` VARCHAR(20) NOT NULL,
  `country_code` VARCHAR(5) NOT NULL,
  `ip_address` VARCHAR(20) NOT NULL,
  `mac_address` VARCHAR(20) NOT NULL,
  `latitude` VARCHAR(10) NOT NULL,
  `longtitude` VARCHAR(10) NOT NULL,
  `user_id` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`log_id`),
  UNIQUE INDEX `log_id_UNIQUE` (`log_id` ASC) VISIBLE,
  INDEX `User_Info_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `User_Info`
    FOREIGN KEY (`user_id`)
    REFERENCES `gpacalculator`.`usercredentials` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE);
