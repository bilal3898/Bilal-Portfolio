import { Code, Link2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2026 Bilal Pasha. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bilalpasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/bilalpasha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:bilal@example.com"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
