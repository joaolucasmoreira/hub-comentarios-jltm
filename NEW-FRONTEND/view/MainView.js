import { randomColors, formatDate } from "../utils.js"

const View = {
    render() {
        const root = document.getElementById('root');
        root.innerHTML = `
        <div id="LeftSide"> 
        </div>
        <div id="RigthSide"> 
        </div>
        `
    },

    renderLogin(){

    },

    renderCommentFeed(comments, title) {
      const rigthSide = document.getElementById('RigthSide');
      rigthSide.innerHTML = ""

      
    },

    renderPostComment(){

    }
}
export default View;