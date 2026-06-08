import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Eye, Edit, Trash2, Search } from 'lucide-react';

export function SectionManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const sections = [
    {
      id: 'SEC-001',
      name: 'BSIT-1A',
      program: 'BSIT',
      yearLevel: '1st Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 40,
      adviser: 'Alejandro Burgos Jr.',
      status: 'Active'
    },
    {
      id: 'SEC-002',
      name: 'BSIT-1B',
      program: 'BSIT',
      yearLevel: '1st Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 40,
      adviser: 'Not assigned',
      status: 'Active'
    },
    {
      id: 'SEC-003',
      name: 'BSIT-2A',
      program: 'BSIT',
      yearLevel: '2nd Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 35,
      adviser: 'Ma. Claret Delos Santos',
      status: 'Active'
    },
    {
      id: 'SEC-004',
      name: 'BSBA-1A',
      program: 'BSBA',
      yearLevel: '1st Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 45,
      adviser: 'Andrea Ponteres',
      status: 'Active'
    },
    {
      id: 'SEC-005',
      name: 'BSHM-1A',
      program: 'BSHM',
      yearLevel: '1st Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 35,
      adviser: 'Airol Jay Zabala',
      status: 'Active'
    },
    {
      id: 'SEC-006',
      name: 'BSTM-1A',
      program: 'BSTM',
      yearLevel: '1st Year',
      semester: '1st Semester',
      type: 'BLOCK',
      capacity: 35,
      adviser: 'Not assigned',
      status: 'Active'
    }
  ];

  const filteredSections = sections.filter(section => {
    const matchesSearch = section.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = selectedProgram === 'all' || section.program === selectedProgram;
    const matchesYear = selectedYear === 'all' || section.yearLevel === selectedYear;

    return matchesSearch && matchesProgram && matchesYear;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Section Management
          </h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
              + Add Section
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle style={{ color: '#002B7F', fontWeight: 700 }}>Add Section</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SECTION NAME</Label>
                <Input placeholder="e.g. BSIT-1A" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CAMPUS</Label>
                <Input placeholder="STI Balagtas" defaultValue="STI Balagtas" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ACADEMIC YEAR</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="2025-2026" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025-2026">2025-2026</SelectItem>
                    <SelectItem value="2024-2025">2024-2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SEMESTER</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="1st Semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Semester">1st Semester</SelectItem>
                    <SelectItem value="2nd Semester">2nd Semester</SelectItem>
                    <SelectItem value="Summer">Summer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>PROGRAM</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="BSIT" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BSIT">BSIT</SelectItem>
                    <SelectItem value="BSBA">BSBA</SelectItem>
                    <SelectItem value="BSHM">BSHM</SelectItem>
                    <SelectItem value="BSTM">BSTM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>YEAR LEVEL</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="1st Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1st Year">1st Year</SelectItem>
                    <SelectItem value="2nd Year">2nd Year</SelectItem>
                    <SelectItem value="3rd Year">3rd Year</SelectItem>
                    <SelectItem value="4th Year">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CURRICULUM</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="BSIT 2023" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BSIT 2023">BSIT 2023</SelectItem>
                    <SelectItem value="BSBA 2023">BSBA 2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SECTION TYPE</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Block Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Block Section">Block Section</SelectItem>
                    <SelectItem value="Irregular Section">Irregular Section</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CAPACITY</Label>
                <Input type="number" placeholder="40" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ADVISER</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="f1">Alejandro Burgos Jr.</SelectItem>
                    <SelectItem value="f2">John Vincent Malquisto</SelectItem>
                    <SelectItem value="f3">Andrea Ponteres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button style={{ backgroundColor: '#002B7F', color: 'white' }} onClick={() => setIsAddDialogOpen(false)}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search section..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedProgram} onValueChange={setSelectedProgram}>
            <SelectTrigger>
              <SelectValue placeholder="All Programs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programs</SelectItem>
              <SelectItem value="BSIT">BSIT</SelectItem>
              <SelectItem value="BSBA">BSBA</SelectItem>
              <SelectItem value="BSHM">BSHM</SelectItem>
              <SelectItem value="BSTM">BSTM</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger>
              <SelectValue placeholder="All Year Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Year Levels</SelectItem>
              <SelectItem value="1st Year">1st Year</SelectItem>
              <SelectItem value="2nd Year">2nd Year</SelectItem>
              <SelectItem value="3rd Year">3rd Year</SelectItem>
              <SelectItem value="4th Year">4th Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>SECTION</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>PROGRAM</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>YEAR LEVEL</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>SEMESTER</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>TYPE</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>CAPACITY</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ADVISER</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredSections.map((section) => (
                <tr key={section.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 700 }}>{section.name}</td>
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 500 }}>{section.program}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{section.yearLevel}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{section.semester}</td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}
                    >
                      {section.type}
                    </span>
                  </td>
                  <td className="py-3 px-4" style={{ color: '#333333', fontWeight: 600 }}>{section.capacity}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{section.adviser}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye size={18} style={{ color: '#666666' }} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit size={18} style={{ color: '#666666' }} />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 size={18} style={{ color: '#EF4444' }} />
                      </button>
                    </div>
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
