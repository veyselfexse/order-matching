import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity()
export class Order {
    @PrimaryColumn({ type: "uniqueidentifier" })
    Id: string = uuidv4();

    @Column()
    UserAddress: string;

    @Column()
    Symbol: string;

    @Column("decimal")
    Price: number;

    @Column("decimal")
    Quantity: number;

    @Column()
    Side: string;

    @Column()
    Status: string;

    @Column({ type: "datetimeoffset", default: () => "SYSUTCDATETIME()" })
    CreatedAt: Date;

    @Column({ type: "datetimeoffset", default: () => "SYSUTCDATETIME()" })
    UpdatedAt: Date;
}