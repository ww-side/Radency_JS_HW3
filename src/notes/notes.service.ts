import { Injectable } from '@nestjs/common';
import { NotesDto } from './notes.dto';

@Injectable()
export class NotesService {
  notes: NotesDto[];
  archive: NotesDto[];
  constructor() {
    this.notes = [
      {
        id: '1',
        name: 'Shopping list',
        created: new Date('April 20, 2021'),
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: [new Date('April 20, 2021')],
      },
      {
        id: '2',
        name: 'The theory of evolution',
        created: new Date('April 27, 2021'),
        category: 'Random Thought',
        content: 'The evolution...',
        dates: [new Date('April 27, 2021')],
      },
      {
        id: '3',
        name: 'New Feature',
        created: new Date('May 05, 2021'),
        category: 'Idea',
        content: 'Implement new...',
        dates: [new Date('April 05, 2021'), new Date('April 07, 2021')],
      },
      {
        id: '4',
        name: 'William Gaddis',
        created: new Date('May 07, 2021'),
        category: 'Quote',
        content: `Power doesn't co..`,
        dates: [new Date('May 07, 2021')],
      },
      {
        id: '5',
        name: 'Books',
        created: new Date('May 14, 2021'),
        category: 'Task',
        content: 'The learn startup',
        dates: [new Date('May 14, 2021')],
      },
      {
        id: '6',
        name: 'Clean up',
        created: new Date('May 20, 2021'),
        category: 'Task',
        content: 'Clean up my bedroom',
        dates: [new Date('May 20, 2021')],
      },
      {
        id: '7',
        name: 'A fish is a person?',
        created: new Date('May 14, 2021'),
        category: 'Random Thought',
        content: 'View "Fishmen',
        dates: [new Date('May 14, 2021')],
      },
    ];
    this.archive = [
      {
        id: '8',
        name: 'Lovecraft',
        created: new Date('May 14, 2021'),
        category: 'Idea',
        content: 'Read Lovecraft',
        dates: [new Date('May 14, 2021')],
      },
      {
        id: '9',
        name: 'Cinema',
        created: new Date('May 25, 2021'),
        category: 'Idea',
        content: 'View Barbie',
        dates: [new Date('May 25, 2021')],
      },
    ];
  }

  private isValidCategory(category: string) {
    const allowedCategories = ['Task', 'Quote', 'Idea', 'Random thought'];
    return allowedCategories.includes(category);
  }

  getNotes() {
    return this.notes;
  }

  getArchive() {
    return this.archive;
  }

  createNote(dto: NotesDto) {
    return [...this.notes, new NotesDto(dto)];
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter(note => note.id !== id);
    return this.notes;
  }

  deleteNoteFromArchive(id: string) {
    this.archive = this.archive.filter(note => note.id !== id);
    return this.archive;
  }

  retrieveNote(id: string) {
    return this.notes.find(note => note.id === id);
  }

  getStats() {
    const categoriesStats = {};
    for (const note of this.notes) {
      const category = note.category;
      if (categoriesStats[category]) {
        categoriesStats[category] += 1;
      } else {
        categoriesStats[category] = 1;
      }
    }
    return categoriesStats;
  }

  editNote(id: string, updatedNote: Partial<NotesDto>) {
    const existingNote = this.notes.find(note => note.id === id);
    if (!existingNote) {
      throw new Error('Note not found');
    }

    const updatedNoteData = { ...existingNote, ...updatedNote };
    this.isValidCategory(updatedNoteData.category);

    this.notes = this.notes.map(note =>
      note.id === id ? updatedNoteData : note
    );

    return updatedNoteData;
  }

  archiveNote(id: string) {
    const existingNote = this.notes.find(note => note.id === id);
    if (!existingNote) {
      throw new Error('Note not found');
    }
    this.notes = this.notes.filter(note => note.id !== id);

    return [...this.archive, existingNote];
  }

  unarchiveNote(id: string) {
    const existingNote = this.archive.find(note => note.id === id);
    if (!existingNote) {
      throw new Error('Note not found');
    }
    this.archive = this.archive.filter(note => note.id !== id);

    return [...this.notes, existingNote];
  }
}
