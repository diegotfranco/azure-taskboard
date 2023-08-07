import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css'],
})
export class AtividadesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  columnDefs: ColDef[] = [
    { field: 'utilizado', headerName: 'Utilizado' },
    { field: 'id', headerName: 'Id' },
    { field: 'tipo', headerName: 'Tipo' },
    { field: 'titulo', headerName: 'Título' },
    { field: 'area', headerName: 'Área' },
    { field: 'iteracao', headerName: 'Iteração' },
    { field: 'criadoEm', headerName: 'Criado em' },
    { field: 'estimativa', headerName: 'Estimativa' },
    { field: 'ativoEm', headerName: 'Ativo em' },
  ];

  rowData = [
    {
      utilizado: '1200',
      id: '152',
      tipo: 'Task',
      titulo: 'Tarefa 1',
      area: 'Conta Corrente',
      iteracao: '1',
      criadoEm: '07/08/2023, 11:44:29',
      estimativa: '2',
      ativoEm: '07/08/2023, 11:44:29',
    },
    {
      utilizado: '1200',
      id: '153',
      tipo: 'Task',
      titulo: 'Tarefa 2',
      area: 'Conta Corrente',
      iteracao: '1',
      criadoEm: '07/08/2023, 11:44:29',
      estimativa: '2',
      ativoEm: '07/08/2023, 11:44:29',
    },
  ];
}
