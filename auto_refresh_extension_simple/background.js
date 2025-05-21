chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start-refresh") {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      func: (interval) => {
        localStorage.setItem("autoRefreshInterval", interval);
        if (window.autoRefreshInterval) clearInterval(window.autoRefreshInterval);
        window.autoRefreshInterval = setInterval(() => location.reload(), interval);
      },
      args: [message.interval]
    });
  }

  if (message.action === "stop-refresh") {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      func: () => {
        clearInterval(window.autoRefreshInterval);
        localStorage.removeItem("autoRefreshInterval");
      }
    });
  }
});
