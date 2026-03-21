/*
  # Create Tables for Nu Mu Sigma Chapter Website

  ## Summary
  This migration creates tables for the Phi Beta Sigma fraternity chapter website to store contact submissions, event inquiries, and partnership requests.

  ## New Tables
  
  ### `fraternity_contact_submissions`
  Stores general contact form submissions and inquiries.
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Full name of person contacting
  - `email` (text) - Contact email address
  - `phone` (text, optional) - Phone number
  - `subject` (text) - Subject of inquiry
  - `message` (text) - Inquiry message
  - `submission_type` (text) - Type (contact, partnership, event_inquiry, etc.)
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### `fraternity_support_requests`
  Stores partnership, donation, and sponsorship requests.
  - `id` (uuid, primary key) - Unique identifier
  - `organization_name` (text, optional) - Organization name
  - `contact_name` (text) - Contact person name
  - `email` (text) - Contact email
  - `phone` (text, optional) - Phone number
  - `support_type` (text) - Type (partnership, donation, sponsorship)
  - `message` (text) - Details of support request
  - `created_at` (timestamptz) - Timestamp of submission
  
  ## Security
  - Enable RLS on all tables
  - Allow public insert access for form submissions
  - Restrict read/update/delete to authenticated admin users only
  
  ## Notes
  1. Public users can submit forms but cannot view submissions
  2. Only authenticated users (chapter admins) can view and manage submissions
*/

-- Create fraternity_contact_submissions table
CREATE TABLE IF NOT EXISTS fraternity_contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  submission_type text DEFAULT 'general',
  created_at timestamptz DEFAULT now()
);

-- Create fraternity_support_requests table
CREATE TABLE IF NOT EXISTS fraternity_support_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_name text,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  support_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE fraternity_contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE fraternity_support_requests ENABLE ROW LEVEL SECURITY;

-- Fraternity Contact Submissions Policies
CREATE POLICY "Anyone can submit contact forms"
  ON fraternity_contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON fraternity_contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete contact submissions"
  ON fraternity_contact_submissions FOR DELETE
  TO authenticated
  USING (true);

-- Fraternity Support Requests Policies
CREATE POLICY "Anyone can submit support requests"
  ON fraternity_support_requests FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view support requests"
  ON fraternity_support_requests FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can delete support requests"
  ON fraternity_support_requests FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_fraternity_contact_created_at ON fraternity_contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_fraternity_support_created_at ON fraternity_support_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_fraternity_contact_type ON fraternity_contact_submissions(submission_type);
CREATE INDEX IF NOT EXISTS idx_fraternity_support_type ON fraternity_support_requests(support_type);