async function fetchMessage() {
  const res = await fetch('/api/message');
  const data = await res.json();
  document.getElementById('message').innerText = data.message;
}

fetchMessage();

