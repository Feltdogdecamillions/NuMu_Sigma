/*
  # Restore anon SELECT on gallery_images

  ## Summary
  The gallery page is publicly accessible and intentionally shows images to all visitors,
  including unauthenticated ones. The previous migration revoked anon SELECT, which broke
  the public gallery. This migration restores it.

  The table is NOT re-granted to `authenticated` (already handled) — only `anon` is
  restored here so the public gallery page continues to work.

  The RLS policy "Allow public read access to gallery images" already uses USING (true)
  for the `public` role, which is the intended behavior for this table.
*/

GRANT SELECT ON public.gallery_images TO anon;
