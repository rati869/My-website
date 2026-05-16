# Loading Screen Website

A beautiful, responsive loading screen with an animated spinner and custom image support.

## 🎨 Features

- **Custom Image Display** - Shows your own image centered on the screen
- **Animated Spinner** - Smooth rotating loader animation
- **Pulsing Text** - "Loading..." text with breathing effect
- **Gradient Background** - Modern purple-to-blue gradient
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Professional fade-in and transition effects

## 📋 Files

- `index.html` - Main HTML structure
- `style.css` - All styling and animations
- `script.js` - Loading logic and JavaScript functionality
- `loading-image.png` - Your custom image (add this file)

## 🚀 Getting Started

### 1. Add Your Image
Place a file named `loading-image.png` in the same directory as `index.html`. This will be displayed in the center of the loading screen.

### 2. Test Locally
Open `index.html` in your browser to see the loading screen in action.

### 3. Deploy
Push these files to your GitHub repository and enable GitHub Pages in your repository settings.

## 🎨 Customization

### Change Loading Duration
Edit `script.js` and modify the `loadingDuration` value (currently 5000ms = 5 seconds):

```javascript
const loadingDuration = 5000; // Change this value
```

### Change Colors
Edit `style.css` and modify the gradient on the `body` selector:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Image Size
Edit `style.css` and modify the `.loading-image` dimensions:

```css
.loading-image {
    width: 150px;  /* Change width */
    height: 150px; /* Change height */
}
```

### Change Text
Edit `index.html` and modify the loading text:

```html
<p class="loading-text">Your Custom Text</p>
```

## 🔄 After Loading

The JavaScript file includes options for what happens after loading completes:

1. **Redirect to another page** - Uncomment this line in `script.js`:
   ```javascript
   window.location.href = 'main.html';
   ```

2. **Show welcome message** - Uncomment this line:
   ```javascript
   document.body.innerHTML = '<h1>Welcome!</h1>';
   ```

3. **Just log completion** - Default behavior, shows console message

## 📱 Responsive Breakpoints

- **Desktop**: Full-size image and spinner
- **Tablet (≤768px)**: Slightly smaller elements
- **Mobile (≤480px)**: Optimized for small screens

## 💡 Tips

- Use PNG or JPEG format for your loading image
- Recommended image size: 300x300px or larger
- Keep file sizes small for faster loading
- Test on multiple devices for best results

## 📄 License

Feel free to use and modify this loading screen for your projects!
