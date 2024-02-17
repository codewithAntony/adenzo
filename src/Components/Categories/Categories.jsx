import React, { useState } from "react"
import "./Categories.css"
import Previous from "../../Assets/arrow-left.png"
import Next from "../../Assets/arrow-right.png"

function Categories() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        "https://adenzo.co.ke/public/uploads/all/N8WWsDaamH9Hl5TxD3aUbgspfGxBRCsJjdXwMfml.png",
        "https://adenzo.co.ke/public/uploads/all/yzcmN3RLbjbxXcupd83Mpl4cnl6KbUpq372eaP2N.jpg",
        "https://adenzo.co.ke/public/uploads/all/KmHkjG8aLOmslF3dGYIXd4zWyrA9quBSr36VC0wO.jpg",
        "https://adenzo.co.ke/public/uploads/all/lC1l3u4RT51x4PyffDBflBYBSkT2RChdlevKz3wM.jpg"
    ]

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }


    return (
        <div className='categories'>
            <div className="categories-l">
                <div className="categories-l-header">
                    <h3>Categories</h3>
                    <a href="#">See All ></a>
                </div>

                <div className="categories-l-all">
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/EljpBOOcjX2CdHAMHnQwpe5bwlIhtYGfmjTF26BW.png" alt="Car Seats" /></a>
                        <a href="#">Car Seats</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/XmfnYSzJesvqZ005q8jzfRFx7LSBZYQPa7WpyKKh.png"alt="Strollers" /></a>
                        <a href="#">Strollers</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/Yuju0Xg7KQ9Fw0q7MJEuiDxILZKhK4LMKCRCtFeJ.png" alt="Playtime" /></a>
                        <a href="#">Playtime</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/VsJBAzP7agcsfigfSb8E1JncTOMbckvyRoDeSLQE.png" alt="Feeding" /></a>
                        <a href="#">Feeding</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/pAzUNSPzeI0hzIzp5JGkGdIOOH6cesvttLySDBIS.png" alt="Breast Feeding" /></a>
                        <a href="#">Breast Feeding</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/EIbVbksLNxVBVmng5dqEKWRp44Cj9LBmaHNNJZ0F.png" alt="Gifts" /></a>
                        <a href="#">Gifts</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/UK2XHkz6RvhVVU9lZlcPyGbmScEiWMOlKsFw4qHP.png" alt="Travel" /></a>
                        <a href="#">Travel</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/fvCXU770k8VxaNQcJeHFlbhoKUpuC3J9100sQQz9.png
                        " alt="Baby Safety" /></a>
                        <a href="#">Baby Safety</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/su5ZPiOoSwgTjYm92XQGyXhqww3V7H71jMIZ85DR.png" alt="Nursery" /></a>
                        <a href="#">Nursery</a>
                    </span>
                    <span>
                        <a href="#"><img src="https://adenzo.co.ke/public/uploads/all/ep738e1vRGLpbT4Yn7ydQItDFbFDj23p0wQ87TY5.png" alt="New In" /></a>
                        <a href="#">New In</a>
                    </span>
                </div>
                
                
            </div>
            <div className="categories-r">
                <button onClick={prevImage}>
                    <img src={Previous} alt="Previous" />
                </button>
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                <button onClick={nextImage}>
                    <img src={Next} alt="Next" />
                </button>
            </div>
        </div>
    )
}

export default Categories
