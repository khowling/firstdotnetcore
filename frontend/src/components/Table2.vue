<template>
<div class="col-md-4 stats-info">
        <div class="panel-heading">
            <h4 class="panel-title">Your Stats his month</h4>
        </div>
        <div class="panel-body">
            <ul class="list-unstyled">
                <li>Broadband usage<div class="text-success pull-right">23%<i class="fa fa-level-up"></i></div></li>
                <li>Domestic Phone calls<div class="text-success pull-right">15%<i class="fa fa-level-up"></i></div></li>
                <li>Long-distance Phone calls<div class="text-success pull-right">18%<i class="fa fa-level-up"></i></div></li>
                <li>Live TV<div class="text-danger pull-right">17%<i class="fa fa-level-down"></i></div></li>
                <li  class="last">Video On Demand<div class="text-danger pull-right">10%<i class="fa fa-level-down"></i></div></li>
            </ul>

            <div class="row popular-brand">
				<div class="col-md-6 popular-bran-left">
				     <h3>Recommended</h3>
				     <h4>Maximise your plan</h4>
				     <p> Get the most from your TV.</p>
				</div>
				<div class="col-md-6 popular-bran-right">
					<h3>TV Time</h3>
				</div>
			  <div class="clearfix"> </div>
			</div>

        </div>
    </div>
</template>


<style scoped>

.popular-brand {
    margin-top: 30px;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.15);
}

.popular-bran-left {
    background: #fff;
    padding: 2em 1em;
}
.popular-bran-left h3 {
    font-size: 1.2em;
    color: #68AE00;
    margin-bottom: 0.2em;
    font-family: 'Carrois Gothic', sans-serif;
}
.popular-bran-left h4 {
    font-size: 0.9em;
    color: #FC8213;
}
.popular-bran-left p {
    font-size: 1em;
    color: #000;
    margin-top: 1.3em;
    line-height: 1.5em;
}
.popular-bran-right {
    background: #FC8213;
    padding: 3em 1em;
}
.popular-bran-right h3 {
    font-size: 1.05em;
    color: #fff;
    width: 77px;
    height: 77px;
    margin: 0 auto;
    line-height: 4.0em;
    border-radius: 65px;
    -webkit-border-radius: 65px;
    -moz-border-radius: 65px;
    -o-border-radius: 65px;
    border: 3px solid #fff;
    font-family: 'Carrois Gothic', sans-serif;
}


.panel-heading {
    padding: 32px 15px 0px;
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}
.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}
.panel-title {
    font-size: 20px;
}
.stats-info ul {
    margin: 0;
}
.panel-body {
    padding: 15px;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
bootstrap.min.css:5
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.stats-info ul li {
    border-bottom: 1px solid #eee;
    padding: 12px 0;
    font-size: 0.85em;
    color: #999;
}
.float-right, .pull-right {
    float: right!important;
}
style.css:748
.text-success {
    color: #22BAA0;
}
.font-red, .has-error .help-block, .parsley-required, .text-danger {
    color: #F44336 !important;
}
</style>