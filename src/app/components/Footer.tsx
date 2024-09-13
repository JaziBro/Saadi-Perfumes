import logo from "../../../public/images/logo.png"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Footer() {
    return (
        <div className="mt-10 mb-20">
        <Image alt="logo" src={logo} className="mx-auto block mb-10" />
        <Accordion type="single" collapsible className="w-full gap-y-5">
            <AccordionItem value="item-1">
                <div className="border-black border-b border-t mb-5">
                    <AccordionTrigger>ORDER INFO</AccordionTrigger>
                    <AccordionContent>
                        Order Info
                    </AccordionContent> 
                </div>
            </AccordionItem>
            <AccordionItem value="item-2">
                <div className="border-black border-b border-t mb-5">
                    <AccordionTrigger>SIGN UP AND SAVE</AccordionTrigger>
                    <AccordionContent>
                        Sign Up and Save
                    </AccordionContent> 
                </div>
            </AccordionItem>
            <AccordionItem value="item-3">
                <div className="border-black border-b border-t mb-5">
                    <AccordionTrigger>CONTACT US</AccordionTrigger>
                    <AccordionContent>
                        Contact Us
                    </AccordionContent> 
                </div>
            </AccordionItem>
        </Accordion>
    {/* Footer Copyright */}
    <div className="text-xs tracking-wide mt-4 text-center mb-15">
        ©2024 Saadi Signature
    </div>
</div>

    )
}