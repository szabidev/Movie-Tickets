let seatContainer = document.querySelector('.seat-container');
let movieSelect = document.getElementById('movie');
let ticketPrice = movieSelect.value;


seatContainer.addEventListener('click', selectSeat);

function selectSeat(event) {
    console.log(event.target);
    // add selected class if the event(seat) does not cotnain occupied class
    // if (
    //     event.target.classList.contains('seat') == true && !event.target.classList.contains('occupied')
    //     && !event.target.classList.contains('selected')
    // ) {
    //     event.target.classList.add('selected');
    // } else if (
    //     event.target.classList.contains('seat') &&
    //     event.target.classList.contains('selected')
    // ) {
    //     console.log('seat selected');
    //     event.target.classList.remove('selected');
    // }


    // with toggle attribute
    if (
        event.target.classList.contains('seat') && !event.target.classList.contains('occupied')
    ) {
        event.target.classList.toggle('selected')
    }

    updateTicketsCountAndPrice();
}

function updateTicketsCountAndPrice(event) {
    //  no of tickets  = no of selected seats
    var selectedSeats = document.querySelectorAll('.row .selected');
    // only the selected ones
    var numberOfTickets = selectedSeats.length;
    // console.log('selected seats = ', selectedSeats);
    // update Number of tickets span when seat is selected
    document.getElementById('count').innerHTML = numberOfTickets;
    document.getElementById('total').innerHTML = numberOfTickets * Number(ticketPrice);
};


movieSelect.addEventListener('change', updateTicketPrice);

function updateTicketPrice(event) {
    // console.log('changed' , movieSelect.value);
    ticketPrice = movieSelect.value;
    updateTicketsCountAndPrice();
}

// make a function to reset the number of tickets and price to 0 better User Experience