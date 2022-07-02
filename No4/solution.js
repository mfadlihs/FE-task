/*
  Step by Step
  1.  Lakukan fungsi map pada data1
  2. Di setiap map, lakukan Array.filter pada data2 untuk mencari apakah ada id yang sama
  3. Jika ada, lakukan Array.push pada property items dan tambahkan property notUnique
  4. Jika di data2 tidak ada id yang sama, maka lakukan data1.push(data2[i])
  5. Hapus property notUnique di variable result
*/

const data1 = [
	{
		id: '1234',
		items: [
			{
				color: 'black',
				type: 'new',
			},
			{
				color: 'blue',
				type: 'old',
			},
		],
	},
	{
		id: '5678',
		items: [
			{
				color: 'white',
				type: 'old',
			},
		],
	},
];

const data2 = [
	{
		id: '12344',
		items: [
			{
				color: 'white',
				type: 'new',
			},
		],
	},
];

const result = data1.map(itemData1 => {
	const notUniqueData = data2.filter(itemData2 => {
		if (itemData2.id == itemData1.id) {
			itemData2.notUnique = true;
			return itemData2.id == itemData1.id;
		} else {
			itemData2.notUnique = false;
		}
	});

	notUniqueData.length != 0 && console.log(notUniqueData[0].items);

	notUniqueData.length != 0 &&
		notUniqueData.forEach(data => {
			itemData1.items.push(...data.items);
		});

	return itemData1;
});

result.push(
	...data2.filter(data => {
		return !data.notUnique;
	})
);

result.forEach(data => {
	delete data.notUnique;
});

console.log(result);
