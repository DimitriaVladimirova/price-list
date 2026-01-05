(function () {
  const el = document.getElementById('priceListDate');
  if (!el) return;

  const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC'];

  const now = new Date();
  el.textContent = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
})();