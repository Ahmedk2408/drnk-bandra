# drnk Brand Guidelines

## Brand Identity

### Brand Name
**drnk** - always lowercase, minimalist spelling

### Brand Personality
- Modern & Urban
- Minimalist & Sophisticated
- Mumbai/Bandra lifestyle-focused
- Approachable yet premium
- Contemporary & trendsetting

### Brand Location
Bandra, Mumbai, India

---

## Color Palette

### Primary Colors
- **Black**: `#000000` - Primary background, text on light surfaces
- **White**: `#FFFFFF` - Text on dark surfaces, accents, clean space
- **Charcoal**: `#1A1A1A` - Secondary backgrounds, layering

### Accent Colors (Use Sparingly)
Choose ONE primary accent and use consistently:

**Option 1: Earthy Warmth**
- Sage Green: `#A8B5A0` 
- Soft Terracotta: `#C97D60`

**Option 2: Cool Sophistication**
- Dusty Blue: `#8B9EB7`
- Warm Beige: `#D4C5B9`

### Neutral Grays
- `#2D2D2D` - Dark elements
- `#4A4A4A` - Borders, dividers
- `#A0A0A0` - Muted text
- `#E5E5E5` - Light borders
- `#F5F5F5` - Light backgrounds (sparingly)

### Color Usage Rules
- **Backgrounds**: 80% black/charcoal, 15% white/light gray, 5% accent
- **Text**: White on dark backgrounds, black on light backgrounds
- **Accents**: Use for CTAs, hover states, highlights, subtle borders
- **Never**: Pure accent backgrounds, multiple accent colors together, high saturation colors
- **Opacity**: Use accent colors at 10-20% opacity for subtle overlays and shadows

---

## Typography

### Font Families
**Primary**: Inter or Poppins  
**Alternative**: SF Pro Display, Helvetica Neue, System UI

### Font Weights
- Light (300): Subheadings, captions
- Regular (400): Body text
- Medium (500): Navigation, labels
- Semibold (600): Section headers
- Bold (700): Hero text, primary CTAs

### Type Scale
```
Hero Heading: 4rem (64px) - 6rem (96px) - Desktop
Hero Heading: 2.5rem (40px) - 3rem (48px) - Mobile
H1: 3rem (48px) - Desktop, 2rem (32px) - Mobile
H2: 2.25rem (36px) - Desktop, 1.75rem (28px) - Mobile
H3: 1.5rem (24px)
Body Large: 1.125rem (18px)
Body: 1rem (16px)
Small: 0.875rem (14px)
Caption: 0.75rem (12px)
```

### Typography Rules
- **Line Height**: 
  - Body text: 1.6-1.7
  - Headings: 1.2-1.3
  - Captions: 1.4-1.5
- **Letter Spacing**: 
  - Headings: -0.02em (tighter)
  - Body: 0 (normal)
  - All caps: 0.05em-0.1em (wider)
  - Navigation: 0.02em
- **Text Color**: 
  - Primary text: `#FFFFFF` on dark, `#000000` on light
  - Secondary text: `#A0A0A0` (muted gray)
  - Accent text: Use sparingly for emphasis
- **Max Line Length**: 65-75 characters for optimal readability
- **Text Alignment**: 
  - Hero/centered sections: Center-aligned
  - Body content: Left-aligned
  - Never justify text
- **Hierarchy**: Use size, weight, and spacing to create hierarchy—not color

---

## Spacing & Layout

### Spacing System (8px base unit)
Tailwind classes: `2, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96`

```
Extra Tight: 4px (1)
Tight: 8px (2)
Small: 16px (4)
Medium: 32px (8)
Large: 64px (16)
XLarge: 96px (24)
XXLarge: 128px (32)
```

### Layout Rules
- **Section Spacing**: 
  - Mobile: 64px (py-16) vertical between sections
  - Desktop: 96-128px (py-24 to py-32) vertical between sections
- **Container Padding**: 
  - Mobile: 24-32px (px-6 to px-8)
  - Desktop: 64-96px (px-16 to px-24)
- **Grid Gaps**: 
  - Mobile: 16px (gap-4)
  - Desktop: 24-32px (gap-6 to gap-8) for galleries/product grids
- **Max Width**: 1400px (max-w-7xl) for main content container
- **White Space**: Embrace emptiness—generous spacing is premium
- **Breathing Room**: Minimum 24px padding around all text blocks

---

## Visual Style

