-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: warehouse_database
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `cityID` int NOT NULL,
  `city` char(20) NOT NULL,
  `state` char(20) NOT NULL,
  PRIMARY KEY (`cityID`)
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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `CNO` int NOT NULL,
  `CNAME` char(50) NOT NULL,
  `ADDR` varchar(50) NOT NULL,
  `CU_CITY` char(20) NOT NULL,
  PRIMARY KEY (`CNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_order_relation`
--

DROP TABLE IF EXISTS `item_order_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_order_relation` (
  `ITEMNO` int NOT NULL,
  `ONO` int NOT NULL,
  UNIQUE KEY `ITEMNO` (`ITEMNO`,`ONO`),
  KEY `ONO` (`ONO`),
  CONSTRAINT `item_order_relation_ibfk_1` FOREIGN KEY (`ONO`) REFERENCES `orders` (`ONO`),
  CONSTRAINT `item_order_relation_ibfk_2` FOREIGN KEY (`ITEMNO`) REFERENCES `items` (`ITEMNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_order_relation`
--

LOCK TABLES `item_order_relation` WRITE;
/*!40000 ALTER TABLE `item_order_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_order_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_store_relation`
--

DROP TABLE IF EXISTS `item_store_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `item_store_relation` (
  `ITEMNO` int NOT NULL,
  `SID` int NOT NULL,
  UNIQUE KEY `ITEMNO` (`ITEMNO`,`SID`),
  KEY `SID` (`SID`),
  CONSTRAINT `item_store_relation_ibfk_1` FOREIGN KEY (`SID`) REFERENCES `stores` (`SID`),
  CONSTRAINT `item_store_relation_ibfk_2` FOREIGN KEY (`ITEMNO`) REFERENCES `items` (`ITEMNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_store_relation`
--

LOCK TABLES `item_store_relation` WRITE;
/*!40000 ALTER TABLE `item_store_relation` DISABLE KEYS */;
/*!40000 ALTER TABLE `item_store_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `ITEMNO` int NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `WEIGHT` decimal(5,2) NOT NULL,
  `COST` decimal(5,2) NOT NULL,
  PRIMARY KEY (`ITEMNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `ONO` int NOT NULL,
  `ODATE` date NOT NULL,
  `CNO` int NOT NULL,
  PRIMARY KEY (`ONO`),
  KEY `CNO` (`CNO`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`CNO`) REFERENCES `customer` (`CNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `SID` int NOT NULL,
  `STORE_NAME` char(20) NOT NULL,
  `LOCATION_CITY` char(20) NOT NULL,
  `WID` int NOT NULL,
  PRIMARY KEY (`SID`),
  KEY `WID` (`WID`),
  CONSTRAINT `stores_ibfk_1` FOREIGN KEY (`WID`) REFERENCES `warehouses` (`WID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `warehouses`
--

DROP TABLE IF EXISTS `warehouses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `warehouses` (
  `WID` int NOT NULL,
  `WNAME` char(30) NOT NULL,
  `LOCATION` char(20) DEFAULT NULL,
  `cityID` int NOT NULL,
  PRIMARY KEY (`WID`),
  KEY `cityID` (`cityID`),
  CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`cityID`) REFERENCES `cities` (`cityID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `warehouses`
--

LOCK TABLES `warehouses` WRITE;
/*!40000 ALTER TABLE `warehouses` DISABLE KEYS */;
/*!40000 ALTER TABLE `warehouses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-12 21:06:52
