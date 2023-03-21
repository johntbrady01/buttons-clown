import { reservationForm } from "./reservationForm.js"
import { Reservations,} from "./reservations.js"

export const buttons = () => {
    return `

        <div class='headerContainer'>
              <img src='../photos/download-8.jpg' class='balloons'>
              <h1 class ='header'>Buttons Clown Service</h1>
              <img src='../photos/download-8.jpg' class='balloons'>
        </div>

        <div class='bar'>
        </div>

        <div class='reservationFormContainer'>
            <div>
             <img src='../photos/images-1.jpg' class='clown'>
             <article class='clownName'>Lolipop The Clown!</article>
             </div>
        <div class='reservationForm'>
        ${reservationForm()}
        </div>
            <div>
             <img src='../photos/images.jpg' class='clown'>
             <article class='clownName'>Buttons The Clown!</article>
             </div>
        </div>

        <div class='serviceContainer'>
        <img src='../photos/download-9.jpg' class='clown'>
        <section class="serviceReservations">
            <h2 class='serviceTitle'>Reservations</h2>
            ${Reservations()}
        </section>

     
    </div>

    
    
    
    
    `
}