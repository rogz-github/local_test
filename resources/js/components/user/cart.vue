<template>
cart
</template>

<script>
import MainNav from '../../components/includes/mainHeader.vue'
export default {
    components:{
        MainNav,
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

