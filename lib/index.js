/**
*
*	VALIDATE: primitive-array
*
*
*	DESCRIPTION:
*		- Validates if a value is an array of JavaScript primitives.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isPrimitive = require( 'validate.io-primitive' );


// IS PRIMITIVE ARRAY //

/**
* FUNCTION: isPrimitiveArray( value )
*	Validates if a value is an array of JavaScript primitives.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an array of JavaScript primitives
*/
function isPrimitiveArray( value ) {
	var len;
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return false;
	}
	for ( var i = 0; i < len; i++ ) {
		if ( !isPrimitive( value[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isPrimitiveArray()


// EXPORTS //

module.exports = isPrimitiveArray;
