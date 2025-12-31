// Shared API types between client and server

export interface DemoResponse {
  message: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone?: string;
  firmSize?: string;
  inquiryType?: string;
  message: string;
}

export interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  firmSize?: string;
  message?: string;
}

export interface DemoRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  title: string;
  clientCount: string;
  urgency: string;
  message: string;
  preferredTime: string;
  interests: string[];
}
