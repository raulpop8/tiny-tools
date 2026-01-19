# Style Guide

Personal reference for design, layout, and UI decisions.

Minimal UI
Strong typography
Lots of whitespace
Few colors, used intentionally
Soft backgrounds (not pure white)
High-contrast text
Subtle borders instead of heavy shadows
Rounded corners, but not cartoonish
Calm accent color (used sparingly)

Backgrounds
Light: warm off-white
Dark: near-black with a hint of blue

Text
Almost-black (not pure black)
Soft white in dark mode

Accent
Single accent color (used for buttons & links only)

---

## Typography

### Headings

```tsx
<h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
<h2 className="text-2xl font-semibold">
<h3 className="text-xl font-semibold">

<p className="text-foreground/80 leading-relaxed">

1️⃣ Global styles

File: src/app/globals.css
Variables: --background, --foreground, --border, --muted, --surface, etc.
Purpose: controls colors, fonts, general spacing across the whole app.
When to change here:
Background color of the page (--background)
Text color (--foreground)
Default border color (--border)
Card background (--surface)
Muted backgrounds (--muted)
Effect: global — affects all components that use these variables.

2️⃣ Navbar

File: src/components/ui/Navbar.tsx (or src/components/Navbar.tsx)
Tailwind classes control:
Background → bg-surface or bg-white
Borders → border-b, border-border
Padding → px-6 py-4
Rounded corners → rounded-xl etc.
Active link background → bg-foreground or custom class
When to change here:
Remove/add navbar border
Change navbar height or padding
Change hover or active link styles
Add shadows or rounded corners

3️⃣ Cards (Tools / Games)

File: src/components/ui/Card.tsx
Tailwind classes control:
Card shape → rounded-xl
Card background → bg-surface
Card border → border border-border
Hover shadow → hover:shadow-[6px_6px_0_0_rgb(0,0,0)]
Tag styling → uses TAGS in src/lib/tags.ts
When to change here:
Card radius, border thickness/color
Shadow strength or direction
Tag colors, size, spacing

4️⃣ Buttons / Inputs

Files:
src/components/ui/Button.tsx
src/components/ui/Input.tsx
Button classes:
Background → bg-primary
Text → text-primary-foreground
Hover shadow → hover:shadow-[4px_4px_0_0_rgb(0,0,0)]
Rounded corners → rounded-lg
Input classes:
Borders → border border-border
Background → bg-surface
When to change here:
Colors (primary, background, text)
Roundedness / padding / hover effects

5️⃣ Pages (Tools / Games)

Files:
src/app/tools/page.tsx
src/app/games/page.tsx
Purpose: defines grid layout of cards
Tailwind classes control:
Grid → grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
Gaps → gap-8
Section padding → p-8 or max-w-6xl mx-auto
When to change here:
Number of columns / responsive layout
Section spacing
Page headings / descriptions

6️⃣ Themeing (Light / Dark)

Defined in globals.css under :root and @media (prefers-color-scheme: dark)
Variables control: background, foreground, surface, border, muted
When to change here:
Adjust overall darkness/lightness of dark mode
Change card hover colors for dark mode
Update default border colors for all components

🔹 Quick rules of thumb
What you want to change	Where to look
Page background	globals.css → --background
Card color / border / hover	Card.tsx + globals.css
Navbar border / background	Navbar.tsx + globals.css
Buttons / Inputs	Button.tsx / Input.tsx
Tags / badges	tags.ts + Card.tsx
Grid layout	tools/page.tsx / games/page.tsx
Dark/light theme colors	globals.css → dark mode variables

