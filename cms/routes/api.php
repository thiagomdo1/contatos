<?php

Route::prefix('contatos')->group(function () {

    Route::get('/', 'ContatoController@index')->middleware('cors');
    Route::post('/', 'ContatoController@store')->middleware('cors');
    Route::get('/{contato}', 'ContatoController@show')->middleware('cors');
    Route::put('/{contato}', 'ContatoController@update')->middleware('cors');
    Route::delete('/{contato}', 'ContatoController@delete')->middleware('cors');
    
});
