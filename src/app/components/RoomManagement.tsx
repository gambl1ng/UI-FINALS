import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
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
  DialogTrigger,
} from "./ui/dialog";
import { Eye, Edit, Trash2, Search, Plus } from "lucide-react";

interface RoomManagementProps {
  userRole?: "admin" | "program-head" | "faculty" | null;
}

export function RoomManagement({
  userRole,
}: RoomManagementProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const isViewOnly = userRole === "program-head";

  const rooms = [
    {
      code: "101",
      name: "Room 101",
      building: "Annex Building",
      floor: "1st Floor",
      type: "Lecture Room",
      capacity: 40,
      status: "Ready",
    },
    {
      code: "202",
      name: "Room 202",
      building: "Old Building",
      floor: "2nd Floor",
      type: "Lecture Room",
      capacity: 40,
      status: "In Use",
    },
    {
      code: "115",
      name: "Room 201",
      building: "Annex Building",
      floor: "1st Floor",
      type: "Lecture Room",
      capacity: 40,
      status: "Ready",
    },
    {
      code: "ComLab A",
      name: "Computer Lab A",
      building: "Old Building",
      floor: "1st Floor",
      type: "Computer Laboratory A",
      capacity: 30,
      status: "In Use",
    },
    {
      code: "ComLab B",
      name: "Computer Lab B",
      building: "Old Building",
      floor: "1st Floor",
      type: "Computer Laboratory B",
      capacity: 30,
      status: "Ready",
    },
    {
      code: "ComLab C",
      name: "Computer Lab C",
      building: "Annex Building",
      floor: "1st Floor",
      type: "Computer Laboratory C",
      capacity: 40,
      status: "Reserved",
    },
  ];

  const filteredRooms = rooms.filter((room) => {
    const matchesSearch =
      room.code
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      room.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" || room.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" ||
      room.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#002B7F]">
          Room Management {isViewOnly && "(View Only)"}
        </h1>
        {!isViewOnly && (
          <Dialog
            open={isAddDialogOpen}
            onOpenChange={setIsAddDialogOpen}
          >
            <DialogTrigger asChild>
              <Button className="bg-[#002B7F] hover:bg-[#002B7F]/90 text-white font-semibold">
                <Plus size={18} className="mr-2" /> Add Room
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-[#002B7F]">
                  Add Room
                </DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <Card className="p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Input
            placeholder="Search room..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            value={selectedType}
            onValueChange={setSelectedType}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Lecture Room">
                Lecture Room
              </SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={selectedStatus}
            onValueChange={setSelectedStatus}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Ready">Ready</SelectItem>
              <SelectItem value="In Use">In Use</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#002B7F]">
                {[
                  "CODE",
                  "NAME",
                  "BUILDING",
                  "FLOOR",
                  "TYPE",
                  "CAPACITY",
                  "STATUS",
                  "ACTIONS",
                ].map((header) => (
                  <th
                    key={header}
                    className="text-left py-3 px-4 text-[#002B7F] font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((room) => (
                <tr
                  key={room.code}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 font-semibold text-[#002B7F]">
                    {room.code}
                  </td>
                  <td className="py-3 px-4 font-medium text-[#333]">
                    {room.name}
                  </td>
                  <td className="py-3 px-4 text-[#002B7F]">
                    {room.building}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {room.floor}
                  </td>
                  <td className="py-3 px-4 text-gray-600">
                    {room.type}
                  </td>
                  <td className="py-3 px-4 font-semibold">
                    {room.capacity}
                  </td>
                  {/* Dito inalis ang background color */}
                  <td className="py-3 px-4 font-medium text-gray-700">
                    {room.status}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye size={18} />
                      </Button>
                      {!isViewOnly && (
                        <>
                          <Button variant="ghost" size="icon">
                            <Edit size={18} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2
                              size={18}
                              className="text-red-500"
                            />
                          </Button>
                        </>
                      )}
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