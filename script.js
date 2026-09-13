// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Duplicate marquee content for seamless loop
  document.querySelectorAll('.marquee-track').forEach(track => {
    track.innerHTML += track.innerHTML;
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove('open');
        a.style.maxHeight = null;
      } else {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  // Billing toggle (pricing page)
  const monthlyBtn = document.getElementById('billing-monthly');
  const yearlyBtn = document.getElementById('billing-yearly');
  const priceEls = document.querySelectorAll('[data-monthly]');

  function setBilling(mode) {
    priceEls.forEach(el => {
      el.textContent = mode === 'yearly' ? el.dataset.yearly : el.dataset.monthly;
    });
    document.querySelectorAll('[data-period]').forEach(el => {
      el.textContent = mode === 'yearly' ? '/mo, billed yearly' : '/month';
    });
    if (monthlyBtn && yearlyBtn) {
      monthlyBtn.classList.toggle('active', mode === 'monthly');
      yearlyBtn.classList.toggle('active', mode === 'yearly');
    }
  }

  if (monthlyBtn && yearlyBtn) {
    monthlyBtn.addEventListener('click', () => setBilling('monthly'));
    yearlyBtn.addEventListener('click', () => setBilling('yearly'));
  }
});
