import React, { useEffect, useState } from 'react';
import './Feeling.scss';
import { image } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Feeling = () => {
    const ds = [
        {
            title: 'Fresh and Delicious Salads!',
            des: 'The salads here are the freshest I’ve ever had! The ingredients are crisp, flavorful, and perfectly balanced. The variety of dressings adds a special touch to every bite. Highly recommended for salad lovers!',
            name: 'Alice Brown',
            img: image.ava1,
        },
        {
            title: 'Healthy and Tasty!',
            des: 'I love how this place offers both healthy and delicious options. The salads are vibrant and packed with flavor. You can taste the quality in every ingredient. It’s my go-to spot for a healthy meal!',
            name: 'Charles Davis',
            img: image.ava2,
        },
        {
            title: 'A Perfect Dining Experience!',
            des: 'This place has completely changed how I view salads. The combinations are unique, and the flavors are outstanding. The staff is friendly, and the atmosphere is cozy. A must-visit for anyone who loves fresh food!',
            name: 'Emily Fisher',
            img: image.ava3,
        },
    ];
    

    const [currentIndex, setCurrentIndex] = useState(0);
    const [sliding, setSliding] = useState(false);

    useEffect(() => {
        const interval = setInterval(handleSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleSlide = () => {
        setSliding(true);
        setTimeout(() => {
            setCurrentIndex((prev) => prev === 2 ? 0 : prev + 1);
            setSliding(false);
        }, 500);
    };

    const getVisibleSlides = () => {
        const firstSlide = ds[currentIndex];
        const secondSlideIndex = currentIndex === 2 ? 0 : currentIndex + 1;
        const secondSlide = ds[secondSlideIndex];
        const thirdSlideIndex = secondSlideIndex === 2 ? 0 : secondSlideIndex + 1;
        const thirdSlide = ds[thirdSlideIndex];
        return [firstSlide, secondSlide, thirdSlide];
    };

   return (
       <section className="feeling py">
           <div className="feeling-content">
               <div className="container_feeling py-1">
                   <div className="row_feeling">
                       {getVisibleSlides().map((d, idx) => (
                           <div key={idx} 
                               className={`slide-item ${sliding ? 'sliding' : ''} 
                               ${idx === 0 ? 'current' : idx === 1 ? 'next' : 'incoming'}`}
                           >
                                <q className="title_feeling">{d.title}</q>
                                <p className="des_feeling">{d.des}</p>
                                <h3 className="name_feeling">{d.name}</h3>
                                <ul>
                                    {[...Array(5)].map((_, i) => (
                                        <li key={i}>
                                            <FontAwesomeIcon className="star_feeling" icon={faStar} />
                                        </li>
                                    ))}
                                </ul>
                                <img src={d.img} alt={d.name} className="img_feeling" />
                            </div>
                        ))}
                    </div>
                    <div className="dot_feeling">
                        {ds.map((_, idx) => (
                            <button
                                key={idx}
                                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => {
                                    setSliding(true);
                                    setTimeout(() => {
                                        setCurrentIndex(idx);
                                        setSliding(false);
                                    }, 500);
                                }}
                            >
                                <span></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feeling;