export default {
  name: 'appartement',
  title: 'Appartement',
  type: 'document',
  fields: [
    {
      name: 'internalTitle',
      title: 'Titre interne (ex: Studio Meissonier 24)',
      type: 'string',
      description: 'Uniquement pour vous, non visible par les visiteurs.'
    },
    {
      name: 'title',
      title: 'Titre public de l\'annonce',
      type: 'string',
      description: 'Le titre affiché sur le site web.'
    },
    {
      name: 'slug',
      title: 'URL unique (slug)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Cliquez sur "Generate" pour créer automatiquement.'
    },
    {
      name: 'published',
      title: 'Publié en ligne',
      type: 'boolean',
      initialValue: false,
      description: 'Cochez pour rendre visible sur le site.'
    },
    {
      name: 'price',
      title: 'Loyer HC (€)',
      type: 'number'
    },
    {
      name: 'charges',
      title: 'Charges (€)',
      type: 'number'
    },
    {
      name: 'deposit',
      title: 'Dépôt de garantie (€)',
      type: 'number'
    },
    {
      name: 'surface',
      title: 'Surface (m²)',
      type: 'number'
    },
    {
      name: 'availableDate',
      title: 'Date de disponibilité',
      type: 'date'
    },
    {
      name: 'address',
      title: 'Adresse exacte de l\'immeuble',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description détaillée',
      type: 'text',
      rows: 5
    },
    {
      name: 'images',
      title: 'Galerie Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'dpe',
      title: 'DPE',
      type: 'string',
      options: { list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Vierge'] }
    },
    {
      name: 'ges',
      title: 'GES',
      type: 'string',
      options: { list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Vierge'] }
    },
    {
      name: 'floor',
      title: 'Étage',
      type: 'string',
      description: 'Ex: RDC, 1er, 2ème...'
    },
    {
      name: 'bedrooms',
      title: 'Nombre de chambres',
      type: 'number'
    },
    {
      name: 'heatingType',
      title: 'Type de chauffage',
      type: 'string',
      options: {
        list: [
          'Individuel Électrique',
          'Individuel Gaz',
          'Collectif Électrique',
          'Collectif Gaz'
        ]
      }
    },
    {
      name: 'apl',
      title: 'Éligible APL',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'als',
      title: 'Éligible ALS',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'colocation',
      title: 'Colocation possible',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'furnished',
      title: 'Mise à disposition de meubles',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'elevator',
      title: 'Ascenseur',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'parking',
      title: 'Parking inclus',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'intercom',
      title: 'Interphone classique',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'videoIntercom',
      title: 'Interphone vidéo',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'fiber',
      title: 'Fibre optique',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'bikeStorage',
      title: 'Local Vélo',
      type: 'boolean',
      initialValue: false
    }
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'title',
      media: 'images.0'
    }
  }
}
