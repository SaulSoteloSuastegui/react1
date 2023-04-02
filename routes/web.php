<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::view('/lista','componentes.lista')->name('componentes.lista');
Route::view('/useStateuno','componentes.useStateuno')->name('componentes.useStateuno');

Route::view('/contador','componentes.contador')->name('componentes.contador');

Route::view('/input','componentes.input')->name('componentes.input');
Route::view('/formulario','componentes.formulario')->name('componentes.formulario');


Route::view('/agregarlista','componentes.agregarlista')->name('componentes.agregarlista');