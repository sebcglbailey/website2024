import { Montserrat_Alternates, Poppins, Questrial } from 'next/font/google';
import localFont from 'next/font/local';
 
export const montserrat_alternates = Montserrat_Alternates({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });
export const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']});
export const questrial = Questrial({ weight: ['400'], subsets: ['latin']});

export const century_gothic = localFont({ src: '../century-gothic.ttf' })