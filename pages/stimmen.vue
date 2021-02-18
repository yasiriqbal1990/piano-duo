<template>
    <div class="stimmen-page">
    <div class="wrapper">
        <Header/>
        <HeroDefault :name="name" :description="description" />
        <StimmenSection2/>
        <Footer/>
    </div>        
    </div>    
</template>
<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import StimmenSection2 from '@/components/pages/stimmenPage/StimmenSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
    data()
    {
        return{
            name:"Stimmen",
            description:"-the timeless-piano-project-"
        }
    },
components:{
        Header,
        HeroDefault,
        StimmenSection2,
        Footer

    }
    
}
</script>
<style lang="scss">
.stimmen-page{
    .boxer-sec{
        padding: 15px 0 0 0;
        .boxer-inner{
            .main-row{
                margin-bottom: 38px;
            }
            .main-row-two{
                .brand-1{
                    img{
                        margin-bottom: 25px;
                    }
                    h3{
                        margin-bottom: 6px;
                    }
                }
                &.news-row{
                    margin-bottom: 80px;
                    p{
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}
@media (max-width: 767px){
    .stimmen-page{
        .boxer-sec{
            .boxer-inner{
                .main-row{
                    margin-bottom: 0;
                    .text-boxer{
                        margin-bottom: 20px;
                        h2{
                            font-size: 20px;
                            line-height: 35px;
                        }
                    }
                }
                .main-row-two{
                    &.news-row{
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }

}
</style>