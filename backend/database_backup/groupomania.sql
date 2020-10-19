-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 16 oct. 2020 à 13:14
-- Version du serveur :  10.4.14-MariaDB
-- Version de PHP : 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED NOT NULL,
  `postId` int(10) UNSIGNED NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `userId`, `postId`, `date`, `content`) VALUES
(1, 2, 3, '2020-10-12 00:00:00', 'First !'),
(11, 1, 7, '2020-10-16 13:09:19', 'Très bon post, merci !'),
(12, 1, 3, '2020-10-16 13:10:21', 'Super intéressant !');

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `userId` int(10) UNSIGNED NOT NULL,
  `title` varchar(250) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `posts`
--

INSERT INTO `posts` (`id`, `userId`, `title`, `date`, `content`) VALUES
(3, 2, 'Premier post', '2020-10-12 12:22:19', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus lectus, ultricies sit amet turpis et, venenatis gravida urna. Donec eu tincidunt lacus. Vestibulum laoreet turpis egestas posuere vestibulum. Nam rhoncus ex odio, non sodales leo finibus quis. Vestibulum mollis viverra sapien sit amet euismod. Sed rutrum eu nisl in varius. Duis ipsum nibh, lobortis et lorem sed, finibus ultricies nibh. Fusce tincidunt ullamcorper augue, sed lobortis lacus maximus in. Mauris ut ultrices erat. Vestibulum mauris elit, pellentesque at feugiat id, tempor vel urna. Nulla pellentesque egestas egestas. Curabitur tortor nisi, faucibus nec nibh eu, euismod pretium nisl.'),
(6, 1, 'Second post', '2020-10-16 12:56:27', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula in tellus sit amet placerat. Integer venenatis ipsum at hendrerit egestas. Integer eget nisi ac nisl semper egestas sed at mi. Praesent est metus, suscipit a nisi sit amet, gravida mattis dolor. Praesent velit metus, feugiat sed quam id, dapibus efficitur mi.'),
(7, 13, 'Encore un post', '2020-10-16 13:07:54', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales tortor ut ipsum lobortis laoreet. Aliquam erat volutpat. Morbi congue purus ut nulla fermentum, ac volutpat quam tristique. Vestibulum et nisl lacinia, gravida risus a, sodales odio. Duis quis ultrices est. Duis velit enim, lobortis id quam ac, varius tincidunt elit. Quisque eget elementum erat, eget aliquam nisi. Etiam at vehicula lectus, a scelerisque sapien. Aliquam eget urna sed arcu mattis ornare.');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nom` varchar(40) NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `password` varchar(80) NOT NULL,
  `email` varchar(80) NOT NULL,
  `admin` tinyint(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `password`, `email`, `admin`) VALUES
(1, 'Eschlimann', 'Theo', '$2b$10$hhbTusABayCeAIxou3bGEeCbKuPY7CNEtq46/w2Hkeafw/3/OHY3S', 'dGhlby5lc2NobGltYW5uQGdtYWlsLmNvbQ==', 0),
(2, 'Eschliner', 'Moumou', '$2b$10$Su3KuMCvC4oPaMoEuiUN7ODzN3VwMcU9h2bVRyDdUYXbeXoIdjetC', 'bW91bW91QGdtYWlsLmNvbQ==', 0),
(13, 'Admin', 'Theo', '$2b$10$4tbwi0vY.RXixru.nx05eeKTTchedU.5kyqEdvpJ8JKTkL05BRMxi', 'YWRtaW5AZ21haWwuY29t', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_userId_comments` (`userId`),
  ADD KEY `fk_postId_comments` (`postId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_userId_posts` (`userId`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_postId_comments` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_userId_comments` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `fk_userId_posts` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
