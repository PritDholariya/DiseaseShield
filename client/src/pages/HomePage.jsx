import Header from "../components/Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay, EffectCreative, Parallax } from 'swiper/modules';


export default function () {

  const developer1Info = {
    name: 'Prit Dholariya',
    role: 'Co-Founder & Developer',
    description: 'Experienced developer with a focus on backend systems and infrastructure. Enjoys building scalable and efficient solutions.',
    phoneNumber: '+91 7016497046',
    email: 'pritdholariya@gmail.com',
  };

  const developer2Info = {
    name: 'Om Chikhaliya',
    role: 'Co-Founder & Developer',
    description: 'Passionate about creating meaningful applications that solve real-world problems. Expertise in frontend development and UI/UX design.',
    phoneNumber: '+91 9875053749',
    email: 'omchikhaliya@gmail.com',
  };

  // Define background gradient style with lighter colors
  const cardStyle = {
    background: 'linear-gradient(135deg, #fff0e6, #ffe6cc)', // Lighter skin color gradient
  };

  // Actual disease data
  const diseaseData = [
    {
      name: 'COVID-19 Pandemic',
      description: 'The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, has significantly impacted the world. As of now, there have been over 400 million confirmed cases globally, with more than 5.8 million deaths reported. Vaccination efforts continue to play a crucial role in controlling the spread of the virus.',
    },
    {
      name: 'Malaria',
      description: 'Malaria remains a major health concern, particularly in tropical and subtropical regions. Approximately 229 million cases of malaria occur annually, leading to around 409,000 deaths. Prevention measures such as insecticide-treated bed nets and antimalarial medications are essential.',
    },
    
    {
      name: "HIV/AIDS",
      description: "Human Immunodeficiency Virus (HIV) is a virus that attacks the body's immune system, leading to acquired immunodeficiency syndrome (AIDS) if left untreated. HIV/AIDS weakens the immune system, making individuals vulnerable to opportunistic infections and certain cancers. It is primarily spread through unprotected sexual intercourse, contaminated blood transfusions, and needle sharing among intravenous drug users.",
    }
    
  ];

  return (
    <Header>
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to DiseaseShield</h2>
        <p className="text-lg text-gray-600 mb-6">Get insights about various diseases and their predictions based on data science and machine learning.</p>
{/* 
        <Swiper
          effect={'creative'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          speed={1000}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-125%', 0, -800],
              rotate: [0, 0, -90],
            },
            next: {
              shadow: true,
              translate: ['125%', 0, -800],
              rotate: [0, 0, 90],
            },
          }}
          modules={[Parallax, EffectCreative, Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          parallax={true}
          className="h-5/6 w-11/12"
        >
          <SwiperSlide>
            <div
              slot="container-start"
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                'background-image':
                  'url(https://images.unsplash.com/photo-1579780864813-863e246d3bc5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
              }}
              data-swiper-parallax="-23%"
            ></div>
            <article className="text-pretty">
              <div className="text-lg font-light text-amber-50" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="text-lg text-amber-50" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text-xs leading-normal text-amber-50" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                  dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                  laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                  Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                  ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                  tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1579780864813-863e246d3bc5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1631651368361-c8e3f4785fc3?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1579781354147-e863d998e97f?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1369661892/photo/businessman-holding-virtual-blue-plus-sign-for-positive-thinking-mindset-or-healthcare.webp?b=1&s=170667a&w=0&k=20&c=UYSYQEqOA1cvZY-geOLxd4TQPGiO3Dns8o7vyuIZyeQ=" className="h-full w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1593007791459-4b05e1158229?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvdmlkfGVufDB8fDB8fHww" className="h-full w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1582719366950-f23838e207e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-full w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1579781354171-45f67f0d8f18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2Vhc2VzfGVufDB8fDB8fHww" className="h-full w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1218832569/photo/concept-india-attacked-by-an-coronavirus-army-troop.webp?b=1&s=170667a&w=0&k=20&c=CQd7dUmcWn-9VBlfFMDBqwUGRe3B2b-a4Rr8OcbwHH4=" className="h-full w-full" />
          </SwiperSlide>
        </Swiper> */}
        <div className="grid grid-cols-2 gap-8 m-2">
              <div className="p-6 rounded-lg shadow-md " style={cardStyle}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{developer1Info.name}</h3>
                <p className="text-gray-600">{developer1Info.role}</p>
                <p className="text-gray-700 mt-4">{developer1Info.description}</p>
                <p className="text-gray-700 mt-4">Phone Number: {developer1Info.phoneNumber}</p>
                <p className="text-gray-700 mt-4">Email: {developer1Info.email}</p>
              </div>
              <div className="p-6 rounded-lg shadow-md" style={cardStyle}>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{developer2Info.name}</h3>
                <p className="text-gray-600">{developer2Info.role}</p>
                <p className="text-gray-700 mt-4">{developer2Info.description}</p>
                <p className="text-gray-700 mt-4">Phone Number: {developer2Info.phoneNumber}</p>
                <p className="text-gray-700 mt-4">Email: {developer2Info.email}</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Disease Data</h3>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                {diseaseData.map((disease, index) => (
                  <li key={index}>
                    <h4 className="font-semibold">{disease.name}</h4>
                    <p>{disease.description}</p>
                  </li>
                ))}
              </ul>
            </div>
      </div>
    </Header>
  )
}