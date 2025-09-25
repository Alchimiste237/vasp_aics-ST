# VASP - Valorizing Academic Student Project

A comprehensive Next.js application that connects innovative students with forward-thinking investors. This platform allows students to showcase their projects and enables investors to discover and fund promising projects.

## 🚀 Features

### Landing Page
- **VASP Logo & Branding**: Professional landing page with clear branding
- **Registration Forms**: Separate registration forms for students and investors
- **Login Forms**: Streamlined login process for both user types
- **Project Previews**: Featured projects showcase with status indicators
- **Quick Access**: Direct links to all user interfaces

### Student Interface
- **Left Sidebar Navigation**: Easy access to all student features
- **Profile Settings**: Complete profile management with edit capabilities
  - Student ID, name, school, field of study
  - Contact information and bio
  - Skills management
  - Graduation year tracking
- **Projects Management**: Full CRUD operations for student projects
  - Create, read, update, and delete projects
  - Status tracking (Starting, Ongoing, Completed)
  - Technology stack management
  - Funding progress tracking
- **View Opportunities**: Browse and respond to investor opportunities
  - Accept or refuse investment opportunities
  - View opportunity details and requirements
- **Discussions**: Access to community discussions and forums
- **General Settings**: Account and notification preferences

### Investor Interface
- **Top Navigation Bar**: Clean navigation with search functionality
- **Discovery**: Browse and discover new projects
  - Advanced search and filtering
  - Category-based project browsing
  - Project status and funding information
- **Project List**: Comprehensive project listings grouped by category
- **Investment Interface**: Detailed project information for investment decisions
  - Market size and competitive advantage
  - Technology stack and timeline
  - Funding goals and current progress
- **Profile Management**: Investor profile and portfolio tracking
- **Settings**: Investment preferences and account management

### Administrator Interface
- **System Overview**: Dashboard with key statistics and recent activities
- **User Management**: Complete user administration
  - User status management (Active, Suspended, Pending)
  - User type management (Student, Investor)
  - Registration date and activity tracking
- **Project Management**: Project approval and oversight
  - Project status management
  - Approval/rejection workflow
  - Category and funding tracking
- **Investment Tracking**: Investment statistics and management
- **System Settings**: Platform configuration and maintenance

### Visitor Interface
- **Public Project Browsing**: Browse projects without registration
- **Advanced Search**: Search by project name, student, or technology
- **Category Filtering**: Filter projects by technology category
- **Sorting Options**: Sort by date, funding, or popularity
- **Project Details**: Comprehensive project information display
- **Statistics Display**: Platform statistics and success metrics

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **UI Components**: Custom React components
- **Icons**: Heroicons and custom SVG icons
- **Responsive Design**: Mobile-first approach

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page with registration/login
│   ├── layout.tsx            # Root layout with metadata
│   ├── student/
│   │   └── page.tsx          # Student dashboard
│   ├── investor/
│   │   └── page.tsx          # Investor dashboard
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   └── visitor/
│       └── page.tsx          # Public project browsing
├── components/
│   └── Navigation.tsx        # Reusable navigation component
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Indigo (#4F46E5)
- **Secondary**: Green (#059669) for investors
- **Accent**: Purple (#7C3AED) for visitors
- **Neutral**: Gray scale for text and backgrounds

### User Experience
- **Responsive Design**: Works on all device sizes
- **Intuitive Navigation**: Clear navigation patterns for each user type
- **Status Indicators**: Visual status indicators for projects and users
- **Interactive Elements**: Hover effects and smooth transitions
- **Form Validation**: Client-side form validation and feedback

### Accessibility
- **Semantic HTML**: Proper HTML structure and semantics
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG compliant color contrast ratios

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 📱 User Interfaces

### Quick Access Links
- **Landing Page**: `/` - Registration and login forms
- **Student Dashboard**: `/student` - Student interface with sidebar
- **Investor Dashboard**: `/investor` - Investor interface with top navigation
- **Admin Panel**: `/admin` - Administrator interface
- **Project Browser**: `/visitor` - Public project browsing

### Navigation
Each interface includes:
- **Consistent Branding**: VASP logo and branding throughout
- **User-Specific Navigation**: Tailored navigation for each user type
- **Quick Access**: Easy switching between different interfaces
- **Logout Functionality**: Secure logout from any interface

## 🔧 Customization

### Adding New Features
1. Create new components in the `components/` directory
2. Add new pages in the `app/` directory
3. Update navigation in `Navigation.tsx`
4. Add new routes in the appropriate user interface

### Styling
- Uses Tailwind CSS for consistent styling
- Custom CSS classes can be added to `globals.css`
- Component-specific styles are co-located with components

### Data Management
- Currently uses mock data for demonstration
- Ready for integration with backend APIs
- State management can be enhanced with Redux or Zustand

## 📝 Comments and Documentation

All code includes comprehensive comments explaining:
- **Component Purpose**: What each component does
- **State Management**: How state is managed and updated
- **Event Handlers**: What happens when users interact
- **Data Flow**: How data flows through the application
- **Styling**: CSS class purposes and responsive design

## 🎯 Future Enhancements

- **Backend Integration**: Connect to real database and APIs
- **Authentication**: Implement proper user authentication
- **Real-time Updates**: WebSocket integration for live updates
- **File Uploads**: Project image and document uploads
- **Payment Integration**: Real investment processing
- **Email Notifications**: Automated email notifications
- **Advanced Analytics**: Detailed analytics and reporting
- **Mobile App**: React Native mobile application

## 📄 License

This project is created for educational purposes as part of a PHP course project.

---

**VASP - Venture & Student Platform**  
*Connecting innovative students with forward-thinking investors to build the future together.*