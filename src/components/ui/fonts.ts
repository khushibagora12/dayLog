import { Fascinate, Poppins, IBM_Plex_Serif  } from 'next/font/google'

export const fascinate = Fascinate({
    weight : ['400'],
    subsets : ['latin']
})

export const poppins = Poppins({
    weight : ['100','200', '300','400', '500', '600'],
    subsets : ['latin']
})
export const plexSerif = IBM_Plex_Serif({
    weight : ['100', '400'],
    subsets: ["cyrillic"]
})