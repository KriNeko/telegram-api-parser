/**
* This object represents an incoming update.At most one of the optional 
* parameters can be present in any given update.
*/
export type Update = {
  /**
  * The update‘s unique identifier. Update identifiers start from a certain 
  * positive number and increase sequentially. This ID becomes especially 
  * handy if you’re using Webhooks, since it allows you to ignore repeated 
  * updates or to restore the correct update sequence, should they get out 
  * of order. If there are no new updates for at least a week, then 
  * identifier of the next update will be chosen randomly instead of sequentially.
  */
  update_id: Number,
  /** Optional. New incoming message of any kind — text, photo, sticker, etc. */
  message?: Message,
  /**
  * Optional. New version of a message that is known to the bot and was edited
  */
  edited_message?: Message,
  /**
  * Optional. New incoming channel post of any kind — text, photo, sticker, etc.
  */
  channel_post?: Message,
  /**
  * Optional. New version of a channel post that is known to the bot and was edited
  */
  edited_channel_post?: Message,
  /** Optional. New incoming inline query */
  inline_query?: InlineQuery,
  /**
  * Optional. The result of an inline query that was chosen by a user and 
  * sent to their chat partner. Please see our documentation on the feedback 
  * collecting for details on how to enable these updates for your bot.
  */
  chosen_inline_result?: ChosenInlineResult,
  /** Optional. New incoming callback query */
  callback_query?: CallbackQuery,
  /**
  * Optional. New incoming shipping query. Only for invoices with flexible price
  */
  shipping_query?: ShippingQuery,
  /**
  * Optional. New incoming pre-checkout query. Contains full information 
  * about checkout
  */
  pre_checkout_query?: PreCheckoutQuery,
  /**
  * Optional. New poll state. Bots receive only updates about stopped polls 
  * and polls, which are sent by the bot
  */
  poll?: Poll,
  
}

/** Contains information about the current status of a webhook. */
export type WebhookInfo = {
  /** Webhook URL, may be empty if webhook is not set up */
  url: String,
  /**
  * True, if a custom certificate was provided for webhook certificate checks
  */
  has_custom_certificate: Boolean,
  /** Number of updates awaiting delivery */
  pending_update_count: Number,
  /**
  * Optional. Unix time for the most recent error that happened when trying 
  * to deliver an update via webhook
  */
  last_error_date?: Number,
  /**
  * Optional. Error message in human-readable format for the most recent 
  * error that happened when trying to deliver an update via webhook
  */
  last_error_message?: String,
  /**
  * Optional. Maximum allowed number of simultaneous HTTPS connections to 
  * the webhook for update delivery
  */
  max_connections?: Number,
  /**
  * Optional. A list of update types the bot is subscribed to. Defaults to 
  * all update types
  */
  allowed_updates?: Array<String>,
  
}

/** This object represents a Telegram user or bot. */
export type User = {
  /** Unique identifier for this user or bot */
  id: Number,
  /** True, if this user is a bot */
  is_bot: Boolean,
  /** User‘s or bot’s first name */
  first_name: String,
  /** Optional. User‘s or bot’s last name */
  last_name?: String,
  /** Optional. User‘s or bot’s username */
  username?: String,
  /** Optional. IETF language tag of the user's language */
  language_code?: String,
  
}

/** This object represents a chat. */
export type Chat = {
  /**
  * Unique identifier for this chat. This number may be greater than 32 bits 
  * and some programming languages may have difficulty/silent defects in 
  * interpreting it. But it is smaller than 52 bits, so a signed 64 bit 
  * integer or double-precision float type are safe for storing this identifier.
  */
  id: Number,
  /**
  * Type of chat, can be either “private”, “group”, “supergroup” or “channel”
  */
  type: String,
  /** Optional. Title, for supergroups, channels and group chats */
  title?: String,
  /**
  * Optional. Username, for private chats, supergroups and channels if available
  */
  username?: String,
  /** Optional. First name of the other party in a private chat */
  first_name?: String,
  /** Optional. Last name of the other party in a private chat */
  last_name?: String,
  /** Optional. Chat photo. Returned only in getChat. */
  photo?: ChatPhoto,
  /**
  * Optional. Description, for groups, supergroups and channel chats. 
  * Returned only in getChat.
  */
  description?: String,
  /**
  * Optional. Chat invite link, for groups, supergroups and channel chats. 
  * Each administrator in a chat generates their own invite links, so the 
  * bot must first generate the link using exportChatInviteLink. Returned 
  * only in getChat.
  */
  invite_link?: String,
  /**
  * Optional. Pinned message, for groups, supergroups and channels. Returned 
  * only in getChat.
  */
  pinned_message?: Message,
  /**
  * Optional. Default chat member permissions, for groups and supergroups. 
  * Returned only in getChat.
  */
  permissions?: ChatPermissions,
  /**
  * Optional. For supergroups, name of group sticker set. Returned only in getChat.
  */
  sticker_set_name?: String,
  /**
  * Optional. True, if the bot can change the group sticker set. Returned 
  * only in getChat.
  */
  can_set_sticker_set?: Boolean,
  
}

/** This object represents a message. */
export type Message = {
  /** Unique message identifier inside this chat */
  message_id: Number,
  /** Optional. Sender, empty for messages sent to channels */
  from?: User,
  /** Date the message was sent in Unix time */
  date: Number,
  /** Conversation the message belongs to */
  chat: Chat,
  /** Optional. For forwarded messages, sender of the original message */
  forward_from?: User,
  /**
  * Optional. For messages forwarded from channels, information about the 
  * original channel
  */
  forward_from_chat?: Chat,
  /**
  * Optional. For messages forwarded from channels, identifier of the 
  * original message in the channel
  */
  forward_from_message_id?: Number,
  /**
  * Optional. For messages forwarded from channels, signature of the post 
  * author if present
  */
  forward_signature?: String,
  /**
  * Optional. Sender's name for messages forwarded from users who disallow 
  * adding a link to their account in forwarded messages
  */
  forward_sender_name?: String,
  /**
  * Optional. For forwarded messages, date the original message was sent in 
  * Unix time
  */
  forward_date?: Number,
  /**
  * Optional. For replies, the original message. Note that the Message 
  * object in this field will not contain further reply_to_message fields 
  * even if it itself is a reply.
  */
  reply_to_message?: Message,
  /** Optional. Date the message was last edited in Unix time */
  edit_date?: Number,
  /**
  * Optional. The unique identifier of a media message group this message 
  * belongs to
  */
  media_group_id?: String,
  /** Optional. Signature of the post author for messages in channels */
  author_signature?: String,
  /**
  * Optional. For text messages, the actual UTF-8 text of the message, 
  * 0-4096 characters.
  */
  text?: String,
  /**
  * Optional. For text messages, special entities like usernames, URLs, bot 
  * commands, etc. that appear in the text
  */
  entities?: Array<MessageEntity>,
  /**
  * Optional. For messages with a caption, special entities like usernames, 
  * URLs, bot commands, etc. that appear in the caption
  */
  caption_entities?: Array<MessageEntity>,
  /** Optional. Message is an audio file, information about the file */
  audio?: Audio,
  /** Optional. Message is a general file, information about the file */
  document?: Document,
  /**
  * Optional. Message is an animation, information about the animation. For 
  * backward compatibility, when this field is set, the document field will 
  * also be set
  */
  animation?: Animation,
  /**
  * Optional. Message is a game, information about the game. More about 
  * games »
  */
  game?: Game,
  /** Optional. Message is a photo, available sizes of the photo */
  photo?: Array<PhotoSize>,
  /** Optional. Message is a sticker, information about the sticker */
  sticker?: Sticker,
  /** Optional. Message is a video, information about the video */
  video?: Video,
  /** Optional. Message is a voice message, information about the file */
  voice?: Voice,
  /** Optional. Message is a video note, information about the video message */
  video_note?: VideoNote,
  /**
  * Optional. Caption for the animation, audio, document, photo, video or 
  * voice, 0-1024 characters
  */
  caption?: String,
  /** Optional. Message is a shared contact, information about the contact */
  contact?: Contact,
  /** Optional. Message is a shared location, information about the location */
  location?: Location,
  /** Optional. Message is a venue, information about the venue */
  venue?: Venue,
  /** Optional. Message is a native poll, information about the poll */
  poll?: Poll,
  /**
  * Optional. New members that were added to the group or supergroup and 
  * information about them (the bot itself may be one of these members)
  */
  new_chat_members?: Array<User>,
  /**
  * Optional. A member was removed from the group, information about them 
  * (this member may be the bot itself)
  */
  left_chat_member?: User,
  /** Optional. A chat title was changed to this value */
  new_chat_title?: String,
  /** Optional. A chat photo was change to this value */
  new_chat_photo?: Array<PhotoSize>,
  /** Optional. Service message: the chat photo was deleted */
  delete_chat_photo?: Boolean,
  /** Optional. Service message: the group has been created */
  group_chat_created?: Boolean,
  /**
  * Optional. Service message: the supergroup has been created. This field 
  * can‘t be received in a message coming through updates, because bot can’t 
  * be a member of a supergroup when it is created. It can only be found in 
  * reply_to_message if someone replies to a very first message in a 
  * directly created supergroup.
  */
  supergroup_chat_created?: Boolean,
  /**
  * Optional. Service message: the channel has been created. This field 
  * can‘t be received in a message coming through updates, because bot can’t 
  * be a member of a channel when it is created. It can only be found in 
  * reply_to_message if someone replies to a very first message in a channel.
  */
  channel_chat_created?: Boolean,
  /**
  * Optional. The group has been migrated to a supergroup with the specified 
  * identifier. This number may be greater than 32 bits and some programming 
  * languages may have difficulty/silent defects in interpreting it. But it 
  * is smaller than 52 bits, so a signed 64 bit integer or double-precision 
  * float type are safe for storing this identifier.
  */
  migrate_to_chat_id?: Number,
  /**
  * Optional. The supergroup has been migrated from a group with the 
  * specified identifier. This number may be greater than 32 bits and some 
  * programming languages may have difficulty/silent defects in interpreting 
  * it. But it is smaller than 52 bits, so a signed 64 bit integer or 
  * double-precision float type are safe for storing this identifier.
  */
  migrate_from_chat_id?: Number,
  /**
  * Optional. Specified message was pinned. Note that the Message object in 
  * this field will not contain further reply_to_message fields even if it 
  * is itself a reply.
  */
  pinned_message?: Message,
  /**
  * Optional. Message is an invoice for a payment, information about the 
  * invoice. More about payments »
  */
  invoice?: Invoice,
  /**
  * Optional. Message is a service message about a successful payment, 
  * information about the payment. More about payments »
  */
  successful_payment?: SuccessfulPayment,
  /**
  * Optional. The domain name of the website on which the user has logged 
  * in. More about Telegram Login »
  */
  connected_website?: String,
  /** Optional. Telegram Passport data */
  passport_data?: PassportData,
  /**
  * Optional. Inline keyboard attached to the message. login_url buttons are 
  * represented as ordinary url buttons.
  */
  reply_markup?: InlineKeyboardMarkup,
  
}

