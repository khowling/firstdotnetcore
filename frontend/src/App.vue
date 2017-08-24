<template>

  <div id="app" class="container-fluid">
    
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <a class="navbar-brand" href="#">
      <img src="https://csbs.utah.edu/_images/websiteicon.png" width="30" height="30" alt="">
      Stay Connected
    </a>
      <!-- Navbar content -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      
    </nav>

    <div class="inner-block">
      <router-view transition-mode="out-in"></router-view>
    </div>
  </div>
</template>

<script>
import MyRouter from './components/MyRouter'

export default {
  name: 'app',
  components: {
    MyRouter
  }
}
</script>

<style>
h4, h5, h6,
h1, h2, h3 {margin: 0;}
ul, ol {margin: 0;}
p {margin: 0;}
html, body{
  font-family: 'Work Sans', sans-serif;
   font-size: 100%;
   background:#fff; 
}
a {
  text-decoration: none;
}
a:hover {
  transition: 0.5s all;
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  text-decoration:none;
}
.fixed{
	position: fixed;
	top: 0;
	 width:87%;
    margin: 0 auto;
	z-index: 1;
	background:#fff;
}
.inner-block {
    padding: 2em 2em 4em 2em;
    background: #fafafa;
}
</style>
