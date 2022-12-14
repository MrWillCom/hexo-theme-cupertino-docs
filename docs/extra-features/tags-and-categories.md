---
sidebar_position: 1
description: Organize your posts.
---

# Tags and Categories

Tags and categories features are enabled by default. But only part of them are available with zero-config. To make full use of them, follow the instructions:

Firstly, run these commands:

```bash
$ hexo new page 'tags'
$ hexo new page 'categories'
```

Then, you should get two new files at `source/tags/index.md` and `source/categories/index.md`. Replace all of their content with the following:

```markdown title=source/tags/index.md
---
type: tags
---
```

```markdown title=source/categories/index.md
---
type: categories
---
```

Done! Now, `/tags` and `/categories` pages will be generated correctly.
