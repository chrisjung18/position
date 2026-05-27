<template>
  <div class="main">
    <Input
      @updated="search"
      :placeholder="placeholder"
      :width="width"
      :background="background"
      :autofocus="autofocus"
    />
  </div>
</template>

<script>
import Input from './Input.vue';

export default {
  name: 'Search',
  components: { Input },
  props: {
    placeholder: { type: String, default: "" },
    background: { type: String },
    width: { type: String },
    autofocus: { type: Boolean },
  },
  methods: {
    search(text){
      this.$emit('search', text)
    }
  }
}
</script>
