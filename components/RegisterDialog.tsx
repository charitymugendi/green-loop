"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RegisterForm from "./RegisterForm";

export default function RegisterDialog() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setSuccess(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuccess(false); // reset message when dialog closes
  };

  return (
    <>
      {/* Button to open the dialog */}
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 py-2"
      >
        Register Now
      </Button>

      {/* Dialog box */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              {success ? "Success!" : "Create an Account"}
            </DialogTitle>
          </DialogHeader>

          {/* Show success message or form */}
          {success ? (
            <div className="text-center mt-4">
              <p className="mb-4">Your account has been created successfully 🎉</p>
              <Button
                variant="default"
                onClick={handleClose}
                className="bg-green-700 text-white hover:bg-green-800"
              >
                Close
              </Button>
            </div>
          ) : (
            <RegisterForm onSuccess={handleSuccess} />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
