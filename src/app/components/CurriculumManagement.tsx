import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Eye,
  Edit,
  Search,
  Plus,
  X,
  Printer,
  Download,
  Upload,
} from "lucide-react";

interface CurriculumManagementProps {
  userRole?: "admin" | "program-head" | "faculty" | null;
}

export function CurriculumManagement({
  userRole,
}: CurriculumManagementProps) {
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchCurriculumOpen, setIsSearchCurriculumOpen] =
    useState(false);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] =
    useState<any>(null);
  const [selectedCampus, setSelectedCampus] = useState("all");
  const [selectedCareer, setSelectedCareer] = useState("all");
  const [
    selectedCurriculumVersion,
    setSelectedCurriculumVersion,
  ] = useState("all");
  const [selectedAcademicYear, setSelectedAcademicYear] =
    useState("2025-2026");
  const isViewOnly = userRole === "program-head";

  const searchableCourses = [
    {
      code: "IT401",
      title: "Advanced Web Development",
      credit: 3,
      lec: 1,
      lab: 2,
      program: "BSIT 2023",
    },
    {
      code: "IT402",
      title: "Mobile App Development",
      credit: 3,
      lec: 1,
      lab: 2,
      program: "BSIT 2023",
    },
    {
      code: "CS301",
      title: "Algorithm Analysis",
      credit: 3,
      lec: 3,
      lab: 0,
      program: "BSIT 2023",
    },
    {
      code: "CS302",
      title: "Operating Systems",
      credit: 3,
      lec: 2,
      lab: 1,
      program: "BSIT 2023",
    },
    {
      code: "BM301",
      title: "Financial Management",
      credit: 3,
      lec: 3,
      lab: 0,
      program: "BSBA 2023",
    },
  ];

  const curriculumData = {
    "BSIT 2023": [
      {
        code: "IT101",
        title: "Introduction to Computing",
        credit: 3,
        lec: 2,
        lab: 1,
        preReq: "—",
        status: "ACTIVE",
      },
      {
        code: "IT102",
        title: "Computer Programming 1",
        credit: 3,
        lec: 2,
        lab: 1,
        preReq: "IT101",
        status: "ACTIVE",
      },
      {
        code: "IT201",
        title: "Computer Programming 2",
        credit: 3,
        lec: 2,
        lab: 1,
        preReq: "IT102",
        status: "ACTIVE",
      },
      {
        code: "IT301",
        title: "Web Development",
        credit: 3,
        lec: 1,
        lab: 2,
        preReq: "IT201",
        status: "ACTIVE",
      },
      {
        code: "CS101",
        title: "Discrete Mathematics",
        credit: 3,
        lec: 3,
        lab: 0,
        preReq: "—",
        status: "ACTIVE",
      },
      {
        code: "CS201",
        title: "Data Structures",
        credit: 3,
        lec: 2,
        lab: 1,
        preReq: "CS101",
        status: "ACTIVE",
      },
    ],
    "BSBA 2023": [
      {
        code: "BM101",
        title: "Principles of Management",
        credit: 3,
        lec: 3,
        lab: 0,
        preReq: "—",
        status: "ACTIVE",
      },
      {
        code: "BM201",
        title: "Marketing Management",
        credit: 3,
        lec: 3,
        lab: 0,
        preReq: "BM101",
        status: "ACTIVE",
      },
    ],
  };

  const programs = Object.keys(curriculumData);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl mb-1"
            style={{ color: "#002B7F", fontWeight: 700 }}
          >
            Curriculum Management {isViewOnly && "(View Only)"}
          </h1>
        </div>
        {!isViewOnly && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              style={{
                color: "#002B7F",
                borderColor: "#002B7F",
                fontWeight: 600,
              }}
            >
              <Printer size={18} className="mr-2" />
              Print Curriculum
            </Button>
            <Button
              variant="outline"
              style={{
                color: "#002B7F",
                borderColor: "#002B7F",
                fontWeight: 600,
              }}
            >
              <Download size={18} className="mr-2" />
              Download Template
            </Button>
            <Button
              variant="outline"
              style={{
                color: "#002B7F",
                borderColor: "#002B7F",
                fontWeight: 600,
              }}
            >
              <Upload size={18} className="mr-2" />
              Bulk Import
            </Button>
            <Button
              style={{
                backgroundColor: "#002B7F",
                color: "white",
                fontWeight: 600,
              }}
              onClick={() => setIsSearchCurriculumOpen(true)}
            >
              <Plus size={18} className="mr-2" />
              Add Course
            </Button>
          </div>
        )}
      </div>

      {!isViewOnly && (
        <Card className="p-4 border border-gray-200">
          <div className="flex gap-3 items-center">
            <Select
              value={selectedCampus}
              onValueChange={setSelectedCampus}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Campus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Campus</SelectItem>
                <SelectItem value="balagtas">
                  Balagtas
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedProgram}
              onValueChange={setSelectedProgram}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Programs
                </SelectItem>
                <SelectItem value="BSIT 2023">
                  BSIT 2023
                </SelectItem>
                <SelectItem value="BSBA 2023">
                  BSBA 2023
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedCareer}
              onValueChange={setSelectedCareer}
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Career" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Careers</SelectItem>
                <SelectItem value="undergraduate">
                  Undergraduate
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedCurriculumVersion}
              onValueChange={setSelectedCurriculumVersion}
            >
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Curriculum Version" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  All Versions
                </SelectItem>
                <SelectItem value="2023">
                  Version 2023
                </SelectItem>
                <SelectItem value="2024">
                  Version 2024
                </SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedAcademicYear}
              onValueChange={setSelectedAcademicYear}
            >
              <SelectTrigger className="w-44">
                <SelectValue placeholder="Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-2026">
                  2025-2026
                </SelectItem>
                <SelectItem value="2024-2025">
                  2024-2025
                </SelectItem>
                <SelectItem value="2023-2024">
                  2023-2024
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
      )}

      <Card className="p-6 border border-gray-200">
        <div className="flex gap-4 mb-6">
          <Select
            value={selectedProgram}
            onValueChange={setSelectedProgram}
          >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="All Programs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programs</SelectItem>
              <SelectItem value="BSIT 2023">
                BSIT 2023
              </SelectItem>
              <SelectItem value="BSBA 2023">
                BSBA 2023
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {(selectedProgram === "all"
          ? programs
          : [selectedProgram]
        ).map((program) => (
          <div key={program} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2
                className="text-xl"
                style={{ color: "#002B7F", fontWeight: 700 }}
              >
                {program}
              </h2>
              <span
                style={{ color: "#002B7F", fontWeight: 600 }}
              >
                {
                  curriculumData[
                    program as keyof typeof curriculumData
                  ].length
                }{" "}
                COURSES
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr
                    className="border-b-2"
                    style={{ borderColor: "#002B7F" }}
                  >
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      CODE
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      TITLE
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      CREDIT
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      LEC
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      LAB
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      PRE-REQ
                    </th>
                    <th
                      className="text-left py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      STATUS
                    </th>
                    <th
                      className="text-center py-3 px-4"
                      style={{
                        color: "#002B7F",
                        fontWeight: 600,
                      }}
                    >
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {curriculumData[
                    program as keyof typeof curriculumData
                  ].map((course) => (
                    <tr
                      key={course.code}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td
                        className="py-3 px-4"
                        style={{
                          color: "#002B7F",
                          fontWeight: 600,
                        }}
                      >
                        {course.code}
                      </td>
                      <td
                        className="py-3 px-4"
                        style={{ color: "#333333" }}
                      >
                        {course.title}
                      </td>
                      <td
                        className="py-3 px-4"
                        style={{ color: "#666666" }}
                      >
                        {course.credit}
                      </td>
                      <td
                        className="py-3 px-4"
                        style={{ color: "#666666" }}
                      >
                        {course.lec}
                      </td>
                      <td
                        className="py-3 px-4"
                        style={{ color: "#666666" }}
                      >
                        {course.lab}
                      </td>
                      <td
                        className="py-3 px-4"
                        style={{ color: "#666666" }}
                      >
                        {course.preReq}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className="px-3 py-1 rounded text-sm"
                          style={{
                            backgroundColor: "#22C55E",
                            color: "white",
                            fontWeight: 600,
                          }}
                        >
                          {course.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2 justify-center">
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Eye
                              size={18}
                              style={{ color: "#666666" }}
                            />
                          </button>
                          {!isViewOnly && (
                            <button className="p-1 hover:bg-gray-100 rounded">
                              <Edit
                                size={18}
                                style={{ color: "#666666" }}
                              />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </Card>

      <Dialog
        open={isSearchCurriculumOpen}
        onOpenChange={setIsSearchCurriculumOpen}
      >
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle
              style={{ color: "#002B7F", fontWeight: 700 }}
            >
              Search Curriculum
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="mb-4">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Search courses by code or title..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {searchableCourses.map((course) => (
                <div
                  key={course.code}
                  className="flex items-center justify-between p-4 border rounded hover:bg-gray-50"
                >
                  <div className="flex items-center gap-6">
                    <span
                      style={{
                        color: "#002B7F",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        minWidth: 80,
                      }}
                    >
                      {course.code}
                    </span>
                    <span
                      style={{
                        color: "#333333",
                        fontSize: "0.875rem",
                        flex: 1,
                      }}
                    >
                      {course.title}
                    </span>
                    <span
                      style={{
                        color: "#666666",
                        fontSize: "0.875rem",
                        minWidth: 60,
                      }}
                    >
                      {course.credit}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "#002B7F",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      setSelectedCourse(course);
                      setIsSearchCurriculumOpen(false);
                      setIsAddCourseOpen(true);
                    }}
                  >
                    Select
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => {
                setIsSearchCurriculumOpen(false);
                setIsAddCourseOpen(true);
              }}
            >
              Create New Course
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsSearchCurriculumOpen(false)}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isAddCourseOpen}
        onOpenChange={setIsAddCourseOpen}
      >
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle
              style={{ color: "#002B7F", fontWeight: 700 }}
            >
              Add Course
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-6 py-6">
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                COURSE CODE
              </Label>
              <Input
                placeholder="e.g. IT401"
                defaultValue={selectedCourse?.code || ""}
              />
            </div>
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                PROGRAM
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="BSIT 2023" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BSIT 2023">
                    BSIT 2023
                  </SelectItem>
                  <SelectItem value="BSBA 2023">
                    BSBA 2023
                  </SelectItem>
                  <SelectItem value="BSHM 2023">
                    BSHM 2023
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                COURSE TITLE
              </Label>
              <Input
                placeholder="e.g. Advanced Web Development"
                defaultValue={selectedCourse?.title || ""}
              />
            </div>
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                CREDIT
              </Label>
              <Input type="number" placeholder="3" />
            </div>
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                LEC HOURS
              </Label>
              <Input type="number" placeholder="2" />
            </div>
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                LAB HOURS
              </Label>
              <Input type="number" placeholder="1" />
            </div>
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                STATUS
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Active" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">
                    Inactive
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsAddCourseOpen(false)}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#002B7F",
                color: "white",
              }}
              onClick={() => {
                setIsAddCourseOpen(false);
                setSelectedCourse(null);
              }}
            >
              <Plus size={18} className="mr-2" />
              Add Course
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}