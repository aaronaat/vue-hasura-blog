<template>
  <div class="hello">
    <ApolloQuery :query="require('.../graphql/getPosts.gql')" :variables="{limit: 1}">
      <template slot-scope="{result: {data, error, loading}}">

    <ul>

      <div v-if="$apollo.loading">Loading...</div>

      <li v-for="post in posts" :key="post.id">
        {{post.title}}
        <hr/>
        {{post.content}}    
        <hr/>
        {{post.id}}
      </li>

    </ul>
      </template>
      </ApolloQuery>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'HelloWorld',
  data(){
    return {
      loading: 0,
      posts: []
    }
  },
  apollo: {
    posts: {
      query: gql`
        query getPosts($limit: Int) {
          posts(limit: $limit) {
            content
            title
            id
          }
        }
      `,
      update(data){
        console.log("Updated", data)
        return data.posts
      },
      variables(){
        return {
          limit: 2
        }
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
