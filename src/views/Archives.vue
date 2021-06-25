<template>
  <div>
    <v-card>
      <v-card-title>Initial pages</v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item two-line to="/record/arch.log"
          ><v-list-item-content
            ><v-list-item-title>arch.log</v-list-item-title
            ><v-list-item-subtitle>A cheatsheet for my self</v-list-item-subtitle>
          </v-list-item-content>
          <v-chip small outlined color="blue" class="chip">record</v-chip>
          <v-chip small outlined color="orange" class="chip">updating</v-chip>
        </v-list-item>
        <v-list-item two-line to="/record/igemwiki.log"
          ><v-list-item-content
            ><v-list-item-title>igemwiki.log</v-list-item-title
            ><v-list-item-subtitle>cheatsheet & something want to say</v-list-item-subtitle>
          </v-list-item-content>
          <v-chip small outlined color="blue" class="chip">record</v-chip>
          <v-chip small outlined color="orange" class="chip">updating</v-chip>
        </v-list-item>
        <v-list-item two-line to="/essay/star"
          ><v-list-item-content
            ><v-list-item-title>爱，快乐，与活着</v-list-item-title
            ><v-list-item-subtitle>《星空列车与白的旅行》观后感</v-list-item-subtitle>
          </v-list-item-content>
          <v-chip small outlined color="blue" class="chip">essay</v-chip>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Archives",
};
</script>