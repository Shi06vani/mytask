import React from 'react'
import "../component/home.css"
// import {image1} from "../component/images/myimage.jpg"
let logo = require("../component/images/imagebox.avif")

export default function Homepage() {
    return (

        <section className='box_display'>
            <div className='outerbox'>
                <div className='left_box'>
                  <img src={logo} alt="" />
                </div>
                <div className='rightbox'>

                  <div className='small-boxflex'>

                  <div className='top_header'>
                        <p style={{ color: "#f1d653", fontWeight: "600", paddingTop: "10px", fontSize: "13px" }}>ALREADY MEMBER</p>
                        <p style={{ color: "gray", paddingTop: "8px", fontSize: "13px" }}>Need help?</p>
                    </div>
                    <div className='small_rightbox'>

                        <input type="text" placeholder='write your name' />
                        <input type="password" placeholder='your password' />
                        <button type='button'>sign in</button>
                        
                    </div>  
                    </div>   
                
                </div>
            </div>
        </section>

    )
}
