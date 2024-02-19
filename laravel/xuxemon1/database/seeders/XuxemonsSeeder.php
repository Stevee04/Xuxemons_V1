<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; //libreria nos permite hacer insert
use Illuminate\Support\Str; //liberaria para funciones str
use Illuminate\Support\Facades\Hash;
use App\Models\Xuxemon;
use Illuminate\Support\Facades\Date;

class XuxemonsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {

        $nombre = ['Apleki', 'Avecrem', 'Bambino', 'Beeboo', 'Boo-hoot', 'Cabrales', 'Catua', 'Catyuska', 'Chapapá', 'Chopper', 'Cuellilargui', 'Deskangoo', 'Doflamingo', 'Dolly', 'Elconchudo', 'Eldientes', 'Elgominas', 'Flipper', 'Floppi', 'Horseluis', 'Krokolisko', 'Kurama', 'Ladybug', 'Lengualargui', 'Medusation', 'Meekmeek', 'Megalo', 'Mocha', 'Murcimurci', 'Nemo', 'Oinkcelot', 'Oreo', 'Otto', 'Pinchimott', 'Pollis', 'Posón', 'Quakko', 'Rajoy', 'Rawlion', 'Rexxo', 'Ron', 'Sesssi', 'Shelly', 'Sirucco', 'Torcas', 'Trompeta', 'Trompi', 'Tux'];
        $tipo = ['tierra', 'agua', 'aire'];

        foreach ($nombre as $nombres) {
            DB::table('xuxedex')->insert([
                'id' => '0',
                'nombre' => $nombres,
                'tipo' => $tipo[array_rand($tipo)],
                'archivo' => strtolower($nombres).'.png',
            ]);
        }
    }
}
