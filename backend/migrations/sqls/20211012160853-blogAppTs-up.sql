/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS USERS(
  `id` VARCHAR(20) NOT NULL,
  `first_name` VARCHAR(50),
  `last_name` VARCHAR(50),
  `Nick_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(250) NOT NULL,
  `hashed_password` VARCHAR(100) NOT NULL,
  `inscription_time` BIGINT NOT NULL,
  `avatar` VARCHAR(250),
  `biography` VARCHAR(250),
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS CATEGORIES(
  `id` VARCHAR(20) NOT NULL,
  `title` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS SUBCATEGORIES(
  `id` VARCHAR(20) NOT NULL,
  `id_category` VARCHAR(20) NOT NULL,
  `title` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS ARTICLES(
  `id` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `title` TINYTEXT NOT NULL,
  `subtitle` TINYTEXT NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  `date_of_write` BIGINT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS ARTICLE_HAS_CATEGORIES(
  `id` VARCHAR(20) NOT NULL,
  `id_article` VARCHAR(20) NOT NULL,
  `id_subcategory` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS COMMENTS(
  `id` VARCHAR(20) NOT NULL,
  `id_article` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS ARTICLE_HAS_REACTION_FROM_USER(
  `id` VARCHAR(20) NOT NULL,
  `id_article` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `id_reaction` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS COMMENT_HAS_REACTION_FROM_USER(
  `id` VARCHAR(20) NOT NULL,
  `id_comment` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `id_reaction` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS REACTIONS(
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS IMAGES(
  `id` VARCHAR(20) NOT NULL,
  `title` VARCHAR(64) NOT NULL,
  `subtitle` VARCHAR(64) NOT NULL,
  `link` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS ARTICLE_HAS_IMAGES(
  `id` VARCHAR(20) NOT NULL,
  `id_article` VARCHAR(20) NOT NULL,
  `id_image` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS ROLES(
  `id` VARCHAR(20) NOT NULL,
  `name` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS USER_HAS_ROLES(
  `id` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `id_role` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS PRIVATE_MESSAGES(
  `id` VARCHAR(20) NOT NULL,
  `id_user_sender` VARCHAR(20) NOT NULL,
  `id_user_receiver` VARCHAR(20) NOT NULL,
  `is_read` TINYINT DEFAULT 0 NOT NULL,
  `date_of_write` BIGINT NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS CHAT_MESSAGES(
  `id` VARCHAR(20) NOT NULL,
  `id_user` VARCHAR(20) NOT NULL,
  `date_of_write` BIGINT NOT NULL,
  `content` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

/* 
 SQL NEEDED INSERTIONS TO WORK CORRECTLY
 */
INSERT INTO
  ROLES (id, name)
VALUES
  ('61684e7867704', 'ROLE_USER'),
  ('61684edc617c6', 'ROLE_MODERATOR'),
  ('61684ee8a27f8', 'ROLE_CREATOR'),
  ('61684ef679a89', 'ROLE_ADMIN'),
  ('617025fd844e1', 'ROLE_MUTED');

INSERT INTO
  REACTIONS (id, name)
VALUES
  ('61701c3a4ee52', 'REACTION_PLUS'),
  ('61701cea18b8b', 'REACTION_MINUS'),
  ('61701c26d4215', 'REACTION_SMILE'),
  ('61701d0bc44e0', 'REACTION_FROWN'),
  ('61701d11b24d0', 'REACTION_LOVE'),
  ('61701d1a663e8', 'REACTION_ANGRY');