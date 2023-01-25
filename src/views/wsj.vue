<template>
  <v-container fluid>
    <v-card-title
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
      ><v-icon
        size="35"
        class="mr-2"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        >{{
          getGreetingData === "Good Evening"
            ? "mdi-moon-waning-crescent"
            : "mdi-white-balance-sunny"
        }}</v-icon
      >{{ getGreetingData }}, User!</v-card-title
    ><newsFeed :articles="newsFeed" :loading="isApiExecuting" />
  </v-container>
</template>
<script>
import { fetchNewsData } from "@/services/apiCall";
import newsFeed from "@/components/newsFeed.vue";
export default {
  components: { newsFeed },
  name: "topheadlines-component",
  data: () => ({
    newsFeed: [],
    isApiExecuting: true,
  }),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();

      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetchNewsData("everything?domains=wsj.com").then((response) => {
        this.isApiExecuting = false;
        this.newsFeed = response.data.articles;
      });
    },
  },
};
</script>
