export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'github',
            title: 'Github',
            type: 'string',
        },
        {
            name: 'liveDemo',
            title: 'LiveDemo',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'technologies',
            name: 'Technologies',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    type: 'reference',
                    to: [
                        {
                            type: 'technology'
                        }
                    ]
                }
            ]
        },
    ]
}