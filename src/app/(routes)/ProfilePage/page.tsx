import { NextPage } from 'next';
import StudentProfile from '@/components/frontend/ProfilePage';

const StudentProfilePage: NextPage = () => {
  // You can fetch initial data here if needed
  const initialData = {
    name: 'John Doe',
    age: 18,
    grade: '12th',
    bio: 'A hardworking student passionate about computer science and mathematics.',
    photoUrl: '/default-avatar.png',
  };

  return <StudentProfile initialData={initialData} />;
};

export default StudentProfilePage;