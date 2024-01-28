# Task

Create your own error classes to use for validation, by extending the standard in-built Error class.

## ValidationError

error object should have the following properties:

`message` - message string, that you pass as an argument, when creating an Error;
`stack` - call stack;
`name` - should be 'ValidationError';

## FieldValidationError

compared to ValidationError, should have additional
`field` property, where you can record the name of the filed that failed the validation;
`name` - should be 'FieldValidationError'

## Write the code, that will use these error classes

'validate' function should expect an argument to be an object with 'name' and 'surname' fields.

If revecived value is not an object, Validation Error should be thrown, if object is missing 'name' or 'surname' fields - FieldValidationError should be thrown with the corresponding field name in 'field' property

## Error handling

Log the general information about the error to console.
Log the 'field' property value only in case of FieldValidationError
