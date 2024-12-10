import React from "react";
import Card from "./Card";

function ProfileCard(){
    return(
        <div>
            <Card title="Kihwan Cha" backgroundColor="#E4F7BA">
                <p>안녕하세요~ 차기환입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="Linda Kim" backgroundColor="#CEFBC9">
                <p>안녕하세요~ 김린다입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
            <Card title="Simon je" backgroundColor="#E8D9FF">
                <p>안녕하세요~ 제시몬입니다.</p>
                <p>리액트로 카드형 템플릿을 작성중입니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;