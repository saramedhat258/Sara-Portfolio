import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className="py-10 w-full flex flex-col sm:flex-row gap-5 bg-slate-900/100 px-10 text-white justify-between items-center">
            <p>Copyright ©2025 Sara Medhat</p>
            <div className="flex gap-5">
                <Link href="https://github.com/saramedhat258" target='_blank'>
                    <Github />
                </Link>
                <Link href="https://www.linkedin.com/in/sara-medhat-bayoumi/" target='_blank'>
                    <Linkedin />
                </Link>
                <Link href="mailto:sara2003me@gmail.com" target='_blank'>
                    <Mail />
                </Link>
            </div>
        </footer>
    )
}

export default Footer