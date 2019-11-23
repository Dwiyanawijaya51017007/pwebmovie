//script untuk menangani proses response dari proses request API

function status (response) {
  if (response.status !==200) {
    console.log("Error : " + response.status);
    // method reject () akan membuat blok cath terpanggil
    return Promise.reject(new Error (response.statusText));
  }else {
    // mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}
// Blok kode untuk meng-parsing json menjadi array JavaScipt
function json(response) {
  return response.json();
}
// Blok kode untul meng-handle kesalahan di blok catch
function error (error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + console.error);
}
