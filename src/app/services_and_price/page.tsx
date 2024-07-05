"use client";

import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Business from './components/Business';
import Image from 'next/image';


const ServicesAndPricing = () => {
    return (
        <main className="flex min-h-screen min-w-screen flex-col ">
         <Navbar/>
         <Tabs/>
         <Footer/>
        </main>
      );
}


const Tabs = () => {

    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [
      { id: 0, label: 'Business Strategy & Operations', content:<Business/> },
      { id: 1, label: 'Marketing', content: 'Content for Tab 2' },
      { id: 2, label: 'Technology & Innovation', content: 'Content for Tab 3' },
      { id: 3, label: 'Finance', content: 'Content for Tab 4' },
      { id: 4, label: 'People Management', content: 'Content for Tab 5' },
    ];
  
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="flex bg-white gap-8 py-6 px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={` text-lg  text-center ${activeTab === tab.id && ' text-[#065D75]' }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="flex-grow p-8 bg-white pt-20 overflow-y-auto">
          {tabs[activeTab].content}
        </div>
        <Benefits/>
        <SubscriptionsComponent/>
      </div>
    );
}

interface Benefit {
    icon: string;
    title: string;
    description: string;
  }
  
  const benefits: Benefit[] = [
    {
      icon: '/images/benefits/one.svg', // Replace with your icon path
      title: 'Expert Trio at your service',
      description: 'Dedicated trio of (CXO + PSM + Experts) work with you from project kickoff to completion.',
    },
    {
      icon: '/images/benefits/two.svg', // Replace with your icon path
      title: 'Scale & Grow',
      description: 'Scale your services up or down at any time to meet your business needs with ease.',
    },
    {
      icon: '/images/benefits/three.svg', // Replace with your icon path
      title: 'Ownership of Delivery',
      description: 'We take the ownership of the project, so you achieve your goals without the worry.',
    },
    {
      icon: '/images/benefits/four.svg', // Replace with your icon path
      title: 'Standardized Service Delivery',
      description: 'We ensure a standardized method of service delivery through templated deliverables.',
    },
    {
      icon: '/images/benefits/five.svg', // Replace with your icon path
      title: 'Project Success Manager',
      description: 'Dedicated Project Success Manager partners with you from project kickoff to completion.',
    },
    {
      icon: '/images/benefits/six.svg', // Replace with your icon path
      title: 'Premium Support',
      description: 'Work with us for 6 months or more and get 3 months of free post-project support.',
    },
    {
      icon: '/images/benefits/seven.svg', // Replace with your icon path
      title: 'On-Demand Talent',
      description: 'We leverage future-focused market analysis to curate in-demand skills for your workforce.',
    },
    {
      icon: '/images/benefits/eight.svg', // Replace with your icon path
      title: 'CxO Dashboard',
      description: 'Your all-in-one project management tool for seamless collaboration and tracking.',
    },
  ];
  
  const Benefits: React.FC = () => {
    return (
      <div className="max-w-7xl mt-14 mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Top Class Benefits</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">Benefits that you get irrespective of the plan you choose</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-start">
              <Image src={benefit.icon} width={20} height={20} alt={benefit.title} className="w-16 h-16  mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const subscriptions = [
    {
      title: 'Ideation',
      subtitle: 'From idea to concept',
      icon: '/images/subscription/one.svg',
      features: [
        'Concept Document',
        'Market Research',
        'Customer Persona Definition',
        'Business Roadmap',
      ],
      price: '$1400 / month',
      term: '2-Month Minimum Term',
    },
    {
      title: 'Ideation',
      subtitle: 'From idea to concept',
      icon: '/images/subscription/two.svg',
      features: [
        'Concept Document',
        'Market Research',
        'Customer Persona Definition',
        'Business Roadmap',
      ],
      price: '$1400 / month',
      term: '2-Month Minimum Term',
    },
    {
      title: 'Ideation',
      subtitle: 'From idea to concept',
      icon: '/images/subscription/three.svg',
      features: [
        'Concept Document',
        'Market Research',
        'Customer Persona Definition',
        'Business Roadmap',
      ],
      price: '$1400 / month',
      term: '2-Month Minimum Term',
    },
  ];
  
  const SubscriptionsComponent: React.FC = () => {
    return (
      <div className="py-16 bg-white text-center px-80">
        <h2 className="text-3xl font-bold mb-4">Subscriptions</h2>
        <p className="text-gray-600 mb-12">
          Affordable Services that address every aspect of your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subscriptions.map((subscription, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-left flex flex-col justify-between">
              <div>
              <h3 className="text-xl font-semibold text-yellow-500">{subscription.title}</h3>
              <p className="text-gray-600 mb-4">{subscription.subtitle}</p>
                <div className="mb-4">
                  {/* Placeholder for the image */}
                  <Image
                    src={subscription.icon}
                    width={200}
                    height={200}
                    alt="Subscription"
                    className="w-full h-60 object-contain"
                  />
                </div>
               
                <ul className="mb-4">
                  {subscription.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                     <svg width="30" height="31" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="25" height="25" rx="12.5" fill="#E5F4FB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3162 9.20701C18.5701 9.47369 18.5597 9.89568 18.293 10.1495L10.5893 17.4829C10.4577 17.6081 10.2808 17.6742 10.0993 17.666C9.91788 17.6577 9.74766 17.5758 9.62803 17.4391L6.66506 14.0545C6.42254 13.7775 6.45052 13.3563 6.72755 13.1138C7.00459 12.8713 7.42577 12.8992 7.66829 13.1763L10.1734 16.0379L17.3737 9.1838C17.6404 8.92994 18.0624 8.94033 18.3162 9.20701Z" fill="#065D75"/>
</svg>

                      <span className='pl-4'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="">
                  <p className="text-lg font-bold mb-2">{subscription.price}</p>
                  <p className="text-gray-600 mb-4">{subscription.term}</p>
  
                </div>
                <button className="bg-[#065D75] text-white py-2 px-8 rounded-full hover:bg-[#065D65] transition">
                  Buy
                </button>
              </div>
  
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ServicesAndPricing

