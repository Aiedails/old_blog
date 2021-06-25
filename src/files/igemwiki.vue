<template>
  <div>
    <v-card style="margin-top: 12px;">
      <v-row justify="center">
        <v-card-title class="text-h4" style="padding-bottom: 0">
          iGEMwiki.log
        </v-card-title>
      </v-row>
      <v-row justify="center">
        <v-card-subtitle>众所周知，在更新了等于在咕咕咕了</v-card-subtitle>
      </v-row>
      <v-row justify="center" style="margin-bottom: 35px">
        <v-chip small outlined color="blue" style="margin-right: 8px">record</v-chip>
        <v-chip small outlined color="orange" style="margin-right: 8px">updating</v-chip>
        <v-divider vertical></v-divider>
        <div style="margin: 2px 8px; color: grey; font-size: 14px">
          2021/--/--
        </div>
        <v-divider vertical></v-divider>
        <div style="margin: 2px 8px; color: grey; font-size: 14px">nan</div>
        <v-card-text></v-card-text>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "igemwiki.log",
};
</script>