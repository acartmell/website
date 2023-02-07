export function shouldUpdateScroll() {
  return false;
}

export function onInitialClientRender() {
  window.scrollTo(0, 0);
}
