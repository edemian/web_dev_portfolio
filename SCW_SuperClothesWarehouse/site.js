// ======================================
// PRODUCT DATA
// ======================================

var imgurl877 = "Images/";

var product1 = {
    name: "Women's Floral Lace Top",
    id: "Womens_Top",
    desc: "Elegant floral lace top with soft detailing and a modern feminine fit."
};

var product2 = {
    name: "Women's Long Maxi Dress",
    id: "Womens_Dress",
    desc: "Flowy, comfortable maxi dress perfect for casual and formal occasions."
};

var product3 = {
    name: "Women's Quilted Jacket",
    id: "Womens_Jacket",
    desc: "Classic quilted jacket with a modern tailored fit."
};

var product4 = {
    name: "Women's Classic Blue Jeans",
    id: "Womens_Product4",
    desc: "Comfortable stretch denim jeans with a flattering fit and timeless style."
};

var product5 = {
    name: "Women's Summer Floral Dress",
    id: "Womens_Product5",
    desc: "Lightweight floral summer dress featuring a breezy design perfect for warm weather."
};


// ======================================
// DEAL PRODUCTS
// ======================================

var products = [

    {
        name: "Women's Floral Lace Top",
        price: 9.99,
        img: imgurl877 + "Womens_Top.gif"
    },

    {
        name: "Women's Long Maxi Dress",
        price: 19.99,
        img: imgurl877 + "Womens_Dress.gif"
    },

    {
        name: "Women's Quilted Jacket",
        price: 29.99,
        img: imgurl877 + "Womens_Jacket.gif"
    },

    {
        name: "Women's Classic Blue Jeans",
        price: 14.99,
        img: imgurl877 + "Womens_Product4.gif"
    },

    {
        name: "Women's Summer Floral Dress",
        price: 24.99,
        img: imgurl877 + "Womens_Product5.gif"
    }

];


// ======================================
// GLOBAL VARIABLES
// ======================================

var hand = [];
var dealIndex = -1;

var popupWindow = null;
var adNumber = 1;

var cart = [];


// ======================================
// DISPLAY PRODUCT
// ======================================

function execButton637(product) {
    let productURL =
        imgurl877 + product.id + ".gif";

    let html = `

        <h2>My Product:</h2>

        Product Name:
        ${product.name}
        <br>

        Product ID:
        ${product.id}
        <br>

        Product Description:
        ${product.desc}

        <br><br>

        Product Image:
        <br>

        <img
            class="product-img"
            src="${productURL}"
            alt="${product.name}"
            width="250">
        <br><br>

        ${makeLinkBar428(product.name, "9.99")}

    `;

    document.getElementById("main742").innerHTML = html;
}


// ======================================
// SHOPPING CART
// ======================================

function makeLinkBar428(productName, productPrice) {
    return `

        <div class="cart-box">

            <b>Shopping Cart Links:</b>

            <br><br>

            <button
                onclick="addToCart('${productName}')">

                Add to Cart

            </button>

        </div>

    `;
}

function addToCart(itemName) {
    cart.push(itemName);

    alert(
        itemName +
        " added to cart!\n\n" +
        "Items in cart: " +
        cart.length
    );
}


// ======================================
// SHUFFLE DEALS
// ======================================

function shuffleDeals() {
    for (let i = products.length - 1; i > 0; i--) {
        let j = Math.floor(
            Math.random() * (i + 1)
        );

        [products[i], products[j]] =
            [products[j], products[i]];
    }
}


// ======================================
// SHOW DEALS
// ======================================

function dealClothingDeals() {
    shuffleDeals();

    hand = [];
    dealIndex = 0;

    for (let i = 0; i < 5; i++) {
        hand.push(products[i]);
    }

    let html = `
        <h2>Today's Clothing Deals</h2>
        <div style="display:flex; gap:20px; flex-wrap:wrap;">
    `;

    html += renderDealCard(hand[0], 0, true);
    html += renderDealCard(hand[1], 1, true);

    html += renderDealCard(null, 2, false);
    html += renderDealCard(null, 3, false);
    html += renderDealCard(null, 4, false);

    html += "</div>";

    document.getElementById("main742").innerHTML =
        html;

    dealIndex = 2;
}


// ======================================
// DEAL CARD
// ======================================

function renderDealCard(item, index, revealed) {
    if (revealed) {
        return `
        <div id="deal${index}" class="deal-card">
            <img
                src="${item.img}"
                class="deal-img"
                alt="${item.name}">
            <br>
            <strong>${item.name}</strong>
            <br>
            $${item.price.toFixed(2)}
        </div>
        `;
    }

    return `
    <div id="deal${index}" class="deal-card">
        <div class="hidden-deal">
            Hidden Deal
        </div>
    </div>
    `;
}


// ======================================
// REVEAL DEAL
// ======================================

function revealNextDeal() {
    if (dealIndex === -1) {
        alert("Click Show Deals first.");
        return;
    }

    if (dealIndex >= 5) {
        alert("All deals revealed.");
        return;
    }

    let item = hand[dealIndex];

    document.getElementById(
        "deal" + dealIndex
    ).innerHTML = `
        <img
            src="${item.img}"
            class="deal-img"
            alt="${item.name}">
        <br>
        <strong>${item.name}</strong>
        <br>
        $${item.price.toFixed(2)}
    `;

    dealIndex++;
}


