chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason == 'install') {
    console.log('This is a first install!');
    chrome.tabs.create({
      url: 'http://webap0.ncue.edu.tw/deanv2/other/ob010#firstUse'
    });
  } else if (details.reason == 'update') {}
});
