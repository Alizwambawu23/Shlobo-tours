'use strict';

/*
  main.js
  - Handles mobile menu toggling, navbar scroll state
  - Adds drag-to-scroll for the filter buttons
  - Implements filtering/search for places
  - Handles "show more" and "view more" actions
  - Implements FAQ accordion behavior
  - Navigates to destination page when a card is clicked
*/

document.addEventListener('DOMContentLoaded', () => {
  // ====================
  // 1. MOBILE DRAWER NAVIGATION MENU
  // ====================
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu') || document.querySelector('.nav-menu-mobile');
  const closeMenuIcon = document.querySelector('.close-menu-icon') || document.querySelector('.close-meun-icon');

  if (hamburger && mobileMenu) {
    function openMobileMenu() {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMobileMenu();
      else openMobileMenu();
    });

    if (closeMenuIcon) {
      closeMenuIcon.addEventListener('click', closeMobileMenu);
    }

    // Close mobile menu when a mobile link is clicked
    mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close menu on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  // ====================
  // 2. SCROLLING NAVBAR EFFECT
  // ====================
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once to set initial state
  }

  // ====================
  // 3. HORIZONTAL FILTER SLIDER DRAG LOGIC (mouse + touch)
  // ====================
  const slider = document.querySelector('.filter-buttons-wrapper');
  if (slider) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    // Mouse events
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active-drag');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active-drag');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active-drag');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    });

    // Touch events
    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      slider.classList.add('active-drag');
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    }, { passive: true });

    slider.addEventListener('touchend', () => {
      isDown = false;
      slider.classList.remove('active-drag');
    });

    slider.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    }, { passive: true });
  }

  // ====================
  // 4. PLACES FILTER & SEARCH LOGIC
  // ====================
  const filterButtonsContainer = document.querySelector('.filter-buttons');
  const placeCards = document.querySelectorAll('.places-grid .place-card');
  const placesSearchInput = document.querySelector('.places-search input');
  const noResultsMessage = document.getElementById('no-results-message');

  if (filterButtonsContainer && placeCards.length > 0 && placesSearchInput) {
    function filterAndSearchPlaces() {
      const activeFilterBtn = filterButtonsContainer.querySelector('.filter-btn.active');
      const rawFilter = activeFilterBtn && activeFilterBtn.dataset.filter ? activeFilterBtn.dataset.filter.toLowerCase().trim() : 'all';
      const filterValue = (rawFilter === '' || rawFilter === 'all') ? 'all' : rawFilter;

      const searchTerm = placesSearchInput.value.toLowerCase().trim();

      let visibleCardCount = 0;

      placeCards.forEach((card) => {
        const cardCategory = (card.dataset.category || '').toLowerCase();
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const country = card.querySelector('span')?.textContent.toLowerCase() || '';
        const cardText = `${title} ${country}`;

        const filterMatch = filterValue === 'all' || filterValue === cardCategory;
        const searchMatch = searchTerm === '' || cardText.includes(searchTerm);

        if (filterMatch && searchMatch) {
          card.classList.remove('place-card-hidden');
          card.classList.add('animate-in');
          visibleCardCount++;
        } else {
          card.classList.add('place-card-hidden');
          card.classList.remove('animate-in');
        }
      });

      if (noResultsMessage) {
        noResultsMessage.style.display = visibleCardCount === 0 ? 'block' : 'none';
      }
    }

    // Filter button clicks (delegated)
    filterButtonsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterButtonsContainer.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      filterAndSearchPlaces();
    });

    // Search input
    placesSearchInput.addEventListener('input', () => {
      filterAndSearchPlaces();
    });

    // Initial run
    filterAndSearchPlaces();
  }

  // ====================
  // 5. SHOW MORE / LESS (POPULAR SECTION)
  // ====================
  const showMoreBtn = document.getElementById('show-more') || document.getElementById('show-more-btn');
  const popularGrid = document.querySelector('.popular-grid');

  if (showMoreBtn && popularGrid) {
    // Set initial text based on collapsed state
    showMoreBtn.textContent = popularGrid.classList.contains('collapsed') ? 'Show More' : 'Show Less';

    showMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isCollapsed = popularGrid.classList.toggle('collapsed');

      showMoreBtn.textContent = isCollapsed ? 'Show More' : 'Show Less';
    });
  }

  // ====================
  // 6. PLACES SECTION EXPANSION ("VIEW MORE")
  // ====================
  const viewMoreBtn = document.querySelector('.places-view-more a, .places-view-more .btn');
  const placesGrid = document.querySelector('.places-grid');

  if (viewMoreBtn && placesGrid) {
    viewMoreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      placesGrid.classList.remove('collapsed');

      const parent = viewMoreBtn.closest('.places-view-more');
      if (parent) parent.classList.add('hidden');
    });
  }

  // ====================
  // 7. FAQ ACCORDION
  // ====================
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const questionBtn = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (!questionBtn || !answer) return;

      // Ensure accessible initial state
      questionBtn.setAttribute('aria-expanded', item.classList.contains('active') ? 'true' : 'false');
      if (!item.classList.contains('active')) answer.hidden = true;

      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all items
        faqItems.forEach((other) => {
          other.classList.remove('active');
          const q = other.querySelector('.faq-question');
          const a = other.querySelector('.faq-answer');
          if (q) q.setAttribute('aria-expanded', 'false');
          if (a) a.hidden = true;
        });

        // Toggle the clicked item
        if (!isActive) {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.hidden = false;
        }
      });
    });
  }

  // ====================
  // 8. CARD CLICK -> GO TO destination.html?place=...
  // ====================
  function handleCardClick(event) {
    // We expect cards are anchors; prevent any default navigation and navigate to destination page with place key
    event.preventDefault();

    const card = event.currentTarget;
    const titleEl = card.querySelector('h3');
    if (!titleEl) return;

    const placeName = titleEl.textContent.trim();
    if (!placeName) return;

    // Convert to a simple slug: lowercase, remove non-alphanumeric (keep spaces/hyphens), replace spaces with hyphens
    const placeKey = placeName
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    window.location.href = `destination.html?place=${encodeURIComponent(placeKey)}`;
  }

  // Attach to all popular and place cards that exist
  const allCards = document.querySelectorAll('.popular-card, .place-card');
  if (allCards.length > 0) {
    allCards.forEach((card) => {
      // If the element is an anchor, intercept click. If not, still handle.
      card.addEventListener('click', handleCardClick);
    });
  }
});
