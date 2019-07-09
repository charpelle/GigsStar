export const validateGig = data => {
  
  const fieldsArr = Object.entries(data);
  const errors = [];

  fieldsArr.forEach(field => {
    if (!field[1] || field[1].length < 1) {
      errors.push(`All fields are required`)
    }
  })
  return errors;
}