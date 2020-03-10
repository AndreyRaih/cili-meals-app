export const reciepMockObj1 = {
  id: '1',
  image: 'http://www.thaifoodplus.com/wp-content/uploads/2017/02/Tom-yum.jpg',
  title: 'Tom Yam',
  description: `Some description for this food. Some text for
  special moments and awesome stories. And repeat. Some description for this food. Some text for
  special moments and awesome stories. And repeat. Some description for this food. Some text for
  special moments and awesome stories. And repeat.`,
  ingredients: [
    {
      id: '123',
      name: 'test',
      description: 'desc',
      amount: '12',
      unit: 'oz',
      image: null,
      isMissed: true
    },
    {
      id: '124',
      name: 'test',
      description: 'desc',
      amount: '12',
      unit: 'oz',
      image: null,
      isMissed: true
    },
    {
      id: '125',
      name: 'test',
      description: 'desc',
      amount: '12',
      unit: 'oz',
      image: null,
      isMissed: true
    }
  ],
  basicInfo: {
    cousine: 'Thai',
    type: 'Non veg',
    amount: '25 min'
  },
  steps: [
    {
      number: 1,
      step: 'In a saucepan, melt butter. Stir in the flour, salt and pepper until smooth. Gradually add milk. Bring to a boil cook and stir for 2 minutes or until thickened. Stir in broccoli and onion.'
    },
    {
      number: 2,
      step: 'In a saucepan, melt butter. Stir in the flour, salt and pepper until smooth. Gradually add milk. Bring to a boil cook and stir for 2 minutes or until thickened. Stir in broccoli and onion.'
    },
    {
      number: 3,
      step: 'In a saucepan, melt butter. Stir in the flour, salt and pepper until smooth. Gradually add milk. Bring to a boil cook and stir for 2 minutes or until thickened. Stir in broccoli and onion.'
    }
  ],
  isExtented: false
};

export const reciepMockObj2 = {
  id: '2',
  image: 'http://www.thaifoodplus.com/wp-content/uploads/2017/02/Tom-yum.jpg',
  title: 'Tom Yam 2',
  description: `Some description for this food. Some text for
  special moments and awesome stories. And repeat.`,
  ingredients: [],
  basicInfo: {
    cousine: 'Thai',
    type: 'Non veg',
    amount: '25 min'
  },
  steps: [],
  isExtented: false
};

export const reciepsArray = [{id: '1'}, {id: '2'}];