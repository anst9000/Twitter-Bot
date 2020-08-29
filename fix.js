const fs = require('fs');

let rawdata = fs.readFileSync('quotes.json');
let quotes = JSON.parse(rawdata);
let arraySize = quotes.length

console.log("Size of array is", arraySize);

var uniqueArray = []
var uniqueJson = {}

for (let i = 0; i < arraySize; i++)
{

	if (!uniqueArray.find(x => x.quoteText === quotes[i].quoteText))
	{
		uniqueArray.push(quotes[i]);
	}
}

console.log(arraySize)
console.log(uniqueArray.length)

const data = JSON.stringify(uniqueArray);

try {
    fs.writeFileSync('newFile.json', data);
    console.log("JSON data is saved.");
} catch (error) {
    console.error(err);
}