export default {
    name: 'accessibleImage',
    title: 'Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                isHighlighted: true,
                hotspot: true,
            }
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alt',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
    ],
    preview: {
        select: {
            title: 'alt',
            subtitle: 'caption',
            media: 'image',
        }
    },
}