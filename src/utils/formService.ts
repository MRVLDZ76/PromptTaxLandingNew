interface FormSubmissionData {
  type: "contact" | "demo" | "demo-request";
  timestamp: string;
  data: Record<string, any>;
}

interface FormResponse {
  success: boolean;
  message: string;
}

export async function submitForm(
  formData: FormSubmissionData,
): Promise<FormResponse> {
  try {
    // Map form data to backend API format
    const payload: Record<string, string> = {
      name: formData.data.name || 
            `${formData.data.firstName || ''} ${formData.data.lastName || ''}`.trim() || 
            formData.data.fullName || 
            'Form Submission',
      email: formData.data.email || formData.data.businessEmail || '',
      message: formData.data.message || 
               formData.data.details || 
               `Form submission from ${formData.type} form`,
    };

    // Add optional fields if present
    if (formData.data.phone) payload.phone = formData.data.phone;
    if (formData.data.company || formData.data.firmName) {
      payload.company = formData.data.company || formData.data.firmName;
    }
    
    // Set subject based on form type
    const subjectMap: Record<string, string> = {
      'contact': 'Contact Form Submission',
      'demo': 'Demo Request',
      'demo-request': 'Demo Request',
    };
    payload.subject = subjectMap[formData.type] || 'Form Submission';

    const response = await fetch('https://backend.prompt.tax/api/contact/landing/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: result.message || 'Form submitted successfully',
      };
    } else if (result.errors) {
      const errorMessages = Object.entries(result.errors)
        .map(([field, message]) => `${field}: ${message}`)
        .join(', ');
      throw new Error(errorMessages);
    } else {
      throw new Error(result.error || 'Failed to submit form');
    }
  } catch (error) {
    console.error('Form submission error:', error);

    // Fallback: Store locally and log for manual collection
    console.log('FORM SUBMISSION - MANUAL COLLECTION NEEDED:', formData);

    // Store in localStorage as backup
    const submissions = JSON.parse(
      localStorage.getItem('prompttax_form_submissions') || '[]',
    );
    submissions.push(formData);
    localStorage.setItem(
      'prompttax_form_submissions',
      JSON.stringify(submissions),
    );

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

// Helper functions for specific form types
export async function submitContactForm(data: any): Promise<FormResponse> {
  return submitForm({
    type: "contact",
    timestamp: new Date().toISOString(),
    data,
  });
}

export async function submitDemoForm(data: any): Promise<FormResponse> {
  return submitForm({
    type: "demo",
    timestamp: new Date().toISOString(),
    data,
  });
}

export async function submitDemoRequestForm(data: any): Promise<FormResponse> {
  return submitForm({
    type: "demo-request",
    timestamp: new Date().toISOString(),
    data,
  });
}

// Export function to get all stored form submissions (for manual collection)
export function getStoredFormSubmissions() {
  try {
    return JSON.parse(
      localStorage.getItem("prompttax_form_submissions") || "[]",
    );
  } catch {
    return [];
  }
}

// Export function to clear stored submissions (after manual collection)
export function clearStoredFormSubmissions(): void {
  localStorage.removeItem("prompttax_form_submissions");
}
