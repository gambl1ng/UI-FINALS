import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { FileBarChart, Download, Clock, Target, Eye, Printer, FileText } from 'lucide-react';

export function Reports() {
  const reportCards = [
    {
      title: 'Faculty Workload Report',
      description: 'Comprehensive analysis of faculty teaching loads and assignments',
      icon: FileBarChart,
      color: '#002B7F'
    },
    {
      title: 'Room Utilization Report',
      description: 'Track room usage patterns and availability across campus',
      icon: FileBarChart,
      color: '#002B7F'
    },
    {
      title: 'Schedule Report',
      description: 'Complete overview of all class schedules and timeslots',
      icon: FileBarChart,
      color: '#002B7F'
    },
    {
      title: 'Conflict Report',
      description: 'Identify and resolve scheduling conflicts and overlaps',
      icon: FileBarChart,
      color: '#EF4444'
    },
    {
      title: 'Department Report',
      description: 'Department-wide analytics and performance metrics',
      icon: FileBarChart,
      color: '#002B7F'
    },
    {
      title: 'Qualification Report',
      description: 'Faculty qualifications and credential tracking',
      icon: FileBarChart,
      color: '#002B7F'
    },
  ];

  const quickReportData = [
    { faculty: 'Alejandro Burgos Jr.', department: 'ICT', load: '24 units', sections: 6, status: 'Full Load' },
    { faculty: 'Ma. Claret R. Delos Santos', department: 'ICT', load: '21 units', sections: 5, status: 'Full Load' },
    { faculty: 'John Vincent C. Malquisto', department: 'ICT', load: '18 units', sections: 4, status: 'Part Load' },
    { faculty: 'Rosa Marie Santos', department: 'Business', load: '24 units', sections: 7, status: 'Full Load' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Reports
          </h1>
        </div>
        <div className="flex gap-2">
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
          <Select defaultValue="2025-2026">
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-2026">2025-2026</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="1st">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1st">1st Sem</SelectItem>
              <SelectItem value="2nd">2nd Sem</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="ict">ICT</SelectItem>
              <SelectItem value="business">Business Management</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportCards.map((report, index) => (
          <Card key={index} className="p-5 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded" style={{ backgroundColor: '#E3F2FD' }}>
                <report.icon size={24} style={{ color: report.color }} />
              </div>
              <div className="flex-1">
                <h3 className="text-base mb-1" style={{ color: '#002B7F', fontWeight: 600 }}>
                  {report.title}
                </h3>
                <p className="text-xs" style={{ color: '#666666' }}>
                  {report.description}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#E5E7EB' }}
              >
                <FileText size={16} style={{ color: '#EF4444' }} />
                <span className="text-xs" style={{ color: '#666666', fontWeight: 500 }}>PDF</span>
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#E5E7EB' }}
              >
                <FileText size={16} style={{ color: '#22C55E' }} />
                <span className="text-xs" style={{ color: '#666666', fontWeight: 500 }}>Excel</span>
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded border hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#E5E7EB' }}
              >
                <FileText size={16} style={{ color: '#3B82F6' }} />
                <span className="text-xs" style={{ color: '#666666', fontWeight: 500 }}>Word</span>
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg" style={{ color: '#002B7F', fontWeight: 600 }}>
            Quick Report Preview — Faculty Load Summary
          </h3>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Eye size={16} className="mr-2" />
              View Full Report
            </Button>
            <Button size="sm" style={{ backgroundColor: '#002B7F', color: 'white' }}>
              <Download size={16} className="mr-2" />
              Export
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>FACULTY NAME</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>DEPARTMENT</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>TEACHING LOAD</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>SECTIONS</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {quickReportData.map((row, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4" style={{ color: '#333333', fontWeight: 600, fontSize: '0.875rem' }}>{row.faculty}</td>
                  <td className="py-3 px-4" style={{ color: '#666666', fontSize: '0.875rem' }}>{row.department}</td>
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{row.load}</td>
                  <td className="py-3 px-4" style={{ color: '#666666', fontSize: '0.875rem' }}>{row.sections}</td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-xs"
                      style={{
                        backgroundColor: row.status === 'Full Load' ? '#22C55E' : '#FFD400',
                        color: 'white',
                        fontWeight: 600
                      }}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
