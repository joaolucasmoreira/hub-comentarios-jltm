let data = []

const submitComment = (event) => {
    event.preventDefault();

    const author = inputAuthor.value;
    const comment = inputComment.value;
    const date = momentComment()

    data.push({ author: author, comment: comment, date: date})

    loadComment()
}

const formComentario = document.getElementById('formComment')
formComentario.addEventListener("submit", submitComment)

const loadComment = () => {
    if (data) {
        displayComment();
    }
}

const displayComment = () => {
    const divFeed = document.getElementById('comment-feed'); 
    divFeed.innerHTML = ``
    data.forEach(item => {
        const divDisplay = document.createElement('div');
        divDisplay.className = 'd-flex text-body-secondary pt-3 position-relative'
        divDisplay.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#e83e8c"></rect><text x="50%" y="50%" fill="#e83e8c"
                    dy=".3em">32x32</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">${item.author}</strong>
                ${item.comment}
            </p>
            <p class="date">
              ${item.date}
            </p>
        `
        divFeed.appendChild(divDisplay);
    })
}

const momentComment = () => {
    const currentDate = new Date()
    const options = {day: 'numeric', month: 'short', hour: 'numeric'}; 
    const date = `${currentDate.toLocaleDateString('pt-BR', options)} hrs`
    return date
}