/**
* This object represents one special entity in a text message. For 
* example, hashtags, usernames, URLs, etc.
*/
export type MessageEntity = {
  /**
  * Type of the entity. Can be mention (@username), hashtag, cashtag, 
  * bot_command, url, email, phone_number, bold (bold text), italic (italic 
  * text), code (monowidth string), pre (monowidth block), text_link (for 
  * clickable text URLs), text_mention (for users without usernames)
  */
  type: String,
  /** Offset in UTF-16 code units to the start of the entity */
  offset: Number,
  /** Length of the entity in UTF-16 code units */
  length: Number,
  /**
  * Optional. For “text_link” only, url that will be opened after user taps 
  * on the text
  */
  url?: String,
  /** Optional. For “text_mention” only, the mentioned user */
  user?: User,
  
}

/**
* This object represents one size of a photo or a file / sticker thumbnail.
*/
export type PhotoSize = {
  /** Identifier for this file */
  file_id: String,
  /** Photo width */
  width: Number,
  /** Photo height */
  height: Number,
  /** Optional. File size */
  file_size?: Number,
  
}

/**
* This object represents an audio file to be treated as music by the 
* Telegram clients.
*/
export type Audio = {
  /** Identifier for this file */
  file_id: String,
  /** Duration of the audio in seconds as defined by sender */
  duration: Number,
  /** Optional. Performer of the audio as defined by sender or by audio tags */
  performer?: String,
  /** Optional. Title of the audio as defined by sender or by audio tags */
  title?: String,
  /** Optional. MIME type of the file as defined by sender */
  mime_type?: String,
  /** Optional. File size */
  file_size?: Number,
  /** Optional. Thumbnail of the album cover to which the music file belongs */
  thumb?: PhotoSize,
  
}

/**
* This object represents a general file (as opposed to photos, voice 
* messages and audio files).
*/
export type Document = {
  /** Identifier for this file */
  file_id: String,
  /** Optional. Document thumbnail as defined by sender */
  thumb?: PhotoSize,
  /** Optional. Original filename as defined by sender */
  file_name?: String,
  /** Optional. MIME type of the file as defined by sender */
  mime_type?: String,
  /** Optional. File size */
  file_size?: Number,
  
}

/** This object represents a video file. */
export type Video = {
  /** Identifier for this file */
  file_id: String,
  /** Video width as defined by sender */
  width: Number,
  /** Video height as defined by sender */
  height: Number,
  /** Duration of the video in seconds as defined by sender */
  duration: Number,
  /** Optional. Video thumbnail */
  thumb?: PhotoSize,
  /** Optional. Mime type of a file as defined by sender */
  mime_type?: String,
  /** Optional. File size */
  file_size?: Number,
  
}

/**
* This object represents an animation file (GIF or H.264/MPEG-4 AVC video 
* without sound).
*/
export type Animation = {
  /** Identifier for this file */
  file_id: String,
  /** Video width as defined by sender */
  width: Number,
  /** Video height as defined by sender */
  height: Number,
  /** Duration of the video in seconds as defined by sender */
  duration: Number,
  /** Optional. Animation thumbnail as defined by sender */
  thumb?: PhotoSize,
  /** Optional. Original animation filename as defined by sender */
  file_name?: String,
  /** Optional. MIME type of the file as defined by sender */
  mime_type?: String,
  /** Optional. File size */
  file_size?: Number,
  
}

/** This object represents a voice note. */
export type Voice = {
  /** Identifier for this file */
  file_id: String,
  /** Duration of the audio in seconds as defined by sender */
  duration: Number,
  /** Optional. MIME type of the file as defined by sender */
  mime_type?: String,
  /** Optional. File size */
  file_size?: Number,
  
}

/**
* This object represents a video message (available in Telegram apps as of v.4.0).
*/
export type VideoNote = {
  /** Identifier for this file */
  file_id: String,
  /**
  * Video width and height (diameter of the video message) as defined by sender
  */
  length: Number,
  /** Duration of the video in seconds as defined by sender */
  duration: Number,
  /** Optional. Video thumbnail */
  thumb?: PhotoSize,
  /** Optional. File size */
  file_size?: Number,
  
}

/** This object represents a phone contact. */
export type Contact = {
  /** Contact's phone number */
  phone_number: String,
  /** Contact's first name */
  first_name: String,
  /** Optional. Contact's last name */
  last_name?: String,
  /** Optional. Contact's user identifier in Telegram */
  user_id?: Number,
  /** Optional. Additional data about the contact in the form of a vCard */
  vcard?: String,
  
}

/** This object represents a point on the map. */
export type Location = {
  /** Longitude as defined by sender */
  longitude: Number,
  /** Latitude as defined by sender */
  latitude: Number,
  
}

/** This object represents a venue. */
export type Venue = {
  /** Venue location */
  location: Location,
  /** Name of the venue */
  title: String,
  /** Address of the venue */
  address: String,
  /** Optional. Foursquare identifier of the venue */
  foursquare_id?: String,
  /**
  * Optional. Foursquare type of the venue. (For example, 
  * “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  */
  foursquare_type?: String,
  
}

/** This object contains information about one answer option in a poll. */
export type PollOption = {
  /** Option text, 1-100 characters */
  text: String,
  /** Number of users that voted for this option */
  voter_count: Number,
  
}

