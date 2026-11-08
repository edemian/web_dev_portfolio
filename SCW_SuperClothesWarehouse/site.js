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

function execButton637(product)
{
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
            width="250">

        <br><br>

        ${makeLinkBar428(product.name, "9.99")}

    `;

    document.getElementById("main742").innerHTML = html;
}


// ======================================
// SHOPPING CART
// ======================================

function makeLinkBar428(productName, productPrice)
{
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

function addToCart(itemName)
{
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

function shuffleDeals()
{
    for (let i = products.length - 1; i > 0; i--)
    {
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

function dealClothingDeals()
{
    shuffleDeals();

    hand = [];
    dealIndex = 0;

    for (let i = 0; i < 5; i++)
    {
        hand.push(products[i]);
    }

    let html = `
        <h2>Today's Clothing Deals</h2>
        <div style="display:flex; gap:20px; flex-wrap:wrap;">
    `;

    html += renderDealCard(hand[0],0,true);
    html += renderDealCard(hand[1],1,true);

    html += renderDealCard(null,2,false);
    html += renderDealCard(null,3,false);
    html += renderDealCard(null,4,false);

    html += "</div>";

    document.getElementById("main742").innerHTML =
        html;

    dealIndex = 2;
}


// ======================================
// DEAL CARD
// ======================================

function renderDealCard(item, index, revealed)
{
    if (revealed)
    {
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

function revealNextDeal()
{
    if (dealIndex === -1)
    {
        alert("Click Show Deals first.");
        return;
    }

    if (dealIndex >= 5)
    {
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

function resetGame441()
{
    hand = [];
    dealIndex = -1;

    document.getElementById("main742").innerHTML =
    `
        <h2>Deals Reset</h2>

        <p>
            All deals cleared.
            Click Show Deals to start again.
        </p>
    `;
}


// ======================================
// POPUP ADS
// ======================================

function popupAd770()
{
    if(!popupWindow || popupWindow.closed)
    {
        popupWindow =
            window.open(
                "",
                "adWindow",
                "width=500,height=400"
            );
    }

    let adHTML = "";

    if(adNumber === 1)
    {
        adHTML = `
            <h2>Spring Lace Collection</h2>
            <p>Shop Women's Tops Today!</p>
        `;
    }

    else if(adNumber === 2)
    {
        adHTML = `
            <h2>Maxi Dress Sale</h2>
            <p>New Colors Just Arrived!</p>
        `;
    }

    else
    {
        adHTML = `
            <h2>Winter Jackets</h2>
            <p>Stay Warm - Shop Now!</p>
        `;
    }

    popupWindow.document.body.innerHTML =
        adHTML;

    adNumber++;

    if(adNumber > 3)
    {
        adNumber = 1;
    }
}

function closeAd770()
{
    if(popupWindow && !popupWindow.closed)
    {
        popupWindow.close();
    }
}


// ======================================
// CUSTOMER FORM
// ======================================

function showCustomerForm()
{
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

    if(form.address.value.trim() === "")
        missing.push("Address");

    if(form.city.value.trim() === "")
        missing.push("City");

    if(form.state.value.trim() === "")
        missing.push("State");

    if(form.zip.value.trim() === "")
        missing.push("Zip Code");

    if(form.emailaddr.value.trim() === "")
        missing.push("Email Address");

    if(missing.length > 0)
    {
        alert(
            "Missing Fields:\n\n" +
            missing.join("\n")
        );

        return false;
    }

    alert(
        "Form Submitted Successfully!"
    );

    return true;
}

// ======================================
// PAGE LOAD
// ======================================

function updateDateTime()
{
    let now = new Date();

    document.getElementById("dateTime").innerHTML =
    now.toLocaleDateString() +
    " | " +
    now.toLocaleTimeString();
}

window.onload = function()
{
    execButton637(product1);

    updateDateTime();

    setInterval(updateDateTime, 1000);
};