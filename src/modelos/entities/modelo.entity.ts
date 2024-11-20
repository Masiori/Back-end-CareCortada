import { Evento } from "src/eventos/entities/evento.entity";
import { Column, Double, Entity, IntegerType, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Modelo {
    @PrimaryGeneratedColumn('uuid')
    id:String
    @Column (('text'),
        {
            unique:(true)
        }
    )nombre:String

    @Column(('number'),
        {
            unique:(false)
        }
    )anosdeexperiencia:number

    @Column(("number"),
        {
            unique:(false)
        }
    )edad:number

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

    @ManyToOne(
        ()=>Evento,
        (evento) => evento.modelos,{
            cascade:false,
            eager:true
        }
    )evento?:Evento;

}
