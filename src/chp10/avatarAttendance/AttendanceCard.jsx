import React from 'react';
import './AttendanceCard2.css'
import img1 from'./imgs/1.jpg'

const students = [
    {id:1, name:"윤이나", grade:2, major:"컴퓨터공학", avatar:img1},
    {id:2, name:"박지영", grade:3, major:"전기", avatar:"https://randomuser.me/api/portraits/women/2.jpg"},
    {id:3, name:"이예원", grade:3, major:"그린에너지", avatar:"https://randomuser.me/api/portraits/men/3.jpg"},
    {id:4, name:"황유민", grade:4, major:"시각디자인", avatar:"https://randomuser.me/api/portraits/women/4.jpg"},
    {id:5, name:"박현경", grade:1, major:"경영학", avatar:"https://randomuser.me/api/portraits/men/5.jpg"},
    {id:6, name:"이동은", grade:1, major:"국문과", avatar:"https://randomuser.me/api/portraits/women/6.jpg"},
    {id:7, name:"장원영", grade:2, major:"체육과", avatar:"https://randomuser.me/api/portraits/women/7.jpg"},
    {id:8, name:"안유진", grade:2, major:"컴퓨터공학", avatar:"https://randomuser.me/api/portraits/women/8.jpg"}
];

function AttendanceCard() {
    return(
        <div className="attendance-container">
            <h2 className="attendance-title">학생 사진 출석부</h2>
            <div className="card-container">
                {
                    students.map((student)=>(
                        <div className="student-card">
                            <img src={student.avatar} alt={student.name} className="student-avatar" />
                            <div className="student-info">
                                <h3>{student.name}</h3>
                                <p>{student.grade}학년 | {student.major}전공</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AttendanceCard;