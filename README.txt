Aangan Realestate - Fixed site bundle

IMPORTANT (video):
- Place your hero video files at:
    assets/video/hero.mp4
    assets/video/hero.webm
  If those files are present, the homepage will use them (best for performance).
- If browser blocks autoplay (some mobile browsers), a fallback poster image will be shown.
- For quick testing the homepage includes a remote MP4 fallback (MDN sample).

Other fixes:
- Improved contact form validation (safer email regex, phone checks).
- Properties filters are case-insensitive and more robust.
- Navbar scroll behavior and video autoplay fallback handling added.
- To fully enable hero autoplay on mobile, ensure video files are muted and 'playsinline' is set (done in code).

To use:
- Upload the folder contents to your web host preserving folder structure.
- Add your real hero video files into assets/video and an optional poster image at assets/images/hero-poster.jpg
