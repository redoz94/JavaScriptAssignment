var input = prompt("course?");



function toProperCase(input)
{
  return input.toLowerCase().replace(/^(.)|\s(.)/g, 
          function($1) { return $1.toUpperCase(); });
}

console.log(toProperCase(input));



