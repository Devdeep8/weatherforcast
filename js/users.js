const fetchUsersData = async ()=> {
    const apiUrl = 'https://dummyjson.com/users'

   try {
    const response = await fetch(apiUrl)

    if(!response.ok){
        throw new Error
    }else{
        const users = await response.json()
        console.log(users)
        return users
        
    }
   } catch (error) {
    console.error(error)
   }
}
const updateUI = (users) => {
 
    const usersInfo = document.querySelector("#users-info");
    usersInfo.innerHTML = `
          <p>Name: ${users.firstName + users.middleName +users.lashName}</p>
          <p>age: ${users.age} ° F</p>
          <p>gender: ${users.gender}</p>
          <p>email: ${users.email}</p>
          <p>mobile: ${users.phone}</p>
          `;
  };
  const handleUserInput = async ( ) => {

      
          if (!users) {
            console.log("data")
        } else {
            
            try {
                
    
                updateUI(userData);
                
            } catch (error) {
                console.error('error in weather data : ', error.message);
                alert('error in weather data please try again  ');
                
            }
        }
        }
    
   
    document.addEventListener('DOMContentLoaded' , ()=>{
        handleUserInput()
    })