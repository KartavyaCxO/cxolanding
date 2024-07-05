interface Benefit {
    icon: string;
    title: string;
    description: string;
  }
  
  const benefits: Benefit[] = [
    {
      icon: '/icons/expert-trio.svg', // Replace with your icon path
      title: 'Expert Trio at your service',
      description: 'Dedicated trio of (CXO + PSM + Experts) work with you from project kickoff to completion.',
    },
    {
      icon: '/icons/scale-grow.svg', // Replace with your icon path
      title: 'Scale & Grow',
      description: 'Scale your services up or down at any time to meet your business needs with ease.',
    },
    {
      icon: '/icons/ownership-delivery.svg', // Replace with your icon path
      title: 'Ownership of Delivery',
      description: 'We take the ownership of the project, so you achieve your goals without the worry.',
    },
    {
      icon: '/icons/standardized-delivery.svg', // Replace with your icon path
      title: 'Standardized Service Delivery',
      description: 'We ensure a standardized method of service delivery through templated deliverables.',
    },
    {
      icon: '/icons/project-success-manager.svg', // Replace with your icon path
      title: 'Project Success Manager',
      description: 'Dedicated Project Success Manager partners with you from project kickoff to completion.',
    },
    {
      icon: '/icons/premium-support.svg', // Replace with your icon path
      title: 'Premium Support',
      description: 'Work with us for 6 months or more and get 3 months of free post-project support.',
    },
    {
      icon: '/icons/on-demand-talent.svg', // Replace with your icon path
      title: 'On-Demand Talent',
      description: 'We leverage future-focused market analysis to curate in-demand skills for your workforce.',
    },
    {
      icon: '/icons/cxo-dashboard.svg', // Replace with your icon path
      title: 'CxO Dashboard',
      description: 'Your all-in-one project management tool for seamless collaboration and tracking.',
    },
  ];
  
  const Benefits: React.FC = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Top Class Benefits</h2>
        <p className="mt-4 text-lg text-gray-500 text-center">Benefits that you get irrespective of the plan you choose</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Benefits;