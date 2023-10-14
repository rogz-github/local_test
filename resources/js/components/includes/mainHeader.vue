<template>
    <div class="page-wrapper">
        <header class="header header-intro-clearance" >
            <div class="myTopMainHeader" align="center">
                   <p><i class="ui car icon"></i> Free Shipping no minimum spend. Shop now and stay up to date on our latest products, deals, and tips!</p>
            </div>

            <div class="header-middle myMidMainHeader" >
                <div class="container-fluid">
                    <div class="header-left">
                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="ui align justify icon"></i>
                        </button>
                        
                        <router-link :to="{name:'home'}">
                        <a >
                            <img :src='imageUrl' alt="Rainbowbestdeal Logo" class="logo">
                        </a>
                        </router-link>
                        
                    </div><!-- End .header-left -->


                    <div class="header-center pt-3 pb-2" >
                        <div class="col-md-12">
                            <form >

                            <div class="ui fluid input">
                                    <input 
                                        type="search" 
                                        class="form-control" 
                                        name="keyword" 
                                        id="keyword" 
                                        placeholder="Search product ..." 
                                        value=""
                                        autocomplete="off" required="">
                                        <i  class="close large link icon " style='display:none;'></i>
                                    <button class="ui teal right  icon button pr-4 pl-4">
                                        <i class="search large icon"></i>
                                    </button>
                            </div>
                            </form>
                            <div class="searchResult" style="display:none;">
                               <div class="searchResultCatLabel">
                                <h4>Search : </h4>
                               </div>
                               
                               <div class='searchResultBottom' style='display:none;'>
                               <ul>
                                    <a href="" >
                                        <li>
                                            <div class="row">
                                                <div class="col-md-11">
                                                    <span ></span>
                                                </div>
                                            </div>
                                        </li>
                                    </a>
                                </ul>

                                <div class="row relatedItems">
                                    <div  class="col-md-12 mb-2 searchResultCatLabel" style='border:none;'>
                                        <h4>Related Items</h4>
                                    </div>
                                    
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="ui placeholder fluid datasHidePlaceholderProdRes"></div>
                                    </div>

                                    <div   class="col-md-4 items ">
                                       <a href="">
                                            <img src=""
                                             class="img-thumbnail relatedItemsImage" 
                                             alt="">
                                             <div class="relatedItemsName"></div>
                                       </a>
                                    </div>

                                    <div  class="col-md-12">
                                        <div class="ui message">
                                            No result found...
                                        </div>
                                    </div>
                                </div>
                               </div>
                               
                            </div>
                           
                        </div><!-- End .header-search -->
                    </div>

                    <div class="header-right" >
                        <span id="headerAccountSpan">
                        <div class="account">
                            <div class="dropdown  cart-dropdown  headerMyAccountDropdown">
                            
                                <a class="dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <div class="icon">
                                        <i class="ui user icon"></i>
                                    </div>
                                    <p>
                                        Account
                                    </p>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right account-dropdown" >
                                    <a href="login_register" class="ui button fluid huge pink" uk-tooltip="To view your account and check your order status.">Log In</a>
                                    <a href="login_register" class="ui button fluid huge blue mt-1" uk-tooltip="To track orders, save items and many more.">Register</a>
                                    <div class="ui divider"></div>
                                    <ul>
                                        <li>
                                            <a href="login_register">
                                            <i class="ui icon user"></i> My Account </a>
                                        </li>
                                        <li>
                                            <a href="login_register">
                                            <i class="ui icon cart"></i> My Orders </a>
                                        </li>
                                    </ul>

                                    <ul>
                                        <li>
                                            <a href="`+getBaseUrlInp+`account">My Account</a>
                                        </li>
                                        <li>
                                            <a href="`+getBaseUrlInp+`account">My Orders</a>
                                        </li>
                                        <li>
                                            <a >
                                                <router-link :to="{name:'cart'}">
                                                    Cart
                                                </router-link>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="`+getBaseUrlInp+`account">My Reviews</a>
                                        </li>
                                        <div class="ui divider"></div>
                                        <li>
                                            <button id="userLogout" class="icon button fluid huge red ui">
                                            <i class="icon out sign"></i> Log Out </button>
                                        </li>
                                    </ul>
                                </div>
                                <!-- End .dropdown-menu -->
                            </div><!-- End .cart-dropdown -->
                        </div><!-- End .compare-dropdown -->
                        </span>

                        <div class="wishlist">
                            <a type='button' title="Wishlist">
                                <div class="icon">
                                    <i class="ui heart icon"></i>
                                    <span class="wishlist-count badge">0</span>
                                </div>
                                <p>Wishlist</p>
                            </a>
                        </div><!-- End .compare-dropdown -->

                        
                         <span id="headertCartSpan">
                         <div class="dropdown cart-dropdown" >
                            <router-link :to="{name:'cart'}" class="dropdown-toggle">
                            <a title="Cart" >
                                
                                    <div class="icon">
                                        <i class="ui cart icon"></i>
                                        <span class="cart-count" style="padding: 6px;" >0</span>
                                    </div>
                                    <p>Cart</p>
                            </a>
                                </router-link>

                            
                        </div><!-- End .cart-dropdown -->
                         </span>
                    </div><!-- End .header-right -->
                </div>
            </div>

            <div class="header-bottom sticky-header myBottomMainHeader">
                <div class="container" >
                        <nav class="main-nav" >
                            <ul class="menu sf-arrows">
                                <li v-for="data in headNavDatas"  class="megamenu-container" :key='data.id' >
                                    <router-link :to="{name:'category',params:{'cslug':data.slug}}" class="sf-with-ul">
                                        <a >
                                        <h2 class="header text-uppercase"  v-html='data.cat'></h2>
                                    </a>
                                    </router-link>
                                    
                                    <div class="megamenu demo">
                                        <div class="menu-col">
                                            <div class="row">
                                                <div class="col-md-3 sticky-content" >
                                                    <img :src="'images/category/'+data.img" class="ui large fluid rounded image" :alt="data.img" >
                                                    <h4 style="margin-top:10px;"><i>UPTO 70% OFF</i></h4>
                                                </div>
                                                <div class="col-md-9">
                                                    <div class="row">
                                                        <div class="col-md-12 demo-list" >
                                                            <div class="uk-child-width-1-2@s uk-child-width-1-2@m" uk-grid="masonry: true">
                                                                <div v-for='sc in data.subcats' :key="sc.id" class="subcat-column">
                                                                    <a :href="data.slug+'/'+sc.slug">
                                                                        {{sc.subcat}}
                                                                    </a>
                                                                    <div class="row" >
                                                                        <div v-for='ssc in sc.subsubcats' :key="ssc.idd" class="col-md-6 subsubcat-column">
                                                                            <a :href="data.slug+'/'+sc.slug+'/'+ssc.slug" >
                                                                                {{ssc.subsubcat}}
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="megamenu-container ">
                                
                                <a href="categories" data-name="comfort zone" class="sf-with-ul"><h2><b>ALL</b></h2></a>
                                
                                </li>
                                <!-- END COMFORT ZONE -->

                            </ul><!-- End .menu -->
                        </nav><!-- End .main-nav -->

                        <button class="mobile-menu-toggler">
                            <span class="sr-only">Toggle mobile menu</span>
                            <i class="icon-bars"></i>
                        </button>
                    
                </div><!-- End .container -->
            </div><!-- End .header-bottom -->
        </header>

        <div class="container-fluid text-center promoCodeBelowHeadDiv mb-0">
            <div class="container" >
                <h2 @click="copyText('april2442')" >Exclusive, 10% off using this coupon code oct23 limited time only, shop now!</h2>
            </div>
        </div>

        <div>
            <p v-for='d in headNavDatas' :key="d.id">{{d.pcst_id}}</p>
        </div>
    </div>
</template>


<script >
import Swal from 'sweetalert2';
import axios from 'axios';
// CommonJS
export default {
    data(){
        return{
            imageUrl: '/images/logo.png',
            headNavDatas:[],
        }
    },
    methods:{
        getNav: function(){
            axios.get('/json/mainnav.json')
            .then(response => {
                console.log(response.data);
                this.headNavDatas = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        copyText: function(thisVal)
        {
            navigator.clipboard.writeText(thisVal).then(() => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-right',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })
        
                Toast.fire({
                    icon: 'success',
                    title: "<b style='font-size:16px;'>Coupon Copied</b>"
                })
            });
        }
    },
    created(){
        this.getNav();
    },
}


</script>