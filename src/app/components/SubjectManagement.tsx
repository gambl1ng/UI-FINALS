import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Eye, Edit, Trash2, Search } from 'lucide-react';

export function SubjectManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const subjects = [
    { code: 'IT101', title: 'Introduction to Computing', units: 3, lec: 2, lab: 1, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'None', status: 'ACTIVE' },
    { code: 'IT102', title: 'Computer Programming 1', units: 3, lec: 2, lab: 1, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'IT101', status: 'ACTIVE' },
    { code: 'IT201', title: 'Computer Programming 2', units: 3, lec: 2, lab: 1, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'IT102', status: 'ACTIVE' },
    { code: 'IT301', title: 'Web Development', units: 3, lec: 1, lab: 2, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'IT201', status: 'ACTIVE' },
    { code: 'CS101', title: 'Discrete Mathematics', units: 3, lec: 3, lab: 0, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'None', status: 'ACTIVE' },
    { code: 'CS201', title: 'Data Structures', units: 3, lec: 2, lab: 1, department: 'ICT', curriculum: 'BSIT 2023', prerequisite: 'CS101', status: 'ACTIVE' },
    { code: 'BM101', title: 'Principles of Management', units: 3, lec: 3, lab: 0, department: 'Business Management', curriculum: 'BSBA 2023', prerequisite: 'None', status: 'ACTIVE' },
  ];

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          subject.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || subject.department === selectedDept;
    const matchesStatus = selectedStatus === 'all' || subject.status === selectedStatus;

    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Subject Management
          </h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
              + Add Subject
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle style={{ color: '#002B7F', fontWeight: 700 }}>Add Subject</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CODE</Label>
                <Input placeholder="e.g. IT 401" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>DEPARTMENT</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="ICT" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ICT">ICT</SelectItem>
                    <SelectItem value="Business Management">Business Management</SelectItem>
                    <SelectItem value="General Education">General Education</SelectItem>
                    <SelectItem value="TMHM">TMHM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 col-span-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>TITLE</Label>
                <Input placeholder="Subject title" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>UNITS</Label>
                <Input type="number" placeholder="3" />
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
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>LEC HOURS</Label>
                <Input type="number" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>LAB HOURS</Label>
                <Input type="number" placeholder="1" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>STATUS</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Active" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
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
              placeholder="Search subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedDept} onValueChange={setSelectedDept}>
            <SelectTrigger>
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="ICT">ICT</SelectItem>
              <SelectItem value="Business Management">Business Management</SelectItem>
              <SelectItem value="General Education">General Education</SelectItem>
              <SelectItem value="TMHM">TMHM</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="INACTIVE">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>CODE</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>TITLE</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>UNITS</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>LEC</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>LAB</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>DEPARTMENT</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>CURRICULUM</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>STATUS</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.map((subject) => (
                <tr key={subject.code} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>{subject.code}</td>
                  <td className="py-3 px-4" style={{ color: '#333333' }}>{subject.title}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{subject.units}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{subject.lec}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{subject.lab}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{subject.department}</td>
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 500 }}>{subject.curriculum}</td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{ backgroundColor: '#22C55E', color: 'white', fontWeight: 600 }}
                    >
                      {subject.status}
                    </span>
                  </td>
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
