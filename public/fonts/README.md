# Custom Font Setup

## Option 1: Using Locally Installed Fonts (Recommended)

### Step 1: Check Available Fonts
1. Open your browser and navigate to: `http://localhost:3000/check-fonts.html`
2. This will show you which fonts are already installed on your system
3. Look for fonts marked with ✅ (Available)

### Step 2: Use Local Fonts in Your App
The system is already configured to use common local fonts. You can use these Tailwind classes:

#### FK Screamer Font Family (All Variants)
- `font-fk-screamer` - FK Screamer (regular)
- `font-fk-screamer-legacy` - FK Screamer Legacy
- `font-fk-screamer-condensed` - FK Screamer Condensed
- `font-fk-screamer-extended` - FK Screamer Extended

#### Other Popular Fonts
- `font-inter` - Inter font family
- `font-poppins` - Poppins font family  
- `font-nunito` - Nunito font family
- `font-montserrat` - Montserrat font family
- `font-roboto` - Roboto font family
- `font-open-sans` - Open Sans font family
- `font-lato` - Lato font family
- `font-source-sans` - Source Sans Pro font family
- `font-system` - System default fonts

### Step 3: Customize for Your Specific Fonts
If you have other fonts installed locally, update `src/app/globals.css`:

```css
@font-face {
  font-family: 'CustomFont';
  src: local('YourFontName'), 
       local('YourFontName-Regular'),
       /* Add more local font variations here */
       url('/fonts/fallback-font.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

## Option 2: Using Font Files from Storage

### FK Screamer Font Family Files
Replace these placeholder files with your actual FK Screamer font files:

**Regular FK Screamer:**
- `fk-screamer.woff2` (Regular weight)
- `fk-screamer-bold.woff2` (Bold weight)
- `fk-screamer-light.woff2` (Light weight)
- `fk-screamer-italic.woff2` (Italic style)

**FK Screamer Legacy:**
- `fk-screamer-legacy.woff2` (Regular weight)
- `fk-screamer-legacy-bold.woff2` (Bold weight)

**FK Screamer Condensed:**
- `fk-screamer-condensed.woff2` (Regular weight)
- `fk-screamer-condensed-bold.woff2` (Bold weight)

**FK Screamer Extended:**
- `fk-screamer-extended.woff2` (Regular weight)
- `fk-screamer-extended-bold.woff2` (Bold weight)

### How to Add Your Custom Font Files

1. **Replace the placeholder files** in this directory with your actual font files
2. **Supported font formats** (in order of preference):
   - `.woff2` (best compression, modern browsers)
   - `.woff` (good compression, older browser support)
   - `.ttf` (larger file size, universal support)

3. **Font file naming convention:**
   - Regular: `font-name.woff2`
   - Bold: `font-name-bold.woff2`
   - Light: `font-name-light.woff2`
   - Italic: `font-name-italic.woff2`
   - Condensed: `font-name-condensed.woff2`
   - Extended: `font-name-extended.woff2`

4. **Update the font references** in `src/app/globals.css` if you change the file names

## How It Works

The system tries fonts in this order:
1. **Local fonts** (installed on your system) - FASTEST ⚡
2. **Web fonts** (font files in `/public/fonts/`) - FALLBACK 📁
3. **System fallbacks** (built-in browser fonts) - ULTIMATE FALLBACK 🛡️

This ensures the fastest loading and best performance.

## FK Screamer Font Weights & Styles Available

| Variant | Regular | Bold | Light | Italic | Condensed | Extended |
|---------|---------|------|-------|--------|-----------|----------|
| FK Screamer | ✅ | ✅ | ✅ | ✅ | ➖ | ➖ |
| FK Screamer Legacy | ✅ | ✅ | ➖ | ➖ | ➖ | ➖ |
| FK Screamer Condensed | ✅ | ✅ | ➖ | ➖ | ✅ | ➖ |
| FK Screamer Extended | ✅ | ✅ | ➖ | ➖ | ➖ | ✅ |

## Current Configuration

The FK Screamer fonts are now applied to:
- Brand name "ContentHub" (uses custom font stack with FK Screamer priority)
- All section headings (h1, h2, h3, h4)
- Call-to-action buttons
- Navigation links
- Statistics and important metrics

You can add specific FK Screamer font classes to any element.

## Font Optimization Tips

- ✅ **Use local fonts first** - Fastest loading, no network requests
- ✅ **Use `font-display: swap`** for better performance
- ✅ **Preload important fonts** in your HTML head
- ✅ **Use woff2 format** for the smallest file sizes
- ✅ **Consider subsetting fonts** to include only needed characters
- ✅ **Test across different devices** as font availability varies

## Examples

```jsx
// Use FK Screamer variants
<h1 className="font-fk-screamer text-4xl font-bold">FK Screamer Title</h1>
<h2 className="font-fk-screamer-legacy text-2xl">FK Screamer Legacy</h2>
<h3 className="font-fk-screamer-condensed text-xl">FK Screamer Condensed</h3>
<h4 className="font-fk-screamer-extended text-lg">FK Screamer Extended</h4>

// Use with different weights (if available)
<p className="font-fk-screamer font-light">Light weight</p>
<p className="font-fk-screamer font-normal">Regular weight</p>
<p className="font-fk-screamer font-bold">Bold weight</p>
<p className="font-fk-screamer italic">Italic style</p>

// Use the custom font (tries FK Screamer first, then other fonts)
<h2 className="font-custom text-2xl">Custom Font Stack</h2>

// Try different options
<p className="font-inter">Inter text</p>
<p className="font-poppins">Poppins text</p>
```

## Installation Priority

The font loading priority is:
1. **FK Screamer Legacy** (highest priority)
2. **FK Screamer** (regular)
3. **Inter** (fallback)
4. **Poppins** (fallback)
5. **System fonts** (ultimate fallback)

## Popular Font Sources

- **Google Fonts** (free) - Download and install locally
- **Adobe Fonts** (subscription) - Available if you have Creative Cloud
- **Font Squirrel** (free)
- **MyFonts** (premium)
- **System fonts** - Already installed on your OS

## Current Configuration

The custom font is currently applied to:
- Brand name "ContentHub" 
- All section headings (h1, h2, h3, h4)
- Call-to-action buttons
- Navigation links
- Statistics and important metrics

You can add `font-custom` or specific font classes to any element.

## Font Optimization Tips

- ✅ **Use local fonts first** - Fastest loading, no network requests
- ✅ **Use `font-display: swap`** for better performance
- ✅ **Preload important fonts** in your HTML head
- ✅ **Use woff2 format** for the smallest file sizes
- ✅ **Consider subsetting fonts** to include only needed characters
- ✅ **Test across different devices** as font availability varies

## Examples

```jsx
// Use a specific local font
<h1 className="font-inter text-4xl font-bold">Title</h1>

// Use the custom font (tries local first, then web fonts)
<h2 className="font-custom text-2xl">Heading</h2>

// Use system fonts as fallback
<p className="font-system">Body text</p>
``` 