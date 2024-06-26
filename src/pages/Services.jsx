import React, { useState } from 'react';
import './Services.css';



const buttons = [
  "Accounting Services",
  "Taxation",
  "IRS Compliance",
  "Incorporation Services",
  "Financial Advisory",
  "Individual Services"
];

const content = {
  'Accounting Services': [
    <>
      <div id="accounting-services" className='font-bold text-2xl mb-6'>Accounting Services</div>
      <div>
      <span className='font-bold text-md'>
        Understanding Accounting vs. Bookkeeping: 
        </span>
        <span className='ml-2'>
          Many people confuse accounting with bookkeeping, often using the terms interchangeably, but they are not the same. Bookkeeping involves the basic data entry of your transactions. Accounting, however, goes beyond this to include studying and analysing data, identifying weakness in processes and procedures, and providing expert advice to clients to address those flaws.
        </span>
      </div>
      <div className='mt-4'>
      <span className='font-bold text-md'>Tailored Accounting Solutions:</span> 
      <span className='ml-2'>Every business entity has a unique structure, and our goal is to 
      understand your specific setup to create an accounting solution 
      tailored to your needs. We collaborate with your accounting and 
      finance staff to understand your processes, offering advice to enhance 
      those processes. Additionally, we provide regular accounting and 
      financial information, empowering you to make informed business 
      decisions. We can also provide outsourced finance and accounting 
      solutions for small businesses, start-ups to minimize the operating 
      costs.</span>
      </div>

      <div className='mt-4'>
        <span className='font-bold text-md'>Our Accounting Services:</span> 
        <span className='ml-2'>Each month or quarter will do the following things for you:</span>
      </div>
      <div className='mt-4 pl-8'>
        <ul className='list-disc'>
          <li>General ledger Entries</li>
          <li>Reconcile your bank account and other key balance sheet accounts</li>
          <li>Generate an Income Statement </li>
          <li>Generate a Balance Sheet</li>
  	      <li>Cashflow Statement</li>
        </ul>
      </div>
    </>
  ],
  'Taxation': [
    <>
      <div id="taxation" className='font-bold text-2xl mb-6'>Taxation</div>
      <div>
        <div className='font-bold text-md'>
          A.  Tax Planning
        </div>
      </div>
      <div className='mt-2 text-base'>
        Contrary to popular belief, effective tax planning begins at the start of the fiscal year. For our high-net-worth (HNW) clients, we offer tailored tax planning services designed to help reduce tax liability. We recognize that each client's financial and tax situation is unique, so we do not provide a "one size fits all" solution. Instead, we develop personalized tax-saving strategies based on your specific circumstances, ensuring you can take full advantage of applicable tax laws.
      </div>
      <div className='mt-4'>
      <div>
        <div className='font-bold text-md'>
          B.  Tax Preparation
        </div>
      </div>
      <div className='mt-2 text-base'>
      Navigating the ever-changing IRS tax code can be daunting due to its increasing complexity each year. Our experienced team is here to simplify the tax preparation process for you. Whether you need assistance with personal or business taxes, we are committed to answering all your questions comprehensively. We cater to individuals, partnerships, LLCs, S-corps, trusts, estates, and non-profit organizations.
      </div>
      <div className='mt-2'>
      Our highly trained staff uses advanced tax software to prepare your federal and state tax returns accurately, ensuring you receive the maximum refund you qualify for. We offer e-filing services for both federal and state tax returns across all 50 states, and this service is provided to our clients at no additional cost.
      </div>
      </div>
    </>
  ],
  'IRS Compliance': [
    <>
      <div id='irs-compliance' className='font-bold text-2xl mb-6'>IRS Compliance</div>
      <div>
        <div className='font-bold text-md'>
          a.	IRS Audit Representation
        </div>
      </div>
      <div className='mt-2'>
      Our experts are equipped to represent your case and negotiate with the IRS on your behalf. Audits can consume significant time and energy, pulling you away from your business and family responsibilities as you gather extensive records and grasp intricate tax laws. We can represent you, ensuring a thorough and knowledgeable defence of your tax position.
      </div>
      <div className='mt-2'>
      The IRS is thorough in its audits, scrutinizing every detail of your tax return to ensure accuracy. Non-compliance with audit requests can result in a recalculated tax bill, often significantly higher than expected. Many taxpayers attempt to handle audits independently, only to find that while they saved on representative fees, they ended up with a substantial tax deficiency bill.
      </div>
      <div className='mt-2'>
      IRS Auditors are adept at extracting more information than you are legally obligated to provide, capitalizing on the fear and lack of knowledge many taxpayers have. Don't let this happen to you. If you've received an audit notice from the IRS, contact us for expert representation and peace of mind.
      </div>
      <div className='mt-4'>
        <div>
          <div className='font-bold text-md'>
          b.	Non-Filed Tax Returns
          </div>
        </div>
        <div className='mt-2'>
          The IRS’s sophisticated computer systems are increasingly effective at identifying unfiled tax returns. Ignoring this issue can have serious consequences; failing to file is a criminal offense that can result in prosecution and potential jail time—up to one year for each year not filed. Don’t risk your freedom by neglecting to file your tax returns.
        </div>
        <div className='mt-2'>
          Let us help you achieve peace of mind by ensuring you comply with the law. Voluntarily filing your delinquent returns can help you avoid severe repercussions, aside from paying any owed interest and penalties. If you wait for the IRS to file on your behalf, their filings will be in the government’s best interest, often excluding many deductions you are entitled to.
        </div>
        <div className='mt-2'>
          Before we can assist you in resolving this issue, all your returns must be filed and current. While you may owe taxes, interest, and penalties once everything is submitted, we will work with you to determine the total amount owed and devise a plan to resolve your tax obligations.
        </div>
      <div>
      <div className='mt-4'>
        <div className='font-bold text-md'>
        c.	IRS Payment Plan
        </div>
      </div>
      <div className='mt-2'>
      If you don’t qualify for the IRS Offer in Compromise program, a Payment Plan may be your best option to resolve your tax issues. Setting up a payment plan with the IRS allows you additional time to pay off your tax debts. However, be aware that penalties and interest will continue to accrue on your outstanding balance as you make payments. By law, you are required to pay interest on your tax debt.
      </div>
      <div className='mt-2'>
      The good news is that we may be able to help you get your tax penalties removed, reducing your overall burden. Contact us to explore your options and find the best solution for your situation.
      </div>
      </div>
      <div className='mt-4'>
        <div className='font-bold text-md'>
        d.	IRS Liens
        </div>
      </div>
        <div className='mt-2'>
        Federal Tax Liens can significantly disrupt your life. When taxes go unpaid, the IRS places a lien against all your assets, especially real estate. This lien grants the IRS the legal right to collect taxes from the sale of your assets, including nearly everything you own. Liens can be placed against you, your spouse, or your business. A lien on your company could lead to the seizure of your accounts receivable. Essentially, everything you own is at risk of becoming government property. Additionally, IRS liens appear on your credit report, often preventing you from opening a checking account or borrowing against assets like your home. Banks are reluctant to deal with the extra complications when the IRS steps in to collect.
        </div>
        <div className='mt-4'>
        <div className='font-bold text-md'>
        e.	Back Taxes Owed
        </div>
      </div>
        <div className='mt-2'>
        You filed your returns but couldn't pay the owed amount, thinking you could catch up next year. However, years pass, and you find yourself deeply in arrears, with an IRS notice stating you owe three or four times the original amount due to accumulating penalties and interest. You now have a choice: write a large check to pay the full amount, including interest and penalties, or continue ignoring the debt while it grows.
        </div>
        <div className='mt-4'>
        <div className='font-bold text-md'>
        f.	Innocent Spouse Relief
        </div>
      </div>
        <div className='mt-2'>
        Innocent Spouse Relief is designed to help those who are victims of fraud committed by their spouse or ex-spouse. If you qualify, you may not owe any taxes.
        </div>
        <div className='mt-4'>
        <div className='font-bold text-md'>
        g.	Get Your IRS File
        </div>
      </div>
        <div className='mt-2'>
        Did you know you can obtain a copy of your IRS file? Many people are surprised by how much information the IRS has on them. Obtaining this file is crucial for analysing the options to resolve your tax problems. It is best to have a professional request these copies, as they understand how to do so without raising red flags and can accurately interpret the information in your file.
        </div>
        <div className='mt-4'>
        <div className='font-bold text-md'>
        h.	Bankruptcy
        </div>
      </div>
        <div className='mt-2'>
        Filing for bankruptcy can eliminate your back taxes, interest, and penalties. If you qualify, bankruptcy might be the best solution for your overwhelming tax issues. However, not everyone qualifies to discharge their tax debt through bankruptcy. 
        </div>
        <div className='mt-2'>
        Specific rules must be met. If you file for bankruptcy without meeting these criteria, the IRS will continue to pursue you once the bankruptcy is over. Proper pre-bankruptcy planning is essential to determine if bankruptcy is a viable solution for you.
        </div>
      </div>
    </>
  ],
  'Incorporation Services': [
    <>
      <div id="incorporation-services" className='font-bold text-2xl mb-6'>Incorporating Services</div>

      <div className='mt-2 text-base'>
        Incorporating a business not only mitigates personal liability but also offers numerous tax advantages that individuals do not have access to. Each type of entity comes with its own set of benefits and drawbacks. While operational flexibility and tax obligations typically drive decision-making, several other factors must be considered when selecting the appropriate entity type. While some entities afford greater operational flexibility, they may also entail certain tax drawbacks. Achieving a balance and understanding the implications of various factors is crucial in making informed decisions.
      </div>
      <div className='mt-4'>
        <div>
          <div className='font-bold text-md'>
          We provide expert advice in help you create the following type of entities:
          </div>
        </div>
      </div>
      <div className='mt-4 pl-8'>
        <ul className='list-disc'>
          <li>C Corp</li>
          <li>S Corp</li>
          <li>LLC</li>
          <li>Partnership</li>
  	      <li>Not-for-profit</li>
        </ul>
      </div>
    </>
  ],
  'Financial Advisory': [
    <>
      <div id="financial-advisory" className='font-bold text-2xl mb-6'>Financial Advisory</div>

      <div className='mt-2 text-base'>
      We are all well aware that business conditions are not only dynamic but also growing complex each day. They not only affect your business but also your personal net worth. Our expertise in the following areas will help you navigate the ever-changing business dynamics:
      </div>

      <div className='mt-4 pl-8'>
        <ul className='list-disc'>
          <li>Strategic Business Planning</li>
          <li>Business Valuation</li>
          <li>Bank Financing</li>
          <li>Internal Controls</li>
  	      <li>Budgeting and Forecasting</li>
        </ul>
      </div>
    </>
  ],
  'Individual Services': [
    <>
      <div id="individual-services" className='font-bold text-2xl mb-6'>Individual Services</div>

      <div className='mt-2 text-base'>
      As an employee or practicing professional, you are hard-pressed for time to personally manage your financials. Our experts offer a range of services
      </div>

      <div className='mt-4 pl-8'>
        <ul className='list-decimal'>
          <li className='mt-4'><span className='font-bold'>Personal Financial Planning: </span> You receive personalized guidance and a detailed financial plan tailored to your specific needs. This comprehensive approach helps mitigate risk, enhance performance, and secure the growth and longevity of your wealth.</li>
          <li className='mt-4'><span className='font-bold'>Estate Planning:</span> Navigating the complexities and bureaucratic hurdles of estate planning can feel overwhelming, but you don't have to tackle it by yourself. Our dedicated team is here to guide you through each stage of the process, providing expert assistance and support along the way.</li>
          <li className='mt-4'><span className='font-bold'>Elder Care:</span> With our elder care services, you benefit from the support of a compassionate, trustworthy, and knowledgeable professional. You'll have someone on your team who is dedicated to safeguarding the best interests of your loved one.</li>
        </ul>
      </div>
    </>
  ],
}


const Services = () => {


  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='relative top-[96px] bg-[#E5EEF6] min-h-screen'>
      <div className="w-4/5 mx-auto pt-10 flex flex-col md:flex-row">
        <div className="flex overflow-auto md:flex-col md:w-80">
          <div className='py-5 bg-primary-100 text-center font-bold text-3xl text-light-100 border-b hidden md:block'>Services</div>
            {buttons.map((btn,key) => (
              <div
                key={key}
                className={`bg-light-100 tab hover:bg-[#e9ecef] flex items-center justify-center p-5 cursor-pointer border-b border-[#ccc]  ${activeTab === key ? 'bg-[#e9ecef] border-t-4 border-t-[#00387A] md:border-t-0 md:border-l-4 md:border-l-[#00387A]' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                <div className="text-center text-base font-bold">{btn}</div>
              </div>
            ))}
          </div>
          <div className="overflow-auto flex-grow bg-white mt-20 md:mt-0 mb-20 md:ml-20 p-8 md:w-2/3">
            {content[buttons[activeTab]]}
          </div>
      </div>
    </div>
  )
}

export default Services;