import { Roboto,Poppins } from 'next/font/google'

export const font_body = Roboto({
  weight: ['400','700'],
  style:'normal',
  display:'swap',
  subsets:['latin'],
  variable:'--font_body'
})
export const font_display = Poppins({
  weight: ['400','700'],
  style:'normal',
  display:'swap',
  subsets:['latin'],
  variable:'--font-display'
})