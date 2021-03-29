
//watch spelling matches html in header. this makes our pages dynamic by calling them. it works! :)
var homeContent = `<!-- home content -->
<div class="home">
    <div class="rest">
        <div class="resttext">
            <div class="headsAndBtn">
                <h1>IndiaHouse</h1>
                <h2>Authentic Indian Cuisine</h2>
                <h3>India st. boulevard Indianapolis, IN 46227 | (111) 111-1111</h3>
                <a class="cta" href="#"><button>Order Online</button></a>
            </div>
        </div>
    </div>
</div>`;

var aboutContent = `<!-- about content -->
<div class="about">
<div class="aboutTextAndImage">
    <div class="aboutImage"></div>
    <div class="aboutText">
        <h1>Serving Authentic Indian Cuisine Since 2021</h1>
        <p>
            Through our authentic Indian cuisine and engaging atmosphere, a visit to IndiaHouse is not just about experiencing the enticing flavors and foreign ingredients within our dishes; our goal is to transport our guests to the exotic land of India, so they can encounter the true culture of this curious, far-off place.
            We carefully craft each one of our dishes to showcase the adventurous, exotic flavors for which India is known. Savor the rich aroma of lime, coconut, chillies and pineapple in one of our authentic curries, classic noodle stir-fries or savory seafood dishes. To make each meal at IndiaHouse a true experience, we also have a vast beer and wine selection that will enhance the flavors of any one of our dishes.
            Visit IndiaHouse and experience the history, cuisine and true culture of India.
        </p>
    </div>
</div>
</div>`;

var menuContent = `<!-- menu content -->
<div class="restaurantMenu">
<div class="wrapper">
    <div class="title">
        <h4><span>fresh food, authentic taste</span>Our Menu</h4>
    </div>
    <div class="menu">
        <div class="single-menu">
            <img src="assets/images/images-menu/menu-01.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$16</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-02.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$14</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-03.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$25</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-04.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$20</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-02.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$16</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-01.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$14</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-04.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$25</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>

        <div class="single-menu">
            <img src="assets/images/images-menu/menu-03.jpg" alt="">
            <div class="menu-content">
                <h4>butter chicken curry <span>$20</span></h4>
                <p>Our staple of delicious flavors and mixes of spices will leave you wanting more with this order of our food dishes.</p>
            </div>
        </div>
    </div>
</div>
<button class="cta">Order Now</button>
</div>`;

var contactContent = `<!-- contact content -->
<div class="contact">
<div class="contact-form">
    <div class="contact-title">
        <h1>Say Hello</h1>
        <h2>We are ready to serve you!</h2>
    </div>
    <div class="form">
        <form class="contact-boxes" method="post" action="">
            <input name="name" type="text" class="form-control" placeholder="Your Name" required><br/>
            <input name="email" type="text" class="form-control" placeholder="Your Email" required><br/>
            <textarea name="message" class="form-control" placeholder="Message" rows="4" required></textarea><br/>
            <input type="submit" class="cta" value="SEND MESSAGE">
    </div>
</div>
</div>`;


function init(){

//listener that gets link Id
    $("nav a").click(function(e){

        let btnId = this.id;
        let contentID = btnId + "Content";

        $("#app").html(eval(contentID));

    });
}

//this checks for all elements to be read by browser
$(document).ready(function(){
    // alert("Hello!")
    init();
});
