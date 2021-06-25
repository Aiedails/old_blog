<template>
  <div>
    <v-skeleton-loader
      v-show="firstload"
      type="image, article"
    ></v-skeleton-loader>
    <v-card v-show="!firstload" v-ripple="{ class: `error--text` }" hover>
      <v-responsive :aspect-ratio="1 / 1">
        <v-img src="@/assets/logo.jpg">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-responsive>
      <v-card-title>Aiedail</v-card-title>
      <v-card-title id="title">半醒半醉日复日<br />花落花开年复年</v-card-title>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data: () => ({
    firstload: false,
  }),
}
</script>