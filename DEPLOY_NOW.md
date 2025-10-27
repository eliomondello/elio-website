# 🚀 Deploy Your Website in 5 Minutes - Get DNS Records

## Simplest Method: Netlify Drop (No Account Needed)

### Step 1: Download Your Website
1. Download the file: `elio-website-production.zip` (located in this folder)
2. Extract the ZIP file on your computer
3. You'll see a folder called `dist` - this is your website

### Step 2: Deploy to Netlify (FREE & PERMANENT)
1. Go to: **https://app.netlify.com/drop**
2. Drag the entire `dist` folder onto the page
3. Wait 30 seconds - your site is now LIVE!
4. You'll get a URL like: `https://sparkly-name-123456.netlify.app`

### Step 3: Get Your Permanent URL
1. Click "Claim this site" (optional - you can do this later)
2. Copy your permanent Netlify URL
3. You can customize it to: `https://eliomondello.netlify.app`

### Step 4: Configure DNS in WordPress.com

Once you have your Netlify URL, go to WordPress.com:

#### Option A: Simple Redirect (Easiest)
1. WordPress.com Dashboard → Settings
2. Look for "Site Redirect" or "Domain Forwarding"
3. Enter your Netlify URL: `https://your-site.netlify.app`
4. Save - Done! ✅

#### Option B: Custom Domain on Netlify (Professional)
1. In Netlify, go to: Domain Settings → Add Custom Domain
2. Enter: `eliomondello.com`
3. Netlify will give you these DNS records:

**Add these in WordPress.com DNS Settings:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME  
Name: www
Value: your-site.netlify.app
```

## Alternative: GitHub Pages (If you have GitHub)

### Quick GitHub Deployment
1. Go to: https://github.com/new
2. Create repository: `elio-portfolio` (Public)
3. Upload the `dist` folder contents
4. Settings → Pages → Enable from `main` branch
5. Your site: `https://YOUR-USERNAME.github.io/elio-portfolio/`

### GitHub Pages DNS Records
Add these in WordPress.com DNS:
```
Type: A
Name: @
Values: 
  185.199.108.153
  185.199.109.153
  185.199.110.153
  185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

## Need Help?

**Current Test URL (Temporary):**
https://8088-ifwuotshjfeiv0dsmbw1c-22a1758c.manusvm.computer

**Files Ready:**
- `elio-website-production.zip` - Your complete website
- `dist/` folder - Production build ready to deploy

**Support:**
- Netlify: https://docs.netlify.com/domains-https/custom-domains/
- GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## ⚡ Fastest Path: Netlify Drop

1. Download `elio-website-production.zip`
2. Extract it
3. Go to https://app.netlify.com/drop
4. Drag the `dist` folder
5. Copy your new permanent URL
6. Configure redirect in WordPress.com

**Total time: 5 minutes** ✅