/** This object contains information about a poll. */
export type Poll = {
  /** Unique poll identifier */
  id: String,
  /** Poll question, 1-255 characters */
  question: String,
  /** List of poll options */
  options: Array<PollOption>,
  /** True, if the poll is closed */
  is_closed: Boolean,
  
}

/** This object represent a user's profile pictures. */
export type UserProfilePhotos = {
  /** Total number of profile pictures the target user has */
  total_count: Number,
  /** Requested profile pictures (in up to 4 sizes each) */
  photos: Array<Array<PhotoSize>>,
  
}

/**
* This object represents a file ready to be downloaded. The file can be 
* downloaded via the link 
* https://api.telegram.org/file/bot<token>/<file_path>. It is guaranteed 
* that the link will be valid for at least 1 hour. When the link expires, 
* a new one can be requested by calling getFile.
*/
export type File = {
  /** Identifier for this file */
  file_id: String,
  /** Optional. File size, if known */
  file_size?: Number,
  /**
  * Optional. File path. Use 
  * https://api.telegram.org/file/bot<token>/<file_path> to get the file.
  */
  file_path?: String,
  
}

/**
* This object represents a custom keyboard with reply options (see 
* Introduction to bots for details and examples).
*/
export type ReplyKeyboardMarkup = {
  /**
  * Array of button rows, each represented by an Array of KeyboardButton objects
  */
  keyboard: Array<Array<KeyboardButton>>,
  /**
  * Optional. Requests clients to resize the keyboard vertically for optimal 
  * fit (e.g., make the keyboard smaller if there are just two rows of 
  * buttons). Defaults to false, in which case the custom keyboard is always 
  * of the same height as the app's standard keyboard.
  */
  resize_keyboard?: Boolean,
  /**
  * Optional. Requests clients to hide the keyboard as soon as it's been 
  * used. The keyboard will still be available, but clients will 
  * automatically display the usual letter-keyboard in the chat – the user 
  * can press a special button in the input field to see the custom keyboard 
  * again. Defaults to false.
  */
  one_time_keyboard?: Boolean,
  /**
  * Optional. Use this parameter if you want to show the keyboard to 
  * specific users only. Targets: 1) users that are @mentioned in the text 
  * of the Message object; 2) if the bot's message is a reply (has 
  * reply_to_message_id), sender of the original message.Example: A user 
  * requests to change the bot‘s language, bot replies to the request with a 
  * keyboard to select the new language. Other users in the group don’t see 
  * the keyboard.
  */
  selective?: Boolean,
  
}

/**
* This object represents one button of the reply keyboard. For simple text 
* buttons String can be used instead of this object to specify text of the 
* button. Optional fields are mutually exclusive.
*/
export type KeyboardButton = {
  /**
  * Text of the button. If none of the optional fields are used, it will be 
  * sent as a message when the button is pressed
  */
  text: String,
  /**
  * Optional. If True, the user's phone number will be sent as a contact 
  * when the button is pressed. Available in private chats only
  */
  request_contact?: Boolean,
  /**
  * Optional. If True, the user's current location will be sent when the 
  * button is pressed. Available in private chats only
  */
  request_location?: Boolean,
  
}

/**
* Upon receiving a message with this object, Telegram clients will remove 
* the current custom keyboard and display the default letter-keyboard. By 
* default, custom keyboards are displayed until a new keyboard is sent by 
* a bot. An exception is made for one-time keyboards that are hidden 
* immediately after the user presses a button (see ReplyKeyboardMarkup).
*/
export type ReplyKeyboardRemove = {
  /**
  * Requests clients to remove the custom keyboard (user will not be able to 
  * summon this keyboard; if you want to hide the keyboard from sight but 
  * keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup)
  */
  remove_keyboard: Boolean,
  /**
  * Optional. Use this parameter if you want to remove the keyboard for 
  * specific users only. Targets: 1) users that are @mentioned in the text 
  * of the Message object; 2) if the bot's message is a reply (has 
  * reply_to_message_id), sender of the original message.Example: A user 
  * votes in a poll, bot returns confirmation message in reply to the vote 
  * and removes the keyboard for that user, while still showing the keyboard 
  * with poll options to users who haven't voted yet.
  */
  selective?: Boolean,
  
}

/**
* This object represents an inline keyboard that appears right next to the 
* message it belongs to.
*/
export type InlineKeyboardMarkup = {
  /**
  * Array of button rows, each represented by an Array of 
  * InlineKeyboardButton objects
  */
  inline_keyboard: Array<Array<InlineKeyboardButton>>,
  
}

/**
* This object represents one button of an inline keyboard. You must use 
* exactly one of the optional fields.
*/
export type InlineKeyboardButton = {
  /** Label text on the button */
  text: String,
  /** Optional. HTTP or tg:// url to be opened when button is pressed */
  url?: String,
  /**
  * Optional. An HTTP URL used to automatically authorize the user. Can be 
  * used as a replacement for the Telegram Login Widget.
  */
  login_url?: LoginUrl,
  /**
  * Optional. Data to be sent in a callback query to the bot when button is 
  * pressed, 1-64 bytes
  */
  callback_data?: String,
  /**
  * Optional. If set, pressing the button will prompt the user to select one 
  * of their chats, open that chat and insert the bot‘s username and the 
  * specified inline query in the input field. Can be empty, in which case 
  * just the bot’s username will be inserted.Note: This offers an easy way 
  * for users to start using your bot in inline mode when they are currently 
  * in a private chat with it. Especially useful when combined with 
  * switch_pm… actions – in this case the user will be automatically 
  * returned to the chat they switched from, skipping the chat selection screen.
  */
  switch_inline_query?: String,
  /**
  * Optional. If set, pressing the button will insert the bot‘s username and 
  * the specified inline query in the current chat's input field. Can be 
  * empty, in which case only the bot’s username will be inserted.This 
  * offers a quick way for the user to open your bot in inline mode in the 
  * same chat – good for selecting something from multiple options.
  */
  switch_inline_query_current_chat?: String,
  /**
  * Optional. Description of the game that will be launched when the user 
  * presses the button.NOTE: This type of button must always be the first 
  * button in the first row.
  */
  callback_game?: CallbackGame,
  /**
  * Optional. Specify True, to send a Pay button.NOTE: This type of button 
  * must always be the first button in the first row.
  */
  pay?: Boolean,
  
}

/**
* This object represents a parameter of the inline keyboard button used to 
* automatically authorize a user. Serves as a great replacement for the 
* Telegram Login Widget when the user is coming from Telegram. All the 
* user needs to do is tap/click a button and confirm that they want to log in:
*/
export type LoginUrl = {
  /**
  * An HTTP URL to be opened with user authorization data added to the query 
  * string when the button is pressed. If the user refuses to provide 
  * authorization data, the original URL without information about the user 
  * will be opened. The data added is the same as described in Receiving 
  * authorization data.NOTE: You must always check the hash of the received 
  * data to verify the authentication and the integrity of the data as 
  * described in Checking authorization.
  */
  url: String,
  /** Optional. New text of the button in forwarded messages. */
  forward_text?: String,
  /**
  * Optional. Username of a bot, which will be used for user authorization. 
  * See Setting up a bot for more details. If not specified, the current 
  * bot's username will be assumed. The url's domain must be the same as the 
  * domain linked with the bot. See Linking your domain to the bot for more details.
  */
  bot_username?: String,
  /**
  * Optional. Pass True to request the permission for your bot to send 
  * messages to the user.
  */
  request_write_access?: Boolean,
  
}

/**
* This object represents an incoming callback query from a callback button 
* in an inline keyboard. If the button that originated the query was 
* attached to a message sent by the bot, the field message will be 
* present. If the button was attached to a message sent via the bot (in 
* inline mode), the field inline_message_id will be present. Exactly one 
* of the fields data or game_short_name will be present.
*/
export type CallbackQuery = {
  /** Unique identifier for this query */
  id: String,
  /** Sender */
  from: User,
  /**
  * Optional. Message with the callback button that originated the query. 
  * Note that message content and message date will not be available if the 
  * message is too old
  */
  message?: Message,
  /**
  * Optional. Identifier of the message sent via the bot in inline mode, 
  * that originated the query.
  */
  inline_message_id?: String,
  /**
  * Global identifier, uniquely corresponding to the chat to which the 
  * message with the callback button was sent. Useful for high scores in games.
  */
  chat_instance: String,
  /**
  * Optional. Data associated with the callback button. Be aware that a bad 
  * client can send arbitrary data in this field.
  */
  data?: String,
  /**
  * Optional. Short name of a Game to be returned, serves as the unique 
  * identifier for the game
  */
  game_short_name?: String,
  
}

