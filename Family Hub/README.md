# 🏠 Turnbull-Shaw Family Hub

A comprehensive Progressive Web App for tracking family goals, finances, habits, and Madison's milestones.

## ✨ Features

### 📊 Dashboard
- Real-time progress tracking for all family members
- Daily family activity suggestions
- Recent achievements display
- Quick wins celebration

### 🎯 Goals Management
- **Rich's Goals**: Career path to electrician, personal development
- **Shawnie's Goals**: Career advancement, family organization
- **Family Goals**: Financial targets, lifestyle improvements, home management
- Subtask tracking with estimated time
- Priority levels (Critical, High, Medium, Low)

### 📅 Habits Tracker
- Daily habits (tummy time, reading, gratitude)
- Weekly habits (date night, meal prep, cleaning)
- Streak counting with celebration
- One-tap completion

### 👶 Madison's Journey
- Milestone tracking (10 key milestones)
- Vaccination schedule with reminders
- Photo album with date stamps
- Growth log and memories

### 👥 Social Calendar
- Close friends tracking
- Family visit logging
- Last seen dates
- Visit frequency monitoring

### 💰 Financial Overview
- Current savings tracker
- Pension fund monitoring
- Combined income display
- Monthly expense tracking

### ⚡ Quick Capture
- Quick wins journal
- Photo capture for special moments
- Voice notes (coming soon)
- Expense logging (coming soon)

## 🚀 Deploy to Netlify from GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon → **New repository**
3. Name it: `family-hub`
4. Set to **Public** or **Private**
5. **Don't** initialize with README (we have our own files)
6. Click **Create repository**

### Step 2: Upload Your Files

**Option A: GitHub Desktop (Easiest)**
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your new repository
3. Copy all files from the `family-hub` folder into the cloned folder
4. Commit with message: "Initial commit - Family Hub PWA"
5. Push to GitHub

**Option B: Command Line**
```bash
cd family-hub
git init
git add .
git commit -m "Initial commit - Family Hub PWA"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/family-hub.git
git push -u origin main
```

**Option C: GitHub Web Interface**
1. On your new repository page, click **uploading an existing file**
2. Drag all files from the `family-hub` folder
3. Commit with message: "Initial commit"

### Step 3: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Authorize Netlify to access your repositories
5. Select your `family-hub` repository
6. Build settings:
   - **Build command**: (leave empty)
   - **Publish directory**: (leave as `/` or empty)
7. Click **Deploy site**

### Step 4: Your App is Live! 🎉

Netlify will give you a URL like: `https://random-name-123.netlify.app`

You can customize it:
1. Go to **Site settings** → **Change site name**
2. Set it to something like: `turnbull-shaw-hub`
3. Your URL becomes: `https://turnbull-shaw-hub.netlify.app`

### Step 5: Install as PWA

**On iPhone:**
1. Open the URL in Safari
2. Tap the Share button
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**

**On Android:**
1. Open the URL in Chrome
2. Tap the three dots menu
3. Tap **Add to Home screen**
4. Tap **Add**

**On Desktop:**
1. Open the URL in Chrome
2. Click the install icon in the address bar
3. Click **Install**

## 📱 Usage

### Adding Goals
1. Go to **Goals** tab
2. Select person (Rich/Shawnie/Family)
3. Check off completed goals
4. Expand goals with subtasks

### Tracking Habits
1. Go to **Habits** tab
2. Tap **Complete Today** for daily habits
3. Tap **Complete This Week** for weekly habits
4. Watch your streaks grow! 🔥

### Recording Milestones
1. Go to **Madison** tab
2. Scroll to milestones section
3. Tap **Mark as Achieved** when reached
4. Add photos to commemorate

### Quick Capture
1. Tap the **+** button (bottom right)
2. Choose:
   - **Quick Win**: Log something great that happened
   - **Photo**: Capture a moment with Madison
3. Save and celebrate! 🎉

### Social Tracking
1. Go to **Social** tab
2. See friends and family
3. Tap **Mark as Seen Today** after visits
4. Track connection frequency

### Financial Updates
1. Go to **Settings** tab
2. Update income, savings, pension
3. View summary in **Finances** tab

## 🔧 Customization

### Update Family Info
Edit `index.html` and find the `config` state (around line 320):
```javascript
const [config, setConfig] = useState({
  familyName: 'Your-Family',  // Change this
  location: 'Your-City',      // Change this
  shawnieIncome: 40000,       // Update
  richIncome: 0,              // Update
  // ... etc
});
```

### Add More Goals
Find the `data` state (around line 340) and add to:
- `richGoals`
- `shawnieGoals`
- `familyGoals`

### Add Habits
Find `habits` in the `data` state and add to:
- `daily` array
- `weekly` array

## 💾 Data Storage

All data is saved automatically to your browser's localStorage:
- **Persists** across sessions
- **Private** to your device
- **Survives** page refreshes
- **No server** needed

To backup your data:
1. Open browser console (F12)
2. Type: `localStorage.getItem('turnbullShawData')`
3. Copy the output
4. Save to a file

To restore:
1. Open browser console (F12)
2. Type: `localStorage.setItem('turnbullShawData', 'PASTE_YOUR_DATA_HERE')`
3. Refresh the page

## 🔄 Updating Your App

### Quick Updates (GitHub Web)
1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click **Commit changes**
6. Netlify auto-deploys in ~30 seconds!

### Larger Updates (GitHub Desktop)
1. Open GitHub Desktop
2. Pull latest changes
3. Edit files locally
4. Commit your changes
5. Push to GitHub
6. Netlify auto-deploys!

## 📦 Files Included

```
family-hub/
├── index.html          # Main app (all features)
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline functionality
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## 🎨 Icons (Optional)

For a polished PWA, add these icon files to your repository:
- `icon-32.png` (32x32)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)
- `apple-touch-icon.png` (180x180)

You can create these at [Favicon.io](https://favicon.io/) or use any image editor.

## 🐛 Troubleshooting

### App not loading?
- Check browser console (F12) for errors
- Ensure React libraries loaded (check console)
- Try clearing cache: Ctrl+Shift+Delete

### Data not saving?
- Check localStorage is enabled
- Try in a different browser
- Check for private/incognito mode

### Not auto-deploying from GitHub?
1. Go to Netlify dashboard
2. Site settings → Build & deploy
3. Check "Auto publishing" is enabled
4. Manually trigger deploy if needed

## 🚀 Future Enhancements

- [ ] Voice notes
- [ ] Expense tracking with categories
- [ ] Export data to CSV
- [ ] Cloud sync (optional)
- [ ] Weekly review summaries
- [ ] Chart visualizations
- [ ] Notification reminders

## 📄 License

Personal use - Built with ❤️ for the Turnbull-Shaw family

## 🤝 Contributing

This is a personal family project, but feel free to fork and customize for your own family!

## 📞 Support

Having issues? Check the troubleshooting section or review the Netlify deploy logs.

---

**Built with:**
- React 18
- Vanilla JavaScript
- CSS3
- LocalStorage API
- Service Workers
- PWA Standards

**Deployed on:**
- Netlify (automatic deploys from GitHub)

**Made with love by Rich for the family** ❤️
