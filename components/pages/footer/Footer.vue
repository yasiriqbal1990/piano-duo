<template>
<footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <ul class="footer-links">
            <li><a href="#">Impressum</a></li>
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
          <div class="copy-right"> © Copyright 2020 pianoduo. All rights reserved. </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
 /*==== Footer Sec ========*/
 /******** FOOTER ********/
 footer {
   background-color: $black;
   padding: 40px 0 24px 0;
   margin-top: -3px;
   .footer-links {
     display: flex;
     justify-content: center;
     margin-bottom: 20px;
     li {
       margin-right: 50px;
       &:last-child {
         margin-right: 0;
       }
       a {
         font-size: $font_18;
         color: $white-color;
         line-height: 31px;
         letter-spacing: 0.01em;
         @include Helvetica_Neue(300);
       }
     }
   }
   .copy-right {
     line-height: 31px;
     text-align: center;
     color: $white-color;
     font-size: $font_18;
     @include Helvetica_Neue(300);
   }
 }
 

@media (max-width: 1199px) {
         
    footer {
        padding: 24px 0 24px 0;
    }

    
}
@media (max-width: 991px) {
    footer{
        .footer-links{
            margin-bottom: 3px;
            li{
                a{
                    font-size: 16px;
                }
            }
        }
        .copy-right{
            font-size: $font_14;
        }
    }
}

@media (max-width: 479px) {
    footer {
        .footer-links{
            li{
                margin-right: 20px;
            }
        }
    }
}
 
</style>