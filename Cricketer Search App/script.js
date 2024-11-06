document.querySelector("#input");
var data = [
  {
    name: "Virat",
    src: "https://static.indiatvnews.com/ins-web/images/kohli-profile-1540274232.jpg",
  },
  {
    name: "MS Dhoni",
    src: "https://nimionlineadmission.in/blendedlearning/assets/wp-content/uploads/2024/01/cricketers-of-india_d7867859d.jpg",
  },
  {
    name: "Rohit",
    src: "https://images.mykhel.com/webp/images/cricket/players/6/3516.jpg",
  },
  {
    name: "Rahul",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcG18gVGBEJ9arZLjf5UVBbmzf8ihJp2gceewDM4301TMiMXN_FTGeKLGh-Y1eKDHjVDk&usqp=CAU",
  },
  {
    name: "Hardik",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6QcgmZ2EXynilSTUXWplvVb3Ym60j5XjhA&s",
  },
  {
    name: "M Shami",
    src: "https://c.ndtvimg.com/2024-10/chv611v8_shami-_640x480_16_October_24.jpg",
  },
  {
    name: "S Gill",
    src: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/shubman-gill.png",
  },
  {
    name: "Jadeja",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasX2tR8uKsPhxx8MflwliVEWJDqCihkZk0g&s",
  },
  {
    name: "Bhuvaneshwar",
    src: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/386300/386325.5.png",
  },
  {
    name: "Arshdeep",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8kJUg8IjZ1Zq9VKSeUioTGXTbdaEnJq6RQ&s",
  },
  {
    name: "M Siraj",
    src: "https://api.bdcrictime.com/Profile/mohammed-siraj-13_10_2023.jpg",
  },
];

var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
<div class="img">
  <img src="${elem.src}"
    alt="">
</div>
<h4>${elem.name}</h4>
</div>`;
});

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.toLowerCase().startsWith(input.value.toLowerCase());
  });

  var newUsers = "";
  matching.forEach(function (elem) {
    newUsers += `<div class="person">
        <div class="img">
          <img src="${elem.src}"
            alt="">
        </div>
        <h4>${elem.name}</h4>
        </div>`;
  });
  document.querySelector(".people").innerHTML = newUsers;
});
