<template>
    <div class="auf-reisen-page">
    <div class="wrapper">
     <Header/>
     <HeroDefault :name="name" :description="description"/>
     <AufReisenSection2/>
     <Footer/>
    </div>
    </div>    
</template>
<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import AufReisenSection2 from '@/components/pages/AufReisenPage/AufReisenSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
        data()
    {
        return{
           name:'Auf Reisen',
           description:'-the timeless-piano-project-'
        }
    },
    components:{
        Header,
        HeroDefault,
        AufReisenSection2,
        Footer

    }
    
}
</script>
<style lang="scss">
.auf-reisen-page{
    .boxer-sec{ 
        .boxer-inner{ 
            .main-row{
                margin-bottom: 20px;
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

@media (max-width: 1199px) {

    .auf-reisen-single-inner{
        .reisen-single-right{
            .reisen-contribution{
                .reisen-contribution-box{
                    .image-holder{
                        max-width: 80px;
                        width: 100%;
                    }
                    .text-box{
                        padding-left: 10px;
                        h4{
                            font-size: 16px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }

}

@media (max-width: 767px) {
    .auf-reisen-single-inner{
        .reisen-single-left{
            .reisen-single-box{
                margin-bottom: 30px;
                .text-box{
                    h3{
                        font-size: 26px;
                        padding-top: 10px;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 14px;
                        line-height: 24px;
                    }
                }
            }
        }
        .reisen-single-right{
            padding: 0;
            .reisen-contribution{
                h3{
                    font-size: 22px;
                    margin-bottom: 0;
                }
                ul{
                    margin-top: 20px;
                    li{
                        font-size: 16px;
                        padding-left: 20px;
                        margin-bottom: 15px;
                    }
                }
                .reisen-contribution-box{
                    padding-top: 15px;
                    .image-holder{
                        max-width: 80px;
                        width: 100%;
                    }
                    .text-box{
                        padding-left: 10px;
                        h4{
                            font-size: 16px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
    }

 
}

@media (max-width: 575px) {
    .auf-reisen-single-inner{
        .reisen-single-left{
            .reisen-single-box{
                .text-box{
                    h3{
                        font-size: 20px;
                    }
                }
            }
        }
        .reisen-single-right{
            padding: 0 0 20px 0;
        }
    }

}

</style>