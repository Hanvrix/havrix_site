import Link from "next/link";
import { HardHat, AlertTriangle, ArrowLeft, Ghost } from "lucide-react";
import Button from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
      
      <FadeIn direction="up">
        <div className="max-w-lg w-full text-center bg-white/5 p-16 rounded-[40px] border border-white/10 backdrop-blur-xl shadow-2xl relative z-10">
          <div className="flex justify-center mb-10">
            <div className="w-24 h-24 bg-brand-primary/10 border border-brand-primary/20 rounded-[32px] flex items-center justify-center group hover:bg-brand-primary transition-all duration-500">
              <Ghost className="h-10 w-10 text-brand-primary group-hover:text-bg-dark group-hover:scale-110 transition-all duration-500" />
            </div>
          </div>

          <div className="inline-flex items-center space-x-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <AlertTriangle className="w-4 h-4 text-brand-primary" />
            <span className="text-[12px] font-black text-white tracking-[3px] uppercase">Sector Unknown</span>
          </div>

          <h1 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            Error <span className="text-brand-primary">404</span>
          </h1>

          <p className="text-lg text-gray-400 font-medium mb-12 leading-relaxed">
            The module you are looking for is currently being engineered by our elite squad. Deployment is scheduled. 
          </p>

          <Link href="/">
            <Button className="w-full sm:w-auto h-[54px] px-10 shadow-2xl shadow-brand-primary/10">
              <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
              Headquarters
            </Button>
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
