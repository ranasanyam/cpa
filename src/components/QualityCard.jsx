import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';



const QualityCard = ({ img, title, description, redirectTo}) => {

  return (
    <div>
        <div data-aos="zoom-in" className='group border p-8 h-[420px] xxs:h-[350px] rounded-xl bg-white hover:shadow-xl duration-500 z-10 w-full cursor-pointer'>
        <div className='flex justify-between mb-6'>
            <img src={img} alt={title} className='h-[40px] w-[40px]' />
            <Link to={redirectTo}>
                <div className='border p-1 rounded-full border-[#F26522] transition transform group-hover:rotate-0 rotate-[-45deg] duration-500 group-hover:bg-[#F26522] group-hover:text-light-100 text-[#F26522]'>
                    <ArrowForwardIcon sx={{ fontSize: 30 }} />
                </div>
            </Link>
        </div>
        <div className='my-2 font-bold text-[20px]'>{title}</div>
        <div>
            {description}
        </div>  
    </div>
    </div>
  )
}

export default QualityCard;


