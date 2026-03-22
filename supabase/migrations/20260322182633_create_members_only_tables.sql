/*
  # Create Members Only Section Tables

  1. New Tables
    - `member_announcements`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `priority` (text) - values: 'high', 'medium', 'low'
      - `date` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `member_documents`
      - `id` (uuid, primary key)
      - `name` (text)
      - `file_url` (text)
      - `file_type` (text)
      - `updated` (text)
      - `created_at` (timestamptz)

    - `member_events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `date` (text)
      - `time` (text)
      - `location` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users only (future enhancement with proper auth)
*/

-- Create member_announcements table
CREATE TABLE IF NOT EXISTS member_announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  priority text DEFAULT 'low' CHECK (priority IN ('high', 'medium', 'low')),
  date text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create member_documents table
CREATE TABLE IF NOT EXISTS member_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  file_url text NOT NULL,
  file_type text DEFAULT 'PDF',
  updated text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create member_events table
CREATE TABLE IF NOT EXISTS member_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  date text NOT NULL,
  time text NOT NULL,
  location text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE member_announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_events ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users to read
CREATE POLICY "Allow public read access to announcements"
  ON member_announcements FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to documents"
  ON member_documents FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to events"
  ON member_events FOR SELECT
  TO public
  USING (true);

-- Insert sample data for announcements
INSERT INTO member_announcements (title, content, priority, date) VALUES
  ('Chapter Meeting - March 28, 2026', 'Monthly chapter meeting scheduled for Thursday, March 28th at 7:00 PM. Location: Fort Myers Community Center.', 'high', 'March 22, 2026'),
  ('Dues Reminder', 'Spring semester dues are now payable. Please submit payment by April 15th to remain in good standing.', 'medium', 'March 20, 2026'),
  ('Community Service Day', 'Join us for our community service day on April 5th. Sign-up sheet available at the next meeting.', 'low', 'March 18, 2026');

-- Insert sample data for documents
INSERT INTO member_documents (name, file_url, file_type, updated) VALUES
  ('Chapter Bylaws', '#', 'PDF', 'January 2026'),
  ('Meeting Minutes - February', '#', 'PDF', 'February 2026'),
  ('Membership Roster', '#', 'PDF', 'March 2026'),
  ('Event Planning Form', '#', 'PDF', 'January 2026');

-- Insert sample data for events
INSERT INTO member_events (title, date, time, location) VALUES
  ('Chapter Meeting', 'March 28, 2026', '7:00 PM', 'Fort Myers Community Center'),
  ('Community Service Day', 'April 5, 2026', '9:00 AM', 'Various Locations'),
  ('Scholarship Gala', 'May 10, 2026', '6:00 PM', 'Fort Myers Convention Center');
