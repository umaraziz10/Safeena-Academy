-- phpMyAdmin SQL Dump
-- version 5.2.1deb3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 28, 2025 at 05:02 AM
-- Server version: 8.0.42-0ubuntu0.24.04.1
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
USE safeena_academy;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coba_sung`
--

-- --------------------------------------------------------

--
-- Table structure for table `Consultations`
--

CREATE TABLE `Consultations` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `psychologist_id` int NOT NULL,
  `type_of_service` enum('Ditempat','Konseling Daring','Datang ke Rumah') COLLATE utf8mb4_general_ci NOT NULL,
  `consult_date` date NOT NULL,
  `status` enum('Approved','Pending','Done','Declined') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'Pending',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time_slot_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Courses`
--

CREATE TABLE `Courses` (
  `id` int NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Courses`
--

INSERT INTO `Courses` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Anxiety Disorders', 'Gangguan kecemasan adalah kondisi kesehatan mental yang ditandai dengan perasaan khawatir, takut, atau gugup yang berlebihan dan terus-menerus yang dapat mengganggu aktivitas sehari-hari. Tidak seperti kecemasan normal—yang merupakan respons sementara terhadap stres—gangguan ini melibatkan emosi yang kuat yang dapat muncul tanpa penyebab yang jelas dan berlangsung dalam jangka waktu yang lama. Jenis-jenis yang umum termasuk gangguan kecemasan umum, gangguan panik, gangguan kecemasan sosial, dan fobia spesifik. Gejalanya mungkin emosional, seperti kekhawatiran atau ketakutan yang terus-menerus, serta fisik, seperti jantung berdebar, ketegangan otot, atau kesulitan tidur.\n\nPenyebab gangguan kecemasan bersifat kompleks dan dapat melibatkan campuran faktor genetik, psikologis, dan lingkungan, termasuk trauma atau stres kronis. Meskipun kondisi ini dapat menantang, kondisi ini dapat diobati. Banyak individu menemukan kelegaan melalui terapi, pengobatan, perubahan gaya hidup, atau kombinasi pendekatan. Pengenalan dini dan dukungan yang tepat dapat sangat meningkatkan kualitas hidup dan membantu individu mengelola gejala mereka secara efektif.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(2, 'Depression', 'Depresi adalah kondisi kesehatan mental umum yang ditandai dengan perasaan sedih, putus asa, dan hilangnya minat atau kesenangan dalam aktivitas yang dulu dinikmati. Kondisi ini memengaruhi cara berpikir, perasaan, dan perilaku seseorang, yang sering kali menyebabkan masalah emosional dan fisik yang dapat mengganggu fungsi sehari-hari. Tidak seperti suasana hati yang buruk sesekali, gejala depresi berlangsung selama berminggu-minggu atau bahkan berbulan-bulan dan dapat meliputi kelelahan, perubahan nafsu makan atau pola tidur, kesulitan berkonsentrasi, dan pikiran untuk melukai diri sendiri atau bunuh diri.\n\nDepresi dapat disebabkan oleh kombinasi faktor genetik, biologis, lingkungan, dan psikologis. Peristiwa kehidupan seperti trauma, kehilangan, atau stres kronis juga dapat menjadi penyebabnya. Untungnya, depresi dapat diobati. Banyak orang mengalami perbaikan dengan psikoterapi, pengobatan seperti antidepresan, perubahan gaya hidup, atau kombinasi pengobatan. Intervensi dini dan dukungan dari orang-orang terkasih memainkan peran penting dalam pemulihan.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(3, 'Help Family and Friends', 'Membantu keluarga dan teman yang mengalami masalah kesehatan mental melibatkan pemberian dukungan, pengertian, dan dorongan tanpa menghakimi. Hal ini membutuhkan mendengarkan secara aktif, kesabaran, dan empati, sekaligus menghargai batasan dan pilihan mereka. Terkadang, individu yang berjuang dengan kesehatan mental mungkin mengisolasi diri atau ragu untuk mencari bantuan, sehingga semakin penting untuk tetap terhubung dan memeriksa keadaan secara teratur.\n\nDukungan juga dapat berarti membantu mereka menemukan perawatan profesional, baik melalui terapi, kelompok pendukung, atau perawatan medis. Sangat penting untuk mendidik diri sendiri tentang kondisi mereka agar lebih memahami pengalaman mereka dan menghindari bahasa yang menstigmatisasi. Saat memberikan dukungan, sama pentingnya untuk menjaga kesejahteraan Anda sendiri dengan menetapkan batasan dan mencari dukungan untuk diri sendiri saat dibutuhkan.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(4, 'Sleep Better', 'Mendapatkan tidur yang berkualitas sangat penting bagi kesehatan fisik dan mental. Kurang tidur dapat memperburuk stres, kecemasan, dan gangguan suasana hati, sementara tidur yang cukup mendukung pengaturan emosi, konsentrasi, dan ketahanan secara keseluruhan. Tantangan tidur dapat berasal dari berbagai faktor, termasuk stres, jadwal yang tidak teratur, asupan kafein, atau kondisi kesehatan yang mendasarinya.\n\nMeningkatkan kualitas tidur melibatkan penerapan kebiasaan sehat yang dikenal sebagai \"higiene tidur\". Ini termasuk mempertahankan jadwal tidur yang konsisten, menciptakan rutinitas waktu tidur yang menenangkan, membatasi waktu layar sebelum tidur, mengurangi asupan kafein dan alkohol, dan memastikan lingkungan tidur gelap, tenang, dan nyaman. Bagi mereka yang mengalami insomnia kronis atau gangguan tidur, evaluasi dan perawatan profesional seperti terapi perilaku kognitif untuk insomnia (CBT-I) mungkin direkomendasikan.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(5, 'Panic Attack', 'Serangan Panik atau Panic Attack adalah episode tiba-tiba dari rasa takut atau ketidaknyamanan yang intens yang memuncak dalam hitungan menit, sering kali disertai dengan gejala fisik seperti jantung berdebar, nyeri dada, sesak napas, pusing, berkeringat, atau gemetar. Orang yang mengalami serangan panik mungkin merasa seperti kehilangan kendali, mengalami serangan jantung, atau bahkan sekarat, meskipun episode tersebut tidak mengancam jiwa.\n\nSerangan panik dapat terjadi secara tiba-tiba atau sebagai respons terhadap pemicu tertentu. Serangan panik merupakan gejala khas gangguan panik tetapi juga dapat muncul dalam kondisi terkait kecemasan lainnya. Pilihan pengobatan meliputi terapi perilaku kognitif, teknik relaksasi, terapi pemaparan, dan terkadang pengobatan seperti antidepresan atau obat antikecemasan. Mempelajari strategi penanganan dan mengenali tanda-tanda peringatan dini dapat membantu individu mengelola dan mengurangi frekuensi serangan panik.', '2025-05-05 19:59:19', '2025-05-05 19:59:19'),
(6, 'OCD', 'Gangguan Obsesif-Kompulsif (OCD) adalah kondisi kesehatan mental yang ditandai dengan pikiran-pikiran yang berulang dan tidak diinginkan (obsesi) serta perilaku atau tindakan mental yang berulang (kompulsi) yang bertujuan untuk mengurangi kecemasan yang disebabkan oleh pikiran-pikiran tersebut. Misalnya, seseorang mungkin berulang kali memeriksa apakah pintu terkunci atau mencuci tangan secara berlebihan untuk menghilangkan rasa takut akan bahaya atau kontaminasi.\n\nOCD bukan sekadar preferensi terhadap keteraturan atau kebersihan—OCD melibatkan tekanan yang signifikan dan ritual yang menyita waktu yang mengganggu kehidupan sehari-hari. Penyebab pastinya tidak diketahui tetapi mungkin melibatkan kombinasi faktor genetik, neurologis, dan lingkungan. Perawatan sering kali mencakup terapi perilaku kognitif, khususnya pencegahan paparan dan respons (ERP), dan terkadang pengobatan seperti selective serotonin reuptake inhibitor (SSRI). Dengan dukungan dan perawatan yang tepat, banyak individu dengan OCD dapat mengelola gejala-gejala mereka dan menjalani kehidupan yang memuaskan.', '2025-05-05 19:59:19', '2025-05-05 19:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `Materials`
--

CREATE TABLE `Materials` (
  `material_id` int NOT NULL,
  `course_id` int NOT NULL,
  `week` int NOT NULL,
  `materials_title` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `materials_desc` text COLLATE utf8mb4_general_ci,
  `materials_video` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `materials_duration` int DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '[]',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ;

--
-- Dumping data for table `Materials`
--

INSERT INTO `Materials` (`material_id`, `course_id`, `week`, `materials_title`, `materials_desc`, `materials_video`, `materials_duration`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Respon Melawan/Melarikan Diri/Membeku: Keterampilan Kecemasan #1', 'Respons melawan/melarikan diri/membeku merupakan reaksi otomatis terhadap bahaya yang dirasakan, yang memicu naluri bertahan hidup tubuh. Respons ini dapat dipicu oleh stres, kecemasan, atau ketakutan, yang menyebabkan perubahan fisik seperti jantung berdebar kencang atau napas pendek. Memahami reaksi ini membantu individu mengenali saat mereka berada dalam kondisi cemas dan mempelajari cara mengelolanya, sehingga mereka dapat memperoleh kembali kendali dan mengurangi perasaan takut atau panik yang berlebihan.', 'https://youtu.be/RPyzPH8sB2A?si=CTs6V_Q_e7yDZ0rR', 5, '[47,44]', '2025-05-05 20:55:40', '2025-05-21 12:13:00'),
(2, 1, 1, 'Stres, Kecemasan, dan Kekhawatiran: Keterampilan Mengatasi Kecemasan #2', 'Stres, kecemasan, dan kekhawatiran merupakan emosi yang saling terkait yang dapat mengganggu kehidupan sehari-hari jika menjadi berlebihan. Sementara stres sering kali muncul dari tekanan eksternal, kecemasan lebih bersifat internal dan terus-menerus, dan kekhawatiran merupakan pikiran berlebihan yang terus-menerus tentang kemungkinan hasil negatif. Mempelajari perbedaan antara perasaan-perasaan ini dan pemicunya dapat membantu individu mengatasinya dengan lebih baik melalui perhatian penuh, teknik relaksasi, dan strategi lain untuk pengaturan emosi.', 'https://youtu.be/aOGP3mltnZE?si=8szNr8D10Aro8Bs2', 4, '[47]', '2025-05-05 21:03:26', '2025-05-21 07:34:50'),
(3, 1, 2, 'Seberapa Gugup Sistem Saraf Anda? Keterampilan Mengatasi Kecemasan #3Seberapa Gugup Sistem Saraf Anda? Keterampilan Mengatasi Kecemasan #3', 'Sistem saraf berperan penting dalam cara kita mengalami kecemasan. Saat kewalahan, sistem saraf dapat memicu respons tubuh untuk melawan atau lari, yang menyebabkan sensasi fisik yang meningkat seperti berkeringat, pusing, atau detak jantung cepat. Latihan ini membantu individu menilai reaksi sistem saraf mereka terhadap kecemasan dan memahami keseimbangan antara kegembiraan karena gugup dan ketakutan yang luar biasa, serta menawarkan strategi untuk menenangkan sistem tersebut.', 'https://youtu.be/uKN5I-Mtgzs?si=CiUAYXhDjt5_HBSQ', 3, '[47]', '2025-05-05 21:03:26', '2025-05-21 08:28:55'),
(4, 1, 2, 'Cara Mematikan Respon Melawan/Melarikan Diri/Membeku: Keterampilan Kecemasan #4', 'Respons melawan/melarikan diri/membeku dimaksudkan untuk bertahan hidup, tetapi dapat merugikan jika sering diaktifkan karena kecemasan. Mempelajari teknik-teknik seperti pernapasan dalam, kesadaran penuh, dan latihan-latihan pentanahan dapat membantu \"mematikan\" respons ini dan mengembalikan tubuh ke keadaan yang lebih tenang. Keterampilan-keterampilan ini memungkinkan individu untuk mendapatkan kembali kendali atas emosi mereka dan mengurangi intensitas kecemasan ketika dipicu oleh stres.', 'https://youtu.be/agdpFsKGdOE?si=NxxzdKLukGNDcm_K', 7, '[47]', '2025-05-05 21:03:26', '2025-05-21 08:38:22'),
(5, 1, 3, 'Latihan Grounding: Keterampilan Mengatasi Kecemasan #5', 'Latihan grounding adalah teknik yang membantu individu fokus pada saat ini untuk mengurangi perasaan cemas dan disosiasi. Dengan menggunakan indra—seperti fokus pada apa yang dapat Anda lihat, dengar, atau sentuh—latihan ini membantu Anda untuk tetap fokus pada kenyataan, mengalihkan perhatian dari emosi yang meluap-luap, dan menghadirkan rasa tenang dan kendali di saat-saat cemas.', 'https://youtu.be/1ao4xdDK9iE?si=hOhDBzR6IJ82T8RD', 3, '[47]', '2025-05-05 21:03:26', '2025-05-21 08:38:36'),
(6, 1, 3, 'Bahaya yang Dirasakan dan Menciptakan Keamanan: Keterampilan Kecemasan #6', 'Bahaya yang dirasakan adalah interpretasi otak terhadap ancaman, yang sering kali memperkuat rasa takut dan kecemasan. Menciptakan rasa aman melibatkan pengakuan bahwa ancaman tersebut tidak langsung terjadi dan belajar untuk mengubah pola pikir negatif. Dengan menggunakan teknik seperti menenangkan diri, restrukturisasi kognitif, dan visualisasi, individu dapat mengurangi bahaya yang dirasakan dan membangun ruang mental yang aman, yang membantu mengelola kecemasan mereka.', 'https://youtu.be/W0QAtywrv5c?si=IhoSeb2dH2Qvm8Vp', 3, '[47]', '2025-05-05 21:03:26', '2025-05-21 10:02:07'),
(7, 1, 4, 'Latihan Menggambar untuk Mengatasi Kecemasan: Keterampilan Mengatasi Kecemasan #7', 'Latihan menggambar menawarkan jalan keluar yang kreatif untuk mengelola kecemasan. Dengan menyalurkan energi kecemasan ke dalam ekspresi visual, individu dapat mengekspresikan kekhawatiran mereka dan memperoleh rasa kendali atas emosi mereka. Teknik ini mendorong kesadaran dan dapat membantu individu memproses perasaan, memberikan kejelasan dan kelegaan emosional melalui tindakan menciptakan karya seni.', 'https://youtu.be/YTHgm8wL_IE?si=DqqWryD3saZg8yu_', 2, '[47]', '2025-05-05 21:03:26', '2025-05-21 10:05:57'),
(8, 1, 4, 'Banjir Emosional: Bagaimana Kecemasan Mempengaruhi Hubungan: Keterampilan Hubungan #8', 'Banjir emosi terjadi saat emosi yang kuat, yang sering dipicu oleh kecemasan, menguasai seseorang, yang menyebabkan kesulitan berkomunikasi atau bereaksi secara impulsif. Hal ini dapat membuat hubungan menjadi tegang, terutama saat salah satu pasangan tidak mampu mengatur respons emosionalnya. Mempelajari cara mengelola banjir emosi melalui kesadaran diri, strategi komunikasi, dan empati dapat membantu menjaga hubungan yang sehat bahkan dalam situasi yang penuh tekanan.', 'https://youtu.be/7xwOZVRK_B8?si=0zB4yoxyllw7C8fh', 6, '[47]', '2025-05-05 21:03:26', '2025-05-21 10:06:25'),
(9, 2, 1, 'Depresi Anda Berbohong pada Anda: Pilihan Pengobatan Depresi: Keterampilan Depresi #1', 'Depresi sering kali mendistorsi kenyataan, membuat Anda merasa putus asa, tidak berharga, atau seolah-olah keadaan tidak akan pernah membaik. Menyadari bahwa depresi \"berbohong\" kepada Anda adalah langkah pertama dalam pemulihan. Pilihan pengobatan, seperti terapi, pengobatan, dan perubahan gaya hidup, dapat membantu menantang keyakinan negatif ini dan memulihkan rasa kendali. Memahami bahwa depresi adalah kondisi yang dapat diobati memberdayakan individu untuk mencari bantuan dan berusaha untuk sembuh.', 'https://youtu.be/TTHOjqIRQ34?si=feq0-v9GisJD3Gfn', 8, '[]', '2025-05-05 21:03:26', '2025-05-16 06:54:27'),
(10, 2, 1, 'Cara Membantu Seseorang yang Mengalami Depresi: 32 Tips untuk Saat Mereka Tidak Ingin Berbicara: Keterampilan Menghadapi Depresi #2', 'Mendukung seseorang yang mengalami depresi bisa jadi sulit, terutama saat mereka tidak ingin berbicara. Panduan ini menawarkan 32 kiat praktis untuk menawarkan dukungan dengan cara non-verbal—baik melalui kehadiran fisik, gerakan kecil, atau menyediakan sumber daya. Memahami perlunya kesabaran dan dukungan tanpa menghakimi dapat membantu menciptakan ruang aman bagi individu untuk akhirnya membuka diri saat mereka siap.', 'https://youtu.be/HQm7xRjl6-I?si=bqQ-RT1vqnaGEkTV', 5, '[]', '2025-05-05 21:03:26', '2025-05-16 06:54:36'),
(11, 2, 2, 'Apakah Ini Penyebab Anda Depresi? Berhentilah Bersedih pada Diri Sendiri', '\"Harusnya\" adalah distorsi kognitif umum dalam depresi, di mana Anda menaruh harapan yang tidak realistis atau kaku pada diri sendiri. Tekanan yang Anda buat sendiri ini, seperti \"Saya seharusnya bahagia\" atau \"Saya seharusnya menjadi lebih baik,\" berkontribusi pada perasaan tidak mampu dan bersalah. Belajar melepaskan pernyataan \"harusnya\" membantu mengurangi rasa bersalah dan meningkatkan rasa kasih sayang pada diri sendiri, yang memungkinkan respons emosional yang lebih sehat dan kemajuan dalam mengelola depresi.', 'https://youtu.be/PeF-mIrYIIU?si=aldHKbL8iE2sToZc', 10, '[]', '2025-05-05 21:03:26', '2025-05-05 21:03:26'),
(12, 2, 2, 'Cara Menghentikan Spiral MALU \"Apakah Saya Orang Jahat?\" - Malu vs. Rasa Bersalah', 'Rasa malu adalah emosi yang kuat yang dapat memperburuk depresi, yang sering kali mengarah pada pola pikir yang merusak seperti \"Apakah saya orang yang jahat?\" Tidak seperti rasa bersalah, yang berkaitan dengan tindakan, rasa malu menargetkan diri sendiri. Memahami perbedaan antara rasa malu dan rasa bersalah sangat penting untuk menghentikan lingkaran setan tersebut. Mempraktikkan memaafkan diri sendiri, berbelas kasih, dan mengubah keyakinan negatif membantu melepaskan diri dari cengkeraman rasa malu, mendorong penyembuhan dan pertumbuhan emosional.', 'https://youtu.be/7KepQX1tBvI?si=uma2mhUWRGbjSM4C', 9, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(13, 2, 3, 'Apakah Peradangan Menyebabkan Depresi?', 'Penelitian terkini menunjukkan bahwa peradangan mungkin berperan dalam perkembangan depresi. Peradangan kronis, yang disebabkan oleh faktor-faktor seperti pola makan yang buruk, stres, atau gangguan autoimun, dapat mengubah kimia otak dan meningkatkan perasaan sedih atau cemas. Memahami hubungan ini membuka jalan pengobatan baru, seperti terapi antiperadangan atau perubahan gaya hidup, untuk membantu mengelola depresi pada individu tertentu.', 'https://youtu.be/-NiCmHKmQWg?si=P35LeeUP5KamLRtI', 10, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(14, 2, 3, 'Peradangan sebagai penyebab depresi | Charles Raison', 'Dr. Charles Raison meneliti bagaimana peradangan dapat menyebabkan depresi dalam penelitian yang inovatif. Karyanya menunjukkan bahwa respons peradangan dalam tubuh dapat memengaruhi pengaturan suasana hati dan meningkatkan risiko timbulnya depresi. Dengan mengatasi peradangan melalui perubahan pola makan, pengobatan, atau intervensi lain, individu mungkin dapat mengurangi keparahan gejala depresi dan meningkatkan kesejahteraan mental.', 'https://youtu.be/tCnxLqeIZLc?si=iAo79kgUDRqi-_8e', 4, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(15, 2, 4, '5 Kebohongan yang Diceritakan Depresi kepada Anda - Motivasi Depresi, semuanya menjadi lebih baik', 'Depresi sering kali memicu kebohongan yang mengabadikan keputusasaan dan keputus-asaan. Ini termasuk pikiran seperti \"Saya tidak akan pernah sembuh\" atau \"Saya tidak layak bahagia.\" Memahami kebohongan ini adalah langkah penting dalam mengatasinya. Dengan perawatan dan waktu yang tepat, keyakinan yang salah ini dapat digantikan dengan perspektif yang lebih akurat dan penuh harapan, yang memberdayakan individu untuk mengambil tindakan menuju pemulihan dan kesejahteraan.', 'https://youtu.be/uq2C8us969M?si=4y-HTs4_DBEarXWz', 9, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(16, 2, 4, 'Cara pulih dari depresi', 'Pemulihan dari depresi merupakan perjalanan yang melibatkan kombinasi berbagai pilihan pengobatan, praktik perawatan diri, dan dukungan berkelanjutan. Strategi yang dapat dilakukan meliputi terapi (terutama Terapi Perilaku Kognitif), pengobatan, aktivitas fisik, dan perubahan gaya hidup. Membangun jaringan pendukung, menetapkan rutinitas yang sehat, dan terlibat dalam aktivitas yang bermakna juga dapat meningkatkan pemulihan secara signifikan. Kesabaran dan kegigihan adalah kuncinya, karena penyembuhan dari depresi sering kali bertahap tetapi dapat dicapai.', 'https://youtu.be/TVgQ_tgWMyU?si=joky_-1LDKFsxO9W', 63, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(17, 3, 1, 'Cara Membantu Seseorang yang Mengalami Depresi atau Kecemasan', 'Mendukung seseorang yang mengalami depresi atau kecemasan melibatkan mendengarkan, memvalidasi perasaan mereka, dan membantu mereka mengakses perawatan profesional saat dibutuhkan. Penting untuk bersabar dan tidak menghakimi, karena masalah kesehatan mental sulit diungkapkan. Memberikan bantuan praktis, seperti membantu tugas sehari-hari atau mendorong strategi penanganan yang positif, dapat membuat perbedaan besar dalam pemulihan mereka.', 'https://youtu.be/0Yr4hyFSJPk?si=ogQQJLL9wrjtWPaX', 3, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(18, 3, 1, 'Perilaku Mencari Perhatian: Ketika \"Abaikan Saja\" Tidak Berhasil', 'Perilaku mencari perhatian dapat menjadi tanda adanya tekanan emosional atau kebutuhan yang tidak terpenuhi. Mengabaikan perilaku tersebut sering kali tidak mengatasi akar penyebabnya, dan secara tidak sengaja dapat memperkuat perasaan kesepian atau frustrasi. Sebaliknya, penting untuk mengakui perasaan orang tersebut, memberikan dukungan, dan membantu mereka mengekspresikan kebutuhan mereka dengan cara yang lebih sehat melalui komunikasi dan validasi emosional.', 'https://youtu.be/YpJ3nSLr3Tw?si=6yJ-70CJlwJ_O0vU', 7, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(19, 3, 2, 'Mendengarkan Reflektif: Bagaimana Menjadi Pendengar yang Baik', 'Mendengarkan secara reflektif adalah teknik mendengarkan secara aktif di mana pendengar meniru perasaan atau pikiran pembicara untuk memastikan adanya pemahaman dan empati. Dengan memparafrasekan atau meringkas apa yang telah disampaikan pembicara, Anda menunjukkan perhatian dan validasi, yang dapat membantu membangun kepercayaan dan meningkatkan komunikasi. Teknik ini sangat membantu bagi individu yang mengalami kesulitan emosional, yang memungkinkan mereka merasa didengarkan dan didukung.', 'https://youtu.be/eUtZk960Q_A?si=78Psoq9BhdU3R-tw', 9, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(20, 3, 2, 'Homeostasis: Mengapa Mengubah Keluarga Itu Sulit, dan Bagaimana Anda Dapat Membuat Perubahan Bertahan Lama', 'Dinamika keluarga sering kali berjalan seperti sistem homeostasis, di mana setiap perubahan akan ditanggapi dengan perlawanan untuk menjaga stabilitas. Ketika salah satu anggota keluarga mencari perubahan—baik melalui terapi, perilaku baru, atau transisi kehidupan—hal tersebut dapat menimbulkan ketegangan atau penolakan dari orang lain yang terbiasa dengan dinamika saat ini. Untuk membuat perubahan yang langgeng, diperlukan pemahaman terhadap dinamika ini, komunikasi yang terbuka, dan pelibatan semua anggota dalam proses tersebut untuk mendorong kerja sama dan penerimaan.', 'https://youtu.be/fuOK3921W2M?si=LY22SV2JJZbxjF8r', 9, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(21, 3, 3, 'Cara Membicarakan Pikiran Bunuh Diri: Strategi Sederhana untuk Orang Tua dan Teman', 'Membicarakan pikiran untuk bunuh diri bisa jadi tidak mengenakkan, tetapi penting untuk memberikan dukungan kepada seseorang yang sedang mengalami krisis. Mendekati pembicaraan dengan penuh perhatian, kasih sayang, dan tanpa menghakimi adalah kuncinya. Mendorong orang tersebut untuk mengungkapkan perasaannya, mendengarkan tanpa langsung menawarkan solusi, dan meyakinkan mereka bahwa mereka tidak sendirian dapat membantu mereka merasa aman dan didukung. Selalu cari bantuan profesional jika diperlukan.', 'https://youtu.be/JLX4SqT7H-c?si=u5iRytC_7bvzX8S9', 9, '[]', '2025-05-05 21:04:53', '2025-05-05 21:04:53'),
(22, 3, 3, 'Cutting: Berbicara Tentang Perilaku Menyakiti Diri Sendiri (Dan 4 Cara yang Dapat Anda Lakukan)', 'Menyakiti diri sendiri sering kali merupakan mekanisme mengatasi emosi yang berlebihan atau masalah kesehatan mental. Meskipun ini mungkin tampak seperti masalah pribadi, sangat penting untuk mengatasinya dengan empati dan pengertian. Menawarkan dukungan yang tidak menghakimi, membantu orang tersebut menemukan cara yang lebih sehat untuk mengatasinya, mendorong perawatan profesional, dan menciptakan lingkungan yang aman adalah langkah-langkah penting dalam menawarkan bantuan kepada seseorang yang berjuang melawan perilaku mencelakai diri sendiri.', 'https://youtu.be/-5Z4cLwd698?si=YDyBcMBYZZ3Zpf3S', 5, '[]', '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(23, 3, 4, 'Kesedihan: 4 Sumber Daya untuk Membantu Teman yang Berduka', 'Berduka adalah proses yang sangat pribadi, dan menawarkan dukungan kepada seorang teman yang sedang berduka melibatkan penyediaan sumber daya dan kehadiran yang penuh kasih. Sumber daya yang direkomendasikan termasuk konseling, kelompok pendukung, buku-buku bermanfaat tentang kesedihan, dan platform online. Penting untuk memberikan ruang kepada orang yang berduka untuk mengekspresikan emosi mereka sambil juga memeriksa mereka untuk menawarkan dorongan dan dukungan melalui perjalanan penyembuhan mereka.', 'https://youtu.be/Z0IgYTi4aTs?si=cBc4T7GiBXJYMmkx', 5, '[]', '2025-05-05 21:05:51', '2025-05-05 21:05:51'),
(24, 3, 4, 'Cara Berbicara dengan Anak Anda Setelah Teman Sebayanya Bunuh Diri atau Meninggal di Sekolahnya', 'Berbicara dengan remaja setelah kematian teman sebaya bisa jadi sulit, tetapi sangat penting untuk membantu mereka memproses kesedihan dan emosi mereka. Lakukan pendekatan dengan keterbukaan, biarkan anak remaja Anda berbagi perasaan tanpa menghakimi. Bersabarlah, yakinkan mereka bahwa emosi mereka valid, dan tawarkan dukungan atau sumber daya profesional jika diperlukan. Menciptakan ruang untuk komunikasi yang jujur akan membantu mereka menavigasi emosi mereka dan menemukan strategi untuk mengatasinya.', 'https://youtu.be/EsFRTYws1L8?si=F8DX5pVrOlWpSwN7', 10, '[48]', '2025-05-05 21:05:51', '2025-05-21 12:28:44'),
(25, 4, 1, 'Tidur, Kecemasan, dan Insomnia: Cara Tidur Lebih Nyenyak Saat Anda Cemas', 'Kecemasan dan insomnia sering kali berjalan beriringan, sehingga sulit untuk tertidur dan tetap tertidur. Kecemasan dapat memicu pikiran yang berpacu, ketegangan, dan gejala fisik yang mengganggu tidur. Teknik-teknik seperti pernapasan dalam, relaksasi otot progresif, terapi perilaku kognitif untuk insomnia (CBT-I), dan membangun rutinitas sebelum tidur yang menenangkan dapat membantu mengatasi kecemasan dan insomnia, sehingga dapat meningkatkan kualitas tidur.', 'https://youtu.be/wkGWwyrCoRs?si=01LzKqDAu9N8ofgd', 14, '[54,44]', '2025-05-05 21:05:51', '2025-05-21 12:17:59'),
(26, 4, 1, 'Pola Tidur Bersih: Latih Otak Anda untuk Tertidur dan Tidur Lebih Nyenyak', 'Pola Tidur Bersih mengacu pada kebiasaan dan praktik yang mendorong tidur yang konsisten dan berkualitas. Hal ini termasuk mengatur jadwal tidur yang teratur, menciptakan rutinitas sebelum tidur yang menenangkan, menghindari stimulan seperti kafein atau layar sebelum tidur, dan membuat lingkungan tidur Anda nyaman. Kebersihan tidur yang baik membantu melatih otak Anda untuk mengasosiasikan tindakan tertentu dengan tidur, meningkatkan kualitas dan durasi istirahat.', 'https://youtu.be/fk-_SwHhLLc?si=53dUjrGGnQ_Iq2Ix', 8, '[54]', '2025-05-05 21:05:51', '2025-05-21 11:45:01'),
(27, 4, 2, 'Bagaimana Cara Tertidur: Matikan Rasa Khawatir dan Insomnia Dengan Keterampilan Cepat Ini', 'Salah satu teknik yang efektif untuk tertidur lebih cepat adalah dengan melatih perhatian penuh atau menggunakan keterampilan relaksasi untuk menenangkan pikiran. Teknik seperti relaksasi otot progresif atau visualisasi dapat membantu mengurangi ketegangan fisik dan obrolan mental, mematikan kekhawatiran dan memudahkan transisi menuju tidur. Menciptakan lingkungan yang damai dan ramah untuk tidur serta mengikuti rutinitas sebelum tidur dapat mendukung proses ini.', 'https://youtu.be/CAGUVH_yIRE?si=gTaxWu6DbRIJeKkF', 4, '[54]', '2025-05-05 21:05:51', '2025-05-21 11:46:27'),
(28, 4, 2, 'Meditasi Tempat Bahagia: Rileks dan Tertidur Lebih Cepat', 'Meditasi Tempat Bahagia melibatkan visualisasi tempat yang damai dan menenangkan di mana Anda merasa aman dan rileks. Meditasi yang dipandu ini dapat membantu menjernihkan pikiran Anda dari pikiran-pikiran yang membuat stres dan meningkatkan relaksasi, sehingga Anda lebih mudah tertidur. Dengan berfokus pada gambaran mental yang tenang ini, tubuh Anda dapat memasuki kondisi yang tenang, mengurangi kecemasan dan mendorong tidur yang lebih nyenyak dan lebih memulihkan.', 'https://youtu.be/MEe6dnetwuE?si=SwRBEF4_srDlU876', 8, '[54]', '2025-05-05 21:05:51', '2025-05-21 11:46:31'),
(29, 4, 3, 'Ulasan Produk Tidur Terbaik: Cara Tidur Lebih Nyenyak', 'Menemukan produk yang tepat dapat meningkatkan kualitas tidur Anda secara signifikan. Ulasan ini mencakup berbagai alat bantu tidur, termasuk kasur, bantal, masker tidur, dan mesin white noise. Dengan memahami produk mana yang sesuai dengan gaya dan kebutuhan tidur Anda, seperti preferensi keempukan atau sensitivitas cahaya, dapat membantu Anda menciptakan lingkungan tidur yang optimal untuk istirahat dan relaksasi yang lebih baik.', 'https://youtu.be/Qgv1Z_suqw4?si=xyeA1PH5V73jvUre', 10, '[54]', '2025-05-05 21:05:51', '2025-05-21 11:46:35'),
(30, 4, 3, 'Cara Berhenti Mengalami Mimpi Buruk untuk Orang Dewasa - 9 Alat', 'Mimpi buruk dapat mengganggu tidur dan menyebabkan tekanan emosional, tetapi ada beberapa alat untuk membantu mengurangi atau menghilangkannya. Teknik-teknik seperti terapi perilaku kognitif untuk mimpi buruk (CBT-N), metode relaksasi, membangun rutinitas tidur yang konsisten, dan mengatasi stres dan trauma melalui terapi dapat mengurangi frekuensi mimpi buruk dan meningkatkan kualitas tidur.', 'https://youtu.be/WJXY_u0KAR0?si=-L6RqHviwsA0kaIB', 18, '[54,44]', '2025-05-05 21:05:51', '2025-05-21 12:17:09'),
(31, 4, 4, 'Insomnia - w/ Sleep Expert Martin Reed', 'Sleep expert Martin Reed discusses the causes of insomnia and offers practical solutions for overcoming it. From understanding the root causes of poor sleep to utilizing proven techniques like cognitive behavioral therapy for insomnia (CBT-I), this guide helps individuals learn effective strategies to manage their insomnia and improve their overall sleep health.Pakar tidur Martin Reed membahas penyebab insomnia dan menawarkan solusi praktis untuk mengatasinya. Mulai dari memahami akar penyebab kurang tidur hingga menggunakan teknik yang telah terbukti seperti terapi perilaku kognitif untuk insomnia (CBT-I), panduan ini membantu individu mempelajari strategi yang efektif untuk mengatasi insomnia dan meningkatkan kesehatan tidur mereka secara keseluruhan.', 'https://youtu.be/lPaIMwaiANI?si=ww5j8zR5UBn3Wf58', 41, '[54]', '2025-05-05 21:05:51', '2025-05-21 11:46:03'),
(32, 4, 4, 'Insomnia- Cara Tertidur Ketika Otak Anda Tidak Mau Diam!', 'Insomnia- Cara Tertidur Ketika Otak Anda Tidak Mau Diam!Insomnia sering kali berasal dari pikiran yang terlalu aktif sehingga sulit untuk rileks menjelang tidur. Untuk mengatasi hal ini, teknik seperti bernapas dalam-dalam, membuat jurnal sebelum tidur, atau meditasi terpandu dapat membantu menenangkan pikiran. Menciptakan rutinitas yang memberi sinyal ke otak Anda bahwa inilah saatnya untuk beristirahat-bersama dengan membatasi aktivitas yang merangsang sebelum tidur-dapat membantu Anda tertidur lebih cepat dan mencapai tidur yang nyenyak.', 'https://youtu.be/g6QK5UEXLYc?si=jm7X2QTHRFAs-qmX', 12, '[54]', '2025-05-05 21:07:06', '2025-05-21 11:46:38'),
(33, 5, 1, 'Apa Perbedaan Antara Serangan Panik, Serangan Kecemasan, dan Gangguan Panik? - 1/3 Serangan Panik', 'Panic attacks, anxiety attacks, and panic disorder are related but distinct experiences. Panic attacks are sudden episodes of intense fear, while anxiety attacks are typically associated with chronic worry or stress. Panic disorder involves recurrent panic attacks, leading to ongoing fear of future attacks. Understanding these differences helps individuals identify their symptoms and seek the appropriate treatment.Serangan panik, serangan kecemasan, dan gangguan panik adalah pengalaman yang berkaitan namun berbeda. Serangan panik adalah episode ketakutan yang hebat secara tiba-tiba, sedangkan serangan kecemasan biasanya berhubungan dengan kekhawatiran atau stres kronis. Gangguan panik melibatkan serangan panik yang berulang, yang menyebabkan rasa takut akan serangan di masa depan. Memahami perbedaan ini membantu individu mengenali gejala-gejala mereka dan mencari pengobatan yang tepat.', 'https://youtu.be/Lp2jgkoVLys?si=nZkTbEYqiWvIfN7E', 8, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(34, 5, 1, 'Apa yang Menyebabkan Siklus Serangan Panik - 2/3 Cara Menghentikan Serangan Panik', 'Siklus serangan panik sering kali dipicu oleh sensasi fisik dari kecemasan, yang mengarah pada ketakutan dan perilaku menghindar yang memperkuat siklus tersebut. Dengan belajar menghadapi sensasi-sensasi ini dengan teknik relaksasi, pernapasan dalam, dan restrukturisasi kognitif, individu dapat memutus siklus tersebut dan mengurangi frekuensi dan intensitas serangan panik.', 'https://youtu.be/4TRuJpSyMoY?si=1SE_qlJRrEzUTaO1', 12, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(35, 5, 2, 'Cara Menghentikan Serangan Panik - Bagian 3/3', 'In this guide, we explore strategies for managing and preventing panic attacks, such as gradual exposure to feared situations, mindfulness techniques, and utilizing grounding exercises. These methods help individuals reduce the intensity of panic attacks and regain a sense of control over their bodies and emotions during episodes of anxiety.Dalam panduan ini, kami mengeksplorasi strategi untuk mengelola dan mencegah serangan panik, seperti pemaparan bertahap terhadap situasi yang ditakuti, teknik perhatian, dan memanfaatkan latihan grounding. Metode-metode ini membantu individu mengurangi intensitas serangan panik dan mendapatkan kembali kendali atas tubuh dan emosi mereka selama episode kecemasan.', 'https://youtu.be/wR8oKZ5qTfk?si=PCxfyAN-YstYAz6c', 16, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(36, 5, 2, 'Sistem Saya untuk Menghentikan Serangan Kecemasan: 5 langkah, 20+ Keterampilan untuk Mengatasi Serangan Panik', 'Sistem ini mencakup lima langkah utama dan lebih dari 20 keterampilan mengatasi yang berbeda untuk membantu individu mengelola dan menghentikan kecemasan dan serangan panik. Teknik-tekniknya berkisar dari latihan pernapasan dalam dan visualisasi hingga strategi bicara pada diri sendiri dan teknik-teknik dasar, semuanya dirancang untuk membantu orang mendapatkan kembali kendali selama saat-saat panik dan cemas.', 'https://youtu.be/JA86YOd4zx4?si=0plFqkrke17KeG7f', 15, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(37, 5, 3, 'Having a Panic Attack? The Anti-Struggle Technique -A Guided Walkthrough to Stop a Panic Attack', 'Teknik Anti-Struggle berfokus pada menerima serangan panik apa adanya, tanpa berusaha melawannya. Dengan membiarkan kepanikan terjadi tanpa perlawanan, individu dapat mencegah intensifikasi gejala dan membiarkan tubuh menjadi tenang secara alami. Panduan ini memberikan petunjuk langkah demi langkah untuk menerapkan teknik ini untuk menghentikan serangan panik.', 'https://youtu.be/2CQpyA485wc?si=HO-OjJrxrre-3ZUe', 8, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(38, 5, 3, 'Jadi, Anda Mengalami Serangan Kecemasan (Metode Tenang untuk Menghentikan Serangan Kecemasan)', 'The Calm-Down Method involves focusing on deep, controlled breathing and redirecting attention away from anxiety-inducing thoughts. This method can help individuals manage the physical and emotional symptoms of an anxiety attack by regaining focus, calming the nervous system, and gradually reducing feelings of panic.Metode Tenang melibatkan fokus pada pernapasan yang dalam dan terkendali serta mengalihkan perhatian dari pikiran yang memicu kecemasan. Metode ini dapat membantu individu mengelola gejala fisik dan emosional dari serangan kecemasan dengan mendapatkan kembali fokus, menenangkan sistem saraf, dan secara bertahap mengurangi perasaan panik.', 'https://youtu.be/WGG7MGgptxE?si=mdZNS1JwpaYs3lo1', 5, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(39, 5, 4, 'THIS guy solved Panic Attacks after 30 years of Panic DisorderPria Ini Mengatasi Serangan Panik Setelah 30 Tahun Mengidap Gangguan Panik', 'Kisah ini menyoroti perjalanan seseorang dalam mengatasi gangguan panik setelah 30 tahun berjuang melawan serangan panik. Dengan menerapkan teknik terapi, perubahan gaya hidup, dan memahami pemicu yang mendasari kepanikan, orang ini dapat membebaskan diri dari siklus serangan panik dan mendapatkan kembali kendali atas hidupnya.', 'https://youtu.be/of6xObz3aK4?si=b7PHvY_iLV66XKte', 9, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(40, 5, 4, 'Membebaskan diri dari Serangan Panik dan Agorafobia - bersama Drew Linslata, pembawa acara The Anxious Truth', 'Drew Linslata berbagi strategi untuk mengatasi serangan panik dan agorafobia, menawarkan wawasan tentang bagaimana memahami akar penyebab kondisi ini dapat mengarah pada perubahan yang langgeng. Pendekatannya menggabungkan terapi pemaparan, kesadaran, dan restrukturisasi kognitif untuk membantu individu menghadapi dan mengelola ketakutan mereka, yang pada akhirnya mendapatkan kembali kepercayaan diri dan kebebasan mereka.', 'https://www.youtube.com/live/il47Xomwz94?si=qihKebJleAef_wzH', 61, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(41, 6, 1, 'OCD Tersembunyi Saya Terekspos | Anne Swanson | TEDxVermilionStreet', 'Dalam pembicaraan TEDx ini, Anne Swanson membagikan perjalanan pribadinya dengan Obsessive-Compulsive Disorder (OCD), mengungkapkan perjuangan tersembunyi dan kesalahpahaman dalam hidup dengan kondisi tersebut. Kisahnya menyoroti pentingnya mencari pengobatan dan memahami bahwa OCD bukan hanya tentang kebiasaan unik, tetapi juga masalah kesehatan mental yang serius yang membutuhkan kasih sayang dan dukungan.', 'https://youtu.be/A3f4Gf5Q_2w?si=F_XoQFFsg-qFcqoH', 14, '[]', '2025-05-05 21:07:06', '2025-05-17 05:36:08'),
(42, 6, 1, 'Bisakah Anda Sukses dengan Penyakit Mental? OCD, John Green, dan Kura-kura Sepanjang Jalan', 'This discussion explores whether it’s possible to be successful while managing a mental illness, using John Green’s novel Turtles All the Way Down as a reference point. The book highlights the author\'s personal experience with OCD and offers hope and validation for individuals dealing with mental health challenges while pursuing their dreams and careers.Diskusi ini mengeksplorasi apakah mungkin untuk menjadi sukses sambil mengelola penyakit mental, dengan menggunakan novel Turtles All the Way Down karya John Green sebagai titik referensi. Buku ini menyoroti pengalaman pribadi penulisnya dengan OCD dan menawarkan harapan dan validasi bagi individu yang menghadapi tantangan kesehatan mental sambil mengejar impian dan karier mereka.', 'https://youtu.be/0Gl7qcYw2MQ?si=emtnYyzCa3Bpi8WC', 6, '[]', '2025-05-05 21:07:06', '2025-05-16 06:50:19'),
(43, 6, 2, 'Intrusive Thoughts: Psychologist Answers Your QuestionsPikiran yang Mengganggu: Psikolog Menjawab Pertanyaan Anda', 'Pikiran yang mengganggu adalah ide atau gambaran yang tidak diinginkan dan sering kali menyusahkan yang dapat menyebabkan kecemasan atau rasa bersalah. Seorang psikolog menjawab pertanyaan umum tentang pikiran-pikiran ini, menjelaskan mengapa pikiran-pikiran ini muncul, bagaimana mengelolanya, dan kapan pikiran-pikiran ini mengindikasikan kondisi kesehatan mental seperti OCD atau gangguan kecemasan umum. Memahami pikiran-pikiran ini membantu individu mengatasi tanpa menyalahkan diri sendiri.', 'https://youtu.be/GeZa1OeEk-s?si=L0gcivGUFivsv5HL', 45, '[]', '2025-05-05 21:07:06', '2025-05-20 15:36:50'),
(44, 6, 2, 'Dr Michael Greenberg - Perenungan adalah sebuah keharusan (#252)', 'Dr. Michael Greenberg membahas hubungan antara perenungan—pikiran yang repetitif dan berlebihan—dan perilaku kompulsif dalam gangguan kesehatan mental seperti OCD. Ia menjelaskan bagaimana perenungan dapat memperburuk kecemasan dan depresi, dan menawarkan strategi untuk melepaskan diri dari pola-pola ini dengan menantang siklus pikiran negatif dan mempraktikkan kesadaran penuh.', 'https://youtu.be/PcFTi7HJYnk?si=KgDEs_HXpUA4vJMb', 49, '[]', '2025-05-05 21:07:06', '2025-05-05 21:07:06'),
(45, 6, 3, '6 Jenis Pikiran Intrusif yang Paling Umum', 'Panduan ini membahas enam jenis pikiran mengganggu yang paling umum, termasuk pikiran yang kasar, seksual, dan menghujat, dan lain-lain. Memahami bahwa pikiran-pikiran ini tidak mencerminkan karakter seseorang, tetapi merupakan gejala kecemasan atau OCD membantu mengurangi rasa malu dan memungkinkan individu untuk mengelola pengalaman ini dengan lebih efektif.', 'https://youtu.be/2gUwiYqG57Y?si=ywY2ui-knyb07CpJ', 9, '[]', '2025-05-05 21:07:06', '2025-05-20 16:10:29'),
(46, 6, 3, '6 Pola Pikir yang Memperburuk OCD dan Kecemasan', 'Pola berpikir tertentu, seperti membayangkan bencana, perfeksionisme, atau pemikiran magis, dapat memperburuk OCD dan kecemasan. Panduan ini mengidentifikasi pola-pola tersebut dan menawarkan strategi untuk menantangnya, menggantinya dengan kebiasaan kognitif yang lebih sehat yang dapat mengurangi intensitas gejala dan meningkatkan regulasi emosi.', 'https://youtu.be/1TcbLuyupNo?si=IICLBgt-li4g0vv_', 11, '[]', '2025-05-05 21:07:06', '2025-05-20 16:17:00'),
(47, 6, 4, 'Trikotilomania: Mengobati BFRB seperti Gangguan Mencabut Rambut dan Ekskoriasi Mengupas Kulit', 'Trikotilomania dan Perilaku Repetitif Berfokus pada Tubuh (BFRB) lainnya seperti mengupil adalah gangguan yang sulit diatasi tetapi dapat ditangani dengan perawatan yang tepat. Panduan ini membahas penyebab mendasar dari perilaku ini dan menawarkan pilihan terapi seperti Pelatihan Pembalikan Kebiasaan (HRT) dan terapi perilaku kognitif untuk membantu individu mengurangi atau menghilangkan kebiasaan yang merusak ini.', 'https://youtu.be/n3WOz3_UC-8?si=rVcMQcegMncFjPKZ', 14, '[]', '2025-05-05 21:07:06', '2025-05-20 16:18:10'),
(48, 6, 4, '10 Pertanyaan Singkat tentang OCD', 'Panduan bergaya Tanya Jawab ini menjawab sepuluh pertanyaan umum tentang Gangguan Obsesif-Kompulsif, mulai dari penyebab dan gejalanya hingga pilihan pengobatan dan strategi penanganannya. Panduan ini menyediakan informasi yang ringkas dan mudah dipahami bagi individu yang ingin memahami OCD atau bagi mereka yang berjuang melawan kondisi tersebut.', 'https://youtu.be/-rht3stkIkE?si=uOVf5mE-k_oPREsg', 28, '[]', '2025-05-05 21:07:06', '2025-05-20 16:18:35');

-- --------------------------------------------------------

--
-- Table structure for table `Psychologists`
--

CREATE TABLE `Psychologists` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `handled_count` int NOT NULL DEFAULT '0',
  `location` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `location_url` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `education_1` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `education_2` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `service_type` text COLLATE utf8mb4_general_ci NOT NULL,
  `image_path` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Psychologists`
--

INSERT INTO `Psychologists` (`id`, `name`, `description`, `handled_count`, `location`, `location_url`, `education_1`, `education_2`, `service_type`, `image_path`, `createdAt`, `updatedAt`) VALUES
(1, 'Marissa Meditania, M.Psi., Psikolog', 'Marissa Meditania, M.Psi, Psikolog merupakan seorang psikolog klinis yang biasanya membantu remaja dan dewasa mengatasi masalah psikologis termasuk masalah emosional (kecemasan dan depresi), hubungan (teman, keluarga, dan pasangan), stres dan burnout (di tempat kerja dan sebagai orang tua), gangguan kepribadian, OCD, fobia, dan lainnya. Terapi yang umum digunakan adalah Cognitive Behavioural Therapy (CBT), Rational-Emotive Behavioural Therapy (REBT), Solution-Focused Therapy, Exposure Therapy, dan lainnya. Marissa juga sering memberikan psikoedukasi melalui seminar atau webinar terkait isu di tempat kerja, pengembangan diri, dan pengasuhan anak.', 441, 'Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan', 'https://maps.app.goo.gl/M22dCDfsytCHTHTi7', 'Universitas Padjadjaran   |   2016 • Sarjana Psikologi', 'Universitas Padjadjaran | 2020 • Magister Profesi Psikologi', '[\"Ditempat\",\"Konseling Daring\"]', '/public/psychologists/id1', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(2, 'Novi Maulidta, M.Psi Psikolog', 'Novi Maulidta, M.Psi, Psikolog adalah seorang psikolog berlisensi yang saat ini berpraktik di RS Jiwa Islam Klender. Ia menyediakan layanan konsultasi psikologis bagi individu yang menghadapi berbagai masalah kesehatan mental seperti manajemen stres, pengaturan emosi, kesulitan interpersonal, dan masalah harga diri. Novi mendukung kliennya melalui pendekatan berbasis bukti yang disesuaikan dengan kebutuhan unik mereka, dan berkomitmen untuk menciptakan ruang yang aman dan penuh empati untuk pertumbuhan dan penyembuhan pribadi. Ia juga berpartisipasi aktif dalam upaya pendidikan kesehatan mental untuk meningkatkan kesadaran publik dan mempromosikan kesejahteraan psikologis.', 2153, 'RS Jiwa Islam Klender', 'https://maps.app.goo.gl/xweLwC1nWNRijckU9', 'Universitas Gunadarma |   2014 • Sarjana Psikologi', NULL, '[\"Ditempat\",\"Konseling Daring\"]', '/public/psychologists/id2', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(3, 'Tan Laurencia Yosita, S.Psi., M.Psi., Psikolog', 'Tan Laurencia Yosita, S.Psi., M.Psi., Psikolog adalah seorang psikolog berlisensi dan anggota Himpunan Psikologi Indonesia (HIMPSI). Ia memberikan konsultasi kesehatan psikologis bagi individu yang menghadapi berbagai masalah kesehatan emosional dan mental, dengan tujuan untuk mendukung klien dalam memahami diri mereka sendiri dengan lebih baik dan meningkatkan kesejahteraan mereka secara keseluruhan. Dengan pendekatan yang penuh kasih sayang dan profesional, Tan Laurencia menciptakan lingkungan terapi yang aman di mana klien dapat mengeksplorasi pengalaman mereka dan berupaya mencapai pertumbuhan pribadi dan ketahanan psikologis.', 915, 'Rumah Sakit Telogorejo', 'https://maps.app.goo.gl/9j3rwq4mK9Ge7keS9', 'Universitas Katolik Soegijapranata   |   2018 • Bachelor\'s degree', 'Universitas Katolik Soegijapranata   |   2021 • Master\'s degree', '[\"Ditempat\",\"Konseling Daring\",\"Datang ke Rumah\"]', '/public/psychologists/id3', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(4, 'Karina Devany, M.Psi., Psikolog', 'Karina Devany, M.Psi, Psikolog adalah seorang psikolog klinis untuk orang dewasa yang berpengalaman dalam menangani kasus-kasus seperti depresi, kecemasan, gangguan kepribadian, masalah interpersonal, dan kekerasan terkait trauma. Ia terutama menggunakan pendekatan berbasis kesadaran dan Terapi Penerimaan dan Komitmen (ACT) untuk membantu klien membangun fleksibilitas psikologis, menghadapi emosi yang sulit, dan hidup selaras dengan nilai-nilai pribadi mereka. Karina berkomitmen untuk menyediakan ruang yang penuh kasih sayang dan tanpa menghakimi di mana klien dapat mengeksplorasi tantangan mereka dan mendorong perubahan yang berarti.', 601, 'Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan', 'https://maps.app.goo.gl/M22dCDfsytCHTHTi7', 'Universitas Indonesia   |   2017 • Psikologi S2', 'Universitas Indonesia   |   2021 • Magister Profesi Psikologi', '[\"Ditempat\",\"Konseling Daring\"]', '/public/psychologists/id4', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(5, 'Anggitta Sabrina Nuraini, M.Psi, Psikolog', 'Anggitta Sabrina Nuraini, M.Psi, Psikolog adalah seorang psikolog berlisensi yang saat ini berpraktik di RS Mitra Keluarga Grand Wisata dan RS Mitra Keluarga Deltamas. Ia menawarkan konsultasi psikologis untuk membantu individu mengatasi tantangan emosional, stres, dan kesulitan pribadi. Dengan latar belakang akademis di bidang Psikologi dari Universitas Pelita Harapan dan gelar Magister dari Universitas Islam Indonesia, Anggitta memadukan pengetahuan klinisnya dengan empati untuk mendukung klien dalam mencapai kesehatan mental dan wawasan pribadi dalam lingkungan yang aman dan mendukung.', 194, 'Mitra Keluarga Grand Wisata', 'https://maps.app.goo.gl/KhCint7BjEjeMgcp8', 'Universitas Pelita Harapan   |   2016 • Sarjana Psikologi', 'Universitas Islam Indonesia | 2020 • Magister Psikologi', '[\"Ditempat\",\"Konseling Daring\",\"Datang ke Rumah\"]', '/public/psychologists/id5', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(6, 'Roselli Kezia Ausie, M.Psi., Psikolog', 'Roselli Kezia Ausie, M.Psi, Psikolog—sering dipanggil Kezia—adalah seorang psikolog klinis dengan minat yang kuat terhadap kesehatan mental dan pengalaman luas dalam mendukung orang dewasa muda melalui tantangan pribadi seperti depresi, kecemasan, masalah kepribadian, dan kesulitan hubungan. Pekerjaan terapeutiknya terutama melibatkan konseling, Terapi Perilaku Kognitif (CBT), dan Terapi Penerimaan dan Komitmen (ACT). Selain perannya sebagai rekanan di Ibunda.id, Kezia secara aktif mengembangkan perangkat pengembangan diri dan memberikan psikoedukasi tentang topik yang relevan dengan kebutuhan dan pertumbuhan orang dewasa muda, yang bertujuan untuk memberdayakan mereka dalam menavigasi transisi kehidupan dan kompleksitas emosional.', 1211, 'Kota Bandung - Ibunda.id - Konseling Bandung, Jl. Tanjungsari Asri Tengah No.4, Antapani Wetan', 'https://maps.app.goo.gl/9LhQPDJwiwmrJY4j8', 'Universitas Kristen Maranatha   |   2017 • Sarjana Psikologi', 'Universitas Indonesia | 2021 • Magister Profesi Psikologi', '[\"Ditempat\",\"Konseling Daring\",\"Datang ke Rumah\"]', '/public/psychologists/id6', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(7, 'Achmad Sholeh, S.Psi., M.Psi., Psikolog', 'Achmad Sholeh, S.Psi., M.Psi., Psikolog adalah seorang psikolog berlisensi dan anggota aktif Himpunan Psikologi Indonesia (HIMPSI). Ia memberikan konsultasi kesehatan psikologis untuk membantu individu mengatasi kesulitan emosional, kesejahteraan mental, dan masalah pribadi. Dengan pendekatan profesional dan empatik, Achmad berkomitmen untuk membantu klien lebih memahami diri mereka sendiri, mengelola tantangan psikologis, dan meningkatkan kualitas hidup mereka secara keseluruhan melalui dukungan terapi yang disesuaikan.', 126, 'RS Dr. Oen Solo Baru', 'https://maps.app.goo.gl/zrH9SbA9GNWeF98S9', 'Universitas Islam Indonesia   |   2017 • Sarjana Psikologi', 'Universitas Islam Indonesia | 2020 • Magister Psikologi', '[\"Ditempat\",\"Konseling Daring\",\"Datang ke Rumah\"]', '/public/psychologists/id7', '2025-05-05 20:34:12', '2025-05-05 20:34:12'),
(8, 'Maria Yosephin, S.Psi, M.Psi', 'Maria Yosephin, S.Psi, M.Psi, Psikolog adalah seorang psikolog berlisensi dan anggota Himpunan Psikologi Indonesia (HIMPSI). Ia menawarkan layanan konsultasi psikologis kepada individu yang mencari dukungan untuk kesejahteraan emosional, pengembangan pribadi, dan tantangan kesehatan mental. Dengan pendekatan yang berpusat pada klien dan perawatan profesional, Maria berdedikasi untuk menciptakan ruang yang aman dan mendukung di mana klien dapat mengeksplorasi pikiran dan emosi mereka, mengatasi kesulitan, dan meningkatkan ketahanan psikologis mereka.', 117, 'Charitas Hospital Palembang', 'https://maps.app.goo.gl/TFhLo4TRKQFdhqef8', 'Universitas Sanata Dharma   |   2016 • Sarjana Psikologi', 'Universitas Katolik Indonesia Atma Jaya | 2020 • Magister Psikologi', '[\"Ditempat\",\"Konseling Daring\"]', '/public/psychologists/id8', '2025-05-05 20:34:12', '2025-05-05 20:34:12');

-- --------------------------------------------------------

--
-- Table structure for table `PsychologistTimeSlots`
--

CREATE TABLE `PsychologistTimeSlots` (
  `id` int NOT NULL,
  `psychologist_id` int DEFAULT NULL,
  `time_slot_id` int DEFAULT NULL,
  `day` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `PsychologistTimeSlots`
--

INSERT INTO `PsychologistTimeSlots` (`id`, `psychologist_id`, `time_slot_id`, `day`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(2, 1, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(3, 1, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(4, 1, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(5, 1, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(6, 1, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(7, 1, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(8, 1, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(9, 1, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(10, 1, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(11, 1, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(12, 1, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(13, 1, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(14, 1, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(15, 1, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(16, 1, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(17, 1, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(18, 1, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(19, 1, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(20, 1, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(21, 1, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(22, 1, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(23, 1, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(24, 1, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(25, 1, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(26, 1, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(27, 1, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(28, 1, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(29, 1, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(30, 1, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(31, 1, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(32, 1, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(33, 1, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(34, 1, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(35, 1, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(36, 1, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(37, 1, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(38, 1, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(39, 1, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(40, 1, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(41, 1, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(42, 1, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(43, 1, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(44, 1, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(45, 1, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(46, 1, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(47, 1, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(48, 1, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(49, 1, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(50, 1, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(51, 1, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(52, 1, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(53, 1, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(54, 1, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(55, 1, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(56, 1, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(57, 1, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(58, 1, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(59, 1, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(60, 1, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(61, 1, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(62, 1, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(63, 1, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(64, 2, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(65, 2, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(66, 2, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(67, 2, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(68, 2, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(69, 2, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(70, 2, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(71, 2, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(72, 2, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(73, 2, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(74, 2, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(75, 2, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(76, 2, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(77, 2, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(78, 2, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(79, 2, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(80, 2, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(81, 2, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(82, 2, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(83, 2, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(84, 2, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(85, 2, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(86, 2, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(87, 2, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(88, 2, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(89, 2, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(90, 2, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(91, 2, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(92, 2, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(93, 2, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(94, 2, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(95, 2, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(96, 2, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(97, 2, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(98, 2, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(99, 2, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(100, 2, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(101, 2, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(102, 2, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(103, 2, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(104, 2, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(105, 2, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(106, 2, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(107, 2, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(108, 2, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(109, 2, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(110, 2, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(111, 2, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(112, 2, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(113, 2, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(114, 2, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(115, 2, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(116, 2, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(117, 2, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(118, 2, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(119, 2, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(120, 2, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(121, 2, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(122, 2, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(123, 2, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(124, 2, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(125, 2, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(126, 2, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(127, 3, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(128, 3, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(129, 3, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(130, 3, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(131, 3, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(132, 3, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(133, 3, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(134, 3, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(135, 3, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(136, 3, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(137, 3, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(138, 3, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(139, 3, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(140, 3, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(141, 3, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(142, 3, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(143, 3, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(144, 3, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(145, 3, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(146, 3, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(147, 3, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(148, 3, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(149, 3, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(150, 3, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(151, 3, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(152, 3, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(153, 3, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(154, 3, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(155, 3, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(156, 3, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(157, 3, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(158, 3, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(159, 3, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(160, 3, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(161, 3, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(162, 3, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(163, 3, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(164, 3, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(165, 3, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(166, 3, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(167, 3, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(168, 3, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(169, 3, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(170, 3, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(171, 3, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(172, 3, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(173, 3, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(174, 3, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(175, 3, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(176, 3, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(177, 3, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(178, 3, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(179, 3, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(180, 3, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(181, 3, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(182, 3, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(183, 3, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(184, 3, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(185, 3, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(186, 3, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(187, 3, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(188, 3, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(189, 3, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(190, 4, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(191, 4, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(192, 4, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(193, 4, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(194, 4, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(195, 4, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(196, 4, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(197, 4, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(198, 4, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(199, 4, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(200, 4, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(201, 4, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(202, 4, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(203, 4, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(204, 4, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(205, 4, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(206, 4, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(207, 4, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(208, 4, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(209, 4, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(210, 4, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(211, 4, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(212, 4, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(213, 4, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(214, 4, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(215, 4, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(216, 4, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(217, 4, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(218, 4, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(219, 4, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(220, 4, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(221, 4, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(222, 4, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(223, 4, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(224, 4, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(225, 4, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(226, 4, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(227, 4, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(228, 4, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(229, 4, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(230, 4, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(231, 4, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(232, 4, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(233, 4, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(234, 4, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(235, 4, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(236, 4, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(237, 4, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(238, 4, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(239, 4, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(240, 4, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(241, 4, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(242, 4, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(243, 4, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(244, 4, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(245, 4, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(246, 4, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(247, 4, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(248, 4, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(249, 4, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(250, 4, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(251, 4, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(252, 4, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(253, 5, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(254, 5, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(255, 5, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(256, 5, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(257, 5, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(258, 5, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(259, 5, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(260, 5, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(261, 5, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(262, 5, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(263, 5, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(264, 5, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(265, 5, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(266, 5, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(267, 5, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(268, 5, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(269, 5, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(270, 5, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(271, 5, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(272, 5, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(273, 5, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(274, 5, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(275, 5, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(276, 5, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(277, 5, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(278, 5, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(279, 5, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(280, 5, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(281, 5, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(282, 5, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(283, 5, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(284, 5, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(285, 5, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(286, 5, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(287, 5, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(288, 5, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(289, 5, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(290, 5, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(291, 5, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(292, 5, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(293, 5, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(294, 5, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(295, 5, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(296, 5, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(297, 5, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(298, 5, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(299, 5, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(300, 5, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(301, 5, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(302, 5, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(303, 5, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(304, 5, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(305, 5, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(306, 5, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(307, 5, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(308, 5, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(309, 5, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(310, 5, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(311, 5, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(312, 5, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(313, 5, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(314, 5, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(315, 5, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(316, 6, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(317, 6, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(318, 6, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(319, 6, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(320, 6, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(321, 6, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(322, 6, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(323, 6, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(324, 6, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(325, 6, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(326, 6, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(327, 6, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(328, 6, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(329, 6, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(330, 6, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(331, 6, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(332, 6, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(333, 6, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(334, 6, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(335, 6, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(336, 6, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(337, 6, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(338, 6, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(339, 6, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(340, 6, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(341, 6, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(342, 6, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(343, 6, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(344, 6, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(345, 6, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(346, 6, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(347, 6, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(348, 6, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(349, 6, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(350, 6, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(351, 6, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(352, 6, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(353, 6, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(354, 6, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(355, 6, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(356, 6, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(357, 6, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(358, 6, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(359, 6, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(360, 6, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(361, 6, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(362, 6, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(363, 6, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(364, 6, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(365, 6, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(366, 6, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(367, 6, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(368, 6, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(369, 6, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(370, 6, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(371, 6, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(372, 6, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(373, 6, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(374, 6, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(375, 6, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(376, 6, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(377, 6, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(378, 6, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(379, 7, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(380, 7, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(381, 7, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(382, 7, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(383, 7, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(384, 7, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(385, 7, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(386, 7, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(387, 7, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(388, 7, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(389, 7, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(390, 7, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(391, 7, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(392, 7, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(393, 7, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(394, 7, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(395, 7, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(396, 7, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(397, 7, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(398, 7, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(399, 7, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(400, 7, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(401, 7, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(402, 7, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(403, 7, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(404, 7, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(405, 7, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(406, 7, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(407, 7, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(408, 7, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(409, 7, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(410, 7, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(411, 7, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(412, 7, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(413, 7, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(414, 7, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(415, 7, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(416, 7, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(417, 7, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(418, 7, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(419, 7, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(420, 7, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(421, 7, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(422, 7, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(423, 7, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(424, 7, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(425, 7, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(426, 7, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(427, 7, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(428, 7, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(429, 7, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(430, 7, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(431, 7, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(432, 7, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(433, 7, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(434, 7, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(435, 7, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(436, 7, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(437, 7, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(438, 7, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(439, 7, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(440, 7, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(441, 7, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(442, 8, 1, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(443, 8, 2, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(444, 8, 3, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(445, 8, 4, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(446, 8, 5, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(447, 8, 6, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(448, 8, 7, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(449, 8, 8, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(450, 8, 9, 'Monday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(451, 8, 1, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(452, 8, 2, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(453, 8, 3, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(454, 8, 4, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(455, 8, 5, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(456, 8, 6, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(457, 8, 7, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(458, 8, 8, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(459, 8, 9, 'Tuesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(460, 8, 1, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(461, 8, 2, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(462, 8, 3, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(463, 8, 4, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(464, 8, 5, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(465, 8, 6, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(466, 8, 7, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(467, 8, 8, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(468, 8, 9, 'Wednesday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(469, 8, 1, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(470, 8, 2, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(471, 8, 3, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(472, 8, 4, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(473, 8, 5, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(474, 8, 6, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(475, 8, 7, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(476, 8, 8, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(477, 8, 9, 'Thursday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(478, 8, 1, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(479, 8, 2, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(480, 8, 3, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(481, 8, 4, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(482, 8, 5, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(483, 8, 6, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(484, 8, 7, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(485, 8, 8, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(486, 8, 9, 'Friday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(487, 8, 1, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(488, 8, 2, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(489, 8, 3, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(490, 8, 4, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(491, 8, 5, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(492, 8, 6, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(493, 8, 7, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(494, 8, 8, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(495, 8, 9, 'Saturday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(496, 8, 1, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(497, 8, 2, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(498, 8, 3, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(499, 8, 4, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(500, 8, 5, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(501, 8, 6, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(502, 8, 7, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(503, 8, 8, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54'),
(504, 8, 9, 'Sunday', '2025-05-13 17:58:54', '2025-05-13 17:58:54');

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `id` int NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `options` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `correctIndex` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `quizId` int NOT NULL
) ;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`id`, `text`, `options`, `correctIndex`, `createdAt`, `updatedAt`, `quizId`) VALUES
(1, 'Apa itu respon melawan/melarikan diri/membeku?', '[\"Reaksi terhadap bahaya yang dirasakan\", \"Reaksi terhadap kebahagiaan\", \"Cara untuk bersantai\", \"Latihan fisik\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(2, 'Apa yang dapat mengaktifkan respon melawan/lari/membeku?', '[\"Kegembiraan\", \"Stres\", \"Tidur\", \"Ketenangan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(3, 'Bagaimana stres dan kecemasan dapat memengaruhi kehidupan sehari-hari?', '[\"Dengan meningkatkan fokus\", \"Dengan mengganggu tugas sehari-hari\", \"Dengan membuat Anda merasa berenergi\", \"Dengan meningkatkan relaksasi\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(4, 'Manakah dari berikut ini yang merupakan emosi internal?', '[\"Stres\", \"Kekhawatiran\", \"Ketakutan\", \"Kegembiraan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(5, 'Apa yang dilakukan sistem saraf sebagai respons terhadap kecemasan?', '[\"Menenangkan Anda\", \"Memicu respons melawan/lari\", \"Membuat Anda tidur\", \"Membantu pernapasan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(6, 'Teknik berikut manakah yang membantu mematikan respons melawan/lari/membeku?', '[\"Melompat\", \"Bernapas yang dalam\", \"Berteriak\", \"Melarikan diri\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(7, 'Apa tujuan latihan grounding?', '[\"Untuk merilekskan tubuh Anda\", \"Untuk fokus pada saat ini\", \"Untuk tidur lebih baik\", \"Untuk melatih otot-otot Anda\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(8, 'Menciptakan rasa aman dalam pikiran Anda dapat membantu dalam hal apa?', '[\"Meningkatkan kecemasan\", \"Mengurangi bahaya yang dirasakan\", \"Membuat Anda lebih khawatir\", \"Membuat Anda cemas\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(9, 'Latihan menggambar dapat membantu Anda dalam hal apa?', '[\"Proses perasaan\", \"Latih otot Anda\", \"Lupakan kekhawatiran Anda\", \"Tidur lebih baik\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(10, 'Apa itu banjir emosi dalam hubungan?', '[\"Terlalu rileks\", \"Kesulitan berkomunikasi karena emosi yang meluap\", \"Terlalu banyak tertawa\", \"Berkomunikasi lebih baik saat stres\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 1),
(11, 'Apa langkah pertama untuk pulih dari depresi?', '[\"Mengenali bahwa depresi sedang merasuki Anda\", \"Menerima kesedihan\", \"Membicarakannya\", \"Mengabaikan pikiran negatif\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(12, 'Apa salah satu cara untuk membantu seseorang yang depresi saat mereka tidak ingin bicara?', '[\"Berikan mereka nasihat\", \"Berikan mereka ruang namun tunjukkan dukungan\", \"Paksa mereka untuk terbuka\", \"Berteriak pada mereka agar berbicara\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(13, 'Apa akibat dari \'seharusnya\' pada diri sendiri saat depresi?', '[\"Meningkatkan rasa kasih sayang pada diri sendiri\", \"Perasaan tidak mampu dan bersalah\", \"Pemahaman yang lebih baik terhadap diri sendiri\", \"Relaksasi yang lebih baik\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(14, 'Apa perbedaan antara rasa malu dan rasa bersalah dalam depresi?', '[\"Malu itu tentang tindakan, rasa bersalah itu tentang diri sendiri\", \"Malu itu menargetkan diri sendiri, rasa bersalah itu tentang tindakan\", \"Malu dan rasa bersalah itu sama\", \"Malu membantu menyembuhkan depresi\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(15, 'Apa peran peradangan dalam depresi?', '[\"Mengurangi perasaan sedih\", \"Mungkin berkontribusi terhadap perkembangan depresi\", \"Tidak berdampak\", \"Mengurangi efektivitas pengobatan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(16, 'Menurut Dr. Charles Raison, apa hubungan antara peradangan dan depresi?', '[\"Peradangan memperburuk pengaturan suasana hati dan meningkatkan risiko depresi\", \"Peradangan mengurangi depresi\", \"Peradangan tidak berpengaruh\", \"Peradangan membuat orang lebih bahagia\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(17, 'Apa saja kebohongan yang diceritakan depresi kepada Anda?', '[\"Saya tidak akan pernah menjadi lebih baik\",\"Saya layak untuk bahagia\",\"Saya bisa mengatasinya\",\"Semuanya akan segera membaik\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(18, 'Apa langkah penting dalam pemulihan dari depresi?', '[\"Hanya obat-obatan\", \"Terapi Perilaku Kognitif (CBT) dan praktik perawatan diri\", \"Menghindari interaksi sosial\", \"Tetap sendiri\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(19, 'Apa yang dapat membantu mengurangi keparahan gejala depresi, menurut penelitian terkini?', '[\"Terapi anti-inflamasi dan perubahan gaya hidup\", \"Mengabaikan gejala\", \"Lebih banyak stres\", \"Meningkatnya isolasi\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(20, 'Apa kunci untuk mengatasi kebohongan yang disampaikan depresi kepada Anda?', '[\"Menerimanya sebagai kebenaran\", \"Perawatan dan waktu yang tepat\", \"Mengabaikan perawatan\", \"Tidak mencari bantuan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 2),
(21, 'Apa aspek penting dalam mendukung seseorang yang mengalami depresi atau kecemasan?', '[\"Memberikan saran dengan segera\", \"Mendengarkan dan memvalidasi perasaan mereka\", \"Mengabaikan perilaku mereka\", \"Menyuruh mereka untuk melupakannya\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(22, 'Apa yang harus Anda lakukan ketika seseorang menunjukkan perilaku mencari perhatian?', '[\"Abaikan mereka\", \"Akui perasaan mereka dan berikan dukungan\", \"Beri tahu mereka untuk berhenti mencari perhatian\", \"Tegur mereka atas perilaku mereka\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(23, 'Apa itu mendengarkan reflektif?', '[\"Mendengarkan tanpa menanggapi\", \"Mengulangi apa yang dikatakan pembicara\", \"Mencerminkan perasaan atau pikiran pembicara untuk memastikan pemahaman\", \"Memberikan solusi dengan segera\"]', 2, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(24, 'Mengapa keluarga sering kali menolak perubahan?', '[\"Karena mereka tidak peduli\", \"Karena homeostasis dan kebutuhan untuk menjaga stabilitas\", \"Karena perubahan selalu buruk\", \"Karena mereka tidak menyadari perlunya perubahan\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(25, 'Apa strategi penting saat berbicara tentang pikiran bunuh diri?', '[\"Menawarkan solusi dengan segera\", \"Mendekati pembicaraan dengan penuh perhatian, kasih sayang, dan tanpa menghakimi\", \"Mengabaikan masalah\", \"Menyuruh orang tersebut untuk melupakan masalah\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(26, 'Bagaimana sebaiknya Anda mengatasi perilaku menyakiti diri sendiri?', '[\"Abaikan perasaan orang tersebut\", \"Berikan dukungan tanpa menghakimi dan dorong perawatan profesional\", \"Berikan hukuman\", \"Beri tahu mereka untuk segera berhenti\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(27, 'Apa sumber daya penting untuk membantu teman yang sedang berduka?', '[\"Memberi mereka ruang untuk berduka tanpa dukungan\", \"Memberikan konseling, kelompok pendukung, dan buku-buku bermanfaat\", \"Menyuruh mereka untuk terus maju\", \"Mengabaikan kesedihan mereka\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(28, 'Bagaimana seharusnya Anda berbicara kepada seorang remaja setelah kematian teman sebayanya di sekolah?', '[\"Hindari membahasnya\", \"Bersabarlah, yakinkan mereka, dan tawarkan dukungan profesional jika diperlukan\", \"Katakan pada mereka untuk melupakannya\", \"Abaikan emosi mereka\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 3),
(29, 'Teknik apa yang dapat membantu mengelola kecemasan dan insomnia?', '[\"Bernapas dalam\", \"Minum kopi sebelum tidur\", \"Menonton TV\", \"Mendengarkan musik keras\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(30, 'Apa itu pola tidur bersih?', '[\"Menggunakan perangkat elektronik di tempat tidur\", \"Kebiasaan dan praktik yang meningkatkan kualitas tidur\", \"Tidur kapan saja sepanjang hari\", \"Tidur tanpa rutinitas\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(31, 'Teknik apa yang dapat membantu Anda tertidur lebih cepat?', '[\"Relaksasi otot progresif\", \"Minum minuman berkafein\", \"Begadang\", \"Menonton acara TV yang menegangkan\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(32, 'Apa itu Meditasi Tempat Bahagia ?', '[\"Visualisasi tempat yang damai\", \"Berbicara dengan terapis\", \"Mendengarkan musik keras\", \"Menonton film laga\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(33, 'Apa yang dapat meningkatkan kualitas tidur Anda secara signifikan?', '[\"Menemukan produk tidur yang tepat\", \"Minum terlalu banyak kafein\", \"Memiliki jadwal tidur yang tidak teratur\", \"Tetap terjaga sepanjang malam\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(34, 'Apa penyebab umum mimpi buruk?', '[\"Stres dan trauma\", \"Makan terlalu banyak buah\", \"Olahraga larut malam\", \"Minum air sebelum tidur\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(35, 'Apa yang dapat membantu mengatasi insomnia, menurut pakar tidur Martin Reed?', '[\"Terapi perilaku kognitif untuk insomnia (CBT-I)\",\"Menonton TV sebelum tidur\",\"Melewatkan makan\",\"Berolahraga larut malam\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(36, 'Apa teknik untuk menenangkan pikiran sebelum tidur untuk mengatasi insomnia?', '[\"Bernapas dalam\", \"Membaca berita yang menegangkan\", \"Memeriksa media sosial\", \"Tetap aktif\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(37, 'Apa gejala umum insomnia?', '[\"Sulit tidur\", \"Sering tidur siang di siang hari\", \"Lebih berenergi di malam hari\", \"Nafsu makan meningkat\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(38, 'Bagaimana pengaturan jadwal tidur teratur dapat membantu mengatasi insomnia?', '[\"Ini memberi sinyal ke otak Anda saat waktunya tidur\", \"Ini meningkatkan kecemasan\", \"Ini menyebabkan lebih banyak gangguan\", \"Ini mengganggu ritme sirkadian alami Anda\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 4),
(39, 'Apa salah satu teknik untuk mengurangi intensitas serangan panik?', '[\"Latihan pernapasan\", \"Menghindari semua interaksi sosial\", \"Mengabaikan gejala\", \"Mengonsumsi kafein dalam jumlah besar\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(40, 'Apa yang harus Anda lakukan jika Anda mengalami serangan panik?', '[\"Ambil napas dalam-dalam secara perlahan\", \"Larilah dari situasi tersebut\", \"Pikirkan kekhawatiran Anda\", \"Bicaralah dengan seseorang segera\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(41, 'Bagaimana latihan grounding dapat membantu selama serangan panik?', '[\"Mereka membantu memfokuskan kembali perhatian pada saat ini\", \"Mereka membuat Anda merasa lebih cemas\", \"Mereka mengalihkan perhatian dari gejala fisik\", \"Mereka mencegah Anda memikirkan ketakutan Anda\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(42, 'Apa perbedaan antara serangan panik dan serangan kecemasan?', '[\"Serangan panik adalah ketakutan yang intens secara tiba-tiba, serangan kecemasan bersifat kronis\", \"Serangan kecemasan terjadi secara tiba-tiba, serangan panik bersifat kronis\", \"Serangan panik melibatkan gejala fisik, serangan kecemasan tidak\", \"Serangan kecemasan disebabkan oleh stres, serangan panik tidak\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(43, 'Apa yang memicu siklus serangan panik?', '[\"Sensasi fisik berupa kecemasan yang menyebabkan rasa takut dan penghindaran\", \"Stres akibat pekerjaan\", \"Makan makanan tertentu\", \"Berada di tempat ramai\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(44, 'Apa salah satu metode untuk mengelola dan mencegah serangan panik?', '[\"Terpapar secara bertahap pada situasi yang ditakuti\", \"Mengabaikan perasaan\", \"Segera minum obat\", \"Menghindari semua interaksi sosial\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(45, 'Apa saja yang termasuk dalam Teknik Anti-Struggle?', '[\"Menerima serangan panik tanpa perlawanan\", \"Melawan gejalanya segera\", \"Menghindari sumber kepanikan\", \"Berbicara dengan orang lain\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(46, 'Bagaimana Metode Tenang membantu selama serangan kecemasan?', '[\"Dengan berfokus pada pernapasan yang dalam dan terkendali\", \"Dengan menghindari semua pikiran\", \"Dengan lebih panik\", \"Dengan mengabaikan gejala-gejala\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(47, 'Apa yang membantu orang dalam cerita tersebut untuk mengatasi gangguan panik setelah 30 tahun?', '[\"Teknik terapi, perubahan gaya hidup, dan memahami pemicu\", \"Menghindari situasi sosial\", \"Hanya minum obat\", \"Beristirahat dalam jangka waktu lama\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(48, 'Apa yang Drew Linslata rekomendasikan untuk mengatasi serangan panik dan agorafobia?', '[\"Terapi pemaparan, kesadaran penuh, dan restrukturisasi kognitif\", \"Menghindari semua ketakutan\", \"Mengobati diri sendiri\", \"Mengabaikan pemicu\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 5),
(49, 'Apa kesalahpahaman tentang OCD yang dibahas Anne Swanson dalam pembicaraanya di TEDx-nya?', '[\"OCD hanya tentang kebiasaan-kebiasaan yang aneh\", \"OCD adalah masalah kesehatan mental yang serius\", \"OCD mudah diatasi\", \"OCD hanya mempengaruhi anak-anak\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(50, 'Apa salah satu pemicu umum \"pikiran mengganggu\" pada OCD?', '[\"Ketidakpastian atau keraguan\", \"Instruksi yang jelas\", \"Penguatan positif\", \"Mengabaikan pikiran negatif\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(51, 'Dapatkah Anda menjadi sukses sambil anda mengelola penyakit mental, menurut diskusi tentang buku John Green?', '[\"Tidak, penyakit mental membuat kesuksesan menjadi tidak mungkin\",\"Ya, kesuksesan dapat diraih dengan mengelola penyakit mental\",\"Kesuksesan hanya mungkin dicapai dengan pengobatan\",\"Penyakit mental menghalangi kreativitas\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(52, 'Apa itu pikiran mengganggu atau intrusive thoughts?', '[\"Pikiran atau gambaran yang tidak diinginkan dan mengganggu\", \"Pikiran yang menuntun pada kebahagiaan\", \"Pikiran yang membuat Anda merasa berdaya\", \"Pikiran yang selalu positif\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(53, 'Bagaimana perenungan dapat memengaruhi kesehatan mental, menurut Dr. Michael Greenberg?', '[\"Membantu Anda memecahkan masalah\", \"Dapat memperburuk kecemasan dan depresi\", \"Meningkatkan pengambilan keputusan\", \"Tidak berdampak pada kesehatan mental\"]', 1, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(54, 'Apa enam jenis pikiran mengganggu yang paling umum?', '[\"Pikiran yang kasar, seksual, dan menghujat\", \"Pikiran tentang makanan\", \"Pikiran tentang uang\", \"Pikiran tentang cinta\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(55, 'Apa satu pola pikir yang dapat memperburuk OCD dan kecemasan?', '[\"Pemikiran magis/ajaib\", \"Pemikiran positif\", \"Teknik relaksasi\", \"Pemikiran penuh harapan\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(56, 'Apa itu trikotilomania?', '[\"Gangguan yang menyebabkan seseorang mencabut rambutnya sendiri\", \"Gangguan yang berhubungan dengan makan berlebihan\", \"Gangguan yang berhubungan dengan berpikir berlebihan\", \"Gangguan yang berhubungan dengan rasa takut terhadap kuman\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(57, 'Apa salah satu pengobatan untuk trikotilomania dan BFRB lainnya?', '[\"Pelatihan Pembalikan Kebiasaan (HRT)\", \"Mengabaikan perilaku\", \"Hanya minum obat\", \"Menghindari situasi sosial\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(58, 'Apa tujuan panduan FAQ tentang OCD?', '[\"Untuk menjawab pertanyaan umum tentang OCD\", \"Untuk membuat penderita OCD merasa bersalah\", \"Untuk mendiagnosis OCD\", \"Untuk mengabaikan OCD\"]', 0, '2025-05-05 16:25:14', '2025-05-05 16:25:14', 6),
(59, 'Apa aspek penting dalam mendukung seseorang yang mengalami depresi atau kecemasan?', '[\"Memberikan saran segera\", \"Mendengarkan dan memvalidasi perasaan mereka\", \"Mengabaikan perilaku mereka\", \"Menyuruh mereka untuk melupakannya\"]', 1, '2025-05-05 18:30:19', '2025-05-05 18:30:19', 3),
(60, 'Apa yang harus Anda lakukan ketika seseorang menunjukkan perilaku mencari perhatian?', '[\"Abaikan mereka\", \"Akui perasaan mereka dan berikan dukungan\", \"Beri tahu mereka untuk berhenti mencari perhatian\", \"Tegur mereka atas perilaku mereka\"]', 1, '2025-05-05 18:31:50', '2025-05-05 18:31:50', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Quiz`
--

CREATE TABLE `Quiz` (
  `id` int NOT NULL,
  `courseId` int NOT NULL,
  `duration` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Quiz`
--

INSERT INTO `Quiz` (`id`, `courseId`, `duration`, `createdAt`, `updatedAt`) VALUES
(1, 1, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(2, 2, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(3, 3, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(4, 4, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(5, 5, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59'),
(6, 6, 300, '2025-05-05 23:24:59', '2025-05-05 23:24:59');

-- --------------------------------------------------------

--
-- Table structure for table `Sequelizemeta`
--

CREATE TABLE `Sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Dumping data for table `Sequelizemeta`
--

INSERT INTO `Sequelizemeta` (`name`) VALUES
('20250407160842-create-user.js'),
('20250407160847-create-course.js'),
('20250407160852-create-enrollment.js'),
('20250409184901-add-isVerified-to-users.js'),
('20250414193624-create-consultation.js'),
('20250418171019-create-psychologists.js'),
('20250418172527-create-consultations.js'),
('20250419023718-create-time-slot.js'),
('20250419023750-create-psychologist-time-slot.js'),
('20250420103458-add-time-slot-to-consultations.js'),
('20250421154835-create-materials.js'),
('20250421163002-create-question.js'),
('20250421163016-create-submission.js'),
('20250421165438-add-foreign-key-userId-to-submissions.js'),
('20250428181756-create-quiz.js'),
('20250428190131-add-quizId-to-questions.js'),
('20250428190651-update-submission-with-quizId.js'),
('add-user-fk-to-consultations.js');

-- --------------------------------------------------------

--
-- Table structure for table `Submissions`
--

CREATE TABLE `Submissions` (
  `id` int NOT NULL,
  `answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `score` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int NOT NULL,
  `quizId` int NOT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table `TimeSlots`
--

CREATE TABLE `TimeSlots` (
  `id` int NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `TimeSlots`
--

INSERT INTO `TimeSlots` (`id`, `code`, `start_time`, `end_time`, `category`, `createdAt`, `updatedAt`) VALUES
(1, 'M1', '08:00:00', '09:00:00', 'Pagi', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(2, 'M2', '09:15:00', '10:15:00', 'Pagi', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(3, 'M3', '10:30:00', '11:30:00', 'Pagi', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(4, 'A1', '13:00:00', '14:00:00', 'Siang', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(5, 'A2', '14:15:00', '15:15:00', 'Siang', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(6, 'A3', '15:30:00', '16:30:00', 'Siang', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(7, 'A4', '16:45:00', '17:45:00', 'Siang', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(8, 'E1', '19:30:00', '20:30:00', 'Malam', '2025-04-28 19:20:45', '2025-04-28 19:20:45'),
(9, 'E2', '20:45:00', '21:45:00', 'Malam', '2025-04-28 19:20:45', '2025-04-28 19:20:45');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `isVerified` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `email`, `password`, `role`, `createdAt`, `updatedAt`, `isVerified`) VALUES
(1, 'Umaru', 'umar22002@mail.unpad.ac.id', '$2b$10$PRb1rgdxJ0VtLREHsyN.2ut4ynlefRVV16IIquBpr7M.ZEjG0dgse', 'admin', '2025-05-05 17:30:21', '2025-05-18 17:35:26', 1),
(2, 'Dylan', 'dylan22001@mail.unpad.ac.id', '$2b$10$gaWOSAmp1t5XVTlaDTx4BuWfS4t6GjSZ7s/sXdwsKAjbg3RjaVY.O', 'teacher', '2025-05-19 08:34:39', '2025-05-19 10:22:01', 1),
(3, 'Dylan', 'dylanamadeus05@gmail.com', '$2b$10$DHQ/fHqLYrxoG1M41kdyPuEkqDH6E0T0L08/C3xKjNYXflV8TfKse', 'student', '2025-05-21 11:36:59', '2025-05-21 11:37:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `User_Materials`
--

CREATE TABLE `User_Materials` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `material_id` int NOT NULL,
  `status` int DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Consultations`
--
ALTER TABLE `Consultations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `psychologist_id` (`psychologist_id`),
  ADD KEY `Consultations_time_slot_id_foreign_idx` (`time_slot_id`),
  ADD KEY `fk_consultation_user_id` (`user_id`);

--
-- Indexes for table `Courses`
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Materials`
--
ALTER TABLE `Materials`
  ADD PRIMARY KEY (`material_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `Psychologists`
--
ALTER TABLE `Psychologists`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `PsychologistTimeSlots`
--
ALTER TABLE `PsychologistTimeSlots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Questions_quizId_foreign_idx` (`quizId`);

--
-- Indexes for table `Quiz`
--
ALTER TABLE `Quiz`
  ADD PRIMARY KEY (`id`),
  ADD KEY `courseId` (`courseId`);

--
-- Indexes for table `Sequelizemeta`
--
ALTER TABLE `Sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Submissions`
--
ALTER TABLE `Submissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Submissions_userId_foreign_idx` (`userId`),
  ADD KEY `Submissions_quizId_foreign_idx` (`quizId`);

--
-- Indexes for table `TimeSlots`
--
ALTER TABLE `TimeSlots`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User_Materials`
--
ALTER TABLE `User_Materials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user` (`user_id`),
  ADD KEY `fk_material` (`material_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Consultations`
--
ALTER TABLE `Consultations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `Courses`
--
ALTER TABLE `Courses`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `Materials`
--
ALTER TABLE `Materials`
  MODIFY `material_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Psychologists`
--
ALTER TABLE `Psychologists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Quiz`
--
ALTER TABLE `Quiz`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `Submissions`
--
ALTER TABLE `Submissions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `User_Materials`
--
ALTER TABLE `User_Materials`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Consultations`
--
ALTER TABLE `Consultations`
  ADD CONSTRAINT `Consultations_ibfk_1` FOREIGN KEY (`psychologist_id`) REFERENCES `Psychologists` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `Consultations_time_slot_id_foreign_idx` FOREIGN KEY (`time_slot_id`) REFERENCES `TimeSlots` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_consultation_user_id` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `Materials`
--
ALTER TABLE `Materials`
  ADD CONSTRAINT `Materials_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `Courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Questions`
--
ALTER TABLE `Questions`
  ADD CONSTRAINT `Questions_quizId_foreign_idx` FOREIGN KEY (`quizId`) REFERENCES `Quiz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Quiz`
--
ALTER TABLE `Quiz`
  ADD CONSTRAINT `Quiz_ibfk_1` FOREIGN KEY (`courseId`) REFERENCES `Courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Submissions`
--
ALTER TABLE `Submissions`
  ADD CONSTRAINT `Submissions_quizId_foreign_idx` FOREIGN KEY (`quizId`) REFERENCES `Quiz` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Submissions_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `User_Materials`
--
ALTER TABLE `User_Materials`
  ADD CONSTRAINT `fk_material` FOREIGN KEY (`material_id`) REFERENCES `Materials` (`material_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `Users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
