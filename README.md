# clear_format
Redactor plugin which adds the functionality to remove the defined inline styles

# Installation

* Download the package
* Rename, if needed, the downloaded directory to `clear_format`
* Copy the directory to the redactor plugin directory
* To enable the plugin, you have to add `clear_format` to the `plugins` definition in your redactor config file

# Examples

Show button:
```
{
  "buttons": ["html", "formatting","bold", "italic", "unorderedlist", "orderedlist", "link", "image", "video"],
  "plugins": ["alignment", "fullscreen", "video", "table", "clear_format"]
}

```

Show Button and add new entry in the formatting dropdown:

```
{
    "buttons": ["html", "formatting","bold", "italic", "unorderedlist", "orderedlist", "link", "image", "video"],
    "plugins": ["alignment", "fullscreen", "video", "table", "clear_format"],
    "formattingAdd" : {
        "clear_format": {
            "title": "Remove Inline Styles",
            "api": "plugin.clear_format.toggle"
        }
    }
}
```