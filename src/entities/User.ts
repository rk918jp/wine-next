import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
	public id!: number;

  @Column()
  public name: string = ''

  @Column()
  public winery: string = ''

  @Column()
  public wineType: string = ''

  @Column()
  public description: string = ''
}

export default User;