-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: routinee
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coursegrade`
--

DROP TABLE IF EXISTS `coursegrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coursegrade` (
  `courseID` int NOT NULL,
  `userUniqueID` int NOT NULL,
  `courseDivision` int NOT NULL,
  `courseGradeCount` int NOT NULL,
  `maxGradeCreteria` int NOT NULL,
  `courseScore` double NOT NULL,
  `courseGradeID` int NOT NULL AUTO_INCREMENT,
  `courseSemester` varchar(25) NOT NULL,
  PRIMARY KEY (`courseGradeID`),
  KEY `courseID` (`courseID`),
  KEY `userUniqueID` (`userUniqueID`),
  CONSTRAINT `coursegrade_ibfk_1` FOREIGN KEY (`courseID`) REFERENCES `timetable` (`courseID`),
  CONSTRAINT `coursegrade_ibfk_2` FOREIGN KEY (`userUniqueID`) REFERENCES `user` (`userUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coursegrade`
--

LOCK TABLES `coursegrade` WRITE;
/*!40000 ALTER TABLE `coursegrade` DISABLE KEYS */;
/*!40000 ALTER TABLE `coursegrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dday`
--

DROP TABLE IF EXISTS `dday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dday` (
  `dDayID` int NOT NULL AUTO_INCREMENT,
  `dDayContent` text NOT NULL,
  `dDayStartDate` datetime DEFAULT NULL,
  `dDayEndDate` datetime DEFAULT NULL,
  PRIMARY KEY (`dDayID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dday`
--

LOCK TABLES `dday` WRITE;
/*!40000 ALTER TABLE `dday` DISABLE KEYS */;
/*!40000 ALTER TABLE `dday` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `followerID` int NOT NULL,
  `followingID` int NOT NULL,
  `followUniqueID` int NOT NULL AUTO_INCREMENT,
  `followMessage` text NOT NULL,
  `followAccepted` int NOT NULL,
  PRIMARY KEY (`followUniqueID`),
  KEY `followerID` (`followerID`),
  KEY `followingID` (`followingID`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`followerID`) REFERENCES `user` (`userUniqueID`),
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`followingID`) REFERENCES `user` (`userUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `goal`
--

DROP TABLE IF EXISTS `goal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `goal` (
  `goalID` int NOT NULL AUTO_INCREMENT,
  `goalContent` text NOT NULL,
  `goalStartDate` datetime NOT NULL,
  `goalEndDate` datetime NOT NULL,
  `goalAchieved` varchar(45) NOT NULL,
  PRIMARY KEY (`goalID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `goal`
--

LOCK TABLES `goal` WRITE;
/*!40000 ALTER TABLE `goal` DISABLE KEYS */;
/*!40000 ALTER TABLE `goal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `courseID` int NOT NULL AUTO_INCREMENT,
  `userUniqueID` int NOT NULL,
  `courseName` varchar(50) DEFAULT NULL,
  `courseProfessor` varchar(50) DEFAULT NULL,
  `courseStartTime` int NOT NULL,
  `courseEndTime` int NOT NULL,
  `courseGradeCount` int DEFAULT NULL,
  `courseRoom` varchar(50) DEFAULT NULL,
  `courseDivision` int DEFAULT NULL,
  `courseWeekday` varchar(10) NOT NULL,
  `courseDistribution` int NOT NULL,
  PRIMARY KEY (`courseID`),
  KEY `userUniqueID` (`userUniqueID`),
  CONSTRAINT `timetable_ibfk_1` FOREIGN KEY (`userUniqueID`) REFERENCES `user` (`userUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todocomment`
--

DROP TABLE IF EXISTS `todocomment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todocomment` (
  `commentID` int NOT NULL AUTO_INCREMENT,
  `commentPosterID` int NOT NULL,
  `commentContent` text NOT NULL,
  `postID` int NOT NULL,
  `commentClass` int NOT NULL,
  `commentOrder` int NOT NULL,
  `commentGroup` int NOT NULL,
  `commentEmoji` int NOT NULL,
  PRIMARY KEY (`commentID`),
  KEY `commentPosterID` (`commentPosterID`),
  KEY `postID` (`postID`),
  CONSTRAINT `todocomment_ibfk_1` FOREIGN KEY (`commentPosterID`) REFERENCES `user` (`userUniqueID`),
  CONSTRAINT `todocomment_ibfk_2` FOREIGN KEY (`postID`) REFERENCES `todoshareboard` (`postID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todocomment`
--

LOCK TABLES `todocomment` WRITE;
/*!40000 ALTER TABLE `todocomment` DISABLE KEYS */;
/*!40000 ALTER TABLE `todocomment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todolist`
--

DROP TABLE IF EXISTS `todolist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todolist` (
  `userUniqueID` int NOT NULL,
  `todoDisclosure` int NOT NULL,
  `todoDate` datetime NOT NULL,
  `todoUniqueID` int NOT NULL AUTO_INCREMENT,
  `todoItem` text NOT NULL,
  `todoDiary` text NOT NULL,
  PRIMARY KEY (`todoUniqueID`),
  KEY `userUniqueID` (`userUniqueID`),
  CONSTRAINT `todolist_ibfk_1` FOREIGN KEY (`userUniqueID`) REFERENCES `user` (`userUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todolist`
--

LOCK TABLES `todolist` WRITE;
/*!40000 ALTER TABLE `todolist` DISABLE KEYS */;
/*!40000 ALTER TABLE `todolist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `todoshareboard`
--

DROP TABLE IF EXISTS `todoshareboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `todoshareboard` (
  `postID` int NOT NULL AUTO_INCREMENT,
  `todoID` int NOT NULL,
  `postContent` text NOT NULL,
  PRIMARY KEY (`postID`),
  KEY `todoID` (`todoID`),
  CONSTRAINT `todoshareboard_ibfk_1` FOREIGN KEY (`todoID`) REFERENCES `todolist` (`todoUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `todoshareboard`
--

LOCK TABLES `todoshareboard` WRITE;
/*!40000 ALTER TABLE `todoshareboard` DISABLE KEYS */;
/*!40000 ALTER TABLE `todoshareboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userPassword` varchar(50) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userNick` varchar(50) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `userEmailHash` varchar(64) NOT NULL,
  `userID` varchar(50) NOT NULL,
  `userUniqueID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userUniqueID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-15 16:34:08
