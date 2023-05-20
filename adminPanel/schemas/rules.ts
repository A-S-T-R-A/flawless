export default {
  name: 'rules',
  type: 'document',
  title: 'Rules',
  fields: [
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
      name: 'rules',
      title: 'Rules',
      type: 'array',
      of: [
        {
          name: 'rule',
          title: 'Rule',
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
