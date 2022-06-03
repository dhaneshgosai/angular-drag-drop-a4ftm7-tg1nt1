import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})
export class CdkDragDropConnectedSortingExample {
  stagesData = [
    {
      sectionName: 'stage1',
      sectionFiles: ['one', 'two'],
    },
    {
      sectionName: 'stage2',
      sectionFiles: ['three', 'four', 'five'],
    },
    {
      sectionName: 'stage3',
      sectionFiles: ['six', 'seven'],
    },
  ];

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  other = ['Something else', 'Quite extraordinary'];

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop:', event);
    console.log('drop:', event.item);
    console.log(event.item.data);
    console.log(event.item.dropContainer.data, event.previousContainer.id, event.container.id);
    // const parentItemId =
    if (
      !event.item.data &&
      event.item.dropContainer.data &&
      event.item.dropContainer.data.length > 0
    )
      return;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropSections(event: CdkDragDrop<string[]>) {
    console.log('dropSections:', event);
    console.log('drop:', event.item);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.stagesData, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(
      //   event.previousContainer.data,
      //   event.container.data,
      //   event.previousIndex,
      //   event.currentIndex
      // );
    }
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
