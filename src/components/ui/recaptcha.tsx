import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReCaptchaProps {
  verified: boolean;
  onVerify: (isVerified: boolean) => void;
  className?: string;
  theme?: "dark" | "light";
  errorMessage?: string;
}

export function ReCaptcha({
  verified,
  onVerify,
  className,
  theme = "dark",
  errorMessage,
}: ReCaptchaProps) {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleClick = () => {
    if (verified || isVerifying) return;
    setIsVerifying(true);

    // Simulate realistic reCAPTCHA token challenge verification
    setTimeout(() => {
      setIsVerifying(false);
      onVerify(true);
    }, 700);
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("inline-flex flex-col items-start gap-1.5", className)}>
      <div
        className={cn(
          "relative flex items-center justify-between w-[302px] h-[76px] rounded-[4px] border px-3 py-2 select-none shadow-xs transition-colors",
          isDark
            ? "bg-[#222224] border-[#38383c] text-white"
            : "bg-[#f9f9f9] border-[#d3d3d3] text-neutral-800",
        )}
      >
        {/* Left: Checkbox + Label */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            role="checkbox"
            aria-checked={verified}
            aria-label="I'm not a robot"
            onClick={handleClick}
            disabled={verified || isVerifying}
            className={cn(
              "size-7 rounded-[3px] border flex items-center justify-center transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500",
              verified
                ? "border-emerald-500 bg-white dark:bg-[#1a1a1a]"
                : isDark
                  ? "border-[#55555c] bg-[#1a1a1c] hover:border-[#777782]"
                  : "border-[#c1c1c1] bg-white hover:border-[#888]",
              isVerifying && "cursor-wait",
            )}
          >
            {isVerifying ? (
              <div className="size-5 rounded-full border-2 border-[#4285F4] border-t-transparent animate-spin" />
            ) : verified ? (
              <Check className="size-5 text-[#0F9D58] stroke-[3]" />
            ) : null}
          </button>

          <span
            onClick={handleClick}
            className={cn(
              "text-[13px] font-normal tracking-tight cursor-pointer",
              isDark ? "text-neutral-200" : "text-neutral-800",
            )}
          >
            I&apos;m not a robot
          </span>
        </div>

        {/* Right: Google reCAPTCHA branding */}
        <div className="flex flex-col items-center justify-center pl-2 text-right">
          {/* Official Google reCAPTCHA Symbol */}
          <div className="relative size-8">
            <svg viewBox="0 0 48 48" className="size-full">
              <path
                d="M24 4C12.95 4 4 12.95 4 24c0 3.73 1.02 7.23 2.8 10.23l4.58-2.65A14.67 14.67 0 0 1 9.33 24c0-8.1 6.57-14.67 14.67-14.67 3.51 0 6.72 1.24 9.24 3.3l3.77-3.77C33.48 5.92 28.98 4 24 4z"
                fill="#1A73E8"
              />
              <path
                d="M44 24c0-3.73-1.02-7.23-2.8-10.23l-4.58 2.65A14.67 14.67 0 0 1 38.67 24c0 8.1-6.57 14.67-14.67 14.67-3.51 0-6.72-1.24-9.24-3.3l-3.77 3.77C14.52 42.08 19.02 44 24 44c11.05 0 20-8.95 20-20z"
                fill="#4285F4"
              />
              <path
                d="M24 18.67c-2.95 0-5.33 2.38-5.33 5.33s2.38 5.33 5.33 5.33 5.33-2.38 5.33-5.33-2.38-5.33-5.33-5.33z"
                fill="#34A853"
              />
            </svg>
          </div>
          <span className="text-[10px] font-semibold tracking-tighter text-neutral-400">
            reCAPTCHA
          </span>
          <div className="flex items-center gap-1 text-[8px] text-neutral-400">
            <a
              href="https://www.google.com/intl/en/policies/privacy/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Privacy
            </a>
            <span>-</span>
            <a
              href="https://www.google.com/intl/en/policies/terms/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Terms
            </a>
          </div>
        </div>
      </div>

      {errorMessage && (
        <p className="text-xs text-rose-400 font-medium animate-in fade-in">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
