//CallBack (Chamar de volta)

function sayMyName (name){
   console.log('BEFORE THE CALLBACK');

  name()

   console.log('AFTER THE CALL')
   
}

sayMyName(
    () => {
    console.log('CALLBACK')
})