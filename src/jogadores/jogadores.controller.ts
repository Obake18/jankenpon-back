import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

@Controller('jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}

  @Post()
  async create(@Body() createJogadoreDto: CreateJogadoreDto) {
    const jogador = await this.jogadoresService.create(createJogadoreDto);
    return { message: 'Jogador invocado com sucesso!', jogador };
  }

  @Get()
  async findAll() {
    const jogadores = await this.jogadoresService.findAll();
    return { message: 'Os guerreiros foram encontrados:', jogadores };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const jogador = await this.jogadoresService.findOne(+id);
    return { message: 'Um novo guerreiro foi identificado:', jogador};
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateJogadoreDto: UpdateJogadoreDto) {
    const jogador = await this.jogadoresService.update(+id, updateJogadoreDto);
    return { message: 'A Calamidade Celestial abençoou  ${jogador.name}', jogador };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.jogadoresService.remove(+id);
    return { message: 'As runas o expurgam!' };
  }
}
