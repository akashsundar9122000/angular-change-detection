import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  imports:[AsyncPipe],
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {

  private messageService = inject(MessagesService);
  messages = this.messageService.allMessages;
  // private changeRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  //messages: string[] =[];

  // messages$ = this.messageService.messages$;

  // ngOnInit() {
  //   const subscription = this.messageService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.changeRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   })
  // }

  // ngOnDestroy(): void {
  //   this.messageService.messages$.unsubscribe();
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
