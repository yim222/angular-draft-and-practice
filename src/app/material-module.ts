import {NgModule} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {DragDropModule} from '@angular/cdk/drag-drop';


/**
 * Compatibility issues :
 * MatToolBarRow - Doesn't work with IVY
 */


@NgModule({
  exports: [

    MatDividerModule,
    MatToolbarModule,
    DragDropModule

  ]
})
export class MaterialModule {}


/**  Copyright 2019 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
