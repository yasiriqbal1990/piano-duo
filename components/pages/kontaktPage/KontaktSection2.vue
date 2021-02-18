<template>
        <section class="boxer-sec">
            <div class="container">
                <div class="boxer-inner"> 
                    <div class="title">
                        <h3>Kontakt aufnehmen</h3>
                        <span><img src="~assets/images/email-icon.svg" alt="" /></span>
                        <a href="#">pianoduo.info@gmail.com</a>
                        <p>email</p>
                    </div>
                    <div class="contact-box">
                        <form>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name" />
                                    </div>
                                </div> 
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email Addresse" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Telefonnummer" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Nachricht"></textarea>
                                    </div>
                                </div> 
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button class="btn btn-default">absenden</button>
                                    </div>
                                </div> 
                            </div>
                        </form>
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
.contact-box{
    form{
        .form-group{
            margin-bottom: 20px;
            .form-control{
                border: none;
                background-color: $white-color;
                @include border_radius(5px);
                height: 58px;
                width: 100%;
                box-shadow: none;
                color: $black;
                font-size: $font_15;
                @include Helvetica_Neue(300);
            }
            textarea{
                &.form-control{
                    height: 200px;
                }
            }
            .btn-default{
                border: 1px solid $red;
                @include border_radius(29px);
                height: 58px;
                width: 100%;
                color: $red;
                font-size: $font_15;
                @include Helvetica_Neue(300);
                display: flex;
                align-items: center;
                text-transform: uppercase;
                justify-content: center;
                &:hover{
                    background-color:  $red;
                    color: $white-color;
                }
            }
        }
    }
}

