// src/types/doctor.ts

export type Doctor = {
  id: string;
  name: string;
  specialization: string;
  department: string;
  qualification: string;
  experience: number;
  image: string;
  bio: string;
  // Optional fields used in the Modal
  languages?: string[];
  opdTimings?: string;
  consultationFee?: number;
};

// If you are passing props to the DoctorsSection component
export interface DoctorsSectionProps {
  doctors: Doctor[];
}