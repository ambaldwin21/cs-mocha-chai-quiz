 function areaCalc(x, y, z) {
   let p = ((x + y + z) / 2)
   return (Math.sqrt(p * (p - x) * (p - y) * (p - z)))
 }

 // console.log(areaCalc(3, 4, 5));

module.exports = areaCalc;
