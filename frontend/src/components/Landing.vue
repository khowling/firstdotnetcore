<template>
<div>
  <!-- Modules should be stacked with a sibling relationship in order to programmatically adjust their position, margins, and padding. -->
  <div data-grid="col-12" class="m-rich-heading theme-dark f-accent">
    <div class="c-logo">
        <img itemprop="logo" class="c-image" src="http://placehold.it/200x130" alt="Placeholder logo image" itemscope itemtype="http://schema.org/ImageObject">
        <span>Microsoft</span>
    </div>
    <div>
        <h3 class="c-heading">Heading</h3>
        <p class="c-paragraph-3">Paragraph</p>
    </div>
  </div>
  <div data-grid="col-12 stack-3" class="m-hyperlink-group-content-placement"> ... </div>
  <div data-grid="col-12" class="m-product-placement f-device"> ... </div>
  <div data-grid="col-12" class="m-product-placement f-app"> ... </div>



<div class="m-panes" data-grid="col-12">
    <section class="f-align-middle">
        <div class="m-panes-product-placement-item">
            <picture class="c-image">
                <source srcset="http://placehold.it/570x570/2F2F2F/171717" media="(min-width: 1779px)">
                <source srcset="http://placehold.it/570x570/2F2F2F/171717" media="(min-width:1400px)">
                <source srcset="http://placehold.it/360x360/2F2F2F/171717" media="(min-width:1084px)">
                <source srcset="http://placehold.it/360x360/2F2F2F/171717" media="(min-width:768px)">
                <source srcset="http://placehold.it/360x360/2F2F2F/171717" media="(min-width:540px)">
                <source srcset="http://placehold.it/360x360/2F2F2F/171717" media="(min-width:0)">
                <img srcset="http://placehold.it/360x360/2F2F2F/171717" src="http://placehold.it/360x360/2F2F2F/171717" alt="Placeholder image">
            </picture>
            <div>
                <h3 class="c-heading">Heading</h3>
                <p class="c-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo tincidunt, mattis dui non, ultrices massa. Nulla eleifend, eros sed laoreet auctor, turpis purus aliquet ligula, sit amet facilisis enim dolor nec nisl. Aliquam erat
                    volutpat.</p>
                <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                    <span>Starting at&nbsp;</span>
                    <meta itemprop="priceCurrency" content="USD">
                    <span>$</span>
                    <span itemprop="price">1,000</span>
                    <link itemprop="availability" href="http://schema.org/InStock">
                </div>
                <div class="c-rating" data-value="3" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                    <p class="x-screen-reader">Community rating:
                        <span itemprop="ratingValue">3</span>/
                        <span itemprop="bestRating">5</span>
                    </p>
                    <div></div>
                </div>
                <div>
                    <a href="#" class="c-call-to-action c-glyph" aria-label="More verbose call to action text">
                        <span>CALL TO ACTION</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="f-stacked">
        <div>
            <div class="m-panes-product-placement-item">
                <picture class="c-image">
                    <source srcset="http://placehold.it/353x353/2F2F2F/171717" media="(min-width: 1779px)">
                    <source srcset="http://placehold.it/353x353/2F2F2F/171717" media="(min-width:1400px)">
                    <source srcset="http://placehold.it/277x277/2F2F2F/171717" media="(min-width:1084px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:768px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:540px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:0)">
                    <img srcset="http://placehold.it/277x277/2F2F2F/171717" src="http://placehold.it/277x277/2F2F2F/171717" alt="Placeholder image">
                </picture>
                <div>
                    <h3 class="c-heading">Heading</h3>
                    <p class="c-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo tincidunt, mattis dui non, ultrices massa. Nulla eleifend, eros sed laoreet auctor, turpis purus aliquet ligula, sit amet facilisis enim dolor nec nisl. Aliquam
                        erat volutpat.</p>
                    <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                        <span>Starting at&nbsp;</span>
                        <meta itemprop="priceCurrency" content="USD">
                        <span>$</span>
                        <span itemprop="price">1,000</span>
                        <link itemprop="availability" href="http://schema.org/InStock">
                    </div>
                    <div class="c-rating" data-value="3" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                        <p class="x-screen-reader">Community rating:
                            <span itemprop="ratingValue">3</span>/
                            <span itemprop="bestRating">5</span>
                        </p>
                        <div></div>
                    </div>
                    <div>
                        <a href="#" class="c-call-to-action c-glyph" aria-label="More verbose call to action text">
                            <span>CALL TO ACTION</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="m-panes-product-placement-item">
                <picture class="c-image">
                    <source srcset="http://placehold.it/353x353/2F2F2F/171717" media="(min-width: 1779px)">
                    <source srcset="http://placehold.it/353x353/2F2F2F/171717" media="(min-width:1400px)">
                    <source srcset="http://placehold.it/277x277/2F2F2F/171717" media="(min-width:1084px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:768px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:540px)">
                    <source srcset="http://placehold.it/204x204/2F2F2F/171717" media="(min-width:0)">
                    <img srcset="http://placehold.it/277x277/2F2F2F/171717" src="http://placehold.it/277x277/2F2F2F/171717" alt="Placeholder image">
                </picture>
                <div>
                    <h3 class="c-heading">Heading</h3>
                    <p class="c-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo tincidunt, mattis dui non, ultrices massa. Nulla eleifend, eros sed laoreet auctor, turpis purus aliquet ligula, sit amet facilisis enim dolor nec nisl. Aliquam
                        erat volutpat.</p>
                    <div class="c-price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
                        <span>Starting at&nbsp;</span>
                        <meta itemprop="priceCurrency" content="USD">
                        <span>$</span>
                        <span itemprop="price">1,000</span>
                        <link itemprop="availability" href="http://schema.org/InStock">
                    </div>
                    <div class="c-rating" data-value="3" data-max="5" itemscope itemtype="https://schema.org/AggregateRating">
                        <p class="x-screen-reader">Community rating:
                            <span itemprop="ratingValue">3</span>/
                            <span itemprop="bestRating">5</span>
                        </p>
                        <div></div>
                    </div>
                    <div>
                        <a href="#" class="c-call-to-action c-glyph" aria-label="More verbose call to action text">
                            <span>CALL TO ACTION</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<!--
 <div class="row">

    <div class="col-md-4 market-update-gd">
      <div class="row market-update-block clr-block-1">
        <div class="col-md-8 market-update-left">
          <h3 >+23%</h3>
          <h4>increased usage</h4>
          <p>time for some more <button class="btn btn-sm btn-outline-danger">BANDWIDTH</button></p>
          <a href="#/package" class='button pulse-button' style="color: white;">offer</a>
        </div>
        
        <div class="col-md-4 market-update-right">
          <i class="fa fa-tachometer"> </i>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>

        <div class="col-md-4 market-update-gd">
      <div class="row market-update-block clr-block-2">
        <div class="col-md-8 market-update-left">
          <h3 style="color: white;">2</h3>
          <h4>unusual events</h4>
          <p><a >Check your <button class="btn btn-sm btn-outline-primary">SAFTEY</button> recomendations</a></p>
        </div>
        <div class="col-md-4 market-update-right">
          <i class="fa fa-eye"> </i>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>

        <div class="col-md-4 market-update-gd">
      <div class="row market-update-block clr-block-3">
        <div class="col-md-8 market-update-left">
          <h3>97.3%</h3>
          <h4>reliability</h4>
          <p>above average re-connections, ask <button class="btn btn-sm btn-outline-warning">T-BOT</button> to take a look</p>
        </div>
        <div class="col-md-4 market-update-right">
          <i class="fa fa-signal"> </i>
        </div>
        <div class="clearfix"> </div>
      </div>
    </div>
  </div>

