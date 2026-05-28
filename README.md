# MediBridge - Doctor Appointment Web App

**MediBridge** is a full-stack web application designed to make healthcare more accessible by simplifying the process of booking doctor appointments. It offers three levels of login: **Patient**, **Doctor**, and **Admin**, each with distinct features tailored to their roles. The app integrates **Razorpay** to facilitate seamless and secure payments. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), MediBridge provides an efficient, user-friendly experience for both patients and healthcare providers.

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay
- **Authentication**: JSON Web Token (JWT)

## 🔑 Key Features

### 1. Three-Level Authentication

- **Patient Login**:
  - Patients can sign up, log in, and book appointments with doctors.
  - Manage appointments (view or cancel).
  - Secure online payment options available (cash or Razorpay).
  - Editable user profile (name, email, address, gender, birthday, profile picture).

- **Doctor Login**:
  - Doctors can log in and manage their appointments.
  - Dashboard displays earnings, number of patients, appointments, and latest bookings.
  - Update profile details (description, fees, address, availability status).
  - View appointment details (patient info, payment mode, appointment status).

- **Admin Login**:
  - Admins can create and manage doctor profiles.
  - Dashboard with analytics: total doctors, total appointments, total patients, and recent bookings.
  - Add new doctors (image, specialty, degree, experience, address, fees, etc.).
  - View and manage all appointments (cancel or mark as completed).

## 🏠 Home Page

- Features a clean, modern layout where users can:
  - **Browse doctors** by specialties.
  - **View top-rated doctors** and their profiles.
  - Explore About, Contact, and other sections.
- Responsive design with a light pink theme for a calm, medical feel.

## 🩺 All Doctors Page

- Lists all available doctors on the platform.
- Users can **filter doctors by specialty**.
- Clicking a doctor's profile redirects to the **Doctor Appointment Page**.

## 📄 About Page

- Provides information about **MediBridge's vision** and mission.
- **Why Choose Us** section highlights:
  - **Efficiency**: Streamlined appointment scheduling.
  - **Convenience**: Book and pay entirely online.
  - **Personalization**: Tailored experience based on user preferences.

## 📞 Contact Page

- Contains **office address** and contact details.
- Section to reach out for support or partnerships.

## 📅 Doctor Appointment Page

- Displays detailed information about the selected doctor:
  - **Profile picture, qualification, experience**, and a brief bio.
  - **Appointment booking**: Choose available date and time slot.
  - Payment options: **Cash or Razorpay**.
  - **Related doctors** section at the bottom.
- Users must **log in or create an account** before booking.

## 👤 User Profile

- Accessible after login.
- Users can view and edit:
  - **Profile picture, name, email, address, gender, and birthday**.
- View list of upcoming and past appointments with status.
- **Logout** option available.

## 🗄️ Admin Panel

- **Dashboard**:
  - Displays: **number of doctors**, **appointments**, **patients**, and **latest bookings**.
  - Option to **cancel bookings**.
- **Add Doctor**:
  - Form to add a new doctor (image, specialty, email, password, degree, address, experience, fees, description).
- **Doctor List**:
  - View all registered doctors with profile management options.
- **Appointments**:
  - Full list including patient name, date, time, doctor name, and fees.
  - Admin actions: **Cancel** or **Mark as Completed**.

## 🩺 Doctor Dashboard

- **Earnings Overview**: Total earnings from completed appointments.
- **Appointments List**: Detailed view of patient appointments with actions to complete or cancel.
- **Profile Management**: Update description, fees, address, and availability.

## 💳 Payment Integration

- Supports:
  - **Cash Payment**
  - **Razorpay** for secure online transactions.

