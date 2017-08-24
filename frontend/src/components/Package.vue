<template>
<div class="inner-block">
    <div class="price-block-main">
    	<div class="prices-head">
    		<h2>Upgrade Recomendation</h2>
            <h4>Based on your usage, Our Recomendationis to upgrade to 'Professional'</h4>
        
        </div>
		<!---728x90 -->
    	<div class="row price-tables" style="margin-top: 80px;">
	    		<div class="col-md-4 price-grid">
	    		   <div class="price-block price-block-exist">
		    			<div class="price-gd-top pric-clr1">
		    				<h4>Basic</h4>
		    				<h3>25<span class="per-month">Mb/s</span></h3>
		    				<h4><span class="usa-dollar">£</span> 5<span class="per-month">/mon</span></h4>
		    			</div>
		    			<div class="price-gd-bottom">
		    				<div class="price-list">
			    				<ul>
			    					<li>1Gb Disk</li>
			    					<li>10Gb Bandwidth Monthly</li>
			    					<li>2 Email Account</li>
			    					<li>Unlimited Sub Domains</li>
			    				</ul>
		    				</div>
		    			</div>
		    		    <div class="price-selet pric-clr1">		    			   
		    			   	  <a class="popup-with-zoom-anim" style="color: white">Your Existing Plan</a>
		    			</div>
		    		</div>
	    		</div>
	    		<div class="col-md-4 price-grid">
	    			<div class="price-block price-block-rec">
		    			<div class="price-gd-top pric-clr2">
		    				<h4>Professional</h4>
		    				<h3>55<span class="per-month">Mb/s</span></h3>
		    				<h4><span class="usa-dollar">£</span> 15<span class="per-month">/mon</span></h4>
		    			</div>
		    			<div class="price-gd-bottom">
		    				<div class="price-list">
			    				<ul>
			    					<li>3Gb Disk</li>
			    					<li>25Gb Bandwidth Monthly</li>
			    					<li>5 Email Account</li>
			    					<li>Unlimited Sub Domains</li>
			    				</ul>
		    				</div>
		    			</div>
		    		    <div class="price-selet pric-clr2">
		    			   	 <div class="popup-with-zoom-anim">Recommended* <button class="btn btn-outline-white">Select Plan</button></div>
		    			</div>
		    		</div>
	    		</div>
	    		<div class="col-md-4 price-grid">
	    			<div class="price-block">
		    			<div class="price-gd-top pric-clr3">
		    				<h4>Premium</h4>
		    				<h3>200<span class="per-month">Mb/s</span></h3>
		    				<h4><span class="usa-dollar">£</span> 55<span class="per-month">/mon</span></h4>
		    			</div>
		    			<div class="price-gd-bottom">
		    				<div class="price-list">
			    				<ul>
			    					<li>5Gb Disk</li>
			    					<li>50Gb Bandwidth Monthly</li>
			    					<li>10 Email Account</li>
			    					<li>Unlimited Sub Domains</li>
			    				</ul>
		    				</div>
		    			</div>
		    		    <div class="price-selet pric-clr3">
		    			   	<a class="popup-with-zoom-anim" href="#small-dialog">Select  Plan</a>
		    			</div>
		    		</div>
    	       </div>
    	       
    	  <div class="clearfix"> </div>
    	  </div>
   </div>
</div>
</template>

<script>

export default {
    name : "Package",
    props : {
    }
}
</script>

<style>

.prices-head h2 {
    font-size: 2em;
    color: #68AE00;
    margin:0em 0em 1em 0.4em;
    font-family: 'Carrois Gothic', sans-serif;
}
.price-list ul {
    padding: 0px;
    list-style: none;
}
.price-gd-top {
    background:#78A239;
    text-align: center;
    border-radius: 5px 5px 0px 0px;
}
.price-gd-top h4 {
    font-size: 1.8em;
    color: #fff;
    padding: 0.4em 1em;
    background:#467501;
    border-radius: 5px 5px 0px 0px;
    font-family: 'Carrois Gothic', sans-serif;
}
.price-gd-top h3 {
    padding: 0.4em 0em;
    font-size: 3.3em;
    color: #fff;
    font-family: 'Carrois Gothic', sans-serif;
}
span.usa-dollar {
    font-size: 0.4em;
    vertical-align: top;
}
span.per-month {
    font-size: 0.4em;
}
.price-gd-top h5 {
    font-size: 1em;
    color: #fff;
    padding: 0.2em 0em 0.8em 0em;
    font-family: 'Carrois Gothic', sans-serif;
}
.price-gd-bottom {
    background: #fff;
    text-align: center;
    padding: 1em 0em;
}
.price-list ul li {
    padding: 0.5em 0em;
    font-size: 1em;
    color: #545454;
}
.price-selet {
    padding: 1em 0em;
    text-align: center;
    background: #78A239;
    border-radius: 0px 0px 5px 5px;
}
.price-selet a {
    font-size: 1.1em;
    color: #fff;
    display: block;
}
.price-selet a {
    font-size: 1.1em;
    color: #fff;
    display:block;
}
.price-grid {
    margin-bottom: 3em;
}
.pric-clr1 h4 {
    background:#09375F;
}

.pric-clr1 {
    background:#1A63A0;
}
.pric-clr3 h4 {
    background: #CC660E;
}
.pric-clr3 {
    background: #E07D28;
}
.price-block {
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15);
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
}
.price-block-exist {
    transform: scale(0.9);
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -o-transform: scale(0.9);
    -ms-transform: scale(0.9);
    z-index: 1;
}
.price-block-rec {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    z-index: 1;
}
a.popup-with-zoom-anim {
    outline: none;
}

.btn-outline-white {
    color: #ffffff;
    background-color: transparent;
    background-image: none;
    border-color: #ffffff;
}
.btn-outline-white:hover {
    color: #ffffff;
    background-color: darkGray;
    background-image: none;
    border-color: #ffffff;
}
</style>