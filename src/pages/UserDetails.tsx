import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserDetails.scss';
import { IUser } from '../models/IUser';
import { FaArrowLeft } from 'react-icons/fa';



const UserDetails: React.FC = () => {
  const handleLogoClick = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<string>('general-details');

  // useEffect(() => {
  //   axios.get('https://run.mocky.io/v3/7290fa80-31c2-4cd4-b191-fb947cb64ea3') 
  //     .then(response => {
  //       console.log(response.data)
  //       const user = response.data.find((user: any) => String(user.id) === id);

  //       setUser(user);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       setLoading(false);
  //     });
  // }, [id]);
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const foundUser = users.find((u: IUser) => u.id === Number(id));
      setUser(foundUser || null);
    }
  }, [id]);
  if (!user) {
    return <div>User not found</div>;
  }





  return (
    <div className="user-details-container">
      <p className='heading-color'  onClick={handleLogoClick} style={{alignItems:'centre',cursor:'pointer'}}><span style={{paddingRight:'1em'}}><FaArrowLeft/></span> Back</p>

      <div className='flex '>
        <div><p className='heading-color heading'>User Details</p></div>
        <div className='flex'>
          <p className='action-button-blacklist'>BLACKLIST USER</p>
          <p className='action-button-activate'>ACTIVATE USER</p>

        </div>
      </div>
      <div className='user-header'>
        <div className="user-detail-header">
          <div className="user-info">
            <div className="avatar">
              <img src="/assets/avatar.png" alt="User Avatar" />
            </div>
            <div className="info">
              <h2>{user.name}</h2>
              <p>LDHDHDH393939</p>
            </div>
          </div>
          <div className="user-tier">
            <p>User's Tier</p>
            <div className="stars">
              <p>stars</p>
            </div>
          </div>
          <div className="user-balance">
            <h3>200,000</h3>
            <p>999999999 Providus Bank</p>
          </div>
        </div>
        <div className="tabs">
          <button onClick={() => setActiveTab('general-details')} className={activeTab === 'general-details' ? 'active' : ''}>General Details</button>
          <button onClick={() => setActiveTab('documents')} className={activeTab === 'documents' ? 'active' : ''}>Documents</button>
          <button onClick={() => setActiveTab('bank-details')} className={activeTab === 'bank-details' ? 'active' : ''}>Bank Details</button>
          <button onClick={() => setActiveTab('loans')} className={activeTab === 'loans' ? 'active' : ''}>Loans</button>
          <button onClick={() => setActiveTab('savings')} className={activeTab === 'savings' ? 'active' : ''}>Savings</button>
          <button onClick={() => setActiveTab('app-system')} className={activeTab === 'app-system' ? 'active' : ''}>App and System</button>
        </div>

      </div>

      <div className='menu-details'>
        {activeTab === 'general-details' && (
          <div className="tab-content">
            <h2 className='heading-color'>General Details</h2>
            <div className="section">
              <h3 className='heading-color'>Personal Information</h3>
              <div className="personal-info-grid">
                <p><strong>Full Name:</strong> {user.name}</p>
                <p><strong>Phone Number:</strong> {user.phone}</p>
                <p><strong>Email Address:</strong> {user.email}</p>
                <p><strong>BVN:</strong> {user.bvn}</p>
                <p><strong>Gender:</strong> {user.gender}</p>
                <p><strong>Marital Status:</strong> {user.maritalStatus}</p>
                <p><strong>Children:</strong> {user.children}</p>
                <p><strong>Type of Residence:</strong> {user.typeOfResidence}</p>
              </div>

            </div>
            <div className="section">
              <h3 className='heading-color'>Education and Employment</h3>
              <div className="personal-info-grid">
                <p><strong>Level of Education:</strong> {user.levelOfEducation}</p>
                <p><strong>Employment Status:</strong> {user.employmentStatus}</p>
                <p><strong>Sector of Employment:</strong> {user.sectorOfEmployment}</p>
                <p><strong>Duration of Employment:</strong> {user.durationOfEmployment}</p>
                <p><strong>Office Email:</strong> {user.officeEmail}</p>
                <p><strong>Monthly Income:</strong> {user.monthlyIncome}</p>
                <p><strong>Loan Repayment:</strong> {user.loanRepayment}</p>
              </div>

            </div>
            <div className="section">
              <h3 className='heading-color'>Socials</h3>
              <div className="personal-info-grid">
                <p><strong>Twitter:</strong> {user.twitter}</p>
                <p><strong>Facebook:</strong> {user.facebook}</p>
                <p><strong>Instagram:</strong> {user.instagram}</p>
              </div>

            </div>
            <div className="section">
              <h3 className='heading-color'>Guarantor</h3>
              <p><strong>Full Name:</strong> {user.guarantor.fullName}</p>
              <p><strong>Phone Number:</strong> {user.guarantor.phoneNumber}</p>
              <p><strong>Email Address:</strong> {user.guarantor.email}</p>
              <p><strong>Relationship:</strong> {user.guarantor.relationship}</p>
            </div>
          </div>
        )}
        {activeTab === 'documents' && <div className="tab-content heading-color">Documents</div>}
        {activeTab === 'bank-details' && <div className="tab-content heading-color">Bank Details</div>}
        {activeTab === 'loans' && <div className="tab-content heading-color">Loans</div>}
        {activeTab === 'savings' && <div className="tab-content heading-color">Savings</div>}
        {activeTab === 'app-system' && <div className="tab-content heading-color">App and System</div>}
      </div>

    </div >
  );
};

export default UserDetails;
