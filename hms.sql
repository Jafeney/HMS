-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-02-21 07:24:35
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hms`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `a_id` int(11) NOT NULL,
  `a_name` varchar(20) DEFAULT NULL,
  `a_pwd` varchar(20) DEFAULT NULL,
  `a_address` varchar(500) DEFAULT NULL,
  `a_loginIP` varchar(20) DEFAULT NULL,
  `a_loginTimes` int(11) DEFAULT NULL,
  `a_email` varchar(20) DEFAULT NULL,
  `a_phone` varchar(15) DEFAULT NULL,
  `a_rank` int(11) DEFAULT NULL,
  `a_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`a_id`, `a_name`, `a_pwd`, `a_address`, `a_loginIP`, `a_loginTimes`, `a_email`, `a_phone`, `a_rank`, `a_isDel`) VALUES
(0, 'seyaney', '123456', '温州医科大学', '127.0.0.1', 45, 'admin@admin.com', '18888888888', 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `carousel_manage`
--

CREATE TABLE IF NOT EXISTS `carousel_manage` (
  `cm_id` int(11) NOT NULL AUTO_INCREMENT,
  `cm_name` varchar(50) NOT NULL,
  `a_id` int(11) DEFAULT NULL,
  `cm_img` varchar(50) DEFAULT NULL,
  `cm_info` varchar(500) NOT NULL,
  `cm_link` varchar(50) DEFAULT NULL,
  `cm_updateTime` datetime DEFAULT NULL,
  `cm_rank` int(11) DEFAULT NULL,
  `cm_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`cm_id`),
  KEY `FK_Reference_14` (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `company_info`
--

CREATE TABLE IF NOT EXISTS `company_info` (
  `ci_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) DEFAULT NULL,
  `t_id` int(11) DEFAULT NULL,
  `ci_name` varchar(50) DEFAULT NULL,
  `ci_logo` varchar(50) DEFAULT NULL,
  `ci_net` varchar(50) DEFAULT NULL,
  `ci_intro` varchar(5000) DEFAULT NULL,
  `ci_tel` varchar(20) DEFAULT NULL,
  `ci_email` varchar(20) DEFAULT NULL,
  `ci_updateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`ci_id`),
  KEY `FK_Reference_15` (`a_id`),
  KEY `FK_Reference_8` (`t_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(20) DEFAULT NULL,
  `c_IDcard` varchar(20) DEFAULT NULL,
  `c_sex` varchar(10) DEFAULT NULL,
  `c_phone` varchar(15) DEFAULT NULL,
  `c_address` varchar(50) DEFAULT NULL,
  `c_upTime` datetime NOT NULL,
  `c_rank` varchar(10) DEFAULT NULL,
  `c_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `customer`
--

INSERT INTO `customer` (`c_id`, `c_name`, `c_IDcard`, `c_sex`, `c_phone`, `c_address`, `c_upTime`, `c_rank`, `c_isDel`) VALUES
(1, '王大宝', '330683199311137019', '男', '18888888888', '温州医科大学', '2016-02-20 04:32:22', '1', 0),
(2, '慕思诚', '330683199311112312', '男', '18888888888', '浙江大学', '2016-02-20 09:28:32', '1', 0),
(3, '小明', '330683199311137017', '男', '18888888888', '温州医科大学', '2016-02-21 10:34:46', '1', 0),
(4, '小花', '33068311911147016', '女', '18888888888', '温州医科大学', '2016-02-21 07:27:30', '1', 0);

-- --------------------------------------------------------

--
-- 表的结构 `gallery`
--

CREATE TABLE IF NOT EXISTS `gallery` (
  `g_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) DEFAULT NULL,
  `g_name` varchar(30) DEFAULT NULL,
  `g_img` varchar(50) DEFAULT NULL,
  `g_info` varchar(1000) DEFAULT NULL,
  `g_link` varchar(50) NOT NULL,
  `g_rank` int(11) DEFAULT NULL,
  `g_isDel` tinyint(1) DEFAULT NULL,
  `g_time` datetime DEFAULT NULL,
  PRIMARY KEY (`g_id`),
  KEY `FK_Reference_11` (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `gallery_detail`
--

CREATE TABLE IF NOT EXISTS `gallery_detail` (
  `gd_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) DEFAULT NULL,
  `g_id` int(11) DEFAULT NULL,
  `gd_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`gd_id`),
  KEY `FK_Reference_10` (`g_id`),
  KEY `FK_Reference_9` (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) DEFAULT NULL,
  `m_content` varchar(500) DEFAULT NULL,
  `m_email` varchar(20) DEFAULT NULL,
  `m_phone` varchar(15) DEFAULT NULL,
  `m_upTime` datetime DEFAULT NULL,
  `m_operateTime` datetime DEFAULT NULL,
  `m_isread` tinyint(1) DEFAULT NULL,
  `m_rank` int(11) DEFAULT NULL,
  `m_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`m_id`),
  KEY `FK_Reference_13` (`a_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`m_id`, `a_id`, `m_content`, `m_email`, `m_phone`, `m_upTime`, `m_operateTime`, `m_isread`, `m_rank`, `m_isDel`) VALUES
