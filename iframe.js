const listener = (event) => {
  if (event.data.action === 'set') {
    event.source.postMessage({
      value: localStorage.setItem(event.data.key, event.data.value),
      action: 'set'})
  } else if (event.data.action === 'get') {
    event.source.postMessage({
      value: window.localStorage.getItem(event.data.key),
      action: 'get'
    });
  } else if (event.data.action === 'remove') {
    event.source.postMessage({
      value: localStorage.removeItem(event.data.key),
      action: 'remove'});
  }
};
window.addEventListener("message", listener);

