var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "start again" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit story" )
	},
	"GoJettersIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go jetters" )
	},
	"MyNameIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "my name" )
	},
	"GoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go" )
	},
	"TheQueenIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "the queen" )
	},
	"GrandmasterGlitchIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "grandmaster glitch" )
	},
	"GoHomeGlitchIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go home glitch" )
	},
}