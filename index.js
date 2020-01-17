window.onload = () => {
  const iframe = document.getElementById('iframe');
  const body = iframe.contentDocument.getElementsByTagName('body')[0];
  const h1 = iframe.contentDocument.getElementsByTagName('h1')[0];

  let localStorageObj = {
    read: (key, callback) => {
      iframe.contentWindow.postMessage({action: 'get', key}, "*");
      const listener = (event) => {
        if (event.data.action === 'get') {
          callback(console.log(`value: ${event.data.value}`))
        }
      };
      window.addEventListener("message", listener);
    },
    write: (key, value, callback) => {
      iframe.contentWindow.postMessage({action: 'set', key, value}, "*");
      const listener = (event) => {
        if (event.data.action === 'set') {
          callback(console.log('written'));
        }
      };
      window.addEventListener("message", listener);
    },
    remove: (key, callback) => {
      iframe.contentWindow.postMessage({action: 'remove', key}, "*");
      const listener = (event) => {
        if (event.data.action === 'remove') {
          callback(console.log('removed'));
        }
      };
      window.addEventListener("message", listener);
    }
  };
  localStorageObj.write('h1Inner', h1.innerHTML, () => {
    console.log('callback, write')
  });
  localStorageObj.read('h1Inner', () => {
    console.log('callback, read')
  });
  localStorageObj.remove('h1Inner', () => {
    console.log('callback, remove')
  });
  /* localStorageObj.write('bodyChildLength', body.childNodes.length, () => {
     console.log('callback, write')
   });*/

  /* localStorageObj.read('bodyChildLength', () => {
     console.log('callback, read')
   });*/
  /* localStorageObj.remove('bodyChildLength', () => {
   console.log('callback, remove')
 });*/
};

