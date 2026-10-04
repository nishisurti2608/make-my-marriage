# Project documents

The following user-supplied files are preserved as the product and design references:

- [Product requirements](PRD.md)
- [System design](SYSTEM_DESIGN.md)
- [Database design](DATABASE_DESIGN.md)
- [API design](API_DESIGN.md)
- [Project status reference](PROJECT_STATUS.md)

[Local setup and current scaffold](development/LOCAL_SETUP.md)

## Current repository scope

This repository contains only the application scaffold. The implementation and deployment history recorded in PROJECT_STATUS.md and other supplied documents is not evidence that those features or services exist in this checkout. The only implemented HTTP endpoint is GET /api/health; all product endpoints in API_DESIGN.md remain unimplemented here.

The supplied designs differ from the earlier brief on authentication, guest access, permissions, RSVP limits, and gallery behavior. This scaffold implements none of those domain policies. Future feature work should follow the supplied references and resolve any remaining contradictions explicitly before implementation. Vercel, Resend, Cloudflare R2, and Google Places are specified in the supplied system design but are not configured or integrated here.
