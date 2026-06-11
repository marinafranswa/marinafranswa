import React from 'react'
import { Card } from './ui/card';
import { TimelineItem } from '@/Projects/experience';
import {  Circle } from 'lucide-react';

interface ExperienceCardProps {
  item: TimelineItem
}

export default function ExperienceCard({ item }:ExperienceCardProps) {
 return (
   <Card className="border-2 border-black shadow-[4px_4px_0px_0px_black] rounded-md bg-white p-4 font-display">
     <h3 className="font-extrabold text-base">{item.title}</h3>
     <span className="w-3/4 text-center mt-2 text-xs border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_black] bg-pink-400 whitespace-nowrap">
       {item.date}
     </span>
     <p className={`text-sm font-bold mt-2 ${item.orgColor}`}>{item.org}</p>
     <p className="text-sm mt-2">{item.description}</p>
     {item.highlights.length > 0 && (
       <ul className="mt-2 space-y-1">
         {item.highlights.map((highlight, id) => (
           <li key={id} className="text-xs flex gap-2">
             <Circle className="fill-amber-500 size-3"  /> {highlight}
           </li>
         ))}
       </ul>
     )}
   </Card>
 );
}


