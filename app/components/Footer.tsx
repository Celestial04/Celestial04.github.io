"use client";

export default function Footer() {
  return (
    <footer className="bottom-0 z-50 h-14 text-center bg-background">
      <p>
        Made with 🩷 - Source code available{" "}
        <a
          href="https://github.com/Celestial04/Celestial04.github.io"
          draggable="false"
        >
          here!
        </a>
      </p>
      © 2025 - {new Date().getFullYear()} Celeste04.moe
    </footer>
  );
}
