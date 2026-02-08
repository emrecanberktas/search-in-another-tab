(function() {
  'use strict';

  let searchButton = null;
  let selectedText = '';
  let selectionTimeout = null;

  function createSearchButton() {
    if (searchButton) {
      return searchButton;
    }

    const button = document.createElement('div');
    button.id = 'search-extension-button';
    button.className = 'search-ext-btn';
    button.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <span>Search</span>
    `;
    
    button.addEventListener('click', handleSearchClick);
    
    button.addEventListener('mousedown', (e) => {
      e.preventDefault();
      e.stopPropagation();
    });

    document.body.appendChild(button);
    searchButton = button;
    
    return button;
  }

  function handleSearchClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (selectedText.trim()) {
      const searchQuery = encodeURIComponent(selectedText.trim());
      const searchUrl = `https://www.google.com/search?q=${searchQuery}`;
      window.open(searchUrl, '_blank');
    }
    
    hideSearchButton();
  }

  function showSearchButton(x, y, selectionRect) {
    const button = createSearchButton();
    
    button.style.setProperty('display', 'flex', 'important');
    button.style.visibility = 'hidden';
    
    const buttonRect = button.getBoundingClientRect();
    const buttonHeight = buttonRect.height;
    const buttonWidth = buttonRect.width;
    
    const viewportWidth = window.innerWidth;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    
    const selectionTop = selectionRect.top + scrollY;
    const selectionBottom = selectionRect.bottom + scrollY;
    const selectionLeft = selectionRect.left + scrollX;
    const selectionWidth = selectionRect.width;
    
    let top = selectionTop - buttonHeight - 8;
    let left = selectionLeft + (selectionWidth / 2) - (buttonWidth / 2);
    
    if (selectionRect.top < buttonHeight + 20) {
      top = selectionBottom + 8;
    }
    
    if (left < scrollX + 10) {
      left = scrollX + 10;
    } else if (left + buttonWidth > scrollX + viewportWidth - 10) {
      left = scrollX + viewportWidth - buttonWidth - 10;
    }
    
    button.style.left = `${left}px`;
    button.style.top = `${top}px`;
    button.style.visibility = 'visible';
  }

  function hideSearchButton() {
    if (searchButton) {
      searchButton.style.setProperty('display', 'none', 'important');
    }
    selectedText = '';
  }

  function handleTextSelection() {
    if (selectionTimeout) {
      clearTimeout(selectionTimeout);
    }

    selectionTimeout = setTimeout(() => {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length > 0) {
        selectedText = text;
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        if (rect.width > 0 && rect.height > 0) {
          showSearchButton(rect.left, rect.top, rect);
        }
      } else {
        hideSearchButton();
      }
    }, 150);
  }

  function handleDocumentClick(e) {
    if (searchButton && !searchButton.contains(e.target)) {
      const selection = window.getSelection();
      const text = selection.toString().trim();
      
      if (text.length === 0) {
        hideSearchButton();
      }
    }
  }

  function handleScroll() {
    if (searchButton && searchButton.style.display !== 'none') {
      hideSearchButton();
    }
  }

  function initializeExtension() {
    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('selectionchange', () => {
      const selection = window.getSelection();
      if (selection.toString().trim().length === 0) {
        hideSearchButton();
      }
    });
    
    document.addEventListener('mousedown', handleDocumentClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    document.addEventListener('keyup', (e) => {
      if (e.shiftKey || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || 
          e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        handleTextSelection();
      }
    });
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        hideSearchButton();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtension);
  } else {
    initializeExtension();
  }

})();
