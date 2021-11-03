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
            name: 'alt',
            type: 'string',
            title: 'Alt',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
                isHighlighted: true // <-- make this field easily accessible
            }
        }
    ]
}