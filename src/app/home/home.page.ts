import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Note, NoteService } from '../service/note/note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal!: IonModal;
  noteSub!: Subscription;
  model: any = {};
  notes: Note[] = [];
  isOpen: boolean = false;

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';

  constructor(private note: NoteService) {}
  ngOnInit(): void {
    this.note.getNotes();
    this.noteSub = this.note.notes.subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.model = {};
    this.isOpen = false;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async save(form: NgForm) {
    try {
      if (!form.valid) {
        return;
      }
      if (this.model?.id) {
        await this.note.updateNote(this.model.id, form.value);
      } else {
        await this.note.addNote(form.value);
      }
      this.modal.dismiss();
    } catch (error) {
      console.log(error);
    }
  }

  async editNote(note: Note) {
    try {
      this.isOpen = true;
      this.model = { ...note };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteNote(note: Note) {
    try {
      await this.note.deleteNote(note.id!);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy(): void {
    if (this.noteSub) this.noteSub.unsubscribe();
  }
}
