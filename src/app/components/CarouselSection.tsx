"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function CarouselSection() {

    type CarouselItem = {
        id: number;
        name: string;
        description: string;
        image: string;
        person: {
          name: string;
          title: string;
          logo: string;
          company: string;
        }
      };
      
      type CarouselItems = CarouselItem[];

    const data: CarouselItems = [
        {
            id: 1,
            name: 'Best consulting service in canada!',
            description: 'The team is always there, I think its a fleet of people who are committed to the mission of generosity global, who are always on demand in terms of whatever we need to support the work, to support the mission, fix anything that’s wrong! I truly appreciate the entire team, thank you all so much, you all did an amazing job. The team at CxO has been able to put us in front of the people who need to know us, in terms of the marketing power and also financially subsidized our cost, as we are a non profit.',
            image: '/images/customer/customer.png',
            person: {
                name: 'Rich Ackow',
                title: 'Founder',
                company: 'Generosity Global',
                logo: '/images/customer/logo/default.svg'
            }
        },
        {
            id: 2,
            name: 'Best consulting service in canada!',
            description: 'The team is always there, I think its a fleet of people who are committed to the mission of generosity global, who are always on demand in terms of whatever we need to support the work, to support the mission, fix anything that’s wrong! I truly appreciate the entire team, thank you all so much, you all did an amazing job. The team at CxO has been able to put us in front of the people who need to know us, in terms of the marketing power and also financially subsidized our cost, as we are a non profit.',
            image: '/images/customer/customer.png',
            person: {
                name: 'Rich Ackow',
                title: 'Founder',
                company: 'Generosity Global',
                logo: '/images/customer/logo/default.svg'
            }
        },
        {
            id: 3,
            name: 'Best consulting service in canada!',
            description: 'The team is always there, I think its a fleet of people who are committed to the mission of generosity global, who are always on demand in terms of whatever we need to support the work, to support the mission, fix anything that’s wrong! I truly appreciate the entire team, thank you all so much, you all did an amazing job. The team at CxO has been able to put us in front of the people who need to know us, in terms of the marketing power and also financially subsidized our cost, as we are a non profit.',
            image: '/images/customer/customer.png',
            person: {
                name: 'Rich Ackow',
                title: 'Founder',
                company: 'Generosity Global',
                logo: '/images/customer/logo/default.svg'
            }
        },

    ]

  const [shiftHeight, setShiftHeight] = useState<number>(-0);
  const maxLength = (data.length-1)*(-500)
  console.log(maxLength)
  const carouselRef = useRef<HTMLDivElement>(null);



  const handleDownArrow = () => {
    if (carouselRef.current) {
      let newShiftHeight = shiftHeight;
      if (shiftHeight > maxLength) {
        newShiftHeight -= 500;
      } else {
        newShiftHeight = 0;
      }
      carouselRef.current.style.transform = `translateY(${newShiftHeight}px)`;
      setShiftHeight(newShiftHeight);
    }
  };

  const handleUpArrow = () => {
    if (carouselRef.current) {
      let newShiftHeight = shiftHeight;
      if (shiftHeight < 0) {
        newShiftHeight += 500;
      } else {
        newShiftHeight = maxLength;
      }
      carouselRef.current.style.transform = `translateY(${newShiftHeight}px)`;
      setShiftHeight(newShiftHeight);
    }
  };

  return (
    <div className="py-16 bg-white text-center px-80 flex items-center justify-center flex-col relative">
      <Image src="/images/customer/cross.svg" width={100} height={100} alt="cross" className="absolute top-0 right-0 transform translate-y-[520px] -translate-x-[calc(290px)]" />
      
      <h2 className="text-3xl font-bold mb-4">Our Customers Love Us</h2>
      <p className="text-gray-600 mb-12">
        See how businesses like yours are thriving with Your CxO <br />
        Online - hear from our happy clients!
      </p>
      <div className="relative w-[1200px] h-[500px] flex overflow-hidden">
        <div id="controls" className="w-[100px] h-[100%] flex flex-col items-center justify-center gap-5">
          <button className="" onMouseDown={handleUpArrow}>
            <Image src="/images/uparrow.svg" width={50} height={50} alt="up arrow" />
          </button>
          <button className="" onMouseDown={handleDownArrow}>
            <Image src="/images/downarrow.svg" width={50} height={50} alt="down arrow" />
          </button>
        </div>
        <div
          id="carousel_sections"
          ref={carouselRef}
          className="ease-in-out duration-[1s] transition-all"
          style={{ transform: `translateY(${shiftHeight}px)` }}
        >
          {data.map((car1, i) => (
            <div id={`child${i}`} key={`carouselItem${i}`} className="flex">
              <div className="bg-white w-[550px] h-[500px] p-5">
                <p className="text-left text-[#bbbcbc] pb-4">
                  Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem ...........
                </p>
                <div className="border-2 p-6 rounded-lg border-[#FFB64C] flex gap-4 items-start flex-col">
                  <Image src="/images/star.svg" width={150} height={150} alt="star" />
                  <h1 className="font-bold text-xl">{car1.name}</h1>
                  <p className="text-left text-sm">
                    {
                        car1.description
                    }
                  </p>
                </div>
                <p className="text-left text-[#bbbcbc] pt-4">
                  Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem ...........
                </p>
              </div>
              <Image src="/images/customer/circle.svg" width={100} height={100} alt="cross" className="sticky transform -translate-y-40 rotate-[-30deg] translate-x-10 z-2 " />
              <div className="bg-[#FEFDFB] min-w-[550px] min-h-[500px] border-[1px] border-[#F1F3F3] rounded-lg">
                <div id="person" className="relative w-[550px] h-[400px] rounded-xl overflow-hidden">
                  <Image src="/images/customer/customer.png" fill alt="customer" className="object-cover" />
                </div>
                <div className="min-w-[550px] min-h-[100px] p-4 flex relative justify-between">
                  <div className="text-left flex flex-col justify-start">
                    <p className="text-[#065D75] text-2xl">{car1.person.name}</p>
                    <span className="text-gray-800/60">
                      {car1.person.title}, <span className="underline">{car1.person.company}</span>
                    </span>
                  </div>
                  <Image src="/images/customer/logo/default.svg" alt="logo" width={130} height={130} className="self-center" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}