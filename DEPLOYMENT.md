# Deployment Guide - AutaSobě

## File Structure

### Production Files (Minified - Use These!)
- `styles.min.css` - Minified CSS (~70% smaller)
- `script.min.js` - Minified JavaScript (~60% smaller)
- `index.html` - Main HTML (already references minified files)

### Development Files (Keep for editing)
- `styles.css` - Readable CSS for development
- `script.js` - Readable JavaScript for development

## Performance Benefits

**Before minification:**
- styles.css: ~11.5 KB
- script.js: ~0.5 KB

**After minification:**
- styles.min.css: ~3.5 KB (70% reduction)
- script.min.js: ~0.2 KB (60% reduction)

**Total savings:** ~8.3 KB (~68% smaller)

## Workflow

### When developing:
1. Edit `styles.css` and `script.js`
2. Test locally
3. Before deploying, regenerate minified files (see below)

### Regenerating minified files:

You can use online tools or build tools:

**Online (Quick & Easy):**
1. CSS: https://cssminifier.com/
   - Copy `styles.css` content
   - Paste and minify
   - Save as `styles.min.css`

2. JS: https://javascript-minifier.com/
   - Copy `script.js` content
   - Paste and minify
   - Save as `script.min.js`

**Command Line (Advanced):**
```bash
# Install tools globally
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles.min.css styles.css

# Minify JS
uglifyjs script.js -o script.min.js -c -m
```

## Files to Upload to Server

### Required files:
- ✅ index.html
- ✅ styles.min.css
- ✅ script.min.js
- ✅ Frame 22.png (favicon)
- ✅ 504023be-b3db-48a4-97de-8628cf689182.png (hero image)
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ .htaccess (if on Apache)

### Optional (don't upload to production):
- ❌ styles.css (development only)
- ❌ script.js (development only)
- ❌ README.md
- ❌ DEPLOYMENT.md
- ❌ SEO-CHECKLIST.md

## Further Optimization

### Image Optimization
Your images can be optimized further:

1. **Hero image** (504023be-b3db-48a4-97de-8628cf689182.png):
   - Convert to WebP format for better compression
   - Use responsive images with srcset

2. **Favicon** (Frame 22.png):
   - Already small, but could be WebP too

### Recommended tools:
- https://squoosh.app/ (online image optimizer)
- https://tinypng.com/ (PNG compression)

### Enable Gzip/Brotli compression
Your `.htaccess` file already includes gzip compression. Ensure your server supports it.

## Testing

After deployment, test:
1. **PageSpeed Insights:** https://pagespeed.web.dev/
2. **GTmetrix:** https://gtmetrix.com/
3. **WebPageTest:** https://www.webpagetest.org/

Target scores:
- Mobile: 90+
- Desktop: 95+

## Current Performance

With minified CSS/JS:
- ✅ Fast initial load
- ✅ No external dependencies
- ✅ Optimized animations
- ✅ Mobile-first responsive
- ✅ Lightweight (~15 KB total HTML/CSS/JS)

**Note:** Your `index.html` already references the minified versions!

