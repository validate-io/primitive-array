'use strict';

var isPrimitiveArray = require( './../lib' );

console.log( isPrimitiveArray( [null,undefined,'',0,false] ) );
// returns true

console.log( isPrimitiveArray( [] ) );
// returns false

console.log( isPrimitiveArray( [[],{}] ) );
// returns false

console.log( isPrimitiveArray( [new Boolean(), new Number(), new String()] ) );
// returns false
