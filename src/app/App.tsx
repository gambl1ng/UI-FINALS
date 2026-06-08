import { useState } from 'react';
import { SignIn } from './components/SignIn';
import { DashboardLayout } from './components/DashboardLayout';
import { AdminDashboard } from './components/AdminDashboard';
import { ProgramHeadDashboard } from './components/ProgramHeadDashboard';
import { FacultyDashboard } from './components/FacultyDashboard';
import { FacultyHub } from './components/FacultyHub';
import { SectionManagement } from './components/SectionManagement';
import { CurriculumManagement } from './components/CurriculumManagement';
import { SubjectManagement } from './components/SubjectManagement';
import { RoomManagement } from './components/RoomManagement';
import { MasterSchedule } from './components/MasterSchedule';
import { Reports } from './components/Reports';
import { Archives } from './components/Archives';
import { AuditLogs } from './components/AuditLogs';
import { Settings } from './components/Settings';

type UserRole = 'admin' | 'program-head' | 'faculty' | null;

interface UserInfo {
  name: string;
  role: string;
  department?: string;
}

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [activePage, setActivePage] = useState('dashboard');

  const handleSignIn = (role: UserRole) => {
    setCurrentUser(role);
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActivePage('dashboard');
  };

  const getUserInfo = (): UserInfo => {
    switch (currentUser) {
      case 'admin':
        return { name: 'Regina Mape', role: 'Administrator' };
      case 'program-head':
        return { name: 'Mel Azarcon', role: 'ICT Program Head', department: 'ICT' };
      case 'faculty':
        return { name: 'John Vincent Malquisto', role: 'Faculty' };
      default:
        return { name: '', role: '' };
    }
  };

  const getWelcomeMessage = () => {
    switch (currentUser) {
      case 'admin':
        return 'Welcome back, Admin!';
      case 'program-head':
        return 'Welcome back, Ma\'am Mel!';
      case 'faculty':
        return 'Welcome back, Sir JV!';
      default:
        return '';
    }
  };

  const renderDashboard = () => {
    const welcomeMsg = getWelcomeMessage();
    switch (currentUser) {
      case 'admin':
        return <AdminDashboard userName={welcomeMsg} />;
      case 'program-head':
        return <ProgramHeadDashboard userName={welcomeMsg} />;
      case 'faculty':
        return <FacultyDashboard userName={welcomeMsg} />;
      default:
        return null;
    }
  };

  const renderPage = () => {
    const userInfo = getUserInfo();
    switch (activePage) {
      case 'dashboard':
        return renderDashboard();
      case 'curriculum':
        return <CurriculumManagement userRole={currentUser} />;
      case 'faculty-hub':
        return <FacultyHub userRole={currentUser} userDepartment={userInfo.department} />;
      case 'section':
        return <SectionManagement />;
      case 'subject':
        return <SubjectManagement />;
      case 'room':
        return <RoomManagement userRole={currentUser} />;
      case 'master-schedule':
        return <MasterSchedule userRole={currentUser} userInfo={userInfo} />;
      case 'reports':
        return <Reports />;
      case 'archives':
        return <Archives />;
      case 'audit-logs':
        return <AuditLogs />;
      case 'settings':
        return <Settings />;
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p style={{ color: '#666666', fontSize: '1.125rem' }}>
              {activePage.charAt(0).toUpperCase() + activePage.slice(1).replace('-', ' ')} - Coming Soon
            </p>
          </div>
        );
    }
  };

  if (!currentUser) {
    return <SignIn onSignIn={handleSignIn} />;
  }

  const userInfo = getUserInfo();

  return (
    <DashboardLayout
      userRole={currentUser}
      userInfo={userInfo}
      activePage={activePage}
      onNavigate={setActivePage}
      onLogout={handleLogout}
    >
      {renderPage()}
    </DashboardLayout>
  );
}
