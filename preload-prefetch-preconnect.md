# Resource Hints
## Preload 

It focuses on current navigation and fetches resources with high-priority.

### Example: 
```
<link rel="preload" href="image.png">
```

Preloading fonts
```
<link rel="preload" href="https://example.com/fonts/font.woff" as="font" crossorigin>
```
The main difference between both directives is that **prefetch** aims to fetch resources for the next navigation which are low-priority. **Preload** however, focusses on the current navigation and fetches resources with high-priority.
