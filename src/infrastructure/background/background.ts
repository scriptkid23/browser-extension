// Background script entry point
console.log('Background script loaded');

// Initialize background services
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details);
});

chrome.runtime.onStartup.addListener(() => {
  console.log('Extension startup');
});
