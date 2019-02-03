/**
 * @namespace toggleSearch
 */
export default function () {

  const searchButtons = document.querySelectorAll('.widget__search__button');

  searchButtons.forEach(searchButton => {
    let target = searchButton.nextElementSibling;

    searchButton.onclick = () => {
        let expanded = searchButton.getAttribute('aria-expand') == 'true' || false;

        searchButton.setAttribute('aria-expand', !expanded);
        target.classList.toggle('widget__search--visible');
        target.hidden = expanded;
        document.getElementById('search-input').focus();
    }
  });

};