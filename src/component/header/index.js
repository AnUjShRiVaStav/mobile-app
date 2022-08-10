import React from "react";
import './style.css'
export default function Header(){
    return(
        <div className="header">
            <div className="img_box">
                <img className="img" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&usqp=CAU" alt="profile" />
                <p>Diana</p>
            </div>
        </div>
    )
}