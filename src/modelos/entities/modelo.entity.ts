import { Column, Double, Entity, IntegerType, PrimaryGeneratedColumn } from "typeorm";
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
})añosdeexperiencia:number

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
})imagen:String

}
