import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Sadish' };
  return (
    <section className='home'>
      <div className="home-content">
        <div className="home-header">
           <HeaderBox
            type="greeting"
            title="Howdy"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and transactions efficiently."
           />

           <TotalBalanceBox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1250.33}
            />
        </div>
      </div>
    </section>
  )
}

export default Home
