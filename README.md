# Shlobo Tours

A responsive travel and tourism website for Shlobo Tours, created as a front-end project that combines modern design, tourism branding, travel destination discovery, interactivity, and SEO-friendly structure.

---

## Project Overview

Shlobo Tours is presented as a South African travel concept focused on creating more accessible and inspiring travel opportunities for Black South Africans. The website reflects a warm, modern and welcoming brand identity with a travel-first user experience.

This project includes:

- a strong home page and hero section
- destination browsing and filtering
- dynamic destination detail pages
- interactive map integration
- comment and AI-inspired travel assistant section
- mobile-friendly navigation and responsive layout
- relevant booking and contact forms
- SEO-focused structure and metadata

---

## Website Goals

- Showcase Shlobo Tours as a professional travel brand
- Promote destination experiences and tourism discovery
- Encourage customer enquiries and bookings
- Deliver a clean, accessible and mobile-friendly user experience
- Demonstrate modern front-end development using HTML, CSS and JavaScript

---

## Project Pages

The submitted website includes the following structure:

- `index.html` — landing page with hero, search/filter sections, destinations, FAQ, app CTA and contact information
- `about.html` — organisation profile, mission, values and contact section
- `destination.html` — detailed destination experience with gallery, map, comments and AI-style travel assistant

---

## Main Features

### 1. Responsive Travel Homepage
- Hero section with video background and navigation
- Clear travel branding and strong CTA buttons
- Mobile-friendly layout across desktop, tablet and phone screens
- Pink-and-gray visual theme with modern card-based layout

### 2. Destination Discovery
- Destination cards with category-based browsing
- Search and filter functionality for travel locations
- Dynamic state updates for empty search results
- Destination navigation that loads the selected place detail page

### 3. Destination Detail Page
- Large image gallery using masonry-style layout
- Dynamic image loading from `assets/data/data.json`
- Loading and error states for destination pages
- Interactive map using Leaflet.js
- Location metadata for each destination

### 4. Interactive Map Feature
- Map integration using Leaflet OpenStreetMap tiles
- Destination markers for selected locations
- Popup information for each place
- Street-level city view for each destination map
- Zoomed-in map positioning to show city roads and surrounding area more clearly
- Location-based travel experience for users

### 5. Comments Section
- Visitor comment form
- Comment cards for user feedback
- South African-style names and travel comments to reflect the target audience
- Responsive layout
- Example user comments and AI-style response presentation

### 6. AI-Inspired Travel Assistant
- A fake AI travel assistant card with a destination recommendation
- Quick recommendations for itinerary planning
- Modern UI section for travel guidance

### 7. FAQ and Interaction
- Accordion-style FAQ section
- Smooth expand/collapse interaction for user questions
- Enhanced UX via JavaScript interactivity

### 8. Booking and Newsletter Forms
- Booking enquiry form on the main landing page
- Newsletter subscription form in the footer
- JavaScript validation and success messages
- Client-side form feedback to improve usability

### 9. About Page
- Brand story and mission statement
- Organisation values and reasons to choose Shlobo Tours
- Contact options for phone, email and chat

### 10. Styling and Design System
- CSS Grid and Flexbox layouts
- Responsive media queries
- Modern typography and spacing
- Hover states, buttons, shadows and cards
- Pink and gray brand palette

### 11. Animation and UI Detail
- Balloon animation on image click
- Smooth transitions and hover interaction
- Scroll behaviour and visual transitions
- Skeleton loading for gallery images

### 12. Destination Image Coverage
- Destination galleries include local project images where available
- Pexels fallback images are used as backup for cities without matching local image assets
- This ensures each city displays media consistently and avoids empty gallery states

### 13. SEO and Accessibility Features
- Metadata and page titles
- Semantic HTML structure
- Sitemap included as `sitemap.xml`
- Clean URLs and internal link structure
- Mobile-friendly design
- Alt text and descriptive naming for destinations and relevant content

---

## Functionality Coverage

### 2. Functionality

#### 2.1 Interactive Elements
The website includes interactive features such as:

