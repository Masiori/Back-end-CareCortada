import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prostituta {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:false
        }
    )nombre:String;

    @Column(`number`,
        {
            unique:false
        }
    )edad:number;

    @Column(`number`,
        {
            unique:false
        }
    )anosdeexperiencia:number;

    @Column(('number'),
        {
            unique:(false)
        }
    )estatura:number

    @Column(('text'),
        {
            unique:(true)
        }
    )imagen:String
}
