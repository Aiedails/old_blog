<template>
  <main_team :width="this.width"></main_team>
</template>

<script>
// @ is an alias to /src
import main_team from "../components/main_team";

export default {
  name: "Home",
  components: {
    main_team,
  },
  data: () => ({
    width: 1300,
  }),
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.width = window.innerWidth; //While nav-bar collapses, let the v-main go up.
      if (this.width <= 1264)
        document.getElementById("main").style.top = "-110px";
      else document.getElementById("main").style.top = "0px";
      console.log(this.width);
    },
  },
};
</script>
