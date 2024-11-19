import { Column } from "typeorm";

export class Photo {
    @Column(`text`,
        {
            unique:true
        }
    )nombre:String;

    @Column(`text`,
        {
            unique:true
        }
    )url:String;

    @Column(`text`,
        {
            unique:false
        }
    )descripcion:String;
}
