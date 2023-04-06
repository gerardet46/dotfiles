import os

def get_pass(key):
    # retrieves key from password store
    return os.popen("pass show {} | head -n 1".format(key)).read().strip()

# phone number ('+34612345678', for example)
PHONE = get_pass('telefon')

# long message editor
LONG_MSG_CMD = "nvim + -c 'startinsert' {file_path}"

# notifications
NOTIFY_CMD = "pidof dwm && notify-send -i {icon_path} {title} {msg}"
# NOTIFY_CMD = ""

# voice recording
VOICE_RECORD_CMD = (
    "ffmpeg -f alsa -i default -c:a flac {file_path}"
)

# downloads
DOWNLOAD_DIR = os.path.expanduser("~/bx/Telegram")

# use monocolor for users
USERS_COLORS = (4,)

# I prefer nnn, remove this line to use ranger
FILE_PICKER_CMD = "nnn -p {file_path}"

# Clean cache every week
KEEP_MEDIA = 7  # set to None to don't clear cache

# Maicap file (openers)
MAILCAP_FILE = os.path.expanduser("~/.config/mailcap")

# Customizing tags
CHAT_FLAGS = {
    "online": "O",
    "pinned": "P",
    "muted": "M",
    # chat is marked as unread
    "unread": "U",
    # last msg haven't been seen by recipient
    "unseen": "N",
    "secret": "S",
    "seen": "R",  # leave empty if you don't want to see it
}
MSG_FLAGS = {
    "selected": "*",
    "forwarded": "F",
    "new": "N",
    "unseen": "U",
    "edited": "E",
    "pending": "...",
    "failed": "X",
    "seen": "R",  # leave empty if you don't want to see it
}
