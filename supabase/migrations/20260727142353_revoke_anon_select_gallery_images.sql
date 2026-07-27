/*
  # Revoke anon SELECT on gallery_images

  ## Summary
  The `public.gallery_images` table was visible in the GraphQL schema to
  unauthenticated users because the `anon` role had a SELECT grant on it.
  The gallery is now a members-only feature (gated behind the Members Only
  password screen), so the public (anon) role should no longer be able to
  discover or read the table.

  ## Changes
  - REVOKE SELECT on `public.gallery_images` FROM `anon`.
  - `authenticated` already has SELECT (granted in a prior migration) and is
    not touched here.

  ## Frontend impact
  The Gallery page no longer reads from this table at all — it now renders
  from a static local list of images (`src/data/galleryImages.ts`). The page
  is gated behind the same `sessionStorage` members-auth flag used by the
  Members Only page, so only authenticated members reach it. Revoking anon
  SELECT therefore cannot break the public site; there is no public path to
  the gallery anymore.

  ## Security
  - Removes the GraphQL schema visibility finding for `gallery_images` / anon.
  - RLS policies on the table remain unchanged as a defense-in-depth layer.
*/

REVOKE SELECT ON public.gallery_images FROM anon;