/**
* Upon receiving a message with this object, Telegram clients will display 
* a reply interface to the user (act as if the user has selected the bot‘s 
* message and tapped ’Reply'). This can be extremely useful if you want to 
* create user-friendly step-by-step interfaces without having to sacrifice 
* privacy mode.
*/
export type ForceReply = {
  /**
  * Shows reply interface to the user, as if they manually selected the 
  * bot‘s message and tapped ’Reply'
  */
  force_reply: Boolean,
  /**
  * Optional. Use this parameter if you want to force reply from specific 
  * users only. Targets: 1) users that are @mentioned in the text of the 
  * Message object; 2) if the bot's message is a reply (has 
  * reply_to_message_id), sender of the original message.
  */
  selective?: Boolean,
  
}

/** This object represents a chat photo. */
export type ChatPhoto = {
  /**
  * File identifier of small (160x160) chat photo. This file_id can be used 
  * only for photo download and only for as long as the photo is not changed.
  */
  small_file_id: String,
  /**
  * File identifier of big (640x640) chat photo. This file_id can be used 
  * only for photo download and only for as long as the photo is not changed.
  */
  big_file_id: String,
  
}

/** This object contains information about one member of a chat. */
export type ChatMember = {
  /** Information about the user */
  user: User,
  /**
  * The member's status in the chat. Can be “creator”, “administrator”, 
  * “member”, “restricted”, “left” or “kicked”
  */
  status: String,
  /**
  * Optional. Restricted and kicked only. Date when restrictions will be 
  * lifted for this user; unix time
  */
  until_date?: Number,
  /**
  * Optional. Administrators only. True, if the bot is allowed to edit 
  * administrator privileges of that user
  */
  can_be_edited?: Boolean,
  /**
  * Optional. Administrators only. True, if the administrator can post in 
  * the channel; channels only
  */
  can_post_messages?: Boolean,
  /**
  * Optional. Administrators only. True, if the administrator can edit 
  * messages of other users and can pin messages; channels only
  */
  can_edit_messages?: Boolean,
  /**
  * Optional. Administrators only. True, if the administrator can delete 
  * messages of other users
  */
  can_delete_messages?: Boolean,
  /**
  * Optional. Administrators only. True, if the administrator can restrict, 
  * ban or unban chat members
  */
  can_restrict_members?: Boolean,
  /**
  * Optional. Administrators only. True, if the administrator can add new 
  * administrators with a subset of his own privileges or demote 
  * administrators that he has promoted, directly or indirectly (promoted by 
  * administrators that were appointed by the user)
  */
  can_promote_members?: Boolean,
  /**
  * Optional. Administrators and restricted only. True, if the user is 
  * allowed to change the chat title, photo and other settings
  */
  can_change_info?: Boolean,
  /**
  * Optional. Administrators and restricted only. True, if the user is 
  * allowed to invite new users to the chat
  */
  can_invite_users?: Boolean,
  /**
  * Optional. Administrators and restricted only. True, if the user is 
  * allowed to pin messages; groups and supergroups only
  */
  can_pin_messages?: Boolean,
  /**
  * Optional. Restricted only. True, if the user is a member of the chat at 
  * the moment of the request
  */
  is_member?: Boolean,
  /**
  * Optional. Restricted only. True, if the user is allowed to send text 
  * messages, contacts, locations and venues
  */
  can_send_messages?: Boolean,
  /**
  * Optional. Restricted only. True, if the user is allowed to send audios, 
  * documents, photos, videos, video notes and voice notes
  */
  can_send_media_messages?: Boolean,
  /** Optional. Restricted only. True, if the user is allowed to send polls */
  can_send_polls?: Boolean,
  /**
  * Optional. Restricted only. True, if the user is allowed to send 
  * animations, games, stickers and use inline bots
  */
  can_send_other_messages?: Boolean,
  /**
  * Optional. Restricted only. True, if the user is allowed to add web page 
  * previews to their messages
  */
  can_add_web_page_previews?: Boolean,
  
}

/**
* Describes actions that a non-administrator user is allowed to take in a chat.
*/
export type ChatPermissions = {
  /**
  * Optional. True, if the user is allowed to send text messages, contacts, 
  * locations and venues
  */
  can_send_messages?: Boolean,
  /**
  * Optional. True, if the user is allowed to send audios, documents, 
  * photos, videos, video notes and voice notes, implies can_send_messages
  */
  can_send_media_messages?: Boolean,
  /**
  * Optional. True, if the user is allowed to send polls, implies can_send_messages
  */
  can_send_polls?: Boolean,
  /**
  * Optional. True, if the user is allowed to send animations, games, 
  * stickers and use inline bots, implies can_send_media_messages
  */
  can_send_other_messages?: Boolean,
  /**
  * Optional. True, if the user is allowed to add web page previews to their 
  * messages, implies can_send_media_messages
  */
  can_add_web_page_previews?: Boolean,
  /**
  * Optional. True, if the user is allowed to change the chat title, photo 
  * and other settings. Ignored in public supergroups
  */
  can_change_info?: Boolean,
  /** Optional. True, if the user is allowed to invite new users to the chat */
  can_invite_users?: Boolean,
  /**
  * Optional. True, if the user is allowed to pin messages. Ignored in 
  * public supergroups
  */
  can_pin_messages?: Boolean,
  
}

/** Contains information about why a request was unsuccessful. */
export type ResponseParameters = {
  /**
  * Optional. The group has been migrated to a supergroup with the specified 
  * identifier. This number may be greater than 32 bits and some programming 
  * languages may have difficulty/silent defects in interpreting it. But it 
  * is smaller than 52 bits, so a signed 64 bit integer or double-precision 
  * float type are safe for storing this identifier.
  */
  migrate_to_chat_id?: Number,
  /**
  * Optional. In case of exceeding flood control, the number of seconds left 
  * to wait before the request can be repeated
  */
  retry_after?: Number,
  
}

/**
* This object represents the content of a media message to be sent. It 
* should be one of
*/
export type InputMedia = {
  
}

