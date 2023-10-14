<template>
    <!-- <MainNav/> -->
    <div>
        <MainNav/>
        <router-view>
        </router-view>
        home
    </div>
    <!-- <MainFooter/> -->
</template>

<script>
import MainNav from './components/includes/mainHeader.vue'
import MainFooter from './components/includes/mainFooter.vue'
export default {
    components:{
        MainNav,
        MainFooter
    },
    data(){
        return{
        }
    },
    methods:{
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
    },
}
</script>

