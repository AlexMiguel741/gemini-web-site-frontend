
# Laveno Shores Hosting Guide

Your website is designed to be lightweight and professional. Here is how to take it live and add your own photos.

## 1. Adding Your Own Images
To make the website yours, follow this structure in your main project folder:

```
/index.html
/images/
  /vista-lago/
    - 1.jpg
    - 2.jpg
  /borghetto/
    - 1.jpg
  /cableway/
    - 1.jpg
  /garden/
    - 1.jpg
```

**Note:** If you don't add these images, the website will automatically show beautiful placeholder photos from Lake Maggiore so it never looks broken.

## 2. Hosting for Free
The easiest ways to put this website online are:

### Option A: Netlify (Easiest)
1. Go to [Netlify](https://www.netlify.com/).
2. Drag and drop your entire project folder (including your new `images` folder) onto their "Drop here" area.
3. Your site is live instantly with a free URL.

### Option B: GitHub Pages
1. Upload your files to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select the `main` branch and click **Save**.

## 3. Customizing Contacts
Open `App.tsx` and search for:
- `mailto:elena@lavenoshores.com` -> Change to your email.
- `https://wa.me/393331234567` -> Change to your phone number.

Enjoy your new professional rental business!
