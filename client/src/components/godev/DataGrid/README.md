import { DataGrid } from './components'

const registros = [
[21, 'Elio Lima', 'Desenvolvedor'],
[22, 'Goiaba Silva', 'Desenvolvedor'],
[23, 'Pedro Alves', 'Analista'],
[24, 'Ana Carvalho', 'Limpeza'],
[25, 'Amelo Cardoso', 'Pedreiro'],
[25, 'Clara Mendez', 'Limpeza'],
]

<DataGrid
cols={[{ name: 'id', text: 'Código' }, { name: 'nome', text: 'Nome' }, { name: 'cargo', text: 'Cargo' }]}
rows={registros}
titulo={'Lista de Usuários'}
