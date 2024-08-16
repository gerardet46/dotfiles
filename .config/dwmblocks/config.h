#ifndef CONFIG_H
#define CONFIG_H

// String used to delimit block outputs in the status.
#define DELIMITER "    "

// Maximum number of Unicode characters that a block can output.
#define MAX_BLOCK_OUTPUT_LENGTH 70

// Control whether blocks are clickable.
#define CLICKABLE_BLOCKS 1

// Control whether a leading delimiter should be prepended to the status.
#define LEADING_DELIMITER 0

// Control whether a trailing delimiter should be appended to the status.
#define TRAILING_DELIMITER 0

// Directory
#define SC "~/.config/dwmblocks/"

// Define blocks for the status feed as X(icon, cmd, interval, signal).
#define BLOCKS(X)                \
    X("", SC "sb-mpc",       5, 13) \
    X("", SC "sb-mail",    300, 12) \
    X("", SC "sb-volume",    0, 10) \
    X("", SC "sb-batt",     15, 0)  \
    X("", SC "sb-net",      10, 0)  \
    X("", SC "sb-cpu",       3, 0)  \
    X("", SC "sb-memoria",  10, 0)  \
    X("", SC "sb-date",     15, 0)

#endif  // CONFIG_H
