export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Motif Grompol sangat samar
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <circle cx="20" cy="20" r="10" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1.5"/>
  <circle cx="40" cy="20" r="10" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1.5"/>
  <circle cx="30" cy="40" r="10" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1.5"/>
</svg>`;
export const encodedBatik = encodeURIComponent(svg.trim());
