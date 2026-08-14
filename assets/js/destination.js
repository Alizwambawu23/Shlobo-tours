'use strict';

/*
  destination.js
  - Loads a destination key from the URL (?place=...)
  - Fetches assets/data/data.json
  - Renders a masonry gallery for the requested destination
  - Shows loading and error states
*/

document.addEventListener('DOMContentLoaded', () => {
  // ==================== 1. DOM ELEMENTS (queried after DOM is ready) ====================
  const titleElement = document.getElementById('destination-title');
  const gridElement = document.getElementById('masonry-grid');
  const loadingElement = document.getElementById('loading-message');
  const errorElement = document.getElementById('error-message');

  // Basic sanity checks
  if (!titleElement || !gridElement || !loadingElement || !errorElement) {
    console.error('Destination page: required DOM elements are missing.');
    return;
  }

  // ==================== 2. INITIALIZATION FUNCTION ====================
  function initDestinationPage() {
    // Read `?place=` from the URL (e.g. ?place=kashmir)
    const params = new URLSearchParams(window.location.search);
    const placeKey = params.get('place');

    if (!placeKey) {
      // No place specified in URL
      showError('No destination specified.');
      return;
    }

    // Start fetching data for the requested place
    fetchData(placeKey);
  }

  // ==================== 3. DATA FETCHING FUNCTION ====================
  async function fetchData(placeKey) {
    // Show loading state
    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    gridElement.setAttribute('aria-busy', 'true');

    try {
      const resp = await fetch('assets/data/data.json');

      if (!resp.ok) {
        throw new Error('Data file not found (data.json missing).');
      }

      const allData = await resp.json();

      // Look up destination using lowercase key to avoid case sensitivity issues
      const destination = allData[placeKey.toLowerCase()];

      if (destination && Array.isArray(destination.images) && destination.images.length > 0) {
        updatePage(destination);
      } else {
        throw new Error('Destination not found in data.');
      }
    } catch (err) {
      console.error('Error fetching destination data:', err);
      showError(err.message || 'An unknown error occurred while loading destination data.');
    } finally {
      // ensure we clear aria-busy if we ended with an error before updatePage runs
      gridElement.setAttribute('aria-busy', 'false');
    }
  }

  // ==================== 4. UPDATE PAGE FUNCTION ====================
  function updatePage(destination) {
    // Update the browser tab title
    document.title = `Shlobo - ${destination.title}`;

    // Update the page heading
    titleElement.textContent = destination.title;
    titleElement.style.display = ''; // ensure it's visible

    // Clear any previous grid content
    gridElement.innerHTML = '';
    gridElement.setAttribute('aria-busy', 'true');

    // Add images to the grid
    destination.images.forEach((imageUrl, index) => {
      // Wrapper div for skeleton & layout
      const wrapper = document.createElement('div');
      wrapper.className = 'image-wrapper skeleton-loading';
      // set CSS variable for animation delay if CSS uses --i
      wrapper.style.setProperty('--i', String(index));

      // Create the image element
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `Image ${index + 1} of ${destination.title}`;
      img.loading = 'lazy';

      // When the image loads, remove skeleton state and show animation class
      img.addEventListener('load', () => {
        wrapper.classList.remove('skeleton-loading');
        img.classList.add('animate-in');
      });

      // On error, show optional error styling and log
      img.addEventListener('error', () => {
        wrapper.classList.remove('skeleton-loading');
        wrapper.classList.add('image-error');
        console.warn(`Failed to load image: ${imageUrl}`);
      });

      wrapper.appendChild(img);
      gridElement.appendChild(wrapper);
    });

    // Hide loading message and announce done
    loadingElement.style.display = 'none';
    gridElement.setAttribute('aria-busy', 'false');
    gridElement.setAttribute('aria-live', 'polite');
  }

  // ==================== 5. ERROR HANDLING FUNCTION ====================
  function showError(message) {
    // Hide loading and clear grid
    loadingElement.style.display = 'none';
    gridElement.innerHTML = '';
    gridElement.setAttribute('aria-busy', 'false');

    // Hide main title
    if (titleElement) titleElement.style.display = 'none';

    // Show the error panel and set its text if possible
    errorElement.style.display = 'block';

    // If the error box contains a paragraph, update it with the message
    const paragraph = errorElement.querySelector('p');
    if (paragraph) paragraph.textContent = message;

    // Update the browser title
    document.title = 'Shlobo - Error';

    console.error('Destination error:', message);
  }

  // ==================== 6. START ====================
  initDestinationPage();
});