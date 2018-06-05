<?php

namespace App\Http\Controllers;

use App\Contato;
use Illuminate\Http\Request;
use Validator;

class ContatoController extends Controller
{
    public function index()
    {
        return Contato::select('*')->orderby('nome', 'asc')->get();
    }



    public function show(Contato $contato)
    {
        return $contato;
    }



    public function store(Request $request)
    {
        $this->validate($request, [
            'nome' => 'required|max:191',
        ]);
        $contato = Contato::create($request->all());
        return response()->json($contato, 201);
    }



    public function update(Request $request, Contato $contato)
    {
        $this->validate($request, [
            'nome' => 'required|max:191',
        ]);
        $contato->update($request->all());
        return response()->json($contato, 200);
    }


    
    public function delete(Contato $contato)
    {
        $contato->delete();
        return response()->json(null, 204);
    }
}
