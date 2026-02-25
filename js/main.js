let url = location.href;
if(url.indexOf("contact.html") != -1){
    window.onload = function(){
        var button = document.getElementById("btnSend");
        if(button){
            button.addEventListener("click", formProcessing);
        }
    }
}



// NAVBAR

let navBar = document.querySelector("#navMeni");

let navPage = ["Home", "Offer", "Contact", "Author", "ZIP"];
let navLink = ["index.html", "#", "contact.html", "author.html", "https://drive.google.com/drive/folders/1_Xbykg8VVhT5d4EiEibMbVnMh6FLESA8"];
let submenuLink = ["desserts.html", "cozydrinks.html", "cocktails.html"];
let submenuText = ["Desserts", "Cozy Drinks", "Cocktails"];

let navPrint = `<ul class="navbar-nav">`;

for(let i = 0; i < navPage.length; i++){
    if(navPage[i] == 'Offer'){
       navPrint += `<li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Offer
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;

         for(let j = 0; j < submenuLink.length; j++){
            navPrint += `<li>
                            <a class="dropdown-item" href="${submenuLink[j]}">${submenuText[j]}</a>
                        </li>`;
        } 
        navPrint += `</ul>`;
    }
    else{
        navPrint += `<li class="nav-item">
                        <a class="nav-link" href="${navLink[i]}">${navPage[i]}</a>
                    </li>`;
    }
}

navPrint += `</ul>`;

if(navBar){
    navBar.innerHTML += navPrint;
}


//SERVICES

let servicesSection = document.getElementById("services");

if (servicesSection) {
    let servicesIcon = ["img/cheers-card.png", "img/live-music.png", "img/veterinary.png"];
    let servicesHeading = ["COCKTAIL NIGHT", "LIVE MUSIC", "PET FRIENDLY"];
    let servicesText = [
        "Join us every Thursday for a vibrant Cocktail Night!",
        "Enjoy live music every weekend!",
        "Bring your furry friends along!"
    ];

    let servicesPrint = `
        <div class="pageHeadings">
            <h2>SERVICES</h2>
        </div>
        <div class="container-fluid py-5 services-bg">
            <div class="container">
                <div class="row align-items-center text-center blockCenter justify-content-center">
    `;

    for (let i = 0; i < servicesIcon.length; i++) {
        servicesPrint += `
            <div class="col-lg-4 col-md-6 mb-4 md-12">
                <div class="service-item">
                    <img src="${servicesIcon[i]}" alt="service icon" class="img-fluid mb-3"/>
                    <h3 class="hBold">${servicesHeading[i]}</h3>
                    <p>${servicesText[i]}</p>
                </div>
            </div>
        `;
    }

    servicesPrint += `</div></div></div>`;
    servicesSection.innerHTML = servicesPrint;
}


// ONLY THIS WEEK BLOK

let onlyThisWeek = document.querySelector("#thisWeek");

if (onlyThisWeek) {  
    let thisWeekImg = ["img/cocktails-thisweek.jpg", "img/matcha-thisweek.jpg", "img/coffeandcrossiant-thisweek.jpg"];
    let thisWeekDiscount = ["-33%", "-50%", "-37%"];
    let thisWeekProduct = ["Martini", "Matcha Special", "Coffee & Pastry Deal"];
    let thisWeekText = ["Buy 2, get 1 free!", "Double Matcha, single price", "Espresso, Cappuccino, Latte + Croissant"];
    let thisWeekOldPrice = ["$30.0", "$9.0", "$8.0"];
    let thisWeekNewPrice = ["$20.0", "$4.5", "$5.0"];

    let thisWeekPrint = `<div class="pageHeadings">
                            <h2>ONLY THIS WEEK</h2>
                        </div>
                        <div class="container">
                            <div class="row justify-content-center blockCenter">`;

    for (let i = 0; i < thisWeekImg.length; i++) {
        thisWeekPrint += `<div class="col-lg-4 col-md-6 mb-4 md-12">
                            <div class="card">
                                <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                                    <div class="zoom-box">
                                        <img src="${thisWeekImg[i]}" alt="product" class="img-fluid"/>
                                    </div>
                                    <div class="mask">
                                        <div class="d-flex justify-content-start align-items-end h-100">
                                            <h5><span class="badge ms-2" id="percentage">${thisWeekDiscount[i]}</span></h5>
                                        </div>
                                    </div>
                                    <div class="hover-overlay">
                                        <div class="mask"></div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title mb-3 text-reset">${thisWeekProduct[i]}</h5>
                                    <p class="text-reset">${thisWeekText[i]}</p>
                                    <h6 class="mb-3">
                                        <s>${thisWeekOldPrice[i]}</s><strong class="ms-2" id="newPrice">${thisWeekNewPrice[i]}</strong>
                                    </h6>
                                </div>
                            </div>
                        </div>`;
    }

    thisWeekPrint += `</div></div>`;

    onlyThisWeek.innerHTML = thisWeekPrint;
}


// OFFER


// DESSERTS

let dessertsSection = document.getElementById("desserts");

if (dessertsSection) {

    let dessertsImg = ["img/desserts1.jpg", "img/desserts2.jpg", "img/desserts3.jpg", "img/desserts4.jpg", "img/desserts5.jpg", "img/desserts6.jpg"];
    let dessertsName = ["Berry Bliss Waffles", "Lava Cake", "Strawberry Tiramissu", "Strawberry Cheesecake", "Parisian Macaron Trio", "Snowman Pancake Tower"];
    let dessertsText = [
        "Golden vanilla waffles drizzled with juicy mixed berries.",
        "Warm chocolate lava cake, topped with vanilla ice cream and chocolate drizzle.",
        "Soft layers of mascarpone, biscuits, and fresh strawberries.",
        "Creamy cheesecake layered with strawberry filling and topped with a smooth vanilla glaze.",
        "Delicate French macarons with festive flavors and creamy fillings.",
        "Fluffy pancakes served with fresh raspberries and a cute snowman cream topping."
    ];
    let dessertsPrice = ["$6.50", "$7.00", "$6.80", "$5.50", "$7.00", "$7.50"];

    let dessertsPrint = `
        <div class="pageHeadings">
            <h2>DESSERTS</h2>
        </div>
        <div class="container">
            <div class="row justify-content-center blockCenter">
    `;

    for (let i = 0; i < dessertsImg.length; i++) {
        dessertsPrint += `
            <div class="col-lg-4 col-md-6 mb-4 md-12">
                <div class="card">
                    <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                        <div class="zoom-box">
                            <img src="${dessertsImg[i]}" alt="dessert" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-reset">${dessertsName[i]}</h5>
                        <p class="text-reset">${dessertsText[i]}</p>
                        <h6 class="mb-3">${dessertsPrice[i]}</h6>
                    </div>
                </div>
            </div>
        `;
    }

    dessertsPrint += `</div></div>`;
    dessertsSection.innerHTML = dessertsPrint;
}

// COZY DRINKS

let cozySection = document.getElementById("cozyDrinks");

if (cozySection) {

    let drinksImg = ["img/cozyDrinks1.jpg", "img/cozyDrinks2.jpg", "img/cozyDrinks3.jpg", "img/cozyDrinks4.jpg", "img/cozyDrinks5.jpg", "img/cozyDrinks6.jpg"];
    let drinksName = ["Matcha Latte", "Rose Latte", "Marshmallow White Choco", "Tiramisu Latte", "Snowman Hot Chocolate", "Vanilla Latte"];
    let drinksText = [
        "Creamy Japanese matcha blended with steamed milk, smooth and calming.",
        "Creamy pink latte with a naturally sweet, smooth flavor.",
        "Creamy white hot chocolate topped with fluffy marshmallow foam.",
        "Creamy coffee latte inspired by classic tiramisu, with cocoa and milk foam.",
        "Rich hot chocolate topped with a cute marshmallow snowman.",
        "Smooth espresso latte with gentle vanilla flavor and silky milk foam."
    ];
    let drinksPrice = ["$4.50", "$4.80", "$5.50", "$5.00", "$5.50", "$4.80"];

    let drinksPrint = `
        <div class="pageHeadings">
            <h2>COZY DRINKS</h2>
        </div>
        <div class="container">
            <div class="row justify-content-center blockCenter">
    `;

    for (let i = 0; i < drinksImg.length; i++) {
        drinksPrint += `
            <div class="col-lg-4 col-md-6 mb-4 md-12">
                <div class="card">
                    <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                        <div class="zoom-box">
                            <img src="${drinksImg[i]}" alt="drink" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-reset">${drinksName[i]}</h5>
                        <p class="text-reset">${drinksText[i]}</p>
                        <h6 class="mb-3">${drinksPrice[i]}</h6>
                    </div>
                </div>
            </div>
        `;
    }

    drinksPrint += `</div></div>`;
    cozySection.innerHTML = drinksPrint;
}

// COCKTAILS

let cocktailsSection = document.getElementById("cocktails");

if (cocktailsSection) {

    let cocktailsImg = ["img/cocktail1.jpg", "img/cocktail2.jpg", "img/cocktail3.jpg", "img/cocktail4.jpg", "img/cocktail5.jpg", "img/cocktail6.jpg"];
    let cocktailsName = ["Floral Gin", "Classic Martini", "Berry Spritz", "Classic Margarita", "Berry Violet", "Espresso Martini"];
    let cocktailsText = [
        "Gin with floral notes, fresh and aromatic.",
        "Crisp and dry martini with green olives.",
        "Light sparkling cocktail with berries and citrus.",
        "Tequila with fresh lime juice, crisp and refreshing.",
        "Vodka-based purple cocktail with raspberries and blueberries, smooth and fruity.",
        "Vodka, espresso and coffee liqueur, bold and creamy."
    ];
    let cocktailsPrice = ["$8.50", "$10.00", "$8.80", "$9.80", "$8.50", "$10.50"];

    let cocktailsPrint = `
        <div class="pageHeadings">
            <h2>COCKTAILS</h2>
        </div>
        <div class="container">
            <div class="row justify-content-center blockCenter">
    `;

    for (let i = 0; i < cocktailsImg.length; i++) {
        cocktailsPrint += `
            <div class="col-lg-4 col-md-6 mb-4 md-12">
                <div class="card">
                    <div class="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                        <div class="zoom-box">
                            <img src="${cocktailsImg[i]}" alt="cocktail" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title mb-3 text-reset">${cocktailsName[i]}</h5>
                        <p class="text-reset">${cocktailsText[i]}</p>
                        <h6 class="mb-3">${cocktailsPrice[i]}</h6>
                    </div>
                </div>
            </div>
        `;
    }

    cocktailsPrint += `</div></div>`;
    cocktailsSection.innerHTML = cocktailsPrint;
}

// FORMA

function formProcessing(){
    var errorSubmit = 0;
    var firstName = document.getElementById("fName");
    var lastName = document.getElementById("lName");
    var emailAddress = document.getElementById("email");
    var mobileNumber = document.getElementById("mobile");
    var ddlServices = document.getElementById("ddlService");
    var radioButton = document.getElementsByName("rbBook");
    var checkBox = document.getElementById("terms");

    var reFirstName = /^([A-ZČĆŽĐŠ][a-zčćžđš]{2,15})+$/;
    var reLastName = /^([A-ZČĆŽĐŠ][a-zčćžđš]{2,15})+$/;
    var reEmail = /^\w([\.-]?\w+\d*)*@\w+\.\w{2,6}$/;
    var reMobile = /^(\+381|[0])6[\d]{7,8}$/;
    
    errorSubmit+=checkReggex(reFirstName, firstName, "The first name is invalid. Example: Irena");
    errorSubmit+=checkReggex(reLastName, lastName, "The last name is invalid. Example: Milanović");
    errorSubmit+=checkReggex(reEmail, emailAddress, "The email address is invalid. Example: irenamilanovic@gmail.com");
    errorSubmit+=checkReggex(reMobile, mobileNumber, "The mobile number is invalid. Example: 0641290512");

    var ddlServicesValue = ddlServices.options[ddlServices.selectedIndex].value;
    var ddlServicesText = ddlServices.options[ddlServices.selectedIndex].text;

    if(ddlServicesValue == "0"){
        ddlServices.nextElementSibling.classList.remove("hide");
        ddlServices.nextElementSibling.innerHTML = "Choose a service.";
        errorSubmit++;
    }
    else{
        ddlServices.nextElementSibling.classList.add("hide");
        ddlServices.nextElementSibling.innerHTML = "";
    }

    let radioValue = ""; 
    let countUnchecked = 1;
    for(let i = 0; i < radioButton.length; i++){
        if(radioButton[i].checked){
            radioValue = radioButton[i].value;
            countUnchecked = 0;
            break;
        }
    }

    if(countUnchecked == 1){
        errorSubmit++;
    }

    let checkboxValue = "";
    if(checkBox.checked){
        checkboxValue = checkBox.value;
    }
    else{
        errorSubmit++;
    }

    errorSubmit+=checkRadio(radioValue, radioButton, "Choose something.");
    errorSubmit+=checkCheckedElements(checkboxValue, checkBox, "Accept the terms of use.");

    if(errorSubmit == 0){
        document.getElementById("sendButton").classList.remove("d-none");
        document.getElementById("formBook").reset();
    }
    else{
        document.getElementById("sendButton").classList.add("d-none");
    }
}

function checkReggex(re, object, p){
    if(re.test(object.value)){
        object.nextElementSibling.classList.add("hide");
        object.nextElementSibling.innerHTML = "";
        return 0;
    }
    else{
        object.nextElementSibling.classList.remove("hide");
        object.nextElementSibling.innerHTML = p;
        return 1;
    }
}

function checkRadio(elementValue, element, p){
    if(elementValue == ""){
        element[0].parentElement.parentElement.nextElementSibling.classList.remove("hide");
        element[0].parentElement.parentElement.nextElementSibling.innerHTML = p;
        return 1;
    }
    else{
        element[0].parentElement.parentElement.nextElementSibling.classList.add("hide");
        element[0].parentElement.parentElement.nextElementSibling.innerHTML = "";
        return 0;
    }
}

function checkCheckedElements(elementValue, element, p){
    if(elementValue == ""){
        element.parentElement.nextElementSibling.classList.remove("hide");
        element.parentElement.nextElementSibling.innerHTML = p;
        return 1;
    }
    else{
        element.parentElement.nextElementSibling.classList.add("hide");
        element.parentElement.nextElementSibling.innerHTML = "";
        return 0;
    }
}

// FOOTER

let socialsLink = ["https://www.facebook.com", "https://www.instagram.com", "sitemap.xml", "Dokumentacija.pdf"];
let socialsIcon = ["fab fa-facebook-f", "fab fa-instagram", "fas fa-sitemap", "far fa-file-pdf"];

let socialsPrint = `
<div class="me-5 d-none d-lg-block">
    <span>Get connected with us on social networks:</span>
</div>
<div>`;

for(let i = 0; i < socialsIcon.length; i++){
    socialsPrint += `
    <a href="${socialsLink[i]}" class="me-4 text-reset colorhover" target="_blank">
        <i class="${socialsIcon[i]}"></i>
    </a>`;
}

socialsPrint += `</div>`;

let socials = document.getElementById("socials");
if(socials){
    socials.innerHTML = socialsPrint;
}


let footer = document.getElementById("footer");

let printFooter = `
<div class="container text-center text-md-start mt-5">
<div class="row mt-3">`;

let footerHeading = ["Mellow", "Menu", "Useful links", "Contact"];
let footerPages = ["Home", "Contact", "Author"];
let footerPagesLink = ["index.html", "contact.html", "author.html"];
let footerIcons = ["fas fa-home me-3", "fas fa-envelope me-3", "fas fa-phone me-3"];
let footerContact = ["Zdravka Čelara 16, Belgrade", "info@mellow.com", "064 3470 006"];

for(let i = 0; i < footerHeading.length; i++){

    if(footerHeading[i] == 'Mellow'){
        printFooter += `
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-mug-hot me-3"></i>Mellow
            </h6>
            <p>Enjoy premium coffee, handcrafted cocktails, and homemade desserts in a cozy space made for relaxing and good company.</p>
        </div>`;
    }

    if(footerHeading[i] == 'Menu'){
        printFooter += `
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;

        for(let k = 0; k < submenuLink.length; k++){
            printFooter += `
            <p><a href="${submenuLink[k]}" class="text-reset colorhover">${submenuText[k]}</a></p>`;
        }

        printFooter += `</div>`;
    }

    if(footerHeading[i] == 'Useful links'){
        printFooter += `
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;

        for(let p = 0; p < footerPages.length; p++){
            printFooter += `
            <p><a href="${footerPagesLink[p]}" class="text-reset colorhover">${footerPages[p]}</a></p>`;
        }

        printFooter += `</div>`;
    }

    if(footerHeading[i] == 'Contact'){
        printFooter += `
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">${footerHeading[i]}</h6>`;

        for(let z = 0; z < footerIcons.length; z++){
            printFooter += `
            <p><i class="${footerIcons[z]}"></i>${footerContact[z]}</p>`;
        }

        printFooter += `</div>`;
    }
}

