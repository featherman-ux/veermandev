// src/components/MobileMenu.ts
export function initMobileMenu() {
  if (typeof document === 'undefined') return; // avoid SSR issues

  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isExpanded = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuButton.setAttribute('aria-expanded', String(!isExpanded));
    });
  }

  // Theme toggler (desktop + mobile)
  const togglers = [
    document.getElementById('theme-toggler-desktop'),
    document.getElementById('theme-toggler-mobile'),
  ];

  togglers.forEach((btn) => {
    btn?.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });
}

// Automatically initialize when this module is imported on the client
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initMobileMenu);
}