import { Cpu } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative">
        <Cpu className="h-8 w-8 text-cyan-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
      </div>
      <div className="font-poppins font-bold text-xl tracking-tight text-gray-900 dark:text-white">
        <span>Justy</span>
        <span className="text-orange-500">Tech</span>
      </div>
    </Link>
  );
}