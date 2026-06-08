import { Card } from './ui/card';
import { Users, BookOpen, Grid3x3, DoorOpen, Calendar, AlertCircle, TrendingUp, Brain } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Total Faculty', value: '45', icon: Users, color: '#002B7F' },
    { label: 'Total Subjects', value: '120', icon: BookOpen, color: '#002B7F' },
    { label: 'Total Sections', value: '28', icon: Grid3x3, color: '#002B7F' },
    { label: 'Total Rooms', value: '32', icon: DoorOpen, color: '#002B7F' },
    { label: 'Active Schedules', value: '156', icon: Calendar, color: '#002B7F' },
  ];

  const conflicts = [
    { type: 'Faculty Conflicts', count: 3, severity: 'high' },
    { type: 'Room Conflicts', count: 1, severity: 'medium' },
    { type: 'Schedule Conflicts', count: 0, severity: 'low' },
  ];

  const roomUtilization = [
    { status: 'Available Rooms', count: 12, color: '#22C55E' },
    { status: 'Occupied Rooms', count: 18, color: '#002B7F' },
    { status: 'Reserved Rooms', count: 2, color: '#FFD400' },
  ];

  const workloadBreakdown = [
    { type: 'Full-Time', count: 28, percentage: 62 },
    { type: 'Part-Time', count: 12, percentage: 27 },
    { type: 'Part-Time Full Load', count: 5, percentage: 11 },
  ];

  const aiInsights = [
    { title: 'Faculty Assignment Suggestions', description: '5 recommendations for optimal faculty distribution across departments' },
    { title: 'Conflict Detection', description: '3 potential scheduling conflicts detected for next semester' },
    { title: 'Room Optimization', description: 'Lab rooms can be consolidated to free up 2 additional spaces' },
    { title: 'Workload Balancing', description: '4 faculty members approaching maximum load threshold' },
  ];

  const recentActivities = [
    { action: 'Schedule Generated', detail: 'BSIT-2A Final Schedule', time: '2 hours ago' },
    { action: 'Faculty Added', detail: 'Andrea Ponteres - ICT Department', time: '4 hours ago' },
    { action: 'Room Updated', detail: 'Lab 301 - Capacity increased to 45', time: '1 day ago' },
    { action: 'Section Created', detail: 'BSBA-1B Business Management', time: '2 days ago' },
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
          Welcome back, Admin!
        </h1>
        <p style={{ color: '#666666', fontWeight: 400 }}>
          Here's what's happening with your academic scheduling system today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle size={20} style={{ color: '#002B7F' }} />
                <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Alerts and Conflicts
                </h3>
              </div>
              <div className="space-y-3">
                {conflicts.map((conflict) => (
                  <div key={conflict.type} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span style={{ color: '#333333', fontWeight: 500 }}>{conflict.type}</span>
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{
                        backgroundColor: conflict.count === 0 ? '#22C55E' : conflict.severity === 'high' ? '#EF4444' : '#F59E0B',
                        color: 'white',
                        fontWeight: 600
                      }}
                    >
                      {conflict.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <DoorOpen size={20} style={{ color: '#002B7F' }} />
                <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
                  Room Utilization
                </h3>
              </div>
              <div className="space-y-3">
                {roomUtilization.map((room) => (
                  <div key={room.status} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span style={{ color: '#333333', fontWeight: 500 }}>{room.status}</span>
                    <span style={{ color: room.color, fontWeight: 700 }}>
                      {room.count}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6 border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} style={{ color: '#002B7F' }} />
              <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
                Faculty Workload Breakdown
              </h3>
            </div>
            <div className="space-y-3">
              {workloadBreakdown.map((workload) => (
                <div key={workload.type} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span style={{ color: '#333333', fontWeight: 500 }}>{workload.type}</span>
                    <span style={{ color: '#002B7F', fontWeight: 600 }}>
                      {workload.count} ({workload.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${workload.percentage}%`,
                        backgroundColor: '#002B7F'
                      }}
                    />
                  </div>
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
        </div>

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

      <Card className="p-6 border-2" style={{ borderColor: '#002B7F' }}>
        <div className="flex items-center gap-2 mb-6">
          <Brain size={24} style={{ color: '#002B7F' }} />
          <h3 className="text-xl" style={{ color: '#002B7F', fontWeight: 700 }}>
            AI Scheduling Insights
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

    </div>
  );
}
