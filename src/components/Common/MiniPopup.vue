<template>
  <div class="popup">
    <q-list class="rounded-borders text-white">
      <q-scroll-area
        class="scroll-area bg-transparent text-info"
        :vertical-bar-style="barStyle"
        :vertical-thumb-style="thumbStyle"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="items"
        >
          <q-item
            class="item"
            dense
          >
            <span class="link-name">{{ item }}</span>
          </q-item>
        </div>
      </q-scroll-area>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'MiniPopup',
  props: {
    data: { type: Array }
  },
  data () {
    return {
      barStyle: {
        borderRadius: '10px',
        background: 'var(--q-positive-bg)',
        opacity: 0.3,
        padding: '0',
        width: '8px',
      },
      thumbStyle: {
        borderRadius: '5px',
        background: 'var(--q-positive)',
        opacity: 0.7,
        width: '8px',
        height: '0.5rem !important'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup{
    width: 8rem;
    height: 9rem;
    max-height: 10rem;
    display: flex;
    align-items: center;
    background: var(--q-search);
    border-radius: 15px;
    padding: 1rem;
    transition: .5s all ease-in-out;
    flex-wrap: nowrap;
    overflow:auto;

    .scroll-area{
      height: 23rem;
      width: inherit;

      .item{
        color: var(--q-subText);
        font-weight: 400;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: .3s all ease-in-out;
        margin-top: 12px;

        .link-icon{
          transition: .3s all ease-in-out;
        }

        &:hover{
          transition: .3s all ease-in-out;
          color: white;
          .link-icon{
            color: var(--q-positive);
          }
        }

        .link-name{
          transition: .3s all ease-in-out;
          font-size: 16px;
          margin-left: .8rem;
        }
      }

      .expand-pages{
        .q-expansion-item{
          transition: .3s all ease-in-out;
          font-size: 16px;

          &:hover{
            transition: .3s all ease-in-out;
            color: var(--q-positive);
          }
          .q-item{
            // background: red;
            margin: 0 0 0 .5rem;
            padding-top: 0;
            padding-bottom: 0;

            &::before{
              content: "";
              width: 4px;
              height: 4px;
              background: var(--q-positive);
              border-radius: 50%;
              margin-right: 1rem;
            }
            &:hover{
              color: var(--q-positive);
            }
          }
        }
      }
    }
  }
</style>
