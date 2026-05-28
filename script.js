function scrollToContact() {
  document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '¡Pedido enviado! 🎉';
  btn.style.background = '#4a3426';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Enviar pedido 🍰';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 3000);
}
