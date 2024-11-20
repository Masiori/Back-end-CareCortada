import { Maquillaje } from "src/maquillaje/entities/maquillaje.entity";
import { Modelo } from "src/modelos/entities/modelo.entity";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Evento {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:false
        }
    )nombre:String;

    @Column(`text`,
        {
            unique:false
        }
    )fecha:String;

    @Column(`text`,
        {
            unique:false
        }
    )lugar:String;

    @Column(`number`,
        {
            unique:false
        }
    )valorEntrada:number;

    @OneToMany(
        ()=>Modelo,modelo => modelo.evento
    )
    modelos?:Modelo[];

    @OneToMany(
        ()=>Maquillaje,maquillaje=>maquillaje.evento
    )
    maquillajes?:Maquillaje[];
}
