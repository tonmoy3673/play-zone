"use client";
import Container from "@/components/ui/Container";
import Switch from "@/components/ui/Switch";
import { cn } from "@/lib/utils";
import { toast } from "@/lib/ToastService";
import React, { useCallback, useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import { AnimatedButton } from "@/components/ui/Button";

const VisibilityEnrollment = () => {
  const [publicVisibility, setPublicVisibility] = useState(false);
  const [unlistedVisibility, setUnlistedVisibility] = useState(false);
  const [inviteOnlyVisibility, setInviteOnlyVisibility] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [requestApproval, setRequestApproval] = useState(false);
  const [inviteLinkOnly, setInviteLinkOnly] = useState(false);
  const [inviteLink, setInviteLink] = useState<string>("");
  const [isCopying, setIsCopying] = useState(false);

  const generatedLinkPlaceholder = "https://app.example.com/join/abc123";

  const displayLink = useMemo(() => {
    if (inviteLink) return inviteLink;
    return generatedLinkPlaceholder;
  }, [inviteLink]);

  const handleGenerateLink = useCallback(() => {
    const token = Math.random().toString(36).slice(2, 10);
    const url = `https://app.playzone.com/join/${token}`;
    setInviteLink(url);
    toast.success("Invite link generated");
  }, []);

  const handleCopyLink = useCallback(async () => {
    if (!inviteLink) {
      toast.warning("Generate an invite link before copying");
      return;
    }

    try {
      setIsCopying(true);
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(inviteLink);
        toast.success("Invite link copied to clipboard");
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = inviteLink;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        toast.success("Invite link copied to clipboard");
      }
    } catch (error) {
      console.error("Failed to copy invite link", error);
      toast.error("Unable to copy invite link. Try again.");
    } finally {
      setIsCopying(false);
    }
  }, [inviteLink]);

  const handleRevokeLink = useCallback(() => {
    if (!inviteLink) {
      toast.info("No invite link to revoke");
      return;
    }
    setInviteLink("");
    toast.info("Invite link revoked");
  }, [inviteLink]);
  return (
    <div className="w-full">
      <div className="w-full">
        <Container className="p-6 border border-white rounded-[30px]">
          <div className="">
            {/* Header */}
            <div className="flex flex-col mb-8">
              <h1 className="text-xl font-medium text-black ">
                Visibility & Enrollment
              </h1>
              <span className="text-sm font-normal text-[#141B34B2]">
                Basic details that appear on the explore page for this card
              </span>
            </div>

            <div>
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-[rgb(20,27,52)]">
                Program Visibility
              </label>
              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Public
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      {" "}
                      Listed on Explore page
                    </span>
                  </div>
                  <Switch
                    value={publicVisibility}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPublicVisibility(event.target.checked)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Unlisted
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      {" "}
                      Not shown in search results
                    </span>
                  </div>
                  <Switch
                    value={unlistedVisibility}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setUnlistedVisibility(event.target.checked)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Invite-only
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      {" "}
                      Only accessible via invite link
                    </span>
                  </div>
                  <Switch
                    value={inviteOnlyVisibility}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setInviteOnlyVisibility(event.target.checked)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="my-5">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-[rgb(20,27,52)]">
                Join Method
              </label>
              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Open Join
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      Anyone can join immediately
                    </span>
                  </div>
                  <Switch
                    value={openJoin}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setOpenJoin(event.target.checked)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Request Approval
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      Coach Review join requests
                    </span>
                  </div>
                  <Switch
                    value={requestApproval}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setRequestApproval(event.target.checked)
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-base font-semibold text-dark">
                      Invite Link Only
                    </h2>
                    <span className="text-sm font-normal text-[#141B34B2]">
                      Requires Special innovation link
                    </span>
                  </div>
                  <Switch
                    value={inviteLinkOnly}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setInviteLinkOnly(event.target.checked)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-[rgb(20,27,52)]">
                Invite Link Management
              </label>
              <div className="flex flex-col gap-4 rounded-2xl bg-[rgba(255,255,255,0.6)] p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3 rounded-2xl border border-[#CFE6FA] bg-[#EAF5FD] p-4 md:flex-row md:items-center md:gap-4 md:p-[18px]">
                    <p
                      className={cn(
                        "text-sm font-normal text-dark md:flex-1 md:truncate",
                        !inviteLink && "text-[#141B34B2]"
                      )}
                      title={inviteLink || generatedLinkPlaceholder}
                    >
                      {displayLink}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      disabled={!inviteLink || isCopying}
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200",
                        "bg-linear-to-b from-[#5C8FF7] to-[#276AEE] hover:brightness-110 active:scale-[0.99]",
                        (isCopying || !inviteLink) &&
                          "cursor-not-allowed opacity-70"
                      )}
                    >
                      <Icon name="copy-icon" />
                      {isCopying ? "Copying..." : "Copy Link"}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={handleGenerateLink}
                      className="rounded-full border border-[rgba(21,86,216,0.1)] bg-[rgba(21,86,216,0.15)] px-6 py-2 text-sm font-medium text-[#276AEE] transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
                    >
                      Generate Link
                    </button>
                    <button
                      type="button"
                      onClick={handleRevokeLink}
                      className="rounded-full border border-[rgba(255,0,51,0.1)] bg-linear-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] px-6 py-2 text-sm font-medium text-[#FF0033] transition-all duration-200 hover:brightness-105 active:scale-[0.99]"
                    >
                      Revoke
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-8">
              {/* Save Changes Button */}
              <div className="flex justify-end">
                <AnimatedButton
                  style={{
                    borderRadius: "100px",
                    background:
                      "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                  }}
                  className=" text-white px-5 py-2.5  text-sm font-medium"
                >
                  Save Changes
                </AnimatedButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default VisibilityEnrollment;
