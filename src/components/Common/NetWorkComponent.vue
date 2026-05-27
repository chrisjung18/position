<template>
  <div>
    <Modal
      Flat
      dense
      persistent
      radius="10px"
      modalH="12rem"
      modalW="18rem"
      headerDisplay="none"
      transShow="scale"
      background="var(--q-search)"
      :openModal="state"
      class="modal"
    >
      <div class="body full-width flex items-center column">
        <q-icon name="eva-wifi-off" color="positive" size="3rem" style="margin-top: -.3rem;" />
        <div class="text flex column full-width">
          <span class="text-center text-bold q-mt-sm text-subtitle1" style="line-height: 22px;"> You are offline </span>
          <span class="text-center q-mt-sm text-subtitle2" style="line-height: 22px;"> Verify your internet connection </span>
        </div>
        <div class="action flex full-width justify-end items-center q-mt-lg">
          <Button bname="Ok" background="var(--q-positive)" w="4rem" h="2rem" class="q-mr-sm" dense @clicked="state = false" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./ModalComponent.vue"
import Button from "./Button.vue"
import Notification from "components/Common/NotificationComponent.vue";
import {getAllReleases} from "src/APIs/releases";
import {getAllArtists} from "src/APIs/artists";
import {getAllCategories} from "src/APIs/categories";
import {getAllEvents} from "src/APIs/events";
import {getAllProducts} from "src/APIs/products";
import {getAllNews} from "src/APIs/news";

export default {
  name: "NetworkComponent",
  components: {Notification, Modal, Button },
  data() {
    return {
      state: false,
      isOnline: navigator.onLine, // in browser
      networkType: 'Unknown', // in mobile
    };
  },
  mounted() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  beforeDestroy() {
    // Clean up event listeners when the component is destroyed
    document.removeEventListener('deviceready', this.onDeviceReady);
    document.removeEventListener('online', this.updateNetworkStatus);
    document.removeEventListener('offline', this.updateNetworkStatus);

    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
  },
  methods: {
    onDeviceReady() {
      // Listen for network changes | Mobile
      document.addEventListener('online', this.updateNetworkStatus, false);
      document.addEventListener('offline', this.updateNetworkStatus, false);

      // Listen for network changes | Browser
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);

      // Get the initial network status
      this.updateNetworkStatus();
    },
    updateNetworkStatus() {
      const connection = navigator.connection || navigator.network.connection;
      const type = connection ? connection.type : 'unknown';

      const states = {};
      states[Connection.UNKNOWN]  = 'Unknown connection';
      states[Connection.ETHERNET] = 'Ethernet';
      states[Connection.WIFI]     = 'WiFi';
      states[Connection.CELL_2G]  = 'Cell 2G';
      states[Connection.CELL_3G]  = 'Cell 3G';
      states[Connection.CELL_4G]  = 'Cell 4G';
      states[Connection.CELL]     = 'Cellular';
      states[Connection.NONE]     = 'No connection';

      this.networkType = states[type] || 'Unknown';

      if (type === Connection.NONE) {
        this.state = true
      }
    },
    handleOnline() {
      this.state = false
    },
    handleOffline() {
      this.state = true;
    },
  },
  watch: {
    networkType(val){
      if(val !== "Unknown" || val !== "No connection" || val !== "Cellular" || val !== "Cell 2G"){
        this.state = false

        getAllReleases()
        getAllArtists()
        getAllCategories()
        getAllEvents()
        getAllProducts()
        getAllNews()
      }
      else{
        this.state = true

      }
    }
  }
};
</script>
