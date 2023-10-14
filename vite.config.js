import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/css/old/uikit.min.css/',
                'resources/css/old/line-awesome.min.css', 
                'resources/css/old/semantic.min.css', 
                'resources/css/old/placeholder.css', 
                'resources/css/old/mainStyle.css', 
                'resources/css/old/bootstrap.min.css', 
                'resources/css/old/skin-demo-2.css', 
                'resources/css/old/demo-2.css', 
                'resources/css/old/sweetalert.css', 
                'resources/css/app.css',
                'resources/css/old/my_responsive.css', 
                'resources/js/all.js',
                'resources/js/imageLazyLoad.js',
            ],
            refresh: true,
        }),
        vue({
            template:{
                transformAssetUrls:{
                    base:null,
                    includeAbsolute:false
                }
            }
        })
    ],
    build: {
        chunkSizeWarningLimit: 1600,
    },
    resolve: {
        alias: {
            '$':  'jQuery',
        },
    },
});
