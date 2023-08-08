import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-mencoes',
  templateUrl: './mencoes.component.html',
  styleUrls: ['./mencoes.component.css'],
})
export class MencoesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Id' },
    { field: 'tipo', headerName: 'Tipo' },
    { field: 'titulo', headerName: 'Título' },
    { field: 'mensagem', headerName: 'Mensagem' },
  ];

  rowData = [
    {
      id: '152',
      tipo: 'Task',
      titulo: 'Tarefa 1',
      mensagem: 'Mensagem 1',
    },
    {
      id: '153',
      tipo: 'Task',
      titulo: 'Tarefa 2',
      mensagem: 'Mensagem 2',
    },
  ];
}
