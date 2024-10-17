export const getFirstResolvedPromise = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.any(promises)
};

export const getFirstPromiseOrFail = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.race(promises)
};

export const getQuantityOfRejectedPromises = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.allSettled(promises)
    .then((results) => {
      const rejectedPromises = results.filter((result) => result.status === 'rejected')
      return rejectedPromises.length
    })
};

export const getQuantityOfFulfilledPromises = (promises) => {
  //*  write code to pass test ⬇ ️
  return Promise.allSettled(promises)
  .then((results) => {
    const fulfilledPromises = results.filter((result) => result.status === 'fulfilled')
    return fulfilledPromises.length
  })
};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  // To solve this you must fetch all characters passed in the array at the same time
  // use the `fetchCharacterById` function above to make this work
  //*  write code to pass test ⬇ ️

  try {
    const promises = ids.map((el) => fetchCharacterById(el))
    const results = await Promise.all(promises)
    return results
  } catch(err) {
    return []
  }
};
