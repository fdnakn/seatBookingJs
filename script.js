const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row seat:not(.occupied)");
const movieSelect = document.getElementById("movie");
const count = document.getElementById("count");
const total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsLength = selectedSeats.length;
  count.innerText = selectedSeatsLength;
  total.innerText = selectedSeatsLength * ticketPrice ;
}


container.addEventListener('click', e => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
      e.target.classList.toggle("selected");
      updateSelectedCount();
    }
})
































