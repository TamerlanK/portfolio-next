export function scrollToElement(
  id: string,
  block: ScrollLogicalPosition = "start",
) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
}

export function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
