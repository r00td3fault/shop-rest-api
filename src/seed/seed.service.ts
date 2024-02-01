import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class SeedService {

  constructor(
    private readonly productService: ProductsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async runSeed() {

    await this.deleteTables();
    const adminUser = await this.insertNesUsers();

    await this.insertNewProducts(adminUser);
    return 'SEED EXECUTED';
  }

  private async deleteTables() {

    await this.productService.deleteAllProducts();
    await this.userRepository.delete({});

  }

  private async insertNesUsers() {

    const seedUsers = initialData.users;
    const usersToCreate = seedUsers.map(user => this.userRepository.create(user));

    const users = await this.userRepository.save(usersToCreate);

    return users.at(0);
  }

  private async insertNewProducts(user: User) {

    await this.productService.deleteAllProducts();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach(product => {
      insertPromises.push(this.productService.create(product, user));
    });

    await Promise.all(insertPromises);




    return true;
  }
}
