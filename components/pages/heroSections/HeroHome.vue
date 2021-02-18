<template>
  <!--hero-sec-->
  <section class="hero-sec">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="hero-text text-center">
            <h1>piano duo</h1>
            <span>-the timeless-piano-project-</span> </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.hero-sec {
  background-image: url(~assets/images/hero-bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 218px 0 449px 0;
  position: relative;
  &:after{
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
                font-size: 60px;
                line-height: 85px; 
            }
            span{
                font-size: 18px;
            }
        }
    }
    
}

@media (max-width: 767px) {

    .hero-sec{
        .hero-text{
            h1{
                font-size: $font_50;
                line-height: 67px;
            }
            span{
                font-size: $font_16;
            }
        }
    }

}

@media (max-width: 575px) {

    .hero-sec{
        padding: 98px 0 100px 0;
        .hero-text{
            h1{
                font-size: $font_40;
                line-height: 47px;
            }
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