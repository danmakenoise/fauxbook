# API Endpoints

## HTML API

### Root
- `GET /` - loads React web app

## JSON API

### Users
- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session
- `GET /session/new`
- `POST /session`
- `DELETE /session`

### Profiles
- `GET /api/profiles/:id`
- `POST /api/profiles/
- `PATCH /api/profiles/:id`

### Friendships
- `GET /api/users/:id/friendships/`
- `POST /api/friendships/`
- `PATCH /api/friendships/:id`
- `DELETE /api/notebooks/:id`

### Posts
- `GET /api/posts` - Takes a query for posts on a specific user's profile
- `GET /api/users/:id/posts`
- `POST /api/posts`
- `DELETE /api/posts/:id`

### Comments
- `GET /api/posts/:id/comments`
- `GET /api/comments/:id/comments`
- `POST /api/comments`
- `DELETE /api/comments`

### Messages
- `GET /api/users/:id/messages`
- `GET /api/messages`
- `POST /api/messages`

### Notifications
- `GET /api/notifications`
- `PATCH /api/notifications`

### Likes
- `GET /api/posts/:id/likes`
- `GET /api/comments/:id/likes`
- `POST /api/likes`
- `DELETE /api/likes`
