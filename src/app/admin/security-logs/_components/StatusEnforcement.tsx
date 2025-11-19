/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Switch from "@/components/ui/Switch";
import { SectionHeader } from "@/components/shared/SectionHeader";

const StatusEnforcement = () => {
  const [admin2FA, setAdmin2FA] = useState(true);
  const [premium2FA, setPremium2FA] = useState(false);

  return (
    <Card>
      <SectionHeader title="2FA Status & Enforcement" />

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white/60 py-7">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-dark">
                Enforce 2FA for Admins
              </h4>
              <p className="text-xs text-dark/70">
                Required for all admin accounts
              </p>
            </div>

            <Switch
              value={admin2FA}
              onChange={(e: any) => setAdmin2FA(e.target.checked)}
            />
          </div>
        </Card>

        <Card className="bg-white/60 py-7">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-dark">
                Enforce 2FA for Premium
              </h4>
              <p className="text-xs text-dark/70">Optional for premium users</p>
            </div>

            <Switch
              value={premium2FA}
              onChange={(e: any) => setPremium2FA(e.target.checked)}
            />
          </div>
        </Card>

        <Card className="bg-white/60 py-7">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-dark">Grace Period</h4>
              <p className="text-xs text-dark/70">Grace Period</p>
            </div>

            <p className="text-xs font-medium text-dark/70">7 days</p>
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default StatusEnforcement;
