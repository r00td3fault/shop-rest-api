import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImage } from './product-image.entity';
import { User } from '../../auth/entities/user.entity';
import { ApiProperty } from "@nestjs/swagger";

@Entity({ name: 'products' })
export class Product {

    @ApiProperty({
        example: '3d093a77-2078-478f-8ed7-a609b58b3a84',
        description: 'Product ID',
        uniqueItems: true,
    })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({
        example: 'T-shirt Polo',
        description: 'Product name',
        uniqueItems: true,
    })
    @Column({
        type: 'text',
        unique: true
    })
    title: string;

    @ApiProperty({
        example: 55678,
        description: 'Product price',
        default: 0
    })
    @Column({
        type: 'float',
        default: 0
    })
    price: number;

    @ApiProperty({
        example: 'T shirt polo brand',
        description: 'Product description',
    })
    @Column({
        type: 'text',
        nullable: true
    })
    description: string;

    @ApiProperty({
        example: 't_shirt_polo',
        description: 'Product SLUG - for SEO routes',
        uniqueItems: true
    })
    @Column({
        type: 'text',
        unique: true
    })
    slug: string;

    @ApiProperty({
        example: 10,
        description: 'Product stock',
        default: 0,
    })
    @Column({
        type: 'int',
        default: 0
    })
    stock: number;

    @ApiProperty({
        example: ['M', 'XL', 'XXL'],
        description: 'Product sizes',
    })
    @Column({
        type: 'text',
        array: true
    })
    sizes: string[];

    @ApiProperty({
        example: 'women',
        description: 'Product gender'
    })
    @Column({
        type: 'varchar'
    })
    gender: string;

    @ApiProperty()
    @Column({
        type: 'varchar',
        array: true,
        default: []
    })
    tags: string[];

    @ApiProperty()
    @OneToMany(
        () => ProductImage,
        productImage => productImage.product,
        { cascade: true, nullable: true, eager: true }
    )
    images?: ProductImage[];


    @ManyToOne(
        () => User,
        user => user.products,
        { eager: true },
    )
    user: User;



    @BeforeInsert()
    checkSlugInsert() {
        if (!this.slug) {
            this.slug = this.title;
        }

        this.slug = this.slug.toLocaleLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }

    @BeforeUpdate()
    checkSlugUpdate() {

        this.slug = this.slug
            .toLocaleLowerCase()
            .replaceAll(' ', '_')
            .replaceAll("'", '');
    }

}
