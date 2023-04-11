import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _meassage = '';

  _generateMarkup() {
    return this._data.map(bookmark => previewView.render(bookmark)).join('');
  }
}

export default new BookmarksView();
