<template>
  <v-container>
    <!-- normal nav -->
    <v-app-bar
      style="left: 9px; top: 9px; right: 9px"
      app
      dark
      class="primary"
      :collapse="width < 1264"
      :class="width < 1264 ? 'small' : ''"
      overflow-hidden
      shrink-on-scroll
      dense
      short
      src="@/assets/bg.jpg"
      fade-img-on-scroll
      elevation="8"
      elevate-on-scroll
      rounded="lg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(255,205,210,.3), rgba(25,32,72,.7)"
          @load="loading = true"
        ></v-img>
      </template>
      <!-- The nav-drawer icon -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="width <= 1264"
      ></v-app-bar-nav-icon>
      <!-- Home btn -->
      <v-btn
        icon
        v-show="width <= 1264"
        to="/"
        @click="
          $vuetify.goTo(0, {
            duration: 400,
            offset: 0,
            easing: 'easeInQuad',
          })
        "
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title style="padding-left: 16px; padding-bottom: 0"
        >Aiedail</v-toolbar-title
      >
      <!-- use <v-toolbar-title> instead of <v-app-bar-title> to prevent displaying "Ti..." -->
      <template v-slot:extension>
        <v-btn plain to="/">HOME</v-btn>
        <v-btn plain to="/about">About</v-btn>
        <v-btn plain to="/archives">Archives</v-btn>
      </template>
    </v-app-bar>
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-container style="height: 9px; padding: 0"></v-container>
      <!-- used to take place of the igem bar -->
      <v-list-item link @click.stop="drawer = false">
        <v-icon>mdi-chevron-left</v-icon>
        <!-- back icon -->
      </v-list-item>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="@/assets/temp_logo.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Aiedail</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <!-- normal mobile nav-drawer. on-use now. -->
      <v-list dense>
        <v-list-item
          to="/"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
          active-class="red--text"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item>
        <v-list-item
          to="/about"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
          active-class="red--text"
        >
          <v-list-item-icon>
            <v-icon>mdi-information-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item
          to="/archives"
          @click="
            $vuetify.goTo(0, {
              duration: 400,
              offset: 0,
              easing: 'easeInQuad',
            })
          "
          active-class="red--text"
        >
          <v-list-item-icon>
            <v-icon>mdi-archive</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Archives</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
export default {
  name: "navbar",
  props: {
    width: Number,
  },

  data: () => ({
    loading: false,
    drawer: null,
  }),
};
</script>
<style lang="scss">
.small {
  padding-left: 4px;
  max-height: 48px;
  border-radius: 0;
  left: 0;
}
</style>