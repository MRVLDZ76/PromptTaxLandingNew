interface NotificationSignupData {
  email: string;
  timestamp: string;
  source?: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
}

export async function submitNotificationSignup(
  data: NotificationSignupData,
): Promise<EmailResponse> {
  try {
    const response = await fetch('https://backend.prompt.tax/api/contact/landing/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Newsletter Subscriber',
        email: data.email,
        message: `Newsletter signup from ${data.source || 'website'} at ${data.timestamp}`,
        subject: 'Newsletter Signup'
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: result.message || 'Successfully signed up for notifications'
      };
    } else if (result.errors) {
      const errorMessages = Object.values(result.errors).join(', ');
      throw new Error(errorMessages);
    } else {
      throw new Error(result.error || 'Failed to sign up');
    }
  } catch (error) {
    console.error('Email service error:', error);

    // Fallback: Store locally and log for manual collection
    console.log('NOTIFICATION SIGNUP - MANUAL COLLECTION NEEDED:', data);

    // Store in localStorage as backup
    const notifications = JSON.parse(
      localStorage.getItem('prompttax_notifications') || '[]',
    );
    notifications.push(data);
    localStorage.setItem(
      'prompttax_notifications',
      JSON.stringify(notifications),
    );

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Network error. Please try again.',
    };
  }
}

// Export function to get all stored notifications (for manual collection)
export function getStoredNotifications(): NotificationSignupData[] {
  try {
    return JSON.parse(localStorage.getItem("prompttax_notifications") || "[]");
  } catch {
    return [];
  }
}

// Export function to clear stored notifications (after manual collection)
export function clearStoredNotifications(): void {
  localStorage.removeItem("prompttax_notifications");
}
