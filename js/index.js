const menuButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const cross = document.getElementById("cross");
const tableBody = document.getElementById("table-body");
const partnersDiv = document.getElementById("partners");
const portfolioDiv = document.getElementById("portfolio");
const storiesDiv = document.getElementById("stories");
const navDiv = document.getElementById("nav");
const time = document.getElementById("time-period");
const downarrow = document.getElementById("downarrow");
let tableData = [];
let partnerData = [];
let portfolioData = [];
let storiesData = [];

// append table row function
const appendTableData = () => {
  tableBody.innerHTML = "";

  tableData.forEach((company) => {
    const row = document.createElement("div");
    row.className = "flex odd:bg-[#f3f3f3] py-3.5 px-3";
    row.innerHTML = `
            <div class="w-[15%] text-left">${company.company}</div>
            <div class="w-[10%]">${company.ticker}</div>
            <div class="w-[15%]">${company.vertical}</div>
            <div class="w-[10%]">${company.price}</div>
            <div class="w-[10%]">${company.marketCap}</div>
            <div class="w-[10%]">${company.revenueGrowth}%</div>
            <div class="w-[10%]">${
              company.grossMargin !== null ? company.grossMargin + "%" : "--"
            }</div>
            <div class="w-[10%]">${company.evRevenue}</div>
            <div class="w-[10%] text-right">${company.ytdPerformance}%</div>
        `;

    tableBody.appendChild(row);
  });
};
const appendPartnerData = () => {
  partnersDiv.innerHTML = "";

  partnerData.forEach((partner) => {
    const div = document.createElement("div");
    div.className = "p-4 bg-white hover:scale-105 transition-all";
    div.innerHTML = `
        <img class="w-16 lg:w-32 h-20 object-contain mx-auto" src=${partner.company_img} alt="">
        `;

    partnersDiv.appendChild(div);
  });
};
const appendPortfolioData = () => {
  portfolioDiv.innerHTML = "";

  portfolioData.forEach((portfolio) => {
    const div = document.createElement("div");
    div.className = "p-4 bg-white hover:scale-105 transition-all";
    div.innerHTML = `
        <img class="w-16 lg:w-36 h-20 object-contain mx-auto" src=${portfolio.portfolio_img} alt="">
        `;

    portfolioDiv.appendChild(div);
  });
};
const appendStoriesData = () => {
  storiesDiv.innerHTML = "";
  storiesData.forEach((stories) => {
    const div = document.createElement("div");
    div.className =
      "bg-white hover:scale-105 transition-all mt-10 p-5 text-left rounded-lg";
    div.innerHTML = `
        <img
      class="w-[120px] h-[120px] text-left rounded-lg -ml-2 -mt-14"
       src=${stories.img}
      alt=""
    />
    <h3 class="text-primary text-sm">By: ${stories.name}</h3>
    <p class="text-base">
       ${stories.content}
    </p>
        `;

    storiesDiv.appendChild(div);
  });
};
// nav item active function
nav.addEventListener("click", (e) => {
  const activeLink = nav.querySelector(".active");

  if (activeLink && e.target.tagName == "A") {
    activeLink.classList.remove("bg-primary", "text-white", "active");
  }
  if(e.target.tagName == "A"){
    e.target.classList.add("bg-primary", "text-white", "active");
  }

});
// time period active function
time.addEventListener("click", (e) => {
  const activeTab = time.querySelector(".active");
  if (activeTab && e.target.tagName == "P") {
    activeTab.classList.remove("bg-primary", "text-white", "active");
  }
  if(e.target.tagName == "P"){
    e.target.classList.add("bg-primary", "text-white", "active");
  }
});
// scroll down button
downarrow.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
// data fetching for table
fetch("./assets/data.json")
  .then((res) => res.json())
  .then((data) => {
    tableData = data;
    appendTableData();
  });
// data fetching for listing and partners
fetch("./assets/partners.json")
  .then((res) => res.json())
  .then((data) => {
    partnerData = data;
    appendPartnerData();
  });
// data fetching for portfolio
fetch("./assets/portfolio.json")
  .then((res) => res.json())
  .then((data) => {
    portfolioData = data;
    appendPortfolioData();
  });
// fetch data for stories
fetch("./assets/stories.json")
  .then((res) => res.json())
  .then((data) => {
    storiesData = data;
    appendStoriesData();
  });

menuButton.addEventListener("click", () => {
  menu.classList.remove("translate-x-[1000px]");
  menu.classList.add("translate-x-0");
});
cross.addEventListener("click", () => {
  menu.classList.remove("translate-x-0");
  menu.classList.add("translate-x-[1000px]");
});
