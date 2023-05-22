export default {
  name: 'main',
  type: 'document',
  title: 'Main Page',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'videoPlaceholder',
      title: 'Video Placeholder',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'videoFile',
      type: 'file',
      title: 'Video',
    },
  ],
}
