<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/withaarzoo/bento-portfolio)
![GitHub stars](https://shields.io/github/stars/withaarzoo/bento-portfolio?style=social)
![GitHub forks](https://shields.io/github/forks/withaarzoo/bento-portfolio?style=social)
[![Twitter Follow](https://shields.io/twitter/follow/withaarzoo?style=social)](https://twitter.com/intent/follow?screen_name=withaarzoo)
[![YouTube Video Views](https://shields.io/youtube/views/SAu7e09vXoQ?style=social)](https://youtu.be/hmgG97mU-oo)

  <br />
  <br />

  <h2 align="center">Tripzo: Premium Travel & Tour Agency Website — HTML, CSS & Vanilla JavaScript</h2>

Welcome to the  **Tripzo** project! This is a high-quality, fully responsive **Travel and Tourist Agency Website** built with **HTML, CSS, and JavaScript**. It features a modern, professional UI and robust functionality, making it perfect for launching a business or creating an impressive client project — no heavy frameworks required!

  <div>
    <a href="[https://youtu.be/dh_1i0XyxQw](https://youtu.be/3D1_cQ-9nT4)"><strong>➥ Watch The Complete Tutorial</strong></a>
    <br>
    <br>
    <a href="https://t.me/codewithaarzoo"><strong>⭐ Download The Full Source Code</strong></a>
  </div>

</div>

---

## 🚀 Recommended For
This project is built to be a production-ready codebase, ideal for:

- **Small Business Owners:** Launch a professional, high-trust travel website fast.

- **Students:** Master advanced CSS Grid, Flexbox, and complex vanilla JS logic.

- **Resellers/Freelancers:** A clean, organized, and functional template ready for client customization and resale. High-demand template for local business clients.

---

## 📌 Key Features

🎨 **Modern UI/UX**  
- **Immersive Hero Section:** Video background with a slick, transparent-to-solid navbar scroll effect.

- **Custom Layouts:** Asymmetrical CSS Grid for the Popular Places section, giving a bespoke look.

**Robust Interactivity**  

⚙️ **Dynamic Functionality (Vanilla JS)**

- **Live Search & Filtering:** Filter places by category (e.g., India, Japan) and live-search by city or country.

- **Drag-Scroll Filter Menu:** Enhanced UX for horizontal filtering buttons on desktop and mobile.

- **Dynamic Gallery:** A dedicated destination.html page that loads images dynamically based on URL parameters (?place=kashmir).

- **CSS Masonry Grid:** Images in the gallery are displayed using an attractive, Pinterest-style Masonry layout.

- **FAQ Accordion:** JavaScript logic ensures only one FAQ item is open at a time.

🔍 **Developer Tools**

- **Wireframe Visualization Mode:** Press `W` or click the 📐 button to toggle wireframe view. Shows color-coded outlines of all sections:
  - 🔴 Red = Header
  - 🟢 Green = Main Content
  - 🔵 Blue = Footer
  - 🟠 Orange = Sections
  - Perfect for debugging layouts and understanding page structure.

- **XML Sitemap:** Complete SEO-ready sitemap (`sitemap.xml`) with all 8 destination pages automatically indexed for search engines.

**Code & Structure** 

📱 **Fully Responsive**

- Optimized for mobile, tablet, and desktop, ensuring a professional look across all devices.

- Clean, well-organized file structure based on modern best practices.

---

## 📂 Project Structure

This structure helps you navigate the project files for customization.

```bash
Tripzo-Travel-Agency/
├── index.html            # Main Landing Page
├── about.html            # About Us Page (Company story and values)
├── destination.html      # Dynamic Gallery Page (for specific destinations)
├── sitemap.xml           # XML Sitemap for SEO (all destinations indexed)
├── README.md             # Project Documentation
├── assets/
│   ├── css/
│   │   └── style.css     # All styling, variables, responsive media queries, and wireframe styles
│   ├── js/
│   │   ├── main.js       # Homepage JS (Nav, Scroll, Filter, Search, FAQ, Wireframe Toggle, etc.)
│   │   └── destination.js# Logic for dynamic image loading on destination page
│   ├── data/
│   │   └── data.json     # Data file for all destination images
│   └── images/           # All project-specific images/videos
└── preview.jpg           # Project Preview Thumbnail
```

---

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository (or download the source files from the link below)
git remote add origin https://github.com/withaarzoo/Tripzo.git  
cd Tripzo
git checkout main
# Open index.html in your browser or use a Live Server extension
open index.html
```

---

## 🛠️ Developer Features

### Wireframe Visualization Mode
Toggle wireframe mode to see the page structure with color-coded section outlines:

- **Keyboard Shortcut:** Press `W` to toggle
- **Mouse:** Click the 📐 button in the bottom-right corner
- **Color Legend:**
  - 🔴 Red outline = Header section
  - 🟢 Green outline = Main content area
  - 🔵 Blue outline = Footer section
  - 🟠 Orange outline = Other sections
  - Blue outline = All individual elements

This is useful for:
- Debugging responsive layouts
- Understanding page structure and hierarchy
- Optimizing CSS Grid and Flexbox layouts
- Testing element spacing and alignment

### Interactive Balloon Animation
Click on any image throughout the website to trigger a fun balloon animation effect:

- **8 colorful balloons** burst out from the click point (red, teal, blue, salmon, mint, yellow, purple, light blue)
- **Smooth floating motion** - balloons float upward and fade away over 3 seconds
- **Staggered appearance** - balloons appear one after another for a playful effect
- **Universal implementation** - works on all images on the site (popular places, galleries, testimonials, etc.)
- **Pointer cursor** - images show interactive cursor to indicate they're clickable

### SEO Sitemap
The project includes a complete XML sitemap (`sitemap.xml`) that lists all destination pages:
- Home page
- 8 city destinations: Kashmir, Manali, Ooty, Puducherry, Bali, Berlin, London, Tokyo, Wuhan

This helps search engines discover and index all your pages for better SEO rankings.

### Testimonial Section Enhancements
Enhanced visual design with circular image elements:

- **Round Destination Image:** 280px circular image of the featured destination with subtle shadow
- **Round Profile Image:** 120px circular profile picture of the reviewer
- **Overlapping Layout:** Profile image overlaps the destination image for visual appeal
- **Responsive Design:** Images and review text stack vertically on mobile devices
- **Professional Styling:** Clean, modern design with proper spacing and typography

### Professional About Us Page
A dedicated About page featuring:

- **Hero Section:** Beautiful gradient background with compelling header
- **Company Introduction:** Mission statement and value proposition
- **Core Offerings:** 4 feature cards highlighting key benefits:
  - Seamless Global Booking
  - Curated Experiences
  - Trust & Security
  - 24/7 Traveller Support
- **Brand Story:** The origin and vision of Shlobo Tours
- **Call-to-Action:** Direct link to explore destinations and book
- **Contact Information:** Multiple contact methods with phone and email
- **Fully Responsive:** Optimized for all device sizes
- **SEO Optimized:** Included in XML sitemap for search engine indexing

### Fully Functional FAQ Accordion
Interactive FAQ section with:

- **4 Common Questions:** Covering booking, payments, cancellations, and insurance
- **Smooth Toggle:** Click to open/close answers with smooth animations
- **One Open at a Time:** Only one FAQ item can be open simultaneously
- **Accessibility:** Proper ARIA labels and keyboard navigation support
- **Professional Styling:** Styled cards with hover effects

### Contact Information
Company contact details available in multiple locations:

- **Phone:** +1 (800) 745-6261 (Available 24/7)
- **Email:** support@shlobo.com
- **Footer:** Contact info displayed in all page footers
- **About Page:** Dedicated contact section with call, email, and chat options
- **Clickable Links:** Phone numbers and emails are clickable for easy access

---

## 🎉 New Interactive Features Added

### Balloons on Image Click
🎈 Every image on the site is now clickable and triggers colorful balloons!
- Click any image to see 8 balloons float upward
- Different colors each time (random selection)
- Smooth, staggered animation
- Adds fun and interactivity to the user experience

### Rounded Images in Testimonials
✨ The testimonial section now features:
- Perfectly circular destination images (280px)
- Circular profile pictures (120px) with overlapping effect
- Modern, polished appearance
- Better visual hierarchy and focus

---

## ⭐️ Full Source Code

This repository contains the tutorial code. For the final, polished, production-ready codebase that clients demand:

### 👉🏼 [Download Full Source Code 1](https://t.me/codewithaarzoo?text=I%20need%20this%20source%20code)
### 👉🏼 [Download Full Source Code 2](https://api.whatsapp.com/send/?phone=917908198383&text=I+need+this+source+code&type=phone_number&app_absent=0)

---

## 🎥 Video Tutorial

Want to see how every single line of this clean, reusable code was built from scratch and deployed to Netlify?

### 📌 [Watch the Complete Tutorial on YouTube](https://youtu.be/3D1_cQ-9nT4)

## 🔗 Useful Links

* **Google Fonts**: [Visit Site](https://fonts.google.com/) (Used for the custom fonts)
* **Remix Icon CDN**: [Visit Site](https://fonts.google.com/icons) (Used for all icons)
* **Netlify (Free Hosting)**: [Visit Site](https://www.netlify.com/) (Used for the final deployment)

---

## 🤝 Connect with Me

For collaborations or queries, reach out via **[Bento](https://bento.me/withaarzoo).**

---

## 🖼️ Preview

![Thumbnail](./preview.png "thumbnail")

