import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Naam', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['Hoofdpartner', 'Partner', 'Reispartner'] },
    }),
    defineField({ name: 'description', title: 'Beschrijving', type: 'text', rows: 3 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'order', title: 'Volgorde', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'Volgorde', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'type', media: 'logo' },
  },
})