printFooter += `</div></div>`;

if(footer){
    footer.innerHTML = printFooter;
}




// CUSTOMERS CAROUSEL

let customersBlock = document.getElementById("customers");

if(customersBlock){

    let customersName = ["Emma Thompson", "Mark Peterson", "Olivia Smith"];
    let customersText = [
        `"The drinks here are amazing! The matcha was smooth and calming, the coffee rich and aromatic,
         and the hot chocolate incredibly creamy. Every cup feels carefully made and full of flavor.
          I also love that it’s pet-friendly — I could bring my dog and enjoy a relaxing afternoon together."`,
        
        `"I visited Mellow for cocktails with friends and loved it! The drinks were refreshing, 
        well balanced, and beautifully presented. The atmosphere is warm and stylish, 
        making it a great place for evening hangouts. Definitely coming back for more!"`,
        
        `"I came for the desserts and was completely impressed! The tiramisu was light, creamy, 
          and perfectly balanced, and the macarons were delicate with rich flavor. Everything looked
          beautiful and tasted even better. It’s the perfect place for anyone with a sweet tooth."`
    ];

    let customersStars = [5, 4, 5];

    let customersPrint = `
    <div class="container-fluid py-5 customers-bg">
        <div class="container my-5 text-center">
            <div class="pageHeadings">
              <h2>CUSTOMER RATINGS</h2>
            </div>

            <div id="customersCarousel" class="carousel slide" data-bs-interval="false">
                <div class="carousel-inner">
`;

    for(let i = 0; i < customersName.length; i++){
        customersPrint += `
            <div class="carousel-item ${i == 0 ? "active" : ""}">
                <div class="d-flex justify-content-center">
                    <div class="col-md-8 col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${customersName[i]}</h5>
                                <p class="card-text">${customersText[i]}</p>
                                <div class="rating mb-3">
        `;

        for(let j = 1; j <= 5; j++){
            if(j <= customersStars[i]){
                customersPrint += `<i class="fa-solid fa-star"></i>`;
            } else {
                customersPrint += `<i class="fa-regular fa-star"></i>`;
            }
        }

        customersPrint += `
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    customersPrint += `
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#customersCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" type="button" data-bs-target="#customersCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    `;

    customersBlock.innerHTML = customersPrint;
}




// JQUERY

$(document).ready(function(){

    $(window).on("scroll", function(){
        if($(this).scrollTop() >= 50){
            $("#scroll").removeClass("d-none").addClass("d-block");
        } else {
            $("#scroll").removeClass("d-block").addClass("d-none");
        }
    });

    $("#scroll a").on("click", function(e){
        e.preventDefault(); 
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $(".navbar-light .navbar-nav .nav-link").hover(
        function(){ $(this).css("color", "#7b7e7c"); }, 
        function(){ $(this).css("color", "#494949"); }
    );

    $("#thisWeek .card").hover(
        function(){ $(this).stop().animate({ marginTop: "-10px" }, 200); },
        function(){ $(this).stop().animate({ marginTop: "0px" }, 200); }
    );

});


// COUNTER

function cafeCounters() {
    let countersContainer = document.getElementById("countersSection");
    if (!countersContainer) return; 

    let countersData = [
        ["5000", "2300", "2800"], 
        ["Happy Visitors", "Cocktails Served", "Desserts Sold"] 
    ];

    let countersHTML = '';

    for (let i = 0; i < countersData[0].length; i++) {
        countersHTML += `
            <div class="col-12 col-md-4 text-center">
                <div class="counter-item">
                    <h4 class="counter-value">0+</h4>
                    <h6>${countersData[1][i]}</h6>
                </div>
            </div>`;
    }

    countersContainer.innerHTML = countersHTML;

    let animationStarted = false;

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;

        if (scrollY > 1200 && scrollY < 2000 && !animationStarted) {
            animationStarted = true;
            let counterElements = document.querySelectorAll(".counter-value");

            counterElements.forEach((counterEl, index) => {
                let targetNumber = parseInt(countersData[0][index]);
                let currentNumber = 0;
                let stepTime = Math.floor(2000 / targetNumber);

                let interval = setInterval(() => {
                    if (currentNumber < targetNumber) {
                        currentNumber++;
                        counterEl.innerHTML = currentNumber + "+";
                    } else {
                        clearInterval(interval);
                    }
                }, stepTime);
            });
        }
    });
}


// Poziv funkcije
cafeCounters();