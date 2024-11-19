import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Drogas {
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
    )marca:String;

    @Column(`number`,
        {
            unique:false
        }
    )precio:number;
}
