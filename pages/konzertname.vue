<template>
    <div class="konzertname-page">
    <div class="wrapper">
        <Header/>
        <HeroDefault :name="name" :description="description"/>
        <KonzertnameSection2/>
        <Footer/>
    </div>       
    </div>    
</template>

<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import KonzertnameSection2 from '@/components/pages/KonzertnamePage/KonzertnameSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
    
    data()
    {
    return{
        name:"Konzertname",
        description:"-the timeless-piano-project-"
    }
    },
  components:{
        Header,
        HeroDefault,
        KonzertnameSection2,
        Footer

    }
}
</script>

<style lang="scss">
.konzertname-sec{
    padding: 25px 0 0 0;
    .boxer-inner{
        max-width: 1100px;
        .image-holder{ 
            img{
                width: 100%;
            }
        }
        .text-box{
            padding-left: 30px;
            h3{
                color: $black;
                font-size: $font_43;
                line-height: 55px;
                @include Optima(400);
                text-transform: uppercase;
            }
            p{
                color: $black;
                font-size: $font_17;
                line-height: 31px;
                @include Helvetica_Neue(300);
                margin: 20px 0 23px;
            }
            ul{
                margin-bottom: 28px;
                padding-left: 10px;
                li{
                    color: $black;
                    font-size: $font_25; 
                    line-height: 18px;
                    @include Optima(400);
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    &:last-child{
                        margin-bottom: 0;
                    }
                    span{
                        margin-right: 14px;
                    }
                }
            }
            a{
                color: $red;
                font-size: $font_15; 
                @include Helvetica_Neue(300);
                text-decoration: underline !important;
                text-transform: uppercase;
                line-height: 18px;
                display: inline-block;
            }
        }
    }
}

@media (max-width: 1199px){
    .konzertname-sec{
        .boxer-inner{
            .text-box {
                padding-left: 0;
                h3{
                    font-size: 34px;
                    line-height: 40px;
                }
                p{
                    font-size: 16px;
                    line-height: 28px;
                    margin: 15px 0;
                }
            }
        }
    }
}
@media (max-width: 991px){
    .konzertname-sec{
        .boxer-inner{
            .text-box {
                padding-left: 0;
                h3{ 
                    font-size: 26px;
                    line-height: 34px;
                }
                p{
                    font-size: 14px;
                    line-height: 24px;
                    margin: 10px 0;
                }
                ul{
                    margin-bottom: 15px;
                    li{
                        font-size: 20px;
                        line-height: 18px;
                        margin-bottom: 15px;
                        span{
                            img{
                                height: 26px;
                            }
                        }
                    }
                }
            }
        }
    }
 
}
@media (max-width: 767px){
    .konzertname-sec {
        .boxer-inner{
            .text-box{
                padding: 30px 0 0 0;
                h3{
                    font-size: 22px;
                }
                ul{
                    li{
                        font-size: 16px;
                    }
                }
            }
        }
    } 


}

</style>