<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\UserModel;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function loginRegister()
    {
        return view('users.loginRegister');
    }

    public function getMainSlider(){
        $slide = DB::table('banner_slider_style as bss')
            ->select('bsv.bsv_img','bsv.bsv_link','bsv.img_alt','bsv.type')
            ->rightJoin('banner_slider_value as bsv', 'bss.bss_id', '=', 'bsv.bss_id')
            ->where('bss.bss_status','on')
            ->where('bsv.bsv_display','on')
            ->where('bsv.bsv_status','active')
            ->get();
            return response()->json($slide);
    }
}
