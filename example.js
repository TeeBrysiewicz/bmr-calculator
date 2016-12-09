/* jshint node: true */

var prompt = require('prompt');
var colors = require("colors/safe");

// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// gray
// grey

// Handles the prompts when the script is first run. The results are stored
// in a `result` object.
var promptSchema = {
  properties: {
    weight: {
      description: colors.cyan('Weight (lbs)'),
      default: '160'
    },
    height: {
      description: colors.cyan('Height (in)'),
      default: '72'
    },
    age: {
      description: colors.cyan('Age (yrs)'),
      default: '21'
    },
  }
};

// All promise rejections should be handled the same way
var errorHandler = function(error) {
  error = error || arguments[0];
  console.log("ERROR");
  console.log(error);
  return false;
};

// Begin prompt interface
prompt.start();
prompt.get(promptSchema, function(err, result) {
  if (err) {
    errorHandler(err);
  }

  // Set our variables
  var weight = parseFloat(result.weight);
  var height = parseFloat(result.height);
  var age = parseFloat(result.age);

  var bmr = 66 + ( 6.2 * weight ) + ( 12.7 * height ) - ( 6.76 * age );

  console.log(colors.underline.red('Basal Metabolic Rate: ' + bmr));
});