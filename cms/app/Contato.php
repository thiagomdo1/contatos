<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contato extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];
	protected $fillable = ['nome', 'email', 'telefone', 'celular'];
}
