# Flux Stores

### PostStore

Holds all data about posts, likes, comments, and sub-comments.

##### Actions:
- `receiveAllPosts`
- `receiveSinglePost`
- `receiveAllComments`
- `receiveSingleComment`
- `receiveAllLikes`
- `receiveSingleLike`
- `removePost`
- `removeComment`
- `removeLike`

##### Listeners:
- `PostIndex`

### ActionStore

Holds data on recent actions by user's friends.

##### Actions:
- `receiveAllActions`

##### Listeners:
- `ActionIndex`

### SearchedUserStore

Holds information about users who match the inputted search.

##### Actions:
- `receivedSearchedUsers`
- `resetSearchedUsers`

##### Listeners:
- `Search`

### FriendRequestStore

Holds information about pending requests and recent requests.

##### Actions:
- `receiveAllFriendRequests`
- `receiveSingleFriendRequest`
- `acceptFriendRequest`
- `ignoreFriendRequest`

##### Listeners:
- `FriendRequestNotificationButton`
- `FriendRequestIndex`

### ChatFriendStore

Holds information on all of the user's friends for the chat component.

##### Actions:
- `receiveAllFriends'
- `receiveSingleFriend`
- `removeFriend`

##### Listeners:
- `ChatFriendIndex`

### ConversationStore

Holds information on the user's conversations.

##### Actions:
- `receiveAllConversations`
- `receiveSingleConversation`
- `markConversationAsSeen`

##### Listeners:
- `ConversationNotificationButton`
- `ConversationIndex`
- `Conversation`

### NotificationStore

Holds information on all the user's NotificationStore

##### Actions:
- `receiveAllNotifications`
- `markAllNotificationsAsSeen`
- `markNotificationAsSeen`

##### Listeners:
- `NotificationButton`
- `NotificationIndex`

### FriendStore

Holds information on friends when viewing profiles.

##### Actions:
- `receiveAllFriends`
- `receiveSingleFriend`
- `removeFriend`

##### Listeners:
- `FriendSummary`
- `FriendIndex`

### ProfileStore

Holds information on a specific user.

##### Actions:
- `receiveProfile`
- `receiveNewAttributes`

##### Listeners:
- `Profile`
