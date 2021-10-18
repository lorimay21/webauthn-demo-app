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
import SideNav from "@/components/SideNav";

export default {
  created() {
    // Render top page
    this.$router.push({ name: "top" });
  },
  components: {
    SideNav,
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
