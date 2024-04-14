import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Jogador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickName: string;

  @Column()
  fotoDePerfil: string; // Armazena o caminho para a imagem

  @Column()
  senha: string;

  @Column()
  recorde: number;
}
