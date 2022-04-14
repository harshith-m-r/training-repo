function serviceClient(URL, callFunction) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URL);
    xhr.send();
    xhr.onload = function () {
        callFunction(JSON.parse(xhr.response));
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
    });
  }

  
function getCategories() {
    let categories_url = 'https://syntaxdb.com/api/v1/languages/javascript/categories';
    serviceClient(categories_url, displayCategories);

}


function _onclick(concept_id){
    concept_url = `https://syntaxdb.com/api/v1/languages/javascript/categories/${concept_id}/concepts`;
    serviceClient(concept_url, displayConcepts);
    document.getElementById('removedata').addEventListener('click', removeData());
    
} 

function removeData(){
   document.getElementById('removedata').innerHTML = " ";
}

function displayConcepts(concepts) {
    var container = document.querySelector('.concepts');
    concepts.forEach((concept) => {
      var elem = document.createElement('li');
      elem.setAttribute('class', 'conceptDisplay');
      //elem.setAttribute('id', 'removedata')
      //elem.setAttribute('onmouseout', 'removeData()')
      elem.setAttribute('onclick', 'removeData()');
      elem.textContent = concept['concept_name'];
      container.appendChild(elem);
    });
}


getCategories();