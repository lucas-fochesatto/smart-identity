import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DropdownMenu = () => (
  <Popover.Panel className="absolute z-10 mt-3 transform px-2 w-screen max-w-xs sm:px-0">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <a href='Quem_Somos'>Quem Somos</a>
          <a href='Suporte'>Suporte</a>
          <a href='Saiba_Mais'>Saiba Mais</a>
      </div>
    </div>
  </Popover.Panel>
);

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-10 w-full bg-gray-200 text-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="small_logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-700',
                    '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
                  )}
                  aria-label="Open main menu"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
                {mobileMenuOpen && <DropdownMenu />}
              </>
            )}
          </Popover>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link href="Quem_Somos" className=" font-semibold leading-6 text-gray-900">
            <span>Quem somos</span>
          </Link>
          <Link href="#" className=" font-semibold leading-6 text-gray-900">
            <span>Suporte</span>
          </Link>
          <Link href="Saiba_Mais" className=" font-semibold leading-6 text-gray-900">
            <span>Saiba mais</span>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
    </header>
  )
}
