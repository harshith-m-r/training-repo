var arr = [];
var categoriesArray = [];


function serviceClient(URL, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', URL);
  xhr.send();
  xhr.onload = function () {
    callback(JSON.parse(xhr.response));
  };
}

function displayCategories(categories) {
  var container = document.querySelector('.navlinks');
  categories.forEach((category) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'navlinks');
    elem.textContent = category['category_name'];
    elem.setAttribute('id', category['id']);
    elem.setAttribute('onclick', '_onclick(id)');
    container.appendChild(elem);
    categoriesArray.push(category['category_name']);
    console.log(categoriesArray);
  });
}



function getCategories() {
  let categories_url = 'https://syntaxdb.com/api/v1/languages/javascript/categories';
  serviceClient(categories_url, displayCategories);

}


function _onclick(concept_id) {
  concept_url = `https://syntaxdb.com/api/v1/languages/javascript/categories/${concept_id}/concepts`;
  serviceClient(concept_url, displayConcepts);
  serviceClient(concept_url, saveResponseData);
  //document.getElementById('removedata').addEventListener('click', removeData());
}

function removeData() {
  document.getElementsByClassName('.content').innerHTML = "";
}

function displayConcepts(concepts) {
  var container = document.querySelector('.concepts');
  let count = 0;
  concepts.forEach((concept) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'conceptDisplay');
    elem.setAttribute('id', count);
    //elem.setAttribute('onclick', 'removeData()')
    elem.addEventListener('click', displayContent.bind({ 'id': count }))
    elem.textContent = concept['concept_name'];
    container.appendChild(elem);
    count++;
  });
}

function saveResponseData(responseData) {
  arr = [...responseData];
  console.log(arr);

}

function displayContent() {
  console.log(this.id);
  console.log(arr[this.id]);
  showContent(arr[this.id]);
}

/*let contentKeys = {
  concept_search, description, syntax, notes, example
};*/

function showContent(contentKeys) {
  var container = document.querySelector('.content');
  let keyArray = ['concept_search', "description", 'syntax', 'notes', 'example'];
  for (let i = 0; i < keyArray.length; i++) {
    var container = document.querySelector('.content');
    var elem = document.createElement('div');
    elem.setAttribute('class', 'contentDisplay');
    elem.setAttribute('onclick', 'removeData()');
    //elem.addEventListener('click', displayContent.bind({ 'id': count }))
    elem.textContent = contentKeys[keyArray[i]];
    container.appendChild(elem);
  }
  /*contentkeys.forEach((contentKey) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'contentDisplay');
    //elem.addEventListener('click', displayContent.bind({ 'id': count }))
    elem.textContent = contentKey;
    container.appendChild(elem);
  })*/
}

getCategories();




/*
function displayContent(concepts) {
  var container = document.querySelector('.contentDisplay');
  concepts.forEach((concept) => {
    var elem = document.createElement('div');
    elem.setAttribute('class', 'content');
    elem.textContent = `${concept['concept_name']}`;
    container.appendChild(elem);
  });
}*/
