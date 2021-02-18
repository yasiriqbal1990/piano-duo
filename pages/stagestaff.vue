<template>
    <div class="stage-staff-page">
        <div class="wrapper">
        <Header/>
        <HeroDefault :name="name" :description="description"/>
        <StageStaffSection2/>
        <Footer/>
        </div>
    </div>    
</template>
<script>
import Header from '@/components/pages/header/Header.vue';
import HeroDefault from '@/components/pages/heroSections/HeroDefault.vue';
import StageStaffSection2 from '@/components/pages/stageStaffPages/StageStaffSection2.vue';
import Footer from '@/components/pages/footer/Footer.vue';
export default {

    data()
    {
        return{
            name:"Bühnenpersonal",
            description:"-the timeless-piano-project-"
        }
    },
      components:{
        Header,
        HeroDefault,
        StageStaffSection2,
        Footer

    }
    
}
</script>
<style lang="scss">
.stage-staff-page{

    .boxer-sec{
        padding: 25px 0 0 0;
    }
    .boxer-inner{
        max-width: 100%;
        .main-row-two{
            &.hauptabox{
                .brand-1{
                    span{
                        padding-top: 10px;
                        margin-bottom: 46px;
                    }
                    h3{
                        text-transform: uppercase;
                        font-size: $font_43;
                        display: inline-block;
                        position: relative;
                        margin-bottom: 38px;
                        &:after{
                            position: absolute;
                            content: "";
                            left: 50%;
                            bottom: -12px;
                            transform: translate(-50%,0);
                            height: 2px;
                            background-color: $yellow;
                            width: 80px;
                        }
                    }
                }
            }
        }

    }
}

@media (max-width: 1199px) {
    .stage-staff-page{
        .boxer-inner{
            .main-row-two{
                &.hauptabox{
                    .brand-1{
                        h3{
                            font-size: 34px;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 991px) {
    .stage-staff-page{
        .boxer-inner{
            .main-row-two{
                &.hauptabox{
                    .brand-1{
                        h3{
                            font-size: 26px;
                            margin-bottom: 25px;
                        }
                        span{
                            padding-top: 10px;
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }

}
@media (max-width: 575px) {
    .stage-staff-page{
        .boxer-inner{
            .main-row-two{
                &.hauptabox{
                    .brand-1{
                        h3{
                            font-size: 22px;
                            &:after{
                                bottom: -5px;
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>