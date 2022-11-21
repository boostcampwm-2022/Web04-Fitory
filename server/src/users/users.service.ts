import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async getUserInfo(id: number) {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      return "No user find";
    }
    return user;
  }
}
