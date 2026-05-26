/*
  # Fix GraphQL Schema Visibility Security Issues

  ## Summary
  Revoke SELECT privileges from `anon` and `authenticated` roles on tables that should
  not be publicly discoverable via the GraphQL schema. Access to these tables is already
  controlled through RLS policies, but the schema-level grants were making the tables
  visible in the GraphQL API to unauthenticated and all authenticated users.

  ## Tables Fixed
  - `public.contact_submissions` — internal form submissions, admin-only
  - `public.fraternity_contact_submissions` — internal form submissions, admin-only
  - `public.fraternity_support_requests` — internal form submissions, admin-only
  - `public.gallery_images` — controlled via RLS; schema grant revoked from anon/authenticated
  - `public.member_announcements` — members-only content; schema grant revoked
  - `public.member_documents` — members-only content; schema grant revoked
  - `public.member_events` — members-only content; schema grant revoked
  - `public.newsletter_subscribers` — private subscriber list, admin-only

  ## Changes
  - REVOKE SELECT on all 8 tables from `anon` role
  - REVOKE SELECT on all 8 tables from `authenticated` role
  - Re-grant SELECT on `gallery_images` to `authenticated` only (members can view gallery)
  - Re-grant SELECT on `member_announcements`, `member_documents`, `member_events` to `authenticated` only (members-only access controlled by RLS)

  ## Notes
  - Revoking schema-level grants hides tables from the GraphQL schema for those roles
  - RLS policies remain in place as a second layer of defense
  - Gallery images and member content remain accessible to authenticated users via RLS
*/

-- Revoke SELECT from anon on all affected tables
REVOKE SELECT ON public.contact_submissions FROM anon;
REVOKE SELECT ON public.fraternity_contact_submissions FROM anon;
REVOKE SELECT ON public.fraternity_support_requests FROM anon;
REVOKE SELECT ON public.gallery_images FROM anon;
REVOKE SELECT ON public.member_announcements FROM anon;
REVOKE SELECT ON public.member_documents FROM anon;
REVOKE SELECT ON public.member_events FROM anon;
REVOKE SELECT ON public.newsletter_subscribers FROM anon;

-- Revoke SELECT from authenticated on all affected tables
REVOKE SELECT ON public.contact_submissions FROM authenticated;
REVOKE SELECT ON public.fraternity_contact_submissions FROM authenticated;
REVOKE SELECT ON public.fraternity_support_requests FROM authenticated;
REVOKE SELECT ON public.gallery_images FROM authenticated;
REVOKE SELECT ON public.member_announcements FROM authenticated;
REVOKE SELECT ON public.member_documents FROM authenticated;
REVOKE SELECT ON public.member_events FROM authenticated;
REVOKE SELECT ON public.newsletter_subscribers FROM authenticated;

-- Re-grant SELECT to authenticated for tables that members legitimately need to read
-- (RLS policies still enforce row-level ownership/membership checks)
GRANT SELECT ON public.gallery_images TO authenticated;
GRANT SELECT ON public.member_announcements TO authenticated;
GRANT SELECT ON public.member_documents TO authenticated;
GRANT SELECT ON public.member_events TO authenticated;
