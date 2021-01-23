import {Store} from './store';

export const Amazon: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '$',
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: [
			{
				container: '#add-to-cart-button',
				text: ['add to cart']
			},
			{
				container: '#buy-now-button',
				text: ['buy now']
			}
		],
		maxPrice: {
			container: '#priceblock_ourprice'
		}
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B083248S3B&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com/dp/B083248S3B'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P2HBBLX/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2HBBLX&linkId=558933bb08afba91bd2346498a398f58',
			model: 'dual',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P2HBBLX/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2HBBLX&linkId=558933bb08afba91bd2346498a398f58'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NYP7KG6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYP7KG6&linkId=854753f5c2e534469880ad332f656254',
			model: 'gaming oc',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08NYP7KG6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYP7KG6&linkId=854753f5c2e534469880ad332f656254'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NYPLXPJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPLXPJ&linkId=9bd5055e0800509aa6547f98e4437ce2',
			model: 'gaming oc pro',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08NYPLXPJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPLXPJ&linkId=9bd5055e0800509aa6547f98e4437ce2'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NYPLXPJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPLXPJ&linkId=8a4edd1763d4c794179d449026c87d75',
			model: 'eagle',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08NYPLXPJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPLXPJ&linkId=8a4edd1763d4c794179d449026c87d75'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B083Z5P6TX/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B083Z5P6TX&linkId=b135891bb6f8bf68d3162a7a3f6a955f',
			model: 'tuf',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B083Z5P6TX/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B083Z5P6TX&linkId=b135891bb6f8bf68d3162a7a3f6a955f'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P2D3JSG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2D3JSG&linkId=3d2ae13e7ee547f1915e4a736d3e23d1',
			model: 'gaming x trio',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P2D3JSG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2D3JSG&linkId=3d2ae13e7ee547f1915e4a736d3e23d1'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P2DQ28S/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2DQ28S&linkId=c177d83ca5ace39f9d41a901ce05d8e4',
			model: 'ventus 2x',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P2DQ28S/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2DQ28S&linkId=c177d83ca5ace39f9d41a901ce05d8e4'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P3XJLJJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P3XJLJJ&linkId=e9d5c1f1b00ffb8d46576f5dd6b9b7cc',
			model: 'twin edge oc',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P3XJLJJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P3XJLJJ&linkId=e9d5c1f1b00ffb8d46576f5dd6b9b7cc'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P3V572B/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P3V572B&linkId=aa29acc410222376d6e7532661509b10',
			model: 'twin edge',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P3V572B/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P3V572B&linkId=aa29acc410222376d6e7532661509b10'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P2D1JZZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2D1JZZ&linkId=2382cb92c00bc983bfe946c6222be9f5',
			model: 'ko',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P2D1JZZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2D1JZZ&linkId=2382cb92c00bc983bfe946c6222be9f5'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B083Z7TR8Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B083Z7TR8Z&linkId=493a9e89005ae6b06baa1585be21d0f3',
			model: 'strix',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B083Z7TR8Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B083Z7TR8Z&linkId=493a9e89005ae6b06baa1585be21d0f3'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P2H5LW2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2H5LW2&linkId=e60caf1c1363c56ec9b31a5f64f565c5',
			model: 'ftw3',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08P2H5LW2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08P2H5LW2&linkId=e60caf1c1363c56ec9b31a5f64f565c5'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NYPKW1Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPKW1Z&linkId=b1580d8ac6175ce6371d798d6cb5ae3e',
			model: 'eagle oc',
			series: '3060ti',
			url:
				'https://www.amazon.com/gp/product/B08NYPKW1Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08NYPKW1Z&linkId=b1580d8ac6175ce6371d798d6cb5ae3e'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8LG4M3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8LG4M3&linkId=aaa93346512bfca22342f075466f08af',
			model: 'dual',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8LG4M3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8LG4M3&linkId=aaa93346512bfca22342f075466f08af'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8HPKR6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8HPKR6&linkId=922655a78b2ee13edf4876f92c69781f',
			model: 'dual',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8HPKR6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8HPKR6&linkId=922655a78b2ee13edf4876f92c69781f'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08LW46GH2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LW46GH2&linkId=5836d885032cf5ba139deedb152de547',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08LW46GH2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LW46GH2&linkId=5836d885032cf5ba139deedb152de547'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8JNTXQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8JNTXQ&linkId=223c43fd4b55b6ca44af7b575c050e1d',
			model: 'strix',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8JNTXQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8JNTXQ&linkId=223c43fd4b55b6ca44af7b575c050e1d'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8KC1J7/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8KC1J7&linkId=2ea8311ad90eeb9ea9cb22cd1bc51447',
			model: 'tuf',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8KC1J7/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8KC1J7&linkId=2ea8311ad90eeb9ea9cb22cd1bc51447'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KY266MG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY266MG&linkId=96e1df19a33448889e5f71e1bb6e0dd2',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KY266MG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY266MG&linkId=96e1df19a33448889e5f71e1bb6e0dd2'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KWN2LZG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KWN2LZG&linkId=94cfd17ef9b5e4026e8ebbbe2a190cc1',
			model: 'gaming',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KWN2LZG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KWN2LZG&linkId=94cfd17ef9b5e4026e8ebbbe2a190cc1'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBJB7YD/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBJB7YD&linkId=48edddd4e3179b3246a27e468b8c73d4',
			model: 'xlr8 revel',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08HBJB7YD/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBJB7YD&linkId=48edddd4e3179b3246a27e468b8c73d4'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBF5L3K/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBF5L3K&linkId=c8b55f7bdaf1f23802f078286838cc02',
			model: 'xlr8 uprising',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08HBF5L3K/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBF5L3K&linkId=c8b55f7bdaf1f23802f078286838cc02'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBF5L3K/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBF5L3K&linkId=bf8f1f3278d0411c6b84ba8c6fa28fb7',
			model: 'ventus 2x oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08HBF5L3K/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBF5L3K&linkId=bf8f1f3278d0411c6b84ba8c6fa28fb7'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KWLMZV4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KWLMZV4&linkId=2c43f3498bfe0e758c53163a4a9e5996',
			model: 'ventus 3x oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KWLMZV4/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KWLMZV4&linkId=2c43f3498bfe0e758c53163a4a9e5996'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08LF1CWT2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LF1CWT2&linkId=de9ad3f7e1fdc4f75986169c9d87b386',
			model: 'twin edge oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08LF1CWT2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LF1CWT2&linkId=de9ad3f7e1fdc4f75986169c9d87b386'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08LF32LJ6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LF32LJ6&linkId=cf4a864006f43c1ed347863c6b3de261',
			model: 'gaming',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08LF32LJ6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LF32LJ6&linkId=cf4a864006f43c1ed347863c6b3de261'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8L71SM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8L71SM&linkId=3f9415ee151e1b455db96cd106118c59',
			model: 'xc3 ultra',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8L71SM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8L71SM&linkId=3f9415ee151e1b455db96cd106118c59'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08L8L9TCZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8L9TCZ&linkId=84ce0434fb7a4ac8fe3b229ff1a785f3',
			model: 'ftw3 ultra',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08L8L9TCZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08L8L9TCZ&linkId=84ce0434fb7a4ac8fe3b229ff1a785f3'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08LW46GH2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LW46GH2&linkId=45bc9233c4d72392ed818c8b270ea318',
			model: 'xc3 black',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08LW46GH2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08LW46GH2&linkId=45bc9233c4d72392ed818c8b270ea318'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KY266MG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY266MG&linkId=ce15332284d417b4b645ff74a854b477',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KY266MG/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY266MG&linkId=ce15332284d417b4b645ff74a854b477'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08M13DXSZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08M13DXSZ&linkId=bbddda2988503bd8164779c58068129c',
			model: 'vision oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08M13DXSZ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08M13DXSZ&linkId=bbddda2988503bd8164779c58068129c'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08M4YFNX2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08M4YFNX2&linkId=859595cfaadb6d8f157e0ccba4d0ac12',
			model: 'gaming oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08M4YFNX2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08M4YFNX2&linkId=859595cfaadb6d8f157e0ccba4d0ac12'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KXZV626/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KXZV626&linkId=234c7e340f2036a471094230762bd72f',
			model: 'eagle',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KXZV626/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KXZV626&linkId=234c7e340f2036a471094230762bd72f'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08KY322TH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY322TH&linkId=6e9784436ed23592569623fa2c87e3dd',
			model: 'eagle oc',
			series: '3070',
			url:
				'https://www.amazon.com/gp/product/B08KY322TH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08KY322TH&linkId=6e9784436ed23592569623fa2c87e3dd'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBR7QBM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBR7QBM&linkId=04d22ff5c8be13b7b9574a3dfb2e314a',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HBR7QBM/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBR7QBM&linkId=04d22ff5c8be13b7b9574a3dfb2e314a'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBTJMLJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBTJMLJ&linkId=ff7f449432bf8b2bf96a558322abc4d6',
			model: 'xlr8 revel',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HBTJMLJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBTJMLJ&linkId=ff7f449432bf8b2bf96a558322abc4d6'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR7SV3M/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR7SV3M&linkId=d6ac7907f3d2b3eb97709d750a6375a5',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR7SV3M/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR7SV3M&linkId=d6ac7907f3d2b3eb97709d750a6375a5'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR3Y5GQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR3Y5GQ&linkId=68996e44c796e20e88de537d259a2ca0',
			model: 'ftw3 ultra',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR3Y5GQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR3Y5GQ&linkId=68996e44c796e20e88de537d259a2ca0'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR55YB5/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR55YB5&linkId=0dc5272f37d51137230d5da3e7196e00',
			model: 'xc3 ultra',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR55YB5/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR55YB5&linkId=0dc5272f37d51137230d5da3e7196e00'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR3DPGW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR3DPGW&linkId=3e9682b848406fef10fac618ea3aab57',
			model: 'ftw3',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR3DPGW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR3DPGW&linkId=3e9682b848406fef10fac618ea3aab57'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR4RJ3Q/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR4RJ3Q&linkId=7e2515007bda918fe6032b09484df35f',
			model: 'xc3',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR4RJ3Q/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR4RJ3Q&linkId=7e2515007bda918fe6032b09484df35f'
		},
		{
			brand: 'evga',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR6FMF3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR6FMF3&linkId=f829f9f72812eb7d8abfe41c660f9975',
			model: 'xc3 black',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR6FMF3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR6FMF3&linkId=f829f9f72812eb7d8abfe41c660f9975'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJTH61J/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJTH61J&linkId=feb1e667a777ec05a4589a07566abaab',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HJTH61J/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJTH61J&linkId=feb1e667a777ec05a4589a07566abaab'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJTH61J/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJTH61J&linkId=4b0ebe03718091dd32ce5a339d308b1f',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HJTH61J/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJTH61J&linkId=4b0ebe03718091dd32ce5a339d308b1f'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HH5WF97/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HH5WF97&linkId=9efa33ef01930d2e5c896376c12163b3',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HH5WF97/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HH5WF97&linkId=9efa33ef01930d2e5c896376c12163b3'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HHDP9DW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HHDP9DW&linkId=87dcf4333d219516fd0e677957a8171e',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HHDP9DW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HHDP9DW&linkId=87dcf4333d219516fd0e677957a8171e'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08J6F174Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08J6F174Z&linkId=49ae4fc6ca3c8e380d13d982f49a559c',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08J6F174Z/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08J6F174Z&linkId=49ae4fc6ca3c8e380d13d982f49a559c'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08J6GMWCQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08J6GMWCQ&linkId=3803aa30b0dd427b7dd2fc66e9aa8362',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08J6GMWCQ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08J6GMWCQ&linkId=3803aa30b0dd427b7dd2fc66e9aa8362'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR5SXPS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR5SXPS&linkId=6f72f8ef2fb7a891abb167653bed8e71',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HR5SXPS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR5SXPS&linkId=6f72f8ef2fb7a891abb167653bed8e71'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJNKT3P/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJNKT3P&linkId=117adae21742515d0098c9c70e731bcf',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.amazon.com/gp/product/B08HJNKT3P/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJNKT3P&linkId=117adae21742515d0098c9c70e731bcf'
		},
		{
			brand: 'zotac',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJQ182D/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJQ182D&linkId=41fe55920d4f8032aadf2dcdb3954c14',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HJQ182D/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJQ182D&linkId=41fe55920d4f8032aadf2dcdb3954c14'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBQWBHH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBQWBHH&linkId=77e9b3026db468dc65489a57ded1632d',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HBQWBHH/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBQWBHH&linkId=77e9b3026db468dc65489a57ded1632d'
		},
		{
			brand: 'pny',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HBVX53D/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBVX53D&linkId=2b810ddb377f1b833bc4a55863281843',
			model: 'xlr8 revel',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HBVX53D/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HBVX53D&linkId=2b810ddb377f1b833bc4a55863281843'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HRBW6VB/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HRBW6VB&linkId=fee97663252ef97c08ab64fb5f3804ce',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HRBW6VB/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HRBW6VB&linkId=fee97663252ef97c08ab64fb5f3804ce'
		},
		{
			brand: 'msi',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HR9D2JS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR9D2JS&linkId=5f42e8dd2fc83b757ed5a6c00043eec1',
			model: 'ventus 3x',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HR9D2JS/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HR9D2JS&linkId=5f42e8dd2fc83b757ed5a6c00043eec1'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJRF2CN/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJRF2CN&linkId=73de096aab80030d3fdc302a7d2c7ff6',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HJRF2CN/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJRF2CN&linkId=73de096aab80030d3fdc302a7d2c7ff6'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJPDJTY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJPDJTY&linkId=6d24109523f24f19376642faf7bd9f2f',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HJPDJTY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJPDJTY&linkId=6d24109523f24f19376642faf7bd9f2f'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJGNJ81/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJGNJ81&linkId=9af434e0d487402f9da96e5daa6ff026',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HJGNJ81/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJGNJ81&linkId=9af434e0d487402f9da96e5daa6ff026'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08HJLLF7G/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJLLF7G&linkId=c84f83ba4bcf1f68f52a5bb3549cb7ca',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.amazon.com/gp/product/B08HJLLF7G/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=gamegearsto02-20&creative=9325&linkCode=as2&creativeASIN=B08HJLLF7G&linkId=c84f83ba4bcf1f68f52a5bb3549cb7ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/product/B08166SLDF/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08166SLDF&linkId=40f7add8bf91d0b27ffe397b40387e74',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.amazon.com/gp/product/B08166SLDF/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08166SLDF&linkId=40f7add8bf91d0b27ffe397b40387e74'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/product/B0815XFSGK/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0815XFSGK&linkId=a2c0fdd366fdc126a90da4eb0e0b5ab3',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.amazon.com/gp/product/B0815XFSGK/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0815XFSGK&linkId=a2c0fdd366fdc126a90da4eb0e0b5ab3'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/product/B08164VTWH/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08164VTWH&linkId=94608b3d21d3a27792ebafe175b20137',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.amazon.com/gp/product/B08164VTWH/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08164VTWH&linkId=94608b3d21d3a27792ebafe175b20137'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amazon.com/gp/product/B0815Y8J9N/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0815Y8J9N&linkId=7a8eb4a944b3ffb23d4b044c5ba3b255',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.amazon.com/gp/product/B0815Y8J9N/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0815Y8J9N&linkId=7a8eb4a944b3ffb23d4b044c5ba3b255'
		},
		{
			brand: 'gigabyte',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NS4W2ZY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NS4W2ZY&linkId=04316cdbed93ba673fa0398501b1ca4c',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NS4W2ZY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NS4W2ZY&linkId=04316cdbed93ba673fa0398501b1ca4c'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08MVC76SR/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08MVC76SR&linkId=e23ab68a8bbd17fca6f73ec73deed9c3',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08MVC76SR/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08MVC76SR&linkId=e23ab68a8bbd17fca6f73ec73deed9c3'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NXXT7WN/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXXT7WN&linkId=5ee228ae0e2beaa525dbe9c987b0bcc2',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NXXT7WN/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXXT7WN&linkId=5ee228ae0e2beaa525dbe9c987b0bcc2'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NXYNLMR/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXYNLMR&linkId=7184835df9f789942ff701a4b392dab5',
			model: 'pulse',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NXYNLMR/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXYNLMR&linkId=7184835df9f789942ff701a4b392dab5'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NXVNMPQ/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXVNMPQ&linkId=f86d2b99141fa779e7da2e5b4b99b333',
			model: 'nitro+',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NXVNMPQ/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXVNMPQ&linkId=f86d2b99141fa779e7da2e5b4b99b333'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://www.amazon.com/gp/product/B08N6ZLX9B/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08N6ZLX9B&linkId=479fab68e09e8d1aad827dfb54386b22',
			model: 'amd reference',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08N6ZLX9B/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08N6ZLX9B&linkId=479fab68e09e8d1aad827dfb54386b22'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NX14LV1/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NX14LV1&linkId=92240b7dfc84943aea93a512a7e48f6a',
			model: 'merc',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NX14LV1/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NX14LV1&linkId=92240b7dfc84943aea93a512a7e48f6a'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NN76VJD/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NN76VJD&linkId=0b61c3ae440130e2e1980696d91e42cd',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08NN76VJD/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NN76VJD&linkId=0b61c3ae440130e2e1980696d91e42cd'
		},
		{
			brand: 'xfx',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P5YFZCY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08P5YFZCY&linkId=b93af05225f209d70f881f29717e87e5',
			model: 'merc',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08P5YFZCY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08P5YFZCY&linkId=b93af05225f209d70f881f29717e87e5'
		},
		{
			brand: 'powercolor',
			cartUrl:
				'https://www.amazon.com/gp/aws/cart/add.html?ASIN.1=B08MNZM5TK&Quantity.1=1',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08MNZM5TK/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08MNZM5TK&linkId=29a893c4b35c66dcd3ed8a66ced0d93c'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08MVCLBWK/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08MVCLBWK&linkId=9fbcfc5d068428076383016ac59e193c',
			model: 'amd reference',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08MVCLBWK/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08MVCLBWK&linkId=9fbcfc5d068428076383016ac59e193c'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NXZSPMY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXZSPMY&linkId=d6da44e7e0066f4da8ade6d7522f761a',
			model: 'nitro+',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08NXZSPMY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXZSPMY&linkId=d6da44e7e0066f4da8ade6d7522f761a'
		},
		{
			brand: 'sapphire',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NXYBVDB/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXYBVDB&linkId=6987a42a2e97b9b24065a96620f5039c',
			model: 'pulse',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08NXYBVDB/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NXYBVDB&linkId=6987a42a2e97b9b24065a96620f5039c'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NWJ29NB/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NWJ29NB&linkId=f3b5186b46d90bd9291433cb1cea3654',
			model: 'strix oc',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08NWJ29NB/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NWJ29NB&linkId=f3b5186b46d90bd9291433cb1cea3654'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08P3YT3MY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08P3YT3MY&linkId=8c8125628af72cc45637211494d0ba5d',
			model: 'tuf oc',
			series: 'rx6800',
			url:
				'https://www.amazon.com/gp/product/B08P3YT3MY/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08P3YT3MY&linkId=8c8125628af72cc45637211494d0ba5d'
		},
		{
			brand: 'asus',
			cartUrl:
				'https://www.amazon.com/gp/product/B08NWHKGS9/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NWHKGS9&linkId=49192e5577ab8286b26a986a791c6e02',
			model: 'strix lc',
			series: 'rx6800xt',
			url:
				'https://www.amazon.com/gp/product/B08NWHKGS9/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08NWHKGS9&linkId=49192e5577ab8286b26a986a791c6e02'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/product/B08FC5L3RG/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08FC5L3RG&linkId=d6b4d0acc9968abee314275d40316c4d',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.amazon.com/gp/product/B08FC5L3RG/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08FC5L3RG&linkId=d6b4d0acc9968abee314275d40316c4d'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.com/gp/product/B08FC6MR62/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08FC6MR62&linkId=d4c955a248158a3d7a4ee6e17dbf14c6',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.amazon.com/gp/product/B08FC6MR62/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08FC6MR62&linkId=d4c955a248158a3d7a4ee6e17dbf14c6'
		},
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.amazon.com/gp/product/B08H75RTZ8/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08H75RTZ8&linkId=df16ab5a721272872346fbbd889f77da'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.amazon.com/gp/product/B08G9J44ZN/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B08G9J44ZN&linkId=2c21eba73c1e51a18e55fb239f1e872d'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://www.amazon.com/gp/product/B07M63H81H/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07M63H81H&linkId=8c0127f465a3f2118f878d1210abadd3',
			model: '750 platinum',
			series: 'sf',
			url:
				'https://www.amazon.com/gp/product/B07M63H81H/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07M63H81H&linkId=8c0127f465a3f2118f878d1210abadd3'
		},
		{
			brand: 'corsair',
			cartUrl:
				'https://www.amazon.com/gp/product/B07F84FJ1G/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07F84FJ1G&linkId=e597c18b21a065f3ea323da214a92524',
			model: '600 platinum',
			series: 'sf',
			url:
				'https://www.amazon.com/dp/https://www.amazon.com/gp/product/B07F84FJ1G/ref=as_li_tl?ie=UTF8&tag=gamegearstock-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B07F84FJ1G&linkId=e597c18b21a065f3ea323da214a92524'
		}
	],
	listLabels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		container: 'li[data-itemid]',
		inStock: {
			container: '.itemUsedAndNew',
			text: ['from']
		},
		maxPrice: {
			container: '.itemUsedAndNewPrice'
		},
		scrollIntoView: '#navFooter',
		scrollIntoViewEnd: '#endOfListMarker',
		url: {
			attributeName: 'href',
			container: 'h3 a.a-link-normal'
		}
	},
	listLinks: [
		{
			series: '3060ti',
			url: 'https://www.amazon.com/hz/wishlist/ls/1OTODU17LCHIY/'
		},
		{
			series: '3070',
			url: 'https://www.amazon.com/hz/wishlist/ls/1XTVSQHDX9EKI/'
		},
		{
			series: '3080',
			url: 'https://www.amazon.com/hz/wishlist/ls/248J8MZM3GH7/'
		},
		{
			series: '3090',
			url: 'https://www.amazon.com/hz/wishlist/ls/DGP5MK7I6FZ3/'
		}
	],
	name: 'amazon'
};