/** Represents a photo to be sent. */
export type InputMediaPhoto = {
  /** Type of the result, must be photo */
  type: String,
  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram 
  * servers (recommended), pass an HTTP URL for Telegram to get a file from 
  * the Internet, or pass “attach://<file_attach_name>” to upload a new one 
  * using multipart/form-data under <file_attach_name> name. More info on 
  * Sending Files »
  */
  media: String,
  /** Optional. Caption of the photo to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  
}

/** Represents a video to be sent. */
export type InputMediaVideo = {
  /** Type of the result, must be video */
  type: String,
  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram 
  * servers (recommended), pass an HTTP URL for Telegram to get a file from 
  * the Internet, or pass “attach://<file_attach_name>” to upload a new one 
  * using multipart/form-data under <file_attach_name> name. More info on 
  * Sending Files »
  */
  media: String,
  /**
  * Optional. Thumbnail of the file sent; can be ignored if thumbnail 
  * generation for the file is supported server-side. The thumbnail should 
  * be in JPEG format and less than 200 kB in size. A thumbnail‘s width and 
  * height should not exceed 320. Ignored if the file is not uploaded using 
  * multipart/form-data. Thumbnails can’t be reused and can be only uploaded 
  * as a new file, so you can pass “attach://<file_attach_name>” if the 
  * thumbnail was uploaded using multipart/form-data under 
  * <file_attach_name>. More info on Sending Files »
  */
  thumb?: InputFile|String,
  /** Optional. Caption of the video to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Video width */
  width?: Number,
  /** Optional. Video height */
  height?: Number,
  /** Optional. Video duration */
  duration?: Number,
  /** Optional. Pass True, if the uploaded video is suitable for streaming */
  supports_streaming?: Boolean,
  
}

/**
* Represents an animation file (GIF or H.264/MPEG-4 AVC video without 
* sound) to be sent.
*/
export type InputMediaAnimation = {
  /** Type of the result, must be animation */
  type: String,
  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram 
  * servers (recommended), pass an HTTP URL for Telegram to get a file from 
  * the Internet, or pass “attach://<file_attach_name>” to upload a new one 
  * using multipart/form-data under <file_attach_name> name. More info on 
  * Sending Files »
  */
  media: String,
  /**
  * Optional. Thumbnail of the file sent; can be ignored if thumbnail 
  * generation for the file is supported server-side. The thumbnail should 
  * be in JPEG format and less than 200 kB in size. A thumbnail‘s width and 
  * height should not exceed 320. Ignored if the file is not uploaded using 
  * multipart/form-data. Thumbnails can’t be reused and can be only uploaded 
  * as a new file, so you can pass “attach://<file_attach_name>” if the 
  * thumbnail was uploaded using multipart/form-data under 
  * <file_attach_name>. More info on Sending Files »
  */
  thumb?: InputFile|String,
  /** Optional. Caption of the animation to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Animation width */
  width?: Number,
  /** Optional. Animation height */
  height?: Number,
  /** Optional. Animation duration */
  duration?: Number,
  
}

/** Represents an audio file to be treated as music to be sent. */
export type InputMediaAudio = {
  /** Type of the result, must be audio */
  type: String,
  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram 
  * servers (recommended), pass an HTTP URL for Telegram to get a file from 
  * the Internet, or pass “attach://<file_attach_name>” to upload a new one 
  * using multipart/form-data under <file_attach_name> name. More info on 
  * Sending Files »
  */
  media: String,
  /**
  * Optional. Thumbnail of the file sent; can be ignored if thumbnail 
  * generation for the file is supported server-side. The thumbnail should 
  * be in JPEG format and less than 200 kB in size. A thumbnail‘s width and 
  * height should not exceed 320. Ignored if the file is not uploaded using 
  * multipart/form-data. Thumbnails can’t be reused and can be only uploaded 
  * as a new file, so you can pass “attach://<file_attach_name>” if the 
  * thumbnail was uploaded using multipart/form-data under 
  * <file_attach_name>. More info on Sending Files »
  */
  thumb?: InputFile|String,
  /** Optional. Caption of the audio to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Duration of the audio in seconds */
  duration?: Number,
  /** Optional. Performer of the audio */
  performer?: String,
  /** Optional. Title of the audio */
  title?: String,
  
}

/** Represents a general file to be sent. */
export type InputMediaDocument = {
  /** Type of the result, must be document */
  type: String,
  /**
  * File to send. Pass a file_id to send a file that exists on the Telegram 
  * servers (recommended), pass an HTTP URL for Telegram to get a file from 
  * the Internet, or pass “attach://<file_attach_name>” to upload a new one 
  * using multipart/form-data under <file_attach_name> name. More info on 
  * Sending Files »
  */
  media: String,
  /**
  * Optional. Thumbnail of the file sent; can be ignored if thumbnail 
  * generation for the file is supported server-side. The thumbnail should 
  * be in JPEG format and less than 200 kB in size. A thumbnail‘s width and 
  * height should not exceed 320. Ignored if the file is not uploaded using 
  * multipart/form-data. Thumbnails can’t be reused and can be only uploaded 
  * as a new file, so you can pass “attach://<file_attach_name>” if the 
  * thumbnail was uploaded using multipart/form-data under 
  * <file_attach_name>. More info on Sending Files »
  */
  thumb?: InputFile|String,
  /** Optional. Caption of the document to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  
}

/**
* This object represents the contents of a file to be uploaded. Must be 
* posted using multipart/form-data in the usual way that files are 
* uploaded via the browser.
*/
export type InputFile = {
  
}

/** This object represents a sticker. */
export type Sticker = {
  /** Identifier for this file */
  file_id: String,
  /** Sticker width */
  width: Number,
  /** Sticker height */
  height: Number,
  /** True, if the sticker is animated */
  is_animated: Boolean,
  /** Optional. Sticker thumbnail in the .webp or .jpg format */
  thumb?: PhotoSize,
  /** Optional. Emoji associated with the sticker */
  emoji?: String,
  /** Optional. Name of the sticker set to which the sticker belongs */
  set_name?: String,
  /**
  * Optional. For mask stickers, the position where the mask should be placed
  */
  mask_position?: MaskPosition,
  /** Optional. File size */
  file_size?: Number,
  
}

/** This object represents a sticker set. */
export type StickerSet = {
  /** Sticker set name */
  name: String,
  /** Sticker set title */
  title: String,
  /** True, if the sticker set contains animated stickers */
  is_animated: Boolean,
  /** True, if the sticker set contains masks */
  contains_masks: Boolean,
  /** List of all set stickers */
  stickers: Array<Sticker>,
  
}

/**
* This object describes the position on faces where a mask should be 
* placed by default.
*/
export type MaskPosition = {
  /**
  * The part of the face relative to which the mask should be placed. One of 
  * “forehead”, “eyes”, “mouth”, or “chin”.
  */
  point: String,
  /**
  * Shift by X-axis measured in widths of the mask scaled to the face size, 
  * from left to right. For example, choosing -1.0 will place mask just to 
  * the left of the default mask position.
  */
  x_shift: Number,
  /**
  * Shift by Y-axis measured in heights of the mask scaled to the face size, 
  * from top to bottom. For example, 1.0 will place the mask just below the 
  * default mask position.
  */
  y_shift: Number,
  /** Mask scaling coefficient. For example, 2.0 means double size. */
  scale: Number,
  
}

/**
* This object represents an incoming inline query. When the user sends an 
* empty query, your bot could return some default or trending results.
*/
export type InlineQuery = {
  /** Unique identifier for this query */
  id: String,
  /** Sender */
  from: User,
  /** Optional. Sender location, only for bots that request user location */
  location?: Location,
  /** Text of the query (up to 512 characters) */
  query: String,
  /** Offset of the results to be returned, can be controlled by the bot */
  offset: String,
  
}

/**
* This object represents one result of an inline query. Telegram clients 
* currently support results of the following 20 types:
*/
export type InlineQueryResult = {
  
}

/** Represents a link to an article or web page. */
export type InlineQueryResultArticle = {
  /** Type of the result, must be article */
  type: String,
  /** Unique identifier for this result, 1-64 Bytes */
  id: String,
  /** Title of the result */
  title: String,
  /** Content of the message to be sent */
  input_message_content: InputMessageContent,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. URL of the result */
  url?: String,
  /**
  * Optional. Pass True, if you don't want the URL to be shown in the message
  */
  hide_url?: Boolean,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Url of the thumbnail for the result */
  thumb_url?: String,
  /** Optional. Thumbnail width */
  thumb_width?: Number,
  /** Optional. Thumbnail height */
  thumb_height?: Number,
  
}

/**
* Represents a link to a photo. By default, this photo will be sent by the 
* user with optional caption. Alternatively, you can use 
* input_message_content to send a message with the specified content 
* instead of the photo.
*/
export type InlineQueryResultPhoto = {
  /** Type of the result, must be photo */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /**
  * A valid URL of the photo. Photo must be in jpeg format. Photo size must 
  * not exceed 5MB
  */
  photo_url: String,
  /** URL of the thumbnail for the photo */
  thumb_url: String,
  /** Optional. Width of the photo */
  photo_width?: Number,
  /** Optional. Height of the photo */
  photo_height?: Number,
  /** Optional. Title for the result */
  title?: String,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Caption of the photo to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the photo */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to an animated GIF file. By default, this animated GIF 
* file will be sent by the user with optional caption. Alternatively, you 
* can use input_message_content to send a message with the specified 
* content instead of the animation.
*/
export type InlineQueryResultGif = {
  /** Type of the result, must be gif */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid URL for the GIF file. File size must not exceed 1MB */
  gif_url: String,
  /** Optional. Width of the GIF */
  gif_width?: Number,
  /** Optional. Height of the GIF */
  gif_height?: Number,
  /** Optional. Duration of the GIF */
  gif_duration?: Number,
  /** URL of the static thumbnail for the result (jpeg or gif) */
  thumb_url: String,
  /** Optional. Title for the result */
  title?: String,
  /** Optional. Caption of the GIF file to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /**
  * Optional. Content of the message to be sent instead of the GIF animation
  */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a page containing an embedded video player or a 
* video file. By default, this video file will be sent by the user with an 
* optional caption. Alternatively, you can use input_message_content to 
* send a message with the specified content instead of the video.
*/
export type InlineQueryResultVideo = {
  /** Type of the result, must be video */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid URL for the embedded video player or video file */
  video_url: String,
  /** Mime type of the content of video url, “text/html” or “video/mp4” */
  mime_type: String,
  /** URL of the thumbnail (jpeg only) for the video */
  thumb_url: String,
  /** Title for the result */
  title: String,
  /** Optional. Caption of the video to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Video width */
  video_width?: Number,
  /** Optional. Video height */
  video_height?: Number,
  /** Optional. Video duration in seconds */
  video_duration?: Number,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /**
  * Optional. Content of the message to be sent instead of the video. This 
  * field is required if InlineQueryResultVideo is used to send an HTML-page 
  * as a result (e.g., a YouTube video).
  */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to an mp3 audio file. By default, this audio file will 
* be sent by the user. Alternatively, you can use input_message_content to 
* send a message with the specified content instead of the audio.
*/
export type InlineQueryResultAudio = {
  /** Type of the result, must be audio */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid URL for the audio file */
  audio_url: String,
  /** Title */
  title: String,
  /** Optional. Caption, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Performer */
  performer?: String,
  /** Optional. Audio duration in seconds */
  audio_duration?: Number,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the audio */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a voice recording in an .ogg container encoded with 
* OPUS. By default, this voice recording will be sent by the user. 
* Alternatively, you can use input_message_content to send a message with 
* the specified content instead of the the voice message.
*/
export type InlineQueryResultVoice = {
  /** Type of the result, must be voice */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid URL for the voice recording */
  voice_url: String,
  /** Recording title */
  title: String,
  /** Optional. Caption, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Recording duration in seconds */
  voice_duration?: Number,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /**
  * Optional. Content of the message to be sent instead of the voice recording
  */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a file. By default, this file will be sent by the 
* user with an optional caption. Alternatively, you can use 
* input_message_content to send a message with the specified content 
* instead of the file. Currently, only .PDF and .ZIP files can be sent 
* using this method.
*/
export type InlineQueryResultDocument = {
  /** Type of the result, must be document */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** Title for the result */
  title: String,
  /** Optional. Caption of the document to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** A valid URL for the file */
  document_url: String,
  /**
  * Mime type of the content of the file, either “application/pdf” or “application/zip”
  */
  mime_type: String,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the file */
  input_message_content?: InputMessageContent,
  /** Optional. URL of the thumbnail (jpeg only) for the file */
  thumb_url?: String,
  /** Optional. Thumbnail width */
  thumb_width?: Number,
  /** Optional. Thumbnail height */
  thumb_height?: Number,
  
}

/**
* Represents a location on a map. By default, the location will be sent by 
* the user. Alternatively, you can use input_message_content to send a 
* message with the specified content instead of the location.
*/
export type InlineQueryResultLocation = {
  /** Type of the result, must be location */
  type: String,
  /** Unique identifier for this result, 1-64 Bytes */
  id: String,
  /** Location latitude in degrees */
  latitude: Number,
  /** Location longitude in degrees */
  longitude: Number,
  /** Location title */
  title: String,
  /**
  * Optional. Period in seconds for which the location can be updated, 
  * should be between 60 and 86400.
  */
  live_period?: Number,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the location */
  input_message_content?: InputMessageContent,
  /** Optional. Url of the thumbnail for the result */
  thumb_url?: String,
  /** Optional. Thumbnail width */
  thumb_width?: Number,
  /** Optional. Thumbnail height */
  thumb_height?: Number,
  
}

/**
* Represents a venue. By default, the venue will be sent by the user. 
* Alternatively, you can use input_message_content to send a message with 
* the specified content instead of the venue.
*/
export type InlineQueryResultVenue = {
  /** Type of the result, must be venue */
  type: String,
  /** Unique identifier for this result, 1-64 Bytes */
  id: String,
  /** Latitude of the venue location in degrees */
  latitude: Number,
  /** Longitude of the venue location in degrees */
  longitude: Number,
  /** Title of the venue */
  title: String,
  /** Address of the venue */
  address: String,
  /** Optional. Foursquare identifier of the venue if known */
  foursquare_id?: String,
  /**
  * Optional. Foursquare type of the venue, if known. (For example, 
  * “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  */
  foursquare_type?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the venue */
  input_message_content?: InputMessageContent,
  /** Optional. Url of the thumbnail for the result */
  thumb_url?: String,
  /** Optional. Thumbnail width */
  thumb_width?: Number,
  /** Optional. Thumbnail height */
  thumb_height?: Number,
  
}

/**
* Represents a contact with a phone number. By default, this contact will 
* be sent by the user. Alternatively, you can use input_message_content to 
* send a message with the specified content instead of the contact.
*/
export type InlineQueryResultContact = {
  /** Type of the result, must be contact */
  type: String,
  /** Unique identifier for this result, 1-64 Bytes */
  id: String,
  /** Contact's phone number */
  phone_number: String,
  /** Contact's first name */
  first_name: String,
  /** Optional. Contact's last name */
  last_name?: String,
  /**
  * Optional. Additional data about the contact in the form of a vCard, 
  * 0-2048 bytes
  */
  vcard?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the contact */
  input_message_content?: InputMessageContent,
  /** Optional. Url of the thumbnail for the result */
  thumb_url?: String,
  /** Optional. Thumbnail width */
  thumb_width?: Number,
  /** Optional. Thumbnail height */
  thumb_height?: Number,
  
}

/** Represents a Game. */
export type InlineQueryResultGame = {
  /** Type of the result, must be game */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** Short name of the game */
  game_short_name: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  
}

/**
* Represents a link to a photo stored on the Telegram servers. By default, 
* this photo will be sent by the user with an optional caption. 
* Alternatively, you can use input_message_content to send a message with 
* the specified content instead of the photo.
*/
export type InlineQueryResultCachedPhoto = {
  /** Type of the result, must be photo */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier of the photo */
  photo_file_id: String,
  /** Optional. Title for the result */
  title?: String,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Caption of the photo to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the photo */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to an animated GIF file stored on the Telegram 
* servers. By default, this animated GIF file will be sent by the user 
* with an optional caption. Alternatively, you can use 
* input_message_content to send a message with specified content instead 
* of the animation.
*/
export type InlineQueryResultCachedGif = {
  /** Type of the result, must be gif */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier for the GIF file */
  gif_file_id: String,
  /** Optional. Title for the result */
  title?: String,
  /** Optional. Caption of the GIF file to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /**
  * Optional. Content of the message to be sent instead of the GIF animation
  */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a sticker stored on the Telegram servers. By 
* default, this sticker will be sent by the user. Alternatively, you can 
* use input_message_content to send a message with the specified content 
* instead of the sticker.
*/
export type InlineQueryResultCachedSticker = {
  /** Type of the result, must be sticker */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier of the sticker */
  sticker_file_id: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the sticker */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a file stored on the Telegram servers. By default, 
* this file will be sent by the user with an optional caption. 
* Alternatively, you can use input_message_content to send a message with 
* the specified content instead of the file.
*/
export type InlineQueryResultCachedDocument = {
  /** Type of the result, must be document */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** Title for the result */
  title: String,
  /** A valid file identifier for the file */
  document_file_id: String,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Caption of the document to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the file */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a video file stored on the Telegram servers. By 
* default, this video file will be sent by the user with an optional 
* caption. Alternatively, you can use input_message_content to send a 
* message with the specified content instead of the video.
*/
export type InlineQueryResultCachedVideo = {
  /** Type of the result, must be video */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier for the video file */
  video_file_id: String,
  /** Title for the result */
  title: String,
  /** Optional. Short description of the result */
  description?: String,
  /** Optional. Caption of the video to be sent, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the video */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to a voice message stored on the Telegram servers. By 
* default, this voice message will be sent by the user. Alternatively, you 
* can use input_message_content to send a message with the specified 
* content instead of the voice message.
*/
export type InlineQueryResultCachedVoice = {
  /** Type of the result, must be voice */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier for the voice message */
  voice_file_id: String,
  /** Voice message title */
  title: String,
  /** Optional. Caption, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /**
  * Optional. Content of the message to be sent instead of the voice message
  */
  input_message_content?: InputMessageContent,
  
}

/**
* Represents a link to an mp3 audio file stored on the Telegram servers. 
* By default, this audio file will be sent by the user. Alternatively, you 
* can use input_message_content to send a message with the specified 
* content instead of the audio.
*/
export type InlineQueryResultCachedAudio = {
  /** Type of the result, must be audio */
  type: String,
  /** Unique identifier for this result, 1-64 bytes */
  id: String,
  /** A valid file identifier for the audio file */
  audio_file_id: String,
  /** Optional. Caption, 0-1024 characters */
  caption?: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in the media caption.
  */
  parse_mode?: String,
  /** Optional. Inline keyboard attached to the message */
  reply_markup?: InlineKeyboardMarkup,
  /** Optional. Content of the message to be sent instead of the audio */
  input_message_content?: InputMessageContent,
  
}

/**
* This object represents the content of a message to be sent as a result 
* of an inline query. Telegram clients currently support the following 4 types:
*/
export type InputMessageContent = {
  
}

/**
* Represents the content of a text message to be sent as the result of an 
* inline query.
*/
export type InputTextMessageContent = {
  /** Text of the message to be sent, 1-4096 characters */
  message_text: String,
  /**
  * Optional. Send Markdown or HTML, if you want Telegram apps to show bold, 
  * italic, fixed-width text or inline URLs in your bot's message.
  */
  parse_mode?: String,
  /** Optional. Disables link previews for links in the sent message */
  disable_web_page_preview?: Boolean,
  
}

/**
* Represents the content of a location message to be sent as the result of 
* an inline query.
*/
export type InputLocationMessageContent = {
  /** Latitude of the location in degrees */
  latitude: Number,
  /** Longitude of the location in degrees */
  longitude: Number,
  /**
  * Optional. Period in seconds for which the location can be updated, 
  * should be between 60 and 86400.
  */
  live_period?: Number,
  
}

/**
* Represents the content of a venue message to be sent as the result of an 
* inline query.
*/
export type InputVenueMessageContent = {
  /** Latitude of the venue in degrees */
  latitude: Number,
  /** Longitude of the venue in degrees */
  longitude: Number,
  /** Name of the venue */
  title: String,
  /** Address of the venue */
  address: String,
  /** Optional. Foursquare identifier of the venue, if known */
  foursquare_id?: String,
  /**
  * Optional. Foursquare type of the venue, if known. (For example, 
  * “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
  */
  foursquare_type?: String,
  
}

/**
* Represents the content of a contact message to be sent as the result of 
* an inline query.
*/
export type InputContactMessageContent = {
  /** Contact's phone number */
  phone_number: String,
  /** Contact's first name */
  first_name: String,
  /** Optional. Contact's last name */
  last_name?: String,
  /**
  * Optional. Additional data about the contact in the form of a vCard, 
  * 0-2048 bytes
  */
  vcard?: String,
  
}

/**
* Represents a result of an inline query that was chosen by the user and 
* sent to their chat partner.
*/
export type ChosenInlineResult = {
  /** The unique identifier for the result that was chosen */
  result_id: String,
  /** The user that chose the result */
  from: User,
  /** Optional. Sender location, only for bots that require user location */
  location?: Location,
  /**
  * Optional. Identifier of the sent inline message. Available only if there 
  * is an inline keyboard attached to the message. Will be also received in 
  * callback queries and can be used to edit the message.
  */
  inline_message_id?: String,
  /** The query that was used to obtain the result */
  query: String,
  
}

/** This object represents a portion of the price for goods or services. */
export type LabeledPrice = {
  /** Portion label */
  label: String,
  /**
  * Price of the product in the smallest units of the currency (integer, not 
  * float/double). For example, for a price of US$ 1.45 pass amount = 145. 
  * See the exp parameter in currencies.json, it shows the number of digits 
  * past the decimal point for each currency (2 for the majority of currencies).
  */
  amount: Number,
  
}

/** This object contains basic information about an invoice. */
export type Invoice = {
  /** Product name */
  title: String,
  /** Product description */
  description: String,
  /**
  * Unique bot deep-linking parameter that can be used to generate this invoice
  */
  start_parameter: String,
  /** Three-letter ISO 4217 currency code */
  currency: String,
  /**
  * Total price in the smallest units of the currency (integer, not 
  * float/double). For example, for a price of US$ 1.45 pass amount = 145. 
  * See the exp parameter in currencies.json, it shows the number of digits 
  * past the decimal point for each currency (2 for the majority of currencies).
  */
  total_amount: Number,
  
}

/** This object represents a shipping address. */
export type ShippingAddress = {
  /** ISO 3166-1 alpha-2 country code */
  country_code: String,
  /** State, if applicable */
  state: String,
  /** City */
  city: String,
  /** First line for the address */
  street_line1: String,
  /** Second line for the address */
  street_line2: String,
  /** Address post code */
  post_code: String,
  
}

/** This object represents information about an order. */
export type OrderInfo = {
  /** Optional. User name */
  name?: String,
  /** Optional. User's phone number */
  phone_number?: String,
  /** Optional. User email */
  email?: String,
  /** Optional. User shipping address */
  shipping_address?: ShippingAddress,
  
}

/** This object represents one shipping option. */
export type ShippingOption = {
  /** Shipping option identifier */
  id: String,
  /** Option title */
  title: String,
  /** List of price portions */
  prices: Array<LabeledPrice>,
  
}

/** This object contains basic information about a successful payment. */
export type SuccessfulPayment = {
  /** Three-letter ISO 4217 currency code */
  currency: String,
  /**
  * Total price in the smallest units of the currency (integer, not 
  * float/double). For example, for a price of US$ 1.45 pass amount = 145. 
  * See the exp parameter in currencies.json, it shows the number of digits 
  * past the decimal point for each currency (2 for the majority of currencies).
  */
  total_amount: Number,
  /** Bot specified invoice payload */
  invoice_payload: String,
  /** Optional. Identifier of the shipping option chosen by the user */
  shipping_option_id?: String,
  /** Optional. Order info provided by the user */
  order_info?: OrderInfo,
  /** Telegram payment identifier */
  telegram_payment_charge_id: String,
  /** Provider payment identifier */
  provider_payment_charge_id: String,
  
}

/** This object contains information about an incoming shipping query. */
export type ShippingQuery = {
  /** Unique query identifier */
  id: String,
  /** User who sent the query */
  from: User,
  /** Bot specified invoice payload */
  invoice_payload: String,
  /** User specified shipping address */
  shipping_address: ShippingAddress,
  
}

/** This object contains information about an incoming pre-checkout query. */
export type PreCheckoutQuery = {
  /** Unique query identifier */
  id: String,
  /** User who sent the query */
  from: User,
  /** Three-letter ISO 4217 currency code */
  currency: String,
  /**
  * Total price in the smallest units of the currency (integer, not 
  * float/double). For example, for a price of US$ 1.45 pass amount = 145. 
  * See the exp parameter in currencies.json, it shows the number of digits 
  * past the decimal point for each currency (2 for the majority of currencies).
  */
  total_amount: Number,
  /** Bot specified invoice payload */
  invoice_payload: String,
  /** Optional. Identifier of the shipping option chosen by the user */
  shipping_option_id?: String,
  /** Optional. Order info provided by the user */
  order_info?: OrderInfo,
  
}

/**
* Contains information about Telegram Passport data shared with the bot by 
* the user.
*/
export type PassportData = {
  /**
  * Array with information about documents and other Telegram Passport 
  * elements that was shared with the bot
  */
  data: Array<EncryptedPassportElement>,
  /** Encrypted credentials required to decrypt the data */
  credentials: EncryptedCredentials,
  
}

/**
* This object represents a file uploaded to Telegram Passport. Currently 
* all Telegram Passport files are in JPEG format when decrypted and don't 
* exceed 10MB.
*/
export type PassportFile = {
  /** Identifier for this file */
  file_id: String,
  /** File size */
  file_size: Number,
  /** Unix time when the file was uploaded */
  file_date: Number,
  
}

/**
* Contains information about documents or other Telegram Passport elements 
* shared with the bot by the user.
*/
export type EncryptedPassportElement = {
  /**
  * Element type. One of “personal_details”, “passport”, “driver_license”, 
  * “identity_card”, “internal_passport”, “address”, “utility_bill”, 
  * “bank_statement”, “rental_agreement”, “passport_registration”, 
  * “temporary_registration”, “phone_number”, “email”.
  */
  type: String,
  /**
  * Optional. Base64-encoded encrypted Telegram Passport element data 
  * provided by the user, available for “personal_details”, “passport”, 
  * “driver_license”, “identity_card”, “internal_passport” and “address” 
  * types. Can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  data?: String,
  /**
  * Optional. User's verified phone number, available only for 
  * “phone_number” type
  */
  phone_number?: String,
  /**
  * Optional. User's verified email address, available only for “email” type
  */
  email?: String,
  /**
  * Optional. Array of encrypted files with documents provided by the user, 
  * available for “utility_bill”, “bank_statement”, “rental_agreement”, 
  * “passport_registration” and “temporary_registration” types. Files can be 
  * decrypted and verified using the accompanying EncryptedCredentials.
  */
  files?: Array<PassportFile>,
  /**
  * Optional. Encrypted file with the front side of the document, provided 
  * by the user. Available for “passport”, “driver_license”, “identity_card” 
  * and “internal_passport”. The file can be decrypted and verified using 
  * the accompanying EncryptedCredentials.
  */
  front_side?: PassportFile,
  /**
  * Optional. Encrypted file with the reverse side of the document, provided 
  * by the user. Available for “driver_license” and “identity_card”. The 
  * file can be decrypted and verified using the accompanying EncryptedCredentials.
  */
  reverse_side?: PassportFile,
  /**
  * Optional. Encrypted file with the selfie of the user holding a document, 
  * provided by the user; available for “passport”, “driver_license”, 
  * “identity_card” and “internal_passport”. The file can be decrypted and 
  * verified using the accompanying EncryptedCredentials.
  */
  selfie?: PassportFile,
  /**
  * Optional. Array of encrypted files with translated versions of documents 
  * provided by the user. Available if requested for “passport”, 
  * “driver_license”, “identity_card”, “internal_passport”, “utility_bill”, 
  * “bank_statement”, “rental_agreement”, “passport_registration” and 
  * “temporary_registration” types. Files can be decrypted and verified 
  * using the accompanying EncryptedCredentials.
  */
  translation?: Array<PassportFile>,
  /**
  * Base64-encoded element hash for using in PassportElementErrorUnspecified
  */
  hash: String,
  
}

/**
* Contains data required for decrypting and authenticating 
* EncryptedPassportElement. See the Telegram Passport Documentation for a 
* complete description of the data decryption and authentication processes.
*/
export type EncryptedCredentials = {
  /**
  * Base64-encoded encrypted JSON-serialized data with unique user's 
  * payload, data hashes and secrets required for EncryptedPassportElement 
  * decryption and authentication
  */
  data: String,
  /** Base64-encoded data hash for data authentication */
  hash: String,
  /**
  * Base64-encoded secret, encrypted with the bot's public RSA key, required 
  * for data decryption
  */
  secret: String,
  
}

/**
* This object represents an error in the Telegram Passport element which 
* was submitted that should be resolved by the user. It should be one of:
*/
export type PassportElementError = {
  
}

/**
* Represents an issue in one of the data fields that was provided by the 
* user. The error is considered resolved when the field's value changes.
*/
export type PassportElementErrorDataField = {
  /** Error source, must be data */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the error, one of 
  * “personal_details”, “passport”, “driver_license”, “identity_card”, 
  * “internal_passport”, “address”
  */
  type: String,
  /** Name of the data field which has the error */
  field_name: String,
  /** Base64-encoded data hash */
  data_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with the front side of a document. The error is 
* considered resolved when the file with the front side of the document changes.
*/
export type PassportElementErrorFrontSide = {
  /** Error source, must be front_side */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the issue, one of 
  * “passport”, “driver_license”, “identity_card”, “internal_passport”
  */
  type: String,
  /** Base64-encoded hash of the file with the front side of the document */
  file_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with the reverse side of a document. The error is 
* considered resolved when the file with reverse side of the document changes.
*/
export type PassportElementErrorReverseSide = {
  /** Error source, must be reverse_side */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the issue, one of 
  * “driver_license”, “identity_card”
  */
  type: String,
  /** Base64-encoded hash of the file with the reverse side of the document */
  file_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with the selfie with a document. The error is 
* considered resolved when the file with the selfie changes.
*/
export type PassportElementErrorSelfie = {
  /** Error source, must be selfie */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the issue, one of 
  * “passport”, “driver_license”, “identity_card”, “internal_passport”
  */
  type: String,
  /** Base64-encoded hash of the file with the selfie */
  file_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with a document scan. The error is considered 
* resolved when the file with the document scan changes.
*/
export type PassportElementErrorFile = {
  /** Error source, must be file */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the issue, one of 
  * “utility_bill”, “bank_statement”, “rental_agreement”, 
  * “passport_registration”, “temporary_registration”
  */
  type: String,
  /** Base64-encoded file hash */
  file_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with a list of scans. The error is considered 
* resolved when the list of files containing the scans changes.
*/
export type PassportElementErrorFiles = {
  /** Error source, must be files */
  source: String,
  /**
  * The section of the user's Telegram Passport which has the issue, one of 
  * “utility_bill”, “bank_statement”, “rental_agreement”, 
  * “passport_registration”, “temporary_registration”
  */
  type: String,
  /** List of base64-encoded file hashes */
  file_hashes: Array<String>,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with one of the files that constitute the 
* translation of a document. The error is considered resolved when the 
* file changes.
*/
export type PassportElementErrorTranslationFile = {
  /** Error source, must be translation_file */
  source: String,
  /**
  * Type of element of the user's Telegram Passport which has the issue, one 
  * of “passport”, “driver_license”, “identity_card”, “internal_passport”, 
  * “utility_bill”, “bank_statement”, “rental_agreement”, 
  * “passport_registration”, “temporary_registration”
  */
  type: String,
  /** Base64-encoded file hash */
  file_hash: String,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue with the translated version of a document. The error 
* is considered resolved when a file with the document translation change.
*/
export type PassportElementErrorTranslationFiles = {
  /** Error source, must be translation_files */
  source: String,
  /**
  * Type of element of the user's Telegram Passport which has the issue, one 
  * of “passport”, “driver_license”, “identity_card”, “internal_passport”, 
  * “utility_bill”, “bank_statement”, “rental_agreement”, 
  * “passport_registration”, “temporary_registration”
  */
  type: String,
  /** List of base64-encoded file hashes */
  file_hashes: Array<String>,
  /** Error message */
  message: String,
  
}

/**
* Represents an issue in an unspecified place. The error is considered 
* resolved when new data is added.
*/
export type PassportElementErrorUnspecified = {
  /** Error source, must be unspecified */
  source: String,
  /** Type of element of the user's Telegram Passport which has the issue */
  type: String,
  /** Base64-encoded element hash */
  element_hash: String,
  /** Error message */
  message: String,
  
}

/**
* This object represents a game. Use BotFather to create and edit games, 
* their short names will act as unique identifiers.
*/
export type Game = {
  /** Title of the game */
  title: String,
  /** Description of the game */
  description: String,
  /** Photo that will be displayed in the game message in chats. */
  photo: Array<PhotoSize>,
  /**
  * Optional. Brief description of the game or high scores included in the 
  * game message. Can be automatically edited to include current high scores 
  * for the game when the bot calls setGameScore, or manually edited using 
  * editMessageText. 0-4096 characters.
  */
  text?: String,
  /**
  * Optional. Special entities that appear in text, such as usernames, URLs, 
  * bot commands, etc.
  */
  text_entities?: Array<MessageEntity>,
  /**
  * Optional. Animation that will be displayed in the game message in chats. 
  * Upload via BotFather
  */
  animation?: Animation,
  
}

/**
* A placeholder, currently holds no information. Use BotFather to set up 
* your game.
*/
export type CallbackGame = {
  
}

/** This object represents one row of the high scores table for a game. */
export type GameHighScore = {
  /** Position in high score table for the game */
  position: Number,
  /** User */
  user: User,
  /** Score */
  score: Number,
  
}

