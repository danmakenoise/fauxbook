## Component Hierarchy

* `App`
  * `Navigation`
    * `Search`
      * `SearchedUserIndex`
        * `SearchedUserItem`
    * `FriendRequestNotificationButton`
      * `FriendRequestIndex`
        * `FriendRequestItem`
    * `ConversationNotificationButton`
      * `ConversationIndex`
        * `ConversationSummaryItem`
    * `NotificationButton`
      * `NotificationIndex`
        * `NotificationItem`
  * `Display`
    * `Feed`
      * `LeftSideBarNavigation`
      * `PostIndex` - Posts by all friends.
        * `PostForm` - Posts to your own profile.
        * `PostItem`
          * `LikeButton`
          * `CommentButton`
            * `CommentForm`
          * `CommentIndex`
            * `CommentItem`
              * `LikeButton`
              * `CommentButton`
                * `CommentForm`
    * `Profile`
      * `ProfileHeader`
        * `FriendRequestButton`
      * `ProfileDisplay`
        * `MainProfileDisplay`
          * `ProfileSummary`
          * `FriendSummary`
          * `PostIndex` - Only posts on that user's profile.
            * `PostForm` - Posts on that user's page.
            * `PostItem`  
        * `EditProfileDisplay` - Restricted to your own profile.
          * `EditProfileAttribute`
            * `EditProfileAttributeForm`
        * `FriendIndex`
          * `FriendItem` - Can remove your own friends here.
        * `AboutProfileDisplay`
          * `FriendIndex`
            * `FriendItem`
  * `ActionIndex`
    * `ActionItem`
  * `Chat`
    * `ChatFriendIndex`
    * `Conversation`
      * `MessageIndex`
        * `MessageItem`
      * `MessageForm`
