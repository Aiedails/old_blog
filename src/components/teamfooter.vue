<template>
  <v-footer color="primary " padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2"
        :to="link.to"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="secondary py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — Powered by Aiedail
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "temfooter",
  data: () => ({
    links: [
      { name: "Home", to: "/" },
      { name: "About", to: "/about" },
      { name: "Archives", to: "/archives" },
    ],
  }),
};
</script>
