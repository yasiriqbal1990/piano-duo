<template>
    <div class="kontakt-page">
    <div class="wrapper">
        <Header/>
        <HeroDefault :name="name" :description="description" />
        <KontaktSection2/>
        <Footer/>
    </div>
    </div>    
</template>

<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import KontaktSection2 from '@/components/pages/kontaktPage/KontaktSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
    data()
    {
        return{
            name:"Kontakt",
            description:"-the timeless-piano-project-"
        }
    },
    components:{
        Header,
        HeroDefault,
        KontaktSection2,
        Footer

    }
    
}
</script>

<style lang="scss" >
.kontakt-page{
    .boxer-sec{
        padding: 15px 0 160px 0;
    }
    .boxer-inner{
        .title{
            padding-bottom: 50px;
            text-align: center;
            h3{
                color: $black;
                font-size: $font_43;
                @include Optima(normal);
                margin-bottom: 43px;
                text-transform: uppercase;
            }
            a{
                color: $black;
                font-size: $font_20;
                @include Helvetica_Neue(300);
                display: block;
                margin: 11px 0 8px;
            }
            p{
                color: $red;
                font-size: $font_15;
                @include Helvetica_Neue(300);
            }
        }
    }
}


@media (max-width: 767px) {
    .kontakt-page{
        .boxer-sec {
            padding: 15px 0 50px 0;
        }
        .boxer-inner{
            .title {
                padding-bottom: 30px;
                h3{
                    font-size: $font_26;
                    margin-bottom: 15px;
                }
            }
        }
    }
}
@media (max-width: 575px) {
    .kontakt-pag{
        .boxer-inner{
            .title{
                h3 {
                    font-size: $font_24;
                    margin-bottom: 15px;
                }
            }
        }
    }

}

</style>