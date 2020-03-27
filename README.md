# chat-space

## usersテーブル
｜Column｜Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :groups, through: :group_users
- has_many :messages
- has_many :group_users

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
### Association
- has_many :users, through: :group_users
- has_many :messages
- has_many :group_users

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|string||
|body|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
