<template>
    <section class="boxer-sec">
    <div class="container">
        <div class="boxer-inner">
            <div class="row main-row">
                <div class="col-md-12">
                    <div class="text-boxer">
                        <h2>Juttensack nominavi Turnbeutel</h2>
                    </div>
                </div> 
            </div>
            <div class="auf-reisen-single-inner">
                <div class="row">
                    <div class="col-lg-9 col-md-12">
                        <div class="reisen-single-left">
                            <div class="reisen-single-box">
                                <div class="image-holder">
                                    <img src="~assets/images/brand-9.png" class="img-fluid" alt="" />
                                </div>
                                <div class="text-box">
                                    <p>Turnbeutel Elitr Lebensabschnittsgefährte nam Vorsprung durch Technik his Weihnachten reque Schneewittchen assentior. Mozart principes Mettwurst ex Pfannkuchen Ut Lebensabschnittsgefährte solum Fernweh quas Guten Tag adversarium Herr Doktor ius, Angela Merkel minim Anwendungsprogrammierschnittstelle eum Wurst persecuti HugoClub Mate mel. Kartoffelkopf oratio Hallo vix. Currywurst eloquentiam Wurst per. Die unendliche Geschichte complectitur Projektplanung no. Turnbeutel Elitr Lebensabschnittsgefährte nam Vorsprung durch Technik his Weihnachten reque Schneewittchen assentior. Mozart principes Mettwurst ex Pfannkuchen Ut Lebensabschnittsgefährte solum Fernweh quas Guten Tag adversarium Herr Doktor ius.</p>    
                                </div>
                            </div>
                            <div class="reisen-single-box">
                                <div class="image-holder">
                                    <img src="~assets/images/brand-8.png" class="img-fluid" alt="" />
                                </div>
                                <div class="text-box">
                                    <h3>Hamburg ea Schwarzwälder Kirschtorte</h3>
                                    <p>Hallo consectetur Projektplanung elit, Rubin auf Schienen do Schmetterling tempor Deutsche Mark ut Mertesacker et Mercedes Benz magna bitte Ut Oktoberfest ad Grimms Märchen veniam, Erbsenzähler nostrud Kirschkerne ullamco Reinheitsgebot nisi Knappwurst aliquip Warmduscher ea Juttensack consequat. schnell aute Apfelschorle dolor Reinheitsgebot reprehenderit Eichhörnchen voluptate Mettwurst esse Mercedes Benz dolore Freude schooner.</p>    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-12">
                        <div class="reisen-single-right">
                            <div class="reisen-contribution">
                                <h3>letzter Beitrag</h3>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-6.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-5.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-12.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-4.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-2.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                                <div class="reisen-contribution-box">
                                    <div class="image-holder">
                                        <img src="~assets/images/brand-1.png" alt="" class="img-fluid" />
                                    </div>   
                                    <div class="text-box">
                                        <h4>Zeitgeist te Mercedes Benz</h4>
                                    </div>   
                                </div>
                            </div>
                            <div class="reisen-contribution">
                                <h3>Kategorien</h3>
                                <ul>
                                    <li>Warmduscher</li>
                                    <li>Juttensack nominavi</li>
                                    <li>Turnbeutel Elitr </li>
                                    <li>Vorsprung </li>
                                    <li>Technik </li>
                                    <li>Weihnachten </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-img"><img src="~assets/images/home.png" alt=""></div>
</section>

</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.boxer-sec {
    background:url(~assets/images/bg.png); 
    background-repeat: repeat;
    background-position: center; 
    position: relative;
    &:after{
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

@media (min-width: 1441px) {
    .container,
    .container-sm,
    .container-md,
    .container-lg,
    .container-xl {
        max-width: 1230px;
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
@media (max-width: 991px) {
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