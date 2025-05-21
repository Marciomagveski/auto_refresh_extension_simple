const saved = localStorage.getItem("autoRefreshInterval");

function activateAutoRefresh(interval) {
  if (!window.autoRefreshInterval) {
    window.autoRefreshInterval = setInterval(() => location.reload(), interval);
  }
}

if (saved) {
  const interval = parseInt(saved);
  activateAutoRefresh(interval);
}
