# LMS Client

A modern Learning Management System (LMS) frontend built with React and Vite. This client application provides separate dashboards for students and educators, enabling course management, enrollment, and interactive learning experiences.

## Features

### For Students
- Browse and search courses
- View course details and ratings
- Enroll in courses
- Access enrolled courses with video player
- Track progress and view testimonials

### For Educators
- Create and manage courses
- Add rich text content using Quill editor
- View enrolled students
- Dashboard for course analytics

### General Features
- User authentication via Clerk
- Responsive design with Tailwind CSS
- Progress tracking with visual indicators
- Star rating system for courses
- YouTube video integration for course content

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Routing:** React Router DOM
- **Rich Text Editor:** Quill
- **Video Player:** React YouTube
- **Progress Bars:** RC Progress
- **Star Ratings:** React Simple Star Rating
- **Utilities:** Humanize Duration, Uniqid

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd LMS/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_CURRENCY=₹
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Pages and Features

### Student Pages

#### Home Page (`/`)
- **Hero Section**: Promotional banner with call-to-action
- **Companies Section**: Display of trusted companies/partners
- **Course Section**: Featured courses with enrollment options
- **Testimonial Section**: Student reviews and ratings
- **Call to Action**: Encouragement to join or explore courses
- **Footer**: Contact information and links

#### Course Details Page (`/course/:id`)
- **Course Overview**: Title, description, and key information
- **Rating and Reviews**: Average rating and review count
- **Course Content**: Expandable sections showing lectures and duration
- **Instructor Information**: Details about the course creator
- **Enrollment Status**: Check if already enrolled
- **Video Preview**: YouTube video integration for course preview
- **Pricing**: Course cost in configured currency (₹)

#### Courses List Page (`/course-list`)
- **Search Functionality**: Filter courses by title
- **Course Grid**: Responsive grid layout of course cards
- **Breadcrumb Navigation**: Home > Course List
- **Search Bar**: Integrated search component
- **Course Cards**: Display course thumbnails, titles, ratings, and prices

#### My Enrollments Page (`/my-enrollments`)
- **Enrolled Courses**: List of courses the student has enrolled in
- **Progress Tracking**: Visual progress indicators for each course
- **Access to Course Content**: Direct links to course player

#### Course Player Page (`/course/:id/player`)
- **Video Player**: YouTube video integration for lecture playback
- **Lecture Navigation**: List of all lectures in the course
- **Progress Tracking**: Mark lectures as completed
- **Course Structure**: Organized by chapters/sections

### Educator Pages

#### Educator Dashboard (`/educator`)
- **Overview Statistics**: Total courses, enrolled students, earnings
- **Quick Actions**: Links to add courses, view enrollments
- **Recent Activity**: Latest course updates or student enrollments

#### Add Course Page (`/educator/add-course`)
- **Course Creation Form**: Title, description, pricing
- **Rich Text Editor**: Quill editor for detailed course descriptions
- **Chapter/Lecture Management**: Add and organize course content
- **Video Upload/Integration**: Add YouTube videos or upload content
- **Pricing Configuration**: Set course price and currency

#### My Courses Page (`/educator/my-courses`)
- **Course Management**: List all created courses
- **Edit Functionality**: Modify existing courses
- **Course Status**: Published/draft status
- **Analytics**: Views, enrollments per course

#### Students Enrolled Page (`/educator/students-enrolled`)
- **Enrollment List**: Students enrolled in educator's courses
- **Student Details**: Names, enrollment dates, progress
- **Course-wise Breakdown**: Students per course
- **Communication Tools**: Contact enrolled students

### Shared Components

#### Navigation
- **Student NavBar**: Links to home, courses, enrollments
- **Educator NavBar**: Dashboard, courses, students links
- **Responsive Design**: Mobile-friendly navigation

#### Authentication
- **Clerk Integration**: Sign up, sign in, user management
- **Role-based Access**: Separate flows for students and educators

#### UI Components
- **Loading Component**: Spinner for async operations
- **Rating Component**: Star rating display and input
- **Progress Bars**: Visual progress indicators
- **Search Bar**: Course search functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
