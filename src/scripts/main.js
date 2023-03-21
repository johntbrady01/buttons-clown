import { buttons } from "./buttons.js"
import { fetchReservations,fetchClowns,fetchCompletions } from "./dataAccess.js"


export const mainContainer = document.querySelector("#container")


const render = () => {
    fetchReservations()
    .then(() => fetchClowns())
    .then(()=>fetchCompletions())
    .then(
            () => {
                mainContainer.innerHTML = buttons()
            }
        )}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)