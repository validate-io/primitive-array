/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isPrimitiveArray = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-primitive-array', function tests() {

	it( 'should export a function', function test() {
		expect( isPrimitiveArray ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isPrimitiveArray( [null] );
		assert.ok( bool );

		bool = isPrimitiveArray( [undefined] );
		assert.ok( bool );

		bool = isPrimitiveArray( [''] );
		assert.ok( bool );

		bool = isPrimitiveArray( [0] );
		assert.ok( bool );

		bool = isPrimitiveArray( [false] );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			true,
			NaN,
			function(){},
			[],
			{},
			[[]],
			[{}],
			[function(){}],
			[new Boolean()],
			[new String()],
			[new Number()]
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isPrimitiveArray( value );
		}
	});

});
