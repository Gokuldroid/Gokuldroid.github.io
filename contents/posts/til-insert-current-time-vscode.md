---
path: til-insert-current-time-vs-code
tags:
  - productivity
  - vs code
date: 2022-09-15T22:16:11.000Z
title: Insert current time in vs code using snippet
render_in_place: true
categories:
  - today I learned
---
Cmd + shift + p -> configure user snippets -> new global snippets -> paste the following snippet -> save -> and type `currenttime`

```json
{
	"current time": {
		"prefix": "currenttime",
		"body": [
			"$CURRENT_YEAR-$CURRENT_MONTH-${CURRENT_DATE}T$CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND.000Z"
		],
		"description": "Insert current time"
	}
}
```

Supported snippet variables can be found [here](https://code.visualstudio.com/updates/v1_20#_more-snippet-variables).
More about [vs code snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets).