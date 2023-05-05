import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MaterialModule } from '../material.module';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-wiki',
  standalone: true,
  imports: [CommonModule, MaterialModule, EditorModule],
  template: `
    <mat-drawer-container class="flex-grow-1">
      <mat-drawer mode="side" opened style="width: 20em">
        <mat-toolbar>
          <h2>Wiki</h2>
        </mat-toolbar>
        <div class="container-fluid">
          <mat-tree [dataSource]="dataSource" [treeControl]="treeControl">
            <!-- This is the tree node template for leaf nodes -->
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding>
              <!-- use a disabled button to provide padding for tree leaf -->
              <button mat-icon-button disabled></button>
              {{ node.name }}
            </mat-tree-node>
            <!-- This is the tree node template for expandable nodes -->
            <mat-tree-node
              *matTreeNodeDef="let node; when: hasChild"
              matTreeNodePadding
            >
              <button
                mat-icon-button
                matTreeNodeToggle
                [attr.aria-label]="'Toggle ' + node.name"
              >
                <mat-icon class="mat-icon-rtl-mirror">
                  {{
                    treeControl.isExpanded(node)
                      ? 'expand_more'
                      : 'chevron_right'
                  }}
                </mat-icon>
              </button>
              {{ node.name }}
            </mat-tree-node>
          </mat-tree>
        </div>
      </mat-drawer>

      <mat-drawer-content>
        <div class="container-fluid h-100 d-flex flex-column py-3">
          <div class="d-flex align-items-center">
            <mat-form-field class="flex-grow-1 me-2">
              <mat-label>Name</mat-label>
              <input matInput value="Getting started" />
            </mat-form-field>

            <button mat-stroked-button class="me-2">Cancel</button>
            <button mat-flat-button color="primary">Save</button>
          </div>

          <editor
            [init]="{
              plugins: 'lists link image table code help wordcount',
              skin: 'oxide',
              content_css: 'default',
              promotion: false,
              branding: false,
              height: '100%'
            }"
            class="flex-grow-1"
          ></editor>
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `
      :host {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WikiComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
