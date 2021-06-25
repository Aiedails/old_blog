<template>
  <v-app dark style="background-color: #ebecee" id="app">
    <navbar v-resize="onResize" :width="this.width"></navbar>
    <v-main id="main">
      <v-row justify="center" style="margin: auto 2%">
        <v-col cols="12" xs="12" sm="12" md="12" lg="10">
          <router-view></router-view>
        </v-col>
        <v-col cols="2" v-show="width >= 1264">
          <rightlist></rightlist>
        </v-col>
      </v-row>
    </v-main>
    <temfooter></temfooter>
  </v-app>
</template>

<script>
import navbar from "./components/navbar";
import temfooter from "./components/teamfooter";
import rightlist from "./components/right_list";
//import { Sample } from "./queries/sample"

export default {
  name: "App",

  //  apollo: {
  //    repository: Sample
  //  },

  components: {
    navbar,
    temfooter,
    rightlist,
  },

  data: () => ({
    width: 1300,
    istop: true,
    firstload: true,
    //    repository: [],
  }),
  mounted() {
    this.onResize();
    setTimeout(() => {
      this.firstload = false;
    }, 500);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth; //While nav-bar collapses, let the v-main go up.
      if (this.width <= 1264)
        document.getElementById("main").style.top = "-110px";
      else document.getElementById("main").style.top = "0px";
    },
  },
};
</script>

<style>
#main {
  position: relative;
  top: 0px;
}
#content {
  width: auto;
  margin: 0;
  padding: 0;
}
#top_title {
  display: none;
}
#globalWrapper {
  padding: 0;
}
p {
  margin: 0;
}
</style>