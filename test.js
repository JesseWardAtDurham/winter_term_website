import $RefParser from "@apidevtools/json-schema-ref-parser"

let mySchema = require("./birdsandpics.json");  

try {
  await $RefParser.dereference(mySchema);
  // note - by default, mySchema is modified in place, and the returned value is a reference to the same object
  console.log(mySchema.definitions.person.properties.firstName);

  // if you want to avoid modifying the original schema, you can disable the `mutateInputSchema` option
  let clonedSchema = await $RefParser.dereference(mySchema, { mutateInputSchema: false });
  console.log(clonedSchema.definitions.person.properties.firstName);
} catch (err) {
  console.error(err);
}