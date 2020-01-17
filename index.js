const search = new URLSearchParams("size=M&color=1&color=2&manufacturer=aaa&manufacturer=eee");
const size = search.getAll('size');
const color = search.getAll('color');
const manufacturer = search.getAll('manufacturer');

const radio = document.getElementsByName('size');
const checkbox = document.getElementsByName('color');
const option = document.getElementsByTagName('option');
const out = document.getElementById('out');
for (let i = 0; i < radio.length; i++) {
  for (j = 0; j < size.length; j++) {
    if (radio[i].value === size[j]) {
      radio[i].checked = true
    }
  }
}
for (let i = 0; i < checkbox.length; i++) {
  for (j = 0; j < color.length; j++) {
    if (checkbox[i].value === color[j]) {
      checkbox[i].checked = true
    }
  }
}
for (let i = 0; i < option.length; i++) {
  for (j = 0; j < manufacturer.length; j++) {
    if (option[i].value === manufacturer[j]) {
      option[i].selected = true
    }
  }
}

addEventListener("input", (event) => {
  if(!event.target.hasAttribute('name')) return;
  const url = `http://любой_домен/filter?${new URLSearchParams(new FormData(event.target.form))}`;
  out.innerHTML = url;
  console.log(url);
});
