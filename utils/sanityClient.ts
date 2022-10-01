import sanityClient from '@sanity/client'

export const client = sanityClient({
     projectId: 'qapkelsh',
     dataset: 'production',
     apiVersion: '2022-09-23',
     token: 'skEPsZHUsf3swNwOqbQf6kbLbTSxEOXwza9uUsAnlaNEiMJU60lJR5ocPSHPPDEpPx7qWZyPG0JpI8sWwAsENkQ6yywG2GeQlkL4LH21y5ky2FQHeiSpBLgA3xUbLWzJEg60IZEEtNeykhH4WdZcVn0N1iB9UwvwlTcZl3t5tqdPFpxBP7ea',
     useCdn: false,
})