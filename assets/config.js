window.config = Object.assign(window.config || {}, {
  realm: '5a7f5cf23f6b6b92b6fdd68a',
  sale: {
    development: '0xe5898e6c69a9b1f6cdc2a9bcef58f5f4130f276b',
    production: '0xe5898e6c69a9b1f6cdc2a9bcef58f5f4130f276b',
  },
  // realm: '5a2a67f222781cecae23200e',
  // sale: {
  //   development: '0x99a09f0d85bc6e95e110348a8522f98443e31c4a',
  //   production: '0x99a09f0d85bc6e95e110348a8522f98443e31c4a',
  // },
  common: {
    contactEmail: 'dev@0v1se.com',
    termsOfServiceURL: 'terms.url',
  },
  faq: [
    {
      question: 'How Can I invest?',
      answer: 'Answer',
    },
    {
      question: 'What do you already have?',
      answer: 'Answer',
    },
    {
      question: 'Why we should trust you?',
      answer: 'Answer',
    },
    {
      question: 'How collected funds will be used?',
      answer: 'Answer',
    },
  ],
  saleTimeline: [
    {
      title: 'Sale Timeline:',
      steps: [
        {
          date: '21 Jul',
          text: '1 Token Coin = 30 BTC',
          percent: '30%',
          isActive: false,
        },
        {
          date: '21 Aug',
          text: '1 Token Coin = 40 BTC',
          percent: '20%',
          isActive: false,
        },
        {
          date: '21 Sep',
          text: '1 Token Coin = 50 BTC',
          percent: '10%',
          isActive: true,
        },
        {
          date: '21 Oct',
          text: '1 Token Coin = 40 BTC',
          percent: '5%',
          isActive: false,
        },
      ],
    },
  ],
});
