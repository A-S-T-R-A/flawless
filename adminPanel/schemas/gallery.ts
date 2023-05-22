export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  fields: [
    {
      name: 'imageUrl',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
