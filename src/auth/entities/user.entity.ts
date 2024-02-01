import { Product } from "src/products/entities";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        unique: true
    })
    email: string;

    @Column({
        type: 'text',
        select: false,
    })
    password: string;

    @Column({
        type: 'varchar'
    })
    fullName: string;


    @Column({
        type: 'boolean',
        default: true
    })
    isActive: boolean;

    @Column({
        type: 'varchar',
        array: true,
        default: ['user']
    })
    roles: string[];

    @OneToMany(
        () => Product,
        product => product.user,
    )
    products: Product[];


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}
