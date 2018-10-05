/**
 * This is a file to syntax highlight Arduino code using SyntaxHighlighter
 *
 * The brush was written by Jonathan Guberman
 * http://upnotnorth.net
 *
 * SyntaxHighlighter is written by Alex Gorbatchev as donationware.
 * If you are using it, please consider making a donation.
 * http://alexgorbatchev.com/
 *
 * This brush file is released to the public domain. Do with it as you see fit.
 * However, I'd appreciate it if you continued to credit me and leave in the 
 * reference to my website (http://upnotnorth.net).
 */
SyntaxHighlighter.brushes.arduino = function()
{
	var datatypes =	'boolean char byte int long float double void unsigned volatile word string static const';

	var keywords =	'setup loop if else for switch case default while do break continue return';
					
	var functions =	'pinMode digitalWrite digitalRead analogRead analogWrite shiftOut pulseIn ' +
			'millis micros delay delayMicroseconds min max abs constrain ' +
			'map pow sq sqrt sin cos tan randomSeed random ' + 
			'sizeof lowByte highByte bitRead bitWrite bitSet bitClear bit tone noTone' +
			'attachInterrupt detachInterrupt interrupts noInterrupts ' +
			'Serial\\.begin Serial\\.available Serial\\.read Serial\\.flush ' + 
			'Serial\\.print Serial\\.println Serial\\.write ';
					
	var constants = 'HIGH LOW INPUT OUTPUT true false CHANGE RISING FALLING';

	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' }			// one line comments
		,{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' }			// multiline comments
		,{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' }			// strings
		,{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' }			// strings
		,{ regex: /^ *#(.)+?\b/gm,									css: 'preprocessor' }		// preprocessor directives
		,{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' } 		// datatypes
		,{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions' } 	// functions
		,{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' } 		// control flow
		,{ regex: new RegExp(this.getKeywords(constants), 'gm'),		css: 'constants bold' } 	// predefined constants
		,{ regex: /\b(\d*\.\d+([Ee]-?\d{1,3})?)|(\d+[Ee]-?\d{1,3})\b/gm,	css: 'constants'} // numeric constants (floating point)
		,{ regex: /\b\d+[uU]?[lL]?\b/gm,								css: 'constants'} 	// numeric constants (decimal)
		,{ regex: /\b0x[0-9A-Fa-f]+[uU]?[lL]?\b/gm,					css: 'constants'} 	// numeric constants (hexidecimal)
		,{ regex: /\bB[01]{1,8}\b/gm,								css: 'constants'} 	// numeric constants (binary)
		,{ regex: /\+|\-|\*|\/|\%|!|\||\&amp;|=|\?|\^|~/gm, 			css: 'plain bold' }		// operators
       //,{ regex: /\b(?:\w+?(?=\(.*?\)\W))/gm,							css: 'plain italic'}		// Other functions/macros (i.e. user-defined)        
		];
};

SyntaxHighlighter.brushes.arduino.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.arduino.aliases	= ['arduino', 'arduinolite'];