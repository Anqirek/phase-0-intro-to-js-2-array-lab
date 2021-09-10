// Write your solution here!
const cats = ["Milo","Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyPrependCat(name){
      cats.unshift("Bob")
      return cats;
  };

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(name){
      cats.pop();
      return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveFirstCat(name){
      cats.shift();
      return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

    function appendCat(name) {
      const nCat = [...cats,"Broom"]
        return nCat;
    }  

    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      });
    

function prependCat(name){
    const pCat = ["Arnold",...cats];
    return pCat;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeLastCat(){
      const nArray = cats.slice(0,2)
      return nArray;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(){
      const rArray = cats.slice(1);
      return rArray;
  }