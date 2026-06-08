import { Card } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Search, Download } from 'lucide-react';

export function AuditLogs() {
  const logs = [
    {
      date: 'June 08, 2026',
      time: '08:15 AM',
      user: 'Regina Mape (Admin)',
      action: 'LOGIN',
      module: 'System',
      description: 'Successful login from Admin Office',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '08:32 AM',
      user: 'Regina Mape (Admin)',
      action: 'UPDATE',
      module: 'Faculty Hub',
      description: 'Updated teaching load profile for Alejandro Burgos Jr.',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '09:15 AM',
      user: 'Mel Azarcon (ICT Program Head)',
      action: 'LOGIN',
      module: 'System',
      description: 'Successful login from ICT Department',
      ip: '192.168.1.25'
    },
    {
      date: 'June 08, 2026',
      time: '09:20 AM',
      user: 'Mel Azarcon (ICT Program Head)',
      action: 'VIEW',
      module: 'Faculty Hub',
      description: 'Viewed ICT faculty members list',
      ip: '192.168.1.25'
    },
    {
      date: 'June 08, 2026',
      time: '09:35 AM',
      user: 'Mel Azarcon (ICT Program Head)',
      action: 'VIEW',
      module: 'Master Schedule',
      description: 'Viewed BSIT-1A section schedule',
      ip: '192.168.1.25'
    },
    {
      date: 'June 08, 2026',
      time: '09:48 AM',
      user: 'Regina Mape (Admin)',
      action: 'CREATE',
      module: 'Schedule',
      description: 'Generated 2nd Sem Faculty Load',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '10:05 AM',
      user: 'John Vincent Malquisto (Faculty)',
      action: 'LOGIN',
      module: 'System',
      description: 'Successful login from Faculty Room',
      ip: '192.168.1.45'
    },
    {
      date: 'June 08, 2026',
      time: '10:08 AM',
      user: 'John Vincent Malquisto (Faculty)',
      action: 'VIEW',
      module: 'Master Schedule',
      description: 'Viewed personal teaching schedule',
      ip: '192.168.1.45'
    },
    {
      date: 'June 08, 2026',
      time: '11:25 AM',
      user: 'Regina Mape (Admin)',
      action: 'UPDATE',
      module: 'Settings',
      description: 'Enabled Auto Back Up',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '01:30 PM',
      user: 'Mel Azarcon (ICT Program Head)',
      action: 'VIEW',
      module: 'Curriculum',
      description: 'Viewed BSIT curriculum courses',
      ip: '192.168.1.25'
    },
    {
      date: 'June 08, 2026',
      time: '01:45 PM',
      user: 'Regina Mape (Admin)',
      action: 'DELETE',
      module: 'Curriculum',
      description: 'Removed Obsolete Subject: CS801',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '02:15 PM',
      user: 'Mel Azarcon (ICT Program Head)',
      action: 'VIEW',
      module: 'Reports',
      description: 'Generated ICT faculty load report',
      ip: '192.168.1.25'
    },
    {
      date: 'June 08, 2026',
      time: '04:38 PM',
      user: 'Regina Mape (Admin)',
      action: 'UPDATE',
      module: 'Room',
      description: 'Updated capacity for Room 302',
      ip: '192.168.1.10'
    },
    {
      date: 'June 08, 2026',
      time: '06:28 PM',
      user: 'Regina Mape (Admin)',
      action: 'CREATE',
      module: 'Archive',
      description: 'Executed Monthly Data Preservation',
      ip: '192.168.1.10'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Activity & Audit Log
          </h1>
          <p style={{ color: '#666666', fontWeight: 400 }}>
            LIVE MONITORING ACTIVE - Tracking and verifying all administrative modifications and system access events.
          </p>
        </div>
        <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
          Download Activity Report
        </Button>
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <Select defaultValue="today">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Modules" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modules</SelectItem>
              <SelectItem value="faculty">Faculty Hub</SelectItem>
              <SelectItem value="schedule">Schedule</SelectItem>
              <SelectItem value="settings">Settings</SelectItem>
              <SelectItem value="curriculum">Curriculum</SelectItem>
              <SelectItem value="room">Room</SelectItem>
              <SelectItem value="archive">Archive</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-actions">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Actions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-actions">All Actions</SelectItem>
              <SelectItem value="create">CREATE</SelectItem>
              <SelectItem value="update">UPDATE</SelectItem>
              <SelectItem value="delete">DELETE</SelectItem>
              <SelectItem value="view">VIEW</SelectItem>
              <SelectItem value="login">LOGIN</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-users">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-users">All Users</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="program-head">Program Head</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative flex-1">
            <Input
              placeholder="May 28, 2026 ~ Today"
              className="w-full"
            />
          </div>

          <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
            Apply Filters
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>DATE & TIME</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>USER</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACTION</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>MODULE</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>DESCRIPTION</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>TERMINAL (IP)</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div>
                      <div style={{ color: '#333333', fontWeight: 600, fontSize: '0.875rem' }}>{log.date}</div>
                      <div style={{ color: '#666666', fontSize: '0.75rem' }}>{log.time}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>{log.user}</td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-xs"
                      style={{
                        backgroundColor:
                          log.action === 'CREATE' ? '#22C55E' :
                          log.action === 'UPDATE' ? '#3B82F6' :
                          log.action === 'DELETE' ? '#EF4444' :
                          log.action === 'VIEW' ? '#8B5CF6' :
                          '#666666',
                        color: 'white',
                        fontWeight: 600
                      }}
                    >
                      {log.action}
                    </span>
                  </td>
                  <td className="py-3 px-4" style={{ color: '#666666', fontWeight: 500 }}>{log.module}</td>
                  <td className="py-3 px-4" style={{ color: '#333333' }}>{log.description}</td>
                  <td className="py-3 px-4" style={{ color: '#666666', fontSize: '0.75rem' }}>{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm" style={{ color: '#666666' }}>Showing 14 of 684 recorded activities</p>
          <div className="flex gap-1">
            {[1, 2, 3, '...', 139].map((page, index) => (
              <button
                key={index}
                className="px-3 py-1 rounded text-sm"
                style={{
                  backgroundColor: page === 1 ? '#002B7F' : 'transparent',
                  color: page === 1 ? 'white' : '#666666',
                  fontWeight: page === 1 ? 600 : 400
                }}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
