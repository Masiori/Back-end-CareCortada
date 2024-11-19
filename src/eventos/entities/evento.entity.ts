import { Column, PrimaryGeneratedColumn } from "typeorm";

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
}
