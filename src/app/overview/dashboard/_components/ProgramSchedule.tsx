import React from 'react';

const ProgramSchedule = () => {
  return (
    <div className="bg-[#e7f2f5] p-8 rounded-2xl">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-[#141b34]">Configure Schedule & Pricing</h1>
        <p className="text-[rgba(20,27,52,0.6)]">
          Set your program timeline, session frequency, and pricing structure to maximize engagement and revenue.
        </p>
      </header>

      <div className="mb-8 p-6 bg-[rgba(255,255,255,0.24)] rounded-2xl">
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#141b34] mb-3">Start Date</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="12/01/2025"
                className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl text-[rgba(20,27,52,0.7)]"
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#141b34] mb-3">End Date</label>
            <div className="relative">
              <input
                type="text"
                defaultValue="12/04/2025"
                className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl text-[rgba(20,27,52,0.7)]"
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-[rgba(255,255,255,0.3)] rounded-2xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <PricingCard
            title="Monthly Subscription"
            price="$99"
            period="/ per month"
            features={['Recurring Revenue', 'Lower Barrier to entry']}
          />
          <PricingCard
            title="One - Time Payment"
            price="$297"
            features={['Full upfront payment', 'Higher commitment']}
            recommended
          />
          <PricingCard
            title="Free Program"
            price="$0"
            period="+ Donations"
            features={['build audience first', 'Optional donation']}
          />
        </div>
        <div className="bg-[rgba(255,255,255,0.24)] p-5 rounded-2xl flex justify-between items-center">
            <div>
                <p className="font-semibold text-[#141b34]">Revenue Projection</p>
                <p className="text-xs text-[rgba(20,27,52,0.8)]">Based on 25 athletes at $297 - one time</p>
            </div>
            <div className="text-right">
                <p className="font-semibold text-[#141b34]">$7,425</p>
                <p className="text-xs text-[rgba(20,27,52,0.8)]">Total Potential</p>
            </div>
        </div>
      </div>

      <div className="p-6 bg-[rgba(255,255,255,0.3)] rounded-2xl mb-8">
        <div className="flex gap-6">
            <div className='w-1/2'>
                <h3 className="text-base font-medium text-[#141b34] mb-3">Additional Option</h3>
                <div className="bg-[rgba(255,255,255,0.6)] p-6 rounded-3xl">
                    <ToggleOption
                    title="Free Trial Period"
                    description="7-day trial before payment"
                    />
                    <hr className="my-4 border-gray-300" />
                    <ToggleOption
                    title="Enable Waitlist"
                    description="When max capacity is reached"
                    />
                </div>
            </div>
            <div className="w-1/2 space-y-5">
                <CapacityInput />
                <div className="flex gap-4">
                    <div className='w-1/2'>
                        <label className="block text-base font-medium text-[#141b34] mb-3">Early Bid Discount</label>
                        <div className="relative">
                            <input type="text" defaultValue="20" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl" />
                            <DiscountIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <label className="block text-base font-medium text-[#141b34] mb-3">Date</label>
                        <div className="relative">
                            <input type="text" defaultValue="08/07/2026" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl pl-12" />
                            <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>


      <div className="flex justify-between">
        <button className="bg-[rgba(255,255,255,0.3)] px-6 py-4 rounded-full flex items-center gap-2">
          <ArrowLeftIcon className="w-6 h-6" />
          <span>Back</span>
        </button>
        <button className="border border-[rgba(21,86,216,0.3)] px-12 py-4 rounded-full text-white bg-blue-500">
          Next
        </button>
      </div>
    </div>
  );
};

const PricingCard = ({ title, price, period, features, recommended }) => (
    <div className={`p-6 rounded-2xl relative ${recommended ? 'border-2 border-[#5c8ff7] bg-gradient-to-b from-[rgba(92,143,247,0.12)] to-[rgba(92,143,247,0.07)]' : 'bg-white/30'}`}>
      {recommended && <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Recommended</div>}
      <h2 className="text-xl font-medium text-[#141b34] mb-4">{title}</h2>
      <div className="flex items-baseline mb-4">
        <p className="text-4xl font-semibold text-[#141b34]">{price}</p>
        {period && <p className="text-sm text-[rgba(20,27,52,0.8)] ml-2">{period}</p>}
      </div>
      <hr className="my-4" />
      <ul className="space-y-3">
        {features.map(feature => (
          <li key={feature} className="flex items-center gap-2 text-xs text-[rgba(20,27,52,0.8)]">
            <CheckIcon className="w-4 h-4 text-green-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  const ToggleOption = ({ title, description }) => (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium text-[#141b34]">{title}</p>
        <p className="text-xs text-[rgba(20,27,52,0.7)]">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
    </div>
  );

  const CapacityInput = () => (
    <div>
        <div className="flex justify-between items-center mb-3">
            <label className="block text-base font-medium text-[#141b34]">Maximum Capacity</label>
            <div className="flex items-center gap-1 text-xs text-[rgba(20,27,52,0.7)]">
                <StarIcon className="w-3.5 h-3.5"/>
                <span>Upgrade to premium for unlimited capacity!</span>
            </div>
        </div>
      <div className="relative">
        <input type="text" defaultValue="25" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl pl-12" />
        <UserGroupIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
    </div>
  );

// Helper components for icons (replace with your actual icon library e.g. heroicons)
const CalendarIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
    </svg>
  );
  
  const CheckIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  const ArrowLeftIcon = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
  )

  const StarIcon = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
    </svg>
  )
  
  const UserGroupIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm-9 5.192A2.25 2.25 0 015.25 18h13.5A2.25 2.25 0 0121 20.25v-1.5a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 18.75v1.5z" />
    </svg>
  )

  const DiscountIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )

export default ProgramSchedule;
