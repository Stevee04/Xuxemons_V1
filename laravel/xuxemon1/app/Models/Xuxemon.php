<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Xuxemon extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    /*
     
The attributes that are mass assignable.*
@var array<int, string>*/
    protected $fillable = ['id', 'nombre', 'tipo', 'archivo'];

/*The attributes that should be hidden for serialization.*
@var array<int, string>*/
protected $hidden = ['password','remember_token',];
}

// {
    

//     /
     
// The attributes that are mass assignable.*
// @var array<int, string>*/
// protected $fillable = ['id','nick','email','nombre','apellido','dni','fecha','password','rol',];

//     /
     
// The attributes that should be hidden for serialization.*
// @var array<int, string>*/
// protected $hidden = ['password','remember_token',];

//     /**
     
// The attributes that should be cast.*
// @var array<string, string>*/
// protected $casts = ['email_verified_at' => 'datetime','password' => 'hashed',];
// }