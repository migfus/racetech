<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\{EventController};

Route::inertia('/', 'Welcome')->name('home');

Route::resource('/events', EventController::class)->only(['index']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
