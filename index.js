document.getElementById('spacing').addEventListener('change', (e) => {
  document.documentElement.style.setProperty('--spacing', e.target.value + 'px');
})

document.getElementById('spacing').addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--spacing', e.target.value + 'px');
})

document.getElementById('blur').addEventListener('change', (e) => {
  document.documentElement.style.setProperty('--blur', e.target.value + "px");
})

document.getElementById('blur').addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--blur', e.target.value + "px");
})

document.getElementById('color').addEventListener('change', (e) => {
  document.documentElement.style.setProperty('--base-color', e.target.value + "");
})
