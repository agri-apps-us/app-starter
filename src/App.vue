<template>
  <div id="app">    
    <icons />
    <app-shell :user="user">
      <template v-slot:menu>
        <app-menu>
          <app-title :text="title">
            <img slot="logo" src="./assets/img/app-logo.png" />
          </app-title>
          <app-menu-item to="/" text="Home" svg="reports" />
          <app-menu-item to="dashboard" text="Dashboard" svg="dashboard" />
          <app-menu-item to="quotes" text="Quotes" svg="comment" />
        </app-menu>
      </template>
      <template v-slot:default>        
        <router-view></router-view>
      </template>
      <template v-slot:appbar>
        <div class="flex flex-start flex-center">
          <svg v-if="pageIcon" class="wh-16 mr-sm icon-dark">
            <use :xlink:href="`#${pageIcon}`"></use>
          </svg>
          <strong class="ucase">{{ pageTitle || "" }}</strong>
        </div>
      </template>
    </app-shell>
  </div>
</template>
<script>
import Icons from '@/components/Icons.vue';

export default {
  components: { Icons },
  data() {
    return {
      user: {
        username: "Guest",
        notifications: 3
      },
      title: 'Starter App',
      pageTitle: '',
      pageIcon: ''
    };
  },
  watch: {
    $route(route) {
      this.pageTitle = route.name;
      this.pageIcon = route.meta && route.meta.icon || ''
    }
  },
  mounted() {
    this.pageTitle = this.$route.name;
  }
};
</script>
