<template>
<div class="col-md-4 chart-layer1-right" style="margin-top: 50px;" > 
    <div class="user-marorm">
        <div class="malorum-top">				
        </div>
        <div class="profile-bottom">
            <span class="malorum-pro"> </span>
                
                <h2 >Dina Smith</h2>
            <p>Important to me is, Staying safe online, watching the latest movies, Staying connected</p>
            <ul class="malorum-icons">
                <li><a href="#"><i style="font-size: 2em" class="fa fa-volume-control-phone"> </i>
                </a></li>
                <li><a href="#"><i style="font-size: 3em" class="fa fa-mobile"> </i>
                </a></li>
                <li><a href="#"><i style="font-size: 2em" class="fa fa-tv"> </i>
                </a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>
.profile-bottom ul li {
    display: inline-block;
    margin-right: 10px;
}

@media (max-width: 1280px) { span.malorum-pro {
    left: 190px;
}}
@media (max-width: 1440px) {
span.malorum-pro {
    left: 225px;
}}

.user-marorm {
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15);
}

.malorum-top {
    background: url(../../static/images/1.jpg)no-repeat;
    background-size: cover;
    min-height: 190px;
}
.profile-bottom {
    padding: 1.5em 1em 1.5em 1em;
    position: relative;
    background: #fff;
}

.profile-bottom p {
    font-size: 1em;
    color: #000;
    line-height: 1.8em;
    text-align: center;
    width: 70%;
    margin: 0 auto;
}

.profile-bottom ul {
    list-style: none;
    padding: 0px;
    text-align: center;
    margin-top: 1em;
}
.profile-bottom h2 {
    font-size: 1.5em;
    color: #68AE00;
    text-align: center;
    margin-bottom: 0.5em;
    font-family: 'Carrois Gothic', sans-serif;
}

span.malorum-pro {
    background: url(../../static/images/b3.png)no-repeat;
    width: 95px;
    height: 95px;
    display: inline-block;
    position: absolute;
    top: -60px;
    left: 265px;
    border: 2px solid #ccc;
    border-radius: 63px;
    -webkit-border-radius: 63px;
    -moz-border-radius: 63px;
    -o-border-radius: 63px;
}
</style>