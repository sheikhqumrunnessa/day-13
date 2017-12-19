function createNamePriceElement() {
    var newNameElement=document.createElement('input');
    var newPriceElement=document.createElement('input');
    newNameElement.innerHTML = "name";
    newPriceElement.innerHTML = "price";
    document.getElementById('div').appendChild(newNameElement);
    document.getElementById('div').appendChild(newPriceElement);
    }
    document.getElementById('btn').onclick=function () {
    createNamePriceElement();
    }