### Photography Style
- **Aesthetic**: Moody, atmospheric, slightly desaturated, editorial quality
- **Lighting**: Natural light preferred, golden hour, soft shadows
- **Composition**: Rule of thirds, generous negative space, environmental context
- **Color Grading**: Slightly cooled or warmed tones, never over-saturated
- **Subject Matter**: 
  - Products in real-world context
  - Lifestyle shots with authentic moments
  - Bandra street scenes and urban culture
  - Store interior and ambiance
  - Close-up details and textures

### Image Treatment
- **Aspect Ratios**: 
  - Hero: 16:9 or 21:9 (ultrawide)
  - Gallery: 4:3 or 1:1 (square)
  - Products: 1:1 (square) for consistency
- **Hover Effects**: 
  - Subtle zoom: `scale(1.05)` with 300-400ms transition
  - Brightness: Increase by 10-20% or add subtle overlay
- **Overlays**: Use black or accent color at 40-60% opacity for text readability
- **Filters**: Optional slight grain texture for analog, authentic feel
- **Loading**: Use skeleton loaders or blur-up technique

### Iconography
- **Style**: Outline/stroke icons (not filled solid)
- **Stroke Width**: 1.5-2px for consistency
- **Size**: 24px standard, 32px for important actions
- **Source**: Lucide React or Heroicons
- **Color**: Match text color, use accent on hover

---

## Animation & Interaction

### Animation Principles
- **Timing**: 300-400ms for most transitions, 600-800ms for complex animations
- **Easing**: Use ease-in-out or custom cubic-bezier for natural movement
- **Performance**: Use `transform` and `opacity` only (GPU accelerated)
- **Subtlety**: Animations should enhance, not distract
- **Purpose**: Every animation should have a reason

### Scroll Animations
- **Fade In**: Opacity 0 to 1, slight Y-axis movement (20-40px)
- **Slide Up**: translateY(30px) to translateY(0)
- **Stagger**: Delay children by 100-150ms for grid items
- **Parallax**: Subtle background movement (0.5x scroll speed max)
- **Threshold**: Trigger when 10-20% of element is visible

### Hover States
- **Links/Buttons**: 
  - Scale: 1.02-1.05
  - Color shift to accent
  - Underline animation (width: 0 to 100%)
- **Images**: 
  - Scale: 1.05
  - Brightness: 110-120%
  - Optional: Overlay fade
- **Cards**: 
  - Lift: translateY(-4px)
  - Shadow: Increase shadow intensity
  - Border: Subtle accent color glow

### Loading States
- **Skeleton Screens**: Use for content that's loading
- **Spinner**: Minimal, accent color, center of viewport
- **Progressive Loading**: Show low-res image first, then high-res

---

## Component Styling

### Buttons
**Primary CTA**
- Background: Accent color
- Text: White or Black (high contrast)
- Padding: `py-3 px-8` (12px 32px)
- Border Radius: `rounded-none` or `rounded-sm` (0-2px)
- Hover: Brighten 10%, slight scale 1.02
- Font: Semibold (600), letter-spacing: 0.02em

**Secondary Button**
- Background: Transparent
- Border: 1px solid white/accent
- Text: White/Accent
- Padding: `py-3 px-8`
- Hover: Fill with accent, text to contrasting color

**Text Link**
- Underline on hover (animated from left)
- Accent color on hover
- No underline default

### Cards (Product/Gallery)
- Background: `#1A1A1A` or transparent
- Border: 1px solid `#2D2D2D` or none
- Padding: 24px (p-6)
- Hover: Lift with shadow
- Border Radius: `rounded-none` or `rounded-sm`
- Image: Aspect ratio maintained, object-fit: cover

### Navigation
- **Desktop**: Horizontal, sticky on scroll
- **Mobile**: Hamburger menu, full-screen overlay
- Background: Black with backdrop blur on scroll
- Height: 80px (h-20)
- Links: Medium weight (500), letter-spacing: 0.02em
- Hover: Accent color, subtle underline
- Active: Accent color or bolder weight

### Forms
- Input Background: `#1A1A1A`
- Border: 1px solid `#4A4A4A`
- Focus: Accent color border, subtle glow
- Padding: `py-3 px-4`
- Border Radius: `rounded-sm`
- Placeholder: `#A0A0A0`
- Label: Above input, small caps optional

### Footer
- Background: Pure black `#000000`
- Padding: 64px vertical (py-16)
- Text: `#A0A0A0` for secondary info
- Links: White, hover to accent
- Social Icons: Stroke style, 24px, accent on hover
- Divider: 1px `#2D2D2D` above footer

---

## Content Guidelines
... (truncated for push)
