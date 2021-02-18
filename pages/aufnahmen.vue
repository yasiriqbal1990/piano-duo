<template>
    <div class="aufnahmen-page">
    <div class="wrapper">
      <Header/>
      <HeroDefault :name="name" :description="description"/>
      <AufnahmenSection2/>
      <Footer/>

    
    </div> 
    </div>   
</template>
<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import AufnahmenSection2 from '@/components/pages/aufnahmenPage/AufnahmenSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';



export default {
    
    data()
    {
        return{
           name:'Aufnahmen',
           description:'-the timeless-piano-project-'
        }
    },
    components:{
        Header,
        HeroDefault,
        AufnahmenSection2,
        Footer

    }

}
</script>
<style lang="scss" >


.aufnahmen-page{
    .boxer-sec{ 
        .boxer-inner{ 
            .main-row{
                margin-bottom: 30px;
            }
            .main-row-two{
                .brand-1{
                    margin: 15px 0;
                    img{
                        margin-bottom: 25px;
                    }
                    h3{
                        margin-bottom: 6px;
                    }
                } 
                &.news-row{
                    p{
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}

/******* END main layout *****/




@media (max-width: 767px) {
    .aufnahmen-page{
        .boxer-sec{
            .boxer-inner{
                .main-row{
                    margin-bottom: 0;
                    .text-boxer{
                        h2 {
                            font-size: $font_20;
                            line-height: 35px;
                        }
                    }
                }
                .main-row-two{
                    &.news-row{
                        margin-bottom: 30px;
                        p{
                            margin-bottom: 15px;
                        }
                    }
                    .brand-1 {
                        img{
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }

  
}

</style>
