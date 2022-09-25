import Card from './components/card';
import './App.css';
import Users from "./sampleJson/users.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function App() {
  return (
    <div className="bg-grey-200">
    <h1 className="text-2xl text-center mt-7 p-6">Testimonials</h1>
    <div className='ml-5 mr-5'>
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         {Users.map((user) => (
           <SwiperSlide key={user.id}>
           <Card Name={user.name}
               Title={user.title}
               Description={user.description}
               Image={user.pic} 
               company={user.company}
               />
           </SwiperSlide>
         ))}
    </Swiper>
    </div>
    </div>
  );
}

export default App;
