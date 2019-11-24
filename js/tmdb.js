const key = '1cc7a027c10c81d9d763cea02fd42f7d';
const endpoint_url = 'https://api.themoviedb.org/3';

//Blok kode untuk melakukan request API

function getListMovie(services, sectiontitle) {
  fetch (endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
    // objek/array JavaScipt dari response. json() masuk lewat data.
    // Menyusun komponen card movie secara dinamis
    var moviesHTML = "";
    data.results.forEach(function(movie) {
      moviesHTML += `
      <div class="col m3 s6">
      <div class="card">
      <a href="./movie.html?id=${movie.id}">
      <div class="card-image waves-effect waves-block waves-light">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
      </div>
      </a>
      <div class="card-content text-center">
      <strong>${movie.title}</strong>
        </div>
      </div>
    </div>
  `;

});
  function getMovie(movie_id) {

    // silahkan menambahkan kode untuk
    // menampilkan detail movie

  }
    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}
