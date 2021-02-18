<template>
    <header>
        <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="navigation">
                                <nav class="navbar navbar-expand-lg "> <NuxtLink class="navbar-brand" to="/"><img class="img-fluid" src="~assets/images/logo.svg" alt="" /></NuxtLink>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><img src="~assets/images/menu.png" alt=""></button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav m-auto">
                                            <li class="nav-item"> <a class="nav-link" href="#">Mitwirkende <img src="~assets/images/down-arrow.svg" alt=""></a>
                                                <ul class="menu-box dropdown-menu">
                                                    <a class="dropdown-item" href="#">Hauptdarsteller</a> <a class="dropdown-item" href="#">Buhnenpersonal</a> <a class="dropdown-item" href="#">Unterstutzer</a>
                                                </ul>
                                            </li>
                                            <li class="nav-item"> <NuxtLink class="nav-link " to="/aufReisen">Auf Reisen</NuxtLink> </li>
                                            <li class="nav-item"> <NuxtLink class="nav-link " to="/kalender">Kalender</NuxtLink> </li>
                                            <li class="nav-item"> <NuxtLink class="nav-link " to="/aufnahmen">Aufnahmen</NuxtLink> </li>
                                            <li class="nav-item"> <NuxtLink class="nav-link " to="/stimmen">Stimmen</NuxtLink> </li>
                                            <li class="nav-item"> <a class="nav-link " href="#">Aktuell</a> </li>
                                            <li class="nav-item"> <NuxtLink class="nav-link " to="/kontakt">Kontakt</NuxtLink> </li>
                                            <li class="nav-item dropdown show"> <a class="nav-link  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</a>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">EN</a> <a class="dropdown-item" href="#">RU</a> <a class="dropdown-item" href="#">ES</a> </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
     </header>
</template>
<script>
export default {
    data() {
      return {
        name: 'BootstrapVue',
        show: true
      }
    },
    methods: {
      toggle() {
       
        this.show = !this.show
      },

    }
}
</script>

<style lang="scss" scoped>
 /*============= Header Start ===========*/
 header {
   transition: all ease-in-out 0.5s;
   position: absolute;
   width: 100%;
   left: 0;
   top: 0px;
   z-index: 2;
   &.fixed-header {
    position: fixed;
    
    background: linear-gradient(#fcf4ce 0%, rgba(252, 245, 206, 0) 100%);
    .navigation {
     .navbar {
       
       
       .navbar-nav {
        
         li {
          
           .nav-link {
            color:$black;
            img{

              filter: brightness(0.1);
            }
            
           }
           .dropdown-toggle {
            color: $black;
            border-color: $black;
           }
         }
       }
     }
   }


   }
   .navigation {
     .navbar {
       padding: 0;
       .navbar-brand {
         margin: 0;
         padding: 0;
       }
       .navbar-nav {
         padding: 0;
         li {
           position: relative;
           margin-right: 43px;
           &.active {
             color: $white-color;
           }
           &:last-child {
             margin-right: 0;
           }
           &:hover .menu-box {
             display: block;
           }
           .nav-link {
             padding: 4px 7px;
             color: $white-color;
             font-size: $font_20;
             @include Helvetica_Neue(300);
             &:hover {
               color: $red;
             }
             img {
               position: relative;
               top: -10px;
               right: 3px;
             }
           }
           .dropdown-toggle {
             border: 1px solid $white-color;
             &:after {
               display: none;
             }
           }
         }
       }
     }
   }
 }


@media (max-width: 1440px) {
    header{
        .navigation{
            .navbar {
                .navbar-nav{
                    li {
                        margin-right: 20px;
                           
                    }
                }
            }
        }
    }

}

@media (max-width: 1199px) {
    header{
        .navigation{
            .navbar {
                .navbar-nav{
                    li {
                        margin-right: 17px;
                        
                        .nav-link{
                            font-size: $font_16;
                        }
                    }
                }
            }
        }
    }
  
}

@media (max-width: 991px) {
 div#navbarSupportedContent {
        position: fixed;
        width: 100%;
        left: 0;
        top: 87px;
        background-color: #000;
        padding: 20px 30px 5px;
    }
    header{
      &.fixed-header{
        .navigation{
        .navbar {
        .navbar-nav {
        li{
        .nav-link{
          color:$white_color
        }
        }
        }
        }
}

      }
        .navigation{
            .navbar {
                .navbar-nav{
                    li {
                        margin: 0 0 15px 0;
                        color:white;
                        .nav-link{
                            padding: 0;
                        }
                        .dropdown-toggle {
                            display: inline-block;
                            padding: 4px 7px;
                        }
                    }
                }
            }
        }
    } 
}

@media (max-width: 575px) {
  header{
        .navigation {
            .navbar {
                .navbar-brand{
                    img{
                        width: 120px;
                    }
                }
            }
        }
    } 
    div#navbarSupportedContent {
        top: 75px;
    }
 
}

 /*============= Header End ===========*/
</style>
