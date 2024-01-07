const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation_active');
});


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    burger.classList.remove('burger_active');
    navigation.classList.remove('navigation_active');
  }
});
