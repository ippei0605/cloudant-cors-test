<template>
  <div class="hello">
    <h1>Cloudant</h1>
    <button @click="list">List</button>
    <hr>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import PouchDB from 'pouchdb-browser';

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      };
    },
    methods: {
      list () {
        const db = new PouchDB('https://27974bb1-84f7-4d8f-8444-1cc4caea91c1-bluemix:dfbe04d545c0aad8aff0e3c1f49943a2e4927e15c6470aefc661c8cca11c7bd8@27974bb1-84f7-4d8f-8444-1cc4caea91c1-bluemix.cloudant.com/alice');
        db.allDocs({include_docs: true})
          .then(v => {
            console.log(v);
          })
          .catch(e => {
            console.log('error:', e.stack);
          });
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
