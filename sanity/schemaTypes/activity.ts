import { defineField, defineType } from 'sanity'

export const activity = defineType({
  name: 'activity',
  title: 'Activiteit',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titel', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'period', title: 'Periode', type: 'string' }),
    defineField({ name: 'tag', title: 'Tag', type: 'string' }),
    defineField({ name: 'description', title: 'Beschrijving', type: 'text', rows: 4 }),
    defineField({ name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Volgorde', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'Volgorde', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'period', media: 'image' },
  },
})
