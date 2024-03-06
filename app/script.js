let data = []

const submitComment = (event) => {
    event.preventDefault();
    
    const author = inputAuthor.value
    const comment = inputComment.value

    data.push({ author:author, comment: comment})
    console.log(data)

    loadComment()
}

const formComentarios = document.getElementById('formComment')
formComentarios.addEventListener("submit", submitComment)

const loadComment = () => {
    if (data) {
        divDisplayComment()
    }
}

const divDisplayComment = () => {
    const body = document.getElementsByTagName('body')[0]
    data.forEach(elemento => {
    const divDisplay = document.createElement('div')
    divDisplay.className = "commentarios"
    divDisplay.innerHTML = `
    <div class="comentarios">
    <p>Author:${elemento.author}</p>
    <p>Comentario: ${elemento.comment}</p>
    </div>
    `
    body.appendChild(divDisplay)
})
}

loadComment();