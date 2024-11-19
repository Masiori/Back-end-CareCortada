import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sicario {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:true
        }
    )nombreClave:String;

    @Column(`number`,
        {
            unique:false
        }
    )trabajosRealizados:number;

    @Column(`number`,
        {
            unique:false
        }
    )tarifaMinima:number;
}
