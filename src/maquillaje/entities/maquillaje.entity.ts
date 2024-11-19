import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Maquillaje {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:false
        }
    )tipoMaquillaje:String;

    @Column(`number`,
        {
            unique:false
        }
    )precio:number;

    @Column(`text`,
        {
            unique:false
        }
    )nombre:String;

    @Column(`text`,
        {
            unique:false
        }
    )marca:String;

    @Column(`text`,
        {
            unique:false
        }
    )imagen:String;
}
