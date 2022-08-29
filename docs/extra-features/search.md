---
sidebar_position: 2
description: Get the post you want in a few clicks.
---

# Search

Search features are enabled by default, but requires a few steps to make it available.

1. Run
  ```bash
  # [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
  $ npm install hexo-generator-search --save
  ```
2. Add these lines to blog configuration `_config.yml`:
  ```yaml
  search:
    path: search.json
    content: false
  ```
3. Add new search page so that Hexo will generate it.
  ```bash
  $ hexo new page 'search'
  ```
4. Replace all its content with:
  ```markdown
  ---
  type: search
  ---
  ```

Done! Your search page is ready at `/search/`.