(1, 0, '测试1', 'admin@admin.com', '18888888888', '2016-02-20 06:19:39', NULL, 0, 1, 0),
(2, 0, '测试2', '692270687@qq.com', '18888888888', '2016-02-20 16:45:40', NULL, 0, 1, 0),
(3, 0, '测试3', 'admin@admin.com', '18888888888', '2016-02-21 09:29:35', NULL, 0, 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `n_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) DEFAULT NULL,
  `n_title` varchar(200) DEFAULT NULL,
  `n_thumb` varchar(50) DEFAULT NULL,
  `n_content` varchar(5000) DEFAULT NULL,
  `n_upTime` datetime DEFAULT NULL,
  `n_rank` int(11) DEFAULT NULL,
  `n_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`n_id`),
  KEY `FK_Reference_4` (`a_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `o_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_id` int(11) DEFAULT NULL,
  `p_id` int(11) DEFAULT NULL,
  `a_id` int(11) DEFAULT NULL,
  `o_upTime` datetime DEFAULT NULL,
  `o_inDate` date NOT NULL,
  `o_outDate` date NOT NULL,
  `o_days` int(11) NOT NULL,
  `o_total` decimal(10,0) DEFAULT NULL,
  `o_isPay` tinyint(1) DEFAULT NULL,
  `o_rank` int(11) DEFAULT NULL,
  `o_isDel` tinyint(1) DEFAULT NULL,
  `o_operateTime` datetime DEFAULT NULL,
  PRIMARY KEY (`o_id`),
  KEY `FK_Reference_16` (`a_id`),
  KEY `FK_Reference_2` (`c_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `orders`
--

INSERT INTO `orders` (`o_id`, `c_id`, `p_id`, `a_id`, `o_upTime`, `o_inDate`, `o_outDate`, `o_days`, `o_total`, `o_isPay`, `o_rank`, `o_isDel`, `o_operateTime`) VALUES
(1, 1, 1, 0, '2016-02-20 07:34:39', '2016-02-20', '2016-02-21', 1, '120', 1, 1, 0, '2016-02-21 05:24:00'),
(2, 1, 2, 0, '2016-02-20 11:24:47', '2016-02-20', '2016-02-21', 1, '240', 1, 1, 0, '2016-02-21 05:25:43'),
(3, 3, 2, 0, '2016-02-21 17:34:29', '2016-02-21', '2016-02-22', 1, '240', 1, 1, 0, '2016-02-21 06:28:44'),
(4, 4, 2, 0, '2016-02-21 09:37:59', '2016-02-21', '2016-02-22', 1, '240', 1, 1, 0, '2016-02-21 16:16:47');

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) DEFAULT NULL,
  `p_name` varchar(100) DEFAULT NULL,
  `p_img` varchar(1000) DEFAULT NULL,
  `p_info` varchar(5000) DEFAULT NULL,
  `p_price` decimal(10,0) DEFAULT NULL,
  `p_time` datetime DEFAULT NULL,
  `p_rank` int(11) DEFAULT NULL,
  `p_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`p_id`),
  KEY `FK_Reference_12` (`a_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`p_id`, `a_id`, `p_name`, `p_img`, `p_info`, `p_price`, `p_time`, `p_rank`, `p_isDel`) VALUES
