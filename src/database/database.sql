CREATE TABLE `roles` (
  `id` INT PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `status` (
  `id` INT PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `users` (
  `id` INT PRIMARY KEY,
  `role_id` INT,
  `status_id` INT,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `password` VARCHAR(60),
  `email` VARCHAR(100) NOT NULL
);

CREATE TABLE `user_profiles` (
  `id` INT PRIMARY KEY,
  `user_id` INT,
  `desired_position_id` INT,
  `employment_status_id` INT,
  `city_id` INT,
  `gender` VARCHAR(50),
  `url_curriculum_vitae` VARCHAR(200),
  `url_linkedin` VARCHAR(200),
  `url_repository` VARCHAR(200),
  `url_portfolio` VARCHAR(200),
  `phone_number` VARCHAR(20),
  `year_of_experiences` INT,
  `work_mode` INT,
  `availability` INT,
  `visa` INT,
  `relocation` VARCHAR(100),
  `ideal_job` VARCHAR(300),
  `proud_experience` VARCHAR(300),
  `salary_expectation` INT
);

CREATE TABLE `countries` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE `cities` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL,
  `country_id` INT
);

CREATE TABLE `employment_statuses` (
  `id` INT PRIMARY KEY,
  `description` VARCHAR(100) NOT NULL
);

CREATE TABLE `educations` (
  `id` INT PRIMARY KEY,
  `user_profile_id` INT,
  `institution` VARCHAR(100) NOT NULL,
  `degree` VARCHAR(100) NOT NULL,
  `academic_area` VARCHAR(100),
  `start_date` DATE,
  `end_date` DATE,
  `status` VARCHAR(50)
);

CREATE TABLE `certificates` (
  `id` INT PRIMARY KEY,
  `user_profile_id` INT,
  `institution` VARCHAR(100) NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  `issue_date` DATE,
  `code` VARCHAR(100),
  `url` VARCHAR(200)
);

CREATE TABLE `languages` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(50) NOT NULL
);

CREATE TABLE `companies` (
  `id` INT PRIMARY KEY,
  `desired_positions` INT,
  `company` VARCHAR(50) NOT NULL,
  `reference_user` VARCHAR(50),
  `reference_email` VARCHAR(50),
  `reference_phone` VARCHAR(50),
  `comment` VARCHAR(250)
);

CREATE TABLE `matches` (
  `id` INT PRIMARY KEY,
  `company` INT,
  `user_profiles` INT,
  `status` VARCHAR(150),
  CONSTRAINT `match_company_fk` FOREIGN KEY (`company`) REFERENCES `companies` (`id`),
  CONSTRAINT `match_user_profiles_fk` FOREIGN KEY (`user_profiles`) REFERENCES `user_profiles` (`id`)
);

CREATE TABLE `levels` (
  `id` INT PRIMARY KEY,
  `level` VARCHAR(10)
);

CREATE TABLE `work_modes` (
  `id` INT PRIMARY KEY,
  `work_mode` VARCHAR(20)
);

CREATE TABLE `availabilities` (
  `id` INT PRIMARY KEY,
  `availability` VARCHAR(20)
);

CREATE TABLE `visas` (
  `id` INT PRIMARY KEY,
  `countries_id` INT,
  `status` BOOL
);

CREATE TABLE `soft_skills` (
  `id` INT PRIMARY KEY,
  `description` VARCHAR(50) NOT NULL
);

CREATE TABLE `skills` (
  `id` INT PRIMARY KEY,
  `type_skills_id` INT,
  `description` VARCHAR(50) NOT NULL
);

CREATE TABLE `user_languages` (
  `id` INT PRIMARY KEY,
  `languages_id` INT,
  `user_profile_id` INT,
  `level_id` INT
);

CREATE TABLE `type_skills` (
  `id` INT PRIMARY KEY,
  `description` VARCHAR(50) NOT NULL
);

