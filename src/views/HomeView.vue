<template>
 <HeroComp/>
 <ProductsComp/>
 <AboutComp/>

 
 
</template>

<script>
// @ is an alias to /src
import HeroComp from '../components/HeroComp.vue'
import ProductsComp from '../components/ProductsComp.vue'
import AboutComp from '../components/AboutComp.vue'
export default {
  data(){

  },
  components:{HeroComp, ProductsComp, AboutComp}
};
</script>
