-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2020 at 12:52 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `kolo_deep`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `email` text NOT NULL,
  `pass` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`email`, `pass`) VALUES
('kaleabteweld3@gmail.com', 'kaleab1010');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `time` text,
  `name` text,
  `data` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`ID`, `time`, `name`, `data`) VALUES
(1, '2020/27/1', 'ADMIN', 'Hi, and_welcome to kolo Deep i hope u all have a good time'),
(2, '2020/27/1', 'ADMIN', 'if there is any thing ask'),
(13, '2020/28/2', 'pain', 'hi, pain here, i just like to say nice bro'),
(14, '2020/28/2', 'kolo m', 'so'),
(19, '2020/28/2', 'kolo', 'ewhrflwgrw'),
(20, '2020/29/3', '', ''),
(21, '2020/29/3', 'meatball', 'goood but the cporses are a little bit of course\n'),
(22, '2020/29/3', 'meatball', '8.5/10\n'),
(23, '2020/29/3', 'meatball', '8.5/10\n'),
(25, '2020/29/3', 'meatball', '8.5/10\n'),
(26, '2020/30/4', 'admin', 'gliugiugiugui'),
(28, '2020/30/4', 'admin', 'kolo'),
(29, '2020/30/4', 'admin', 'k'),
(30, '2020/30/4', 'admin', 'I know right'),
(31, '2020/1/5', 'admin', 'sbstrhrsht'),
(32, '2020/2/6', 'jbnvjkraegb', 'hvsuiarehiulhgaeruih');

-- --------------------------------------------------------

--
-- Table structure for table `feed_back`
--

CREATE TABLE IF NOT EXISTS `feed_back` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `time` text,
  `email` text,
  `msg` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `feed_back`
--

INSERT INTO `feed_back` (`ID`, `time`, `email`, `msg`) VALUES
(2, '2020-27-1', 'meatball647@gmail.com', 'kyffgfjy'),
(4, '2020-28-2', 'kaleabteweldbrhan@gmail.com', 'yo sup me'),
(5, '2020-28-2', 'tewedbrhan@yahoo.com', ' hello!!!!'),
(7, '2020-30-4', 'sduhglugA@.', 'uhvfreuigeri');

-- --------------------------------------------------------

--
-- Table structure for table `python`
--

CREATE TABLE IF NOT EXISTS `python` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `time` text,
  `page` text,
  `data` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `python`
--

