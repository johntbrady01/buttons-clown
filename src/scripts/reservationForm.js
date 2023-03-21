
import { sendReservation } from "./dataAccess.js"

export const reservationForm = () => {
    let html= `
  
    <div class='innerContainer'>
        <div class="field">
            <label class="label" for="parentName">Parent's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
    
        <div class="field">
        <label class='label' for='childName'>Child's Name</label>
        <input type='text' name="childName" class="input" />
        </div>
    
        <div class="field">
        <label class='label' for='amountOfKids'>Amount of kids</label>
        <input type='text' name="amountOfKids" class="input" />
        </div>
    
        <div class="field">
        <label class='label' for='reservationDate'>Reservation date</label>
        <input type='text' name="reservationDate" class="input" />
        </div>

        <div class="field">
        <label class='label' for='reservationLength'>Length of reservation</label>
        <input type='text' name="reservationLength" class="input" />
        </div>
        <button class="button" id="submitReservation">Submit Reservation</button>
    </div>
  
    `
return html
}

const mainContainer=document.querySelector("#container")

mainContainer.addEventListener('click', clickEvent=>{
    if(clickEvent.target.id==="submitReservation"){
        const userParentName =document.querySelector("input[name='parentName']").value
        const userChildName =document.querySelector("input[name='childName']").value
        const userAmountOfKids =document.querySelector("input[name='amountOfKids']").value
        const userReservationDate =document.querySelector("input[name='reservationDate']").value
        const userReservationLength =document.querySelector("input[name='reservationLength']").value



        const dataToSendToAPI = {
            parentName: userParentName,
            kidName: userChildName,
            amountOfKids: userAmountOfKids,
            reservationDate: userReservationDate,
            reservationLength: userReservationLength
    }
            sendReservation(dataToSendToAPI)
}

})