# Schema Information

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
location    | string    | not null
gender      | string    | not null, inclusion: m, f
birthday    | date      | not null, date-range: more than 13 years ago.

## friendships
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
requester_id | integer   | not null, foreign key (references users), indexed
requested_id | integer   | not null, foreign key (references users), indexed
accepted     | boolean   | not null, default: false

## posts
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
profile_id   | integer   | not null, foreign key (references users), indexed
body         | string    | not null
image_url    | string    |  

## likes
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
target_id    | integer   | not null, foreign key (references posts or comments), indexed
type         | string    | not null, polymorphic reference for posts or comments

## comments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
target_id    | integer   | not null, foreign key (references posts or comments), indexed
type         | string    | not null, polymorphic reference for posts or comments
body         | string    | not null

## messages
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
author_id    | integer   | not null, foreign key (references users), indexed
target_id    | integer   | not null, foreign key (references users), indexed
seen         | boolean   | not null, default: false
body         | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## notifications
column name     | data type | details
----------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
target_id    | integer   | not null, foreign key (references comments, posts, likes, friendships), indexed
seen         | boolean   | not null, default: false
