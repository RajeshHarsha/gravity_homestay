import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Triggers sending email to target.
 * On Android: Directly launches the official Gmail App via SENDTO intent.
 * On iOS: Directly launches the official Gmail App via googlegmail scheme.
 * On Desktop (Windows/Mac): Opens Gmail Web composer in a new browser tab.
 */
export function openGmail(email = 'gravityhomestays@gmail.com', subject = 'Enquiry Request') {
  if (typeof window === 'undefined') return;

  const userAgent = navigator.userAgent || '';
  const isWindows = /Windows/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent) && !isWindows;
  const isIOS = /iPhone|iPad|iPod/i.test(userAgent) && !isWindows;

  const encodedSubject = encodeURIComponent(subject);

  if (isAndroid) {
    // Android: Launch Gmail app (com.google.android.gm) directly using SENDTO action
    window.location.href = `intent:${email}?subject=${encodedSubject}#Intent;action=android.intent.action.SENDTO;scheme=mailto;package=com.google.android.gm;end`;
  } else if (isIOS) {
    // iOS: Open the Gmail app directly using googlegmail scheme, fallback to mailto
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
