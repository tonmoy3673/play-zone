"use client";

import PopupModal from "@/components/Modal/PopupModal";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

interface DeleteProgramModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function DeleteProgramModal({
  isOpen,
  setIsOpen,
}: DeleteProgramModalProps) {
  const handleDeleteProgram = () => {
    console.log("Delete program submitted");
    // TODO: Replace with actual delete logic
    setIsOpen(false);
  };

  return (
    <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[32px] bg-white shadow-[0px_24px_60px_rgba(16,30,67,0.08)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 bottom-[-180px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(103,156,255,0.4)_0%,rgba(103,156,255,0)_70%)] blur-2xl" />
          <div className="absolute -right-44 top-[-200px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(185,208,255,0.32)_0%,rgba(185,208,255,0)_70%)] blur-2xl" />
        </div>

        <header className="relative flex items-center justify-between border-b border-[#EBF1FF] px-6 py-5">
          <h2 className="text-base font-medium text-dark">Delete Program</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex size-10 items-center justify-center rounded-full border border-[#D4E0FB] bg-white/60 text-dark transition hover:bg-white hover:text-[#0f172a]"
            aria-label="Close modal"
          >
            <Icon name="cancel-icon" className="text-dark" />
          </button>
        </header>

        <main className="relative flex flex-col items-center gap-8 px-10 pt-12 pb-10 text-center">
          <div className="flex size-[64px] items-center justify-center rounded-full border border-[rgba(255,0,51,0.1)] bg-linear-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)]">
            <div className="flex size-[64px] items-center justify-center rounded-full">
              <Icon name="delete-icon-red" className="text-[#FF0000] h-8 w-8" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-dark">Delete Program</h3>
            <p className="text-[12px] leading-[1.4] text-paragraph-dark">
              Once you delete a program, there is no going back. This action is
              permanent and will remove all associated data, including athlete
              records, communications, and files.
            </p>
          </div>
        </main>

        <footer className="relative flex flex-wrap items-center justify-between gap-4 border-t border-[#EBF1FF] px-6 py-6">
          <Button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full border border-[rgba(69,127,243,0.1)] bg-[linear-gradient(180deg,rgba(69,127,243,0.05)_0%,rgba(69,127,243,0.12)_100%)] px-8 py-3 text-sm font-medium text-[#276AEE] transition"
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleDeleteProgram}
            className="rounded-full bg-[linear-gradient(148deg,#EB5C5C_16.41%,#FF0000_59.87%)] px-8 py-3 text-sm font-medium text-white transition"
          >
            Delete Program
          </Button>
        </footer>
      </div>
    </PopupModal>
  );
}
