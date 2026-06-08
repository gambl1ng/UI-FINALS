CREATE A COMPLETE ENTERPRISE-GRADE WEB APPLICATION CALLED "SCHEDULOGIC" FOR STI COLLEGE BALAGTAS.

The system must be a professional academic scheduling and faculty management platform designed for Administrators, Program Heads, and Faculty Members. The final design should look like a real university ERP system currently deployed in production, similar to PowerSchool, Workday, Ellucian Banner, or Oracle PeopleSoft.

DESIGN REQUIREMENTS:

Use STI branding colors only:

Primary Color: #002B7F (STI Blue)

Accent Color: #FFD400 (STI Yellow)

Background: #FFFFFF

Text Color: #333333

Success: #22C55E

Warning: #F59E0B

Danger: #EF4444

Font Family: Inter

Avoid cartoon designs, AI-generated appearance, rounded bubble UI, excessive shadows, glassmorphism, decorative illustrations, emojis, gaming dashboards, or unnecessary animations.

The interface must appear realistic, professional, and production-ready.

USER ROLES:

ADMIN

Full system access.
Manage faculty, sections, curriculum, subjects, rooms, schedules, reports, archives, users, and settings.

PROGRAM HEAD

Access only their assigned department.
View and edit department schedules.
View faculty within their department.
Generate schedules.
Access reports for their department only.

FACULTY

View-only access.
View assigned schedules, sections, rooms, and teaching loads.
Download and print schedules.

DEPARTMENTS:

ICT
Business Management
General Education
TMHM

SIDEBAR MODULES:

Dashboard
Curriculum
Faculty Hub
Section 
Subject 
Room 
Master Schedule
Reports
Archives
Audit Logs
Settings
Logout

BREADCRUMB NAVIGATION:

Display on every page.

Example:

Dashboard > Faculty Hub > Faculty Profile

DASHBOARD:

Create a modern academic operations dashboard containing:

Total Faculty
Total Subjects
Total Sections
Total Rooms
Active Schedules

Alerts and Conflicts Panel:

Faculty Conflicts
Room Conflicts
Schedule Conflicts

Room Utilization Panel:

Available Rooms
Occupied Rooms
Reserved Rooms

Faculty Workload Breakdown:

Full-Time
Part-Time
Part-Time Full Load

AI Scheduling Insights:

Faculty Assignment Suggestions
Conflict Detection
Room Optimization Suggestions
Workload Balancing Suggestions

Recent Activities Feed:

Schedule Generated
Faculty Added
Room Updated
Section Created

FACULTY HUB:

Use enterprise-grade table design with real-time filtering.

FILTER BAR:

Search Faculty
Department Dropdown
Classification Dropdown
Status Dropdown


Add Faculty Button

FACULTY TABLE COLUMNS:

Faculty ID
Name
Department
Classification
Current Load
Status
Actions

Example:

F-001 | Alejandro Burgos Jr. | ICT | Full-Time | 18/24 | Active | View

Status Tags:

Active = Green
Inactive = Amber
Archived = Gray

ACTIONS COLUMN:

Only display VIEW.

Do not place Edit or Delete buttons directly in tables.

VIEW FACULTY PROFILE DRAWER:

Profile
Workload
Schedule
Qualifications
Availability

PROFILE:

Faculty ID
Name
Department
Classification
Status
Email
Contact Number

WORKLOAD:

Assigned Subjects
Assigned Sections
Current Load
Maximum Load

SCHEDULE:

Faculty Schedule
Assigned Rooms

QUALIFICATIONS:

FCCE Records
Qualified Subjects
Specializations

AVAILABILITY:

Monday to Saturday
Time From
Time To

PRIMARY ACTIONS:

Edit Details
Manage Workload
View Schedule
Generate Report
Change Status
Archive Faculty

ADD FACULTY MODAL:

Required Fields:

Faculty ID
First Name
Middle Name
Last Name
Email Address
Contact Number
Department
Classification
Status
Specialization
Preferred Subjects
Assign as Section Adviser

CLASSIFICATION OPTIONS:

Full-Time
Part-Time
Part-Time Full Load

AUTOMATIC TEACHING LOAD RULE:

Full-Time = 24
Part-Time = 12
Part-Time Full Load = 24

FACULTY EXAMPLES:

Alejandro Burgos Jr.
Ma. Claret Delos Santos
John Vincent Malquisto
Andrea Ponteres
Airol Jay Zabala
Mark Albert Natividad

FCCE LOGIC:

Use only:

Qualified
Not Qualified
Not Taken

No percentages.

AI scheduling must validate FCCE qualification before assigning a subject.

CURRICULUM MANAGEMENT:

Display curriculum grouped by:

Year Level
Semester
Program

TABLE COLUMNS:

Course Code
Course Title
Credit
LEC
LAB
Pre-Requisite
Co-Requisite
Equivalent
Status
Action

Credit Calculation:

Credit = LEC + LAB

Add Course Modal:

Course Code
Course Title
LEC Units
LAB Units
Department
Status

Related Course Options:

Pre-Requisite
Co-Requisite
Equivalent Subject

SUBJECT MANAGEMENT:

Fields:

Subject Code
Subject Title
Units
Lecture Hours
Laboratory Hours
Department
Curriculum
Prerequisite
Status

Prerequisites must only appear inside Subject Details and never in sidebar navigation.

SECTION MANAGEMENT:

CREATE SECTION FORM:

Section Name
Campus
Academic Year
Semester
Program
Year Level
Curriculum
Section Type
Student Capacity
Adviser

