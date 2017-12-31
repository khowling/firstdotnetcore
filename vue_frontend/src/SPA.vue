<template>
  <div>
  <!-- Accessibility requirement -->
  <a class="m-skip-to-main" href="#mainContent" tabindex="0">Skip to main content</a>

  <!-- Universal header -->

  <!-- Main page content should be wrapped with semantically meaningful html elements (e.g.: article, main) whenever possible. A div element can be used as long as it also contains a role="main" for Accessibility. -->
  <main id="mainContent" data-grid="container">
    <router-view transition-mode="out-in"></router-view>
  </main>

  <!-- Universal footer -->
  </div>
</template>

<script>
import Landing from './components/Landing'

export default {
  name: 'app',
  components: {
    Landing
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
