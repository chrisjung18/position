<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'NotificationComponent',
  props:{
    openNotif: {type: Boolean},
    options: {type: Object, required: true,},
    progress:{type: Boolean, default: true},
    timeout:{type: Number, default: 2500},
  },
  data () {
    return {}
  },
  watch: {
    openNotif(val){
      if(val) this.setNotif()
    }
  },
  methods: {
    setNotif(){
      this.$q.notify({
        type: this.options.type,
        color: this.options.color,
        message: this.options.message,
        position: this.options.position,
        progress: this.progress,
        timeout: this.timeout
      })
    }
  }
}
</script>
