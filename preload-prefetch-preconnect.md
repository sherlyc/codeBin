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

## Prefetch

It allows browser to fetch resources in the background and store them in the browser cache, assuming the user will request them later.

### Link Prefetching

HTML:
```
<link rel="prefetch" href="/uploads/images/pic.png">
```

HTTP Header:
```
Link: </uploads/images/pic.png>; rel=prefetch
```

### DNS Prefetching

Perform DNS lookups on a page in the background which the user is browsing to minimize latency.

The main difference between both directives is that **prefetch** aims to fetch resources for the next navigation which are low-priority. **Preload** however, focusses on the current navigation and fetches resources with high-priority.
