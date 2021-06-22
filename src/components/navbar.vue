<template>
  <v-container>
    <!-- normal nav -->
    <v-app-bar
      style="left: 9px; top: 9px; right: 9px"
      app
      dark
      class="primary"
      :collapse="width < 960"
      :class="width < 960 ? 'small' : ''"
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
          @load="loading=true"
        ></v-img>
      </template>
      <!-- The nav-drawer icon -->
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-show="width <= 960"
      ></v-app-bar-nav-icon>
      <!-- Home btn -->
      <v-btn icon v-show="width <= 960">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title style="padding-left: 16px; padding-bottom: 0"
        >Aiedail</v-toolbar-title
      >
      <!-- use <v-toolbar-title> instead of <v-app-bar-title> to prevent displaying "Ti..." -->
      <template v-slot:extension>
        <v-btn plain to="/">HOME</v-btn>
        <v-btn plain to="/about">About</v-btn>
      </template>
    </v-app-bar>
    <!-- mobile nav -->
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-container style="height: 25px; padding: 0"></v-container>
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
        <v-list-item link active-class="blue--text">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HOME</v-list-item-title>
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
    /* for the v-treeview. Now abandon.
    initiallyOpen: ["Team"],
    nowact: ["Team"],
    items: [
      { name: "HOME" },
      {
        name: "Team",
        href: "#",
        children: [
          { name: "Team", href: "#" },
          { name: "Attributions", href: "#" },
          { name: "Collaborations", href: "#" },
        ],
      },
      {
        name: "Project",
        children: [
          { name: "Communication", href: "#" },
          { name: "Contribution", href: "#" },
          { name: "Description", href: "#" },
          { name: "Engineering", href: "#" },
          { name: "Implementation", href: "#" },
          { name: "Results" },
        ],
      },
      {
        name: "Parts",
        children: [{ name: "Parts" }, { name: "Improve" }],
      },
      { name: "Safety" },
      { name: "Human Practices" },
    ],
    */
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