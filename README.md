# Fauxbook [![Build Status](https://travis-ci.org/danmakenoise/fauxbook.svg?branch=master)](https://travis-ci.org/danmakenoise/fauxbook)

> **Fauxbook** is a single-page web-application, based on **Facebook**, for connecting with friends and family. Fauxbook was built on **Ruby on Rails** on the back-end, and uses **React.js** with **Flux** for the front-end.

[Click here for live website.][live-link]

[live-link]: http://fauxbook.danphillips.io
---
## Log-In/Sign-Up
![log-in]

## Feed
![feed]

## Profile
![profile]

---
## Technical

When implementing Friend Requests, it was very important to me to avoid data duplication. Because of this, I challenged myself to handle Friend Requests, and Friendships as one single table. If I were to do this again, I would handle Friend Requests as their own unique table, but this was a fun challenge!

```ruby
# friendship.rb
class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true
  validates :accepted, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :friend, class_name: 'User'
```

Friendships are VERY simple. The user end was where I got to really sink into what Active Record is capable of:

```ruby
# user.rb
has_many :created_friendships,
  class_name: 'Friendship',
  foreign_key: :user_id,
  dependent: :destroy

has_many :requested_friendships,
  class_name: 'Friendship',
  foreign_key: :friend_id,
  dependent: :destroy

has_many :pending_friend_requests,
  -> { where( friendships: { accepted: false } ) },
  through: :created_friendships,
  source: :friend

has_many :friend_requests,
  -> { where( friendships: { accepted: false } ) },
  through: :requested_friendships,
  source: :user

has_many :created_friends,
  -> { where( friendships: { accepted: true } ) },
  through: :created_friendships,
  source: :friend

has_many :requested_friends,
  -> { where( friendships: { accepted: true } ) },
  through: :requested_friendships,
  source: :user
```

While a bit on the complicated side, this had the advantage of having ZERO data duplication. (You could have had two entries per friendship, for example, to handle the various stages of the friendship.) The other nice part is how easy it is to find our friends now:

```ruby
def friends
  created_friends + requested_friends
end
```
---
## Features
 * Sign-Up, Sign-In with E-mail
 * Add Friends
 * Create Posts
 * Comment on Posts
 * Like Posts
 * Receive Notifications From Your Posts
 * Customize Your Profile
 * Search For Users

---
## Todo
 - [ ] Use Pusher for Notifications
 - [ ] Add Profile Picture, Header Picture Crop Adjustment
 - [ ] Add More Profile Attributes
 - [ ] Add Chat
 - [ ] Add Recent Actions Summary
 - [ ] Allow for Private Posts

---
[Original Docs](./docs/README.md)
[log-in]: ./docs/screenshots/login.png
[feed]: ./docs/screenshots/feed.png
[profile]: ./docs/screenshots/profile.png
