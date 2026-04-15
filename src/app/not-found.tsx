import Link from "next/link";
import { HardHat, AlertTriangle, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center bg-white p-12 rounded-[10px] border border-gray-200 shadow-sm">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-slate-50 border border-gray-200 rounded-[10px] flex items-center justify-center">
            <HardHat className="text-[#b45309]" />
          </div>
        </div>

        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-50 border border-gray-200 rounded-md mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Under Construction</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
          Sector Unknown
        </h1>

        <p className="text-[15px] text-slate-600 font-medium mb-10 leading-relaxed">
          The module you are looking for is currently being engineered by our elite squad. Deployment is scheduled. 
        </p>

        <Link href="/">
          <Button className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Headquarters
          </Button>
        </Link>
      </div>
    </div>
  );
}
