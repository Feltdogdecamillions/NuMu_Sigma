/*
  # Fix Security Issues

  ## Changes Made

  1. **Remove Unused Indexes**
     - Drop `idx_contact_submissions_created_at`
     - Drop `idx_newsletter_subscribers_email`
     - Drop `idx_newsletter_subscribers_active`
     - Drop `idx_fraternity_contact_created_at`
     - Drop `idx_fraternity_support_created_at`
     - Drop `idx_fraternity_contact_type`
     - Drop `idx_fraternity_support_type`

  2. **Fix RLS Policies - Make Them Restrictive**
     
     ### contact_submissions table
     - Replace overly permissive INSERT policy with email validation
     - Replace unrestricted DELETE policy with admin-only access
     
     ### newsletter_subscribers table
     - Replace overly permissive INSERT policy with email validation
     - Replace unrestricted UPDATE policy with self-management only
     - Replace unrestricted DELETE policy with admin-only access
     
     ### fraternity_contact_submissions table
     - Replace overly permissive INSERT policy with email validation
     - Replace unrestricted DELETE policy with admin-only access
     
     ### fraternity_support_requests table
     - Replace overly permissive INSERT policy with email validation
     - Replace unrestricted DELETE policy with admin-only access

  ## Security Improvements

  - All DELETE operations now require admin role via app_metadata
  - INSERT policies include basic validation checks
  - UPDATE policies require ownership or admin privileges
  - No more policies with USING (true) or WITH CHECK (true)
*/

-- Remove unused indexes
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
DROP INDEX IF EXISTS idx_newsletter_subscribers_email;
DROP INDEX IF EXISTS idx_newsletter_subscribers_active;
DROP INDEX IF EXISTS idx_fraternity_contact_created_at;
DROP INDEX IF EXISTS idx_fraternity_support_created_at;
DROP INDEX IF EXISTS idx_fraternity_contact_type;
DROP INDEX IF EXISTS idx_fraternity_support_type;

-- Fix contact_submissions RLS policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete submissions" ON contact_submissions;

CREATE POLICY "Public can submit valid contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND message IS NOT NULL
    AND length(message) > 0
  );

CREATE POLICY "Admins can delete contact submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

-- Fix newsletter_subscribers RLS policies
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can update subscribers" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Authenticated users can delete subscribers" ON newsletter_subscribers;

CREATE POLICY "Public can subscribe with valid email"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  );

CREATE POLICY "Subscribers can update own subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (
    email = (auth.jwt()->>'email')
  )
  WITH CHECK (
    email = (auth.jwt()->>'email')
  );

CREATE POLICY "Admins can delete newsletter subscribers"
  ON newsletter_subscribers
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

-- Fix fraternity_contact_submissions RLS policies
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON fraternity_contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete contact submissions" ON fraternity_contact_submissions;

CREATE POLICY "Public can submit valid fraternity contact forms"
  ON fraternity_contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND message IS NOT NULL
    AND length(message) > 0
  );

CREATE POLICY "Admins can delete fraternity contact submissions"
  ON fraternity_contact_submissions
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );

-- Fix fraternity_support_requests RLS policies
DROP POLICY IF EXISTS "Anyone can submit support requests" ON fraternity_support_requests;
DROP POLICY IF EXISTS "Authenticated users can delete support requests" ON fraternity_support_requests;

CREATE POLICY "Public can submit valid support requests"
  ON fraternity_support_requests
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND message IS NOT NULL
    AND length(message) > 0
  );

CREATE POLICY "Admins can delete support requests"
  ON fraternity_support_requests
  FOR DELETE
  TO authenticated
  USING (
    (auth.jwt()->>'app_metadata')::jsonb->>'role' = 'admin'
  );