<template>
  <v-ons-splitter>
    <v-ons-splitter-content>
      <v-ons-navigator
        swipeable
        swipe-target-width="50px"
        :page-stack="pageStack"
        :options="navOptions"
      ></v-ons-navigator>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import { initJsStore } from "@/service/idb_service";

export default {
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();

      if (isDbCreated) {
        console.log("Database has been created");
      } else {
        console.log("Database has been opened");
      }
    } catch (error) {
      // IndexDB not supported
      console.log(error);

      this.$ons.notification.alert({
        title: "",
        messageHTML: '<center><font size="2">Database Problem</font></center>',
        animation: "fade",
      });
    }
  },
  created() {
    // Render top page
    this.$router.push({ name: "top" });
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    navOptions() {
      return this.$store.state.navigator.options;
    },
  },
};
</script>
