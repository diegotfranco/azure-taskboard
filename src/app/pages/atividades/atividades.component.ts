import { Component, OnInit } from '@angular/core';
import { ColDef, GridSizeChangedEvent } from 'ag-grid-community';

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

  onGridSizeChanged(params: GridSizeChangedEvent) {
    // get the current grids width
    var gridWidth = document.getElementById('grid-wrapper')!.offsetWidth;
    // keep track of which columns to hide/show
    var columnsToShow = [];
    var columnsToHide = [];
    // iterate over all columns (visible or not) and work out
    // now many columns can fit (based on their minWidth)
    var totalColsWidth = 0;
    var allColumns = params.columnApi.getColumns();
    if (allColumns && allColumns.length > 0) {
      for (var i = 0; i < allColumns.length; i++) {
        var column = allColumns[i];
        totalColsWidth += column.getMinWidth() || 0;
        if (totalColsWidth > gridWidth) {
          columnsToHide.push(column.getColId());
        } else {
          columnsToShow.push(column.getColId());
        }
      }
    }
    // show/hide columns based on current grid width
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    // fill out any available space to ensure there are no gaps
    params.api.sizeColumnsToFit();
  }
}
