export default {
  name: 'contacts',
  type: 'document',
  title: 'Contacts',
  fields: [
    {
      name: 'socialIcons',
      title: 'Social Icons',
      type: 'array',
      of: [
        {
          name: 'socialIcon',
          title: 'Icon',
          type: 'image',
          option: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'socialAdresses',
      title: 'Social Url',
      type: 'array',
      of: [
        {
          name: 'adress',
          title: 'Adress',
          type: 'string',
        },
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
  ],
}
