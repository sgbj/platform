import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  template: `
    <mat-drawer-container class="flex-grow-1">
      <mat-drawer mode="side" opened style="width: 25em">
        <mat-toolbar class="sticky-top">
          <h2>Chat</h2>

          <span class="flex-grow-1"></span>

          <button
            mat-icon-button
            aria-label="Filter"
            matTooltip="Filter"
            class="me-2"
          >
            <mat-icon>filter_list</mat-icon>
          </button>

          <button mat-icon-button aria-label="New chat" matTooltip="New chat">
            <mat-icon>add_comment</mat-icon>
          </button>
        </mat-toolbar>

        <mat-action-list class="py-0 m-2">
          <button
            mat-list-item
            *ngFor="let chat of chats; let i = index"
            [activated]="i == 1"
          >
            <img matListItemAvatar [src]="chat.picture" />
            <h3 matListItemTitle class="fw-bold">{{ chat.name }}</h3>
            <p matListItemLine class="d-flex">
              <span>{{ chat.message }}</span>
              <span class="flex-grow-1"></span>
            </p>
            <time matListItemMeta>{{ chat.messageDate }}</time>
          </button>
        </mat-action-list>
      </mat-drawer>

      <mat-drawer-content class="d-flex flex-column">
        <mat-toolbar *ngIf="!addPeople" class="sticky-top">
          <h2 class="me-2">Smith, John</h2>

          <button
            mat-icon-button
            aria-label="Edit group name"
            matTooltip="Edit name"
          >
            <mat-icon>edit_square</mat-icon>
          </button>

          <span class="flex-grow-1"></span>

          <button
            mat-icon-button
            aria-label="Add people"
            matTooltip="Add people"
            (click)="addPeople = true"
          >
            <mat-icon>person_add</mat-icon>
          </button>
        </mat-toolbar>

        <mat-toolbar *ngIf="addPeople" class="sticky-top p-0">
          <mat-form-field class="flex-grow-1">
            <mat-label>To</mat-label>
            <input matInput />
            <button mat-icon-button (click)="addPeople = false" matSuffix>
              <mat-icon>check</mat-icon>
            </button>
            <button mat-icon-button (click)="addPeople = false" matSuffix>
              <mat-icon>close</mat-icon>
            </button>
          </mat-form-field>
        </mat-toolbar>

        <div class="flex-grow-1"></div>

        <div class="px-3 pt-3">
          <mat-form-field class="w-100">
            <mat-label>Message</mat-label>
            <textarea
              matInput
              cdkTextareaAutosize
              cdkAutosizeMinRows="4"
              cdkAutosizeMaxRows="10"
            ></textarea>
            <button mat-icon-button matSuffix class="me-2">
              <mat-icon>mood</mat-icon>
            </button>
            <button mat-icon-button matSuffix class="me-2">
              <mat-icon>send</mat-icon>
            </button>
          </mat-form-field>
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
export default class ChatComponent {
  chats = [
    {
      name: 'Doe, Jane',
      message: 'Thanks for your help!',
      messageDate: '15m',
      picture: 'https://www.gravatar.com/avatar/122222?d=identicon',
    },
    {
      name: 'Smith, John',
      message: "I'll have the report...",
      messageDate: '2h',
      picture: 'https://www.gravatar.com/avatar/55789?d=identicon',
    },
    {
      name: 'Help Desk',
      message: 'Have a great weekend!',
      messageDate: '8/31',
      picture: 'https://www.gravatar.com/avatar/a1345367788898963?d=identicon',
    },
    {
      name: 'Managers',
      message: 'This is a message.',
      messageDate: '8/30',
      picture: 'https://www.gravatar.com/avatar/23452?d=identicon',
    },
    {
      name: 'Johnson, Mary',
      message: 'You can find it at...',
      messageDate: '8/29',
      picture: 'https://www.gravatar.com/avatar/03452345656553435?d=identicon',
    },
    {
      name: 'Brown, Robert',
      message: 'Where is the document...',
      messageDate: '8/26',
      picture:
        'https://www.gravatar.com/avatar/sdfas2222222346767sdfahjjjyjyyj?d=identicon',
    },
  ];

  addPeople = false;
}
