# Icons Setup

To complete your PWA, you need to add icon files. Here's how:

## Quick Setup (5 minutes)

### Option 1: Use Favicon.io (Easiest)
1. Go to https://favicon.io/favicon-generator/
2. Create an icon with:
   - Text: "TS" or "❤️" or "👨‍👩‍👧"
   - Background: #6366f1 (purple/blue)
   - Font: Choose any you like
3. Click "Download"
4. Extract the zip file
5. Rename the files:
   - `favicon-32x32.png` → `icon-32.png`
   - `android-chrome-192x192.png` → `icon-192.png`
   - `android-chrome-512x512.png` → `icon-512.png`
   - `apple-touch-icon.png` → `apple-touch-icon.png` (keep same)
6. Upload all renamed files to your GitHub repository

### Option 2: Use Any Image
1. Find or create an image (family photo, logo, etc.)
2. Go to https://www.iloveimg.com/resize-image
3. Create these sizes:
   - 32x32 pixels → save as `icon-32.png`
   - 192x192 pixels → save as `icon-192.png`
   - 512x512 pixels → save as `icon-512.png`
   - 180x180 pixels → save as `apple-touch-icon.png`
4. Upload all files to your GitHub repository

### Option 3: Skip Icons (App Still Works!)
The app works fine without custom icons. Browser will use default icons.

## Files Needed

- `icon-32.png` (32x32) - Browser tab
- `icon-192.png` (192x192) - Android home screen
- `icon-512.png` (512x512) - Android splash screen
- `apple-touch-icon.png` (180x180) - iOS home screen

## Upload to GitHub

1. Go to your GitHub repository
2. Click "Add file" → "Upload files"
3. Drag your icon files
4. Click "Commit changes"
5. Netlify auto-deploys!

## Test Your Icons

After uploading:
1. Open your Netlify URL
2. Add to home screen
3. Check the icon appears correctly

That's it! 🎉
