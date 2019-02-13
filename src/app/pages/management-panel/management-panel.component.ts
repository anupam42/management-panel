import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'src/app/shared/services/translate.service';
import { Product } from 'src/app/shared/models/product.model';
import { Action } from './../../shared/models/action.model';

@Component({
  selector: 'app-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.scss']
})
export class ManagementPanelComponent implements OnInit {

  public products: Product[];
  public actions: Action[];
  public ops: string[];
  public gens: string[];

  constructor(
    private translate: TranslateService
  ) {
    this.products = [];
    this.actions = [
      { id: '1', name: 'Ação 1' },
      { id: '2', name: 'Ação 2' },
      { id: '3', name: 'Ação 3' },
    ];
    this.ops = [ 'Envio', 'Assinatura', 'Envio de Duplicatas', 'Assinatura Digital', 'Nova Operação' ];
    this.gens = [ 'Carteira', 'Instruções' ];
  }

  ngOnInit() { }

}
