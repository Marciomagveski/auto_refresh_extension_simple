const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const intervalInput = document.getElementById("interval");

startBtn.addEventListener("click", async () => {
  const interval = parseInt(intervalInput.value) * 1000;
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.runtime.sendMessage({
    action: "start-refresh",
    interval,
    tabId: tab.id
  });

  // Muda cor para ativo
  startBtn.classList.remove("inactive");
  startBtn.classList.add("active");
});

stopBtn.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.runtime.sendMessage({
    action: "stop-refresh",
    tabId: tab.id
  });

  // Muda cor para inativo
  startBtn.classList.remove("active");
  startBtn.classList.add("inactive");
});
