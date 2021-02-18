<template>
                <section class="boxer-sec konzertname-sec">
                <div class="container">
                    <div class="boxer-inner"> 
                        <div class="row">
                            <div class="col-md-6">
                                <div class="image-holder">
                                    <img src="~assets/images/brand-6.png" alt="" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="text-box">
                                    <h3>Zeitgeist te Mercedes</h3>
                                    <p>Krankenschwester argumentum Umsatzanalyse an. Anwendungsprogrammierschnittstelle lobortis Mercedes Benz
                                        per Bildung nam Schwarzwälder Kirschtorte probatus 
                                        Apfelstrudel impetus Grimms Märchen aliquando Glühwein sea. Hallo consectetur Projektplanung elit, Rubin auf Schienen do Schmetterling tempor Deutsche Mark ut Mertesacker et Mercedes Benz magna bitte Ut Oktoberfest ad Grimms Märchen veniam.
                                    </p>
                                    <ul>
                                        <li><span><img src="~assets/images/calendar-icon.svg" alt="" /></span>December 14, 2020</li>
                                        <li><span><img src="~assets/images/clock-icon.svg" alt="" /></span>07:30 P.M. - 08:00 P.M.</li>
                                    </ul>
                                    <a href="#">learn more</a>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="map">
                    <img src="~assets/images/map-img.png" alt="" class="img-fluid" />
                </div>
                <div class="home-img"><img src="~assets/images/home.png" alt=""></div>
            </section>

</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.map{
    margin-top: 140px;
    margin-bottom: -400px;
    img{
        width: 100%;
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



@media (max-width: 1600px) {
    .map {
        margin-bottom: -260px;
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
@media (max-width: 1199px){
    .map {
        margin-top: 90px;
        margin-bottom: -190px;
    }
    .boxer-sec{
        .boxer-inner{
            .main-row{
                .text-boxer{
                    h2{
                        font-size: 35px;
                        line-height: 47px;
                    }
                }
            }
            .main-row-two{
                .brand-1{
                    h3{
                        font-size: 20px;
                        margin-bottom: 13px;
                    }
                    p{
                        font-size: 16px;
                    }
                } 
                &.hauptabox{
                    h3{
                        font-size: 30px;
                    }
                }
            }
            .text-box-news{
                margin-bottom: 34px;
                h4{
                    font-size: 35px;
                }
            }
        }
    }
 
}
@media (max-width: 991px){
    .map {
        margin-top: 50px;
        margin-bottom: -150px;
    }
    .boxer-sec{
        .boxer-inner{
            .main-row{
                .text-boxer-two{
                    p{
                        font-size: 16px;
                        margin-bottom: 14px;
                    } 
                }
                .text-boxer{
                    h2{
                        font-size: 30px;
                        line-height: 41px;
                    }
                }
            }
            .main-row-two{
                margin-bottom: 60px;
                .brand-1{
                    h3{
                        font-size: 18px;
                        margin-bottom: 0;
                    }
                    p{
                        font-size: 14px;
                        line-height: 23px;
                    }
                }
                &.hauptabox {
                    span{
                        margin-bottom: 25px;
                    }
                    h3{
                        font-size: 25px;
                        line-height: 35px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }  


}
@media (max-width: 767px){
    .map {
        height: 300px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
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
                        font-size: 20px;
                        margin-bottom: 3px;
                    }
                    p{
                        font-size: 16px;
                    }
                }
                &.news-row{
                    margin-bottom: 10px;
                }
                &.hauptabox{
                    h3{
                        font-size: 25px;
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
                    font-size: 30px;
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
      .boxer-sec {
        .boxer-inner{
            .main-row{
                .text-boxer{
                    h2{
                        font-size: 24px;
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
                    font-size: 14px;
                    line-height: 24px;
                }
            }
        }
    }
}
</style>