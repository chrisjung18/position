<template>
  <div id="main-section">
    <div class="title-to-page">
      <span class="title cursor-pointer" @click.stop="redirect(routeName)">{{ title }}</span>
      <div class="to-page" @click.stop="redirect(routeName)">
        <span>See all</span>
        <q-icon name="fas fa-arrow-right" size="16px" />
      </div>
    </div>
    <div class="line"></div>
    <slot>

    </slot>
  </div>
</template>

<script>
import { redirect } from 'src/mixins';

export default {
  name: 'SectionComponent',
  mixins: [ redirect ],
  props:{
    title: { type: String },
    routeName: { type: String }
  },
  data () {
    return {

    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  #main-section{
    position: relative;

    &:nth-child(n):not(:first-child){
      margin-top: 2rem;
    }

    .line{
      width: 5rem;
      height: 3px;
      background: var(--q-positive);
      position: absolute;
      top: 2.3rem;
      border-radius: 20px;
    }

    .title-to-page{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      .title{
        font-size: 1.2rem;
        font-weight: 500;
      }

      .to-page{
        display: flex;
        align-items: center;
        color: var(--q-subText);
        cursor: pointer;

        span{
          margin-right: .5rem;
          font-weight: 500;
          font-size: .85rem;
          transition: .3s all ease-in-out;
        }
        .q-icon{
          transition: .3s all ease-in-out;
        }

        &:hover{
          span{
            color: white !important;
            transition: .3s all ease-in-out;
          }
          .q-icon{
            color: var(--q-positive);
            transition: .3s all ease-in-out;
          }
        }
      }
    }
  }

  @media only screen and (max-width: "600px"){
      .title-to-page{
        .title{
          font-size: 1.3rem !important;
          font-weight: 700 !important;
          opacity: .9;
        }
      }
    }
</style>
