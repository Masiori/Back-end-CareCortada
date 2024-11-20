import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn(`uuid`)
    id:String;

    @Column(`text`,
        {
            unique:true
        }
    )user_name:String

    @Column(`text`,
        {
            unique:false
        }
    )password:String

    @Column(`number`,
        {
            unique:false
        }
    )miembro:number
}
