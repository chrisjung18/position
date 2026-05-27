import { useUserStore } from "src/stores/userStore";
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()


export const redirect = (name, params = {}) => {
  if(route.name !== name){
    router.push({name, params})
    return
  }
}