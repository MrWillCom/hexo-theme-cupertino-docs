---
sidebar_position: 6
description: Display and hide components automatically.
---

# Scroll Reveal

Display and hide components automatically when readers scrolls the page.

```yaml
scroll_reveal: true
```
For further configuration, see [Customization — ScrollReveal](https://scrollrevealjs.org/guide/customization.html), and edit EJS source code:

```html title=layout/layout.ejs {5-7}
<% if (theme.scroll_reveal) { %>
<script src="https://unpkg.com/scrollreveal"></script>
<script>
    window.addEventListener('load', () => {
        ScrollReveal({ delay: 250, reset: true, easing: 'cubic-bezier(0, 0, 0, 1)' })
        ScrollReveal().reveal('.post-list-item .cover-img img')
        ScrollReveal().reveal('.post-list-item, .card, .content p img, .content .block-large img', { distance: '60px', origin: 'bottom', duration: 800 })
    })
</script>
<% } %>
```
