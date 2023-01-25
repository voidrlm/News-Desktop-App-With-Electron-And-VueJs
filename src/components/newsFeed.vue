<template>
  <div class="mt-n10">
    <div v-if="loading">
      <v-card class="ma-5" v-for="n in 5" :key="n">
        <v-skeleton-loader class="mx-auto" type="article"></v-skeleton-loader>
      </v-card>
    </div>
    <div v-if="!loading && articles.length !== 0">
      <v-layout justify-end align-center>
        <span class="grey--text">Items per page</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="accent"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>
      <v-data-iterator
        :items="articles"
        hide-default-footer
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
      >
        <template v-slot:default="props">
          <v-card
            v-for="(item, index) in props.items"
            :key="index"
            class="ma-5"
            :href="item.url"
            target="_blank"
          >
            <v-card-title class="font-weight-medium text-h6">
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle class="caption">
              {{ new Date(item.publishedAt).toLocaleString().split(",")[0] }}
            </v-card-subtitle>
            <v-card-subtitle class="subtitle-2 mt-n7">
              {{ item.content }}
            </v-card-subtitle>
          </v-card>
        </template>
        <template v-slot:footer>
          <v-layout justify-center align-center>
            <v-btn dark color="accent" class="mr-1" @click="formerPage">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn dark color="accent" class="ml-1" @click="nextPage">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-layout>
          <v-layout justify-center align-center class="mt-3">
            <span class="mr-4 grey--text">
              Page {{ page }} of {{ numberOfPages }}
            </span></v-layout
          >
        </template>
      </v-data-iterator>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    articles: {
      default: function () {
        return [];
      },
      type: Array,
    },
    loading: {
      default: function () {
        return true;
      },
      type: Boolean,
    },
  },
  data: () => ({
    itemsPerPageArray: [5, 10, 25],
    page: 1,
    itemsPerPage: 10,
  }),
  computed: {
    numberOfPages() {
      return Math.ceil(this.articles.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>
