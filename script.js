function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");
}

function toggleDescription() {
  const desc = document.getElementById("desc-text");
  const btn = document.getElementById("toggle-btn");

  if (desc.classList.contains("collapsed")) {
    desc.classList.remove("collapsed");
    btn.textContent = "Mostrar menos";
  } else {
    desc.classList.add("collapsed");
    btn.textContent = "Mostrar mais";
  }
}
