import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Noah Jackson</h3>
                            <span>Eduera, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Eduera was one of the best decisions I've
                        ever made. The supportive community, state-of-the-art facilities, and
                        commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Mike Paul</h3>
                            <span>Eduera, USA</span>
                        </div>
                    </div>
                    <p>My college experience was a period of personal growth, intellectual stimulation and social engagement.
                        I thank my passsionate and supportive professors for their constant guidance. I'm grateful for the experiences I had at
                        college and the impact they have had on my life.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Katy Anderson</h3>
                            <span>Eduera, USA</span>
                        </div>
                    </div>
                    <p>In my experience all the teachers at Eduera are very supportive and friendly and the placement process has been 
                        very smooth throughout. I would always be very grateful for the life-long connections i made.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>David Williams</h3>
                            <span>Eduera, USA</span>
                        </div>
                    </div>
                    <p>With an attitude of being ever ready to help, and not only delivering classroom teachings, 
                        but they are also the pillars of the learning gained from this esteemed university and this is
                        a treasure for life.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
