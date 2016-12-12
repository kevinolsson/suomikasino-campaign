# ComeOn Work Assignment
A WordPress campaign for ComeOn!
* Built using [Bedrock](https://roots.io/bedrock/) & [Sage](https://roots.io/sage/)
* Consolidated using [Honcho](https://github.com/nickstenning/honcho)

## Requirements
Make sure all dependencies have been installed before moving on:
* [PHP](https://github.com/Homebrew/homebrew-php) >= 5.5 - `brew install php56`
* [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx) 
* MySQL - `brew install mysql`
* [Honcho](https://github.com/nickstenning/honcho) - `pip install honcho`
* [wp-cli](https://wp-cli.org/docs/installing/) - `brew install homebrew/php/wp-cli`
* [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Installation
1. Go to project directory and run composer install.

		$ composer install
				
2. Set up your database.

		$ mysql -u root -p

		mysql> CREATE DATABASE database_name;
		mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
		mysql> GRANT ALL PRIVILEGES ON database_name.* TO 'newuser'@'localhost';

3. Copy `.env.example` to `.env` and update environment variables

		cp .env.example .env

4. Generate the security keys (typing them is a PITA).
		wp dotenv salts regenerate
5. Update remaining environment variables:
	* `DB_NAME` - Database name
	* `DB_USER` - Database user
	* `DB_PASSWORD` - Database password
	* `DB_HOST` - Database host
	* `WP_ENV` - Set to environment (development, staging, production)
	* `WP_HOME` - Full URL to WordPress home (http://0.0.0.0:8000)
	* `WP_SITEURL` - Full URL to WordPress including subdirectory (http://0.0.0.0:8000/wp)
6. Install front-end build dependencies:
		$ cd web/app/themes/comeon
		$ npm install
		$ bower install

## Developing

```
$ honcho start -f Procfile.dev
```

Finally, you might need to open a new tab:
```
http://0.0.0.0:8000
```
