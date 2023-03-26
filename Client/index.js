const imageInput = document.getElementById("inputimg");
const imgbox = document.getElementById("previmg");

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    imgbox.src = url;
  }
});

function readText(event) {
  event.preventDefault();
  const formData = new FormData();
  const file = imageInput.files[0];
  formData.append("image", file);
  console.log("hello");
  var requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };

  fetch("http://localhost:3035/readpan", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
