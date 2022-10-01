<template>
  <div class="home">
    <h1>{{title}}</h1>
    <button @click="updateTitle">Update</button>
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur consectetur doloremque sunt ducimus enim iure animi fugit nulla et! Perferendis autem deleniti quo eum corrupti reiciendis voluptatem ab ducimus?</p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import {useStore} from "vuex";

export default {
  setup() {
    const blogs = ref([
      { title: 'Why Coffee is Better than Tea', id: 1 },
      { title: '...Then I Took an Arrow in the Knee', id: 2 },
      { title: 'Mario vs Luigi, Ultimate Showdown', id: 3 },
    ])
    const store = useStore();

    let title = computed(() => {
      return store.state.compositionApiData.title;
    })

    const updateTitle = () => {
      store.commit("updateTitleComp", "My new title but COMPOSED");
    }

    return { 
      blogs,
      title,
      updateTitle
    }
  },
  methods: {
    /*updateTitle() {
      this.$store.commit("updateTitle", "My new title");//mutation name to be commited, new data
    }*/
  },
  computed: {
    /*title() {
      return this.$store.state.optionsApiDAta.title;
    }*/
  }

}
</script>
