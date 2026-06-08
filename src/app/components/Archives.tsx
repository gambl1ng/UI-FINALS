import { Card } from './ui/card';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Search, Eye, Download, Archive } from 'lucide-react';

export function Archives() {
  const archives = [
    {
      id: 'ARC-2026-001',
      title: 'Faculty Load Report',
      category: 'Faculty Load',
      period: 'AY 2025-26, 1st Sem',
      size: '4.2 MB',
      status: 'ARCHIVED',
      date: '2026-05-15'
    },
    {
      id: 'ARC-2026-002',
      title: 'Master Schedule',
      category: 'Master Schedule',
      period: 'AY 2025-26, 1st Sem',
      size: '5.5 MB',
      status: 'ARCHIVED',
      date: '2026-05-15'
    },
    {
      id: 'ARC-2025-009',
      title: 'Audit Logs',
      category: 'System Logs',
      period: 'AY 2024-25, 2nd Sem',
      size: '2.1 MB',
      status: 'ARCHIVED',
      date: '2025-12-20'
    },
    {
      id: 'ARC-2025-003',
      title: 'Classroom Utilization Report',
      category: 'Room Reports',
      period: 'AY 2024-25, 2nd Sem',
      size: '1.4 MB',
      status: 'ARCHIVED',
      date: '2025-12-15'
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Secure Record Repository
          </h1>
          <p style={{ color: '#666666', fontWeight: 400 }}>
            Welcome to the ScheduLogic Archiving Center. All registered and diagnostic data, faculty records, course schedules, and audit logs are safely archived and preserved here for academic compliance and historical auditing.
          </p>
        </div>
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search by Reference ID or File Items..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="2025-2026">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Academic Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025-2026">2025-2026</SelectItem>
              <SelectItem value="2024-2025">2024-2025</SelectItem>
              <SelectItem value="2023-2024">2023-2024</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="faculty">Faculty Load</SelectItem>
              <SelectItem value="schedule">Master Schedule</SelectItem>
              <SelectItem value="logs">System Logs</SelectItem>
            </SelectContent>
          </Select>
          <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
            More Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 border" style={{ backgroundColor: '#E3F2FD' }}>
            <div className="flex items-center gap-3">
              <Archive size={24} style={{ color: '#002B7F' }} />
              <div>
                <p className="text-xs" style={{ color: '#666666' }}>Vault Capacity</p>
                <p className="text-xl" style={{ color: '#002B7F', fontWeight: 700 }}>34.6 GB / 50 GB</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border" style={{ backgroundColor: '#E3F2FD' }}>
            <div className="flex items-center gap-3">
              <Archive size={24} style={{ color: '#002B7F' }} />
              <div>
                <p className="text-xs" style={{ color: '#666666' }}>Archived Items</p>
                <p className="text-xl" style={{ color: '#002B7F', fontWeight: 700 }}>1,284</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border" style={{ backgroundColor: '#E3F2FD' }}>
            <div className="flex items-center gap-3">
              <Archive size={24} style={{ color: '#002B7F' }} />
              <div>
                <p className="text-xs" style={{ color: '#666666' }}>Last Backup</p>
                <p className="text-xl" style={{ color: '#002B7F', fontWeight: 700 }}>2h ago</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>REFERENCE ID</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>DESCRIPTION/FILE NAME</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACADEMIC PERIOD</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>FILE SIZE</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>STATUS</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {archives.map((archive) => (
                <tr key={archive.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>{archive.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <div style={{ color: '#333333', fontWeight: 600 }}>{archive.title}</div>
                      <div style={{ color: '#666666', fontSize: '0.75rem' }}>{archive.category}</div>
                    </div>
                  </td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{archive.period}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{archive.size}</td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{ backgroundColor: '#E5E7EB', color: '#666666', fontWeight: 600 }}
                    >
                      {archive.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye size={18} style={{ color: '#666666' }} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Download size={18} style={{ color: '#666666' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm" style={{ color: '#666666' }}>Showing 1 of {archives.length} total records</p>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">Data Preservation Policy: Active</Button>
            <Button size="sm" variant="outline">Download Audit Standard</Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="p-4 border border-gray-200">
          <h4 className="text-sm mb-2" style={{ color: '#002B7F', fontWeight: 600 }}>Quick Archive</h4>
          <p className="text-xs mb-3" style={{ color: '#666666' }}>Drag and drop files here</p>
          <Button className="w-full" size="sm" style={{ backgroundColor: '#002B7F', color: 'white' }}>
            Upload Files
          </Button>
        </Card>

        <Card className="p-4 border border-gray-200">
          <h4 className="text-sm mb-2" style={{ color: '#002B7F', fontWeight: 600 }}>Curriculum Archiving</h4>
          <p className="text-xs mb-3" style={{ color: '#666666' }}>Archive curriculum data</p>
          <Button className="w-full" size="sm" style={{ backgroundColor: '#002B7F', color: 'white' }}>
            Archive Now
          </Button>
        </Card>

        <Card className="p-4 border border-gray-200">
          <h4 className="text-sm mb-2" style={{ color: '#002B7F', fontWeight: 600 }}>Integrity Check</h4>
          <p className="text-xs mb-3" style={{ color: '#666666' }}>Verify the checksums</p>
          <Button className="w-full" size="sm" style={{ backgroundColor: '#002B7F', color: 'white' }}>
            Run Check
          </Button>
        </Card>

        <Card className="p-4 border border-gray-200">
          <h4 className="text-sm mb-2" style={{ color: '#002B7F', fontWeight: 600 }}>Archive Report</h4>
          <p className="text-xs mb-3" style={{ color: '#666666' }}>Generate summary PDF</p>
          <Button className="w-full" size="sm" style={{ backgroundColor: '#002B7F', color: 'white' }}>
            Generate
          </Button>
        </Card>
      </div>
    </div>
  );
}
