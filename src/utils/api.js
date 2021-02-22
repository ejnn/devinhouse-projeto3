export const fetchProducts = () =>
  new Promise((resolve) => {
    const fetch = () => resolve(PRODUCTS_MOCK);
    setTimeout(fetch, 2500);
  });

export const queryProducts = (term) =>
  new Promise((resolve) => {
    const filtered = PRODUCTS_MOCK.filter(
      ({ name, description }) => name.includes(term) || description.includes(term),
    );
    const fetch = () => resolve(filtered);
    setTimeout(fetch, 2500);
  });

const PRODUCTS_MOCK = [
  {
    sku: 43900,
    name: 'Duracell - AAA Batteries (4-Pack)',
    type: 'HardGood',
    price: 5.49,
    upc: '041333424019',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description:
      'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN2400B4Z',
    url:
      'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
  },
  {
    sku: 48530,
    name: 'Duracell - AA 1.5V CopperTop Batteries (4-Pack)',
    type: 'HardGood',
    price: 5.49,
    upc: '041333415017',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description:
      'Long-lasting energy; DURALOCK Power Preserve technology; for toys, clocks, radios, games, remotes, PDAs and more',
    manufacturer: 'Duracell',
    model: 'MN1500B4Z',
    url:
      'http://www.bestbuy.com/site/duracell-aa-1-5v-coppertop-batteries-4-pack/48530.p?id=1099385268988&skuId=48530&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4853/48530_sa.jpg',
  },
  {
    sku: 127687,
    name: 'Duracell - AA Batteries (8-Pack)',
    type: 'HardGood',
    price: 7.49,
    upc: '041333825014',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description:
      'Compatible with select electronic devices; AA size; DURALOCK Power Preserve technology; 8-pack',
    manufacturer: 'Duracell',
    model: 'MN1500B8Z',
    url:
      'http://www.bestbuy.com/site/duracell-aa-batteries-8-pack/127687.p?id=1051384045676&skuId=127687&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1276/127687_sa.jpg',
  },
  {
    sku: 150115,
    name: 'Energizer - MAX Batteries AA (4-Pack)',
    type: 'HardGood',
    price: 4.99,
    upc: '039800011329',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description: '4-pack AA alkaline batteries; battery tester included',
    manufacturer: 'Energizer',
    model: 'E91BP-4',
    url:
      'http://www.bestbuy.com/site/energizer-max-batteries-aa-4-pack/150115.p?id=1051384046217&skuId=150115&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1501/150115_sa.jpg',
  },
  {
    sku: 185230,
    name: 'Duracell - C Batteries (4-Pack)',
    type: 'HardGood',
    price: 8.99,
    upc: '041333440019',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description:
      'Compatible with select electronic devices; C size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN1400R4Z',
    url:
      'http://www.bestbuy.com/site/duracell-c-batteries-4-pack/185230.p?id=1051384046486&skuId=185230&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1852/185230_sa.jpg',
  },
  {
    sku: 185267,
    name: 'Duracell - D Batteries (4-Pack)',
    type: 'HardGood',
    price: 9.99,
    upc: '041333430010',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.99,
    description:
      'Compatible with select electronic devices; D size; DURALOCK Power Preserve technology; 4-pack',
    manufacturer: 'Duracell',
    model: 'MN1300R4Z',
    url:
      'http://www.bestbuy.com/site/duracell-d-batteries-4-pack/185267.p?id=1051384046551&skuId=185267&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/1852/185267_sa.jpg',
  },
  {
    sku: 312290,
    name: 'Duracell - 9V Batteries (2-Pack)',
    type: 'HardGood',
    price: 7.99,
    upc: '041333216010',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
    shipping: 5.49,
    description:
      'Compatible with select electronic devices; alkaline chemistry; 9V size; DURALOCK Power Preserve technology; 2-pack',
    manufacturer: 'Duracell',
    model: 'MN1604B2Z',
    url:
      'http://www.bestbuy.com/site/duracell-9v-batteries-2-pack/312290.p?id=1051384050321&skuId=312290&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3122/312290_sa.jpg',
  },
  {
    sku: 324884,
    name: 'Directed Electronics - Viper Audio Glass Break Sensor',
    type: 'HardGood',
    price: 39.99,
    upc: '093207005060',
    category: [{ id: 'pcmcat113100050015', name: 'Carfi Instore Only' }],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with Directed Electronics alarm systems; microphone and microprocessor detect and analyze intrusions; detects quiet glass breaks',
    manufacturer: 'Directed Electronics',
    model: '506T',
    url:
      'http://www.bestbuy.com/site/directed-electronics-viper-audio-glass-break-sensor/324884.p?id=1112808077651&skuId=324884&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3248/324884_rc.jpg',
  },
  {
    sku: 333179,
    name: 'Energizer - N Cell E90 Batteries (2-Pack)',
    type: 'HardGood',
    price: 5.99,
    upc: '039800013200',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208006', name: 'Specialty Batteries' },
    ],
    shipping: 5.49,
    description: 'Alkaline batteries; 1.5V',
    manufacturer: 'Energizer',
    model: 'E90BP-2',
    url:
      'http://www.bestbuy.com/site/energizer-n-cell-e90-batteries-2-pack/333179.p?id=1185268509951&skuId=333179&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3331/333179_sa.jpg',
  },
  {
    sku: 346575,
    name:
      'Metra - Radio Installation Dash Kit for Most 1989-2000 Ford, Lincoln & Mercury Vehicles - Black',
    type: 'HardGood',
    price: 16.99,
    upc: '086429002757',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    ],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with most 1989-2000 Ford, Lincoln and Mercury vehicles; snap-in TurboKit offers fast installation; spacer/trim ring; rear support bracket',
    manufacturer: 'Metra',
    model: '99-5512',
    url:
      'http://www.bestbuy.com/site/metra-radio-installation-dash-kit-for-most-1989-2000-ford-lincoln-mercury-vehicles-black/346575.p?id=1218118704590&skuId=346575&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3465/346575_rc.jpg',
  },
  {
    sku: 346646,
    name: 'Metra - Radio Dash Multikit for Select GM Vehicles - Black',
    type: 'HardGood',
    price: 16.99,
    upc: '086429003273',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    ],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with select GM vehicles; plastic material',
    manufacturer: 'Metra',
    model: '99-4500',
    url:
      'http://www.bestbuy.com/site/metra-radio-dash-multikit-for-select-gm-vehicles-black/346646.p?id=1210376657731&skuId=346646CC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3466/346646_rc.jpg',
  },
  {
    sku: 347137,
    name: 'Metra - Wiring Harness for Select 1998-2008 Ford Vehicles - Multicolored',
    type: 'HardGood',
    price: 16.99,
    upc: '086429056514',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      "Compatible with select 1998-2008 Ford vehicles; connects an aftermarket radio to a vehicle's harness",
    manufacturer: 'Metra',
    model: '70-1771',
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-select-1998-2008-ford-vehicles-multicolored/347137.p?id=1142290459780&skuId=347137&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
  },
  {
    sku: 347146,
    name: 'Metra - Turbo Wire Aftermarket Radio Wire Harness Adapter for Select Vehicles',
    type: 'HardGood',
    price: 16.99,
    upc: '086429056507',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      "Compatible with Honda and Acura vehicles; connects an aftermarket radio to your car's harness",
    manufacturer: 'Metra',
    model: '70-1721',
    url:
      'http://www.bestbuy.com/site/metra-turbo-wire-aftermarket-radio-wire-harness-adapter-for-select-vehicles/347146.p?id=1183160746244&skuId=347146&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3471/347146_rc.jpg',
  },
  {
    sku: 347155,
    name: 'Metra - Wiring Harness for Most 1986-1998 Honda Acura Vehicles - Multicolored',
    type: 'HardGood',
    price: 16.99,
    upc: '086429002597',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      "Compatible with most 1986-1998 Honda Acura vehicles; connects an aftermarket radio to a vehicle's harness",
    manufacturer: 'Metra',
    model: '70-1720',
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-most-1986-1998-honda-acura-vehicles-multicolored/347155.p?id=1142292396747&skuId=347155&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3471/347155_rc.jpg',
  },
  {
    sku: 347333,
    name: 'METRA - Antenna Cable Adapter - Black',
    type: 'HardGood',
    price: 13.99,
    upc: '086429007189',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050032', name: 'Antennas & Adapters' },
    ],
    shipping: 0,
    description:
      'Compatible with select 1988-2005 vehicles; adapts an aftermarket antenna to OEM radios; flat plug',
    manufacturer: 'METRA',
    model: '40VW10',
    url:
      'http://www.bestbuy.com/site/metra-antenna-cable-adapter-black/347333.p?id=1169512349334&skuId=347333&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3473/347333_sa.jpg',
  },
  {
    sku: 349572,
    name: 'INSTALL - PORTABLE RADAR DETECTOR INST',
    type: 'HardGood',
    price: 29.99,
    upc: '400003495726',
    category: [{ id: 'pcmcat298100050010', name: 'In-Store Only' }],
    shipping: '',
    description: 'PORTABLE RADAR DETECTOR INST',
    manufacturer: 'INSTALL',
    model: 'PRT RDR IN',
    url:
      'http://www.bestbuy.com/site/install-portable-radar-detector-inst/349572.p?id=1218019625086&skuId=349572&cmp=RMXCC',
    image:
      'http://img.bbystatic.com/BestBuy_US/images/products/nonsku/default_hardlines_m.gif',
  },
  {
    sku: 373642,
    name: 'Jensen - 3.6V NiCad Battery for 900MHz Phones',
    type: 'HardGood',
    price: 19.99,
    upc: '044476085840',
    category: [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'abcat0802000', name: 'Telephones & Communication' },
      { id: 'abcat0811011', name: 'Telephone Accessories' },
      { id: 'abcat0811012', name: 'Cordless Phone Batteries' },
    ],
    shipping: 5.49,
    description:
      'Rechargeable 3.6V 300 mAh NiCad battery for GE 2-9614 model cordless phones',
    manufacturer: 'Jensen',
    model: 'P-3303',
    url:
      'http://www.bestbuy.com/site/jensen-3-6v-nicad-battery-for-900mhz-phones/373642.p?id=1051384793767&skuId=373642&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/3736/373642_rc.jpg',
  },
  {
    sku: 478398,
    name:
      'Metra - Radio Installation Dash Kit for Select Ford, Mazda and Mercury Vehicles (Pair) - Black',
    type: 'HardGood',
    price: 16.99,
    upc: '086429018871',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    ],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with select Ford, Mazda and Mercury vehicles; allows the installation of an aftermarket radio into the factory dash location; high-grade ABS plastic material',
    manufacturer: 'Metra',
    model: '99-5600',
    url:
      'http://www.bestbuy.com/site/metra-radio-installation-dash-kit-for-select-ford-mazda-and-mercury-vehicles-pair-black/478398.p?id=1185268614282&skuId=478398&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/4783/478398_rc.jpg',
  },
  {
    sku: 612732,
    name: 'Metra - 1/4" DIN Trim Ring for Most Vehicles',
    type: 'HardGood',
    price: 10.99,
    upc: '086429005536',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    ],
    shipping: 0,
    description:
      'Compatible with most vehicles; designed for the installation of an aftermarket radio',
    manufacturer: 'Metra',
    model: '89-30-0250',
    url:
      'http://www.bestbuy.com/site/metra-1-4-din-trim-ring-for-most-vehicles/612732.p?id=1179531744934&skuId=612732&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6127/612732_sa.jpg',
  },
  {
    sku: 643600,
    name: 'Metra - Turbowire Radio Harness Adapter for Select Jeep Vehicles',
    type: 'HardGood',
    price: 16.99,
    upc: '086429003341',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      'Compatible with select Jeep vehicles; ABS and vinyl construction; colored-coded wires',
    manufacturer: 'Metra',
    model: '70-1002',
    url:
      'http://www.bestbuy.com/site/metra-turbowire-radio-harness-adapter-for-select-jeep-vehicles/643600.p?id=1183160746436&skuId=643600&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643600_rc.jpg',
  },
  {
    sku: 643628,
    name: 'Metra - Speaker Connector for Select Volkswagen Vehicles',
    type: 'HardGood',
    price: 16.99,
    upc: '086429113255',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      "Compatible with select Volkswagen vehicles; connects a speaker to the vehicle's stereo; easy installation",
    manufacturer: 'Metra',
    model: 'VW-9000',
    url:
      'http://www.bestbuy.com/site/metra-speaker-connector-for-select-volkswagen-vehicles/643628.p?id=1183160746500&skuId=643628&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643628_rc.jpg',
  },
  {
    sku: 643691,
    name: 'Metra - Speaker Connector for Select Mitsubishi and Chrysler Vehicles',
    type: 'HardGood',
    price: 19.99,
    upc: '086429002528',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with 1987 - 1993 Mitsubishi and Chrysler vehicles; color-coded wires',
    manufacturer: 'Metra',
    model: '70-1743',
    url:
      'http://www.bestbuy.com/site/metra-speaker-connector-for-select-mitsubishi-and-chrysler-vehicles/643691.p?id=1218019642861&skuId=643691&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6436/643691_rc.jpg',
  },
  {
    sku: 643717,
    name: 'Metra - Wiring Harness for Most 1990-2001 Mazda Vehicles - Multicolored',
    type: 'HardGood',
    price: 16.99,
    upc: '086429002627',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050034', name: 'Deck Harnesses' },
    ],
    shipping: 0,
    description:
      "Compatible with most 1990-2001 Mazda vehicles; connects an aftermarket radio to a vehicle's harness",
    manufacturer: 'Metra',
    model: '70-7901',
    url:
      'http://www.bestbuy.com/site/metra-wiring-harness-for-most-1990-2001-mazda-vehicles-multicolored/643717.p?id=1142291937563&skuId=643717&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/6437/643717_rc.jpg',
  },
  {
    sku: 673890,
    name: 'Metra - Professional Installer Series TurboKit',
    type: 'HardGood',
    price: 16.99,
    upc: '086429003792',
    category: [
      { id: 'abcat0300000', name: 'Car Electronics & GPS' },
      { id: 'pcmcat165900050023', name: 'Car Installation Parts & Accessories' },
      { id: 'pcmcat331600050007', name: 'Car Audio Installation Parts' },
      { id: 'pcmcat165900050031', name: 'Deck Installation Parts' },
      { id: 'pcmcat165900050033', name: 'Dash Installation Kits' },
    ],
    shipping: 0,
    description:
      'From our expanded online assortment; compatible with select Chevrolet, Geo and Suzuki vehicles; allows installation of an aftermarket radio; provision for a 1/4" or 1/2" DIN equalizer; mounts precisely to OEM radio mounting positions',
    manufacturer: 'Metra',
    model: '99-3410',
    url:
      'http://www.bestbuy.com/site/metra-professional-installer-series-turbokit/673890.p?id=1118842643714&skuId=673890&cmp=RMXCC',
    image: 'http://img.bbystatic.com/BestBuy_US/images/products/9852/9852688_sa.jpg',
  },
];
