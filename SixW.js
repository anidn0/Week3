   let uname = "Mitch Cuckovich";
   let age = 25;
   let birthday = "January 24";
   const detroitGC = true;
   const lifeEvents = [ "I was born in Troy, Michigan.", "I went to Hope College", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of the front-end bootcamp."  ]
   
   
   if (detroitGC === true) {
       console.log(`My name is ${uname} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
      }  else {
       console.log(`My name is ${uname} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
      }

        for (let i = 0; i < age; i++) {
            if (i <= 1) { 
                console.log (lifeEvents[0]);        
                }
            if (i = 18) { 
                console.log (lifeEvents[1]);        
                    }
            if (i = 18) { 
                console.log (lifeEvents[2]);        
                        }
            if (i = 24) { 
                console.log (lifeEvents[3]);        
                            }
        }  
    
      
    let counter = 0;
    //console.log (counter)
    //console.log(typeof counter)
    // let randomNumber = Math.floor(Math.random() * 10) + 1;
     let randomNumber = 0
    //console.log(typeof rn)
    // console.log (randomNumber)
  

     //while (counter < 15 ) { 

       // while (randomNumber != 5 ) { 
        while (counter < 10 ) {  
          console.log(randomNumber);
          if (randomNumber != 5) { 
           
            counter++;   
            console.log (`Going Up the counter is ${counter}  RN is ${randomNumber}  Not !== 5`); 
            randomNumber =  Math.floor(Math.random() * 10) + 1;  
            console.log (`New RN is ${randomNumber} `);    
            } 
        else {
            counter++;
            console.log (`5 == 5.  it took ${counter} iterations to randomly generate the number 5`);  
		    }
         }
     