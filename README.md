# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [CRUD API](#CRUD API)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD API
This Module currently makes use of GET requests only but full CRUD options are written for possible future additions to functionality

- GET all reviews: Use endpoint '/rooms/:roomId/reviews', where :roomId is the page number in the URL
- POST a new review: Use endpoint '/rooms/:roomId/newReview', where :roomId is the page number in the URL
- PUT (update) a review: Use endpoint '/rooms/:roomId/:reviewer/:field/:value', where :roomId is the page number in the URL, :reviewer is the username of the reviewer, :field is the the category to be altered, and :value is the new value of this field (consult Schema for how to write these last two)
- DELETE a review: Use endpoint '/rooms/:roomId/:reviewer/', where :roomId is the page number in the URL, :reviewer is the username of the reviewer
