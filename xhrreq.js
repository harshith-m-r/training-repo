let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://syntaxdb.com/api/v1/languages/javascript/categories');
xhr.send();
xhr.onload = function () {
    addItemsToDOM(JSON.parse(xhr.response));
    addItemsToDOM2(JSON.parse(xhr.response));
    addItemsToDOM3(JSON.parse(xhr.response));
};

function addItemsToDOM(categories) {
  var container = document.querySelector('.categories');
  categories.forEach((category) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'test');
    elem.textContent = category['category_name'];
    container.appendChild(elem);
  });
}

function addItemsToDOM2(categories2) {
    var container2 = document.querySelector('.categories2');
    categories2.forEach((category2) => {
      var elem2 = document.createElement('div');
      elem2.setAttribute('class', 'test');
      elem2.setAttribute('style', 'display="none"');
      elem2.textContent = category2['category_search'];
      container2.appendChild(elem2);
    });
}

function addItemsToDOM3(categories3) {
    var container3 = document.querySelector('.categories3');
    categories3.forEach((category3) => {
      var elem3 = document.createElement('div');
      elem3.setAttribute('class', 'test');
      elem3.setAttribute('style', 'display="none"');
      elem3.textContent = category3['language_permalink'];
      container3.appendChild(elem3);
    });
  }
