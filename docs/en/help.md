---
next:
  text: 'Other'
  link: '/en/other'
---

# Commands and Plugins List

<!-- > 目前还 (几乎) 没有任何内容 -->

## Notes

---

### Warning

- Please do **not** and **avoid as much as possible** making the bot output sensitive/illegal characters in any form — this can easily cause the bot to be permanently banned!

  If any behavior causes the bot to be banned due to a user's illegal input, the responsible user will be **held accountable** and their QQ account will be recorded.

- This bot is still in an **early development stage**, many features may change significantly.

- Default scope is **in group chats**.

---

### About commands

::: tip
See [Commands terminology](./glossary#commands) and [Arguments terminology](./glossary#args) for command details and argument details.
:::

---

#### Command format

- In the command list, each command is documented as:

  **Command name**

  - **Purpose**

    What the command does.

  - **Usage**

    Specific syntax of the command, for example:
    ``` Text
    /command_name (required param) <optional param> [shell-like options]
    ```

  - **Permissions/Scope**

    The required [permissions](glossary?id=permissions) for the command. If none, it's `None`. If present, specific conditions will be listed.

  - **Rate/Time limits**

    Rate or time restrictions for the command (e.g., once per day).

    This item is optional and will be shown only if restrictions apply.

- **Aliases**

    Alternative names that can invoke the command.

    For example the `help` command has the alias `帮助`, so `/帮助` and `/help` behave the same.

---

#### Plugin format

- Some commands are grouped into plugins; plugin format:

  **Plugin name**

  - **Plugin description**

    Overview of plugin functionality.

  - **Commands:**

    Commands provided by the plugin.

---

## Features

### [command] 7timers

- **Purpose**

  Use your location to view the local 7timers (sky condition) by latitude,longitude separated by comma (auto-detection; default `lat,lon`).

  7timers details:

  Astronomical map guide:

  - Cloud cover: eighth-chart; blue indicates clear-sky proportion, white indicates cloud; left→right cloud fraction increases from 0% to 100%.
  - Seeing: smaller/bluer icons mean better seeing.
  - Transparency: fewer/ bluer bars mean better transparency.
  - High humidity warning: icons small→large indicate relative humidity `80%-90%`, `90%-95%`, and `>95%`.
  - Rain/snow: icons indicate possible precipitation.
  - Instability warning: icons few→many indicate lift index in `0 to -3`, `-3 to -5`, and `< -5`.
  - Strong wind warning: icons small→large indicate sustained wind speeds `8.0-10.8 m/s (Beaufort 5)`, `10.8-17.2 m/s (6-7)`, and `>17.2 m/s (8+)`.

- **Usage**

``` Text
/7timers <lat,lon>
```

- **Permissions/Scope**

  None

- **Aliases**

  `7t`, `晴天钟`

---

### [plugin] XME Universe

- **Purpose**

  Features that need user info. Use `/userhelp <feature>` for detailed help.

- **Commands:**

  #### [command] celestial

  - **Purpose**

    View celestial objects at or near a location (input coordinates).

  - **Usage**

  ``` Text
  /celestial <sector x> <sector y>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `cele`, `celes`, `查看天体`, `天体`

  ---
  #### [command] coinrank

  - **Purpose**

    View nearby users' coin leaderboard.

    Integer param changes ranking length, max 20.

    Use `avg` for average, `sum` for total. Add `top` to show global top (starting from 1).

    Final param `spacing` makes output use spaces instead of newlines.

  - **Usage**

  ``` Text
  /coinrank <length/avg sum> <top> <spacing>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `rank`, `星币排行`, `ranking`

  ---
  #### [command] describe

  - **Purpose**

    Set a personal description visible under `/info`.

  - **Usage**

  ``` Text
  /describe <profile text>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `bio`, `intro`, `desc`

  ---
  #### [command] map

  - **Purpose**

    View local star systems around you.

  - **Usage**

  ``` Text
  /map
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    none

  ---
  #### [command] achievement

  - **Purpose**

    View all achievements; use `/achi <name>` to see details.

  - **Usage**

  ``` Text
  /achievement <achievement keyword or index>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `查看成就`, `成就`, `achi`

  ---
  #### [command] inventory

  - **Purpose**

    Manage or view items in your inventory; no args shows the inventory.

  - **Usage**

  ``` Text
  /inventory
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `inv`, `物品栏`

  ---
  #### [command] lottery

  - **Purpose**

    Spend coins to draw up to 4x coins. 5 draws per day. Second param integer >0 repeats draws. Quick options: `/lot 土块` `/lot 梭哈` `/lot all` `/lot allin` to invest max 5 times.

  - **Usage**

  ``` Text
  /lottery (coins/allin) <repeat count>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `抽奖`, `lot`

  ---
  #### [command] sendcoin

  - **Purpose**

    @ someone and give them specified coins; coin amounts separated by spaces will be summed.

  - **Usage**

  ``` Text
  /sendcoin (at target) (coin amounts separated by spaces)
  ```

  - **Permissions/Scope**

    In group chats

  - **Aliases**

    `转账`, `给星币`, `ta`, `transfer`, `givecoin`, `v`

  ---
  #### [command] sign

  - **Purpose**

    Daily sign-in to earn coins.

  - **Usage**

  ``` Text
  /sign
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `签到`, `register`, `s`

  ---
  #### [command] userinfo

  - **Purpose**

    View recorded personal info (e.g., coin count). If you @ someone, view that person's info.

  - **Usage**

  ``` Text
  /userinfo <@user>
  ```

  - **Permissions/Scope**



  - **Aliases**

    `个人信息`, `个人资料`, `uinfo`, `info`

  ---
  #### [command] userhelp

  - **Purpose**

    View detailed help for a user-related feature command.

  - **Usage**

  ``` Text
  /userhelp <command or alias>
  ```

  - **Permissions/Scope**

    None / not specified

  - **Aliases**

    `uhelp`, `用户帮助`, `uh`

  ---

### [command] ai_helper

- **Purpose**

  AI assistant using ChatGLM large model, mainly for answering bot-usage questions. 15 uses per hour.

- **Usage**

``` Text
/ai_helper (conversation) [OPTION]
OPTION:
    -h, --help	Show help
    -r, --raw	Parse all following text as plain text (highest priority)
    -c, --ctrl	Including -c anywhere turns the following content into a command
Current command params:
clear : Clear your conversation history
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `ai`, `aih`

---

### [command] alias

- **Purpose**

  Get alias list for a command; aliases can be used to invoke that command.

- **Usage**

``` Text
/alias (command or alias)
```

- **Permissions/Scope**

  None

- **Aliases**

  `别名`, `al`

---

### [command] announce

- **Purpose**

  Publish an announcement; will appear in scheduled reports.

- **Usage**

``` Text
/announce <(SUPERUSER)announcement content>
```

- **Permissions/Scope**

  None

- **Aliases**

  `公告`, `anno`

---

### [command] answer

- **Purpose**

  Let Deon open a page of the Book of Answers and read it aloud.

  > Think your question silently and you will receive your answer.

- **Usage**

``` Text
/answer
```

- **Permissions/Scope**

  None

- **Aliases**

  `答案之书`, `ans`, `550w`

---

### [command] bot_leave

- **Purpose**

  Make Deon command the XME-Deon-Bot to leave the group.

- **Usage**

``` Text
/bot_leave
```

- **Permissions/Scope**

  Is admin OR group owner OR SUPERUSER & in group chat

- **Aliases**

  `漠月退群`, `漠月退出群聊`, `Deon_exit`

---

### [command] bottodo

- **Purpose**

  View or modify bot's TODOs / upcoming updates.

  Modifying TODOs requires SUPERUSER.

- **Usage**

``` Text
/bottodo <todo name>
```

- **Permissions/Scope**

  None

- **Aliases**

  `bot待办`, `show_bottodo`

---

### [command] calc

- **Purpose**

  Enter an expression to calculate. `funcs` lists custom functions; `builtins` lists builtin functions.

  Calculator supports variable definitions; define variables on their own line before expressions as `name=value`.

  Calculator can plot functions: prefix line with `:` for 2D (e.g. `:sin(x)`), `::` for 3D.

  Note: use `2*x` not `2x`.

- **Usage**

``` Text
/calc (expression)
```

- **Permissions/Scope**

  SUPERUSER

- **Aliases**

  `计算`, `cc`

---

### [command] choice

- **Purpose**

  Let Deon help decide. Default separator is space; for English input use commas.

  Deon may return different results depending on input; e.g., `1~10` returns a random number between 1 and 10.

  Some global variables can be used in choice as `{xxx}`:

  1. {member} - replaced with a random group member name

- **Usage**

``` Text
/choice (options or choice expression)
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `选择`, `cho`, `决定`

---

### [command] count

- **Purpose**

  Count characters in a given text.

- **Usage**

``` Text
/count (text)
```

- **Permissions/Scope**

  None

- **Aliases**

  `字数`, `len`, `cou`, `length`

---

### [command] custom

- **Purpose**

  Customization tool (e.g., bottle card skins). Currently supports:
  `/cus bottle` - customize drift bottle card skin

- **Usage**

``` Text
/custom <supported feature>
```

- **Permissions/Scope**

  None

- **Aliases**

  `自定义`, `样式`, `cus`

---

### [command] divs

- **Purpose**

  Output up to 20 factorizations of a number into factors >1.

- **Usage**

``` Text
/divs (number)
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `divides`

---

### [command] essence

- **Purpose**

  Output a random `essence` message (if the group has >2 essence messages).

- **Usage**

``` Text
/essence
```

- **Permissions/Scope**

  None

- **Aliases**

  `ess`

---

### [command] furfusion

- **Purpose**

  Use FurFusion API for various furry-gathering queries.

- **Usage**

``` Text
/furfusion <method, default shows countdown>
```

- **Permissions/Scope**

  None

- **Aliases**

  `兽聚汇总`, `兽聚`, `fus`

---

### [command] game

- **Purpose**

  Play a mini-game. Game args are `name=value` comma-separated.
  Available games:
  - guess (private) - number guessing

- **Usage**

``` Text
/game (game name) [OPTIONS]
OPTIONS:
    -h, --help	Show help
    -a, --args	Specify game args, example: /game -a (arg list)
    -i, --info	Show help for the specified game instead of playing
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `游戏`, `小游戏`, `play`, `玩`, `gm`

---

### [command] help

- **Purpose**

  Show help or feature help. If the feature argument is a number, it will turn to that page.

- **Usage**

``` Text
/help <feature>
```

- **Permissions/Scope**

  None

- **Aliases**

  `usage`, `docs`, `帮助`, `h`

---

### [command] httpcode

- **Purpose**

  Get HTTP status code info and its cat image.

- **Usage**

``` Text
/httpcode <status code>
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `http`, `http状态码`

---

### [command] 今日鉴毛

- **Purpose**

  Randomly return an image from `Today's Inspection`.

- **Usage**

``` Text
/今日鉴毛
```

- **Permissions/Scope**

  None

- **Aliases**

  `鉴毛`, `jianmao`, `jrjm`

---

### [plugin] Today's Wife

- **Purpose**

  View your or others' `today's wife` in the group (for fun).

- **Commands:**

    #### wife

  - **Purpose**

    View your or someone else's today's wife. If you @ someone, it will also @ your today's wife.

  - **Usage**

  ```Text
  /wife <@target>
  ```

  - **Permissions/Scope**

    0. **Use in group only**

  - **Aliases**

    `今日老婆`, `kklp`, `看看老婆`, `w`.

  ---

### [command] jrrp

- **Purpose**

  View today's luck for a QQ number or group member ranking. Integer param: positive shows best rank, negative shows worst. `avg` for group average.

- **Usage**

``` Text
/jrrp jrrp <param>
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `今日人品`, `luck`

---

### [command] location

- **Purpose**

  View or bind your city/region for easier weather queries.

  Unbind with `/loc clear` or `/loc unbind`

- **Usage**

``` Text
/location (place)
```

- **Permissions/Scope**

  None

- **Aliases**

  `绑定位置`, `设置位置`, `定位`, `loc`

---

### [command] lotluck

- **Purpose**

  Spend 5 coins to draw an omikuji from Asakusa, Tokyo.

- **Usage**

``` Text
/lotluck
```

- **Permissions/Scope**

  None

- **Aliases**

  `抽签`, `求签`, `签`

---

### [command] machine

- **Purpose**

  A mysterious machine — see what happens when you view it (WIP).

- **Usage**

``` Text
/machine
```

- **Permissions/Scope**

  None

- **Aliases**

  `magic`, `mag`, `神秘机器`

---

### [command] maifriend

- **Purpose**

  Generate a travel partner image for you or a specified group member.

- **Usage**

``` Text
/maifriend <@user>
```

- **Permissions/Scope**

  None

- **Aliases**

  `旅行伙伴`, `maif`

---

### [command] peek

- **Purpose**

  View the host machine's screen info; pass monitor index; 0 means all monitors.

- **Usage**

``` Text
/peek <monitor index>
```

- **Permissions/Scope**

  In groups allowed for peeking

- **Aliases**

  `视奸`, `视奸179`, `peekbot`

---

### [command] peek179

- **Purpose**

  Return a specific 179 image.

- **Usage**

``` Text
/peek179
```

- **Permissions/Scope**

  None

- **Aliases**

  `peek99`, `kk99`, `kk179`

---

### [plugin] Drift Bottle

- **Purpose**

  Throw or pick drift bottles from various groups. Each user can pick 30 per hour.
  Mysterious force has invaded the sea... each pick increases chaos and fragility, but likes reduce chaos.

- **Commands:**

    #### throw

  - **Purpose**

    Throw a bottle (text and image).

  - **Usage**

  ```Text
  /throw (bottle content)
  ```

  - **Permissions/Scope**

    0. **Use in group only**

  - **Aliases**

    `扔瓶子`, `扔漂流瓶`, `扔瓶`.

  ---

  #### pickup

  - **Purpose**

    Try to pick a bottle.

  - **Usage**

  ```Text
  /pickup
  ```

  - **Permissions/Scope**

    0. **None / not specified**

  - **Aliases**

    `捡瓶子`, `捡漂流瓶`, `捡瓶`, `pick`, `p`.

  ---

  #### seek

  - **Purpose**

    Treasure hunt at sea (use `/seek` for detailed help).

  - **Usage**

  ```Text
  /seek <action>
  ```

  - **Permissions/Scope**

    0. **None / not specified**

  - **Aliases**

    none.

  ---

### [command] ping

- **Purpose**

  Returns current message latency.

- **Usage**

``` Text
/ping
```

- **Permissions/Scope**

  None

- **Aliases**

  `echotime`, `延迟`, `测延迟`

---

### [command] schtime

- **Purpose**

  Toggle hourly announcement feature. Announcements occur daily at 0, 8, 12, 20 and may include version info or tips.

- **Usage**

``` Text
/schtime
```

- **Permissions/Scope**

  In group & is admin or group owner

- **Aliases**

  `报时`, `stime`

---

### [command] setu

- **Purpose**

  Send a `setu` image? (actually rainbow cockroach)

- **Usage**

``` Text
/setu
```

- **Permissions/Scope**

  None

- **Aliases**

  `涩图`, `setu`, `色图`

---

### [command] shop

- **Purpose**

  Shop to buy items with coins. Provide item code to purchase, e.g., `/shop a1`.

- **Usage**

``` Text
/shop <item code>
```

- **Permissions/Scope**

  None / not specified

- **Aliases**

  `星币商店`, `商店`

---

### [command] status

- **Purpose**

  View system status of the device running this XME-Bot instance.

- **Usage**

``` Text
/status
```

- **Permissions/Scope**

  None

- **Aliases**

  `系统状态`, `stats`

---

### [command] tip

- **Purpose**

  Deon will send a tip when used.

- **Usage**

``` Text
/tip <tip number>
```

- **Permissions/Scope**

  None

- **Aliases**

  `提示`

---

### [command] title

- **Purpose**

  Set a title for a group member (requires bot to be group owner).

- **Usage**

``` Text
/title ( @member to set ) (title name, use -delete to remove)
```

- **Permissions/Scope**

  Is admin OR SUPERUSER & in group

- **Aliases**

  `set_title`, `设置头衔`, `头衔`

---

### [plugin] Dice

- **Purpose**

  Custom-sided or rule-based dice.

- **Commands:**

    #### dice

  - **Purpose**

    Roll dice with specified sides * quantity.

  - **Usage**

  ```Text
  /dice (sides) <quantity>
  ```

  - **Permissions/Scope**

    0. **None / not specified**

  - **Aliases**

    `d`, `rd`, `骰子`.

  ---

### [command] weather

- **Purpose**

  Check weather for a location; limited to five times per 5 minutes.

- **Usage**

``` Text
/weather <location name> [OPTIONS]
OPTIONS:
    -h, --help	Output help, equivalent to `/help weather`
    -w, --warn	Use this option alone to view detailed warnings
```

- **Permissions/Scope**

  None

- **Aliases**

  `当前天气`, `天气`, `查看天气`, `wea`

---

### [command] whoru

- **Purpose**

  View the current role that xme-bot is using.

- **Usage**

``` Text
/whoru
```

- **Permissions/Scope**

  None

- **Aliases**

  `whoareuy`

---

### [command] xmeposts

- **Purpose**

  Subscribe via RSS and view the latest n posts by 九九 (default 1).

- **Usage**

``` Text
/xmeposts <number of posts>
```

- **Permissions/Scope**

  None

- **Aliases**

  `九九文章`, `rss179`, `posts179`, `blogposts`, `posts`, `post`

---