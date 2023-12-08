var imageSources = [
  "/comeback/project gal/images/beiheng-guo-IAVVv6z3D6g-unsplash.jpg",
  "/comeback/project gal/images/colin-horn-fR9U2S31Exs-unsplash.jpg",
  "/comeback/project gal/images/hrvoje_photography-4TVbbaNAw9Q-unsplash.jpg",
  "/comeback/project gal/images/josh-gordon-pR166OP_l6g-unsplash.jpg",
  "/comeback/project gal/images/luisa-ji-SpKT27bNSOQ-unsplash.jpg",
  "/comeback/project gal/images/pawel-czerwinski-yn97LNy0bao-unsplash.jpg",
];

var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("#image img");

  images.forEach(function (x, index) {
    console.log(x);
    x.addEventListener("click", function () {
      currentIndex = index;
      console.log(index);
      display();
    });
  });
});

function display() {
  var images = document.querySelectorAll("#image img");
  var initialDisplay = [];

  for (var i = 0; i < images.length; i++) {
    initialDisplay.push(images[i].style.display);
    images[i].style.display = "none";
  }

  var maindiv = document.getElementById("image");
  var div = document.createElement("div");
  var btn = document.createElement("button");
  var rightarr = document.createElement("button");
  var leftarr = document.createElement("button");

  leftarr.textContent = "<";
  rightarr.textContent = ">";
  rightarr.id = "rightButton";
  leftarr.id = "leftButton";
  btn.id = "xbtn";
  btn.textContent = "X";
  div.id = "divimg";
  div.append(btn);
  div.append(rightarr);
  div.append(leftarr);
  maindiv.append(div);

  var img = document.createElement("img");
  img.src = imageSources[currentIndex];
  img.alt = "";
  div.appendChild(img);

  rightarr.onclick = function () {
    currentIndex = (currentIndex + 1) % imageSources.length;
    img.src = imageSources[currentIndex];
  };

  leftarr.onclick = function () {
    currentIndex =
      (currentIndex - 1 + imageSources.length) % imageSources.length;
    img.src = imageSources[currentIndex];
  };

  btn.onclick = function () {
    div.remove();
    btn.remove();
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = initialDisplay[i];
    }
  };
}
