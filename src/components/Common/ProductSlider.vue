<template>
  <div>
    <q-carousel
      animated
      :ripple="false"
      :autoplay="autoplay"
      v-model="slide"
      :dense="dense"
      :navigation="navigation"
      :infinite="infinite"
      :arrows="arrows"
      :transition-prev="transPrev"
      :transition-next="transNext"
      :swipeable="swipeable"
      :prev-icon="prevIcon"
      :next-icon="nextIcon"
      :navigation-position="navPosition"
      :thumbnails="thumbnails"
      :navigation-active-icon="navActiveIcon"
      :position="position"
      :height="height"
      :control-color="controlColor"
      :control-type="controlType"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      @transition="onTransition"
      class="carousel"
    >
      <q-carousel-slide
        v-for="(item, index) in items"
        :name="index"
        class="slide relative"
        :key="index"
      >
        <div class="contain">
          <!-- <div class="title-desc">
            <p class="title">{{ item.title }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div> -->
          <q-img
            src="https://images.pexels.com/photos/1202130/pexels-photo-1202130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            style="object-fit: cover; width: 100%; height: 100%"
          />
        </div>
        <div class="actions absolute">
          <Button
            bname="explore"
            background="var(--q-positive)"
            class="button"
            radius="5px"
            fSize="13px"
            fWeight="500"
            :H="$q.screen.lt.sm ? '2.2rem' : '2.5rem'"
            :W="$q.screen.lt.sm ? '4rem' : '8rem'"
          />
        </div>
      </q-carousel-slide>
      <q-carousel-control class="carousel-control">
        <q-icon
          size="25px"
          name="eva-arrow-circle-left-outline"
          @click="previousSlide"
          class="btn cursor-pointer"
        />
        <q-icon
          size="25px"
          name="eva-arrow-circle-right-outline"
          @click="nextSlide"
          class="btn cursor-pointer"
        />
      </q-carousel-control>
    </q-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Button from "./Button.vue"

export default {
  name: 'ProductSlider',
  components: { Button },
  props: {
    navigation: { type: Boolean },
    arrows: { type: Boolean },
    swipeable: { type: Boolean },
    infinite: { type: Boolean },
    dense: { type: Boolean },
    thumbnails: { type: Boolean },
    transPrev: { type: String },
    transNext: { type: String },
    items: { type: Array },
    prevIcon: { type: String },
    nextIcon: { type: String },
    height: { type: String },
    prevIcon: { type: String },
    nextIcon: { type: String },
    navPosition: { type: String },
    navActiveIcon: { type: String },
    position: { type: String },
    controlColor: { type: String },
    controlType: { type: String },
    items: { type: Array || Object }
  },
  data () {
    return {
      slide: 0,
      toOpen: {},
      open: false,
      autoplay: true,
      expand: false,
    }
  },
  mouted(){
    previousSlide()
    nextSlide()
  },
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    onTransition(){

    },
    previousSlide(oldVal, newVal){
      console.log("PREVIOUS OLD: ", oldVal),
      console.log("PREVIOUS NEW: ", newVal)
    },
    nextSlide(oldVal, newVal){
      console.log("NEXT OLD: ", oldVal),
      console.log("NEXT NEW: ", newVal)
    },
  }
}
</script>

<style lang="scss" scoped>
  .carousel{
    height: auto;
    width: 100%;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.727), var(--q-primary));
    box-shadow: 0 0 7px 0 rgba(82, 82, 82, 0.095);
    border-radius: 12px;
    position: relative;
    // padding: 1rem 2rem;

    .carousel-control{
      z-index: 99999999;
      position: absolute !important;
      .btn{
        transition: .3s all ease-in-out;
        margin-left: 6px;

        &:hover{
          transition: .3s all ease-in-out;
          color: var(--q-positive) !important
        }
      }
    }

    .slide{
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;

      .contain{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        // padding: 2rem 4rem;
        color: white;
        background: red;
      }

      .actions{
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 2rem;
        margin-left: 5rem;

      }
    }
  }
    @media screen and (max-width: "900px"){
    .carousel{
      .slide{
        .contain{
          .title-desc{
            flex-direction: column;
            justify-content: center !important;
            align-items: center !important;
            .title{
              text-align: center;
              line-height: 45px;
            }
            .desc{
              color: var(--q-subText) !important;
              font-size: 16px;
              font-weight: 500;
              text-align: justify;
            }
          }
          .actions{
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: "720px"){
    .carousel{
      padding: 0;
      .slide{
        position: relative;

        .contain{
          padding: 0rem 2rem;
          .title-desc{
            .title{
              font-size: 1.7rem !important;
              line-height: 35px;
            }
            .desc{
              font-size: 15px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
</style>
