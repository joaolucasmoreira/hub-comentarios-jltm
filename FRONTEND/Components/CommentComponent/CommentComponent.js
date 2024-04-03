import { darkColors, formatDate, lightColors } from "../../utils.js";
import { CommentService } from "../../services/comment.services.js";
import { Comment } from "../../models/comment.model.js";
import { randomColor } from "../../utils.js";
import { User } from "../../models/user.model.js";

const getInputComment = () => {
  return document.getElementById("inputComment")
};

const getInputCommentValue = () => {
  return {
    comment_text: document.getElementById("inputComment").value,
  };
};

const setInputComment = (commentValue) => {
  const { comment } = getInputComment();
  comment.value = commentValue;
};

const clearCommentField = () => {
  const { comment } = getInputComment()
  comment.value = ""
}

const submitComment = (event) => {
  event.preventDefault();
  const comment = {comment_text: getInputCommentValue()};
  CommentService.apiPostComment(comment).then(result => {
    alert(result)
    clearCommentField()
    loadComment()
  }).catch((error) => {
      console.log(error)
  })
};

const loadComment = () => {
  // Dados carregados da API
  CommentService.apiGetComment()
    .then((result) => {
      const comments = result.map(
        (comment) =>
          new Comment(
            comment.id,
            comment.author,
            comment.comment_text,
            comment.created_at,
            comment.updated_at
          )
      );
      displayComment(comments);
    })
    .catch((error) => {
      console.error(error);
      alert(error);
    });
};

const displayComment = (comments) => {
  const divFeed = document.getElementById("comment-feed");
  divFeed.innerHTML = ``;
  comments.forEach((item) => {
    const divDisplay = document.createElement("div");
    divDisplay.className = "d-flex text-body-secondary pt-3";
    divDisplay.innerHTML = `
            <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>comentário</title>
                <rect width="100%" height="100%" fill="${darkColors()}"></rect><text x="50%" y="50%" fill="#007bff"
                    dy=".3em"></text>
                <text x="35%" y="50%" fill="${lightColors()}"dy=".3em" >${item
      .getAuthor()
      .charAt(0)}</text>
            </svg>
            <p class="pb-3 mb-0 small lh-sm border-bottom">
                <strong class="d-block text-gray-dark">@${item.getAuthor()}
                <span class="date-style badge text-bg-secondary">${formatDate(
                  item.getCreatedAt()
                )}</span>
                </strong>
                ${item.getComment_text()}
            </p>        
        `;
    divFeed.appendChild(divDisplay);
  });
};

const CommentComponent = {
  run: () => {
    const formComentario = document.getElementById("formComment");
    formComentario.addEventListener("submit", submitComment);
    window.onload = () => {
      loadComment();
    };
  },
  params: (usr) => {
    _user = usr;
  },
};

export { CommentComponent, setInputComment };