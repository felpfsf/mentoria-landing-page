import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type LeadFormProps = {
  onSuccess?: () => void;
};

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setSubmitting(true);

      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        whatsapp: formData.get("whatsapp"),
      };

      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(`Ocorreu um erro ao enviar o formulário: ${error.error}`);
      } else {
        toast.success("Inscrição realizada com sucesso! 🥳");
        form.reset();
      }

      setTimeout(() => {
        onSuccess?.();
      }, 1200);
    } catch (error) {
      toast.error("Ops! Ocorreu um erro ao enviar o formulário.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='space-y-6 w-full max-w-md'>
      <div className='space-y-2'>
        <Label htmlFor='name' className='text-zinc-300'>
          Nome completo
        </Label>
        <Input
          name='name'
          id='name'
          autoComplete='name'
          required
          placeholder='Como podemos te chamar?'
          className='bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:ring-2 focus:ring-purple-600 focus:outline-none'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='email' className='text-zinc-300'>
          E-mail
        </Label>
        <Input
          name='email'
          id='email'
          type='email'
          autoComplete='email'
          required
          placeholder='Seu melhor e-mail'
          className='bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:ring-2 focus:ring-purple-600 focus:outline-none'
        />
      </div>

      <div className='space-y-2'>
        <Label htmlFor='whatsapp' className='text-zinc-300'>
          WhatsApp
        </Label>
        <Input
          name='whatsapp'
          id='whatsapp'
          autoComplete='tel'
          required
          placeholder='(XX) XXXXX-XXXX'
          // pattern='\(?\d{2}\)?\s?\d{4,5}-?\d{4}'
          className='bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 focus:ring-2 focus:ring-purple-600 focus:outline-none'
        />
      </div>

      <Button
        type='submit'
        disabled={submitting}
        className={`w-full bg-purple-600 hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 ${
          submitting ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {submitting ? (
          <>
            <Loader2 className='animate-spin w-4 h-4' />
            <p>Enviando...</p>
          </>
        ) : (
          <>
            <CheckCircle className='w-4 h-4' />
            <p>Quero me inscrever!</p>
          </>
        )}
      </Button>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme='dark'
      />
    </form>
  );
}
