import React from "react";
import Comment from "./Comment";
import comment from "./Comment";

const comments=[
    {
        name:"민경주",
        comment:"추석연휴 잘 보내고 오세요.",
    },
    {
        name:"차기환",
        comment:"집에 언제 가나~ 차막혀서",
    },
    {
        name:"정구영",
        comment:"프로젝트 예습용, 실습용을 나눌게요.",
    },
];

function CommentList(props){
    return(
        <div>
            {
                comments.map((comment) => {
                    return(
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
            })
            }

            {/*<Comment name={"김민지"} comment={"리액트 너무 재미있어요."}/>*/}
            {/*<Comment name={"조현욱"} comment={"컴포넌트Props 실습 좋아요~"}/>*/}
        </div>
    );
}

export default CommentList;