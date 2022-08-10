import React from "react";
import './style.css'             


export default function Content(){

    const arr = [1,2,3,4,5,6,7,8];

    return(
        <div className="container" >
            {arr.map((val, index) => {
                return <div className="card" >
                    <div className="profile">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&usqp=CAU' className="profile_img" alt="" />
                    </div>
                    <div className="msg_part">
                        <div className="head" >
                            <p><strong>Sarah</strong></p>
                            <p>11:45pm</p>
                        </div>
                        <div className="content">
                            <p>Hey I've completed the design</p>
                            <p style={{ marginLeft:'10px', background:'#1E1E1E', borderRadius:'50%', width:'20px', height:'20px', color:'white'}}>2</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}