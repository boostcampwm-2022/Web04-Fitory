import { AppDataSource } from "src/config/datasource.config";

export function initDatabase() {
  AppDataSource.initialize()
    .then(async () => {
      const queryRunner = AppDataSource.createQueryRunner();
      await queryRunner.dropDatabase("mock", true);
      await queryRunner.createDatabase("mock", true);
    })
    .catch(() => {
      throw new Error("Database Not Exist");
    });
}
