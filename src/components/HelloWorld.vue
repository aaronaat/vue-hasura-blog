<template>
  <div class="hello">
    <ul>

      <div v-if="loading">Loading...</div>

      <li v-for="post in posts" :key="post.id">
        {{post.title}}
        <hr/>
        {{post.content}}    
        <hr/>
        {{post.id}}
      </li>

    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'HelloWorld',
  data(){
    return {
      posts: []
    }
  },
  apollo: {
    getPosts: {
      query: gql`
        query {
          posts {
            content
            title
            id
          }
        }
      `,
      result({data}){
        this.posts = data.posts
      }
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
