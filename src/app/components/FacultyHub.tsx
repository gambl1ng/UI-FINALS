import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Eye, Edit, Search, Plus, X, FileText, Download, Target, Archive } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { AvailabilityScheduler, AvailabilityData } from './AvailabilityScheduler';

interface FacultyHubProps {
  userRole?: 'admin' | 'program-head' | 'faculty' | null;
  userDepartment?: string;
}

export function FacultyHub({ userRole, userDepartment }: FacultyHubProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewingFaculty, setViewingFaculty] = useState<any>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedClassification, setSelectedClassification] = useState('Full-Time');
  const [availability, setAvailability] = useState<AvailabilityData | undefined>();

  const facultyData = [
    {
      id: 'F-001',
      name: 'Alejandro Burgos Jr.',
      department: 'ICT',
      classification: 'Full-Time',
      currentLoad: '18/30',
      loadValue: 18,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'a.burgos@sti.edu.ph',
      contact: '09171234567',
      specialization: 'Web Development, Database Management',
      adviser: 'BSIT-1A',
      preferredSubjects: 'IT101, IT102, IT201'
    },
    {
      id: 'F-002',
      name: 'Ma. Claret R. Delos Santos',
      department: 'ICT',
      classification: 'Full-Time',
      currentLoad: '21/30',
      loadValue: 21,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'claret.delos@sti.edu.ph',
      contact: '09171234568',
      specialization: 'Programming, Software Engineering',
      adviser: '',
      preferredSubjects: 'IT102, IT201'
    },
    {
      id: 'F-003',
      name: 'John Vincent C. Malquisto',
      department: 'ICT',
      classification: 'Part-Time',
      currentLoad: '15/30',
      loadValue: 15,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'jv.malquisto@sti.edu.ph',
      contact: '09171234569',
      specialization: 'Database Systems',
      adviser: '',
      preferredSubjects: 'CS201, IT301'
    },
    {
      id: 'F-004',
      name: 'Andrea L. Ponteres',
      department: 'Business Management',
      classification: 'Full-Time',
      currentLoad: '22/30',
      loadValue: 22,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'andrea.ponteres@sti.edu.ph',
      contact: '09171234570',
      specialization: 'Business Administration',
      adviser: '',
      preferredSubjects: 'BM101'
    },
    {
      id: 'F-005',
      name: 'Airol Jay M. Zabala',
      department: 'TMHM',
      classification: 'Part-Time Full Load',
      currentLoad: '20/30',
      loadValue: 20,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'airol.zabala@sti.edu.ph',
      contact: '09171234571',
      specialization: 'Tourism Management',
      adviser: '',
      preferredSubjects: ''
    },
    {
      id: 'F-006',
      name: 'Mark Albert D. Natividad',
      department: 'General Education',
      classification: 'Full-Time',
      currentLoad: '15/30',
      loadValue: 15,
      maxLoad: 30,
      status: 'ACTIVE',
      email: 'mark.natividad@sti.edu.ph',
      contact: '09171234572',
      specialization: 'Mathematics',
      adviser: '',
      preferredSubjects: 'CS101'
    }
  ];

  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faculty.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'all' || faculty.department === selectedDept;
    const matchesClass = selectedClass === 'all' || faculty.classification === selectedClass;
    const matchesStatus = selectedStatus === 'all' || faculty.status === selectedStatus;

    // If user is program head, only show faculty from their department
    const matchesUserDept = userRole !== 'program-head' || (userDepartment && faculty.department === userDepartment);

    return matchesSearch && matchesDept && matchesClass && matchesStatus && matchesUserDept;
  });

  const getLoadColor = (loadValue: number, maxLoad: number) => {
    const percentage = (loadValue / maxLoad) * 100;
    if (percentage >= 90) return '#EF4444';
    if (percentage >= 70) return '#FFD400';
    return '#22C55E';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl mb-1" style={{ color: '#002B7F', fontWeight: 700 }}>
            Faculty Hub
          </h1>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
              <Plus size={18} className="mr-2" />
              Add Faculty
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle style={{ color: '#002B7F', fontWeight: 700 }}>Add Faculty</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>FACULTY ID</Label>
                <Input placeholder="F-007" />
              </div>
              <div className="space-y-2">
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
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>FIRST NAME</Label>
                <Input placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>MIDDLE NAME</Label>
                <Input placeholder="Middle name" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>LAST NAME</Label>
                <Input placeholder="Last name" />
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
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>EMAIL</Label>
                <Input placeholder="name@sti.edu.ph" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CONTACT</Label>
                <Input placeholder="09XXXXXXXXX" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CLASSIFICATION</Label>
                <Select value={selectedClassification} onValueChange={setSelectedClassification}>
                  <SelectTrigger>
                    <SelectValue placeholder="Full-Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-Time">Full-Time</SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value="Part-Time Full Load">Part-Time Full Load</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SPECIALIZATION</Label>
                <Input placeholder="e.g. Web Dev" />
              </div>
              <div className="space-y-2 col-span-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>PREFERRED SUBJECTS</Label>
                <Input placeholder="e.g. IT101, IT102" />
              </div>
            </div>
            {(selectedClassification === 'Part-Time' || selectedClassification === 'Part-Time Full Load') && (
              <div className="py-4 border-t">
                <AvailabilityScheduler value={availability} onChange={setAvailability} />
              </div>
            )}
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
              <Button style={{ backgroundColor: '#002B7F', color: 'white' }} onClick={() => setIsAddDialogOpen(false)}>Save Faculty</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search faculty..."
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
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger>
              <SelectValue placeholder="All Classifications" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classifications</SelectItem>
              <SelectItem value="Full-Time">Full-Time</SelectItem>
              <SelectItem value="Part-Time">Part-Time</SelectItem>
              <SelectItem value="Part-Time Full Load">Part-Time Full Load</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="ACTIVE">Active</SelectItem>
              <SelectItem value="ON LOA">On LOA</SelectItem>
              <SelectItem value="EMERGENCY LEAVE">Emergency Leave</SelectItem>
              <SelectItem value="INACTIVE">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2" style={{ borderColor: '#002B7F' }}>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>FACULTY ID</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>NAME</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>DEPARTMENT</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>CLASSIFICATION</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>CURRENT LOAD</th>
                <th className="text-left py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>STATUS</th>
                <th className="text-center py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.map((faculty) => (
                <tr key={faculty.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4" style={{ color: '#002B7F', fontWeight: 600 }}>{faculty.id}</td>
                  <td className="py-3 px-4" style={{ color: '#333333', fontWeight: 500 }}>{faculty.name}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{faculty.department}</td>
                  <td className="py-3 px-4" style={{ color: '#666666' }}>{faculty.classification}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(faculty.loadValue / faculty.maxLoad) * 100}%`,
                            backgroundColor: getLoadColor(faculty.loadValue, faculty.maxLoad)
                          }}
                        />
                      </div>
                      <span style={{ color: '#333333', fontWeight: 600 }}>{faculty.currentLoad}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className="px-3 py-1 rounded text-sm"
                      style={{ backgroundColor: '#22C55E', color: 'white', fontWeight: 600 }}
                    >
                      {faculty.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => {
                          setViewingFaculty(faculty);
                          setIsProfileOpen(true);
                        }}
                      >
                        <Eye size={18} style={{ color: '#666666' }} />
                      </button>
                      <button
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={() => {
                          setViewingFaculty(faculty);
                          setIsEditDialogOpen(true);
                        }}
                      >
                        <Edit size={18} style={{ color: '#666666' }} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Sheet open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <SheetContent className="w-[600px] sm:w-[600px] max-w-[95vw] overflow-y-auto p-0">
          <div className="p-6">
            <div className="mb-6">
              <h2 style={{ color: '#002B7F', fontWeight: 700, fontSize: '1.25rem' }}>Faculty Profile</h2>
            </div>
          {viewingFaculty && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded" style={{ backgroundColor: '#002B7F', color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>
                  {viewingFaculty.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <h3 style={{ color: '#002B7F', fontWeight: 700, fontSize: '1.125rem', marginBottom: 4 }}>
                    {viewingFaculty.name}
                  </h3>
                  <p style={{ color: '#666666', fontSize: '0.875rem', marginBottom: 8 }}>
                    {viewingFaculty.id} | {viewingFaculty.department}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: '#EF4444', color: 'white', fontWeight: 600 }}>
                      Inactive
                    </span>
                    <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
                      {viewingFaculty.classification}
                    </span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="profile">
                <TabsList className="w-full grid grid-cols-3 gap-2 bg-gray-100 p-1 rounded">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-white">Profile</TabsTrigger>
                  <TabsTrigger value="schedule" className="data-[state=active]:bg-white">Schedule</TabsTrigger>
                  <TabsTrigger value="availability" className="data-[state=active]:bg-white">Availability</TabsTrigger>
                </TabsList>
              <TabsContent value="profile" className="space-y-6 mt-6">
                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    PERSONAL INFORMATION
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Full Name</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.name}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Email</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.email}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Contact</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.contact}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Department</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.department}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Classification</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.classification}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Status</span>
                      <span style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem' }}>{viewingFaculty.status}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    WORKLOAD
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Current / Maximum</span>
                      <span style={{ color: '#002B7F', fontWeight: 700 }}>{viewingFaculty.currentLoad}</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: `${(viewingFaculty.loadValue / viewingFaculty.maxLoad) * 100}%`, backgroundColor: '#FFD400' }}></div>
                    </div>
                    <div className="pt-2">
                      <p style={{ color: '#666666', fontSize: '0.875rem', marginBottom: 8 }}>Assigned Subjects</p>
                      <div className="space-y-1">
                        <p style={{ color: '#002B7F', fontSize: '0.875rem' }}>CS106 - Web Development</p>
                        <p style={{ color: '#002B7F', fontSize: '0.875rem' }}>CS104 - Object-Oriented Programming</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <p style={{ color: '#666666', fontSize: '0.875rem', marginBottom: 8 }}>Assigned Sections</p>
                      <p style={{ color: '#002B7F', fontSize: '0.875rem' }}>BSIT 2A, BSIT 3A</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    ACTIONS
                  </h4>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" style={{ backgroundColor: '#002B7F', color: 'white', fontWeight: 600 }}>
                      <Edit size={16} className="mr-2" />
                      Edit Details
                    </Button>
                    <Button className="w-full justify-start" variant="outline" style={{ fontWeight: 600, borderColor: '#E5E7EB' }}>
                      <FileText size={16} className="mr-2" />
                      Manage Workload
                    </Button>
                    <Button className="w-full justify-start" variant="outline" style={{ fontWeight: 600, borderColor: '#E5E7EB' }}>
                      <Download size={16} className="mr-2" />
                      Generate Report
                    </Button>
                    <Button className="w-full justify-start" variant="outline" style={{ fontWeight: 600, borderColor: '#E5E7EB' }}>
                      <Target size={16} className="mr-2" />
                      Change Status
                    </Button>
                    <Button className="w-full justify-start" style={{ backgroundColor: '#EF4444', color: 'white', fontWeight: 600 }}>
                      <Archive size={16} className="mr-2" />
                      Archive Faculty
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="schedule" className="space-y-6 mt-6">
                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    SCHEDULE
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Monday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>No class</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Tuesday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>7:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Wednesday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>7:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Thursday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>7:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Friday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>No class</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Saturday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>No class</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    FCCE RECORDS
                  </h4>
                  <div className="space-y-2">
                    {['CS101', 'CS102', 'CS104', 'CS106', 'CS107'].map(code => (
                      <div key={code} className="flex justify-between items-center py-2">
                        <span style={{ color: '#002B7F', fontSize: '0.875rem', fontWeight: 600 }}>{code}</span>
                        <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: '#22C55E', color: 'white', fontWeight: 600 }}>
                          Qualified
                        </span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-2">
                      <span style={{ color: '#002B7F', fontSize: '0.875rem', fontWeight: 600 }}>GE103</span>
                      <span className="px-3 py-1 rounded text-xs" style={{ backgroundColor: '#999999', color: 'white', fontWeight: 600 }}>
                        Not Taken
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p style={{ color: '#666666', fontSize: '0.875rem', marginBottom: 4 }}>Specialization</p>
                    <p style={{ color: '#002B7F', fontSize: '0.875rem' }}>Software Engineering, Web Development</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="availability" className="space-y-6 mt-6">
                <div>
                  <h4 className="pb-2 mb-4" style={{ color: '#002B7F', fontWeight: 600, fontSize: '0.875rem', borderBottom: '2px solid #FFD400' }}>
                    AVAILABILITY
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Monday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Tuesday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Wednesday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Thursday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Friday</span>
                      <span style={{ color: '#002B7F', fontSize: '0.875rem' }}>07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span style={{ color: '#666666', fontSize: '0.875rem' }}>Saturday</span>
                      <span style={{ color: '#999999', fontSize: '0.875rem' }}>Not Available</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          )}
          </div>
        </SheetContent>
      </Sheet>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle style={{ color: '#002B7F', fontWeight: 700 }}>Edit Faculty</DialogTitle>
          </DialogHeader>
          {viewingFaculty && (
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>ID</Label>
                <Input value={viewingFaculty.id} readOnly />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>STATUS</Label>
                <Select defaultValue="Active">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>FIRST NAME</Label>
                <Input defaultValue={viewingFaculty.name.split(' ')[0]} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>MIDDLE NAME</Label>
                <Input placeholder="Middle name" />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>LAST NAME</Label>
                <Input defaultValue={viewingFaculty.name.split(' ').slice(-1)[0]} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>DEPARTMENT</Label>
                <Select defaultValue={viewingFaculty.department}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ICT">ICT</SelectItem>
                    <SelectItem value="Business Management">Business Management</SelectItem>
                    <SelectItem value="General Education">General Education</SelectItem>
                    <SelectItem value="TMHM">TMHM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>EMAIL</Label>
                <Input defaultValue={viewingFaculty.email} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CONTACT</Label>
                <Input defaultValue={viewingFaculty.contact} />
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>CLASSIFICATION</Label>
                <Select defaultValue={viewingFaculty.classification}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-Time">Full-Time</SelectItem>
                    <SelectItem value="Part-Time">Part-Time</SelectItem>
                    <SelectItem value="Part-Time Full Load">Part-Time Full Load</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>SPECIALIZATION</Label>
                <Input defaultValue={viewingFaculty.specialization} />
              </div>
              <div className="space-y-2 col-span-2">
                <Label className="text-xs" style={{ color: '#666666', fontWeight: 600, textTransform: 'uppercase' }}>PREFERRED SUBJECTS</Label>
                <Input defaultValue={viewingFaculty.preferredSubjects} />
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button style={{ backgroundColor: '#002B7F', color: 'white' }} onClick={() => setIsEditDialogOpen(false)}>Update</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
