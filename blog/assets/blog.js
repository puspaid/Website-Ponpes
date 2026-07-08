// Hamburger
const ham = document.getElementById('hamburger'), mob = document.getElementById('mobile-nav');
if (ham && mob) {
  ham.addEventListener('click', () => mob.classList.toggle('open'));
  document.addEventListener('click', e => { if (!ham.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open'); });
}
function closeMobileNav(){ mob.classList.remove('open'); }

// Scroll animations
const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.12, rootMargin:'0px 0px -40px 0px' });
document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));

// WA widget
function openWA(){ window.open('https://wa.me/6285706464267?text=Assalamu%27alaikum%2C%20saya%20ingin%20menanyakan%20informasi%20pendaftaran%20Pondok%20Pesantren%20Darul%20Musthofa','_blank'); }
setTimeout(() => { const b = document.getElementById('wa-bubble'); if(b){ b.classList.add('show'); setTimeout(() => b.classList.remove('show'), 7000); } }, 4000);
