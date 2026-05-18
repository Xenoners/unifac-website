import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Teamlid',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Naam', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'role',
      title: 'Functie',
      type: 'string',
      options: {
        list: [
          'Voorzitter',
          'Vice-voorzitter',
          'Financiën',
          'Public Relations',
          'Media & Marketing',
          'Cultuur',
          'Technisch Verantwoordelijke',
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'photo', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Volgorde', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ title: 'Volgorde', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
})
