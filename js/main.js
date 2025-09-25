// header mune buttom
let menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  document.querySelector(".submenu").classList.toggle("menubtn");
});

let planets = [
  {
    img: "./img/products/pic1.png",
    name: "AUCUBA",
    discription: "A brief description of this plant, etc",
    price: 20.99,
  },
  {
    img: "./img/products/pic2.png",
    name: "DRACAENA",
    discription: "A brief description of this plant, etc",
    price: 19.99,
  },
  {
    img: "./img/products/pic3.png",
    name: "AGLAONEMA SILVER",
    discription: "A brief description of this plant, etc",
    price: 14.99,
  },
  {
    img: "./img/products/pic4.png",
    name: "CALLA",
    discription: "A brief description of this plant, etc",
    price: 11.99,
  },
  {
    img: "./img/products/pic5.png",
    name: "ASPLENIUM",
    discription: "A brief description of this plant, etc",
    price: 13.99,
  },
  {
    img: "./img/products/pic6.png",
    name: "CORDILLINA KIWI",
    discription: "A brief description of this plant, etc",
    price: 19.99,
  },
  {
    img: "./img/products/pic7.png",
    name: "KALATEA ZEBRINA",
    discription: "A brief description of this plant, etc",
    price: 20.99,
  },
  {
    img: "./img/products/pic8.png",
    name: "FATSIA JAPONICA",
    discription: "A brief description of this plant, etc",
    price: 15.99,
  },
  {
    img: "./img/products/pic9.png",
    name: "CALATHEA",
    discription: "A brief description of this plant, etc",
    price: 15.99,
  },
];

let planet = document.querySelector("div.products");
planet.innerHTML = "";
planets.forEach((elem) => {
  planet.innerHTML += `
  <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
    <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
    <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
    <span>${elem.name}</span>
    <p class="text-center text-sm">${elem.discription}</p>
    <span class="font-[700]">${elem.price} $</span>
    <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
    </div>
  </div>
  `;
});

// buttoms filter
let filter1 = document.querySelector(".btnlowest");
let filter2 = document.querySelector(".btnhighest");
let filter3 = document.querySelector(".btnsearch");
let filter4 = document.querySelector(".btnmore");
let filter5 = document.querySelector(".btnless");

// The lowest price products
filter1.addEventListener("click", function () {
  filter2.classList.remove("borderfiler");
  filter3.classList.remove("borderfiler");
  filter4.classList.remove("borderfiler");
  filter5.classList.remove("borderfiler");
  this.classList.add("borderfiler");
  document.querySelector(".btnlowest").classList.remove("borderbuttom");
  document.querySelector(".btnhighest").classList.add("borderbuttom");
  document.querySelector(".btnsearch").classList.add("borderbuttom");
  document.querySelector(".btnmore").classList.add("borderbuttom");
  document.querySelector(".btnless").classList.add("borderbuttom");

  let lowest = planets.sort((a, b) => a.price - b.price);
  planet.innerHTML = "";
  lowest.forEach((elem) => {
    planet.innerHTML += `
    <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
      <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
      <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
      <span>${elem.name}</span>
      <p class="text-center text-sm">${elem.discription}</p>
      <span class="font-[700]">${elem.price} $</span>
      <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
      </div>
    </div>
    `;
  });
});

// The highest price products
filter2.addEventListener("click", function () {
  filter1.classList.remove("borderfiler");
  filter3.classList.remove("borderfiler");
  filter4.classList.remove("borderfiler");
  filter5.classList.remove("borderfiler");
  this.classList.add("borderfiler");
  document.querySelector(".btnlowest").classList.remove("borderbuttom");
  document.querySelector(".btnhighest").classList.remove("borderbuttom");
  document.querySelector(".btnsearch").classList.add("borderbuttom");
  document.querySelector(".btnmore").classList.add("borderbuttom");
  document.querySelector(".btnless").classList.add("borderbuttom");
  let highest = planets.sort((a, b) => a.price - b.price).reverse();
  planet.innerHTML = "";
  highest.forEach((elem) => {
    planet.innerHTML += `
    <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
      <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
      <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
      <span>${elem.name}</span>
      <p class="text-center text-sm">${elem.discription}</p>
      <span class="font-[700]">${elem.price} $</span>
      <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
      </div>
    </div>
    `;
  });
});

