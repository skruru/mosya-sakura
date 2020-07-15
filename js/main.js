'use script'
{
  document.querySelectorAll('.gnav_list').forEach(list => {
    list.addEventListener('mouseover', () => {
      list.classList.add('show');
    }, false);
    list.addEventListener('mouseleave', () => {
      list.classList.remove('show');
    }, false);
  });
}