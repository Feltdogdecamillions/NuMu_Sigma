/*
  # Revoke authenticated SELECT grants to hide tables from GraphQL schema

  ## Summary
  These four tables are still visible in the GraphQL schema to signed-in users because
  the `authenticated` role has a schema-level SELECT grant. Revoking the grant hides
  them from GraphQL introspection. The Supabase JS client (PostgREST) and RLS policies
  continue to enforce access correctly — this change only affects GraphQL schema visibility.

  ## Tables
  - `public.gallery_images`
  - `public.member_announcements`
  - `public.member_documents`
  - `public.member_events`

  ## Changes
  - REVOKE SELECT on all 4 tables from `authenticated` role
  - Tables remain accessible through PostgREST/RLS as before; only hidden from GraphQL schema
*/

REVOKE SELECT ON public.gallery_images FROM authenticated;
REVOKE SELECT ON public.member_announcements FROM authenticated;
REVOKE SELECT ON public.member_documents FROM authenticated;
REVOKE SELECT ON public.member_events FROM authenticated;