INSERT INTO `python` (`ID`, `time`, `page`, `data`) VALUES
(1, '2020-23-4', '4', '[''],\r\nIPv6\r\nThe IPv6 (Internet Protocol version 6) section is where you configure your IPv6 Connection type.\r\nIPv6 Connection Type\r\nThere are several connection types to choose from: Link-local, Static IP v6, DHCPv6, Stateless Autoconfiguration, PPPoE, IPv6 in IPv4 Tunnel and 6to4. If you are unsure of your connection method, please contact your IPv6 Internet Service Provider. Note: If using the PPPoE option, you will need to ensure that any PPPoE client software on your computers is removed or disabled.\r\nLink-local Mode\r\nLink-local address is used by nodes and routers when communicating with neighboring nodes on the same link. This mode enables IPv6-capable devices to communicate with each other in the LAN side.\r\nStatic IP v6 Mode\r\nUsed when your ISP provides you a set IPv6 address that does not change. The IPv6 information is manually entered in your IPv6 configuration settings. You must enter the IPv6 address, Subnet Prefix Length, Default Gateway, Primary DNS Server, and Secondary DNS Server. Your ISP provides you with all of this information.\r\nDHCPv6 Mode\r\nA method of connection where the ISP assigns your IPv6 address when your router requests one from the ISP''s server. Some ISP''s require you to make some settings on your side before your router can connect to the IPv6 Internet.\r\nPPPoE\r\nSelect this option if your ISP requires you to use a PPPoE (Point to Point Protocol over Ethernet) connection to IPv6 Internet. DSL providers typically use this option. This method of connection requires you to enter a Username and Password (provided by your Internet Service Provider) to gain access to the IPv6 Internet. The supported authentication protocols are PAP and CHAP.\r\nDynamic IP: If the ISP''s servers assign the router''s WAN IPv6 addressing upon establishing a connection, select this option.\r\n\r\nStatic IP : If your ISP has assigned a fixed IPv6 address, select this option. The ISP provides the value for the IPv6 Address.\r\n\r\nService Name: Some ISP''s may require that you enter a Service Name. Only enter a Service Name if your ISP requires one.\r\n\r\nReconnect Mode: Typically PPPoE connections are not always on. The D-Link router allows you to set the reconnection mode. The settings are:\r\n\r\nAlways on: A connection to the Internet is always maintained.\r\nOn demand: A connection to the Internet is made as needed.\r\nManual: You have to open up the Web-based management interface and click the Connect button manually any time that you wish to connect to the Internet.\r\nMaximum Idle Time: Time interval the machine can be idle before the WAN link is disconnected. The Maximum Idle Time value is only used for the "On demand" reconnect modes.\r\n\r\n \r\nIPv6 in IPv4 Tunnel Mode\r\nIPv6 in IPv4 tunneling is the encapsulation of IPv6 packets in IPv4 packets so that IPv6 packets can be sent over an IPv4 infrastructure.\r\n6to4 Mode\r\n6to4 is an IPv6 address assignment and automatic tunneling technology that used to provide unicast IPv6 connectivity between IPv6 sites and hosts across the IPv4 Internet.\r\n\r\nThe following options apply to all WAN modes.\r\n\r\nPrimary DNS Server, Secondary DNS Server: Enter the IPv6 addresses of the DNS Servers. Leave the field for the secondary server empty if not used.\r\n['']\r\n[''],\r\nLAN IPv6 Address Setting\r\nThese are the settings of the LAN (Local Area Network) IPv6 interface for the router. The router''s LAN IPv6 Address is configured based on the IPv6 Address and Subnet assigned by your ISP. (A subnet with prefix /64 is supported in LAN.)\r\nLAN Address Autoconfiguration Settings\r\nUse this section to setup IPv6 Autoconfiguration to assign IPv6 address to the computers on your local network. A Stateless and a Stateful Autoconfiguration method are provided.\r\nEnable Autoconfiguration\r\nThese two values (from and to) define a range of IPv6 addresses that the DHCPv6 Server uses when assigning addresses to computers and devices on your Local Area Network. Any addresses that are outside of this range are not managed by the DHCPv6 Server; these could, therefore, be used for manually configured devices or devices that cannot use DHCPv6 to obtain network address details automatically.\r\nWhen you selected Stateful (DHCPv6), the following options are displayed.\r\nThe computers (and other devices) connected to your LAN also need to have their TCP/IP configuration set to "DHCPv6" or "Obtain an IPv6 address automatically".\r\nIPv6 Address Range (DHCPv6)\r\nOnce your D-Link router is properly configured and this option is enabled, the router will manage the IPv6 addresses and other network configuration information for computers and other devices connected to your Local Area Network. There is no need for you to do this yourself.\r\nIt is possible for a computer or device that is manually configured to have an IPv6 address that does reside within this range.\r\nIPv6 Address Lifetime\r\nThe amount of time that a computer may have an IPv6 address before it is required to renew the lease.\r\n['']\r\n[''],\r\nThe wireless section is used to configure the wireless settings for your D-Link router. Note that changes made in this section may also need to be duplicated on wireless clients that you want to connect to your wireless network.\r\n\r\nTo protect your privacy, use the wireless security mode to configure the wireless security features.\r\n\r\nWireless Basics\r\nBasic settings to get your wireless network up and running.\r\nDisable Wireless LAN Interface\r\nThis option turns off and on the wireless connection feature of the router.\r\nSSID(Wireless Network Name)\r\nWhen you are browsing for available wireless networks, this is the name that will appear in the list. For security purposes, it is highly recommended to change from the pre-configured network name.\r\nRadio Power(Percent):\r\nThis is the percentage of power that should be transmitted from your wireless router. Select from 10%, 25%, 50%, 80%, and 100%.\r\nAssociated Clients\r\nClick Show Active Clients to show current clients which connect to your router.\r\n['']\r\n[''],\r\nWireless Security\r\nSettings to secure your wireless network\r\nEncryption\r\nUnless one of these encryption modes is selected, wireless transmissions to and from your wireless network can be easily intercepted and interpreted by unauthorized users.\r\nWEP\r\nA method of encrypting data for wireless communication intended to provide the same level of privacy as a wired network. WEP is not as secure as WPA encryption. To gain access to a WEP network, you must know the key. The key is a string of characters that you create. When using WEP, you must determine the level of encryption. The type of encryption determines the key length. 128-bit encryption requires a longer key than 64-bit encryption. Keys are defined by entering in a string in HEX (hexadecimal - using characters 0-9, A-F) or ASCII (American Standard Code for Information Interchange - alphanumeric characters) format. ASCII format is provided so you can enter a string that is easier to remember. The ASCII string is converted to HEX for use over the network. Four keys can be defined so that you can change keys easily.To set WEP key,please click Set WEP Key\r\n['']\r\n');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
