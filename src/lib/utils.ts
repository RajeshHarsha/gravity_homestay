import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Triggers sending email to target.
 * On mobile devices (Android/iOS): Directly launches the official Gmail App.
 * On desktop (Windows/Mac): Opens Gmail Web composer in a new browser tab.
 */
export function openGmail(email = 'gravityhomestays@gmail.com', subject = 'Enquiry Request') {
  if (typeof window === 'undefined') return;

  const userAgent = navigator.userAgent || '';
  const isWindows = /Windows/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent) && !isWindows;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent) && !isWindows;

  const encodedSubject = encodeURIComponent(subject);

  if (isAndroid) {
    // Android: Launch official Gmail app (com.google.android.gm) directly
    window.location.href = `intent://cm?to=${email}&su=${encodedSubject}#Intent;scheme=googlegmail;package=com.google.android.gm;end`;
  } else if (isIOS) {
    // iOS: Open the Gmail app directly using googlegmail scheme
    window.location.href = `googlegmail:///co?to=${email}&subject=${encodedSubject}`;
    setTimeout(() => {
      window.location.href = `mailto:${email}?subject=${encodedSubject}`;
    }, 500);
  } else {
    // Desktop: Open Gmail web composer directly in Chrome / default browser
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}`,
      '_blank',
      'noopener,noreferrer'
    );
  }
}
