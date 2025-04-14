import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonials from "@/data/testimonials.json";
import MotionSection from "./ui/motion_section";

type Testimonial = {
  testimonial: string;
  author: {
    name: string;
    avatarUrl: string;
  };
};

export default function TestimonialsCarousel() {
  return (
    <MotionSection>
      <section className='py-20 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-10 text-white'>
            O que dizem os mentorados
          </h2>
          <Carousel
            className='w-full max-w-3xl mx-auto'
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className='md:basis-1/3 sm:basis-1/2 basis-full'
                >
                  <TestimonialItem {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='bg-zinc-800 text-white hover:bg-purple-600 hover:text-white transition-colors shadow-md h-10 w-10 rounded-full cursor-pointer' />
            <CarouselNext className='bg-zinc-800 text-white hover:bg-purple-600 hover:text-white transition-colors shadow-md h-10 w-10 rounded-full cursor-pointer' />
          </Carousel>
        </div>
      </section>
    </MotionSection>
  );
}

const TestimonialItem = ({ testimonial, author }: Testimonial) => {
  return (
    <div className='bg-zinc-800 hover:bg-zinc-700 transition-colors p-6 rounded-xl shadow-lg h-56 flex flex-col gap-4'>
      <p className='text-zinc-300 italic flex-grow'>"{testimonial}"</p>
      <div className='flex items-center justify-center gap-3'>
        <img
          // src='https://avatars.githubusercontent.com/u/32311268?v=4'
          src={author.avatarUrl}
          alt='Imagem da Mentora'
          className='rounded-full shadow-xl h-10 w-10'
          loading='lazy'
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://avatars.githubusercontent.com/u/32311268?v=4"; // default avatar
          }}
        />
        <p className='text-zinc-300 text-sm'>
          <span className='font-semibold text-white'>{author.name}</span>
          <br />
          <span className='text-xs text-zinc-400'>Mentorado</span>
        </p>
      </div>
    </div>
  );
};


