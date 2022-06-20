(function () {
    var myBlog = [
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      },
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      },
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      },
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      },
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      },
      {
        title: "Beautiful Kitchen",
        text:
          "We turn you on to pro lighting startegles to highlight features create intrigue.",
        image: "images/kitchen.jpg",
        link: "#"
      }
    ];
    var blog = document.getElementById("myListBlog");
    var innerHTML = "";
    for (let i = 0; i < myBlog.length; i++) {
      let data = myBlog[i];
      innerHTML += `
    <li class="list-item text-center flex flex-center justify-center basis-1/3 px-10 hover:-translate-1 hover:scale-105 delay-100 duration-300 ease-in-out cursor-pointer">
        <div class="thumb">
            <a href="${data.image}" class="light-box">
                <img class="info_img  my-4 items-center" src="${data.image}" alt="">
            </a>
            </div>
                <h3 class="head_color text-2xl text-hcl pb-4 before">${data.text}</h3>
                <p class="pb-4">${data.text}</p>
            <div class="colored_button_div border-solid border-2 border-hcl px-4 w-full rounded-3xl hover:bg-hcl hover:cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-white hover:no-underline">
                <a href="${data.link}" class="colored_button ">View Home</a>
            </div>
    </li>
      `;
    }
    blog.innerHTML = innerHTML;
  
    $("#myListBlog").magnificPopup({
      delegate: "a", // child items selector, by clicking on it popup will open
      type: "image"
      // other options
    });
  })();
  