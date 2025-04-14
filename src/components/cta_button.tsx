import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import LeadForm from "./ui/lead_form";
import { useState } from "react";

export default function CtaButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className='mt-10 flex justify-center'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className='bg-purple-600 hover:bg-purple-700 text-white text-base px-6 py-3 rounded-lg shadow-lg transition-colors'>
            Quero participar da mentoria
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-zinc-900 text-white border border-zinc-700 rounded-xl shadow-2xl max-w-md w-full px-6 py-8'>
          <h3 className='text-xl font-semibold mb-4'>
            Preencha para garantir sua vaga:
          </h3>
          <LeadForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
