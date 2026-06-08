import { Card } from './ui/card';
import { Users, Calendar, FileText, Brain, TrendingUp } from 'lucide-react';

export function ProgramHeadDashboard() {
  const stats = [
    { label: 'Department Faculty', value: '12', icon: Users, color: '#002B7F' },
    { label: 'Active Sections', value: '8', icon: Calendar, color: '#002B7F' },
    { label: 'Scheduled Classes', value: '45', icon: FileText, color: '#002B7F' },
  ];

  const aiInsights = [
    { title: 'Faculty Load Distribution', description: '2 faculty members in your department are nearing maximum capacity' },
    { title: 'Schedule Optimization', description: 'Consider redistributing 3 classes to balance workload more evenly' },
    { title: 'Room Allocation', description: 'Lab 201 is underutilized - available for 8 additional hours per week' },
    { title: 'Qualification Match', description: 'All current assignments align with faculty FCCE qualifications' },
  ];

  const departmentFaculty = [
    { name: 'Alejandro Burgos Jr.', load: '18/24', status: 'Active' },
    { name: 'John Vincent Malquisto', load: '22/24', status: 'Active' },
    { name: 'Andrea Ponteres', load: '20/24', status: 'Active' },
    { name: 'Airol Jay Zabala', load: '16/24', status: 'Active' },
    { name: 'Mark Albert Natividad', load: '12/12', status: 'Active' },
  ];

  const recentActivities = [
    { action: 'Schedule Updated', detail: 'BSIT-2A - Programming 2 time changed', time: '1 hour ago' },
    { action: 'Faculty Load Modified', detail: 'J. Malquisto - Added Data Structures', time: '3 hours ago' },
    { action: 'Room Reassigned', detail: 'Lab 301 - Web Development class', time: '5 hours ago' },
  ];

  const calendarDays = [
    { day: 'Sun', date: 1 },
    { day: 'Mon', date: 2 },
    { day: 'Tue', date: 3 },
    { day: 'Wed', date: 4 },
    { day: 'Thu', date: 5 },
    { day: 'Fri', date: 6 },
    { day: 'Sat', date: 7 },
    { day: 'Sun', date: 8 },
    { day: 'Mon', date: 9 },
    { day: 'Tue', date: 10 },
    { day: 'Wed', date: 11 },
    { day: 'Thu', date: 12 },
    { day: 'Fri', date: 13 },
    { day: 'Sat', date: 14 },
    { day: 'Sun', date: 15 },
    { day: 'Mon', date: 16 },
    { day: 'Tue', date: 17 },
    { day: 'Wed', date: 18 },
    { day: 'Thu', date: 19 },
    { day: 'Fri', date: 20 },
    { day: 'Sat', date: 21 },
    { day: 'Sun', date: 22 },
    { day: 'Mon', date: 23 },
    { day: 'Tue', date: 24 },
    { day: 'Wed', date: 25 },
    { day: 'Thu', date: 26 },
    { day: 'Fri', date: 27 },
    { day: 'Sat', date: 28 },
    { day: 'Sun', date: 29 },
    { day: 'Mon', date: 30 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
          Welcome back, Ma'am Mel!
        </h1>
        <p style={{ color: '#666666', fontWeight: 400 }}>
          ICT Department - Academic Scheduling Overview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <Icon size={24} style={{ color: stat.color }} />
              </div>
              <div className="text-3xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: '#666666', fontWeight: 500 }}>
                {stat.label}
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 border-2" style={{ borderColor: '#002B7F' }}>
        <div className="flex items-center gap-2 mb-6">
          <Brain size={24} style={{ color: '#002B7F' }} />
          <h3 className="text-xl" style={{ color: '#002B7F', fontWeight: 700 }}>
            AI Scheduling Insights for ICT Department
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2"
              style={{ borderColor: '#FFD400', backgroundColor: '#FFFBEB' }}
            >
              <div style={{ color: '#002B7F', fontWeight: 600, marginBottom: 8 }}>
                {insight.title}
              </div>
              <div style={{ color: '#666666', fontSize: '0.875rem' }}>
                {insight.description}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Users size={20} style={{ color: '#002B7F' }} />
            <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
              Department Faculty Status
            </h3>
          </div>
          <div className="space-y-3">
            {departmentFaculty.map((faculty) => (
              <div key={faculty.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <div style={{ color: '#333333', fontWeight: 600 }}>{faculty.name}</div>
                  <div style={{ color: '#666666', fontSize: '0.875rem' }}>Load: {faculty.load}</div>
                </div>
                <span
                  className="px-3 py-1 rounded text-sm"
                  style={{ backgroundColor: '#22C55E', color: 'white', fontWeight: 600 }}
                >
                  {faculty.status}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={20} style={{ color: '#002B7F' }} />
            <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
              Recent Activities
            </h3>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="p-3 rounded-lg bg-gray-50">
                <div style={{ color: '#002B7F', fontWeight: 600, marginBottom: 4 }}>
                  {activity.action}
                </div>
                <div style={{ color: '#666666', fontSize: '0.875rem' }}>
                  {activity.detail}
                </div>
                <div style={{ color: '#999999', fontSize: '0.75rem', marginTop: 4 }}>
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <h3 className="text-base mb-4" style={{ color: '#002B7F', fontWeight: 600 }}>
            June 2026
          </h3>
          <div className="grid grid-cols-7 gap-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className="text-center text-xs" style={{ color: '#666666', fontWeight: 600 }}>
                {day}
              </div>
            ))}
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className="aspect-square flex items-center justify-center rounded text-xs"
                style={{
                  borderWidth: day.date === 8 ? '2px' : '1px',
                  borderColor: day.date === 8 ? '#002B7F' : '#E5E7EB',
                  backgroundColor: day.date === 8 ? '#002B7F' : 'white',
                  color: day.date === 8 ? 'white' : '#333333',
                  fontWeight: day.date === 8 ? 700 : 400
                }}
              >
                {day.date}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
