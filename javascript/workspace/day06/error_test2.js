try {
  variable;
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
  console.log(error);
}
