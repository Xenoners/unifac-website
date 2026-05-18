import { defineField, defineType } from 'sanity'

export const club = defineType({
  name: 'club',
  title: 'Club',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Naam', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'fullName', title: 'Volledige naam', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Categorie',
      type: 'string',
      options: {
        list: ['Faculteit & Departement', 'Studiegerelateerd', 'Thematisch'],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'founded', title: 'Opgericht', type: 'string' }),
    defineField({ name: 'colors', title: 'Clubkleuren', type: 'string' }),
    defineField({ name: 'description', title: 'Beschrijving', type: 'text', rows: 4 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
  ],
  orderings: [{ title: 'Naam A–Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'logo' },
  },
})
