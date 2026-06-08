import { ReactNode } from 'react';
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Grid3x3,
  FileText,
  DoorOpen,
  Calendar,
  FileBarChart,
  Archive,
  ClipboardList,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
  HelpCircle
} from 'lucide-react';
import { AIAssistant } from './AIAssistant';
import stiLogo from '../../imports/images__10_.png';

interface UserInfo {
  name: string;
  role: string;
}

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: 'admin' | 'program-head' | 'faculty';
  userInfo: UserInfo;
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function DashboardLayout({
  children,
  userRole,
  userInfo,
  activePage,
  onNavigate,
  onLogout
}: DashboardLayoutProps) {
  const getInitials = () => {
    const names = userInfo.name.split(' ');
    if (names.length >= 2) {
      return names[0][0] + names[names.length - 1][0];
    }
    return names[0][0];
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'program-head', 'faculty'] },
    { id: 'curriculum', label: 'Curriculum', icon: BookOpen, roles: ['admin', 'program-head'] },
    { id: 'faculty-hub', label: 'Faculty Hub', icon: Users, roles: ['admin', 'program-head'] },
    { id: 'subject', label: 'Subject', icon: FileText, roles: ['admin', 'program-head'] },
    { id: 'section', label: 'Section', icon: Grid3x3, roles: ['admin', 'program-head'] },
    { id: 'room', label: 'Room', icon: DoorOpen, roles: ['admin', 'program-head'] },
    { id: 'master-schedule', label: userRole === 'faculty' ? 'My Schedule' : 'Master Schedule', icon: Calendar, roles: ['admin', 'program-head', 'faculty'] },
    { id: 'reports', label: 'Reports', icon: FileBarChart, roles: ['admin', 'program-head'] },
    { id: 'archives', label: 'Archives', icon: Archive, roles: ['admin'] },
    { id: 'audit-logs', label: 'Audit Logs', icon: ClipboardList, roles: ['admin'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['admin'] },
  ];

  const visibleMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  const getPageLabel = (pageId: string) => {
    const item = menuItems.find(m => m.id === pageId);
    return item?.label || pageId.charAt(0).toUpperCase() + pageId.slice(1).replace('-', ' ');
  };

  return (
    <div className="flex h-screen bg-white">
      <aside className="w-64 border-r border-gray-200 flex flex-col" style={{ backgroundColor: '#002B7F' }}>
        <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-700 flex-shrink-0">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={stiLogo} alt="STI" className="w-full h-full object-contain rounded" />
          </div>
          <div>
            <h1 className="text-base" style={{ color: 'white', fontWeight: 700 }}>
              ScheduLogic
            </h1>
            <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              STI COLLEGE BALAGTAS
            </p>
          </div>
        </div>

        <nav className="p-4 overflow-y-auto flex-1">
          {visibleMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="w-full flex items-center gap-3 px-4 py-2.5 mb-1 rounded transition-all hover:bg-gray-700"
                style={{
                  backgroundColor: isActive ? '#FFD400' : 'transparent',
                  color: isActive ? '#002B7F' : 'rgba(255, 255, 255, 0.8)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.875rem',
                  fontFamily: 'Plus Jakarta Sans, sans-serif'
                }}
                onMouseEnter={(e) => !isActive && (e.currentTarget.style.fontWeight = '700')}
                onMouseLeave={(e) => !isActive && (e.currentTarget.style.fontWeight = '500')}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded transition-colors hover:bg-gray-700"
            style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500, fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="border-b border-gray-200 bg-white">
          <div className="h-16 flex items-center justify-between px-8">
            <div className="flex items-center gap-2 text-sm">
              <button onClick={() => onNavigate('dashboard')} style={{ color: '#002B7F', fontWeight: 500 }}>
                Dashboard
              </button>
              {activePage !== 'dashboard' && (
                <>
                  <ChevronRight size={16} style={{ color: '#666666' }} />
                  <span style={{ color: '#666666', fontWeight: 500 }}>{getPageLabel(activePage)}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell size={20} style={{ color: '#666666' }} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <HelpCircle size={20} style={{ color: '#666666' }} />
              </button>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: '#002B7F', color: 'white', fontSize: '0.875rem', fontWeight: 700 }}
              >
                {getInitials()}
              </div>
              <div className="flex flex-col">
                <span style={{ color: '#333333', fontWeight: 600, fontSize: '0.875rem' }}>{userInfo.name}</span>
                <span style={{ color: '#666666', fontSize: '0.75rem' }}>{userInfo.role}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-8 bg-white">
          {children}
        </div>

        <footer className="h-12 flex items-center justify-center border-t border-gray-200 bg-white">
          <p className="text-sm" style={{ color: '#999999' }}>
            ScheduLogic v2.1 © 2026 STI College Balagtas
          </p>
        </footer>
      </main>
      <AIAssistant />
    </div>
  );
}
