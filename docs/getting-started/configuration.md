---
sidebar_position: 2
description: Customizing and enabling some optional features.
---

# Configuration

Customizing and enabling some optional features of Theme Cupertino requires you to edit your config.

You can find theme config at `themes/cupertino/_config.yaml`. And sometimes you may need to edit your blog config, directly at `_config.yaml` in the root directory of your blog.

After editing the configuration, your should commit and push the changes to your fork. Then commit the theme changes to update your blog, for example:

```bash 
$ cd themes/cupertino

$ git add _config.yaml
$ git commit -m "..."
$ git push

$ cd ../..

$ git add theme/cupertino
$ git commit -m "Update my theme"
$ git push
```
