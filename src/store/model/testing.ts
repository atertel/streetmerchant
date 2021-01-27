import {Store} from './store'

export const Testing: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: '.purchase-button',
        text: ['add to cart'],
      },
    ],
    maxPrice: {
      container: '.price',
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'http://localhost:3000/item/1',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'http://localhost:3000/item/2',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'http://localhost:3000/item/3',
    },
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'http://localhost:3000/item/4',
    },
  ],
  listLabels: {
    container: '.item',
    inStock: {
      container: '.purchase-button',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.price',
    },
    name: '.title',
    url: {
      attributeName: 'href',
      container: '.title a',
    },
  },
  listLinks: [
    {
      series: 'test:series',
      url: 'http://localhost:3000/',
    },
  ],
  name: 'testing',
}
