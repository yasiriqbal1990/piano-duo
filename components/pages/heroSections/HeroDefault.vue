<template> 
   <section class="hero-sec hero-sec-inner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero-text text-center">
                        <h1>{{name}}</h1>
                        <span>{{description}}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>   
</template>

<script>
export default {
    props:['name','description']
    
}
</script>

<style lang="scss" scoped>
.hero-sec {

    .hero-text {
      h1 {
        font-size: $font_115;
        color: $white-color;
        line-height: 135px;
        @include Poppins(400);
      }
      span {
        font-size: $font_27;
        color: $white-color;
        line-height: 40px;
        @include Poppins(300);
        letter-spacing: 0.25em;
      }
    }
  }
.hero-sec {
    &.hero-sec-inner {
        padding: 150px 0 260px 0;
        background-image: url(~assets/images/staff-banner-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        .hero-text {
            h1 {
                font-size: $font_64;
                line-height: 75px;
                color: $white-color;
                margin-bottom: 9px;
            }
            span {
                font-size: $font_15;
                color: $white-color;
            }
        }
    }
    &:after {
        content: "";
        position: absolute;
        background-image: url(~assets/images/shadow.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 213px;
        left: 0;
        bottom: 0;
    }
}



@media (max-width: 1199px) {
    .hero-sec {
        padding: 138px 0 229px 0;
        .hero-text{
            h1{
                font-size: $font_75 !important;
                line-height: 105px !important;
            }
            span{
                font-size: $font_20 !important;
                letter-spacing: 0.05em !important;
            }
        }
    }
}

@media (max-width: 991px) {
    .hero-sec {
        padding: 98px 0 139px 0;
        .hero-text{
            h1{
                font-size: $font_60 !important;
                line-height: 85px !important; 
            }
            span{
                font-size: $font_18 !important;
            }
        }
    }
}

@media (max-width: 767px) {
    .hero-sec{
        &.hero-sec-inner{
            padding: 90px 0 170px;
        }
        .hero-text{
            h1{
                font-size: $font_50 !important;
                line-height: 67px !important;
            }
            span {
                font-size: $font_16 !important;
            }
        }
    }
}

@media (max-width: 575px) {
    .hero-sec{
        padding: 98px 0 100px 0;
        .hero-text{
            h1{
                font-size: $font_40 !important;
                line-height: 47px !important;
            }
        }
        &.hero-sec-inner{
            padding: 90px 0 170px 0;
        }
    }
}

@media (max-width: 479px) {
    .hero-sec{ 
        .hero-text{
            h1{
                font-size: $font_32 !important;
                line-height: 35px !important;
            }
            span{
                font-size: $font_14 !important;
            }
        } 
    }  
}

</style>