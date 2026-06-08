import { Card } from "./ui/card";
import {
  Calendar,
  Clock,
  DoorOpen,
  Brain,
  BookOpen,
} from "lucide-react";

export function FacultyDashboard() {
  const stats = [
    {
      label: "Total Classes",
      value: "6",
      icon: BookOpen,
      color: "#002B7F",
    },
    {
      label: "Teaching Hours",
      value: "18",
      icon: Clock,
      color: "#002B7F",
    },
    {
      label: "Assigned Rooms",
      value: "4",
      icon: DoorOpen,
      color: "#002B7F",
    },
  ];

  const todaySchedule = [
    {
      time: "7:00 AM - 9:00 AM",
      subject: "Data Structures",
      section: "BSIT-2A",
      room: "Lab 301",
    },
    {
      time: "9:00 AM - 11:00 AM",
      subject: "Web Development",
      section: "BSIT-3A",
      room: "Lab 302",
    },
    {
      time: "1:00 PM - 3:00 PM",
      subject: "Database Management",
      section: "BSIT-2B",
      room: "Room 205",
    },
  ];

  const weeklySchedule = [
    { day: "Monday", classes: 3, hours: 6 },
    { day: "Tuesday", classes: 2, hours: 4 },
    { day: "Wednesday", classes: 3, hours: 6 },
    { day: "Thursday", classes: 0, hours: 0 },
    { day: "Friday", classes: 2, hours: 4 },
    { day: "Saturday", classes: 1, hours: 2 },
  ];

  const aiInsights = [
    {
      title: "Schedule Overview",
      description:
        "Your schedule is well-balanced with adequate preparation time between classes",
    },
    {
      title: "Room Assignments",
      description:
        "All assigned rooms match your subject requirements and student capacity",
    },
    {
      title: "Teaching Load",
      description:
        "Current load is 18/24 units - within optimal range for quality instruction",
    },
    {
      title: "Upcoming Classes",
      description:
        "Next class: Data Structures at 7:00 AM in Lab 301",
    },
  ];

  const calendarDays = [
    { day: "Sun", date: 1 },
    { day: "Mon", date: 2 },
    { day: "Tue", date: 3 },
    { day: "Wed", date: 4 },
    { day: "Thu", date: 5 },
    { day: "Fri", date: 6 },
    { day: "Sat", date: 7 },
    { day: "Sun", date: 8 },
    { day: "Mon", date: 9 },
    { day: "Tue", date: 10 },
    { day: "Wed", date: 11 },
    { day: "Thu", date: 12 },
    { day: "Fri", date: 13 },
    { day: "Sat", date: 14 },
    { day: "Sun", date: 15 },
    { day: "Mon", date: 16 },
    { day: "Tue", date: 17 },
    { day: "Wed", date: 18 },
    { day: "Thu", date: 19 },
    { day: "Fri", date: 20 },
    { day: "Sat", date: 21 },
    { day: "Sun", date: 22 },
    { day: "Mon", date: 23 },
    { day: "Tue", date: 24 },
    { day: "Wed", date: 25 },
    { day: "Thu", date: 26 },
    { day: "Fri", date: 27 },
    { day: "Sat", date: 28 },
    { day: "Sun", date: 29 },
    { day: "Mon", date: 30 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1
          className="text-2xl mb-1"
          style={{ color: "#002B7F", fontWeight: 700 }}
        >
          Welcome back, Sir JV!
        </h1>
        <p style={{ color: "#666666", fontWeight: 400 }}>
          ICT Department - Your Teaching Schedule and Load
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.label}
              className="p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <Icon size={24} style={{ color: stat.color }} />
              </div>
              <div
                className="text-3xl mb-1"
                style={{ color: "#002B7F", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: "#666666", fontWeight: 500 }}
              >
                {stat.label}
              </div>
            </Card>
          );
        })}
      </div>

      <Card
        className="p-6 border-2"
        style={{ borderColor: "#002B7F" }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Brain size={24} style={{ color: "#002B7F" }} />
          <h3
            className="text-xl"
            style={{ color: "#002B7F", fontWeight: 700 }}
          >
            AI Schedule Insights
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiInsights.map((insight, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border-2"
              style={{
                borderColor: "#FFD400",
                backgroundColor: "#FFFBEB",
              }}
            >
              <div
                style={{
                  color: "#002B7F",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {insight.title}
              </div>
              <div
                style={{
                  color: "#666666",
                  fontSize: "0.875rem",
                }}
              >
                {insight.description}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={20} style={{ color: "#002B7F" }} />
            <h3
              className="text-lg"
              style={{ color: "#002B7F", fontWeight: 600 }}
            >
              Today's Schedule
            </h3>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((schedule, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border-2"
                style={{ borderColor: "#002B7F" }}
              >
                <div
                  style={{
                    color: "#002B7F",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {schedule.time}
                </div>
                <div
                  style={{
                    color: "#333333",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {schedule.subject}
                </div>
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      color: "#666666",
                      fontSize: "0.875rem",
                    }}
                  >
                    {schedule.section}
                  </span>
                  <span
                    className="px-3 py-1 rounded text-sm"
                    style={{
                      backgroundColor: "#FFD400",
                      color: "#002B7F",
                      fontWeight: 600,
                    }}
                  >
                    {schedule.room}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={20} style={{ color: "#002B7F" }} />
            <h3
              className="text-lg"
              style={{ color: "#002B7F", fontWeight: 600 }}
            >
              Weekly Overview
            </h3>
          </div>
          <div className="space-y-3">
            {weeklySchedule.map((schedule) => (
              <div
                key={schedule.day}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
              >
                <span
                  style={{ color: "#333333", fontWeight: 600 }}
                >
                  {schedule.day}
                </span>
                <div className="flex items-center gap-4">
                  <span
                    style={{
                      color: "#666666",
                      fontSize: "0.875rem",
                    }}
                  >
                    {schedule.classes}{" "}
                    {schedule.classes === 1
                      ? "class"
                      : "classes"}
                  </span>
                  <span
                    style={{
                      color: "#002B7F",
                      fontWeight: 700,
                    }}
                  >
                    {schedule.hours}h
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-gray-200">
          <h3
            className="text-base mb-4"
            style={{ color: "#002B7F", fontWeight: 600 }}
          >
            June 2026
          </h3>
          <div className="grid grid-cols-7 gap-1">
            {["S", "M", "T", "W", "T", "F", "S"].map(
              (day, i) => (
                <div
                  key={i}
                  className="text-center text-xs"
                  style={{ color: "#666666", fontWeight: 600 }}
                >
                  {day}
                </div>
              ),
            )}
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className="aspect-square flex items-center justify-center rounded text-xs"
                style={{
                  borderWidth: day.date === 8 ? "2px" : "1px",
                  borderColor:
                    day.date === 8 ? "#002B7F" : "#E5E7EB",
                  backgroundColor:
                    day.date === 8 ? "#002B7F" : "white",
                  color: day.date === 8 ? "white" : "#333333",
                  fontWeight: day.date === 8 ? 700 : 400,
                }}
              >
                {day.date}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}