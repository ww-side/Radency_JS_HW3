import * as yup from 'yup';

const notesDtoSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required(),
  created: yup.date().required(),
  category: yup
    .string()
    .oneOf(['Task', 'Quote', 'Idea', 'Random Thought'])
    .required(),
  content: yup.string().required(),
  dates: yup.array().of(yup.date()).required(),
});

export class NotesDto {
  readonly id: string;
  readonly name: string;
  readonly created: Date;
  readonly category: 'Task' | 'Quote' | 'Idea' | 'Random Thought';
  readonly content: string;
  readonly dates: Date[];

  constructor(data: any) {
    notesDtoSchema.validateSync(data);
    this.id = data.id;
    this.name = data.name;
    this.created = data.created;
    this.category = data.category;
    this.content = data.content;
    this.dates = data.dates;
  }
}
