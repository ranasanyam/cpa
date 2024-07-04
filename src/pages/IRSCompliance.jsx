import React from 'react';
import { Link } from 'react-router-dom';


const IRSCompliance = () => {
  return (
    <div className='pt-40 pb-20'>
        <div className='w-11/12 md:w-4/5 mx-auto'>
        <div className='flex'>
        <Link to={"/"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Home / </Link><Link to={"/services"} className='text-xl font-semibold text-light-300 hover:text-primary-100'>Services / </Link><div className='text-xl font-semibold text-primary-100'>IRS Compliance</div>
        </div>
        <div id="irs-compliance"  className='font-bold text-2xl md:text-4xl text-[#4d4d4d] my-6 text-center'>IRS Compliance</div>
        <div className='font-bold text-xl text-[#4d4d4d]'>
            IRS Audit Representation
        </div>
        <div className='text-light-300 text-lg mt-2'>
            Our experts are equipped to represent your case and negotiate with the IRS on your behalf. Audits can consume significant time and energy, pulling you away from your business and family responsibilities as you gather extensive records and grasp intricate tax laws. We can represent you, ensuring a thorough and knowledgeable defence of your tax position.
        </div>
        <div className='text-light-300 text-lg mt-2'>
            The IRS is thorough in its audits, scrutinizing every detail of your tax return to ensure accuracy. Non-compliance with audit requests can result in a recalculated tax bill, often significantly higher than expected. Many taxpayers attempt to handle audits independently, only to find that while they saved on representative fees, they ended up with a substantial tax deficiency bill.
        </div>
        <div className='text-light-300 text-lg mt-2'>
            IRS Auditors are adept at extracting more information than you are legally obligated to provide, capitalizing on the fear and lack of knowledge many taxpayers have. Don't let this happen to you. If you've received an audit notice from the IRS, contact us for expert representation and peace of mind.
        </div>
        <div className='mt-8'>
           
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-20'>
            <div className='md:w-1/2'>
            <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
                Non-Filed Tax Returns
            </div>
            
            <div  className='text-light-300 text-lg mt-2'>
            The IRS’s sophisticated computer systems are increasingly effective at identifying unfiled tax returns. Ignoring this issue can have serious consequences; failing to file is a criminal offense that can result in prosecution and potential jail time—up to one year for each year not filed. Don’t risk your freedom by neglecting to file your tax returns.
            </div>
            <div className='text-light-300 text-lg mt-2'>
            Let us help you achieve peace of mind by ensuring you comply with the law. Voluntarily filing your delinquent returns can help you avoid severe repercussions, aside from paying any owed interest and penalties. If you wait for the IRS to file on your behalf, their filings will be in the government’s best interest, often excluding many deductions you are entitled to.
            </div>
            <div className='text-light-300 text-lg mt-2'>
            Before we can assist you in resolving this issue, all your returns must be filed and current. While you may owe taxes, interest, and penalties once everything is submitted, we will work with you to determine the total amount owed and devise a plan to resolve your tax obligations.
            </div>
            </div>
            <div className='md:self-center md:w-1/2'>
                    <img src='/images/irs-compliance.png' alt='Quality Services' />
            </div>
            </div>
        <div>
        <div className='mt-8'>
            <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
            IRS Payment Plan
            </div>
        </div>
        <div className='text-light-300 text-lg mt-2'>
            If you don’t qualify for the IRS Offer in Compromise program, a Payment Plan may be your best option to resolve your tax issues. Setting up a payment plan with the IRS allows you additional time to pay off your tax debts. However, be aware that penalties and interest will continue to accrue on your outstanding balance as you make payments. By law, you are required to pay interest on your tax debt.
        </div>
        <div className='text-light-300 text-lg mt-2'>
            The good news is that we may be able to help you get your tax penalties removed, reducing your overall burden. Contact us to explore your options and find the best solution for your situation.
        </div>
      </div>
      <div className='mt-8'>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
        IRS Liens
        </div>
      </div>
        <div className='text-light-300 text-lg mt-2'>
        Federal Tax Liens can significantly disrupt your life. When taxes go unpaid, the IRS places a lien against all your assets, especially real estate. This lien grants the IRS the legal right to collect taxes from the sale of your assets, including nearly everything you own. Liens can be placed against you, your spouse, or your business. A lien on your company could lead to the seizure of your accounts receivable. Essentially, everything you own is at risk of becoming government property. Additionally, IRS liens appear on your credit report, often preventing you from opening a checking account or borrowing against assets like your home. Banks are reluctant to deal with the extra complications when the IRS steps in to collect.
        </div>
        <div className='mt-8'>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
        Back Taxes Owed
        </div>
      </div>
        <div className='text-light-300 text-lg mt-2'>
        You filed your returns but couldn't pay the owed amount, thinking you could catch up next year. However, years pass, and you find yourself deeply in arrears, with an IRS notice stating you owe three or four times the original amount due to accumulating penalties and interest. You now have a choice: write a large check to pay the full amount, including interest and penalties, or continue ignoring the debt while it grows.
        </div>
        <div className='mt-8'>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
        Innocent Spouse Relief
        </div>
      </div>
        <div className='text-light-300 text-lg mt-2'>
        Innocent Spouse Relief is designed to help those who are victims of fraud committed by their spouse or ex-spouse. If you qualify, you may not owe any taxes.
        </div>
        <div className='mt-8'>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
        Get Your IRS File
        </div>
      </div>
        <div className='text-light-300 text-lg mt-2'>
        Did you know you can obtain a copy of your IRS file? Many people are surprised by how much information the IRS has on them. Obtaining this file is crucial for analysing the options to resolve your tax problems. It is best to have a professional request these copies, as they understand how to do so without raising red flags and can accurately interpret the information in your file.
        </div>
        <div className='mt-8'>
        <div className='font-bold text-xl text-[#4d4d4d] mb-2'>
        Bankruptcy
        </div>
      </div>
        <div className='text-light-300 text-lg mt-2'>
        Filing for bankruptcy can eliminate your back taxes, interest, and penalties. If you qualify, bankruptcy might be the best solution for your overwhelming tax issues. However, not everyone qualifies to discharge their tax debt through bankruptcy. 
        </div>
        <div className='text-light-300 text-lg mt-2'>
        Specific rules must be met. If you file for bankruptcy without meeting these criteria, the IRS will continue to pursue you once the bankruptcy is over. Proper pre-bankruptcy planning is essential to determine if bankruptcy is a viable solution for you.
        </div>
      </div>
    </div>
</div>
  )
}

export default IRSCompliance;