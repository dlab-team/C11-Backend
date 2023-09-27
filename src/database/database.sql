-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gfleming_c11_mysql
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gfleming_c11_mysql` ;

-- -----------------------------------------------------
-- Schema gfleming_c11_mysql
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gfleming_c11_mysql` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `gfleming_c11_mysql` ;

-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`aviabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`aviabilities` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`aviabilities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`companies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`companies` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `reference_user` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `reference_email` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `reference_phone` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `comment` VARCHAR(45) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`roles` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`companies_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`companies_desired_roles` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`companies_desired_roles` (
  `companies_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`companies_id`, `roles_id`),
  INDEX `fk_companies_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_companies_has_roles_companies1_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_companies_has_roles_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `gfleming_c11_mysql`.`companies` (`id`),
  CONSTRAINT `fk_companies_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `gfleming_c11_mysql`.`roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`insitutions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`insitutions` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`insitutions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`educations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`educations` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`educations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carrer` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `institution_name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `insitutions_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_educations_insitutions1_idx` (`insitutions_id` ASC) VISIBLE,
  CONSTRAINT `fk_educations_insitutions1`
    FOREIGN KEY (`insitutions_id`)
    REFERENCES `gfleming_c11_mysql`.`insitutions` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`employment_statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`employment_statuses` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`employment_statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`english`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`english` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`english` (
  `idenglish` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idenglish`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`level`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`level` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`statuses` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user` (
  `id` VARCHAR(200) NOT NULL,
  `first_name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `last_name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `email` VARCHAR(100) CHARACTER SET 'utf8mb3' NOT NULL,
  `roles_id` INT NULL DEFAULT NULL,
  `statuses_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_user_statuses1_idx` (`statuses_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `gfleming_c11_mysql`.`roles` (`id`),
  CONSTRAINT `fk_user_statuses1`
    FOREIGN KEY (`statuses_id`)
    REFERENCES `gfleming_c11_mysql`.`statuses` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`work_mode`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`work_mode` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`work_mode` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` TINYINT NOT NULL,
  `url_curriculum_vitae` VARCHAR(100) NULL DEFAULT NULL,
  `url_repository` VARCHAR(100) NULL DEFAULT NULL,
  `url_linkedin` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `years_of_experience` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `proud_experience` TEXT CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `relocation` INT NULL DEFAULT NULL,
  `salary_expectations` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `user_id` VARCHAR(200) NOT NULL,
  `work_mode_id` INT NOT NULL,
  `employment_statuses_id` INT NOT NULL,
  `cities_id` INT NOT NULL,
  `file_curriculum_vitae` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `max_education_level` TINYINT NOT NULL,
  `current_education_level` TINYINT NOT NULL,
  `dream_job` TEXT NULL DEFAULT NULL,
  `english_id` INT NOT NULL,
  `imagen` VARCHAR(200) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_profile_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_profile_work_mode1_idx` (`work_mode_id` ASC) VISIBLE,
  INDEX `fk_user_profile_employment_statuses1_idx` (`employment_statuses_id` ASC) VISIBLE,
  INDEX `fk_user_profile_english1_idx` (`english_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_employment_statuses1`
    FOREIGN KEY (`employment_statuses_id`)
    REFERENCES `gfleming_c11_mysql`.`employment_statuses` (`id`),
  CONSTRAINT `fk_user_profile_english1`
    FOREIGN KEY (`english_id`)
    REFERENCES `gfleming_c11_mysql`.`english` (`idenglish`),
  CONSTRAINT `fk_user_profile_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `gfleming_c11_mysql`.`user` (`id`),
  CONSTRAINT `fk_user_profile_work_mode1`
    FOREIGN KEY (`work_mode_id`)
    REFERENCES `gfleming_c11_mysql`.`work_mode` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_desired_roles` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_desired_roles` (
  `user_profile_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `roles_id`),
  INDEX `fk_user_profile_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_roles_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `gfleming_c11_mysql`.`roles` (`id`),
  CONSTRAINT `fk_user_profile_has_roles_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`matches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`matches` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`matches` (
  `companies_desired_roles_companies_id` INT NOT NULL,
  `companies_desired_roles_roles_id` INT NOT NULL,
  `user_profile_desired_roles_user_profile_id` INT NOT NULL,
  `user_profile_desired_roles_roles_id` INT NOT NULL,
  PRIMARY KEY (`companies_desired_roles_companies_id`, `companies_desired_roles_roles_id`, `user_profile_desired_roles_user_profile_id`, `user_profile_desired_roles_roles_id`),
  INDEX `fk_companies_desired_roles_has_user_profile_desired_roles_u_idx` (`user_profile_desired_roles_user_profile_id` ASC, `user_profile_desired_roles_roles_id` ASC) VISIBLE,
  INDEX `fk_companies_desired_roles_has_user_profile_desired_roles_c_idx` (`companies_desired_roles_companies_id` ASC, `companies_desired_roles_roles_id` ASC) VISIBLE,
  CONSTRAINT `fk_companies_desired_roles_has_user_profile_desired_roles_com1`
    FOREIGN KEY (`companies_desired_roles_companies_id` , `companies_desired_roles_roles_id`)
    REFERENCES `gfleming_c11_mysql`.`companies_desired_roles` (`companies_id` , `roles_id`),
  CONSTRAINT `fk_companies_desired_roles_has_user_profile_desired_roles_use1`
    FOREIGN KEY (`user_profile_desired_roles_user_profile_id` , `user_profile_desired_roles_roles_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile_desired_roles` (`user_profile_id` , `roles_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`type_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`type_skills` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`type_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`skills` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type_skills_id` INT NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_skills_type_skills1_idx` (`type_skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills_type_skills1`
    FOREIGN KEY (`type_skills_id`)
    REFERENCES `gfleming_c11_mysql`.`type_skills` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 69
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`soft_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`soft_skills` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`soft_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 24
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_has_aviabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_has_aviabilities` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_has_aviabilities` (
  `user_profile_id` INT NOT NULL,
  `aviabilities_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `aviabilities_id`),
  INDEX `fk_user_profile_has_aviabilities_aviabilities1_idx` (`aviabilities_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_aviabilities_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_aviabilities_aviabilities1`
    FOREIGN KEY (`aviabilities_id`)
    REFERENCES `gfleming_c11_mysql`.`aviabilities` (`id`),
  CONSTRAINT `fk_user_profile_has_aviabilities_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_has_educations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_has_educations` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_has_educations` (
  `user_profile_id` INT NOT NULL,
  `educations_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `educations_id`),
  INDEX `fk_user_profile_has_educations_educations1_idx` (`educations_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_educations_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_educations_educations1`
    FOREIGN KEY (`educations_id`)
    REFERENCES `gfleming_c11_mysql`.`educations` (`id`),
  CONSTRAINT `fk_user_profile_has_educations_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_has_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_has_skills` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_has_skills` (
  `user_profile_id` INT NOT NULL,
  `skills_id` INT NOT NULL,
  `level_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `skills_id`),
  INDEX `fk_user_profile_has_skills_skills1_idx` (`skills_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_skills_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_skills_level1_idx` (`level_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_skills_level1`
    FOREIGN KEY (`level_id`)
    REFERENCES `gfleming_c11_mysql`.`level` (`id`),
  CONSTRAINT `fk_user_profile_has_skills_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `gfleming_c11_mysql`.`skills` (`id`),
  CONSTRAINT `fk_user_profile_has_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_has_soft_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_has_soft_skills` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_has_soft_skills` (
  `user_profile_id` INT NOT NULL,
  `soft_skills_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `soft_skills_id`),
  INDEX `fk_user_profile_has_soft_skills_soft_skills1_idx` (`soft_skills_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_soft_skills_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_soft_skills_soft_skills1`
    FOREIGN KEY (`soft_skills_id`)
    REFERENCES `gfleming_c11_mysql`.`soft_skills` (`id`),
  CONSTRAINT `fk_user_profile_has_soft_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`visas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`visas` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`visas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`user_profile_has_visas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`user_profile_has_visas` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`user_profile_has_visas` (
  `user_profile_id` INT NOT NULL,
  `visas_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `visas_id`),
  INDEX `fk_user_profile_has_visas_visas1_idx` (`visas_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_visas_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_visas_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`),
  CONSTRAINT `fk_user_profile_has_visas_visas1`
    FOREIGN KEY (`visas_id`)
    REFERENCES `gfleming_c11_mysql`.`visas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gfleming_c11_mysql`.`url`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `gfleming_c11_mysql`.`url` ;

CREATE TABLE IF NOT EXISTS `gfleming_c11_mysql`.`url` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(200) NULL,
  `user_profile_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_url_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_url_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `gfleming_c11_mysql`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO roles VALUES 
(1,'Desarrollador Front End'),
(2,'Desarrollador Full Stack / Backend'),
(3,'Disenador UX/UI'),
(4,'Analista QA'),
(5,'Desarrollador Mobile'),
(6,'Analista de Datos'),
(7,'Otra');

INSERT INTO type_skills VALUES 
(1,'lenguaje'),
(2,'Bases o Frameworks'),
(3,'Herramientas');

INSERT INTO skills VALUES 
(1,1,'Python'),
(2,1,'Javascript'),
(3,1,'HTML/CSS'),
(4,1,'Java'),
(5,1,'PHP'),
(6,1,'Ruby'),
(7,1,'Scala, perl y/ Go'),
(8,1,'C/C++'),
(9,1,'Kotlin'),
(10,1,'Swift'),
(11,1,'C#'),
(12,1,'TypeScipt'),
(13,1,'Assembly'),
(14,1,'R'),
(15,1,'Go'),
(16,1,'Bash/shell'),
(17, 2, 'Oracle'),
(18, 2, 'Cassandra'),
(19, 2, 'SQLite'),
(20, 2, 'Redis'),
(21, 2, 'MongoDB'),
(22, 2, 'PostgreSQL'),
(23, 2, 'MySQL'),
(24, 2, 'Firebase Realtime Database'),
(25, 2, 'MariaDB'),
(26, 2, 'Microsoft SQL Server'),
(27, 2, 'JQuery'),
(28, 2, 'React'),
(29, 2, 'Spring'),
(30, 2, 'Angular'),
(31, 2, 'Vue.js'),
(32, 2, 'Laravel'),
(33, 2, 'Django'),
(34, 2, 'Ruby On Rails'),
(35, 2, 'ASP.NET o ASP.NETCore'),
(36, 2, 'Flask'),
(37, 2, 'Express.js'),
(38, 2, 'FastAPI'),
(39, 2, '.NET'),
(40, 2, 'Node.js'),
(41,3,'Github'),
(42,3,'Adobe Illustrator'),
(43,3,'Adobe Photoshop'),
(44,3,'Adobe XD'),
(45,3,'AWS'),
(46,3,'Docker'),
(47,3,'Figma'),
(48,3,'GIT'),
(49,3,'Google Analytics'),
(50,3,'Google Cloud Plataform'),
(51,3,'Google Data Studio'),
(52,3,'Invision'),
(53,3,'InVision Studio'),
(54,3,'Jira'),
(55,3,'Kubernetes'),
(56,3,'Marvel'),
(57,3,'Microsoft Excel'),
(58,3,'Microfost Azure'),
(59,3,'Miro'),
(60,3,'Power BI'),
(61,3,'Proto.io'),
(62,3,'Qlik'),
(63,3,'Sketch'),
(64,3,'SPSS'),
(65,3,'Tableau'),
(66,3,'Unity 3D'),
(67,3,'Unreal Engine'),
(68,3,'Zepelin');

INSERT INTO statuses VALUES
(1,'Administrador'),
(2,'Usuario Incompleto'),
(3,'Usuario Completo'),
(4,'Postulante Activo'),
(5,'Postulante Job ready ');

INSERT INTO visas VALUES
(1,'Estados Unidos'),
(2,'Union Europea'),
(3,'Mi pais de residencia actual');

INSERT INTO aviabilities VALUES
(1,'Full Time'),
(2,'Part time'),
(3,'Freelancer');

INSERT INTO soft_skills VALUES
(1,'Lider'),
(2,'Resiliente/Perseverante'),
(3,'Comunicacion/Sociable'),
(4,'Colaborativo/Empatia'),
(5,'Aprendizaje Agil/Autonomo'),
(6,'Flexible/Adaptable'),
(7,'Responsable'),
(8,'Innovador/Curioso'),
(9,'Negociacion'),
(10,'Resolucion de Problemas'),
(11,'Productividad/Iniciativa');

INSERT INTO employment_statuses VALUES
(1,'Cesante, busco empleo en TI por primera ves.'),
(2,'Cesante, ya he trabajado antes en TI.'),
(3,'Tengo trabajo en TI, pero busco otro.'),
(4,'Tengo trabajo (en otras areas), pero busco en TI.');

INSERT INTO english VALUES 
(1,'Ninguno'),
(2,'Basico A1'),
(3,'Basico A2'),
(4,'Pre-Intermedio B1'),
(5,'Intermedio B2'),
(6,'Intermedio Avanzado C1'),
(7,'Avanzados C2');

INSERT INTO level VALUES 
(1,'No tengo experiencia laboral, perohe desarrollado proyectos utilizado estas Tecnoligia/Herramientas.'),
(2,'Tengo poca experiencia laboral, menos de dos anos, necesito supervision constante.'),
(3,'Tengo experiencia laboral (+2 anos) y/o autonomia completa a la hora de desarrollar proyectos.');


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
