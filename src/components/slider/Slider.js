import React, { useState, useEffect } from 'react';
import './slider.css';
import dataArr from '../../data/data';
import uuid from 'react-uuid';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % dataArr.length);
        }, 3000);
        
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handlePaginationClick = (index) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.changedTouches[0].clientX);
    };
  
    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
    };

    useEffect(() => {  
        if(touchStart !==0 && touchEnd !==0) {
            if(touchStart > touchEnd) {
                setCurrentIndex((currentIndex) => (currentIndex === dataArr.length - 1) ? 0 : currentIndex + 1);
            } else if(touchStart < touchEnd) {
                setCurrentIndex((currentIndex) => (currentIndex === 0) ? dataArr.length - 1 : currentIndex - 1);
            }
        }  
    }, [touchEnd, touchStart, currentIndex]); 
   
    return (
        <div className="slider wrapper" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="slide flex-start">
                <div className='slide__info'>
                    <h1>{dataArr[currentIndex].title}</h1>
                    <div className='slide__text'>
                        <p className='slide__text_bottom'>{dataArr[currentIndex].text1}</p>
                        <p className='slide__text_bottom'>{dataArr[currentIndex].text2}</p>
                        <p>{dataArr[currentIndex].text3}</p>
                    </div>
                    <button className='flex-center font-roboto slide__btn'>how it work</button>
                </div>
                <div className='slide__img'>
                    <img src={`/img/${dataArr[currentIndex].img}`} alt='' />
                </div>
            </div>
            <div className="pagination">
                {dataArr.length !== 0 ?
                    dataArr.map((item, index) => {
                        return (
                            <div key={uuid()} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => handlePaginationClick(index)}></div>
                        )
                    })
                    : null
                }
            </div>
        </div>
    );
};

export default Slider;