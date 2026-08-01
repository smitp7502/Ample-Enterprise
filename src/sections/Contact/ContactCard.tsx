import { Mail } from "lucide-react";
import { contactEmail } from "../../constants/site";
import { Card } from "../../components/common/Card/Card";
import { cn } from "../../utils/cn";

type ContactCardProps = {
  compact?: boolean;
};

export function ContactCard({ compact = false }: ContactCardProps) {
  return (
    <Card
      className={cn(
        "border-white/10 bg-white/10 p-4 text-white backdrop-blur-md",
        compact ? "min-h-[120px]" : "",
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail size={18} className="text-accent-soft" />
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">
              Email
            </p>
            <p className="text-sm font-semibold">{contactEmail}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
