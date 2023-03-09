
function is_perfect(number)
{
var temp = 0;
   for(var i=1;i<=number/2;i++)
     {
         if(number%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === number && temp !== 0)
        {
       console.log("é um numero perfeito");
        } 
     else
        {
       console.log("nao é um numero perfeito");
        }   
 } 
is_perfect(num); 
