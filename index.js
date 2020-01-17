const promise1 = new Promise((resolve, reject) => {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      resolve(this.responseText);
    }
  });
  xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem");
  xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "d556ed49bamsh11f375fa68a80fbp14d9d9jsn5d442ccbe6e0");

  xhr.send(data);
});

const promise2 = new Promise((resolve, reject) => {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      resolve(this.responseText);
    }
  });

  xhr.open("GET", "https://sun.p.rapidapi.com/api/sun/?latitude=38.0000&longitude=-97.0000&date=2016-06-01");
  xhr.setRequestHeader("x-rapidapi-host", "sun.p.rapidapi.com");
  xhr.setRequestHeader("x-rapidapi-key", "d556ed49bamsh11f375fa68a80fbp14d9d9jsn5d442ccbe6e0");

  xhr.send(data);
});

Promise.all([promise1, promise2])
  .then(() => console.log('Oба ответа получены'));
