<template>
  <div id="page" class="site">
    <Header />
    <MenuSP />
    <div>
      <!--content-->
      <div id="content" class="site-content container clear">
        <div id="primary" class="content-area clear">
          <main id="main" class="site-main">
            <section class="error-404 not-found">
              <header class="page-header">
                <h1 class="page-title">{{ error.statusCode }} Error - Page Not Found</h1>
              </header><!-- .page-header -->
              
              <div class="page-content">
                <p>{{ error.message }}</p>
                <NuxtLink to="/">Home page</NuxtLink>
              </div>
            </section>
          </main>
        </div>

        <!-- Sidebar -->
        <Sidebar />
        <!-- End Sidebar -->
      </div>
      <!--content-->
    </div>
    <Footer />
    <div id="back-top" v-if="backtoTop">
      <a @click="handleToTop" title="Back to top">
        <span class="genericon genericon-collapse"></span>
      </a>
    </div>
    <LoadingScreen />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import MenuSP from '@/components/MenuSP/MenuSP.vue'
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen.vue'
import { mapState } from 'vuex'
import * as TYPES from '@/consts'

export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
  /* --------------------------------------------------
    components
  -------------------------------------------------- */
  components: {
    Header: Header,
    Footer: Footer,
    Sidebar: Sidebar,
    MenuSP,
    LoadingScreen,
  },

  /* --------------------------------------------------
    data
  -------------------------------------------------- */
  data() {
    return {
      backtoTop: false,
    }
  },

  /* --------------------------------------------------
    computed
  -------------------------------------------------- */
  computed: {
    ...mapState({
      adsHeader(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.HEADER)
        return ads ? ads : null
      },

      adsHead(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.AUTO_HEAD)
        return ads ? ads : null
      },

      adsFooter(state) {
        const ads = state.common.storeLoadAds.ads.find(e => e.position.id === TYPES.FOOTER)
        return ads ? ads : null
      },
    })
  },

  /* --------------------------------------------------
    methods
  -------------------------------------------------- */
  methods: {
    /**
     * Event back to top
     */
    handleToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },

  /* --------------------------------------------------
    mounted
  -------------------------------------------------- */
  mounted() {
    // const backToTop = document.querySelector('#back-top');
    window.addEventListener('scroll', async(e) => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > 100) {
        this.backtoTop = true
      } else {
        this.backtoTop = false
      }
    })
  },

  /* --------------------------------------------------
    head
  -------------------------------------------------- */
  head() {
    return {
      title: `${this.error.statusCode} Page error - ${this.$sitename()}`,
      link: [
        {
          rel: 'canonical',
          href: `${process.env.SITE_DOMAIN}${this.$route.path}`
        }
      ],
    }
  }
}
</script>