import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Jogador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Name: string;

  @Column()
  fotoDePerfil: string; // Armazena o caminho para a imagem

  @Column()
  senha: string;

  @Column()
  recorde: number;
}