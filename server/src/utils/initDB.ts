import { AppDataSource } from "src/config/datasource.config";

export function initDatabase() {
  AppDataSource.initialize()
    .then(async () => {
      const queryRunner = AppDataSource.createQueryRunner();
      await queryRunner.dropDatabase("test", true);
      await queryRunner.createDatabase("test", true);
    })
    .catch((err) => {
      throw new Error("Database Not Exist");
    });
}
