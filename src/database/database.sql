-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema incubadora_c11
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `incubadora_c11` ;

-- -----------------------------------------------------
-- Schema incubadora_c11
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `incubadora_c11` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `incubadora_c11` ;

-- -----------------------------------------------------
-- Table `incubadora_c11`.`aviabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`aviabilities` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`aviabilities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`companies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`companies` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`companies` (
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
-- Table `incubadora_c11`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`companies_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`companies_desired_roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`companies_desired_roles` (
  `companies_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`companies_id`, `roles_id`),
  INDEX `fk_companies_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_companies_has_roles_companies1_idx` (`companies_id` ASC) VISIBLE,
  CONSTRAINT `fk_companies_has_roles_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `incubadora_c11`.`companies` (`id`),
  CONSTRAINT `fk_companies_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `incubadora_c11`.`roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`insitutions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`insitutions` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`insitutions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`educations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`educations` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`educations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carrer` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `institution_name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `insitutions_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_educations_insitutions1_idx` (`insitutions_id` ASC) VISIBLE,
  CONSTRAINT `fk_educations_insitutions1`
    FOREIGN KEY (`insitutions_id`)
    REFERENCES `incubadora_c11`.`insitutions` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`employment_statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`employment_statuses` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`employment_statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`level`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`level` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`statuses` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
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
    REFERENCES `incubadora_c11`.`roles` (`id`),
  CONSTRAINT `fk_user_statuses1`
    FOREIGN KEY (`statuses_id`)
    REFERENCES `incubadora_c11`.`statuses` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`work_mode`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`work_mode` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`work_mode` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` TINYINT NOT NULL,
  `url_curriculum_vitae` VARCHAR(100) NULL,
  `url_repository` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `url_portfolio` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `url_linkedin` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `years_of_experience` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `proud_experience` TEXT CHARACTER SET 'utf8mb3' NULL DEFAULT NULL,
  `relocation` INT NULL DEFAULT NULL,
  `salary_expectations` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  `user_id` INT NOT NULL,
  `work_mode_id` INT NOT NULL,
  `employment_statuses_id` INT NOT NULL,
  `english_id` INT NOT NULL,
  `cities_id` INT NOT NULL,
  `file_curriculum_vitae` VARCHAR(100) CHARACTER SET 'utf8mb3' NULL,
  `max_education_level` TINYINT NOT NULL,
  `current_education_level` TINYINT NOT NULL,
  `dream_job` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_profile_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_profile_work_mode1_idx` (`work_mode_id` ASC) VISIBLE,
  INDEX `fk_user_profile_employment_statuses1_idx` (`employment_statuses_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_employment_statuses1`
    FOREIGN KEY (`employment_statuses_id`)
    REFERENCES `incubadora_c11`.`employment_statuses` (`id`),
  CONSTRAINT `fk_user_profile_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `incubadora_c11`.`user` (`id`),
  CONSTRAINT `fk_user_profile_work_mode1`
    FOREIGN KEY (`work_mode_id`)
    REFERENCES `incubadora_c11`.`work_mode` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_desired_roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_desired_roles` (
  `user_profile_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `roles_id`),
  INDEX `fk_user_profile_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_roles_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `incubadora_c11`.`roles` (`id`),
  CONSTRAINT `fk_user_profile_has_roles_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`matches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`matches` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`matches` (
  `companies_desired_roles_companies_id` INT NOT NULL,
  `companies_desired_roles_roles_id` INT NOT NULL,
  `user_profile_desired_roles_user_profile_id` INT NOT NULL,
  `user_profile_desired_roles_roles_id` INT NOT NULL,
  PRIMARY KEY (`companies_desired_roles_companies_id`, `companies_desired_roles_roles_id`, `user_profile_desired_roles_user_profile_id`, `user_profile_desired_roles_roles_id`),
  INDEX `fk_companies_desired_roles_has_user_profile_desired_roles_u_idx` (`user_profile_desired_roles_user_profile_id` ASC, `user_profile_desired_roles_roles_id` ASC) VISIBLE,
  INDEX `fk_companies_desired_roles_has_user_profile_desired_roles_c_idx` (`companies_desired_roles_companies_id` ASC, `companies_desired_roles_roles_id` ASC) VISIBLE,
  CONSTRAINT `fk_companies_desired_roles_has_user_profile_desired_roles_com1`
    FOREIGN KEY (`companies_desired_roles_companies_id` , `companies_desired_roles_roles_id`)
    REFERENCES `incubadora_c11`.`companies_desired_roles` (`companies_id` , `roles_id`),
  CONSTRAINT `fk_companies_desired_roles_has_user_profile_desired_roles_use1`
    FOREIGN KEY (`user_profile_desired_roles_user_profile_id` , `user_profile_desired_roles_roles_id`)
    REFERENCES `incubadora_c11`.`user_profile_desired_roles` (`user_profile_id` , `roles_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`type_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`type_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`type_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type_skills_id` INT NOT NULL,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_skills_type_skills1_idx` (`type_skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills_type_skills1`
    FOREIGN KEY (`type_skills_id`)
    REFERENCES `incubadora_c11`.`type_skills` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 69
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`soft_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`soft_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`soft_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_educations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_educations` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_educations` (
  `user_profile_id` INT NOT NULL,
  `educations_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `educations_id`),
  INDEX `fk_user_profile_has_educations_educations1_idx` (`educations_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_educations_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_educations_educations1`
    FOREIGN KEY (`educations_id`)
    REFERENCES `incubadora_c11`.`educations` (`id`),
  CONSTRAINT `fk_user_profile_has_educations_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_skills` (
  `user_profile_id` INT NOT NULL,
  `skills_id` INT NOT NULL,
  `level_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `skills_id`),
  INDEX `fk_user_profile_has_skills_skills1_idx` (`skills_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_skills_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_skills_level1_idx` (`level_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_skills_level1`
    FOREIGN KEY (`level_id`)
    REFERENCES `incubadora_c11`.`level` (`id`),
  CONSTRAINT `fk_user_profile_has_skills_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `incubadora_c11`.`skills` (`id`),
  CONSTRAINT `fk_user_profile_has_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_soft_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_soft_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_soft_skills` (
  `user_profile_id` INT NOT NULL,
  `soft_skills_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `soft_skills_id`),
  INDEX `fk_user_profile_has_soft_skills_soft_skills1_idx` (`soft_skills_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_soft_skills_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_soft_skills_soft_skills1`
    FOREIGN KEY (`soft_skills_id`)
    REFERENCES `incubadora_c11`.`soft_skills` (`id`),
  CONSTRAINT `fk_user_profile_has_soft_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`visas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`visas` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`visas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) CHARACTER SET 'utf8mb3' NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_visas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_visas` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_visas` (
  `user_profile_id` INT NOT NULL,
  `visas_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `visas_id`),
  INDEX `fk_user_profile_has_visas_visas1_idx` (`visas_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_visas_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_visas_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`),
  CONSTRAINT `fk_user_profile_has_visas_visas1`
    FOREIGN KEY (`visas_id`)
    REFERENCES `incubadora_c11`.`visas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_aviabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_aviabilities` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_aviabilities` (
  `user_profile_id` INT NOT NULL,
  `aviabilities_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `aviabilities_id`),
  INDEX `fk_user_profile_has_aviabilities_aviabilities1_idx` (`aviabilities_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_aviabilities_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_aviabilities_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_aviabilities_aviabilities1`
    FOREIGN KEY (`aviabilities_id`)
    REFERENCES `incubadora_c11`.`aviabilities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
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
Insert Into statuses VALUES
(1,'Administrador'),
(2,'Usuario Incompleto'),
(3,'Usuario Completo'),
(4,'Postulante Activo'),
(5,'Postulante Job ready ');

insert into work_mode values (1,'Quiero trabajar desde mi ciudad');
insert into work_mode values (2,'Disponible para migrar dentro de mi pais');
insert into work_mode values (3,'Disponible para migrar a otro pais');

insert into employment_statuses values (1, 'Cesante, busco empleo en TI por primera vez');
insert into employment_statuses values (2, 'Cesante, ya he trabajado antes en TI');
insert into employment_statuses values (3, 'Tengo trabajo en TI, pero busco otro');
insert into employment_statuses values (4, 'Trabajo en otra area, pero busco en TI');

insert into aviabilities values (1, 'Full time');
insert into aviabilities values (2, 'Part time');
insert into aviabilities values (3, 'Freelancer');

insert into visas values (1, 'Estados unidos');
insert into visas values (2, 'Union Europea');
insert into visas values (3, 'Mi Pais');
insert into visas values (4, 'Otros');

insert into insitutions values (1, 'Universidad');
insert into insitutions values (2, 'Instituto Profesional');
insert into insitutions values (3, 'Educacion Media');
insert into insitutions values (4, 'Educacion Basica');
insert into insitutions values (5, 'Bootcamp');

insert into level values (1, 1);
insert into level values (2, 2);
insert into level values (3, 3);

INSERT INTO soft_skills (id, name) VALUES   (1, 'Capacidad de respuesta'),   
(2, 'Adaptabilidad'),   
(3, 'Atencion a los detalles'),   
(4, 'Colaboracion'),   
(5, 'Habilidad para las comunicaciones'),   
(6, 'Resolucion de conflictos'),   
(7, 'Creatividad'),   
(8, 'Pensamiento critico'),   
(9, 'Inteligencia emocional'),   
(10, 'Empatia'),   
(11, 'Flexibilidad'),   
(12, 'Innovacion'),   
(13, 'Liderazgo'),   
(14, 'Organizacion'),   
(15, 'Paciencia'),   
(16, 'Habilidades para socializar'),   
(17, 'Resolucion de problemas'),   
(18, 'Responsabilidad'),   
(19, 'Autoconciencia'),   
(20, 'Pensamiento estrategico'),   
(21, 'Trabajo en equipo'),   
(22, 'Gestion del tiempo'),   
(23, 'Etica laboral');

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
