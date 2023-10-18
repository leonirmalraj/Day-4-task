//For the given JSON itreate over all for loops (for,for in,for of,foreach)


const jsonData = {
  "name": "leo",
  "age": 28,
  "city": "Chennai",
};

//1.For the given JSON itreate over all for loops for...
  const funcFor = (arr) => {
    for (let key in jsonData) {
      if (jsonData.hasOwnProperty(key)) {
        console.log(key + ": " + jsonData[key]);
      }
    }
  };
  funcFor();

//2.For the given JSON itreate over all for loops for...in
  const funcTwo = (arr) => {
    const keys = Object.keys(jsonData);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      console.log(key + ": " + jsonData[key]);
    }
  };
  funcTwo();

//3.For the given JSON itreate over all for loops for...of
  const funcThree = (arr) => {
    for (let [key, value] of Object.entries(jsonData)) {
      console.log(key + ": " + value);
    }
  };
  funcThree();
//4.For the given JSON itreate over all for loops forEach
  const funcFour = (arr) => {
    // Convert the JSON object to an array of key-value pairs
    const entries = Object.entries(jsonData);
    
    // Use forEach to iterate
    entries.forEach(([key, value]) => {
      console.log(key + ": " + value);
    });
  };
  funcFour();