// ======================================
// RESET DEALS
// ======================================

function resetGame441() {
    hand = [];
    dealIndex = -1;

    document.getElementById("main742").innerHTML =
        `
        <h2>Today's Clothing Deals</h2>

        <p>
            Click Show Deals to begin viewing today's specials.
        </p>
    `;
}


// ======================================
// POPUP ADS
// ======================================

function popupAd770()
{
    let adHTML = "";

    if(adNumber === 1)
    {
        adHTML = `
        <div style="
            background:#efadb7;
            border-radius:15px;
            box-shadow:0 8px 25px rgba(0,0,0,.25);
            width:550px;
            height:320px;
            padding:40px;
        ">
            <h2 style="color:#b00062;">
                Spring Lace Collection
            </h2>

            <p>
            Fresh, elegant lace tops for the new season.
            </p>

            <p style="
                color:#b00062;
                font-size:22px;
                font-weight:bold;
            ">
            30% OFF During the Holiday Season!
            </p>

            <p>
            While supplies last.
            </p>

            <h3>
            Shop Women's Tops Today!
            </h3>
        </div>
        `;
    }
    else if(adNumber === 2)
    {
        adHTML = `
        <div style="
            background:#c9c4e8;
            border-radius:15px;
            box-shadow:0 8px 25px rgba(0,0,0,.25);
            width:550px;
            height:320px;
            padding:40px;
        ">
            <h2 style="color:#4a148c;">
                Maxi Dress Sale
            </h2>

            <p>
            Comfortable, flowy dresses perfect for any occasion.
            </p>

            <p style="
                color:#4a148c;
                font-size:22px;
                font-weight:bold;
            ">
            40% OFF Select Styles!
            </p>

            <p>
            Holiday savings available while supplies last.
            </p>

            <h3>
            New Colors Just Arrived!
            </h3>
        </div>
        `;
    }
    else
    {
        adHTML = `
        <div style="
            width:450px;
            height:450px;
            margin:auto;
            background:#9ad7d7;
            border-radius:50%;
            box-shadow:0 8px 25px rgba(0,0,0,.25);

            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
        ">
            <h2 style="
                color:#005b7f;
                font-size:40px;
            ">
                Winter Jackets
            </h2>

            <p>
            Warm, stylish quilted jackets for cold days.
            </p>
            
            <p style="
                color:#005b7f;
                font-size:22px;
                font-weight:bold;
            ">
            50% OFF Winter Clearance!
            </p>

            <p>
            During the holiday season while supplies last.
            </p>

            <h3 style="
                font-size:30px;
                color:#005b7f;
            ">
                Stay Warm — Shop Now!
            </h3>
        </div>
        `;
    }

    document.getElementById("adContent").innerHTML =
    `
        <button class="close-btn"
                onclick="closeAd770()">
            ×
        </button>

        ${adHTML}
    `;

    document.getElementById("adOverlay").style.display =
    "flex";

    adNumber++;

    if(adNumber > 3)
    {
        adNumber = 1;
    }
}

function closeAd770()
{
    document.getElementById("adOverlay").style.display =
    "none";
}

// ======================================
// CUSTOMER FORM
// ======================================

function showCustomerForm() {
    document.getElementById("main742").innerHTML = `

<h2>Customer Information</h2>

<form
name="customerform"
onsubmit="return checkForm502()">

<label>First Name</label>
<input type="text" name="firstname">

<label>Last Name</label>
<input type="text" name="lastname">

<label>Address</label>
<input type="text" name="address">

<label>City</label>
<input type="text" name="city">

<label>State</label>
<input type="text" name="state">

<label>Zip Code</label>
<input type="text" name="zip">

<label>Email Address</label>
<input type="email" name="emailaddr">

<br><br>

<input type="submit" value="Submit">

</form>

`;
}


// ======================================
// FORM VALIDATION
// ======================================

function checkForm502()
{
    let form =
        document.customerform;

    let missing = [];

    if(form.firstname.value.trim() === "")
        missing.push("First Name");

    if(form.lastname.value.trim() === "")
        missing.push("Last Name");

    if(form.emailaddr.value.trim() === "")
        missing.push("Email Address");

    if(form.subject.value.trim() === "")
        missing.push("Subject");

    if(form.comments.value.trim() === "")
        missing.push("Comments");

    if(missing.length > 0)
    {
        alert(
            "Please complete:\n\n" +
            missing.join("\n")
        );
        return false;
    }

    document.getElementById("main742").innerHTML =
    `
    <div class="thank-you-box">

        <h2>✓ Thank You!</h2>

        <p>
            Your message has been received.
            We will contact you shortly.
        </p>

        <br>

        <a href="index.html"
            class="hero-button">
            Return Home
        </a>

    </div>
    `;

    return false;
}

// ======================================
// PAGE LOAD
// ======================================


window.onload = function()
{
    console.log("Site Loaded");
};

document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById("adOverlay")
    .addEventListener("click", function(e)
    {
        if(e.target === this)
        {
            closeAd770();
        }
    });
});