Section Types:

Block Section
Irregular Section

Examples:

BSIT-1A
BSIT-1B
BSIT-2A
BSBA-1A
BSHM-1A
BSTM-1A

SECTION AUTO-NAMING RULE:

Program + Year Level + Section Identifier

Automatically load curriculum subjects into the section.

FACULTY AVAILABILITY MANAGEMENT
Conditional Availability Scheduler

When Classification is:

Part-Time
Part-Time Full Load

Display the Faculty Availability Scheduler automatically.

When Classification is:

Full-Time

Hide the Availability Scheduler by default.

Allow optional manual configuration.

Faculty Availability UI

Display a dedicated availability section identical to traditional faculty scheduling systems.

Available Days:

☐ Monday

☐ Tuesday

☐ Wednesday

☐ Thursday

☐ Friday

☐ Saturday

For each selected day:

Time From

Time To

Example:

☑ Monday
7:00 AM - 12:00 PM

☑ Wednesday
1:00 PM - 6:00 PM

☑ Friday
8:00 AM - 5:00 PM

Availability Validation Rules

Time From must be earlier than Time To.

Overlapping availability entries are not allowed.

At least one available day is required for:

Part-Time
Part-Time Full Load
AI Scheduling Integration

During schedule generation:

The AI must only assign classes within the faculty's declared availability.

Example:

Faculty Available:
Monday 7AM–12PM

AI must not assign:
Monday 1PM–4PM

Faculty Profile Drawer

Add a dedicated tab:

Availability

Display:

Day	From	To
Monday	7:00 AM	12:00 PM
Wednesday	1:00 PM	6:00 PM
Friday	8:00 AM	5:00 PM
COMPLETE CRUD REQUIREMENTS

All major modules must support full CRUD functionality.

Faculty Hub CRUD

Create Faculty

Read Faculty

Update Faculty

Archive Faculty

Important:

Do NOT permanently delete faculty records.

Use Archive instead.

Subject Management CRUD

Create Subject

View Subject

Update Subject

Delete Subject

Restore Archived Subject

Curriculum CRUD

Create Curriculum

View Curriculum

Update Curriculum

Delete Curriculum

Restore Curriculum

Section Management CRUD

Create Section

View Section

Update Section

Archive Section

Restore Section

Room Management CRUD

Create Room

View Room

Update Room

Archive Room

Restore Room

Schedule CRUD

Create Schedule

View Schedule

Update Schedule

Post Schedule

Unpost Schedule

Archive Schedule

ACTIONS COLUMN RULE
Faculty Table

Actions:

👁 View

Only

No Edit button

No Delete button

Subject Table

Actions:

👁 View

✏ Edit

🗃 Archive

Curriculum Table

Actions:

👁 View

✏ Edit

🗃 Archive

Room Table

Actions:

👁 View

✏ Edit

🗃 Archive

Section Table

Actions:

👁 View

✏ Edit

🗃 Archive

ARCHIVE SYSTEM

Instead of deleting:

Move records to Archives Module.

Archived records can be:

Viewed
Restored
Permanently Removed by Admin only
COURSE SELECTION TABLE:

Checkbox
Course Code
Description
Units
LEC Hours
LAB Hours

Support bulk selection.

ROOM MANAGEMENT:

Fields:

Room Code
Room Name
Building
Floor
Room Type
Capacity
Status

Room Types:

Lecture Room
Computer Laboratory
Laboratory
Hospitality Laboratory
Tourism Laboratory

MASTER SCHEDULE:

Use section-based scheduling.

Never use subject-based scheduling.

WEEKLY GRID:

Monday to Sunday

7:00 AM to 9:00 PM

SCHEDULE CARDS:

Display:

Subject Code
Room
Faculty
Time

Support:

Drag-and-drop
Move
Resize

CONTEXT MENU:

Post Schedule
Unpost Schedule
Open Class
Lock Class
Print Class List
Change Subject
Remove Assignment

SECTION SIDEBAR:

Schedule Version
Room Assignment
Instructor
Faculty Credit
Total Units
Section Capacity

AI RECOMMENDER:

Do not create a chatbot.

Do not create a floating button.

AI must automatically activate inside Master Schedule.

AI must analyze:

Faculty Qualification
FCCE Records
Faculty Availability
Faculty Load
Room Availability
Room Capacity
Department Matching
Conflict Detection

Generate recommendations automatically.

CONFLICT TYPES:

Faculty Conflict
Room Conflict
Section Conflict
Overload Conflict
Qualification Conflict

VALIDATION RULES:

Section Capacity cannot exceed Room Capacity.

Example:

Section Capacity = 50

Room Capacity = 40

Display validation error.

COLOR CODING:

General Education = Light Blue

Major Subjects = STI Yellow

Laboratory Subjects = Dark Blue

Locked Classes = Gray

Conflict Classes = Red

REPORTS:

Faculty Workload Report
Room Utilization Report
Schedule Report
Conflict Report
Department Report
Qualification Report

EXPORT OPTIONS:

PDF
Excel (.xlsx)
Word (.docx)
Print

ARCHIVES:

Archive only.

Do not permanently delete records.

AUDIT LOGS:

Track:

User
Action
Module
Date
Time

SETTINGS MODULE:

General
Academic Settings
Scheduling Settings
Notifications
Integrations
Security
Backup and Maintenance

FOOTER:

ScheduloLogic v2.1

© 2026 STI College Balagtas

Make sure that each screen has the same size and all buttons and functionalities exist at each screen. also add a JUne 2026 calendar in the dashboard