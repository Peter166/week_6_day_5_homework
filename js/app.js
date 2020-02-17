document.addEventListener('DOMContentLoaded', () =>{
  const newItemForm = document.querySelector('#form');
 newItemForm.addEventListener('submit', handleNewItemFormSubmit);


 const deleteAllButton = document.querySelector('#delete-all');
 deleteAllButton.addEventListener('click', handleDeleteAllClick);

})




//

const handleNewItemFormSubmit = function (event){
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#movies-list');
  readingList.appendChild(readingListItem)
  event.target.reset();
}

const createReadingListItem = function(form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('movies-list-item');

  const title = document.createElement('h7');
  title.textContent = form.title.value;
  readingListItem.appendChild(title);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  readingListItem.appendChild(genre);

  const length = document.createElement('number');
  length.textContent = form.length.value;
  readingListItem.appendChild(length);

  const watched = document.createElement('p');
  watched.textContent = form.watched.value;
  readingListItem.appendChild(watched);

  return readingListItem;
}

const handleDeleteAllClick = function(event) {
  const readingList = document.querySelector('#movies-list');
  readingList.innerHTML = '';
}
