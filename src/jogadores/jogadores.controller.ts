import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JogadoresService } from './jogadores.service';
import { CreateJogadoreDto } from './dto/create-jogadore.dto';
import { UpdateJogadoreDto } from './dto/update-jogadore.dto';

// A classe JogadoresController é decorada com @Controller('jogadores'), 
// o que significa que as rotas definidas nesta classe estarão prefixadas com 'jogadores'.
@Controller('jogadores')
export class JogadoresController {
  // O serviço JogadoresService é injetado através do construtor.
  constructor(private readonly jogadoresService: JogadoresService) {}

  // A rota POST '/jogadores' que cria um novo jogador.
  @Post()
  async create(@Body() createJogadoreDto: CreateJogadoreDto) {
    const jogador = await this.jogadoresService.create(createJogadoreDto);
    return { message: 'Jogador invocado com sucesso!', jogador };
  }

  // A rota GET '/jogadores' que retorna todos os jogadores.
  @Get()
  async findAll() {
    const jogadores = await this.jogadoresService.findAll();
    return { message: 'Os guerreiros foram encontrados:', jogadores };
  }

  // A rota GET '/jogadores/:id' que retorna um jogador específico pelo id.
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const jogador = await this.jogadoresService.findOne(+id);
    return { message: 'Um novo guerreiro foi identificado:', jogador};
  }

  // A rota PATCH '/jogadores/:id' que atualiza um jogador específico pelo id.
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateJogadoreDto: UpdateJogadoreDto) {
    const jogador = await this.jogadoresService.update(+id, updateJogadoreDto);
    return { message: 'A Calamidade Celestial abençoou  ${jogador.name}', jogador };
  }

  // A rota DELETE '/jogadores/:id' que remove um jogador específico pelo id.
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.jogadoresService.remove(+id);
    return { message: 'As runas o expurgam!' };
  }
}
