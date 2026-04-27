import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const pakete = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/pakete' }),
  schema: z.object({
    reihenfolge: z.number(),
    titel: z.string(),
    untertitel: z.string(),
    preis: z.number(),
    min_personen: z.number(),
    highlight: z.boolean().default(false),
    kurz: z.string(),
    enthalten: z.array(z.object({ punkt: z.string() })),
    nicht_enthalten: z.array(z.object({ punkt: z.string() })),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/faq' }),
  schema: z.object({
    reihenfolge: z.number(),
    frage: z.string(),
    antwort: z.string(),
  }),
});

const hotels = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/hotels' }),
  schema: z.object({
    name: z.string(),
    adresse: z.string(),
    kategorie: z.enum(['Zu Fuß erreichbar', 'Mit Auto']),
    reihenfolge: z.number(),
    bewertung: z.string().optional(),
    bewertungen_anzahl: z.string().optional(),
    beschreibung: z.string().optional(),
  }),
});

const menues = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/menues' }),
  schema: z.object({
    reihenfolge: z.number(),
    titel: z.string(),
    vorspeise: z.string(),
    hauptgang: z.string(),
    dessert: z.string(),
    highlight: z.boolean().default(false),
  }),
});

const galerie = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/galerie' }),
  schema: z.object({
    reihenfolge: z.number(),
    bild: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  }),
});

const anlaesse = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/anlaesse' }),
  schema: z.object({
    reihenfolge: z.number(),
    titel: z.string(),
    slug: z.string(),
    icon: z.string(),
    kurz: z.string(),
    ab_preis: z.number().nullable().optional(),
    preis_einheit: z.string().optional(),
    beschreibung: z.string(),
    detail_link: z.string(),
  }),
});

const partner = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/data/partner' }),
  schema: z.object({
    reihenfolge: z.number(),
    name: z.string(),
    ort: z.string(),
    kategorie: z.string(),
    beschreibung: z.string(),
    website: z.string().optional(),
    logo: z.string().optional(),
  }),
});

export const collections = { pakete, faq, hotels, menues, galerie, anlaesse, partner };
