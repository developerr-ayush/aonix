# AONIX Website Documentation

## Welcome

Welcome to the AONIX website project! This guide will help you understand how to run the project locally, prepare it for production, and make the most out of its features.

### Getting Started

If you want to work on the AONIX website on your own computer, follow these steps:

1. **Open your terminal.**
2. **Go to the project directory.**
3. **Run this command:**

    ```bash
    npm run dev
    ```

This will start a local server, and you can see the website by going to [http://localhost:3000](http://localhost:3000).

### Production Build

When you're ready to make the website public, use this command:

```bash
npm run build
```

This creates a `dist/` folder with the finished website ready for production.

### Image Compression

The project automatically optimizes [jpg/png/jpeg] images for better performance:

- **For [jpg/png/jpeg] images:**
  - Compression to WebP format.
  - Quality set to 80%.
  - Lossless set to false.
- **Other image types (e.g., svg or gif):**
  - The compressor simply copies the files.

This ensures your images are optimized for the web, making your website faster without sacrificing quality.

- make sure to add your images in img/ folder and then run the project as it will compress after wards
 
## SCSS

The project uses SCSS for styling, and Dart SCSS is used for compilation. Here are some key points:

- **Compilation:** Dart SCSS is used to compile SCSS.
- **Optimization:** Group PostCSS, CSSnano, and Group Media Queries are employed to efficiently compress and run SCSS.

By using SCSS and these tools, the website maintains a clean and organized style while ensuring optimal performance.