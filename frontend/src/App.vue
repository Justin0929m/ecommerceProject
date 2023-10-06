<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Home/NavbarComp.vue'
import Footer from '@/components/Home/FooterComp.vue'
export default{
  components:{
    Navbar,
    Footer
  }
}
</script>


