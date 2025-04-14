import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LeadForm from "./ui/lead_form";

export default function FloatingCTA() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='fixed bottom-6 right-6 z-50 bg-purple-600 text-white shadow-lg hover:bg-purple-700 transition-colors'>
          Quero participar!
        </Button>
      </DialogTrigger>

      <DialogContent className='bg-zinc-900 text-white border border-zinc-700 rounded-xl shadow-2xl max-w-md w-full px-6 py-8'>
        <h3 className='text-xl font-semibold mb-4 text-white'>
          Preencha para garantir sua vaga:
        </h3>
        <LeadForm />
      </DialogContent>
    </Dialog>
  );
}
