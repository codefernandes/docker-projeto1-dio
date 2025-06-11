window.onload = () => {
  const agora = new Date();
  const horaFormatada = agora.toLocaleTimeString();
  document.getElementById('hora').textContent = `Hora atual: ${horaFormatada}`;
};
