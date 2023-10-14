<template>
    <div class="container-fluid "  >
        <div class="row" >
            <div class="col-md-12" style="margin-bottom: 10px;">
                <div uk-slideshow="animation: fade;ratio: 15:5;autoplay: true">
                    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                        <ul class="uk-slideshow-items">
                            <li v-for='d in sliderImgs' :key="d.id" class="img-thumbnail">
                                <a href="best-deal-savings" target="_blank">
                                    <video v-if='d.type=="video"' :src="d.bsv_img" autoplay loop muted playsinline uk-cover></video>
                                    <img v-else :src="d.bsv_img" :alt="d.img_alt" uk-cover>
                                </a>
                            </li>
                        </ul>
                        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous" style="color:white;background-color:#F86EC0;border:1.5px solid white;box-shadow:0px 0px 6px white;"></a>
                        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next" style="color:white;background-color:#F86EC0;border:1.5px solid white;box-shadow:0px 0px 6px white;"></a>

                    </div>
                    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" ></ul>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    data(){
        return{
            sliderImgs:[],
        }
    },
    mounted(){
        this.getSlider();
    },
    methods:{
        getSlider: function(){
            axios.get('/getMainSlider')
            .then(response => {
                console.log(response.data);
                this.sliderImgs = response.data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
    }
}


</script>