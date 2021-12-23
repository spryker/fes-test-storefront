if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto';
    });
    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual';
    });
  }
}
export default function (to, from, savedPosition) {
  let position;
  position = savedPosition || { x: 0, y: 0 };

  const nuxt = window.$nuxt;

  return new Promise((resolve) => {
    nuxt.$once('triggerScroll', () => {
      resolve(position);
    });
    nuxt.$once('customTriggerScroll', () => {
      window.scrollTo(position.x, position.y);
    });
  });
}
