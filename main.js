let form = document.getElementById('todoform');
form.addEventListener('submit',handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); // Prevent the event from making a new get request and refreshing page
    
    let todo = event.target.todo.value;
    console.log(todo);


    Buildtodocard(todo)

    // Clear the input box at end
    event.target.todo.value = '';
}




function Buildtodocard(todoObj){
    //bulid card
    let card = document.createElement('div');
    card.className = 'card h-100';

    //grab the todo text and append it to the card

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    cardBody.append(todoObj)

    card.append(cardBody)

    let col = document.createElement('div');

    // col.className = 'col-12 col-md-6 col-lg-3 my-3'

    col.append(card)


    let todoitem = document.getElementById('todoitem');
    todoitem.append(col);

}