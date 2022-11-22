import { User } from "./entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findEveryUserName() {
    const userList = await this.usersRepository.find();
    return {
      nameList: userList.map((row) => row.name),
    };
  }
  
  async findEveryUserName() {
    const userList = await this.usersRepository.find();
    return {
      nameList: userList.map((row) => row.name),
    };
  }
}
