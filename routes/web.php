<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('index');
});

Route::get('/cart', function () {
    return view('user.cart');
});

Route::get('/c/{cslug}', function () {
    return view('user.category');
});


