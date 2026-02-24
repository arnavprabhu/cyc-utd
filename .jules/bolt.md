# Bolt Optimization Log

## Task: Optimize Team Page Image Loading

### Baseline (Estimated)
- **Image Count:** ~30 images (Executives + Senior Analysts + Junior Analysts)
- **Loading Behavior:** Eager loading (default browser behavior for `<img>` tags inside `Avatar`).
- **LCP:** Likely impacted by the sheer number of simultaneous image requests.
- **Network Impact:** High bandwidth usage on initial load, blocking critical resources.

### Strategy
- Use `loading="lazy"` and `decoding="async"` on `AvatarImage` components to defer loading of off-screen images.
\n### Build Status\n- Build succeeds: Yes\n- Lint status: Fails (circular structure error in ESLint config, pre-existing)
\n### Optimization Impact (Expected)\n- **Network Requests:** Reduced by ~30 on initial load (deferred until scroll).\n- **Bandwidth:** Significant reduction in initial payload size.\n- **LCP:** Improved by reducing network contention for the LCP element (Hero image).\n- **User Experience:** Faster time-to-interactive and less jank during scrolling.
