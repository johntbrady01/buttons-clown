import { getReservations,deleteReservation,getClowns,saveCompletion,getCompletions } from "./dataAccess.js";




const convertRequestToListElement = (reservation) => {
    const clowns=getClowns()
    const completions=getCompletions()
    const foundCompletion = completions.find(
        (completion) => {
            return completion.reservationId === reservation.id
        })
        let html=''
        if(foundCompletion){
            html +=  `  <li class='listItemCom'>  ${reservation.reservationDate} - ${reservation.kidName}'s Party <span class='check'>&#10003;</span>
        `
        }
  
        else {
     html +=`
    
    <li class='listItem'>  ${reservation.reservationDate} - ${reservation.kidName}'s Party 
   
    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${
clowns.map(
   clown => {
       return `<option value="${reservation.id}--${clown.id}">${clown.name}</option>`
   }
   ).join("")
}
</select>

    <button class="reservation__delete"
    id="reservation--${reservation.id}">
Delete
</button>
</li>

`}
return html


}

export const Reservations = () => {
    const reservations = getReservations()
   const sortedReservations= reservations.sort((a, b) => {
    const nameA = a.reservationDate.toUpperCase(); // ignore upper and lowercase
    const nameB = b.reservationDate.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
        let html = `
            <ul>
                ${
                    sortedReservations.map(convertRequestToListElement).join("")
                }

            </ul>
        `
                return html

}




const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "clowns") {
            const [reservationId, clownId] = event.target.value.split("--")

            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */

                   const completion= {
                       reservationId:parseInt(reservationId),
                       clownId:parseInt(clownId),
                       date_created:Date.now()
                   }
     
        
            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */

                saveCompletion(completion)

        }
    }
)