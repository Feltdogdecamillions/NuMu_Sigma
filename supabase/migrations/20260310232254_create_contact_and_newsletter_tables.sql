/*
  # Create Contact Forms and Newsletter Subscription Tables

  ## Summary
  This migration creates tables to store contact form submissions and newsletter email signups for the Grants Made Simple consulting website.

  ## New Tables
  
  ### `contact_submissions`
  Stores contact form and consultation inquiry submissions from website visitors.
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Full name of the person submitting
  - `email` (text) - Contact email address
  - `phone` (text, optional) - Phone number
  - `organization` (text, optional) - Nonprofit organization name
  - `message` (text) - Inquiry message or details
  - `submission_type` (text) - Type of submission (contact, consultation, etc.)
  - `created_at` (timestamptz) - Timestamp of submission
  
  ### `newsletter_subscribers`
  Stores email addresses for newsletter and resource updates.
  - `id` (uuid, primary key) - Unique identifier for each subscriber
  - `email` (text, unique) - Subscriber email address
  - `subscribed_at` (timestamptz) - Timestamp of subscription
  - `is_active` (boolean) - Whether subscription is active
  
  ## Security
  - Enable RLS on both tables
  - Allow public insert access (for form submissions)
  - Restrict read/update/delete to authenticated admin users only
  
  ## Notes
  1. Public users can submit forms but cannot view submissions
  2. Only authenticated users (admins) can view and manage submissions
  3. Email uniqueness is enforced for newsletter subscribers
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  organization text,
  message text NOT NULL,
  submission_type text DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Contact Submissions Policies
-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can delete submissions
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions FOR DELETE
  TO authenticated
  USING (true);

-- Newsletter Subscribers Policies
-- Allow anyone to subscribe
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Authenticated users can view subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update subscriber status
CREATE POLICY "Authenticated users can update subscribers"
  ON newsletter_subscribers FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete subscribers
CREATE POLICY "Authenticated users can delete subscribers"
  ON newsletter_subscribers FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_active ON newsletter_subscribers(is_active) WHERE is_active = true;