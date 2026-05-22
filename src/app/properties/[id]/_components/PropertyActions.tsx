"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/lib/site";
import { whatsappLink, propertyEnquiryMessage } from "@/lib/utils";

export function PropertyActions({
  title,
  compact = false,
}: {
  title: string;
  compact?: boolean;
}) {
  const wa = whatsappLink(propertyEnquiryMessage(title));
  return (
    <div className={compact ? "flex gap-3" : "flex flex-col gap-3"}>
      <Button
        href={wa}
        external
        variant="primary"
        size={compact ? "md" : "lg"}
        iconLeft={<Icon name="whatsapp" size={18} />}
        className="w-full"
      >
        WhatsApp the owner
      </Button>
      <Button
        href={SITE.phoneHref}
        variant="gold"
        size={compact ? "md" : "lg"}
        iconLeft={<Icon name="phone" size={18} />}
        className="w-full"
      >
        Call now
      </Button>
    </div>
  );
}
