<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Best Deal in USA | Furniture, Beauty, Health, Electronics more</title>
        <link rel="shortcut icon" href="images/favicon.png">
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        @vite([
                'resources/css/old/uikit.min.css',
                'resources/css/old/line-awesome.min.css',
                'resources/css/old/semantic.min.css',
                'resources/css/old/placeholder.css',
                'resources/css/old/bootstrap.min.css',
                'resources/css/old/mainStyle.css',
                'resources/css/old/skin-demo-2.css',
                'resources/css/old/demo-2.css',
                'resources/css/old/sweetalert.css',
                'resources/css/app.css',
                'resources/css/old/my_responsive.css',
                'resources/js/imageLazyLoad.js',
                'resources/js/app.js',
            ])

    </head>
    <body class="antialiased">
        <div id="app">
        </div>
</html>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.17.1/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.17.1/dist/js/uikit-icons.min.js"></script>