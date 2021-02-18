<template>
  <div class="wrapper">
       <!--footer-->
  <Header/>
    <!--hero-sec-->
   <HeroHome/>
   <!--boxer-sec-->
   <Section2/>  
       
  <!--footer-->
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/pages/header/Header.vue';
import HeroHome from '@/components/pages/heroSections/HeroHome.vue';
import Section2 from '@/components/pages/homePage/Section2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
    components:{
        Header,
        HeroHome,
        Section2,
        Footer

    }
}
</script>
<style lang="scss" scoped>

</style>
