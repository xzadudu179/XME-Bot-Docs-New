# Glossary

Detailed explanations of terms/special vocabulary used by this bot.

## XME-Deon-Bot / XME-Bot / bot

Refers to any instance of this bot. For example, an XME-Bot instance running in a QQ group.

This bot can be invoked by any of the names `Deon`, `deon`, or `漠月`. Related usage is mentioned in the [Commands](#commands) section below.

## Commands

Special statements that start with a specific symbol and follow a certain format; these user messages are parsed by XME-Bot and the corresponding program is executed.

In XME-Bot, the specific symbol can be any of `。`、`.`、`/`.

For example:

``` Text
/weather 南京建邺
```

Specifically, using **@bot** in a command or typing the bot's name before the command can also invoke the command, for example:

``` Text
deon /weather 南京建邺
@deon /weather 南京建邺
```

:::warning
Due to the Nonebot1 framework itself, if @bot appears in [command arguments](#args), the first argument will be ignored. For example: `/info @deon` will be parsed by the framework as `/info`. If you need the content of `/info @deon`, you should use `/info @deon @deon`
:::

When XME-Bot receives the above message it will reply with something like:

``` Text
@发送者
======※现在天气：江苏省 南京 建邺※======
- 天气：阴，东北风 3 级
- 当前天空上有盈凸月
- 空气质量指数：37 (优)
- 温度：8℃，体感 5℃
- 相对湿度 50%
- 过去 1 小时降水量 0.0 mm
- 气压 1022 hPa
- 数据更新时间：2025年12月31日 15:00
======※预警信息※======
🟨 海区大风黄色预警
可以使用 "/wea 南京建邺 -w" 来查看预警的详细信息哦 嗷呜！
==========
数据来自于和风天气 API~ 嗷呜！
```

Not every message that looks like a command will be executed by XME-Bot — only commands that XME-Bot is configured to recognize may be parsed and executed.

## Command arguments / Arguments {#args}

The content that follows a command statement and is separated in a certain format is called an argument.

For example:

``` Text
/weather 扬州 3
```

In this command, `南京建邺` is an argument of the `weather` command; arguments for the `weather` command are separated by spaces.

:::tip About argument notation
Arguments in the help docs are enclosed in specific brackets, but users do not need to type any brackets when entering arguments (unless you want the argument itself to include brackets).
:::

### Optional arguments

Arguments that may be left out in some cases without causing an error. For example, the `南京建邺` in the `weather` command above.

Optional arguments in this document are shown enclosed in `<>`.

For example:

``` Text
/help <command-name>
```

Here `command-name` is an optional argument; if you do not enter a command name and just use `/help`, XME-Bot will still operate normally.

### Required arguments

Arguments that must be provided in the command, otherwise an error will occur.

Required arguments in this document are shown enclosed in `()`.

For example:

``` Text
/count (input text)
```

Here `input text` is a required argument; if the argument is empty, XME-Bot will prompt the user to enter the argument and the command cannot be used without it.

### Shell-like options

Arguments that follow a shell-like syntax, formatted as `-` plus a letter or `--` plus a word, such as `-h` or `--help`.

Shell-like options in this document are shown enclosed in `[]`.

For example, here is a simple help for the `weather` command:

``` Text
Command: weather
Summary: Query weather
Purpose: View weather for a specified area, limited to five times every 5 minutes
Usage:
  /weather <location-name> [OPTIONS]
OPTIONS:
    -h, --help	Output help, equivalent to "/help weather"
    -w, --warn	Use this option alone to view detailed warning information
Permissions/Scope: None
Aliases: 当前天气, 天气, 查看天气, wea
```

`OPTIONS` above are shell-like options; a user can enter `/weather -h` or `/weather -w` to invoke the described options.

Some shell-like options require additional content after the option to serve as the actual argument, for example:

``` Text
/game guess -a r=1~100, t=8
```

Here, `r=1~100, t=8` is the specific content for the `-a` option. Similarly:

``` Text
/ai -c clear
```

Here `clear` is the specific content for the `-c` option.

## Permissions

Because XME-Bot is built on Nonebot1, it also uses the [Nonebot1 permission system](https://v1.nonebot.dev/api/permission.html).

Permissions are used to restrict whether a user meets the conditions to call a command, for example, whether they are an administrator or whether the call is in a private chat.

### SUPERUSER

SUPERUSER refers to the QQ number whitelist set in XME-Bot's configuration. The default is `1795886524`, which is Xme-Bot's developer [九镹](https://www.xzadudu179.top/).

## Roles

Roles are settings in XME-Bot that determine the wording of the bot's output, decided by different role files; their function is somewhat similar to language modules.

Use the `whoru` command to see the bot's current role information.