import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from "@angular/material/icon";
import {MatLabel} from "@angular/material/form-field";
import {ColorPickerModule} from "ngx-color-picker";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";


/**
 * Compatibility issues :
 * MatToolBarRow - Doesn't work with IVY
 */


@NgModule({
  imports:[

  ],
  exports: [

    MatDividerModule,
    MatToolbarModule,
    DragDropModule
    ,MatIconModule,
    ColorPickerModule,
    FormsModule,
    MatCardModule,
    MatInputModule


  ]
})
export class MaterialModule {}


/**  Copyright 2019 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
