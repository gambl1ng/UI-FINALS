import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
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
import { Label } from "./ui/label";
import { Printer, Plus, Sparkles } from "lucide-react";

interface MasterScheduleProps {
  userRole?: "admin" | "program-head" | "faculty" | null;
  userInfo?: { name: string; role: string };
}

export function MasterSchedule({
  userRole,
  userInfo,
}: MasterScheduleProps) {
  const [selectedSection, setSelectedSection] =
    useState("BSIT-1A");
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);
  const [selectedAcademicYear, setSelectedAcademicYear] =
    useState("2025-2026");

  const isFaculty = userRole === "faculty";

  const timeSlots = [
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const schedule = {
    MON: [
      {
        time: "7:00 AM",
        subject: "CS101",
        room: "CompLab 201",
        faculty: "Alejandro",
      },
      {
        time: "9:00 AM",
        subject: "CS102",
        room: "CompLab 201",
        faculty: "Ma",
      },
    ],
    TUE: [
      {
        time: "8:00 AM",
        subject: "IT301",
        room: "CompLab 202",
        faculty: "Alejandro",
      },
    ],
    WED: [
      {
        time: "7:00 AM",
        subject: "CS101",
        room: "Lecture Room 101",
        faculty: "Rosa",
      },
    ],
    THU: [
      {
        time: "8:00 AM",
        subject: "DB201",
        room: "CompLab 201",
        faculty: "Ma",
      },
    ],
    FRI: [
      {
        time: "8:00 AM",
        subject: "NET101",
        room: "CompLab 202",
        faculty: "John",
      },
    ],
    SAT: [
      {
        time: "1:00 PM",
        subject: "MATH101",
        room: "Lecture Room 101",
        faculty: "Mark",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-2xl mb-1"
            style={{ color: "#002B7F", fontWeight: 700 }}
          >
            {isFaculty
              ? `My Schedule — ${userInfo?.name || "Faculty"}`
              : `Master Schedule — ${selectedSection}`}
          </h1>
        </div>
        <div className="flex gap-2">
          <Select
            value={selectedAcademicYear}
            onValueChange={setSelectedAcademicYear}
          >
            <SelectTrigger className="w-44">
              <SelectValue />
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
          <Button
            style={{
              backgroundColor: "white",
              color: "#002B7F",
              border: "1px solid #002B7F",
              fontWeight: 600,
            }}
          >
            <Printer size={18} className="mr-2" />
            Print
          </Button>
          {!isFaculty && (
            <Button
              style={{
                backgroundColor: "#22C55E",
                color: "white",
                fontWeight: 600,
              }}
            >
              Post All
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="p-6 border border-gray-200">
          {!isFaculty ? (
            <>
              <h3
                className="text-base mb-4"
                style={{ color: "#002B7F", fontWeight: 600 }}
              >
                SECTION
              </h3>
              <Select
                value={selectedSection}
                onValueChange={setSelectedSection}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BSIT-1A">
                    BSIT-1A
                  </SelectItem>
                  <SelectItem value="BSIT-1B">
                    BSIT-1B
                  </SelectItem>
                  <SelectItem value="BSIT-2A">
                    BSIT-2A
                  </SelectItem>
                  <SelectItem value="BSBA-1A">
                    BSBA-1A
                  </SelectItem>
                  <SelectItem value="BSHM-1A">
                    BSHM-1A
                  </SelectItem>
                </SelectContent>
              </Select>

              <div className="mt-6 space-y-3">
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Program
                  </p>
                  <p
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                    }}
                  >
                    BSIT
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Year Level
                  </p>
                  <p
                    style={{
                      color: "#333333",
                      fontWeight: 600,
                    }}
                  >
                    1
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Capacity
                  </p>
                  <p
                    style={{
                      color: "#333333",
                      fontWeight: 600,
                    }}
                  >
                    40
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Faculty Credit
                  </p>
                  <p
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                    }}
                  >
                    24 units
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Total Classes
                  </p>
                  <p
                    style={{
                      color: "#333333",
                      fontWeight: 600,
                    }}
                  >
                    8
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <Button
                  className="w-full"
                  style={{
                    backgroundColor: "#002B7F",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={18} className="mr-2" />
                  AI Generate
                </Button>
                <Button
                  className="w-full"
                  style={{
                    backgroundColor: "#FFD400",
                    color: "#002B7F",
                    fontWeight: 600,
                  }}
                  onClick={() => setIsAddEntryOpen(true)}
                >
                  <Plus size={18} className="mr-2" />
                  Add Entry
                </Button>
              </div>
            </>
          ) : (
            <>
              <h3
                className="text-base mb-4"
                style={{ color: "#002B7F", fontWeight: 600 }}
              >
                FACULTY INFO
              </h3>
              <div className="space-y-3">
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Name
                  </p>
                  <p
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                    }}
                  >
                    {userInfo?.name}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Department
                  </p>
                  <p
                    style={{
                      color: "#333333",
                      fontWeight: 600,
                    }}
                  >
                    ICT
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Current Load
                  </p>
                  <p
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                    }}
                  >
                    15/30 units
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "#666666" }}
                  >
                    Total Classes
                  </p>
                  <p
                    style={{
                      color: "#333333",
                      fontWeight: 600,
                    }}
                  >
                    5
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="mt-6">
            <h4
              className="text-xs mb-3"
              style={{
                color: "#666666",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              LEGEND
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 border-2"
                  style={{ borderColor: "#002B7F" }}
                ></div>
                <span
                  className="text-sm"
                  style={{ color: "#666666" }}
                >
                  Gen. Ed.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4"
                  style={{ backgroundColor: "#FFD400" }}
                ></div>
                <span
                  className="text-sm"
                  style={{ color: "#666666" }}
                >
                  Major
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 border-2"
                  style={{
                    borderColor: "#002B7F",
                    backgroundColor: "#002B7F",
                  }}
                ></div>
                <span
                  className="text-sm"
                  style={{ color: "#666666" }}
                >
                  Laboratory
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="lg:col-span-3">
          <Card className="p-6 border border-gray-200 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th
                    className="text-left py-3 px-4 w-24"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    TIME
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    MON
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    TUE
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    WED
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    THU
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    FRI
                  </th>
                  <th
                    className="text-center py-3 px-4"
                    style={{
                      color: "#002B7F",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}
                  >
                    SAT
                  </th>
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time) => (
                  <tr
                    key={time}
                    className="border-t border-gray-200"
                  >
                    <td
                      className="py-2 px-4 text-xs"
                      style={{
                        color: "#666666",
                        fontWeight: 500,
                      }}
                    >
                      {time}
                    </td>
                    {[
                      "MON",
                      "TUE",
                      "WED",
                      "THU",
                      "FRI",
                      "SAT",
                    ].map((day) => {
                      const classItem = schedule[
                        day as keyof typeof schedule
                      ]?.find((s) => s.time === time);
                      return (
                        <td key={day} className="py-2 px-2">
                          {classItem ? (
                            <div
                              className="p-2 rounded text-xs cursor-pointer hover:opacity-80"
                              style={{
                                backgroundColor:
                                  classItem.subject.startsWith(
                                    "CS",
                                  )
                                    ? "#FFD400"
                                    : "#E3F2FD",
                                border: "1px solid",
                                borderColor:
                                  classItem.subject.startsWith(
                                    "CS",
                                  )
                                    ? "#FFD400"
                                    : "#002B7F",
                              }}
                            >
                              <div
                                style={{
                                  color: "#002B7F",
                                  fontWeight: 700,
                                }}
                              >
                                {classItem.subject}
                              </div>
                              <div
                                style={{
                                  color: "#666666",
                                  fontSize: "0.65rem",
                                }}
                              >
                                {classItem.room}
                              </div>
                              <div
                                style={{
                                  color: "#666666",
                                  fontSize: "0.65rem",
                                }}
                              >
                                {classItem.faculty}
                              </div>
                            </div>
                          ) : (
                            <div className="h-16"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>

      <Dialog
        open={isAddEntryOpen}
        onOpenChange={setIsAddEntryOpen}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle
              style={{ color: "#002B7F", fontWeight: 700 }}
            >
              Add Schedule Entry
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-6 py-6">
            <div className="space-y-2">
              <Label
                className="text-xs"
                style={{
                  color: "#666666",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                SUBJECT
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="CS101 — Introduction to Computing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CS101">
                    CS101 — Introduction to Computing
                  </SelectItem>
                  <SelectItem value="IT102">
                    IT102 — Computer Programming 1
                  </SelectItem>
                  <SelectItem value="IT201">
                    IT201 — Computer Programming 2
                  </SelectItem>
                </SelectContent>
              </Select>
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
                ROOM
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="RM-101 — Lecture Room 101 (40)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="RM-101">
                    RM-101 — Lecture Room 101 (40)
                  </SelectItem>
                  <SelectItem value="CL-101">
                    CL-101 — Computer Lab A (30)
                  </SelectItem>
                  <SelectItem value="CL-102">
                    CL-102 — Computer Lab B (30)
                  </SelectItem>
                </SelectContent>
              </Select>
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
                FACULTY
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Alejandro Burgos Jr." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Alejandro">
                    Alejandro Burgos Jr.
                  </SelectItem>
                  <SelectItem value="Ma">
                    Ma. Claret R. Delos Santos
                  </SelectItem>
                  <SelectItem value="John">
                    John Vincent C. Malquisto
                  </SelectItem>
                </SelectContent>
              </Select>
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
                DAY
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Monday" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Monday">Monday</SelectItem>
                  <SelectItem value="Tuesday">
                    Tuesday
                  </SelectItem>
                  <SelectItem value="Wednesday">
                    Wednesday
                  </SelectItem>
                  <SelectItem value="Thursday">
                    Thursday
                  </SelectItem>
                  <SelectItem value="Friday">Friday</SelectItem>
                  <SelectItem value="Saturday">
                    Saturday
                  </SelectItem>
                </SelectContent>
              </Select>
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
                FROM
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="7:00 AM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7:00 AM">
                    7:00 AM
                  </SelectItem>
                  <SelectItem value="8:00 AM">
                    8:00 AM
                  </SelectItem>
                  <SelectItem value="9:00 AM">
                    9:00 AM
                  </SelectItem>
                  <SelectItem value="10:00 AM">
                    10:00 AM
                  </SelectItem>
                  <SelectItem value="11:00 AM">
                    11:00 AM
                  </SelectItem>
                  <SelectItem value="12:00 PM">
                    12:00 PM
                  </SelectItem>
                  <SelectItem value="1:00 PM">
                    1:00 PM
                  </SelectItem>
                  <SelectItem value="2:00 PM">
                    2:00 PM
                  </SelectItem>
                  <SelectItem value="3:00 PM">
                    3:00 PM
                  </SelectItem>
                  <SelectItem value="4:00 PM">
                    4:00 PM
                  </SelectItem>
                  <SelectItem value="5:00 PM">
                    5:00 PM
                  </SelectItem>
                </SelectContent>
              </Select>
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
                TO
              </Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="9:00 AM" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8:00 AM">
                    8:00 AM
                  </SelectItem>
                  <SelectItem value="9:00 AM">
                    9:00 AM
                  </SelectItem>
                  <SelectItem value="10:00 AM">
                    10:00 AM
                  </SelectItem>
                  <SelectItem value="11:00 AM">
                    11:00 AM
                  </SelectItem>
                  <SelectItem value="12:00 PM">
                    12:00 PM
                  </SelectItem>
                  <SelectItem value="1:00 PM">
                    1:00 PM
                  </SelectItem>
                  <SelectItem value="2:00 PM">
                    2:00 PM
                  </SelectItem>
                  <SelectItem value="3:00 PM">
                    3:00 PM
                  </SelectItem>
                  <SelectItem value="4:00 PM">
                    4:00 PM
                  </SelectItem>
                  <SelectItem value="5:00 PM">
                    5:00 PM
                  </SelectItem>
                  <SelectItem value="6:00 PM">
                    6:00 PM
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsAddEntryOpen(false)}
            >
              Cancel
            </Button>
            <Button
              style={{
                backgroundColor: "#002B7F",
                color: "white",
              }}
              onClick={() => setIsAddEntryOpen(false)}
            >
              <Plus size={18} className="mr-2" />
              Add
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}