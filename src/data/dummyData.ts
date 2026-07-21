export interface Vegetable {
  id: string
  name: string
  variety: string
  zone: string
  quantity: number
  plantedDate: string
  harvestReadyDate: string
  status: 'growing' | 'ready' | 'harvested' | 'needs attention'
}

export const dummyVegetables: Vegetable[] = [
  { id: 'c036e664-ba6b-4244-bc3d-2258616ad930', name: 'Lettuce', variety: 'Butterhead', zone: 'Zone A - Rack 1', quantity: 240, plantedDate: '2026-06-10', harvestReadyDate: '2026-07-08', status: 'ready' },
  { id: 'f5324e3b-ce6f-4bce-b90c-82ce2fb23b0a', name: 'Lettuce', variety: 'Romaine', zone: 'Zone A - Rack 2', quantity: 180, plantedDate: '2026-06-15', harvestReadyDate: '2026-07-13', status: 'ready' },
  { id: 'bb906c93-3603-408d-814b-6bd8e2e1c252', name: 'Spinach', variety: 'Baby Leaf', zone: 'Zone A - Rack 3', quantity: 320, plantedDate: '2026-07-01', harvestReadyDate: '2026-07-25', status: 'growing' },
  { id: '193fbe62-8323-415d-aefe-ca4496016164', name: 'Kale', variety: 'Lacinato', zone: 'Zone B - Rack 1', quantity: 150, plantedDate: '2026-06-20', harvestReadyDate: '2026-07-18', status: 'growing' },
  { id: 'ffdedc31-b52a-4958-bdac-af74fc23724d', name: 'Kale', variety: 'Curly', zone: 'Zone B - Rack 2', quantity: 165, plantedDate: '2026-06-05', harvestReadyDate: '2026-07-03', status: 'harvested' },
  { id: 'bcccaf1d-b537-42eb-9e01-7a8ef80477d0', name: 'Arugula', variety: 'Wild Rocket', zone: 'Zone B - Rack 3', quantity: 210, plantedDate: '2026-07-05', harvestReadyDate: '2026-07-27', status: 'growing' },
  { id: 'e98482c0-6ea9-4163-bd83-726e8723a299', name: 'Swiss Chard', variety: 'Bright Lights', zone: 'Zone C - Rack 1', quantity: 95, plantedDate: '2026-06-18', harvestReadyDate: '2026-07-20', status: 'needs attention' },
  { id: 'aa0dbb9b-eea3-4735-af1d-0b8f57f5e148', name: 'Bok Choy', variety: 'Baby Bok Choy', zone: 'Zone C - Rack 2', quantity: 275, plantedDate: '2026-06-28', harvestReadyDate: '2026-07-22', status: 'growing' },
  { id: 'fd28e520-c791-46c8-a7f9-5d5d17d11dad', name: 'Basil', variety: 'Genovese', zone: 'Zone C - Rack 3', quantity: 130, plantedDate: '2026-06-25', harvestReadyDate: '2026-07-19', status: 'ready' },
  { id: '59a23f10-9781-49cf-a5ac-6dc9830c6c41', name: 'Basil', variety: 'Thai', zone: 'Zone D - Rack 1', quantity: 110, plantedDate: '2026-07-08', harvestReadyDate: '2026-08-01', status: 'growing' },
  { id: '608cfc65-01dd-44ec-ba1f-9c0524ba81ca', name: 'Microgreens', variety: 'Pea Shoots', zone: 'Zone D - Rack 2', quantity: 400, plantedDate: '2026-07-14', harvestReadyDate: '2026-07-24', status: 'growing' },
  { id: 'fa78a729-755f-494b-8a4b-10014972329e', name: 'Microgreens', variety: 'Radish Sprouts', zone: 'Zone D - Rack 3', quantity: 380, plantedDate: '2026-07-15', harvestReadyDate: '2026-07-23', status: 'growing' },
  { id: 'f4de3066-a62e-45f3-bf8c-a6a3477b7f1a', name: 'Cucumber', variety: 'English', zone: 'Zone E - Rack 1', quantity: 60, plantedDate: '2026-05-20', harvestReadyDate: '2026-07-15', status: 'ready' },
  { id: '0f969832-3bb9-4188-b2e0-c702276472fc', name: 'Cucumber', variety: 'Persian', zone: 'Zone E - Rack 2', quantity: 72, plantedDate: '2026-05-25', harvestReadyDate: '2026-07-20', status: 'growing' },
  { id: '34def961-be6e-4d22-9716-cfbd6678dd1a', name: 'Tomato', variety: 'Cherry', zone: 'Zone E - Rack 3', quantity: 90, plantedDate: '2026-05-10', harvestReadyDate: '2026-07-19', status: 'ready' },
  { id: 'bcd2c6e3-ff2b-46c0-9e9c-968cb5c5f2d5', name: 'Tomato', variety: 'Beefsteak', zone: 'Zone F - Rack 1', quantity: 55, plantedDate: '2026-05-15', harvestReadyDate: '2026-07-24', status: 'growing' },
  { id: '33ce0f52-229b-441f-8a1c-c0a895dd14de', name: 'Bell Pepper', variety: 'Red', zone: 'Zone F - Rack 2', quantity: 84, plantedDate: '2026-05-01', harvestReadyDate: '2026-07-30', status: 'growing' },
  { id: 'cd5ff39b-aa81-457f-8484-774348544aec', name: 'Bell Pepper', variety: 'Yellow', zone: 'Zone F - Rack 3', quantity: 78, plantedDate: '2026-05-03', harvestReadyDate: '2026-07-28', status: 'needs attention' },
  { id: 'ca9f1a3a-f958-482c-b517-e0c226d97ad5', name: 'Radish', variety: 'Cherry Belle', zone: 'Zone G - Rack 1', quantity: 220, plantedDate: '2026-07-01', harvestReadyDate: '2026-07-22', status: 'growing' },
  { id: '4f518702-156b-4b87-bb3c-e30cc8c6a962', name: 'Radish', variety: 'French Breakfast', zone: 'Zone G - Rack 2', quantity: 205, plantedDate: '2026-06-28', harvestReadyDate: '2026-07-19', status: 'ready' },
  { id: 'bf401fb3-b16b-40bc-88cb-86758880a6c2', name: 'Swiss Chard', variety: 'Fordhook Giant', zone: 'Zone G - Rack 3', quantity: 88, plantedDate: '2026-06-12', harvestReadyDate: '2026-07-14', status: 'harvested' },
  { id: '9cbc3a01-fe92-426d-86dd-5bd20e2ff052', name: 'Bok Choy', variety: 'Shanghai', zone: 'Zone H - Rack 1', quantity: 260, plantedDate: '2026-06-30', harvestReadyDate: '2026-07-24', status: 'growing' },
  { id: '3fc91bd5-304c-4510-a30b-a5130313718c', name: 'Spinach', variety: 'Savoy', zone: 'Zone H - Rack 2', quantity: 300, plantedDate: '2026-06-22', harvestReadyDate: '2026-07-16', status: 'ready' },
  { id: '4f3743a2-815c-443c-97b5-0039b471c2a0', name: 'Arugula', variety: 'Astro', zone: 'Zone H - Rack 3', quantity: 195, plantedDate: '2026-07-10', harvestReadyDate: '2026-08-01', status: 'growing' },
  { id: '7111255f-c3ac-4997-b40d-bdbcc1300fa5', name: 'Lettuce', variety: 'Green Oak', zone: 'Zone I - Rack 1', quantity: 230, plantedDate: '2026-06-08', harvestReadyDate: '2026-07-06', status: 'harvested' },
  { id: '70f3e094-870d-4e41-a8a8-61d7c0cb8e78', name: 'Lettuce', variety: 'Red Leaf', zone: 'Zone I - Rack 2', quantity: 210, plantedDate: '2026-07-02', harvestReadyDate: '2026-07-26', status: 'growing' },
  { id: '5d6f1555-9cb4-4b93-af6d-ff263a5e3370', name: 'Kale', variety: 'Red Russian', zone: 'Zone I - Rack 3', quantity: 140, plantedDate: '2026-06-14', harvestReadyDate: '2026-07-12', status: 'needs attention' },
  { id: 'f24e434a-c394-4d0d-9648-22bb160f9698', name: 'Microgreens', variety: 'Sunflower Shoots', zone: 'Zone J - Rack 1', quantity: 350, plantedDate: '2026-07-16', harvestReadyDate: '2026-07-25', status: 'growing' },
  { id: '5922fb79-cba7-4e7d-b7a8-283f841c85e8', name: 'Basil', variety: 'Purple', zone: 'Zone J - Rack 2', quantity: 100, plantedDate: '2026-06-27', harvestReadyDate: '2026-07-21', status: 'ready' },
  { id: 'b25233fc-1cc5-41b2-83a6-75548026bacf', name: 'Tomato', variety: 'Roma', zone: 'Zone J - Rack 3', quantity: 65, plantedDate: '2026-05-08', harvestReadyDate: '2026-07-17', status: 'ready' },
]
