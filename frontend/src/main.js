// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex, { mapState } from 'vuex'

import App from './App'
import MyRouter from './components/MyRouter.vue'
import Package from './components/Package.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

/* 
Vuex provides a mechanism to "inject" the store into all child components from the root component
 with the store option (enabled by Vue.use(Vuex)):

 Now, you can access the state object as store.state, and trigger a state change with the store.commit method:
*/
Vue.use(Vuex)


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: MyRouter },
    { path: '/package', component: Package }
  ]
})



const store = new Vuex.Store({
  /* 
    single state tree - that is, this single object contains all your application level state  
    a componant can access state using : this.$store.state.count
  */
  state: {
    count: 0
  },
  /* 
    Getter: Think of them as computed properties for stores (Getters will receive the state as their 1st argument) 
    a getter's result is cached based on its dependencies
    Compoments can use "mapGetters" to map to its  'computed properties'
  */
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  /* 
    The only way to actually change state in a Vuex store is by committing a mutation
    You cannot directly call a mutation handler. Think of it more like event registration 
    To invoke a mutation handler, you need to call this.$store.commit('increment', 1)

    NOTE: When adding new properties to an Object, you should:
      state.obj = { ...state.obj, newProp: 123 }

    !!!Mutations Must Be Synchronous!!!
      
  */
  mutations: {
    /* actions are this.$store.dispatch */
    increment: (state, n = 1) =>  state.count+n
  },

  /* 
    Asynchronicity combined with state mutation can make your program very hard to reason about, so....
    Instead of mutating the state, actions commit mutations, Actions can contain arbitrary asynchronous operations

    EG: calling an async API and committing multiple mutations:

    you can call context.commit to commit a mutation

    Actions are triggered with the this.$store.dispatch('increment').then() method:

  */
  actions: {
    increment ({ commit }) {
      return new Promise((resolve, reject) => {        
        commit('increment')
      })
    }
  }
  
})


Vue.component('my-comp', {
  template: '<div> {{val}} </div>',
  /*
    Props - Readonly data down (props down, events up), ypu can bind props like v-bind:some-prop
  */
  props: ['propname'], /* v-bind:propname */
  /* 
    Properties and Methods
    !! data Must Be a Function in a component, 
  */
  data: function () { return ({
    val: "test"  /* v-model="val" (2-way binding) */
  })},
  /* Custom Actions/Events */
  methods: {
    fn1: function()  { /* v-on:click="fn1" */ 
      this.val = "new" /* (Vue instance proxies all the properties found in its data object)*/
    }
  },
  /* Computed Properties:
    Putting too much logic into your templates can make them bloated and hard to maintain,  
    the template is no longer simple and declarative, for any complex logic, you should use a "computed property"
    (define a getter function for the property "reversedMessage")
    You can data-bind to computed properties in templates just like a normal property
    computed properties are cached based on their dependencies 
  */
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.val.split('').reverse().join('')
    }
  },
  /* watch properties. When you have some data that needs to change based on some other data 
    it is often a better idea to use a computed property rather than an imperative watch callback
  */
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    }
  }

})

/* 
Every Vue application is bootstrapped by creating a "root" Vue instance, with options object
Each Vue instance proxies all the properties found in its data object
*/
var vm = new Vue({
    /* 
      By providing the "store" option to the root instance, 
        the store will be injected into all child components of the root and will be available on them as this.$store 
    */
    store,
    /*
      inject the router with the router option to make the whole app router-aware.
    */
    router,    
    /* 
      using the existing DOM as your template 
    */
    el: '#app',
    /* 
      JavaScript inline template strings
    */
    template: '<App/>',
    /* 
      Instead of Global, You can make a component available only in the scope this component by registering it with the components instance option 
    */
    components: { App },
    /* 
      Properties and Methods
      Each Vue instance proxies all the properties found in its data object (vm.val)
      (only these proxied properties are reactive, meaning any changes to their values will trigger the view to re-render)
      In addition to data properties, Vue instances expose a number of useful instance properties and methods (prefixed with "$")
    */
    data: { val: "hello world" },
    /* Lifecycle hooks */
    created: function () {
      // `this` points to the vm instance
      console.log('a is: ' + this.a)
    }
})
/*
In Vue, a component is essentially a Vue instance with "pre-defined" options
To register a global component, you can use Vue.component(tagName, options). 
Once registered, a component can be used in an instance’s template as a custom element <my-comp>
You can make a component available only in the scope of another instance/component by registering it with the components instance option:

*/

    

/*

single-file components with a .vue extension, made possible with build tools such as Webpack or Browserify.


*/


