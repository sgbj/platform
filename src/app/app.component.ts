import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MaterialModule } from './material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  template: `
    <mat-toolbar color="primary" class="px-2">
      <button mat-icon-button class="ms-1 me-3" (click)="toggleMenu()">
        <mat-icon>menu</mat-icon>
      </button>

      <h1 class="mat-headline-5">Platform</h1>

      <span class="flex-grow-1"></span>

      <!--
      <mat-form-field>
        <mat-label>Tenant</mat-label>
        <mat-select> </mat-select>
      </mat-form-field>
      <mat-form-field>
        <mat-label>Search</mat-label>
        <mat-icon matPrefix class="me-2">search</mat-icon>
        <input
          matInput
          type="search"
          [matAutocomplete]="searchAutocomplete"
          [(ngModel)]="value"
        />
        <button
          [hidden]="!value"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="value = ''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <mat-autocomplete
        #searchAutocomplete="matAutocomplete"
        class="search-autocomplete"
      >
        <mat-option value="One">One</mat-option>
        <mat-option value="Two">Two</mat-option>
        <mat-option value="Three">Three</mat-option>
        <mat-option value="Four">Four</mat-option>
      </mat-autocomplete>
-->
      <!--
      <div class="command-palette-container2">
        <div class="command-palette-field">
          <mat-icon class="mx-2">search</mat-icon>
          <input type="search" placeholder="Search" />
        </div>
      </div>
-->

      <div class="command-palette-container">
        <div class="command-palette-field">
          <mat-icon class="mx-2">search</mat-icon>
          <input type="search" value="Smith" />
        </div>
        <mat-tab-group mat-stretch-tabs="false" class="mt-2">
          <mat-tab label="People">
            <mat-nav-list>
              <mat-list-item>
                <a matLine>Smith, John</a>
              </mat-list-item>
              <mat-list-item>
                <a matLine>Smith, Jane</a>
              </mat-list-item>
            </mat-nav-list>
          </mat-tab>
          <mat-tab label="Cases"></mat-tab>
        </mat-tab-group>
      </div>

      <span class="flex-grow-1"></span>

      <button mat-icon-button class="me-2" matBadge="2">
        <mat-icon>notifications</mat-icon>
      </button>

      <button mat-icon-button class="me-1">
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>

    <mat-sidenav-container #menuContainer>
      <mat-sidenav mode="side" opened [class.open]="isMenuOpen">
        <div class="nav-container m-2">
          <mat-nav-list class="pt-0">
            <a mat-list-item routerLink="/" [activated]="true">
              <mat-icon
                matListItemIcon
                matTooltip="Home"
                matTooltipPosition="after"
                >home</mat-icon
              >
              <span matListItemTitle>Home</span>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Search"
                matTooltipPosition="after"
                >search</mat-icon
              >
              <span matListItemTitle>Search</span>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Reports"
                matTooltipPosition="after"
                >analytics</mat-icon
              >
              <span matListItemTitle>Reports</span>
              <button
                matListItemMeta
                mat-icon-button
                aria-label="Expand/collapse"
              >
                <mat-icon>expand_more</mat-icon>
              </button>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Calendar"
                matTooltipPosition="after"
                >calendar_today</mat-icon
              >
              <span matListItemTitle>Calendar</span>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Documents"
                matTooltipPosition="after"
                >folder</mat-icon
              >
              <span matListItemTitle>Documents</span>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Tasks"
                matTooltipPosition="after"
                >checklist</mat-icon
              >
              <span matListItemTitle>Tasks</span>
            </a>

            <a mat-list-item routerLink="/chat">
              <mat-icon
                matListItemIcon
                matTooltip="Chat"
                matTooltipPosition="after"
                >chat</mat-icon
              >
              <span matListItemTitle>Chat</span>
            </a>

            <a mat-list-item routerLink="/wiki">
              <mat-icon
                matListItemIcon
                matTooltip="Wiki"
                matTooltipPosition="after"
                >import_contacts</mat-icon
              >
              <span matListItemTitle>Wiki</span>
            </a>

            <a mat-list-item routerLink="/">
              <mat-icon
                matListItemIcon
                matTooltip="Settings"
                matTooltipPosition="after"
                >settings</mat-icon
              >
              <span matListItemTitle>Settings</span>
              <button
                matListItemMeta
                mat-icon-button
                aria-label="Expand/collapse"
              >
                <mat-icon>expand_more</mat-icon>
              </button>
            </a>
          </mat-nav-list>
        </div>
      </mat-sidenav>

      <mat-sidenav-content class="d-flex flex-column">
        <main class="flex-grow-1 d-flex flex-column">
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>

    <ng-template #notificationTemplate>
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
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }

      .mat-sidenav-container {
        flex-grow: 1;
      }

      mat-sidenav {
        .nav-container {
          overflow-x: hidden;
          width: 100vw;
          max-width: 56px;
        }

        &.open {
          .nav-container {
            max-width: 16em;
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Platform';

  value = '';

  isMenuOpen = true;

  /*isAuthenticated$?: Observable<boolean>;
  userName$?: Observable<string | null | undefined>;
  tenants$?: Observable<any[]>;*/

  @ViewChild('menuContainer') menuContainer!: MatSidenavContainer;

  @ViewChild('notificationTemplate') notificationTemplate!: TemplateRef<any>;

  constructor(
    private snackBar: MatSnackBar /*, private authorizeService: AuthorizeService, private tenantService: TenantService*/
  ) {}

  ngOnInit(): void {
    /*this.isAuthenticated$ = this.authorizeService.isAuthenticated();
    this.userName$ = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.tenants$ = this.tenantService.getTenants();*/
  }

  ngAfterViewInit(): void {
    //this.snackBar.openFromTemplate(this.notificationTemplate);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    setTimeout(() => this.menuContainer.updateContentMargins());
  }
}