(1, 0, '单人标准房', 'images/slide1.jpg', '单人标准房，好房间你值得拥有', '120', '2016-02-20 09:33:30', 1, 0),
(2, 0, '双人标准房', 'images/slide2.jpg', '双人标准房,你值得拥有', '120', '2016-02-20 11:17:25', 1, 0),
(3, 0, '单人豪华房', 'images/slide3.jpg', '单人豪华房，你值得拥有', '240', '2016-02-20 07:26:30', 1, 0),
(4, 0, '双人豪华房', 'images/slide4.jpg', '双人豪华房，你值得拥有', '240', '2016-02-20 05:18:27', 1, 0),
(5, 0, '单人钟点房', 'images/slide5.jpg', '钟点房，你值得拥有', '60', '2016-02-20 08:32:14', 1, 0),
(6, 0, '双人钟点房', 'images/slide6.jpg', '双人钟点房，你值得拥有', '60', '2016-02-21 03:23:34', 1, 0);

-- --------------------------------------------------------

--
-- 表的结构 `theme`
--

CREATE TABLE IF NOT EXISTS `theme` (
  `t_id` int(11) NOT NULL AUTO_INCREMENT,
  `t_name` varchar(50) DEFAULT NULL,
  `t_code` varchar(20) DEFAULT NULL,
  `t_styleFile` varchar(200) NOT NULL,
  `t_rank` int(11) DEFAULT NULL,
  `t_isDel` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`t_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `theme`
--

INSERT INTO `theme` (`t_id`, `t_name`, `t_code`, `t_styleFile`, `t_rank`, `t_isDel`) VALUES
(1, '烂漫红', 'roman_red', './css/style1.css', 1, 0),
(2, '艺术绿', 'art_green', './css/style2.css', 1, 0),
(3, '纯情绿', 'single_green', './css/style3.css', 1, 0),
(4, '高贵紫', 'high_purple', './css/style4.css', 1, 0);

--
-- 限制导出的表
--

--
-- 限制表 `carousel_manage`
--
ALTER TABLE `carousel_manage`
  ADD CONSTRAINT `FK_Reference_14` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`);

--
-- 限制表 `company_info`
--
ALTER TABLE `company_info`
  ADD CONSTRAINT `FK_Reference_15` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`),
  ADD CONSTRAINT `FK_Reference_8` FOREIGN KEY (`t_id`) REFERENCES `theme` (`t_id`);

--
-- 限制表 `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `FK_Reference_11` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`);

--
-- 限制表 `gallery_detail`
--
ALTER TABLE `gallery_detail`
  ADD CONSTRAINT `FK_Reference_10` FOREIGN KEY (`g_id`) REFERENCES `gallery` (`g_id`),
  ADD CONSTRAINT `FK_Reference_9` FOREIGN KEY (`p_id`) REFERENCES `product` (`p_id`);

--
-- 限制表 `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `FK_Reference_13` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`);

--
-- 限制表 `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `FK_Reference_4` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`);

--
-- 限制表 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_Reference_16` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`),
  ADD CONSTRAINT `FK_Reference_2` FOREIGN KEY (`c_id`) REFERENCES `customer` (`c_id`);

--
-- 限制表 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_Reference_12` FOREIGN KEY (`a_id`) REFERENCES `admin` (`a_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
