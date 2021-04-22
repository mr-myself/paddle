<h1 align="center">学習型RSS</h1>

# Project Summary

| Item                     | Description                                                                                                           |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Lang                     | Go v1.16                                                                                                              |
| WAF                      | Gin v1.6.3                                                                                                            |
| Database                 | MySQL 8.0                                                                                                             |
| ORM                      | SQLBoiler                                                                                                             |
| Application Architecture | [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)                    |
| CI (Lint & Test)         | [![CircleCI](https://circleci.com/gh/ChubachiPT21/paddle.svg?style=svg)](https://circleci.com/gh/ChubachiPT21/paddle) |
| CD (Deploy on XXX)       | [CircleCI](https://circleci.com/)                                                                                     |

# Get Started

## Build and run containers

We're using `docker-compose` for development.

```
$ cd paddle/
$ docker-compose build
```

Afterwards, you can stop and up docker-compose as usual.

```
$ docker-compose up
$ docker-compose stop
```

# Branch Model

Github Flow

## Pull Request Merge Conditions

You can merge Pull Request when the following conditions are fulfilled.

- PR should be approved by **at least 2 reviewers**.
- The status checks, such as `lint` and `test`, should be passed.

For more details, see the following protection rules.

# How to deploy

TBD

## CI/CD Pipeline

You have to set EC2 connection key, GitHub deployment key, and the variables below in the CircleCI's Project Settings.

- EC2 connection key: the key you get or set in creating an EC2 Instance.
- GitHub deployment key: the key you can set in the GitHub's Project Settings.

| Environment Key                 | Description                                                               |
| ------------------------------- | ------------------------------------------------------------------------- |
| USERNAME                        | EC2 Username                                                              |
| HOST                            | EC2 Hostname or IP Address                                                |
| SSH_PORT                        | EC2 SSH Port                                                              |
