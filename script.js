const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent form submission
  const searchTerm = input.value.trim();
  if (searchTerm !== '') {
    // perform search here
    alert(`You searched for: ${searchTerm}`);
    input.value = ''; // clear input field
  }
});
