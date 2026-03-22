/*
  # Create Gallery Table

  1. New Tables
    - `gallery_images`
      - `id` (uuid, primary key)
      - `title` (text) - Image title or event name
      - `description` (text) - Optional caption or description
      - `image_url` (text) - URL to the image
      - `category` (text) - Category: 'events', 'service', 'brotherhood', 'programs'
      - `date` (text) - Date of event or photo
      - `display_order` (integer) - For custom ordering
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on gallery_images table
    - Add policy for public read access (gallery is public)

  3. Sample Data
    - Insert placeholder images using high-quality stock photos from Pexels
    - Populate all four categories with sample images
*/

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text NOT NULL CHECK (category IN ('events', 'service', 'brotherhood', 'programs')),
  date text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access to gallery images"
  ON gallery_images FOR SELECT
  TO public
  USING (true);

-- Insert sample gallery images using Pexels stock photos
INSERT INTO gallery_images (title, description, image_url, category, date, display_order) VALUES
  -- Chapter Events
  ('Annual Scholarship Gala', 'Our biggest fundraising event of the year', 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'May 2025', 1),
  ('Spring Formal 2025', 'Brothers celebrating at our annual spring formal', 'https://images.pexels.com/photos/1543414/pexels-photo-1543414.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'April 2025', 2),
  ('Founders Day Celebration', 'Honoring our fraternity founders and legacy', 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'March 2025', 3),
  ('Chapter Retreat Weekend', 'Team building and brotherhood at our annual retreat', 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'February 2025', 4),
  ('Welcome Week Activities', 'Meeting new members during welcome week', 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'January 2025', 5),
  ('Holiday Celebration', 'Brothers gathering for our annual holiday party', 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=800', 'events', 'December 2024', 6),
  
  -- Community Service
  ('Food Bank Volunteer Day', 'Giving back to our local community', 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800', 'service', 'March 2025', 7),
  ('Beach Cleanup Initiative', 'Protecting our coastal environment', 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800', 'service', 'April 2025', 8),
  ('Youth Mentorship Program', 'Brothers mentoring local high school students', 'https://images.pexels.com/photos/8500347/pexels-photo-8500347.jpeg?auto=compress&cs=tinysrgb&w=800', 'service', 'February 2025', 9),
  ('Community Garden Project', 'Building sustainable community spaces', 'https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=800', 'service', 'May 2025', 10),
  ('School Supply Drive', 'Collecting supplies for local schools', 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=800', 'service', 'August 2024', 11),
  
  -- Brotherhood
  ('Brotherhood Basketball Game', 'Brothers competing in friendly competition', 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800', 'brotherhood', 'March 2025', 12),
  ('Study Group Session', 'Brothers supporting academic excellence', 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800', 'brotherhood', 'April 2025', 13),
  ('Chapter Brothers Gathering', 'Building lifelong bonds of brotherhood', 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800', 'brotherhood', 'February 2025', 14),
  ('Game Night', 'Brothers enjoying fellowship and fun', 'https://images.pexels.com/photos/8111881/pexels-photo-8111881.jpeg?auto=compress&cs=tinysrgb&w=800', 'brotherhood', 'January 2025', 15),
  ('Fishing Trip', 'Brotherhood bonding during outdoor activities', 'https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?auto=compress&cs=tinysrgb&w=800', 'brotherhood', 'March 2025', 16),
  
  -- Special Programs
  ('Leadership Workshop', 'Developing future leaders in our community', 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800', 'programs', 'April 2025', 17),
  ('Professional Development Seminar', 'Career preparation and networking', 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800', 'programs', 'March 2025', 18),
  ('Financial Literacy Workshop', 'Teaching money management skills', 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800', 'programs', 'February 2025', 19),
  ('Health and Wellness Initiative', 'Promoting healthy lifestyles', 'https://images.pexels.com/photos/3768582/pexels-photo-3768582.jpeg?auto=compress&cs=tinysrgb&w=800', 'programs', 'January 2025', 20),
  ('Cultural Awareness Program', 'Celebrating diversity and inclusion', 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800', 'programs', 'May 2025', 21);
