export default {
  name: 'contacts',
  type: 'document',
  title: 'Contacts',
  fields: [
    {
      name: 'socialIcon1',
      title: 'Icon',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'address1',
      title: 'Address',
      type: 'url',
    },
    {
      name: 'socialIcon2',
      title: 'Icon',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'address2',
      title: 'Address',
      type: 'url',
    },
    {
      name: 'socialIcon3',
      title: 'Icon',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'address3',
      title: 'Address',
      type: 'url',
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