<div class="row" style="margin-top: 2em">
     <div class="cols-grids">

    </div>
</div>

  <div class="row">
    <div class="col-md-1"></div>
    <Profile/>
    <div class="col-md-1"/>
    <Table2/>
    </div>
    
</div>
-->
</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Chart from './Chart.vue'
import Profile from './Profile.vue'
import Table2 from './Table2.vue'

/*
 var icons = new Skycons({"color": "#fff"}),
    list  = [
    "clear-night", "partly-cloudy-day",
    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
    "fog"
    ],
    i;

  for(i = list.length; i--; )
  icons.set(list[i], list[i]);

  icons.play();
*/


export default {
  name: 'hello',
  components : {Chart, Profile, Table2},
  computed: {
    initSeries : function() {
      return [{
              name: 'COnnected Devices',
              data: [13, 13, 46, 61, 23,12, 24, 16, 14, 12, 12, 24, 19, 13, 11, 11, 14, 11, 11, 11, 11, 13, 22, 10, 18, 15, 24, 31, 19, 10]
          }, {
              name: '% Utilised',
              color: '#111',
              type: 'line',
              data: [52, 41, 58, 63, 55, 46, 45, 41, 38, 54, 50, 39, 48, 70, 63, 60, 58, 63, 83, 89, 83, 79, 83, {
                      y: 100,
                      marker: {symbol: 'diamond'}
                  }, 100, 100, 52, 46, 83, 89]
          }];
    },
    ...mapState({
      count: 'count'
    })
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body, html {
  height: 100%;
  background: #fff;
}

.pulse-button {
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: 60px;
  margin-top: -60px;
  display: block;
  width: 120px;
  height: 50px;
  font-size: 1.2em;
  font-weight: light;
  font-family: 'Trebuchet MS', sans-serif;
  text-transform: uppercase;
  text-align: center;
  line-height: 50px;
  letter-spacing: -1px;
  color: white;
  border: none;
  border-radius: 10px;
  background: red;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(red, .5);
  animation: pulse 1.5s infinite;
}
.pulse-button:hover {
  animation: none;
}

@keyframes pulse {
  0% {
    transform:scale(.9);
  }
  70% {
    transform:scale(1);
    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
  }
    100% {
    transform:scale(.9);
    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
  }
}

.cols-grids {
    padding: 0em 0em;
}
.cols-grids h2 {

    font-size: 2em;
    color: #68AE00;
    margin-bottom: 1em;
    font-family: 'Carrois Gothic', sans-serif;
}

.market-update-block {
    padding: 2em 2em;
    background: #999;
}
.market-update-block h3 {
    color: #fff;
    font-size: 2.5em;
    font-family: 'Carrois Gothic', sans-serif;
}
.market-update-block h4 {
	font-size: 1.2em;
    color: #fff;
    margin: 0.3em 0em;
   font-family: 'Carrois Gothic', sans-serif;
}
.market-update-block p {
    color: #fff;
    font-size: 0.8em;
    line-height: 1.8em;
}
.market-update-block.clr-block-1 {
    background: #68ae00;
    margin-right: 0.8em;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.market-update-block.clr-block-2 {
    background:#FC8213;
    margin-right: 0.8em;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}
.market-update-block.clr-block-3 {
    background:#337AB7;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
}

.market-update-right i.fa.fa-tachometer  {
    font-size: 3em;
    color:#68AE00;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius:49px;
    -o-border-radius:49px;
    line-height: 1.7em;
}
.market-update-right i.fa.fa-eye {
     font-size: 3em;
    color:#FC8213;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius:49px;
    -o-border-radius:49px;
    line-height: 1.7em;
}
.market-update-right i.fa.fa-signal {
     font-size:3em;
    color:#337AB7;
    width: 80px;
    height: 80px;
    background: #fff;
    text-align: center;
    border-radius: 49px;
    -webkit-border-radius: 49px;
    -moz-border-radius:49px;
    -o-border-radius:49px;
    line-height: 1.7em;
}
.market-update-left {
    padding: 0px;
}


/*--climate start here--*/
.climate-grid1 {
  /*  background: url(../images/climate.jpg)no-repeat; */
    min-height:375px;
    background-size: cover;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15);
}
.climate-gd1top-left h4 {
    font-size: 1.2em;
    color: #fff;
    margin-bottom: 0.5em;
        font-family: 'Carrois Gothic', sans-serif;
}
.climate-gd1top-left h3 {
    font-size: 2em;
    color:#FC8213;
    margin-bottom: 0.5em;
    font-family: 'Carrois Gothic', sans-serif;
}
.climate-gd1top-left p {
    font-size: 1em;
    color: #fff;
    line-height: 2em;
}
.climate-gd1top-right{
	font-size: 1em;
    color: #fff;
    line-height: 2em;
}
.climate-gd1-top {
    padding: 1em 1em;
    margin-bottom:1.6em;
}
.climate-gd1-bottom {
    padding: 1em 0em;
    background:rgba(252, 130, 19, 0.86);
}
.cloudy1 h4 {
    font-size: 1em;
    color: #fff;
    margin-bottom: 0.5em;
}
.cloudy1 {
    text-align: center;
}
i.fa.fa-cloud {
    color: #fff;
    font-size: 2.5em;
    margin: 0.2em 0em 0.2em 0em;
}
.cloudy1 h3 {
    font-size: 1.2em;
    color: #fff;
}
span.timein-pms {
    font-size: 0.4em;
    vertical-align: top;
    color: #fff;
}
span.clime-icon {
    display: block;
    margin-bottom: 0.3em;
}
.climate-grid2 {
   /* background: url(../images/shoppy.jpg)no-repeat bottom; */
    min-height:310px;
    background-size: cover;
    position:relative;
}
.shoppy {
    padding: 1.4em 1em;
    background: #fff;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15);
}
.climate-grid2 ul {
    position: absolute;
    bottom: -10px;
    right: 0px;
    list-style: none;
}
.climate-grid2 ul li {
    display: inline-block;
    margin-right: 0.5em;
}
.climate-grid2 ul li i.fa.fa-credit-card {
    width: 35px;
    height: 30px;
    display: inline-block;
    background: #337AB7;
    font-size: 1em;
    color: #FFFFFF;
    line-height: 2em;
    text-align: center;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius:4px;
    -o-border-radius:4px;
}
.climate-grid2 ul li i.fa.fa-credit-card:hover {
	 background: #ec8526;
}
.climate-grid2 ul li i.fa.fa-usd {
    width: 35px;
    height: 30px;
    display: inline-block;
    background: #337AB7;
    font-size: 1em;
    color: #fff;
    line-height: 2em;
    text-align: center;
    border-radius: 4px;
}
.climate-grid2 ul li i.fa.fa-usd:hover {
	background: #ec8526;
}
</style>