CREATE TABLE `user_profile_skills` (
  `id` INT PRIMARY KEY,
  `user_profile_id` INT,
  `skills_id` INT,
  `level_id` INT
);

CREATE TABLE `user_profile_soft_skills` (
  `id` INT PRIMARY KEY,
  `soft_skill_id` INT,
  `user_profile_id` INT
);

CREATE TABLE `desired_positions` (
  `id` INT PRIMARY KEY,
  `description` VARCHAR(50) NOT NULL
);

CREATE TABLE `tests` (
  `id` INT PRIMARY KEY,
  `user_profile_skills` INT,
  `quiestion` INT,
  `total` INT
);

CREATE TABLE `quiestions` (
  `id` INT PRIMARY KEY,
  `statement` VARCHAR(300),
  `alternatives` INT,
  `answer` VARCHAR(100),
  `status` BOOL
);

CREATE TABLE `alternatives` (
  `id` INT PRIMARY KEY,
  `alternative_a` VARCHAR(100),
  `alternative_b` VARCHAR(100),
  `alternative_c` VARCHAR(100),
  `alternative_d` VARCHAR(100)
);


ALTER TABLE `user_profiles` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`desired_position_id`) REFERENCES `desired_positions` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`employment_status_id`) REFERENCES `employment_statuses` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`work_mode`) REFERENCES `work_modes` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`availability`) REFERENCES `availabilities` (`id`);
ALTER TABLE `user_profiles` ADD FOREIGN KEY (`visa`) REFERENCES `visas` (`id`);

ALTER TABLE `educations` ADD FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `certificates` ADD FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `user_languages` ADD FOREIGN KEY (`languages_id`) REFERENCES `languages` (`id`);
ALTER TABLE `user_languages` ADD FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `user_languages` ADD FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`);
ALTER TABLE `user_profile_skills` ADD FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `user_profile_skills` ADD FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`);
ALTER TABLE `user_profile_skills` ADD FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`);
ALTER TABLE `user_profile_soft_skills` ADD FOREIGN KEY (`soft_skill_id`) REFERENCES `soft_skills` (`id`);
ALTER TABLE `user_profile_soft_skills` ADD FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `tests` ADD FOREIGN KEY (`user_profile_skills`) REFERENCES `user_profile_skills` (`id`);
ALTER TABLE `tests` ADD FOREIGN KEY (`quiestion`) REFERENCES `quiestions` (`id`);
ALTER TABLE `quiestions` ADD FOREIGN KEY (`alternatives`) REFERENCES `alternatives` (`id`);
ALTER TABLE `companies` ADD FOREIGN KEY (`desired_positions`) REFERENCES `desired_positions` (`id`);
ALTER TABLE `companies` ADD FOREIGN KEY (`id`) REFERENCES `matches` (`company`);
ALTER TABLE `matches` ADD FOREIGN KEY (`company`) REFERENCES `companies` (`id`);
ALTER TABLE `matches` ADD FOREIGN KEY (`user_profiles`) REFERENCES `user_profiles` (`id`);
ALTER TABLE `visas` ADD FOREIGN KEY (`countries_id`) REFERENCES `countries` (`id`);
ALTER TABLE `skills` ADD FOREIGN KEY (`type_skills_id`) REFERENCES `type_skills` (`id`);
ALTER TABLE `users` ADD FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
ALTER TABLE `users` ADD FOREIGN KEY (`status_id`) REFERENCES `roles` (`id`);

INSERT INTO `roles` VALUES (1,'Desarrollador Front End');
INSERT INTO `roles` VALUES (2,'Desarrollador Full Stack / Backend');
INSERT INTO `roles` VALUES (3,'Diseñador UX/UI');
INSERT INTO `roles` VALUES (4,'Analista QA');
INSERT INTO `roles` VALUES (5,'Desarrollador Mobile');
INSERT INTO `roles` VALUES (6,'Analista de Datos');
INSERT INTO `roles` VALUES (7,'Otra');