// filter name products
filter3.addEventListener("click", function () {
  filter1.classList.remove("borderfiler");
  filter2.classList.remove("borderfiler");
  filter4.classList.remove("borderfiler");
  filter5.classList.remove("borderfiler");
  this.classList.add("borderfiler");
  document.querySelector(".btnlowest").classList.remove("borderbuttom");
  document.querySelector(".btnhighest").classList.remove("borderbuttom");
  document.querySelector(".btnsearch").classList.remove("borderbuttom");
  document.querySelector(".btnmore").classList.add("borderbuttom");
  document.querySelector(".btnless").classList.add("borderbuttom");

  let usersearch = prompt("Enter your planet? ");
  let sreach = planets.filter((elem) => {
    return elem.name == usersearch;
  });
  (planet.innerHTML = ""),
    sreach.forEach((elem) => {
      planet.innerHTML += `
   <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
      <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
      <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
      <span>${elem.name}</span>
      <p class="text-center text-sm">${elem.discription}</p>
      <span class="font-[700]">${elem.price} $</span>
      <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
      </div>
    </div>
    `;
    });
});

// filter more than .. price products
filter4.addEventListener("click", function () {
  filter1.classList.remove("borderfiler");
  filter2.classList.remove("borderfiler");
  filter3.classList.remove("borderfiler");
  filter5.classList.remove("borderfiler");
  this.classList.add("borderfiler");
  document.querySelector(".btnlowest").classList.remove("borderbuttom");
  document.querySelector(".btnhighest").classList.remove("borderbuttom");
  document.querySelector(".btnsearch").classList.remove("borderbuttom");
  document.querySelector(".btnmore").classList.remove("borderbuttom");
  document.querySelector(".btnless").classList.add("borderbuttom");

  let usersearch = prompt("Enter your more pric? ");
  let sreach = planets.filter((elem) => {
    return elem.price > usersearch;
  });
  (planet.innerHTML = ""),
    sreach.forEach((elem) => {
      planet.innerHTML += `
    <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
      <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
      <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
      <span>${elem.name}</span>
      <p class="text-center text-sm">${elem.discription}</p>
      <span class="font-[700]">${elem.price} $</span>
      <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
      </div>
    </div>
    `;
    });
});

// filter less than .. price products
filter5.addEventListener("click", function () {
  filter1.classList.remove("borderfiler");
  filter2.classList.remove("borderfiler");
  filter3.classList.remove("borderfiler");
  filter4.classList.remove("borderfiler");
  this.classList.add("borderfiler");
  document.querySelector(".btnlowest").classList.remove("borderbuttom");
  document.querySelector(".btnhighest").classList.remove("borderbuttom");
  document.querySelector(".btnsearch").classList.remove("borderbuttom");
  document.querySelector(".btnmore").classList.remove("borderbuttom");
  document.querySelector(".btnless").classList.remove("borderbuttom");

  let usersearch = prompt("Enter your less pric? ");
  let sreach = planets.filter((elem) => {
    return elem.price < usersearch;
  });
  (planet.innerHTML = ""),
    sreach.forEach((elem) => {
      planet.innerHTML += `
    <div class="w-[250px] border border-white rounded-[16px]  overflow-hidden flex flex-col justify-end bg-[rgba(255,255,255,0.012)]  backdrop-blur-[10px] ">
      <img src="${elem.img}" alt="گل" class="w-[250px] my-auto">
      <div class="bg-[#292524] flex flex-col gap-[10px] justify-center items-center p-[10px]">
      <span>${elem.name}</span>
      <p class="text-center text-sm">${elem.discription}</p>
      <span class="font-[700]">${elem.price} $</span>
      <a href="#" class="px-[10px] py-[5px] text-center rounded-[16px] bg-[#334039]">Buy it now</a>
      </div>
    </div>
    `;
    });
});

// buttoms footer
let btn1 = document.querySelector(".sec1mobile>.s1");
let btn2 = document.querySelector(".sec1mobile>.s2");
let btn3 = document.querySelector(".sec1mobile>.s3");

btn1.addEventListener("click", function () {
  document.querySelector(".sec1mobile>.s1>.submenu1").classList.toggle("hiden");
  document.querySelector(".sec1mobile>.s2>.submenu2").classList.add("hiden");
  document.querySelector(".sec1mobile>.s3>.submenu3").classList.add("hiden");
});

btn2.addEventListener("click", function () {
  document.querySelector(".sec1mobile>.s2>.submenu2").classList.toggle("hiden");
  document.querySelector(".sec1mobile>.s1>.submenu1").classList.add("hiden");
  document.querySelector(".sec1mobile>.s3>.submenu3").classList.add("hiden");
});
btn3.addEventListener("click", function () {
  document.querySelector(".sec1mobile>.s3>.submenu3").classList.toggle("hiden");
  document.querySelector(".sec1mobile>.s1>.submenu1").classList.add("hiden");
  document.querySelector(".sec1mobile>.s2>.submenu2").classList.add("hiden");
});
