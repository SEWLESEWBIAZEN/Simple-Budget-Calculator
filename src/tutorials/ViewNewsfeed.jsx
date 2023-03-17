import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewNewsfeed()
{
    return (
        <div>
            <div id="container" >
                <div className='card'>
                    <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Hero Image" />
                    <div className='card_details'>
                        <span className='comment'>Comment</span>
                        <span className='ask'>Ask</span>
                        <div className='name'>Newsfeed</div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur sodales morbi dignissim sed diam
                            pharetra
                            vitae ipsum odio</p>
                        <button >ReadMore</button>


                    </div>

                </div>
                <div className='footer'>
                    <h1>this is the footer</h1>

                </div>


            </div>
            <div className='filter'>
                <form className='filter_form'>
                    <input type="text" placeholder='Date' className='input1'></input>
                    <input type="text" placeholder='Type' className='input1'></input>
                    <input type="text" placeholder='Sort' className='input1'></input>

                </form>


            </div>


        </div>
    )
}

export default ViewNewsfeed