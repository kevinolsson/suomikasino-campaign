# ComeOn Work Assignment
A WordPress campaign for ComeOn!
* Built using [Bedrock](https://roots.io/bedrock/) & [Sage](https://roots.io/sage/)
* Consolidated using [Honcho](https://github.com/nickstenning/honcho)

## Requirements
Make sure all dependencies have been installed before moving on:
* [PHP](https://github.com/Homebrew/homebrew-php) >= 5.5 - `brew install php56`

* PHP >= 5.5 - `brew install php56`
* Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
* MySQL - `brew install mysql`
* honcho - `pip install honcho`

## Installation

Go to the project directory and run `composer install`

```
$ composer install
```

Set up your database

```
$ mysql -u root -p

mysql> CREATE DATABASE database_name;
mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
mysql> GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'localhost';
```

Copy `.env.example` to `.env` and update environment variables:

* `DB_NAME` - Database name
* `DB_USER` - Database user
* `DB_PASSWORD` - Database password
* `DB_HOST` - Database host
* `WP_ENV` - Set to environment (`development`, `staging`, `production`)
* `WP_HOME` - Full URL to WordPress home (http://0.0.0.0:8000)
* `WP_SITEURL` - Full URL to WordPress including subdirectory (http://0.0.0.0:8000/wp)
* `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT` - Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command) or from the [WordPress Salt Generator](https://api.wordpress.org/secret-key/1.1/salt/)

Install front-end build dependencies:

```
$ cd web/app/themes/light-novel
$ npm install
$ bower install
```

## Developing

To start everything up, use `honcho`:

```
$ honcho start -f Procfile.dev
```

To start the PHP dev server manually:

```
$ php -S localhost:8000 -t web/
```

To start gulp:

```
$ cd web/app/themes/light-novel
$ gulp watch
```
