<template>
  <div class="MessageCartSearch">
    <Search
      placeholder="Search..."
    />
  </div>
</template>

<script>
import Input from "./Input.vue"
import Search from "../Common/Search.vue"

export default {
  name: 'MessageCartSearch',
  components: { Search },
  data () {
    return {}
  },
  methods: {
    search(text){

    }
  }
}
</script>