.boxer-sec {
    background: url(~assets/images/bg.png);
    background-repeat: repeat;
    background-position: center;
    position: relative;
    background-attachment: fixed;
    &:after {
        background: linear-gradient(#fff 0%, rgba(255, 247, 208, 0.9) 0%, rgba(255, 225, 74, 0.6) 68.83%, rgba(255, 225, 74, 0.84) 100%);
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
    }
    .boxer-inner {
        max-width: 1000px;
        width: 100%;
        margin: 0 auto;
        .main-row {
            margin-bottom: 72px;
            .text-boxer {
                span {
                    letter-spacing: 0.2em;
                    font-size: $font_15;
                    color: $red;
                    line-height: 18px;
                    display: block;
                    margin-bottom: 8px;
                    @include Helvetica_Neue(300);
                }
                h2 {
                    font-size: $font_43;
                    color: $black;
                    line-height: 55px;
                    text-transform: uppercase;
                    @include Optima(normal);
                }
            }
            .text-boxer-two {
                p {
                    font-size: $font_17;
                    color: $light-black;
                    line-height: 31px;
                    margin-bottom: 25px;
                    @include Helvetica_Neue(300);
                }
                a {
                    text-decoration: underline !important;
                    font-size: $font_15;
                    color: $red;
                    line-height: 18px;
                    text-transform: uppercase;
                    @include Helvetica_Neue(300);
                }
            }
        }
        .main-row-two {
            margin-bottom: 244px;
            .brand-1 {
                img {
                    margin-bottom: 19px;
                    width: 100%;
                }
                h3 {
                    margin-bottom: 22px;
                    font-size: $font_25;
                    @include Optima(normal);
                    line-height: 34px;
                    color: $black;
                }
                p {
                    font-size: $font_17;
                    @include Helvetica_Neue(300);
                    line-height: 31px;
                    color: $light-black;
                }
            }
            &.news-row {
                margin-bottom: 140px;
                p {
                    margin-bottom: 35px;
                }
                a {
                    text-decoration: underline !important;
                    font-size: $font_15;
                    color: $red;
                    line-height: 18px;
                    text-transform: uppercase;
                    @include Helvetica_Neue(300);
                }
            }
            &.hauptabox {
                span {
                    padding-top: 7px;
                    margin-bottom: 55px;
                    letter-spacing: 0.2em;
                    font-size: $font_15;
                    color: $red;
                    line-height: 18px;
                    display: block;
                    @include Helvetica_Neue(300);
                }
                h3 {
                    font-size: $font_35;
                    line-height: 45px;
                }
            }
        }
        .text-box-news {
            margin-bottom: 74px;
            h4 {
                @include Optima(normal);
                color: $black;
                margin-bottom: 39px;
                line-height: 55px;
                font-size: $font_43;
                position: relative;
                text-transform: uppercase;
                &:after {
                    content: "";
                    position: absolute;
                    background-color: #C4974E;
                    width: 80px;
                    height: 2px;
                    border-radius: 100px;
                    bottom: -4px;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                }
            }
            p {
                font-size: $font_17;
                @include Helvetica_Neue(300);
                line-height: 31px;
                color: $light-black;
            }
            &.text-box-news-two {
                margin-bottom: 24px;
            }
        }
    }
    .home-img {
        margin-top: -60px;
        img {
            width: 100%;
        }
    }
}

@media (max-width: 1440px) {
    .boxer-sec{
        .boxer-inner{
            .main-row-two{
                margin-bottom: 100px;
            }
        }
    }

}
@media (max-width: 1199px) {
    .boxer-sec{
        .boxer-inner{
            .main-row{
                .text-boxer{
                    h2{
                        font-size: $font_35;
                        line-height: 47px;
                    }
                }
            }
            .main-row-two{
                .brand-1{
                    h3{
                        font-size: $font_20;
                        margin-bottom: 13px;
                    }
                    p{
                        font-size: $font_16;
                    }
                } 
                &.hauptabox{
                    h3{
                        font-size: $font_30;
                    }
                }
            }
            .text-box-news{
                margin-bottom: 34px;
                h4{
                    font-size: $font_35;
                }
            }
        }
    }
 
}
@media (max-width: 991px) {
    .boxer-sec{
        .boxer-inner{
            .main-row{
                .text-boxer-two{
                    p{
                        font-size: $font_16;
                        margin-bottom: 14px;
                    } 
                }
                .text-boxer{
                    h2{
                        font-size: $font_30;
                        line-height: 41px;
                    }
                }
            }
            .main-row-two{
                margin-bottom: 60px;
                .brand-1{
                    h3{
                        font-size: $font_18;
                        margin-bottom: 0;
                    }
                    p{
                        font-size: $font_14;
                        line-height: 23px;
                    }
                }
                &.hauptabox {
                    span{
                        margin-bottom: 25px;
                    }
                    h3{
                        font-size: $font_25;
                        line-height: 35px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    } 

}
@media (max-width: 767px) {
    .boxer-sec{
        .boxer-inner{
            .main-row {
                margin-bottom: 40px;
                .text-boxer {
                    margin-bottom: 20px;
                }
            }
            .main-row-two{
                margin-bottom: 10px;
                .brand-1 {
                    margin-bottom: 40px;
                    h3{
                        font-size: $font_20;
                        margin-bottom: 3px;
                    }
                    p{
                        font-size: $font_16;
                    }
                }
                &.news-row{
                    margin-bottom: 10px;
                }
                &.hauptabox{
                    h3{
                        font-size: $font_25;
                    }
                }
            }
            .text-box-news{
                p{
                    br{
                        display: none;
                    }
                }
                h4{
                    font-size: $font_30;
                    margin-bottom: 19px;
                }
            }
        }
    }  
    .order-sm-2 {
        order: 2;
    }
    .order-sm-1 {
        order: 1;
    } 
    
}
@media (max-width: 575px) {
    .contact-box{
        form{
            .form-group{
                textarea{
                    &.form-control{
                        height: 150px;
                    }
                }
                .btn-default{
                    height: 50px;
                }
            }
        }
    }
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
    .boxer-sec {
        .boxer-inner{
            .main-row{
                .text-boxer{
                    h2{
                        font-size: $font_24;
                        line-height: 35px;
                    }
                }
            } 
        }
    }

}
@media (max-width: 479px) {
    .boxer-sec{
        .boxer-inner{
            .main-row{
                .text-boxer {
                    margin-bottom: 4px;
                }
                .text-boxer-two{
                    p{
                        line-height: 24px;
                    }
                    &.hauptabox{
                        h3{
                            line-height: 31px;
                        }
                    }
                }
            }
            .text-box-news{
                margin-bottom: 20px;
                p{
                    font-size: $font_14;
                    line-height: 24px;
                }
            }
        }
    }
}

</style>