- accordion FAQ sections
- mobile menu navigation
- hover and animation effects
- live search and filtering for destinations
- image gallery interactions
- dynamic destination page loading
- map functionality for geography-based browsing
- street-view city map layout
- comment section and AI-style responses

#### 2.2 Dynamic Content
The website implements dynamic loading and user-driven content updates:

- destination search/filter interaction
- destination URL parameter loading (`?place=...`)
- JavaScript-driven rendering of destination images
- live UI feedback after form submission
- AI-style travel recommendation content
- fallback image loading for cities without local media

---

### 3. Search Engine Optimization (SEO)

#### 3.1 On-Page SEO
Included in the build:

- keyword-focused travel branding and destination copy
- page titles and metadata
- heading structure using semantic HTML
- mobile responsiveness
- internal linking between pages and sections
- descriptive destination page content
- geographic location references for destination pages

#### 3.2 Off-Page SEO Support
The project supports digital promotion through:

- brand-oriented website structure
- social-friendly content and presentation
- local tourism positioning
- search-friendly destination naming and page organisation

#### 3.3 Additional SEO / Site Structure
- `sitemap.xml` created for search engine discovery
- organised project structure for clean content indexing
- static front-end architecture supporting performance and maintainability
- fallback media ensures more consistent rendering across destinations

---

### 4. Form Functionality and Validation

The project integrates forms with user-friendly validation and feedback.

#### Booking / Enquiry Forms
- required fields and validation checks
- HTML5 validation support
- JavaScript validation and success feedback
- user-friendly post-submission confirmation messages

#### Newsletter Form
- email input validation
- success response after form submission
- visual confirmation without page reload

#### Contact / Enquiry Style Experience
The site supports a travel enquiry flow through the front-end structure and CTA sections, reflecting the expected business and user interaction flow for a tourism website.

---

## Project Structure

```bash
shlobo-tours/
├── index.html
├── about.html
├── destination.html
├── sitemap.xml
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── destination.js
│   ├── data/
│   │   └── data.json
│   └── images/
│       ├── ... project images and videos ...
└── ...
```

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Responsive layout design
- Leaflet.js for map functionality
- Google Fonts
- Remix Icon library
- OpenStreetMap tiles for map data
- Pexels image fallback sources for city gallery coverage

---

## Setup Instructions

To run the website locally:

```bash
# Open the project folder
cd "c:\Users\Student\Downloads\shlobo tours"

# Open the site in your browser
start index.html
```

You can also use a live preview extension such as Live Server in VS Code for a better development experience.

---

## Part 2: Feedback and Changelog

### Issue resolved: incorrect project identity
The original README was corrected to reflect the actual submitted project instead of an unrelated tutorial template.

### Issue resolved: documentation mismatch
The final README now reflects the Shlobo Tours project, its purpose and the actual implemented pages.

### Issue resolved: requirement coverage documentation
This README now documents the project features, interactive functionality, SEO work and form validation in line with the assignment expectations.

### Changelog
- Corrected the project identity to Shlobo Tours
- Removed unrelated Tripzo/tutorial branding
- Added full feature documentation
- Added interactivity and functionality notes
- Added SEO section and sitemap note
- Added form validation and user feedback notes
- Added comments and AI-response feature documentation
- Added map functionality documentation
- Added street-level city map update
- Added South African travel comment examples
- Added fallback image support for cities with missing local image assets
- Added project structure and setup notes

---

## Design Notes

The visual design uses a pink and gray palette for a soft, premium travel brand look. The style focuses on:

- luxury but accessible tone
- high readability
- card-based modern layout
- clean whitespace and balance
- travel-inspired imagery and warm tones
- destination-focused storytelling for tourism promotion

---

## Submission Notes

This document represents the final state of the Shlobo Tours project submission. It reflects the implemented front-end website and the completed work contained in the repository, including the interactive destination system, image gallery, map integration, comment section, street-view city map experience, responsive design and travel UX improvements.

---

## Contact

For project enquiries, refer to the assignment submission information and relevant contact details present in the website.

