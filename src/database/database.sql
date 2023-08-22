-- MySQL dump 10.13  Distrib 8.1.0, for Linux (x86_64)
--
-- Host: localhost    Database: incubadora_c11
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alternatives`
--

DROP TABLE IF EXISTS `alternatives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternatives` (
  `id` int NOT NULL,
  `alternative_a` varchar(100) DEFAULT NULL,
  `alternative_b` varchar(100) DEFAULT NULL,
  `alternative_c` varchar(100) DEFAULT NULL,
  `alternative_d` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alternatives`
--

LOCK TABLES `alternatives` WRITE;
/*!40000 ALTER TABLE `alternatives` DISABLE KEYS */;
/*!40000 ALTER TABLE `alternatives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `availabilities`
--

DROP TABLE IF EXISTS `availabilities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `availabilities` (
  `id` int NOT NULL,
  `availability` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availabilities`
--

LOCK TABLES `availabilities` WRITE;
/*!40000 ALTER TABLE `availabilities` DISABLE KEYS */;
/*!40000 ALTER TABLE `availabilities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificates`
--

DROP TABLE IF EXISTS `certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificates` (
  `id` int NOT NULL,
  `user_profile_id` int DEFAULT NULL,
  `institution` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `issue_date` date DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_id` (`user_profile_id`),
  CONSTRAINT `certificates_ibfk_1` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificates`
--

LOCK TABLES `certificates` WRITE;
/*!40000 ALTER TABLE `certificates` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `states_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cities_states1_idx` (`states_id`),
  CONSTRAINT `fk_cities_states1` FOREIGN KEY (`states_id`) REFERENCES `states` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` int NOT NULL,
  `desired_positions` int DEFAULT NULL,
  `company` varchar(50) NOT NULL,
  `reference_user` varchar(50) DEFAULT NULL,
  `reference_email` varchar(50) DEFAULT NULL,
  `reference_phone` varchar(50) DEFAULT NULL,
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `desired_positions` (`desired_positions`),
  CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`desired_positions`) REFERENCES `desired_positions` (`id`),
  CONSTRAINT `companies_ibfk_2` FOREIGN KEY (`id`) REFERENCES `matches` (`company`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `desired_positions`
--

DROP TABLE IF EXISTS `desired_positions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `desired_positions` (
  `id` int NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desired_positions`
--

LOCK TABLES `desired_positions` WRITE;
/*!40000 ALTER TABLE `desired_positions` DISABLE KEYS */;
/*!40000 ALTER TABLE `desired_positions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educations`
--

DROP TABLE IF EXISTS `educations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educations` (
  `id` int NOT NULL,
  `user_profile_id` int DEFAULT NULL,
  `institution` varchar(100) NOT NULL,
  `degree` varchar(100) NOT NULL,
  `academic_area` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_id` (`user_profile_id`),
  CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educations`
--

LOCK TABLES `educations` WRITE;
/*!40000 ALTER TABLE `educations` DISABLE KEYS */;
/*!40000 ALTER TABLE `educations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employment_statuses`
--

DROP TABLE IF EXISTS `employment_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employment_statuses` (
  `id` int NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employment_statuses`
--

LOCK TABLES `employment_statuses` WRITE;
/*!40000 ALTER TABLE `employment_statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `employment_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `levels`
--

DROP TABLE IF EXISTS `levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `levels` (
  `id` int NOT NULL,
  `level` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `levels`
--

LOCK TABLES `levels` WRITE;
/*!40000 ALTER TABLE `levels` DISABLE KEYS */;
/*!40000 ALTER TABLE `levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `matches`
--

DROP TABLE IF EXISTS `matches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `matches` (
  `id` int NOT NULL,
  `company` int DEFAULT NULL,
  `user_profiles` int DEFAULT NULL,
  `status` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company` (`company`),
  KEY `user_profiles` (`user_profiles`),
  CONSTRAINT `match_company_fk` FOREIGN KEY (`company`) REFERENCES `companies` (`id`),
  CONSTRAINT `match_user_profiles_fk` FOREIGN KEY (`user_profiles`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `matches_ibfk_1` FOREIGN KEY (`company`) REFERENCES `companies` (`id`),
  CONSTRAINT `matches_ibfk_2` FOREIGN KEY (`user_profiles`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `matches`
--

LOCK TABLES `matches` WRITE;
/*!40000 ALTER TABLE `matches` DISABLE KEYS */;
/*!40000 ALTER TABLE `matches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiestions`
--

DROP TABLE IF EXISTS `quiestions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiestions` (
  `id` int NOT NULL,
  `statement` varchar(300) DEFAULT NULL,
  `alternatives` int DEFAULT NULL,
  `answer` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `alternatives` (`alternatives`),
  CONSTRAINT `quiestions_ibfk_1` FOREIGN KEY (`alternatives`) REFERENCES `alternatives` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiestions`
--

LOCK TABLES `quiestions` WRITE;
/*!40000 ALTER TABLE `quiestions` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiestions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Desarrollador Front End'),(2,'Desarrollador Full Stack / Backend'),(3,'DiseÃ±ador UX/UI'),(4,'Analista QA'),(5,'Desarrollador Mobile'),(6,'Analista de Datos'),(7,'Otra');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` int NOT NULL,
  `type_skills_id` int DEFAULT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_skills_id` (`type_skills_id`),
  CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`type_skills_id`) REFERENCES `type_skills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_skills`
--

DROP TABLE IF EXISTS `soft_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_skills` (
  `id` int NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_skills`
--

LOCK TABLES `soft_skills` WRITE;
/*!40000 ALTER TABLE `soft_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `countries_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_states_countries1_idx` (`countries_id`),
  CONSTRAINT `fk_states_countries1` FOREIGN KEY (`countries_id`) REFERENCES `countries` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `id` int NOT NULL,
  `user_profile_skills` int DEFAULT NULL,
  `quiestion` int DEFAULT NULL,
  `total` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_skills` (`user_profile_skills`),
  KEY `quiestion` (`quiestion`),
  CONSTRAINT `tests_ibfk_1` FOREIGN KEY (`user_profile_skills`) REFERENCES `user_profile_skills` (`id`),
  CONSTRAINT `tests_ibfk_2` FOREIGN KEY (`quiestion`) REFERENCES `quiestions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_skills`
--

DROP TABLE IF EXISTS `type_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_skills` (
  `id` int NOT NULL,
  `description` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_skills`
--

LOCK TABLES `type_skills` WRITE;
/*!40000 ALTER TABLE `type_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `type_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_languages`
--

DROP TABLE IF EXISTS `user_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_languages` (
  `id` int NOT NULL,
  `languages_id` int DEFAULT NULL,
  `user_profile_id` int DEFAULT NULL,
  `level_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `languages_id` (`languages_id`),
  KEY `user_profile_id` (`user_profile_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `user_languages_ibfk_1` FOREIGN KEY (`languages_id`) REFERENCES `languages` (`id`),
  CONSTRAINT `user_languages_ibfk_2` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `user_languages_ibfk_3` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_languages`
--

LOCK TABLES `user_languages` WRITE;
/*!40000 ALTER TABLE `user_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_skills`
--

DROP TABLE IF EXISTS `user_profile_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile_skills` (
  `id` int NOT NULL,
  `user_profile_id` int DEFAULT NULL,
  `skills_id` int DEFAULT NULL,
  `level_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_id` (`user_profile_id`),
  KEY `skills_id` (`skills_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `user_profile_skills_ibfk_1` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `user_profile_skills_ibfk_2` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`),
  CONSTRAINT `user_profile_skills_ibfk_3` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_skills`
--

LOCK TABLES `user_profile_skills` WRITE;
/*!40000 ALTER TABLE `user_profile_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_soft_skills`
--

DROP TABLE IF EXISTS `user_profile_soft_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile_soft_skills` (
  `id` int NOT NULL,
  `soft_skill_id` int DEFAULT NULL,
  `user_profile_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `soft_skill_id` (`soft_skill_id`),
  KEY `user_profile_id` (`user_profile_id`),
  CONSTRAINT `user_profile_soft_skills_ibfk_1` FOREIGN KEY (`soft_skill_id`) REFERENCES `soft_skills` (`id`),
  CONSTRAINT `user_profile_soft_skills_ibfk_2` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_soft_skills`
--

LOCK TABLES `user_profile_soft_skills` WRITE;
/*!40000 ALTER TABLE `user_profile_soft_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile_soft_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profiles` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `desired_position_id` int DEFAULT NULL,
  `employment_status_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `url_curriculum_vitae` varchar(200) DEFAULT NULL,
  `url_linkedin` varchar(200) DEFAULT NULL,
  `url_repository` varchar(200) DEFAULT NULL,
  `url_portfolio` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `year_of_experiences` int DEFAULT NULL,
  `work_mode` int DEFAULT NULL,
  `availability` int DEFAULT NULL,
  `relocation` varchar(100) DEFAULT NULL,
  `ideal_job` varchar(300) DEFAULT NULL,
  `proud_experience` varchar(300) DEFAULT NULL,
  `salary_expectation` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `desired_position_id` (`desired_position_id`),
  KEY `employment_status_id` (`employment_status_id`),
  KEY `city_id` (`city_id`),
  KEY `work_mode` (`work_mode`),
  KEY `availability` (`availability`),
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_profiles_ibfk_2` FOREIGN KEY (`desired_position_id`) REFERENCES `desired_positions` (`id`),
  CONSTRAINT `user_profiles_ibfk_3` FOREIGN KEY (`employment_status_id`) REFERENCES `employment_statuses` (`id`),
  CONSTRAINT `user_profiles_ibfk_4` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `user_profiles_ibfk_5` FOREIGN KEY (`work_mode`) REFERENCES `work_modes` (`id`),
  CONSTRAINT `user_profiles_ibfk_6` FOREIGN KEY (`availability`) REFERENCES `availabilities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `role_id` int DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `fk_users_status1_idx` (`status_id`),
  CONSTRAINT `fk_users_status1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visas`
--

DROP TABLE IF EXISTS `visas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visas` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visas`
--

LOCK TABLES `visas` WRITE;
/*!40000 ALTER TABLE `visas` DISABLE KEYS */;
INSERT INTO `visas` VALUES (1,'Estados Unidos'),(2,'Unin Europea'),(3,'Mi pas de residencia actual'),(4,'Estados Unidos');
/*!40000 ALTER TABLE `visas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visas_has_user_profiles`
--

DROP TABLE IF EXISTS `visas_has_user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visas_has_user_profiles` (
  `visas_id` int NOT NULL,
  `user_profiles_id` int NOT NULL,
  PRIMARY KEY (`visas_id`,`user_profiles_id`),
  KEY `fk_visas_has_user_profiles_user_profiles1_idx` (`user_profiles_id`),
  KEY `fk_visas_has_user_profiles_visas1_idx` (`visas_id`),
  CONSTRAINT `fk_visas_has_user_profiles_user_profiles1` FOREIGN KEY (`user_profiles_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `fk_visas_has_user_profiles_visas1` FOREIGN KEY (`visas_id`) REFERENCES `visas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visas_has_user_profiles`
--

LOCK TABLES `visas_has_user_profiles` WRITE;
/*!40000 ALTER TABLE `visas_has_user_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `visas_has_user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_modes`
--

DROP TABLE IF EXISTS `work_modes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_modes` (
  `id` int NOT NULL,
  `work_mode` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_modes`
--

LOCK TABLES `work_modes` WRITE;
/*!40000 ALTER TABLE `work_modes` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_modes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-20  0:53:02
DROP TABLE IF EXISTS `user_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_languages` (
  `id` int NOT NULL,
  `languages_id` int DEFAULT NULL,
  `user_profile_id` int DEFAULT NULL,
  `level_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `languages_id` (`languages_id`),
  KEY `user_profile_id` (`user_profile_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `user_languages_ibfk_1` FOREIGN KEY (`languages_id`) REFERENCES `languages` (`id`),
  CONSTRAINT `user_languages_ibfk_2` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `user_languages_ibfk_3` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_languages`
--

LOCK TABLES `user_languages` WRITE;
/*!40000 ALTER TABLE `user_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_skills`
--

DROP TABLE IF EXISTS `user_profile_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile_skills` (
  `id` int NOT NULL,
  `user_profile_id` int DEFAULT NULL,
  `skills_id` int DEFAULT NULL,
  `level_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_profile_id` (`user_profile_id`),
  KEY `skills_id` (`skills_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `user_profile_skills_ibfk_1` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `user_profile_skills_ibfk_2` FOREIGN KEY (`skills_id`) REFERENCES `skills` (`id`),
  CONSTRAINT `user_profile_skills_ibfk_3` FOREIGN KEY (`level_id`) REFERENCES `levels` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_skills`
--

LOCK TABLES `user_profile_skills` WRITE;
/*!40000 ALTER TABLE `user_profile_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profile_soft_skills`
--

DROP TABLE IF EXISTS `user_profile_soft_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profile_soft_skills` (
  `id` int NOT NULL,
  `soft_skill_id` int DEFAULT NULL,
  `user_profile_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `soft_skill_id` (`soft_skill_id`),
  KEY `user_profile_id` (`user_profile_id`),
  CONSTRAINT `user_profile_soft_skills_ibfk_1` FOREIGN KEY (`soft_skill_id`) REFERENCES `soft_skills` (`id`),
  CONSTRAINT `user_profile_soft_skills_ibfk_2` FOREIGN KEY (`user_profile_id`) REFERENCES `user_profiles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profile_soft_skills`
--

LOCK TABLES `user_profile_soft_skills` WRITE;
/*!40000 ALTER TABLE `user_profile_soft_skills` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profile_soft_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_profiles`
--

DROP TABLE IF EXISTS `user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_profiles` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `desired_position_id` int DEFAULT NULL,
  `employment_status_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `url_curriculum_vitae` varchar(200) DEFAULT NULL,
  `url_linkedin` varchar(200) DEFAULT NULL,
  `url_repository` varchar(200) DEFAULT NULL,
  `url_portfolio` varchar(200) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `year_of_experiences` int DEFAULT NULL,
  `work_mode` int DEFAULT NULL,
  `availability` int DEFAULT NULL,
  `relocation` varchar(100) DEFAULT NULL,
  `ideal_job` varchar(300) DEFAULT NULL,
  `proud_experience` varchar(300) DEFAULT NULL,
  `salary_expectation` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `desired_position_id` (`desired_position_id`),
  KEY `employment_status_id` (`employment_status_id`),
  KEY `city_id` (`city_id`),
  KEY `work_mode` (`work_mode`),
  KEY `availability` (`availability`),
  CONSTRAINT `user_profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_profiles_ibfk_2` FOREIGN KEY (`desired_position_id`) REFERENCES `desired_positions` (`id`),
  CONSTRAINT `user_profiles_ibfk_3` FOREIGN KEY (`employment_status_id`) REFERENCES `employment_statuses` (`id`),
  CONSTRAINT `user_profiles_ibfk_4` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`),
  CONSTRAINT `user_profiles_ibfk_5` FOREIGN KEY (`work_mode`) REFERENCES `work_modes` (`id`),
  CONSTRAINT `user_profiles_ibfk_6` FOREIGN KEY (`availability`) REFERENCES `availabilities` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_profiles`
--

LOCK TABLES `user_profiles` WRITE;
/*!40000 ALTER TABLE `user_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL,
  `role_id` int DEFAULT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(60) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `status_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  KEY `fk_users_status1_idx` (`status_id`),
  CONSTRAINT `fk_users_status1` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visas`
--

DROP TABLE IF EXISTS `visas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visas` (
  `id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visas`
--

LOCK TABLES `visas` WRITE;
/*!40000 ALTER TABLE `visas` DISABLE KEYS */;
INSERT INTO `visas` VALUES (1,'Estados Unidos'),(2,'Unin Europea'),(3,'Mi pas de residencia actual'),(4,'Estados Unidos');
/*!40000 ALTER TABLE `visas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visas_has_user_profiles`
--

DROP TABLE IF EXISTS `visas_has_user_profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `visas_has_user_profiles` (
  `visas_id` int NOT NULL,
  `user_profiles_id` int NOT NULL,
  PRIMARY KEY (`visas_id`,`user_profiles_id`),
  KEY `fk_visas_has_user_profiles_user_profiles1_idx` (`user_profiles_id`),
  KEY `fk_visas_has_user_profiles_visas1_idx` (`visas_id`),
  CONSTRAINT `fk_visas_has_user_profiles_user_profiles1` FOREIGN KEY (`user_profiles_id`) REFERENCES `user_profiles` (`id`),
  CONSTRAINT `fk_visas_has_user_profiles_visas1` FOREIGN KEY (`visas_id`) REFERENCES `visas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visas_has_user_profiles`
--

LOCK TABLES `visas_has_user_profiles` WRITE;
/*!40000 ALTER TABLE `visas_has_user_profiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `visas_has_user_profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_modes`
--

DROP TABLE IF EXISTS `work_modes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_modes` (
  `id` int NOT NULL,
  `work_mode` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_modes`
--

LOCK TABLES `work_modes` WRITE;
/*!40000 ALTER TABLE `work_modes` DISABLE KEYS */;
/*!40000 ALTER TABLE `work_modes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-20  0:53:02
