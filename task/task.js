class ValidationError extends Error {
	name = 'ValidationError';
}

class FieldValidationError extends ValidationError {
	constructor(message, field) {
		super(message);
		this.field = field;
	}

	name = 'FieldValidationError';
}

function validate(arg) {
	if (typeof arg !== 'object' || arg === null)
		throw new ValidationError('argument is not an object');
	else
		['name', 'surname'].forEach((key) => {
			if (!(key in arg))
				throw new FieldValidationError('required field is missing', key);
		});
}

try {
	validate({});
} catch (err) {
	console.log(err.message); // Oops!
	console.log(err.name); // ValidationError
	console.log(err.stack);
	if (err instanceof FieldValidationError) console.log(err.field);
}
