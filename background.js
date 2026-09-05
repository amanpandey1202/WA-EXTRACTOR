chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    contacts: [],
    duplicateCount: 0,
    isRunning: false,
    statusText: "Idle",
    isPaid: false,
    licenseKey: ""
  });
});

// Message handler for popup communication (start/stop scraping)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "STATUS_UPDATE") {
    chrome.storage.local.set({
      isRunning: message.isRunning,
      statusText: message.statusText
    });
  }
  sendResponse({ ok: true });
});
