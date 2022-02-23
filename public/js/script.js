import cities from '../data/cities.js';

window.process = {
  env: {
    NODE_ENV: 'production',
  },
};
const searchForm = document.querySelector('#search-form');
const resultsContainer = document.querySelector('.result-container');
const loadingElement = document.querySelector('.loading-element');
const cityInput = document.querySelector('datalist');

//Add cities to datalist
cities.sort().forEach(city => {
  cityInput.innerHTML += `<option value="${city}">`;
});
// Configure form submission
function configureFormListener() {
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    resultsContainer.innerHTML = '';
    // Get the search and location inputs
    const {search, location} = e.target;
    startLoading();

    console.log(process.env.NODE_ENV);
    // Make a request to the API
    fetch(
      process.env.NODE_ENV === 'development'
        ? `http://127.0.0.1:5000/?search=${
            search.value
          }&location=${location.value.toLowerCase()}&country=gb`
        : `/?search=${search.value}&location=${location.value.toLowerCase()}`
    )
      .then(response => response.json())
      .then(({results}) => {
        stopLoading();

        //No results handler
        if (results.length === 0) {
          return (resultsContainer.innerHTML = '<h2 class="error">No results found</h2>');
        }
        // Render results
        return results.map(job => jobTemplate(job)).join('');
      })
      .then(jobs => (resultsContainer.innerHTML = jobs))
      .catch(error => {
        stopLoading();
        console.log(error);
      });
  });
}

// Render a single job
function jobTemplate(job) {
  return `
        <div class="card">
        <div class="card-body">
        <h2 class="job-title">${job.title}</h2>
        <h3 class="job-company">${job.company.display_name}</h3>
        <p class="job-location">${job.location.display_name}</p>
        <p class="job-description">${job.description}</p>
        <p class="job-salary">Salary: $${job.salary_max}</p>
        <a href="${job.redirect_url}" class="btn btn-primary" target="_blank">Apply</a>
        </div>
        </div>
    `;
}

// Start loading animation
function startLoading() {
  loadingElement.classList.add('loading');
}

// Stop loading animation

function stopLoading() {
  loadingElement.classList.remove('loading');
}

configureFormListener();
