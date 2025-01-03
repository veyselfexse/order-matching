import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1735869963714 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "order" (
                "Id" uniqueidentifier PRIMARY KEY NOT NULL,
                "UserAddress" varchar(1000) NOT NULL,
                "Symbol" varchar(15) NOT NULL,
                "Price" decimal NOT NULL,
                "Quantity" decimal NOT NULL,
                "Side" varchar(5) NOT NULL,
                "Status" varchar(20) NOT NULL,
                "CreatedAt" datetimeoffset DEFAULT SYSUTCDATETIME() NOT NULL,
                "UpdatedAt" datetimeoffset DEFAULT SYSUTCDATETIME() NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`);
    }
}
