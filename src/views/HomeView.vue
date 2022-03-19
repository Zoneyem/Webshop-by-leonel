<template>
<div class="home">
   <NavBarComp/>

 <HeroComp/>
 <ProductsComp/>
 <AboutComp/>

</div>
 
 
</template>

<script>
// @ is an alias to /src

import NavBarComp from "../components/NavBarComp.vue"
import HeroComp from '../components/HeroComp.vue'
import ProductsComp from '../components/ProductsComp.vue'
import AboutComp from '../components/AboutComp.vue'
export default {
  data(){

  },
  components:{HeroComp, ProductsComp, AboutComp, NavBarComp}
};
</script>
