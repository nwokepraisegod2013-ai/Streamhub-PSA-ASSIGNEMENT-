<?php

use App\Http\Controllers\Api\VideoController;
use Illuminate\Support\Facades\Route;

Route::get('/videos', [VideoController::class, 'index']);
Route::get('/videos/{video}', [VideoController::class, 'show']);
Route::get('/categories', [VideoController::class, 'categories']);
