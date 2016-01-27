<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
	/**
	 * Display homepage.
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return \Response
	 */
    public function index(Request $request)
    {
    	$locales = str_replace('"', "'", json_encode(trans('app')));

    	return view('home.index', compact('locales'));
    }
}
