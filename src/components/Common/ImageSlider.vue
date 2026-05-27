<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      :navigation="navigation"
      :infinite="infinite"
      :autoplay="autoplay"
      :arrows="arrows"
      :transition-prev="transPrev"
      :transition-next="transNext"
      :swipeable="swipeable"
      :prev-icon="prevIcon"
      :next-icon="nextIcon"
      :navigation-position="navPosition"
      :thumbnails="thumbnails"
      :navigation-active-icon="navActiveIcon"
      :height="height"
      :width="width"
      :control-color="controlColor"
      :control-type="controlType"
      class="carousel"
      :style="{borderRadius: radius, width: width}"
    >
      <q-carousel-slide
        v-for="(image, index) in images"
        :key="index"
        :name="index"
        class="slide"
        :img-src="image"
      />
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    navigation: { type: Boolean },
    autoplay: { type: Boolean },
    arrows: { type: Boolean },
    swipeable: { type: Boolean },
    infinite: { type: Boolean },
    thumbnails: { type: Boolean },
    transPrev: { type: String },
    transNext: { type: String },
    prevIcon: { type: String },
    nextIcon: { type: String },
    images: { type: Array },
    height: { type: String },
    width: { type: String, default: "100%" },
    radius: { type: String },
    navPosition: { type: String },
    navActiveIcon: { type: String },
    controlColor: { type: String },
    controlType: { type: String }
  },
  data () {
    return {
      slide: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .carousel{
    width: 100%;

    .slide{
      height: auto;
      width: inherit;
    }
  }
</style>

