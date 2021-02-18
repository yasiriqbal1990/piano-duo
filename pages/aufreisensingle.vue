<template>
    <div class="auf-reisen-single-page">
    <div class="wrapper">
        <Header/>
        <HeroDefault :name="name" :description="description"/>
        <AufReisenSingleSection2/>
        <Footer/>
    </div>        
    </div>    
</template>
<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import AufReisenSingleSection2 from '@/components/pages/AufReisenSinglePage/AufReisenSingleSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {
    data()
    {
        return{
            name:"Beitragsname",
            description:"-the timeless-piano-project-"
        }
    },
    components:{
        Header,
        HeroDefault,
        AufReisenSingleSection2,
        Footer

    }
    
}
</script>
<style lang="scss">
.auf-reisen-single-page{
    .boxer-sec{
        .boxer-inner{
            max-width: 100%;
            .main-row{
                margin-bottom: 38px;
            }
        }
    }
}

.auf-reisen-single-inner{
    .reisen-single-left{
        padding-right: 15px;
        .reisen-single-box{
            margin-bottom: 35px;
            .image-holder{
                img{
                    width: 100%;
                }
            }
            .text-box{
                padding-top: 15px;
                p{
                    color: $black;
                    font-size: $font_17;
                    line-height: 31px;
                    @include Helvetica_Neue(300);
                }
                h3{
                    color: $black;
                    font-size: $font_33;
                    @include Optima(normal);
                    padding-top: 10px;
                    margin-bottom: 20px;
                }
            }
        }
    }
    .reisen-single-right{
        padding: 20px 0 0 0;
        .reisen-contribution{
            margin-bottom: 30px;
            h3{
                @include Optima(normal);
                color: $yellow;
                font-size: $font_25;
                margin-bottom: 20px;
            }
            .reisen-contribution-box{
                display: flex;
                padding-top: 20px;
                .image-holder{
                    max-width: 104px;
                    width: 100%;
                }
                .text-box{
                    flex: 1;
                    width: 100%;
                    padding-left: 15px; 
                    display: flex;
                    align-items: center;
                    h4{
                        @include Optima(normal);
                        color: $black;
                        font-size: $font_20;
                        line-height: 35px;
                    }
                }
            }
            ul{
                li{
                    @include Optima(normal);
                    color: $black;
                    font-size: $font_20;
                    position: relative;
                    padding-left: 21px;
                    margin-bottom: 20px;
                    &:after{
                        position: absolute;
                        content: "";
                        background-color: #960000;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        left: 0;
                        top: 10px;
                    }
                }
            }
        }
    }
}
@media (min-width: 1441px) {
    .container, .container-sm, .container-md, .container-lg, .container-xl {
        max-width: 1230px;
    }
}

@media (max-width: 1199px) {
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution .reisen-contribution-box .image-holder {
        max-width: 80px;
        width: 100%;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution .reisen-contribution-box .text-box {
        padding-left: 10px;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution .reisen-contribution-box .text-box h4{
        font-size: 16px;
        line-height: 30px;
    }
}

@media (max-width: 767px) {
    .auf-reisen-single-inner .reisen-single-left .reisen-single-box .text-box h3 {
        font-size: 26px;
        padding-top: 10px;
        margin-bottom: 10px;
    }
    .auf-reisen-single-inner .reisen-single-left .reisen-single-box {
        margin-bottom: 30px;
    }
    .auf-reisen-single-inner .reisen-single-left .reisen-single-box .text-box p {
        font-size: 14px;
        line-height: 24px;
    }
    .auf-reisen-single-inner .reisen-single-right {
        padding: 0;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution h3 {
        font-size: 22px;
        margin-bottom: 0;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution .reisen-contribution-box {
        padding-top: 15px;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution ul {
        margin-top: 20px;
    }
    .auf-reisen-single-inner .reisen-single-right .reisen-contribution ul li {
        font-size: 16px;
        padding-left: 20px;
        margin-bottom: 15px;
    }

}
@media (max-width: 575px) {
    .auf-reisen-single-inner .reisen-single-left .reisen-single-box .text-box h3 {
        font-size: 20px;
    }
    .auf-reisen-single-inner .reisen-single-right {
        padding: 0 0 20px 0;
    }
}

</style>