import work1 from '../assets/work-1.png'
import work2 from '../assets/work-2.png'
import work3 from '../assets/work-3.png'
export default function portfolio() {
    return(
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={work1} alt='pic3'/>
                        <div className="layer">
                            <h3>Softdrinks Management System</h3>
                            <p> Soft Drinks Office Management System automates sales and inventory
                                tasks for a manufacturing company, providing detailed reports for efficient management oversight.
                            </p>
                            <a href="https://github.com/Bharatmadival05/Softdrinks-Management-System"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work2} alt='pic1'/>
                        <div className="layer">
                            <h3>Demo React Website</h3>
                            <p> "Explore our demo React website for an interactive and engaging
                                 showcase of modern web development techniques and design practices."
                            </p>
                            <a href="https://github.com/Bharatmadival05/React_js_Project"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work3} alt='pic2'/>
                        <div className="layer">
                            <h3>Shopping Website backend - Springboot</h3>
                            <p> "A Shopping Website backend built with Spring Boot provides
                                 a robust and efficient server-side framework, ensuring seamless product management,
                                  order processing, and secure user interactions for a responsive and feature-rich
                                   online shopping experience."
                            </p>
                            <a href="https://github.com/Bharatmadival05/Spring-Boot-Shopping-Backend-App/tree/master"><i class="fa-solid fa-arrow-up-right-from-square fa-beat"></i></a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/Bharatmadival05" className='btn'>See more</a>
            </div>
        </div>
    )
};
