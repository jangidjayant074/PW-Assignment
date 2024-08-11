function NameAndStreet(person) {
    // Destructure the nested object to extract the name and street properties
    const { info: { name, address: { street } } } = person;
  
    // Create a new object with the extracted properties
    const result = { name, street };
  
    return result;
  }
  
//   Nested Object:
  const person = {
    info: {
      name: 'harry',
      address: {
        street: '123 Main Street',
        city: 'NewYork',
        country: 'USA'
      }
    }
  };
  
  const extractedData = NameAndStreet(person);
  
  console.log(extractedData);

  