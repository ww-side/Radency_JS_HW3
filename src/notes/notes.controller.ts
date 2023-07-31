import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesDto } from './notes.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  async getNotes() {
    return this.notesService.getNotes();
  }

  @Get('/archive')
  async getArchive() {
    return this.notesService.getArchive();
  }

  @Post()
  async createNote(@Body() dto: NotesDto) {
    return this.notesService.createNote(dto);
  }

  @Delete('/:id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.deleteNote(id);
  }

  @Delete('archive/:id')
  async deleteNoteFromArchive(@Param('id') id: string) {
    return this.notesService.deleteNoteFromArchive(id);
  }

  @Get('/stats')
  async getStats() {
    return this.notesService.getStats();
  }

  @Get('/:id')
  async retrieveNote(@Param('id') id: string) {
    return this.notesService.retrieveNote(id);
  }

  @Patch('/:id')
  async updateNote(
    @Param('id') id: string,
    @Body() updatedNote: Partial<NotesDto>
  ) {
    return this.notesService.editNote(id, updatedNote);
  }

  @Get('/archive/:id')
  async archiveNote(@Param('id') id: string) {
    return this.notesService.archiveNote(id);
  }

  @Get('/unarchive/:id')
  async unarchiveNote(@Param('id') id: string) {
    return this.notesService.unarchiveNote(id);
  }
}
