
window.onload = () => {    
  const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const listWrapper  =document.querySelector('ul');

  if(listWrapper)
  numberList.forEach((item) => {
    listWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
  })
};

searchNsort = (type = "sort") => {
  const ul = document.querySelector("ul");
  const temp = ul?.cloneNode(true);
  
  if (type === "shuffle") {
    i = temp.children.length + 1;
    for (let i = temp.children.length; i >= 0; i--) {
      temp.appendChild(temp.children[Math.random() * i | 0]);
    }
  }
  if (type === "sort") {
    
    const items = temp?.childNodes;
    const itemsArr = [];
    
    for (const i in items) {
      if (items[i].nodeType) { 
        itemsArr.push(items[i]);
      }
    }
    itemsArr.sort((a, b) => (a.innerHTML == b.innerHTML
      ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1))
    );
    for (let i = 0; i < itemsArr.length; ++i) {
      temp.appendChild(itemsArr[i]);
    }
  }
  ul?.parentNode?.replaceChild(temp, ul);
  return;
}

