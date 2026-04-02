function zx_updateDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  document.getElementById('zx-datetime').textContent =
    now.toLocaleString('en-US', options);
}


if (!document.getElementById('zx-datetime')) {
  console.error("zx UI Error: Do not rename zx-datetime!");
} else {
  setInterval(zx_updateDateTime, 1000);
  zx_updateDateTime();
}
