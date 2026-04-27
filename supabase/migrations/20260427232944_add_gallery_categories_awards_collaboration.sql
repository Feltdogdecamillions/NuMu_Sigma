/*
  # Add Awards and Collaboration gallery categories

  1. Changes
    - Updates the gallery_images category column to allow 'awards' and 'collaboration' values
    - Existing category constraint is expanded to include new options
*/

DO $$
BEGIN
  ALTER TABLE gallery_images DROP CONSTRAINT IF EXISTS gallery_images_category_check;
  ALTER TABLE gallery_images ADD CONSTRAINT gallery_images_category_check
    CHECK (category IN ('events', 'service', 'brotherhood', 'programs', 'awards', 'collaboration'));
END $$;
