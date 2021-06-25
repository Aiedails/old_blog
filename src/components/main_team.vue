<template>
  <div style="padding: 0; margin: 0">
    <v-skeleton-loader
      v-show="firstload"
      type="image, article"
    ></v-skeleton-loader>
    <v-card
      v-ripple="{ class: `error--text` }"
      hover
      id="description"
      v-intersect="onIntersect"
      v-show="!firstload"
    >
      <!-- This `v-intersect` is used to emit the signal "You can see me!" -->
      <v-img src="@/assets/home_page.jpg">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <v-row style="margin-top: 16px">
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-skeleton-loader
          v-show="firstload"
          type="image, article"
        ></v-skeleton-loader>
        <v-card
          v-show="!firstload"
          v-ripple="{ class: `error--text` }"
          hover
          to="/record/arch.log"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
        >
          <v-card-title>arch.log</v-card-title>
          <v-card-subtitle style="padding-bottom: 0"
            >A cheatsheet for my self</v-card-subtitle
          >
          <v-container class="chip_container">
            <v-chip small outlined color="blue" class="chip">record</v-chip>
            <v-chip small outlined color="orange" class="chip">updating</v-chip>
          </v-container>
          <v-container class="description_cont">
            <v-card-text style="padding-top: 8; padding-left: 0"
              >由于某种令人非常气恼的原因，被迫把装arch与恢复环境练习的非常熟练，不如借此机会记录一下</v-card-text
            >
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-skeleton-loader
          v-show="firstload"
          type="image, article"
        ></v-skeleton-loader>
        <v-card
          v-show="!firstload"
          v-ripple="{ class: `error--text` }"
          hover
          to="/record/igemwiki.log"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
        >
          <v-card-title>igemwiki.log</v-card-title>
          <v-card-subtitle style="padding-bottom: 0"
            >cheatsheet & something want to say</v-card-subtitle
          >
          <v-container class="chip_container">
            <v-chip small outlined color="blue" class="chip">record</v-chip>
            <v-chip small outlined color="orange" class="chip">updating</v-chip>
          </v-container>
          <v-container class="description_cont">
            <v-card-text style="padding-top: 8; padding-left: 0"
              >无论如何也算是自己做的第一个大项目以及第一个加入的大团队，希望能给自己留下一些有价值的东西</v-card-text
            >
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-skeleton-loader
          v-show="firstload"
          type="image, article"
        ></v-skeleton-loader>
        <v-card
          v-show="!firstload"
          v-ripple="{ class: `error--text` }"
          hover
          to="/essay/star"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
        >
          <v-img src="@/assets/neri.jpg">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>爱，快乐，与活着</v-card-title>
          <v-card-subtitle style="padding-bottom: 0"
            >《星空列车与白的旅行》观后感</v-card-subtitle
          >
          <v-container class="chip_container">
            <v-chip small outlined color="blue" class="chip">essay</v-chip>
          </v-container>
          <v-container class="description_cont">
            <v-card-text style="padding-top: 8; padding-left: 0"
              >“......我将踏上一段愉快的旅程。<br />与你一同的旅程......<br />无论何时......都与你一起......”</v-card-text
            >
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!-- new artical add here -->
    <!-- The back-to btn, use the `istop` to judge show or not. -->
    <v-container>
      <v-fab-transition>
        <v-btn
          v-show="!istop"
          id="backtobtn"
          dark
          fab
          large
          fixed
          right
          bottom
          class="primary"
          @click="$vuetify.goTo(0, options)"
          sytle="position: fixed;"
        >
          <v-icon> mdi-chevron-up </v-icon>
        </v-btn>
      </v-fab-transition>
    </v-container>
  </div>
</template>

<script>
//import { gsap } from "gsap"
//uncomment this line to use gsap in this components
//I recommend just to use gsap saperately, not gloably.
//So use VueMotion in simple animate and gsap for more complex one.

export default {
  name: "main_team",
  props: {
    width: Number,
  },
  emits: {
    isseen: Boolean,
  },

  data: () => ({
    pos: 1, //used for v-stepper
    isIntersecting: false,
    istop: true,
    firstload: true, //used for skeleton loader.
    options: {
      //used for the $vuetify.goto() func.
      duration: 400,
      offset: 0,
      easing: "easeInQuad",
    },
  }),
  methods: {
    onIntersect(entries) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
      console.log(this.isIntersecting);
      this.istop = this.isIntersecting;
    },
  },
  mounted() {
    setTimeout(() => {
      this.firstload = false;
    }, 500);
  },
};
</script>

<style lang="scss">
#backtobtn {
  position: fixed;
}
a {
  text-decoration: none;
}
.postcard {
  margin-bottom: 35px;
  font-family: "Ma Shan Zheng", cursive;
}
.ch {
  font-family: FangSong;
}
#title {
  font-size: 2rem;
  font-family: "Ma Shan Zheng", cursive;
  padding-top: 0;
}
.chip_container {
  padding-top: 0;
  padding-bottom: 0;
}
.chip {
  margin: 0 4px;
}
.description_cont {
  margin-left: 16px;
  padding: 0 16px;
}
</style>