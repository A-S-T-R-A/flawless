export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'neonTitle',
      title: 'Neon title',
      type: 'string',
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [
        {
          name: 'paragraph',
          title: 'Paragraph',
          type: 'string',
        },
      ],
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          name: 'icon',
          title: 'Icon',
          type: 'image',
        },
      ],
    },
  ],
}
