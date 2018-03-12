import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaService, DragulaModule } from 'ng2-dragula/ng2-dragula';

import { PropagandaComponent } from './propaganda.component';
import { PropagandaRoutingModule } from './propaganda-routeing';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      DragulaModule,
      PropagandaRoutingModule
    ],
    declarations: [
        PropagandaComponent
    ],
    providers: [
      DragulaService
    ],
  })
  export class PropagandaModule {}

