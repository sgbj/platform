import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MaterialModule, EditorModule, AgGridModule],
  template: `
    <div class="container py-2">
      <h1>Dashboard</h1>

      <mat-tab-group mat-stretch-tabs="false" class="mb-2">
        <mat-tab label="First">First</mat-tab>
        <mat-tab label="Second">Second</mat-tab>
        <mat-tab label="Third">Third</mat-tab>
      </mat-tab-group>

      <div class="my-3">
        <ag-grid-angular
          class="ag-theme-platform full"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [rowData]="rowData"
          rowSelection="multiple"
          domLayout="autoHeight"
        >
        </ag-grid-angular>
      </div>

      <div class="my-3">
        <editor
          [init]="{
            plugins: 'lists link image table code help wordcount',
            skin: 'oxide',
            content_css: 'default',
            promotion: false,
            branding: false
          }"
        ></editor>
      </div>

      <div class="alert alert-warn px-3 py-3 mb-3">
        <div class="d-flex">
          <mat-icon class="alert-icon me-3">close</mat-icon>
          <div>
            <h4 class="mb-1">There are 2 issues with the form</h4>
            <div>
              <ul class="mb-1 ps-3">
                <li>Your name is required</li>
                <li>You must provide at least one reference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="alert alert-success px-3 py-2 mb-3">
        <div class="d-flex align-items-center">
          <mat-icon class="alert-icon me-3">check</mat-icon>
          <div class="flex-grow-1">
            <h4 class="mb-0">Saved successfully</h4>
          </div>
          <button mat-icon-button>
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <div class="d-flex">
        <mat-icon class="opacity-50 me-3 flex-shrink-0 fs-3">inbox</mat-icon>
        <div>
          <h4 class="mb-1">Discussion moved</h4>
          <p class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
            tenetur.
          </p>
          <button mat-button color="primary" class="ms-n3">Undo</button>
          <button mat-button>Dismiss</button>
        </div>
        <button mat-icon-button class="ms-3 me-n2 mt-n2">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>
        The Shiba Inu is the smallest of the six original and distinct spitz
        breeds of dog from Japan. A small, agile dog that copes very well with
        mountainous terrain, the Shiba Inu was originally bred for hunting. Here
        are some <a routerLink="/">documents</a> for further information.
      </p>

      <mat-card class="my-5" style="max-width: 300px">
        <mat-card-header>
          <div mat-card-avatar class="example-header-image"></div>
          <mat-card-title>Shiba Inu</mat-card-title>
          <mat-card-subtitle>Dog Breed</mat-card-subtitle>
        </mat-card-header>
        <img
          mat-card-image
          src="https://material.angular.io/assets/img/examples/shiba2.jpg"
          alt="Photo of a Shiba Inu"
        />
        <mat-card-content>
          <p>
            The Shiba Inu is the smallest of the six original and distinct spitz
            breeds of dog from Japan. A small, agile dog that copes very well
            with mountainous terrain, the Shiba Inu was originally bred for
            hunting.
          </p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>LIKE</button>
          <button mat-button>SHARE</button>
        </mat-card-actions>
      </mat-card>

      <div>
        <mat-form-field appearance="outline">
          <mat-label>Field 1</mat-label>
          <input matInput />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Field 2</mat-label>
          <input matInput />
        </mat-form-field>
      </div>

      <div>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Field 1</mat-label>
          <input matInput />
        </mat-form-field>

        <mat-form-field appearance="fill" color="accent">
          <mat-label>Field 2</mat-label>
          <input matInput />
        </mat-form-field>
      </div>

      <div>
        <mat-form-field appearance="outline" color="warn">
          <mat-label>Field 1</mat-label>
          <input matInput />
        </mat-form-field>

        <mat-form-field appearance="fill" color="warn">
          <mat-label>Field 2</mat-label>
          <input matInput />
        </mat-form-field>
      </div>

      <div class="my-5">
        <button mat-flat-button color="primary" class="me-3">Button 1</button>
        <button mat-flat-button color="accent" class="me-3">Button 2</button>
        <button mat-flat-button color="warn" class="me-3">Button 3</button>
        <button mat-flat-button>Button 4</button>
      </div>

      <div class="my-5">
        <button mat-button color="primary" class="me-3">Button 1</button>
        <button mat-button color="accent" class="me-3">Button 2</button>
        <button mat-button color="warn" class="me-3">Button 3</button>
        <button mat-button>Button 4</button>
      </div>

      <div class="my-5">
        <button mat-raised-button color="primary" class="me-3">Button 1</button>
        <button mat-raised-button color="accent" class="me-3">Button 2</button>
        <button mat-raised-button color="warn" class="me-3">Button 3</button>
        <button mat-raised-button>Button 4</button>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  columnDefs: ColDef[] = [
    { field: 'id', checkboxSelection: true },
    { field: 'name' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    editable: true,
    resizable: true,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
  };

  rowData = Array(10)
    .fill(0)
    .map((_, i) => ({ id: i, name: `Tenant ${i}` }));
}
