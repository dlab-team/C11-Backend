-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema incubadora_c11
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `incubadora_c11` ;

-- -----------------------------------------------------
-- Schema incubadora_c11
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `incubadora_c11` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `incubadora_c11` ;

-- -----------------------------------------------------
-- Table `incubadora_c11`.`countries`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`countries` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`countries` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`states`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`states` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`states` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `countries_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_states_countries1_idx` (`countries_id` ASC) VISIBLE,
  CONSTRAINT `fk_states_countries1`
    FOREIGN KEY (`countries_id`)
    REFERENCES `incubadora_c11`.`countries` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`cities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`cities` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`cities` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `states_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_cities_states_idx` (`states_id` ASC) VISIBLE,
  CONSTRAINT `fk_cities_states`
    FOREIGN KEY (`states_id`)
    REFERENCES `incubadora_c11`.`states` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`companies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`companies` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`companies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `company` VARCHAR(45) NOT NULL,
  `reference_user` VARCHAR(45) NOT NULL,
  `reference_email` VARCHAR(45) NOT NULL,
  `reference_phone` VARCHAR(45) NOT NULL,
  `comment` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`companies_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`companies_desired_roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`companies_desired_roles` (
  `companies_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  INDEX `fk_companies_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_companies_has_roles_companies1_idx` (`companies_id` ASC) VISIBLE,
  PRIMARY KEY (`companies_id`, `roles_id`),
  CONSTRAINT `fk_companies_has_roles_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `incubadora_c11`.`companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `incubadora_c11`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`statuses` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` TEXT NOT NULL,
  `roles_id` INT NULL,
  `statuses_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_user_statuses1_idx` (`statuses_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `incubadora_c11`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_statuses1`
    FOREIGN KEY (`statuses_id`)
    REFERENCES `incubadora_c11`.`statuses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`type_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`type_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`type_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type_skills_id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_skills_type_skills1_idx` (`type_skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_skills_type_skills1`
    FOREIGN KEY (`type_skills_id`)
    REFERENCES `incubadora_c11`.`type_skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`work_mode`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`work_mode` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`work_mode` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`employment_statuses`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`employment_statuses` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`employment_statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`aviabilities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`aviabilities` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`aviabilities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`english`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`english` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`english` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `level` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gender` TINYINT NOT NULL,
  `url_curriculum_vitae` VARCHAR(100) NULL,
  `url_repository` VARCHAR(100) NULL,
  `url_portfolio` VARCHAR(100) NULL,
  `url_linkedin` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NOT NULL,
  `years_of_experience` VARCHAR(45) NOT NULL,
  `proud_experience` TEXT NULL,
  `relocation` INT NOT NULL,
  `salary_expectations` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `work_mode_id` INT NOT NULL,
  `employment_statuses_id` INT NOT NULL,
  `aviabilities_id` INT NOT NULL,
  `english_id` INT NOT NULL,
  `cities_id` INT NOT NULL,
  `file_curriculum_vitae` VARCHAR(100) NULL,
  `max_education_level` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_profile_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_user_profile_work_mode1_idx` (`work_mode_id` ASC) VISIBLE,
  INDEX `fk_user_profile_employment_statuses1_idx` (`employment_statuses_id` ASC) VISIBLE,
  INDEX `fk_user_profile_aviabilities1_idx` (`aviabilities_id` ASC) VISIBLE,
  INDEX `fk_user_profile_english1_idx` (`english_id` ASC) VISIBLE,
  INDEX `fk_user_profile_cities1_idx` (`cities_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `incubadora_c11`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_work_mode1`
    FOREIGN KEY (`work_mode_id`)
    REFERENCES `incubadora_c11`.`work_mode` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_employment_statuses1`
    FOREIGN KEY (`employment_statuses_id`)
    REFERENCES `incubadora_c11`.`employment_statuses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_aviabilities1`
    FOREIGN KEY (`aviabilities_id`)
    REFERENCES `incubadora_c11`.`aviabilities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_english1`
    FOREIGN KEY (`english_id`)
    REFERENCES `incubadora_c11`.`english` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_cities1`
    FOREIGN KEY (`cities_id`)
    REFERENCES `incubadora_c11`.`cities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`level`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`level` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`level` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


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
  CONSTRAINT `fk_user_profile_has_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_skills_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `incubadora_c11`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_skills_level1`
    FOREIGN KEY (`level_id`)
    REFERENCES `incubadora_c11`.`level` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_desired_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_desired_roles` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_desired_roles` (
  `user_profile_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  INDEX `fk_user_profile_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_roles_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  PRIMARY KEY (`user_profile_id`, `roles_id`),
  CONSTRAINT `fk_user_profile_has_roles_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `incubadora_c11`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`visas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`visas` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`visas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


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
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_visas_visas1`
    FOREIGN KEY (`visas_id`)
    REFERENCES `incubadora_c11`.`visas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`soft_skills`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`soft_skills` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`soft_skills` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


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
  CONSTRAINT `fk_user_profile_has_soft_skills_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_soft_skills_soft_skills1`
    FOREIGN KEY (`soft_skills_id`)
    REFERENCES `incubadora_c11`.`soft_skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`tests`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`tests` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`tests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`questions` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`tests_has_questions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`tests_has_questions` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`tests_has_questions` (
  `tests_id` INT NOT NULL,
  `questions_id` INT NOT NULL,
  PRIMARY KEY (`tests_id`, `questions_id`),
  INDEX `fk_tests_has_questions_questions1_idx` (`questions_id` ASC) VISIBLE,
  INDEX `fk_tests_has_questions_tests1_idx` (`tests_id` ASC) VISIBLE,
  CONSTRAINT `fk_tests_has_questions_tests1`
    FOREIGN KEY (`tests_id`)
    REFERENCES `incubadora_c11`.`tests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tests_has_questions_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `incubadora_c11`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`answers` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`answers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `correct_answer` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`questions_has_answers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`questions_has_answers` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`questions_has_answers` (
  `questions_id` INT NOT NULL,
  `answers_id` INT NOT NULL,
  PRIMARY KEY (`questions_id`, `answers_id`),
  INDEX `fk_questions_has_answers_answers1_idx` (`answers_id` ASC) VISIBLE,
  INDEX `fk_questions_has_answers_questions1_idx` (`questions_id` ASC) VISIBLE,
  CONSTRAINT `fk_questions_has_answers_questions1`
    FOREIGN KEY (`questions_id`)
    REFERENCES `incubadora_c11`.`questions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_questions_has_answers_answers1`
    FOREIGN KEY (`answers_id`)
    REFERENCES `incubadora_c11`.`answers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`user_profile_has_tests`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`user_profile_has_tests` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`user_profile_has_tests` (
  `user_profile_id` INT NOT NULL,
  `tests_id` INT NOT NULL,
  `skills_id` INT NOT NULL,
  PRIMARY KEY (`user_profile_id`, `tests_id`),
  INDEX `fk_user_profile_has_tests_tests1_idx` (`tests_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_tests_user_profile1_idx` (`user_profile_id` ASC) VISIBLE,
  INDEX `fk_user_profile_has_tests_skills1_idx` (`skills_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_profile_has_tests_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_tests_tests1`
    FOREIGN KEY (`tests_id`)
    REFERENCES `incubadora_c11`.`tests` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_tests_skills1`
    FOREIGN KEY (`skills_id`)
    REFERENCES `incubadora_c11`.`skills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`insitutions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`insitutions` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`insitutions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `incubadora_c11`.`educations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `incubadora_c11`.`educations` ;

CREATE TABLE IF NOT EXISTS `incubadora_c11`.`educations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carrer` VARCHAR(45) NOT NULL,
  `institution_name` VARCHAR(45) NOT NULL,
  `insitutions_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_educations_insitutions1_idx` (`insitutions_id` ASC) VISIBLE,
  CONSTRAINT `fk_educations_insitutions1`
    FOREIGN KEY (`insitutions_id`)
    REFERENCES `incubadora_c11`.`insitutions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


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
  CONSTRAINT `fk_user_profile_has_educations_user_profile1`
    FOREIGN KEY (`user_profile_id`)
    REFERENCES `incubadora_c11`.`user_profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_profile_has_educations_educations1`
    FOREIGN KEY (`educations_id`)
    REFERENCES `incubadora_c11`.`educations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


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
    REFERENCES `incubadora_c11`.`companies_desired_roles` (`companies_id` , `roles_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_desired_roles_has_user_profile_desired_roles_use1`
    FOREIGN KEY (`user_profile_desired_roles_user_profile_id` , `user_profile_desired_roles_roles_id`)
    REFERENCES `incubadora_c11`.`user_profile_desired_roles` (`user_profile_id` , `roles_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
