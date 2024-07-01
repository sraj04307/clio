import React, {useState, useEffect} from 'react'
import './Brand2.css'

const Brand2 = ({ ib ,id}) => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 300) { 
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  


    return (
        <div className='col-lg-3 p-2 '>
            <div className={isScrolled?`text-center p-4 border bg-light brand2-card active ${id}`:'text-center p-4 border bg-light brand2-card' }>
                <img src={ib} alt="" />
            </div>

        </div>
    )
}

export default Brand2
