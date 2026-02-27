'use server';

import { promises as fs } from 'fs';
import path from 'path';

export interface ContactFormData {
  name: string;
  title: string;
  company: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  comments: string;
}

export interface ContactFormResult {
  success: boolean;
  message: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json');

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResult> {
  const { name, email, comments } = data;

  if (!name || !email || !comments) {
    return { success: false, message: 'Missing required fields' };
  }

  const submission = {
    ...data,
    submittedAt: new Date().toISOString(),
  };

  try {
    // Ensure the data directory exists
    const dir = path.dirname(SUBMISSIONS_FILE);
    await fs.mkdir(dir, { recursive: true });

    // Read existing submissions
    let submissions: unknown[] = [];
    try {
      const existing = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist yet, start with empty array
    }

    // Append new submission
    submissions.push(submission);

    // Write back
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2), 'utf-8');

    return { success: true, message: 'Submission saved successfully' };
  } catch (error) {
    console.error('Failed to save submission:', error);
    return { success: false, message: 'Failed to save submission' };
  }
}
